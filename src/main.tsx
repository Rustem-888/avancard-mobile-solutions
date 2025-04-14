
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Make sure the root element exists before trying to render
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create root and render with correct React 18 API
const root = createRoot(rootElement);
root.render(<App />);
