import { Box, Button, Container, Typography, CircularProgress } from '@mui/material';

import { CustomTextField } from '../../components/ui/FormFields';
import { useLogin } from './useLogin';

import pdgLogo from '../../assets/pdgLogo.png';
import BackgroundImage from '../../assets/pdgBG.png';





export const LoginPage = () => {

  const {
    values,
    errors,
    loading,
    handleChange,
    handleLogin
  } = useLogin();

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

          {/* FORGOT PASSWORD */}
          <Typography
            sx={{
              mt: 2,
              color: "white",
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate('/admin/manageMembers')}
          >
            Forgot Password?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
