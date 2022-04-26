import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import {theme }from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

///Using the ThemeProvider so the Mui components can have their default settings overriden
root.render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

