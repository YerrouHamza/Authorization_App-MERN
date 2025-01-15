import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import DefualtLayout from './layouts/defualtLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router >
      <DefualtLayout>
        <App />
      </DefualtLayout>
    </Router>
  </StrictMode>,
)
