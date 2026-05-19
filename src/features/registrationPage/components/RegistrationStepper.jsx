import { CameraAlt, CheckCircle, LocationOn, Payment, Person, School } from '@mui/icons-material';

const ICONS = [Person, LocationOn, CameraAlt, School, Payment, CheckCircle];

export const RegistrationStepper = ({
  steps = ['Personal', 'Location', 'Photo', 'Education', 'Payment', 'Complete'],
  activeStep = 0,
  onStepClick,
}) => {
  return (
    <div className="reg-stepper">
      <style>{`
        .reg-stepper {
          --active:     #F7CF13;
          --active-glow: rgba(247, 207, 19, 0.25);
          --done-label: rgba(247, 207, 19, 0.65);
          --idle-bg:    rgba(255, 255, 255, 0.14);
          --idle-border:rgba(255, 255, 255, 0.2);
          --idle-label: rgba(255, 255, 255, 0.38);
          --icon-on:    #053261;
          --icon-off:   rgba(255, 255, 255, 0.4);
          width: 100%;
          margin-bottom: 2rem;
        }

        /* ── Desktop ───────────────────────────── */
        .rs-desktop {
          display: flex;
          align-items: flex-start;
        }

        .rs-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          cursor: default;
        }
        .rs-step.is-done { cursor: pointer; }

        /* connector */
        .rs-step::after {
          content: '';
          position: absolute;
          top: 19px;
          left: calc(50% + 22px);
          right: calc(-50% + 22px);
          height: 2px;
          border-radius: 2px;
          background: var(--idle-bg);
          transition: background 0.35s ease;
        }
        .rs-step:last-child::after { display: none; }
        .rs-step.is-done::after    { background: var(--active); }

        /* icon circle */
        .rs-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          background: var(--idle-bg);
          border: 1.5px solid var(--idle-border);
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .rs-step.is-active .rs-icon {
          background: var(--active);
          border-color: transparent;
          transform: scale(1.12);
          box-shadow: 0 0 0 4px var(--active-glow), 0 4px 14px var(--active-glow);
        }
        .rs-step.is-done .rs-icon {
          background: var(--active);
          border-color: transparent;
          box-shadow: 0 0 0 3px var(--active-glow);
        }

        /* label */
        .rs-label {
          margin-top: 16px;
          font-size: 0.67rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-align: center;
          color: var(--idle-label);
          transition: color 0.3s ease;
          line-height: 1.3;
        }
        .rs-step.is-active .rs-label { color: var(--active); font-weight: 700; }
        .rs-step.is-done   .rs-label { color: var(--done-label); }

        /* ── Mobile ────────────────────────────── */
        .rs-mobile { display: none; }

        .rs-mob-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .rs-mob-name  { font-size: 0.85rem; font-weight: 700; color: var(--active); }
        .rs-mob-count { font-size: 0.72rem; font-weight: 600; color: var(--idle-label); }

        .rs-track {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }
        .rs-seg {
          flex: 1;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.15);
          transition: background 0.3s ease;
        }
        .rs-seg.is-done   { background: var(--active); }
        .rs-seg.is-active { background: rgba(247,207,19,0.45); }

        .rs-mini-row {
          display: flex;
          justify-content: space-between;
        }
        .rs-mini {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid transparent;
          transition: all 0.25s ease;
          cursor: default;
          position: relative;
        }
        .rs-mini.is-done   { background: var(--active); cursor: pointer; }
        .rs-mini.is-active {
          background: var(--active);
          border-color: var(--active-glow);
          transform: scale(1.15);
          box-shadow: 0 0 10px var(--active-glow);
        }
        .rs-mini-tip {
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(5,50,97,0.92);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 3px 8px;
          border-radius: 4px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .rs-mini:hover .rs-mini-tip { opacity: 1; }

        @media (max-width: 600px) {
          .rs-desktop { display: none; }
          .rs-mobile  { display: block; }
        }
      `}</style>

      {/* ── Desktop stepper ─────────────────────────── */}
      <div className="rs-desktop">
        {steps.map((label, i) => {
          const Icon = ICONS[i];
          const isActive = i === activeStep;
          const isDone   = i < activeStep;
          const cls = `rs-step${isActive ? ' is-active' : isDone ? ' is-done' : ''}`;

          return (
            <div
              key={label}
              className={cls}
              onClick={() => isDone && onStepClick?.(i)}
              title={isDone ? `Go back to ${label}` : undefined}
            >
              <div className="rs-icon">
                {Icon && (
                  <Icon sx={{ fontSize: 18, color: isActive || isDone ? '#053261' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease' }} />
                )}
              </div>
              <span className="rs-label">{label}</span>
            </div>
          );
        })}
      </div>

      {/* ── Mobile stepper ──────────────────────────── */}
      <div className="rs-mobile">
        <div className="rs-mob-header">
          <span className="rs-mob-name">{steps[activeStep]}</span>
          <span className="rs-mob-count">{activeStep + 1} / {steps.length}</span>
        </div>

        <div className="rs-track">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`rs-seg${i < activeStep ? ' is-done' : i === activeStep ? ' is-active' : ''}`}
            />
          ))}
        </div>

        <div className="rs-mini-row">
          {steps.map((label, i) => {
            const Icon    = ICONS[i];
            const isDone  = i < activeStep;
            const isActive = i === activeStep;
            const cls = `rs-mini${isDone ? ' is-done' : isActive ? ' is-active' : ''}`;
            return (
              <div key={i} className={cls} onClick={() => isDone && onStepClick?.(i)}>
                {Icon && (
                  <Icon sx={{ fontSize: 14, color: isDone || isActive ? '#053261' : 'rgba(255,255,255,0.35)' }} />
                )}
                <span className="rs-mini-tip">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};