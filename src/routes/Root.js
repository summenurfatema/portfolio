import Blog from "../pages/Blog/Blog";
import Contect from "../pages/Contect/Contect";
import Skills from "../pages/Footer/Skills/Skills";
import Project from "../pages/Project/Project";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";


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
            },
            {
                path: '/blog',
                element: <Blog />
            },

            {
                path: '/allprojects',
                element: <ProjectDetail />
            }
        ]
    }
])
export default router