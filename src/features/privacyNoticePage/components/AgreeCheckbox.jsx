import { Box, Typography, Checkbox } from "@mui/material"



export const AgreeCheckbox = ({ agree, handleChange }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox checked={agree} onChange={handleChange}/>
      <Typography variant='subtitle1'>
        I have read and agree to the privacy notice. I understand how my personal
        information will be created, used, and protected.
      </Typography>
    </Box>
  )
}