import { Outlet } from "react-router-dom";
import Header from "../features/Header/header";

function AppLayout() {
    return (
        <>
            <Header />
            <main className="content-wrapper">
                <Outlet />
            </main>
        </>
    );
}

export default AppLayout;