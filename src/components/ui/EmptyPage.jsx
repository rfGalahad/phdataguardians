import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

export const EmptyPage = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "text.secondary",
        textAlign: "center",
        p: 2,
      }}
    >
      <ConstructionIcon sx={{ fontSize: 80, mb: 2 }} />

      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        This page is under development
      </Typography>

      <Typography variant="body1">
        We're working hard to bring this feature to you soon.
      </Typography>
    </Box>
  );
}
