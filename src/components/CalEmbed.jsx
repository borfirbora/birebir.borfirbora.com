import React, { useEffect, useRef } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function MyApp({ CalURL }) {
  const containerRef = useRef(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: true,
        layout: 'month_view',
      });
    })();

    const focusIframe = () => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector('iframe');
        if (iframe) {
          iframe.focus();
        }
      }
    };

    // Check if iframe exists and focus on it
    const intervalId = setInterval(() => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector('iframe');
        if (iframe) {
          iframe.onload = focusIframe;
          clearInterval(intervalId);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
      <Cal
        calLink={CalURL}
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
