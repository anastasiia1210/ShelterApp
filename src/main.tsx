import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from "./Components/Home/Home";
import Animals from "./Components/Animals/Animals";
import Volunteering from "./Components/Volunteering/Volunteering";
import Donate from "./Components/Donate/Donate";
import AnimalsAdmin from "./Components/Animals/AnimalsAdmin.tsx";
import EditAnimal from "./Components/Request/EditAnimal.tsx";
import AnimalsRequest from "./Components/Animals/AnimalsRequest.tsx";

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
                path: "/animals-admin",
                element: <AnimalsAdmin />,
            },
            {
                path: "/animals-request",
                element: <AnimalsRequest />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
