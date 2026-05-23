import { getCloudinaryUrl } from "@/services/cloudinary";

const CONFIG = {
  brand: {
    name: "Philippine Data Guardians",
    tagline: "Securing your digital presence",
    footerTagline: "Securing your digital future.",
    links: {
      privacy: "#",
      terms: "#"
    },
  },
  colors: {
    navy: "#0a3d6b",
    navyMid: "#1565a8",
    accent: "#fbbf24",
  },
};

const styles = {
  '*': {
    fontFamily: "Inter, 'Times New Roman', serif"
  },
  wrapper: {
    background: "#f0f2f5",
    padding: "24px 0",
  },
  card: {
    maxWidth: 600,
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
  },
  header: {
    background: CONFIG.colors.navy,
    padding: "24px 32px",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#ffffff",
    margin: 0,
  },
  accentBar: {
    height: 3,
    background: `linear-gradient(90deg, ${CONFIG.colors.accent}, #f59e0b, ${CONFIG.colors.accent})`,
  },
  body: {
    padding: "32px 32px 28px",
  },
  heading: {
    fontSize: 24,
    color: "#0a2744",
    margin: "0 0 6px",
    fontWeight: 700,
    lineHeight: 1.3,
  },
  subheading: {
    fontSize: 15,
    color: "#64748b",
    margin: "0 0 0",
    lineHeight: 1.6,
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e8edf3",
    margin: "24px 0",
  },
  ctaWrap: {
    textAlign: "center",
    marginBottom: 0,
  },
  ctaText: {
    fontSize: 14,
    color: "#475569",
    margin: "0 0 18px",
    lineHeight: 1.6,
  },
  ctaButton: {
    display: "inline-block",
    background: CONFIG.colors.navy,
    color: "#ffffff",
    textDecoration: "none",
    padding: "13px 36px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.2px",
  },
  warning: {
    background: "#fffbeb",
    border: "1px solid #fde68a",
    borderRadius: 8,
    padding: "12px 16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 24,
  },
  warningText: {
    fontSize: 13,
    color: "#92400e",
    lineHeight: 1.5,
    margin: 0,
  },
  footer: {
    background: "#f8fafd",
    borderTop: "1px solid #e8edf3",
    padding: "18px 32px",
    textAlign: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#94a3b8",
    lineHeight: 1.8,
    margin: 0,
  },
  footerLink: {
    color: CONFIG.colors.navyMid,
    textDecoration: "none",
  },
};


const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CtaSection = ({ actionLink }) => (
  <div style={styles.ctaWrap}>
    <p style={styles.ctaText}>
      Click below to set your password and access your account.
    </p>
    <a href={actionLink} style={styles.ctaButton}>
      Set up my account →
    </a>
  </div>
);

const WarningNotice = () => (
  <div style={styles.warning} role="note">
    <InfoIcon />
    <p style={styles.warningText}>
      This link expires in <strong>24 hours</strong>. Didn't make this
      purchase? You can safely ignore this email.
    </p>
  </div>
);


const logoPdg = getCloudinaryUrl('logo-pdg-1_gojiba');

const EmailHeader = () => (
  <div style={styles.header}>
    {logoPdg && <img src={logoPdg} alt="Philippine Data Guardians" style={{ height: 32 }} />}
    <p style={styles.brandName}>{CONFIG.brand.name}</p>
  </div>
);

const EmailFooter = () => {
  const { links, footerTagline, name } = CONFIG.brand;
  return (
    <div style={styles.footer}>
      <p style={styles.footerText}>
        {name} · {footerTagline}
        <br />
        <a href={links.privacy} style={styles.footerLink}>Privacy policy</a>
        &nbsp;·&nbsp;
        <a href={links.terms} style={styles.footerLink}>Terms of service</a>
      </p>
    </div>
  );
};

export const SampleEmail = ({
  planName = "Premium Plan",
  actionLink = "https://www.phdataguardians.org/setup-account",
}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <EmailHeader />
        <div style={styles.accentBar} />

        <div style={styles.body}>
          <h1 style={styles.heading}>Welcome aboard</h1>
          <p style={styles.subheading}>
            Your {planName} subscription for the Privacy Impact Assessment service is now active.
          </p>

          <hr style={styles.divider} />

          <CtaSection actionLink={actionLink} />
          <WarningNotice />
        </div>

        <EmailFooter />
      </div>
    </div>
  );
};