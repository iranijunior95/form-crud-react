import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home.jsx";
import Form from "../pages/Form/form.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/novo" element={<Form />} />
        </Routes>
    );
}

export default AppRouter;