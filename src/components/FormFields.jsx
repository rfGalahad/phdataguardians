import { TextField, useMediaQuery, Autocomplete } from '@mui/material';

export const CustomTextField = ({ 
  label, 
  value, 
  onChange, 
  error, 
  helperText, 
  placeholder, 
  autofocus,
  required,
}) => {

  const isMobile = useMediaQuery('(max-width:425px)');

  return (
    <TextField
      label = {label}
      variant = 'outlined'
      value = {value || ''}
      onChange = {onChange}
      error = {Boolean(error)}
      helperText = {error || helperText}
      placeholder = {placeholder}
      size = {isMobile ? 'small' : 'medium'}
      fullWidth
      autoFocus = {autofocus}
      required = {required}
    />
  );
};

export const CustomDropdownField = ({ 
  label, 
  options, 
  value, 
  onChange, 
  error, 
  helperText, 
  placeholder, 
  required
}) => {

  const isMobile = useMediaQuery('(max-width:425px)');

  const selectedOption = typeof value === 'object' && value !== null
    ? options.find(option => option.value === value.value) || null
    : options.find(option => option.label === value || option.value === value) || null;
  
  return (
    <Autocomplete
      required = {required}
      options = {options}
      value = {selectedOption}
      onChange = {(e, newValue) => onChange(e, newValue)}
      renderInput = {(params) => (
        <TextField 
          {...params} 
          label = {label} 
          error = {Boolean(error)}
          helperText = {error || helperText}
          placeholder = {placeholder}
          required = {required}
        />
      )}
      size = {isMobile ? 'small' : 'medium'}
    />
  );
};