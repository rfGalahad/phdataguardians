import { ArticleOutlined, LockOutlined } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

const NOTICE = [
  {
    icon: <ArticleOutlined sx={{ fontSize: 18, color: '#053261' }} />,
    title: 'Membership Application Notice',
    content: `I hereby apply for membership with Philippine Data Guardians (PDG) 
    and voluntarily provide my personal information for the purpose of processing 
    my membership application, identification, communication, and access to member benefits.`,
  },
  {
    icon: <LockOutlined sx={{ fontSize: 18, color: '#053261' }} />,
    title: 'Data Privacy Statement',
    content: (
      <>
        I understand that PDG will collect, use, and store my personal data in accordance with
        the{' '}
        <Box
          component="span"
          sx={{
            color: '#053261',
            fontWeight: 700,
            borderBottom: '1.5px solid rgba(5,50,97,0.3)',
            pb: '1px',
          }}
        >
          Data Privacy Act of 2012 (Republic Act 10173)
        </Box>{' '}
        and its implementing rules and regulations. My information will be kept confidential
        and will not be shared with third parties without my explicit consent, unless required
        by law.
      </>
    ),
  },
];

export const PrivacyPolicyNotice = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {NOTICE.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            gap: 2,
            transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
          }}
        >
          {/* Text */}
          <Box>
            <Stack direction='row' spacing={1} alignItems='center' mb={1}>
              {item.icon}
              <Typography
                variant="body1" 
                sx={{ fontWeight: 700, color: 'primary.main', mb: 0.75, lineHeight: 1.3 }}
              >
                {item.title}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, textAlign: 'justify' }}>
              {item.content}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};