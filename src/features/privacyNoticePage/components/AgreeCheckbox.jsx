import { useState } from 'react';

import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { Box, Checkbox, Collapse, Typography } from '@mui/material';

const ITEMS = [
  'Consent to the collection and processing of my personal data for membership-related purposes.',
  'Acknowledge that I may access, update, or request the deletion of my personal data by contacting PDG.',
  'Understand that I may withdraw my consent anytime, subject to applicable laws and PDG policies.',
  'Hereby certify that the information I provided is true and correct to the best of my knowledge.',
];

export const AgreeCheckbox = ({ agree }) => {

  const [checkedItems, setCheckedItems] = useState(
    Object.fromEntries(ITEMS.map((_, i) => [i, false]))
  );

  const handleChange = (index) => (event) => {
    const updated = { ...checkedItems, [index]: event.target.checked };
    setCheckedItems(updated);
    agree(Object.values(updated).every(Boolean));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);
  const anyChecked = Object.values(checkedItems).some(Boolean);

  return (
    <Box>
      {/* Section label */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
        <Box sx={{ height: '1px', flex: 1, bgcolor: 'rgba(5,50,97,0.1)' }} />
        <Typography
          sx={{
            fontSize: '0.7rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            color: 'primary.main',
            opacity: 0.55,
            whiteSpace: 'nowrap',
          }}
        >
          I agree to the following
        </Typography>
        <Box sx={{ height: '1px', flex: 1, bgcolor: 'rgba(5,50,97,0.1)' }} />
      </Box>

      {/* Items */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {ITEMS.map((item, index) => {
          const checked = checkedItems[index];
          return (
            <Box
              key={index}
              onClick={() => handleChange(index)({ target: { checked: !checked } })}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                p: { xs: 1.5, md: 2 },
                borderRadius: 2,
                border: '1.5px solid',
                borderColor: checked ? 'rgba(46,125,50,0.35)' : 'rgba(5,50,97,0.1)',
                bgcolor: checked ? 'rgba(46,125,50,0.04)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: checked ? 'rgba(46,125,50,0.5)' : 'rgba(5,50,97,0.25)',
                  bgcolor: checked ? 'rgba(46,125,50,0.06)' : 'rgba(5,50,97,0.03)',
                },
              }}
            >
              <Checkbox
                checked={checked}
                onChange={handleChange(index)}
                onClick={(e) => e.stopPropagation()}
                icon={<RadioButtonUnchecked sx={{ fontSize: 20, color: 'rgba(5,50,97,0.3)' }} />}
                checkedIcon={<CheckCircle sx={{ fontSize: 20, color: '#2e7d32' }} />}
                sx={{ p: 0, mt: '1px', flexShrink: 0 }}
              />
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.65,
                  color: checked ? 'text.primary' : 'text.secondary',
                  fontWeight: checked ? 500 : 400,
                  transition: 'color 0.2s ease, font-weight 0.2s ease',
                  userSelect: 'none',
                }}
              >
                {item}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Validation message */}
      <Collapse in={anyChecked && !allChecked}>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 2,
            color: '#b45309',
            bgcolor: 'rgba(180,83,9,0.07)',
            border: '1px solid rgba(180,83,9,0.2)',
            borderRadius: 1.5,
            px: 2,
            py: 1,
            fontStyle: 'italic',
          }}
        >
          Please confirm all items above to proceed.
        </Typography>
      </Collapse>
    </Box>
  );
};