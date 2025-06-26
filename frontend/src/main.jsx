import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { BrowserRouter } from 'react-router-dom'
import { Provider as RedxProvider } from 'react-redux'
import store from './redux/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RedxProvider store={store}>
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </RedxProvider>
  </StrictMode>
  ,
)
