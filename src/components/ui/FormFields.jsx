import { useState, useRef, useEffect } from 'react';



export const CustomDropdown = ({
  label,
  placeholder = "Select an option",
  helperText,
  onChange,
  options = [],
  value,
  error,
  required = false,
  ...props
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    const selectedOption = options.find(opt => opt.value === option);
    onChange(null, selectedOption);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value || opt.label === value);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: '#404040' }}>
      {/* Label */}
      {label && (
        <label 
          style={{ 
            fontSize: '14px', 
            fontWeight: 500, 
            color: '#404040',
            marginBottom: '8px'
          }}
        >
          {label} {required && (<span style={{ color: 'red'}}>*</span>)}
        </label>
      )}

      {/* Dropdown */}
      <div ref={dropdownRef} style={{ width: '100%', position: 'relative' }}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: '16px',
            border: error ? '1px solid red' : '1px solid #D9D9D9',
            borderRadius: '6px',
            outline: 'none',
            color: selectedOption ? '#404040' : '#8C8C8C',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          {...props}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}
          >
            <path 
              d="M4 6L8 10L12 6" 
              stroke="#8C8C8C" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              border: '1px solid #D9D9D9',
              borderRadius: '6px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
              maxHeight: '200px',
              overflowY: 'auto'
            }}
          >
            {options.length === 0 ? (
              <div style={{ padding: '16px', color: '#8C8C8C', textAlign: 'center' }}>
                No options available
              </div>
            ) : (
              options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  style={{
                    textAlign: 'left',
                    padding: '16px',
                    cursor: 'pointer',
                    color: '#404040',
                    backgroundColor: value === option.value ? '#F5F5F5' : '#FFFFFF',
                    transition: 'background-color 0.15s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F5F5F5'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = value === option.value ? '#F5F5F5' : '#FFFFFF'}
                >
                  {option.label}
                </div>
              ))
            )}
          </div>
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
            color: '#404040',
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
          height: multiline ?'100%' : 'auto',
          display: 'flex',
          alignItems: multiline ? 'flex-start' : 'center',
          backgroundColor: '#FFFFFF',
          border: error ? '1px solid red' : '1px solid #D9D9D9',
          borderRadius: '6px',
          gap: '8px'
        }}
      >
        {/* Prefix */}
        {prefix && (
          <span style={{ color: '#404040', flexShrink: 0, fontSize: '14px', paddingLeft: '16px' }}>
            {prefix}
          </span>
        )}

        {/* Input */}
        <input
          type='text'
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#404040',
            padding: prefix ? '16px 0' : '16px',
            width: '100%',
            
          }}
          {...props}
        />

        {/* Suffix */}
        {suffix && (
          <span style={{ color: '#404040', flexShrink: 0, paddingRight: '16px' }}>
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
