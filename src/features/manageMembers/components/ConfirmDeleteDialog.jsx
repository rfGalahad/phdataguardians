import { Delete } from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  Divider,
  Button,
  CircularProgress,
  Box,
  Typography
} from '@mui/material';



export const ConfirmDeleteDialog = ({ 
  open, 
  onClose, 
  selected, 
  loading,
  handleConfirmDelete
}) => {

  const getDisplayName = (item) => typeof item === "string" ? item : item.name;

  const title =
    selected?.length === 1
      ? <>Delete <span style={{ color: '#FF3A3A'}}>{getDisplayName(selected[0])}</span>?</>
      : <>Delete <span style={{ color: '#FF3A3A'}}>({selected?.length || 1})</span> Pending Members?</>;
  
  const text =
    selected?.length === 1
      ? 'Are you sure you want to delete this pending member? This action cannot be undone and all associated data will be permanently removed.'
      : 'Are you sure you want to delete these pending members? This action cannot be undone and all associated data will be permanently removed.';
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      {/* DIALOG TITLE */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
        <Box sx={{ background: '#FFE5E5', borderRadius: '50%', display: 'flex', justifyContent: 'center', p: 2 }}>
          <Delete sx={{ fontSize: 32, color: '#ff3a3a' }} />
        </Box>
        <Typography variant='h5' fontWeight={500} sx={{ mt: 1 }}>
          {title} 
        </Typography>
      </Box>

      <Divider />

      {/* DIALOG CONTENT */}
      <DialogContent sx={{ pt: 2 }}>
        <Typography color='textSecondary' textAlign='center'>
          {text}
        </Typography>
      </DialogContent>

      {/* DIALOG ACTION BUTTONS */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 3 }}>
        <Button 
          variant='outlined'
          onClick={onClose} 
          disabled={loading}
          fullWidth
        >
          Cancel
        </Button>

        <Button
          onClick={handleConfirmDelete}
          variant="contained"
          color="error"
          disabled={loading}
          fullWidth
        >
          {loading ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              Deleting... 
            </>
          ) : (
            'Delete'
          )}
        </Button>
      </Box>
    </Dialog>
  );
}