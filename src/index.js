import React from 'react';
import ReactDOM from 'react-dom/client';
import { results } from './data.js';
import { getImages } from './get-images.js';
import { App } from './components/app.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App getImages={getImages} results={results}/>);
