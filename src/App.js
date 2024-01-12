import { RouterProvider } from "react-router-dom";
import HomePage from "./routing/HomePage";
import router from "./routing/Routes";

const App = () => {
    return (
        <>
            <RouterProvider router = {router}>
                <HomePage />
            </RouterProvider>
        </>
    )
};

export default App;