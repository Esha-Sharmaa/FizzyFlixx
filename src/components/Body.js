import Login from "./Login";
import Browse from "./Browse";
import image from "../images/backgroundnetflix.jpg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center h-screen"
    >
        
        <RouterProvider router={appRouter} />
    </div>
}
export default Body;

// 