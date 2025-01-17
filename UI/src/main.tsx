import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { AuthrizationContextProvider } from './context/authContext.tsx';
import DefualtLayout from './layouts/defualtLayout.tsx';
import { LoaderContextProvider } from './context/loaderContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router >
      <LoaderContextProvider>
        <AuthrizationContextProvider>
          <DefualtLayout>
            <App />
          </DefualtLayout>
        </AuthrizationContextProvider>
      </LoaderContextProvider>
    </Router>
  </StrictMode>,
)
