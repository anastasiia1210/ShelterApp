import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from "./Components/Home/Home";
import Animals from "./Components/Animals/Animals";
import Volunteering from "./Components/Volunteering/Volunteering";
import Donate from "./Components/Donate/Donate";
import VolunteeringRequests from "./Components/Volunteering/VolunteeringRequests";
import AnimalsAdmin from "./Components/Animals/AnimalsAdmin";
import AnimalsRequest from "./Components/Animals/AnimalsRequest";

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
            },
            {
                path: "/volunteeringRequests",
                element: <VolunteeringRequests/>,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
