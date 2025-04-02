import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Expensify from "./components/expensify-components/Expensify/Expensify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "portfolio",
        element: <Portfolio />,
    },
    {
        path: "portfolio/expensify-case-study",
        element: <Expensify />,
    },
]);

export default router;