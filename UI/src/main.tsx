import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { AuthrizationContextProvider } from './auth/authContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router >
      <AuthrizationContextProvider>
        <App />
      </AuthrizationContextProvider>
    </Router>
  </StrictMode>,
)
