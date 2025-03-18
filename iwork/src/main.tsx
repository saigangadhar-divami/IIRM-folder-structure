import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {registerServiceWorker} from '../../ServiceWorkerRegistration.tsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// Register service worker
registerServiceWorker();
