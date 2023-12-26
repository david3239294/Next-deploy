import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect } from 'react';

const SplineObj: NextPage = () => {
  useEffect(() => {
    const loadSplineViewer = (url: string) => {
      const script = document.createElement('script');
      script.src =
        'https://unpkg.com/@splinetool/viewer@1.0.16/build/spline-viewer.js';
      script.type = 'module';
      script.async = true;

      script.onload = () => {
        const splineViewer = document.createElement('spline-viewer');
        splineViewer.setAttribute('url', url);

        const container = document.getElementById('spline-container');
        if (container && !container.querySelector('spline-viewer')) {
          container.appendChild(splineViewer);
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    // Load first spline viewer
    loadSplineViewer(
      'https://prod.spline.design/H61mVeng8sWMIx75/scene.splinecode'
    );
  }, []);

  return (
    <>
      <Head>
        <title>Home | Tsuki Inu</title>
        <meta
          name="google-site-verification"
          content="J9uDTeg3iujyef0pzqJ7s7xDlmizshJEn0767--L3nA"
        />
        <meta name="description" content="Home | Tsuki Inu" />
        <style>
          {`
            body,
            html {
              margin: 0;
              padding: 0;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            #spline-container {
              width: 70vw;
              height: 100vh;
              max-width: 1200px;
              max-height: 800px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin: 0 auto; /* Center horizontally */
            }
            .rotating-text-container {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 50vh;
              background-color: black;
            }
            .rotating-text {
              font-size: 48px;
              animation: glowText 2s infinite alternate;
              /* Stop rotation */
              animation-play-state: paused;
              /* Other styles */
            }
            @keyframes glowText {
              from {
                color: blue;
                text-shadow: 0 0 10px blue, 0 0 20px blue, 0 0 30px blue;
              }
              to {
                color: red;
                text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
              }
            }
            spline-viewer {
              margin-bottom: 10px;
            }
          `}
        </style>
      </Head>
      <div id="spline-container">
        {/* SplineViewers will be dynamically created here */}
      </div>
      <div className="rotating-text-container">
        <div className="rotating-text">Welcome To Tsuki Inu</div>
      </div>
    </>
  );
};

export default SplineObj;
