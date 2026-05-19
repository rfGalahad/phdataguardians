import { useEffect, useRef, useState } from 'react';

export const CustomDropdown = ({
  label,
  placeholder = 'Select an option',
  helperText,
  onChange,
  options = [],
  value,
  error,
  required = false,
  disabled = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query,  setQuery]  = useState('');
  const dropdownRef         = useRef(null);
  const inputRef            = useRef(null);

  const selectedOption = options.find(opt => opt.value === value || opt.label === value);

  // While open: show filtered options based on query.
  // While closed: show all options when re-opened.
  const filtered = query.trim()
    ? options.filter(opt => opt.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  // Sync input display: when a value is selected and user hasn't typed, show the label
  const inputDisplay = isOpen ? query : (selectedOption?.label ?? '');

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const close = () => {
    setIsOpen(false);
    setQuery('');
  };

  const handleInputClick = () => {
    if (disabled) return;
    setIsOpen(true);
    // Pre-fill query with current label so user can edit from where they are
    if (selectedOption && !query) setQuery(selectedOption.label);
  };

  const handleInputChange = (e) => {
    if (disabled) return;
    setQuery(e.target.value);
    setIsOpen(true);
    // If user clears the input, clear the selection too
    if (!e.target.value) onChange(null, null);
  };

  const handleSelect = (option) => {
    if (disabled) return;
    onChange(null, option);
    close();
    inputRef.current?.blur();
  };

  const handleClear = (e) => {
    if (disabled) return;
    e.stopPropagation();
    onChange(null, null);
    setQuery('');
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Escape')                            { close(); inputRef.current?.blur(); }
    if (e.key === 'Enter' && filtered.length === 1)   { handleSelect(filtered[0]); }
    if (e.key === 'Tab')                               { close(); }
  };

  return (
    <div className={`cdd-wrap${disabled ? ' is-disabled' : ''}`}>
      <style>{`
        .cdd-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          font-family: inherit;
          color: #404040;
        }

        .cdd-label {
          font-size: 13.5px;
          font-weight: 500;
          color: #404040;
        }
        .cdd-label span { color: #c0392b; margin-left: 2px; }

        .cdd-root { position: relative; width: 100%; }

        /* The input that IS the trigger */
        .cdd-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .cdd-input {
          width: 100%;
          height: 50px;
          padding: 0 40px 0 14px;
          font-size: 14px;
          font-family: inherit;
          color: #1a1a1a;
          background: #fff;
          border: 1px solid #D9D9D9;
          border-radius: 8px;
          outline: none;
          box-sizing: border-box;
          cursor: text;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .cdd-input:hover               { border-color: #aaa; }
        .cdd-input:focus               { border-color: #053261; box-shadow: 0 0 0 3px rgba(5,50,97,0.1); }
        .cdd-input.has-error           { border-color: #c0392b; }
        .cdd-input.has-error:focus     { box-shadow: 0 0 0 3px rgba(192,57,43,0.12); }
        .cdd-input.is-open             { border-color: #053261; box-shadow: 0 0 0 3px rgba(5,50,97,0.1); border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
        .cdd-input.has-error.is-open   { box-shadow: 0 0 0 3px rgba(192,57,43,0.12); }
        .cdd-input:disabled            { background: #f5f5f5; color: #aaa; border-color: #e0e0e0; cursor: not-allowed; }
        .cdd-input:disabled:hover      { border-color: #e0e0e0; }
        .cdd-wrap.is-disabled .cdd-label { color: #aaa; }
        .cdd-wrap.is-disabled .cdd-chevron { color: #d0d0d0; cursor: not-allowed; pointer-events: none; }

        /* Icons inside the input */
        .cdd-suffix {
          position: absolute;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          pointer-events: none;
        }
        .cdd-suffix button { pointer-events: all; }

        .cdd-clear {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #e0e0e0;
          color: #666;
          font-size: 10px;
          cursor: pointer;
          border: none;
          padding: 0;
          transition: background 0.15s;
          line-height: 1;
        }
        .cdd-clear:hover { background: #ccc; }

        .cdd-chevron {
          transition: transform 0.2s ease;
          color: #bbb;
        }
        .cdd-chevron.is-open { transform: rotate(180deg); }

        /* Dropdown menu — attaches flush to input bottom */
        .cdd-menu {
          position: absolute;
          top: calc(100% - 1.5px);
          left: 0;
          right: 0;
          background: #fff;
          border: 1.5px solid #053261;
          border-top: none;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.09);
          z-index: 1000;
          overflow: hidden;
        }

        .cdd-list {
          max-height: 200px;
          overflow-y: auto;
          padding: 4px 0;
          scrollbar-width: thin;
          scrollbar-color: #d0d0d0 transparent;
        }

        .cdd-list::-webkit-scrollbar {
          width: 4px;
        }

        .cdd-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .cdd-list::-webkit-scrollbar-thumb {
          background-color: #d0d0d0;
          border-radius: 99px;
        }

        .cdd-list::-webkit-scrollbar-thumb:hover {
          background-color: #b0b0b0;
        }

        .cdd-option {
          padding: 10px 14px;
          font-size: 14px;
          cursor: pointer;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          transition: background 0.12s;
        }
        .cdd-option:hover     { background: #f4f7fb; }
        .cdd-option.is-active { background: #eef2f9; color: #053261; font-weight: 600; }

        .cdd-option-check { color: #053261; flex-shrink: 0; opacity: 0; }
        .cdd-option.is-active .cdd-option-check { opacity: 1; }

        .cdd-highlight { background: rgba(5,50,97,0.12); border-radius: 2px; }

        .cdd-empty {
          padding: 14px;
          text-align: center;
          color: #bbb;
          font-size: 13.5px;
        }

        .cdd-error {
          font-size: 12px;
          color: #c0392b;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cdd-helper {
          font-size: 12px;
          color: #999;
          padding-left: 2px;
        }
      `}</style>

      {label && (
        <label className="cdd-label">
          {label}{required && <span>*</span>}
        </label>
      )}

      <div ref={dropdownRef} className="cdd-root">
        {/* Combobox input */}
        <div className="cdd-input-wrap">
          <input
            ref={inputRef}
            type="text"
            className={`cdd-input${isOpen ? ' is-open' : ''}${error ? ' has-error' : ''}`}
            placeholder={placeholder}
            value={inputDisplay}
            onClick={handleInputClick}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            disabled={disabled}
            {...props}
          />
          <div className="cdd-suffix">
            {(selectedOption || query) && !disabled && (
              <button type="button" className="cdd-clear" onClick={handleClear} tabIndex={-1}>
                ✕
              </button>
            )}
            <svg
              className={`cdd-chevron${isOpen ? ' is-open' : ''}`}
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              style={{ cursor: 'pointer', pointerEvents: 'all' }}
              onClick={() => isOpen ? close() : (setIsOpen(true), inputRef.current?.focus())}
            >
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Options menu */}
        {isOpen && (
          <div className="cdd-menu">
            <div className="cdd-list">
              {filtered.length === 0 ? (
                <div className="cdd-empty">No results for &quot;{query}&quot;</div>
              ) : (
                filtered.map(option => {
                  const isActive = option.value === value || option.label === value;
                  let display = <>{option.label}</>;

                  if (query.trim()) {
                    const idx = option.label.toLowerCase().indexOf(query.toLowerCase());
                    if (idx !== -1) {
                      display = (
                        <>
                          {option.label.slice(0, idx)}
                          <mark className="cdd-highlight">{option.label.slice(idx, idx + query.length)}</mark>
                          {option.label.slice(idx + query.length)}
                        </>
                      );
                    }
                  }

                  return (
                    <div
                      key={option.value}
                      className={`cdd-option${isActive ? ' is-active' : ''}`}
                      onMouseDown={(e) => e.preventDefault()} // prevent input blur before click fires
                      onClick={() => handleSelect(option)}
                    >
                      <span>{display}</span>
                      <svg className="cdd-option-check" width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {error && (
        <span className="cdd-error">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {error}
        </span>
      )}

      {helperText && !error && (
        <span className="cdd-helper">{helperText}</span>
      )}
    </div>
  );
};