import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './app/App.tsx'
import { RouterProvider } from 'react-router/dom';
import router from './app/providers/router/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
