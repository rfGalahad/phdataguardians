import { Box, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Box mb={6}>
      <Typography variant='h4' color='#F7CF13' fontWeight='bold' mb={2}>
        Privacy Notice & Consent Form
      </Typography>
      <Typography variant='subtitle1' color='white'>
        Please review our privacy notice before continuing. 
      </Typography>
    </Box>
  )
}