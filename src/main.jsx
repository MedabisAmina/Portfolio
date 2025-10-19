import React from 'react';

/**
 * Node mmodules
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * components
 */


import App from './App.jsx'

/**
 * css link
 */

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
