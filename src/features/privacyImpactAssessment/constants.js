import {
  AssignmentOutlined,
  FindInPageOutlined,
  ReportProblemOutlined,
} from '@mui/icons-material';

export const STEPS = [
  {
    icon: FindInPageOutlined,
    step: '01',
    color: '#1D9E75',
    backgroundColor: '#E1F5EE',
    title: 'Set Up & Answer',
    description:
      'Provide organization details and complete a guided questionnaire about your data processing activities.',
  },
  {
    icon: ReportProblemOutlined,
    step: '02',
    color: '#378ADD',
    backgroundColor: '#E6F1FB',
    title: 'Analyze & Review Risks',
    description:
      'Our system evaluates your inputs, calculates risk levels, and shows insights in a clear dashboard with recommended actions.',
  },
  {
    icon: AssignmentOutlined,
    step: '03',
    color: '#D85A30',
    backgroundColor: '#FAECE7',
    title: 'Generate & Export Report',
    description:
      'Automatically generate your full Privacy Impact Assessment report and export it in PDF or DOCX.',
  },
];

export const TIERS = [
  {
    name: 'Basic',
    price: '999',
    description: 'Ideal for small businesses conducting their first PIA.',
    features: [
      '1 Privacy Impact Assessment (PIA) project'
    ],
  },
  {
    name: 'Professional',
    price: '2,999',
    description: 'For growing organizations with multiple data processes.',
    features: [
      '10 Privacy Impact Assessment (PIA) project',
      'Risk Dashboard'
    ],
  },
  {
    name: 'Enterprise',
    price: '8,999',
    description: 'Full-scale PIA for complex, multi-department environments.',
    features: [
      'Unlimited Privacy Impact Assessment (PIA) project',
      'Risk Dashboard',
      'Team Access'
    ],
  },
];
