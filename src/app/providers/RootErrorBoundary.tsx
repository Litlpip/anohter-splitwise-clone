import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class RootErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(): Partial<State> {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('RootErrorBoundary caught a critical error:', error, errorInfo)
    this.setState({
      error,
    })
  }

  render() {
    if (this.state.hasError) {
      const { error } = this.state

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#dc2626',
              marginBottom: '12px',
            }}>
              ⚠️ Critical Error
            </h1>
            <p style={{
              color: '#6b7280',
              marginBottom: '20px',
            }}>
              A critical error occurred while loading the application.
            </p>

            {error && (
              <div style={{
                backgroundColor: '#fee2e2',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '20px',
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#7f1d1d',
                  marginBottom: '8px',
                }}>
                  {error.name}
                </p>
                <p style={{
                  color: '#991b1b',
                  fontSize: '14px',
                }}>
                  {error.message}
                </p>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
