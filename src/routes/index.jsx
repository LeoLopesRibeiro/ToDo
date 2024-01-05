import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import List from "../pages/Lista/index.jsx";

const routes = createBrowserRouter([
    {
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/list",
                element: <List/>
            }
        ]
    }
])

export default function Router() {
    return <RouterProvider router={routes} />
}