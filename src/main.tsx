import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Router from './routes/Router.tsx'
const queryClient = new QueryClient()
import './scss/styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}/>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
