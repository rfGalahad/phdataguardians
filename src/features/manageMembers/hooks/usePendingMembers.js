import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../..//services/supabaseClient";
import { useSnackbar } from "../../../hooks/useSnackbar";


export const usePendingMembers = () => {

  const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();

  const [data, setData] = useState([]); // data
  
  const [fetchLoading, setFetchLoading] = useState(false); // loading state
  const [deleteLoading, setDeleteLoading] = useState(false); // delete loading state
  const [rejectLoading, setRejectLoading] = useState(false); // update status loading state
  const [confirmLoading, setConfirmLoading] = useState(false); // update status loading state

  const [selectedMember, setSelectedMember] = useState(null); // selected member for dialog
  const [selected, setSelected] = useState([]); // selected rows in table for deletion

  const [filterTier, setFilterTier] = useState("All"); // tier filter
  const [filterStatus, setFilterStatus] = useState("All"); // status filter
  const [searchQuery, setSearchQuery] = useState(''); // search query filter

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // delete dialog state

  // Filter members based on selected filters
  const filteredMembers = useMemo(() => {
    return data.filter(m => {
      const matchesTier =
        filterTier === "All" || m.tier === filterTier;

      const matchesStatus =
        filterStatus === "All" || m.paymentStatus === filterStatus;

      const matchesSearch =
        searchQuery.trim() === "" ||
        m.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTier && matchesStatus && matchesSearch;
    });
  }, [data, filterTier, filterStatus, searchQuery]);

  const getMemberData = async () => {
    setFetchLoading(true);

    try {
      const { data, error } = await supabase
        .from("Members")
        .select(`
          *,
          Address(*),
          Payment!inner(*),
          Digital_ID(*)
        `)
        .in("Payment.payment_status", ["Pending", "Rejected"]);

      if (error) {
        console.error("Supabase fetch error:", error);
        setData([]);
        return;
      }

      if (!data) {
        setData([]);
        return;
      }

      const formatDate = (iso) => {
        if (!iso) return "";
        return new Date(iso).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      };
      
      const formatted = data.map((m) => {
        const address = m.Address?.[0];
        const payment = m.Payment?.[0];
        const digital = m.Digital_ID?.[0];

        return {
          id: m.membership_id,
          name: `${m.first_name} ${m.middle_name ?? ""} ${m.last_name} ${m.suffix ?? ""}`.trim(),
          email: m.email || "",
          contact: m.contact_number
            ? `(+63) ${m.contact_number}`
            : "",
          photo: m.photo_url || "",

          address: address
            ? `${address.house_number ?? ""} ${address.street_name ?? ""} ${address.barangay}, ${address.city_municipality}, ${address.province}`
            : "",

          tier: payment?.membership_tier || "",
          paymentRef: payment?.reference_number || "",
          paymentStatus: payment?.payment_status || "",

          confirmedDate: formatDate(digital?.issued_at)
        };
      });

      setData(formatted);
    } catch (err) {
      console.error("Unexpected error:", err);
      showSnackbar(err, "error");
      setData([]);
    } finally {
      setFetchLoading(false);
    }
  };

  const openDeleteDialog = (rows) => {
    setSelected(Array.isArray(rows) ? rows : [rows]);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelected([]);
  }

  // EXTRACT STORAGE PATH FROM PUBLIC URL
  const extractStoragePath = (url) => {
    // after public = member-photos/photos/TEMP-2025-002.jpg
    const afterPublic = url.split("/public/")[1];

    const bucket = afterPublic.split("/")[0]; // member-photos
    const path = afterPublic.replace(bucket + "/", ""); // photos/TEMP-2025-002.jpg

    return { bucket, path };
  };

  const handleConfirmDelete = async () => {

    if (!selected.length) return;
    setDeleteLoading(true);

    try {
      const memberIds = selected.map(item => 
        typeof item === 'string' ? item : item.id
      );

      // 1. GET member photo URLs
      const { data: membersToDelete, error: fetchError } = await supabase
        .from("Members")
        .select("membership_id, photo_url")
        .in("membership_id", memberIds);

      if (fetchError) throw fetchError;

      // 2. Extract storage paths
      const filesToDelete = membersToDelete
        .map((m) => {
          if (!m.photo_url) return null;

          const { bucket, path } = extractStoragePath(m.photo_url);

          return { bucket, path }; // keep bucket+path grouped
        })
        .filter(Boolean);

      // 3. DELETE PHOTOS
      for (const file of filesToDelete) {
        const { error: removeError } = await supabase.storage
          .from(file.bucket) // "member-photos"
          .remove([file.path]); // "photos/TEMP-2025-002.jpg"

        if (removeError)
          console.error(`❌ Error deleting file: ${file.path}`, removeError);
      }

      // 4. DELETE MEMBERS
      const { error: deleteError } = await supabase
        .from("Members")
        .delete()
        .in("membership_id", memberIds);

      if (deleteError) throw deleteError;

      setData((prev) => prev.filter((m) => !memberIds.includes(m.id)));
      setSelected([]);
      showSnackbar("Member deleted successfully!", "success");
    } catch (err) {
      console.error(err);
      showSnackbar(err.message || err, "error");
    } finally {
      setDeleteLoading(false);
      setDeleteDialogOpen(false);
    }
  };

  const updatePaymentStatus = async (memberId, newStatus) => {    
    try {
      if (newStatus === "Rejected") {
        setRejectLoading(true);
        const { error: paymentError } = await supabase
          .from("Payment")
          .update({ payment_status: newStatus })
          .eq("membership_id", memberId);

        if (paymentError) {
          console.error("❌ Payment update error:", paymentError);
          return;
        }
      }

      else if (newStatus === "Confirmed") {
        setConfirmLoading(true);

        // Convert TEMP-001 → PDG-001 
        const newMemberId = memberId.replace("TEMP", "PDG");

        const { error: memberError } = await supabase
          .from("Members")
          .update({ membership_id: newMemberId })
          .eq("membership_id", memberId);

        if (memberError) {
          console.error("❌ Member ID update error:", memberError);
          return;
        }

        const { error: paymentError } = await supabase
          .from("Payment")
          .update({ payment_status: newStatus })
          .eq("membership_id", newMemberId);

        if (paymentError) {
          console.error("❌ Payment update error:", paymentError);
          return;
        }
      }

      getMemberData();
      showSnackbar("Payment status updated successfully!", "success");
    } catch (e) {
      console.error("Unexpected error:", e);
      showSnackbar(`Unexpected error: ${e}`, "error");
    } finally {
      setRejectLoading(false);
      setConfirmLoading(false);
      setSelectedMember(null);
    }
  };

  useEffect(() => {
    getMemberData();
  }, []);


  return {
    notification: { snackbar, closeSnackbar },

    loadingState: {
      fetchLoading,
      deleteLoading,
      rejectLoading,
      confirmLoading,
    },

    selection: {
      selectedMember,
      setSelectedMember,
      selected,
      setSelected,
    },

    filters: {
      filterTier,
      setFilterTier,
      filterStatus,
      setFilterStatus,
      searchQuery,
      setSearchQuery,
    },

    dialogs: {
      deleteDialogOpen,
      openDeleteDialog,
      closeDeleteDialog,
    },

    data: {
      filteredMembers,
    },

    actions: {
      handleConfirmDelete,
      updatePaymentStatus,
    },
  };
}