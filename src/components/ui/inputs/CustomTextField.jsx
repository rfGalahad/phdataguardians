export const CustomTextField = ({
  label,
  placeholder,
  prefix,
  suffix,
  helperText,
  onChange,
  value,
  error,
  required = false,
  multiline = false,
  light = false,
  password = false,
  disabled = false,
  ...props
}) => {
  return (
    <div style={{ height: multiline ? '100%' : 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: '#404040' }}>
      {/* Label */}
      {label && (
        <label 
          style={{ 
            fontSize: '14px', 
            fontWeight: 500, 
            color: disabled ? '#aaa' : light ? 'white' : '#404040',
            marginBottom: '8px'
          }}
        >
          {label} { required && (<span style={{ color: 'red'}}>*</span>)}
        </label>
      )}

      {/* Input Wrapper */}
      <div
        style={{
          width: '100%',
          height: multiline ? '100%' : 'auto',
          display: 'flex',
          alignItems: multiline ? 'flex-start' : 'center',
          backgroundColor: disabled ? '#f5f5f5' : '#FFFFFF',
          border: error ? '1px solid red' : disabled ? '1px solid #e0e0e0' : '1px solid #D9D9D9',
          borderRadius: '6px',
          gap: '8px',
          cursor: disabled ? 'not-allowed' : 'auto',
        }}
      >
        {/* Prefix */}
        {prefix && (
          <span style={{ color: disabled ? '#bbb' : '#404040', flexShrink: 0, fontSize: '14px', paddingLeft: '16px' }}>
            {prefix}
          </span>
        )}

        {/* Input */}
        <input
          type={password ? 'password' : 'text'}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: disabled ? '#aaa' : '#404040',
            padding: prefix ? '16px 0' : '16px',
            width: '100%',
            cursor: disabled ? 'not-allowed' : 'auto',
            font: 'inherit',
            fontSize: '14px'
          }}
          {...props}
        />

        {/* Suffix */}
        {suffix && (
          <span style={{ color: disabled ? '#bbb' : '#404040', flexShrink: 0, paddingRight: '16px' }}>
            {suffix}
          </span>
        )}
      </div>

      {/* Error */}
      {error && (
        <span 
          style={{ 
            marginTop: '8px',
            color: 'red', 
            fontSize: '12px' 
          }}
        >
          {error}
        </span>
      )}

      {helperText && (
        <span 
          style={{ 
            marginTop: '8px',
            marginLeft: '16px',
            color: '#8C8C8C', 
            fontSize: '12px' 
          }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};