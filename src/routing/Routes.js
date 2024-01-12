import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import OfferCreationPage from "./OfferCreationPage";

const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/creation-annonce", element: <OfferCreationPage />},
]);

export default router;

