import { Box, TextField, InputAdornment, Autocomplete, Button } from "@mui/material";
import { Delete, Search } from "@mui/icons-material";

const tiers = ['All', 'Student/Academe', 'Professionals', 'Organization']
const paymentStatus = ['All', 'Pending', 'Rejected']
const membershipStatus = ['All', 'Active', 'Expired']


export const TableControls = ({
  statusType,
  selected,
  filterTier,
  setFilterTier,
  filterStatus,
  setFilterStatus,
  searchQuery,
  setSearchQuery,
  openDeleteDialog
}) => {

  const isPaymentStatus = statusType === 'paymentStatus';

  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
      <TextField
        label="Search"
        variant="outlined"
        placeholder="Search by name, email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ flex: 3, background: 'white' }}
      />

      <Autocomplete
        options={isPaymentStatus ? paymentStatus : membershipStatus}
        value={filterStatus}
        onChange={(event, newValue) => setFilterStatus(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Status" />
        )}
        sx={{ flex: 1, background: 'white' }}
      />

      <Autocomplete
        options={tiers}
        value={filterTier}
        onChange={(event, newValue) => setFilterTier(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Tier" />
        )}
        sx={{ flex: 1, background: 'white' }}
      />

      { selected?.length > 0 && (
        <Button 
          variant="contained" 
          color="error" 
          startIcon={<Delete/>} 
          onClick={() => openDeleteDialog(selected)}   
          sx={{ flex: 2 }}
        >
          Delete Pending Members ({selected.length})
        </Button>
      )}
    </Box>
  )
}