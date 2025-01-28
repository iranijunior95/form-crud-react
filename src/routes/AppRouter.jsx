import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import Home from "../pages/Home/home.jsx";
import Form from "../pages/Form/form.jsx";
import Listar from "../pages/Listar/listar.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />} >
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/listar" element={<Listar />} />
                <Route path="/novo" element={<Form />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;