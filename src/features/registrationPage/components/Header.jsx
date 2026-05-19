import { useMediaQuery } from "@mui/material";

export const Header = ({ title, icon }) => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className="form-header">
      <style>{`
        .form-header {
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1.5px solid rgba(5, 50, 97, 0.1);
          margin-bottom: 4px;
          position: relative;
          padding: 16px
        }

        .form-header__icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(5, 50, 97, 0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .form-header__text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .form-header__eyebrow {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(5, 50, 97, 0.4);
          line-height: 1;
        }

        .form-header__title {
          font-weight: 700;
          color: #053261;
          line-height: 1.2;
          letter-spacing: -0.2px;
        }

        .form-header__title--desktop { font-size: 1.25rem; }
        .form-header__title--mobile  { font-size: 1.05rem; }
      `}</style>

      <div className="form-header__icon">
        {icon}
      </div>

      <div className="form-header__text">
        <span className="form-header__eyebrow">PDG Registration</span>
        <span className={`form-header__title form-header__title--${isMobile ? 'mobile' : 'desktop'}`}>
          {title}
        </span>
      </div>
    </div>
  );
};