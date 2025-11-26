import { Box, IconButton, Chip, Typography } from "@mui/material";
import { Delete, School, Visibility, Work } from "@mui/icons-material";

import { TableControls } from "../components/TableControls";
import { MemberDetailsDialog } from "../components/MemberDetailsDialog";
import { ConfirmDeleteDialog } from "../components/ConfirmDeleteDialog";
import { ManageTable } from "../../../components/common/ManageTable";
import { SnackbarNotifier } from "../../../components/common/SnackbarNotifier";

import { usePendingMembers } from "../hooks/usePendingMembers";


const columns = [
  { field: "name", headerName: "Name", sortable: true },
  {
    field: "email",
    headerName: "Email & Contact",
    render: (value, row) => (
      <Box>
        <Typography variant='body2'>
          {row.email}
        </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          {row.contact}
        </Typography>
      </Box>
    ),
    sortable: false
  },
  {
    field: "confirmedDate",
    headerName: "Date Registered",
    sortable: true
  },
  {
    field: "tier",
    headerName: "Tier",
    render: (v) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {v === 'Student/Academe' ? <School/> : <Work/>}
        {v}
      </Box >
    ),
    sortable: false
  },
  {
    field: "paymentStatus",
    headerName: "Status",
    render: (v) => (
      <Chip label={v} color={v === "Pending" ? "warning" : "error"} />
    ),
    sortable: false
  }
]; 


export const ManagePendingMembers = () => {

  const {
    notification,
    loadingState,
    filters,
    selection,
    dialogs,
    data,
    actions
  } = usePendingMembers();


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
      {/* TABLE CONTROLS */}
      <TableControls
        statusType={'paymentStatus'}
        selected={selection.selected}
        filterTier={filters.filterTier}
        setFilterTier={filters.setFilterTier}
        filterStatus={filters.filterStatus}
        setFilterStatus={filters.setFilterStatus}
        searchQuery={filters.searchQuery}
        setSearchQuery={filters.setSearchQuery}
        openDeleteDialog={dialogs.openDeleteDialog}
      />
      
      {/* TABLE */}
      <ManageTable
        columns={columns}
        rows={data.filteredMembers}
        loading={loadingState.fetchLoading}
        onSelectionChange={(selectedRows) => selection.setSelected(selectedRows)}
        actions={(selectedRow) => (
          <>
            <IconButton onClick={() => selection.setSelectedMember(selectedRow)}>
              <Visibility sx={{ color: "#1550CF" }} />
            </IconButton>
            <IconButton onClick={() => dialogs.openDeleteDialog(selectedRow)}>
              <Delete sx={{ color: "#FF3A3A" }} />
            </IconButton>
          </>
        )}
      />

      {/* MEMBER DETAILS DIALOG */}
      {selection.selectedMember && (
        <MemberDetailsDialog
          selectedMember={selection.selectedMember}
          close={() => selection.setSelectedMember(null)}
          updatePaymentStatus={actions.updatePaymentStatus}
          rejectLoading={loadingState.rejectLoading}
          confirmLoading={loadingState.confirmLoading}
        />
      )}

      {/* CONFIRM DELETE MEMBER DIALOG */}
      <ConfirmDeleteDialog
        open={dialogs.deleteDialogOpen}
        onClose={dialogs.closeDeleteDialog}
        selected={selection.selected}
        loading={loadingState.deleteLoading}
        handleConfirmDelete={actions.handleConfirmDelete}
      />

      {/* SNACKBAR NOTIFICATION */}
      <SnackbarNotifier
        snackbar={notification.snackbar} 
        closeSnackbar={notification.closeSnackbar}
      />
    </Box>
    
  );
};
