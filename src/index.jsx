import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from "./components/App.jsx";
import { Rules } from "./components/Rules.jsx";
import { getImages } from './get-images.js';
import { results } from './data.js';
import "./sass/style.scss"

const root = document.getElementById('root');

if(!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App getImages={getImages} results={results}/>,
        children: [
            {
                path: '/components',
                element:  <Rules />
            },
        ]
    },
]);

container.render(
    <RouterProvider router={router} />
);
