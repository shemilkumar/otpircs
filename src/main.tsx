import './index.css'
import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);