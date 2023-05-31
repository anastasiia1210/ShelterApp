import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from "./Components/Home/Home";
import Animals from "./Components/Animals/Animals";
import Volunteering from "./Components/Volunteering/Volunteering";
import Donate from "./Components/Donate/Donate";
import Request from "./Components/Request/Request.tsx";
import FormSignIn from "./Components/Forms/FormSignIn.tsx";
import FormVolunteering from "./Components/Forms/FormVolunteering.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/animals",
                element: <Animals />,
            },
            {
                path: "/volunteering",
                element: <Volunteering />,
            },
            {
                path: "/donate",
                element: <Donate />,
            },
            {
                path: "/formVolunteering",
                element: <FormVolunteering />,
            },
            {
                path: "/formSignIn",
                element: <FormSignIn />,
            },
            {
                path: "/request",
                element: <Request />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
