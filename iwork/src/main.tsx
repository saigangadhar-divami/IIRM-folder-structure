import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {registerServiceWorker} from '../../ServiceWorkerRegistration.tsx'


// Sentry.init({
//   dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0', // Replace with your Sentry DSN
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register service worker
registerServiceWorker();
