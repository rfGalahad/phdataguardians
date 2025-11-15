import { Box, Typography, Divider, useMediaQuery } from "@mui/material";


export const Header = ({ title, icon }) => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {icon}
        <Typography variant={isMobile ? 'h6': 'h5'} fontWeight='600' color='#053261'>
          {title}
        </Typography>
      </Box>
      <Divider sx={{ borderColor: '#053261', borderBottomWidth: 2 }}/>
    </Box>
  )
}