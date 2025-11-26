import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { Circle, CreditCard, Delete, Visibility } from "@mui/icons-material";

import { TableControls } from "../components/TableControls";
import { MemberDetailsDialog } from "../components/MemberDetailsDialog";
import { ConfirmDeleteDialog } from "../components/ConfirmDeleteDialog";
import { ManageTable } from "../../../components/common/ManageTable";
import { SnackbarNotifier } from "../../../components/common/SnackbarNotifier";

import { useMembers } from "../hooks/useMembers";
import { GenerateIdDialog } from "../components/GenerateIDDialog";


const columns = [
  { field: "id", headerName: "Membership ID", sortable: true },
  { 
    field: "name", 
    headerName: "Name",
    render: (value, row) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          component="img"
          src={row.photo}
          height={40}
          width={40}
          sx={{
            border: '0.5px solid #ddd',
            borderRadius: '50%',
            display: "block",
            backgroundColor: "#f5f5f5",
            objectFit: "contain"
          }}
        />
        <Box>
          <Typography variant='body2'>
            {row.name}
          </Typography>
          <Typography variant='subtitle2' color='text.secondary'>
            {row.tier}
          </Typography>
        </Box>
      </Box>
    ),
    sortable: true 
  },
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
    headerName: "Membership Duration",
    render: (v, row) => (
      <Typography variant='body2'>
        {row.confirmedDate} - {row.expirationDate}
      </Typography>
    ),
    sortable: true
  },
  {
    field: "membershipStatus",
    headerName: "Status",
    render: (v) => {
      const isActive = v === "Active";
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
          <Circle
            sx={{
              fontSize: 12,
              color: isActive ? "success.main" : "error.main"
            }}
          />
          <Typography variant='body2' color= {isActive ? "success" : "error"}>
            {isActive ? "Active" : "Expired"}
          </Typography>
        </Box>
      );
    },
    sortable: false
  }
]; 


export const ManageMembers = () => {

  const {
    notification,
    loadingState,
    filters,
    selection,
    dialogs,
    data,
    actions
  } = useMembers();


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
      {/* TABLE CONTROLS */}
      <TableControls
        statusType={'membershipStatus'}
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
          <Tooltip title="Generate Membership ID">
            <IconButton onClick={() => selection.setSelectedMemberID(selectedRow)}>
              <CreditCard sx={{ color: "#6155F5" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="View Member Details">
            <IconButton onClick={() => selection.setSelectedMember(selectedRow)}>
              <Visibility sx={{ color: "#1550CF" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Member">
            <IconButton onClick={() => dialogs.openDeleteDialog(selectedRow)}>
              <Delete sx={{ color: "#FF3A3A" }} />
            </IconButton>
          </Tooltip>
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

      {/* PRINT ID DIALOG */}
      {selection.selectedMemberID && (
        <GenerateIdDialog
          selectedMemberID={selection.selectedMemberID}
          close={() => selection.setSelectedMemberID(null)}
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
