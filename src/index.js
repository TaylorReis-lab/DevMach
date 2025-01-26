import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from '../src/containers/Home';
import Globalstyles from './styles/globalstyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Home />
    <Globalstyles />
  </>
);
