import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import Router from './routes/Router.tsx'
import './scss/styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={Router}/>
      {/* <ReactQueryDevtools /> */}
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
