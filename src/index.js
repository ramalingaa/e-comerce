import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageContextProvider, IconProvider } from './Context/context-index';

ReactDOM.render(
  <React.StrictMode>  
      <PageContextProvider>
      <IconProvider>

        <App />
        </IconProvider>

      </PageContextProvider>
  </React.StrictMode>,
  
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
