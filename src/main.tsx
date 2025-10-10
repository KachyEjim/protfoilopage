import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('🎯 main.tsx loaded');
console.log('🔍 Looking for root element...');

const rootElement = document.getElementById('root');
console.log('📍 Root element:', rootElement);

if (!rootElement) {
  console.error('❌ ERROR: Root element not found!');
} else {
  console.log('✅ Root element found, creating React root...');
  
  try {
    const root = createRoot(rootElement);
    console.log('✅ React root created, rendering app...');
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    
    console.log('✅ App render called successfully');
  } catch (error) {
    console.error('❌ ERROR during render:', error);
  }
}
