import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import FoodDetail from "../../components/FoodDetails/FoodDetail";
import Home from "../../components/Home/Home";
import Main from "../../Layout/Main";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
            },
            {
                path: "/detailService",
                element:<FoodDetail></FoodDetail>
            },
			{
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>
			},
		],
	},
]);

 export default router