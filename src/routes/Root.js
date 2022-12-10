import Contect from "../pages/Contect/Contect";
import Skills from "../pages/Footer/Skills/Skills";
import Project from "../pages/Project/Project";
import Resume from "../pages/Resume/Resume";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/contact',
                element: <Contect />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/projects',
                element: <Project />
            }
        ]
    }
])
export default router