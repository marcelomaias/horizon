import React from 'react'

const BeforeLogin: React.FC = () => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('payload-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('payload-theme');
                if (theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              } catch(e) {}
            })();
          `,
        }}
      />
      <div style={{ lineHeight: 1.6, marginBottom: '24px' }}>
        <p style={{ marginBottom: '16px' }}>
          <strong>You are viewing the Horizon admin interface.</strong>
          <br />
          Use the demo credentials below to explore how pages and content are managed.
        </p>

        <div style={{ marginBottom: '16px' }}>
          <strong>Demo credentials</strong>
          <div>
            Email: <strong>editor@horizoncontent.dev</strong>
          </div>
          <div>
            Password: <strong>SxaYrQ2dNd8</strong>
          </div>
        </div>

        <p>
          <em>This demo environment resets periodically.</em>
        </p>
      </div>
    </>
  )
}

export default BeforeLogin
