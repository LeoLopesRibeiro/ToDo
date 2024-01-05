import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Lista from "../pages/Lista/index.jsx";

const routes = createBrowserRouter([
    {
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/lista",
                element: <Lista/>
            }
        ]
    }
])

export default function Router() {
    return <RouterProvider router={routes} />
}