import { useServiceWorker } from '../hooks/useServiceWorker'

export const PWAUpdatePrompt = () => {
  const { needRefresh, offlineReady, updateServiceWorker } = useServiceWorker()

  if (!needRefresh && !offlineReady) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        backgroundColor: '#4F46E5',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        maxWidth: '90vw',
        animation: 'slideUp 0.3s ease-out',
      }}
    >
      <div style={{ flex: 1 }}>
        {needRefresh ? (
          <p style={{ margin: 0, fontSize: '14px' }}>
            New version available! Click to update.
          </p>
        ) : (
          <p style={{ margin: 0, fontSize: '14px' }}>
            App ready to work offline!
          </p>
        )}
      </div>

      {needRefresh && (
        <button
          onClick={() => updateServiceWorker(true)}
          style={{
            backgroundColor: 'white',
            color: '#4F46E5',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Update
        </button>
      )}

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}
