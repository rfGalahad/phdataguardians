import { Box } from "@mui/material";

export const StepLine = ({
  left,
  width,
  delay,
  active,
}) => (
  <Box
    position="absolute"
    sx={{
      top: 55,
      left,
      width,
      height: 4,
      zIndex: 1,
      borderRadius: 5,
      overflow: 'hidden',

      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundColor: 'primary.light',
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: `transform 0.5s ease ${delay}s`,
      },
    }}
  />
);