import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import AddService from "../../components/AddService/AddService";
import AllService from "../../components/AllService/AllService";
import Blog from "../../components/Blog/Blog";
import FoodDetail from "../../components/FoodDetails/FoodDetail";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import Review from "../../components/Review/Review";
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
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/register",
				element: <Registration></Registration>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/review",
				element: <Review></Review>,
				
			},
			{
				path: "/service",
				element: <AddService></AddService>,
			},
			{
		path: "/detailService/:id",
		element: <FoodDetail></FoodDetail>,
		loader: ({ params }) =>
		fetch(`http://localhost:5000/allServices/${params.id}`),
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/allFood",
				element: <AllService></AllService>,
			},
		],
	},
]);

 export default router