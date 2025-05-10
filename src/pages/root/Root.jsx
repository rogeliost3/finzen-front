import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import TopBar from "../../components/topbar/TopBar.jsx";
import { AuthProvider } from "../../context/AuthContext.jsx";

function Root() {
    return (
        <AuthProvider>
            <header>
                <TopBar />
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </AuthProvider>
    )
}

export default Root;