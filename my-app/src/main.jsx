import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <BrowserRouter>
        <Routes> */}
           <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        {/* </Routes>
      </BrowserRouter> */}
  </StrictMode>,
)
