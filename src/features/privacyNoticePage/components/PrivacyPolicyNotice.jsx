import { Box, Typography } from "@mui/material"



export const PrivacyPolicyNotice = () => {

  const notice = [
    {
      title: 'Membership Application Notice',
      content: `I hereby apply for membership with Philippine Data Guardians (PDG) 
      and voluntarily provide my personal information for the purpose of processing 
      my membership application, identification, communication, and access to member benefits.`
    },
    {
      title: 'Data Privacy Statement',
      content: <>I understand that PDG will collect, use, and store my personal 
      data in accordance with the {' '}
      <span style={{ color: '#053261', fontWeight: '600' }}>
        Data Privacy Act of 2012 (Republic Act 10173)
      </span> {' '}
      and its implementing rules and regulations. My information will be kept 
      confidential and will not be shared with third parties without my explicit consent, 
      unless required by law.</>
    }
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {notice.map((item, index) => (
        <Box
          key={index}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1, 
            borderRadius: 2,
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant='h6' fontWeight='600' textAlign='left'>
              {item.title}
            </Typography>
          </Box>
          
          <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}