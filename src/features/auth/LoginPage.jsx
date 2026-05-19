import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';

import BackgroundImage from '@/assets/pdg-background.png';
import { CustomTextField } from '@/components/ui/inputs';
import { LOGO_PDG_1 } from '@/constants/cloudinaryConstants';
import { getCloudinaryUrl } from '@/services/cloudinary';

import { useLogin } from './useLogin';
  

export const LoginPage = () => {

  const {
    values,
    errors,
    loading,
    handleChange,
    handleLogin
  } = useLogin();

  const pdgLogo = getCloudinaryUrl(LOGO_PDG_1);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        {/* LOGO */}
        <Box textAlign="center" mb={4}>
          <Box component="img" src={pdgLogo} height={80} />
          <Typography variant="h6" textTransform="uppercase" color="white" fontWeight={600} letterSpacing={2} mt={1}>
            Philippine Data <span style={{ color: '#F7CF13' }}>Guardians</span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 4,
          }}
        >
          {/* GLOBAL ERROR */}
          {errors.general && (
            <Typography color="error" mb={2} textAlign="center">
              {errors.general}
            </Typography>
          )}

          {/* EMAIL */}
          <CustomTextField
            label="Email Address"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email}
            light
            required
          />

          {/* PASSWORD */}
          <CustomTextField
            label="Password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange("password")}
            error={errors.password}
            required
            light
            password
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            disabled={loading}
            sx={{
              mt: 4,
              backgroundColor: '#F7CF13',
              color: '#053261',
              fontWeight: 600,
              py: 1.3,
              '&:hover': { backgroundColor: '#e6c010' },
            }}
          >
            {loading ? <CircularProgress size={26} /> : "Login"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
