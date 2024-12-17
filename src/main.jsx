import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpetApp } from './GifExpetApp';

import './styles.css';

createRoot(
  document.getElementById('root')).render(
    <StrictMode>
      <GifExpetApp />
    </StrictMode>
  );
