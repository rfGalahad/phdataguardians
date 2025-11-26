import { Snackbar, Alert } from "@mui/material";



export const SnackbarNotifier = ({ 
  snackbar, 
  closeSnackbar 
}) => {
  
  return (
    <Snackbar
      open={snackbar?.open}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbar?.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbar?.message}
      </Alert>
    </Snackbar>
  );
}
