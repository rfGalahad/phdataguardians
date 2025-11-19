import { useState } from 'react';
import { Box, Typography, Divider, Button, CircularProgress } from '@mui/material'
import { CustomTextField } from '../../../../components/ui/FormFields'
import { SuccessDialog } from './SuccessDialog';




export const SendMessageForm = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    botField: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (formData.message.trim().length === 0) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Honeypot check
    if (formData.botField.trim() !== '') return;

    setIsSending(true);

    const data = new FormData();
    data.append('form-name', 'contact');
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      await fetch('/', {
        method: 'POST',
        body: data,
      });

      setOpenSuccess(true);
      setFormData({ fullName: '', email: '', message: '', botField: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSending(false);
  };

  return (
    <Box 
      component={'form'}
      onSubmit={handleSubmit}
      sx={{ 
        flex: 1, 
        background: 'white',
        display: 'flex', 
        flexDirection: 'column',
        gap: 3, 
        borderLeft: '3px solid #F7CF13', 
        borderRadius: 2,
        p: 3
      }}
    >
      {/* HEADING */}
      <Box>
        <Typography variant='h6' sx={{ fontWeight: '600', color: '#053261' }}>
          Send Us a Message
        </Typography>
        <Typography variant='subtitle1' sx={{ color: '#404040' }}>
          Fill out the form below and we'll get back to you soon.
        </Typography>
      </Box>
      
      <Divider/>

      {/* FORM FIELDS */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
        {/* Honeypot (hidden) */}
        <input
          type='text'
          name='bot-field'
          style={{ display: 'none' }}
          onChange={(e) => handleChange('botField', e.target.value)}
        />

        <CustomTextField
          label='Full Name'
          placeholder='Enter your full name'
          name='fullName'
          value={formData.fullName}
          error={errors.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          required
        />

        <CustomTextField
          label='Email Address'
          placeholder='Enter your email address'
          name='email'
          value={formData.email}
          error={errors.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />

        <CustomTextField
          label='Message'
          placeholder='Tell us your concern...'
          name='message'
          helperText='500 characters max.'
          value={formData.message}
          error={errors.message}
          onChange={(e) => handleChange('message', e.target.value)}
          multiline
          required
        />
      </Box>

      {/* SEND MESSAGE BUTTON */}
      <Button 
        type='submit'
        variant='contained' 
        sx={{ 
          alignSelf: 'flex-end', 
          backgroundColor: '#053261', 
          '&:hover': { 
            backgroundColor: '#041E36' 
          } 
        }}
      >
        {isSending ? (
          <CircularProgress size={22} sx={{ color: 'white' }} />
        ) : (
          'Send Message'
        )}
      </Button>

      {/* SUCCESS DIALOG */}
      <SuccessDialog
        openSuccess={openSuccess}
        setOpenSuccess={setOpenSuccess}
      />
    </Box>
  )
}