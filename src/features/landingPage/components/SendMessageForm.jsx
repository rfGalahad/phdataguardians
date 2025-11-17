import { useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material"
import { CustomTextField } from "../../../components/FormFields"




export const SendMessageForm = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("form-name", "contact");
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("message", formData.message);

    await fetch("/", {
      method: "POST",
      body: data,
    });

    alert("Message sent!");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <Box 
      component={'form'}
      sx={{ 
        flex: 1, 
        background: 'white',
        display: 'flex', 
        flexDirection: 'column',
        gap: 3, 
        borderLeft: '3px solid #F7CF13', 
        borderRadius: 2,
        p: 4
      }}
    >
      {/* HEADING */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: '600', color: '#053261' }}>
          Send Us a Message
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#404040' }}>
          Fill out the form below and we'll get back to you soon.
        </Typography>
      </Box>
      
      <Divider/>

      {/* FORM FIELDS */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
        <CustomTextField
          label='Full Name'
          placeholder='Enter your full name'
          name="fullName"
          required
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <CustomTextField
          label='Email Address'
          placeholder='Enter your email address'
          name="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <CustomTextField
          label='Message'
          placeholder='Tell us your concern...'
          helperText='500 characters max.'
          name="message"
          multiline
          required
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
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
        Send Message
      </Button>
    </Box>
  )
}