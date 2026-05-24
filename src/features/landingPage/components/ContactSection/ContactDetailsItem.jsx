import { Box, Typography } from "@mui/material"

export const ContactDetailsItem = ({ icon: Icon, title, description }) => {
  return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ p: 1, border: '1px solid #053261', alignItems: 'center', display: 'flex', justifyContent: 'center', borderRadius: 1 }}>
          {Icon && <Icon sx={{  fontSize: 24, color: '#053261'}}/>}
        </Box>
        <Box>
          <Typography variant='subtitle2' sx={{ fontWeight: 600, color: '#053261' }}>
            {title}
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Box>
      </Box>

  )
}