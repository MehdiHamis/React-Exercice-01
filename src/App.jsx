import "./App.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";
import "./assets/css/reset.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/router";

const APP = () => {
	return <RouterProvider router={Router} />;
};

export default APP;
