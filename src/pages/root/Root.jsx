import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import { AuthProvider } from "../../context/AuthContext.jsx";

function Root() {
    return (
        <AuthProvider>
            <header>
                <Navbar />
            </header>
            <main>
                <h1>Finzen</h1>
                <Outlet />
            </main>
            <footer>

            </footer>
        </AuthProvider>
    )
}

export default Root;