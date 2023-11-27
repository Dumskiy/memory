// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { results } from './data.js';
// import { getImages } from './get-images.js';
// import { App } from './components/app.jsx';

import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from "./components/App";


import { InitialPage } from "./components/InitialPage";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App getImages={getImages} results={results}/>);


const root = document.getElementById('root');

if(!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/components',
                element:  <InitialPage />
            },
        ]
    },
]);

container.render(
    <RouterProvider router={router} />
);
