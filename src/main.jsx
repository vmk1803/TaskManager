import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { Provider as ReduxProvider } from "react-redux"
import store from './Redux/store';

const clientSideRouting = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
      <RouterProvider router={clientSideRouting} />
    </ReduxProvider>
  </React.StrictMode>,
)
