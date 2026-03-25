import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { gsap } from 'gsap'

// GSAP Performance Optimization
gsap.config({
  force3D: true,
  autoSleep: 60
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
