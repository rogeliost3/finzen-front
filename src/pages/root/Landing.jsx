import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Landing.css";
import logo from "../../assets/logo-apaisado.png";

import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

//TODO:  Cambiar el logo y hacer mas grande el texto slogan que no se ve
//TODO:  Hacer transparente la section que rodea a los charts, para que se vea el fondo del landing

function Landing() {
    const { userData } = useContext(AuthContext);

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        ArcElement,
        LineElement,
        PointElement,
        Tooltip,
        Legend
    );

    const goalsData = {
        labels: ["Vacation", "Emergency", "Savings", "Car"],
        datasets: [
            {
                label: "Progress",
                data: [60, 90, 30, 45],
                backgroundColor: "#3b82f6",
            },
        ],
    };

    const budgetsData = {
        labels: ["Vacation", "Emergency", "Savings", "Car"],
        datasets: [
            {
                label: "Progress",
                data: [60, 90, 30, 45],
                backgroundColor: "#3b82f6",
            },
        ],
    };

    const transactionsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Expenses",
                data: [500, 650, 700, 480, 620],
                borderColor: "#ef4444",
                backgroundColor: "#fecaca",
                tension: 0.4,
            },
        ],
    };

    const overviewData = {
        labels: ["Income", "Expenses", "Saved"],
        datasets: [
            {
                label: "Overview",
                data: [2500, 1800, 700],
                backgroundColor: ["#10b981", "#ef4444", "#3b82f6"],
            },
        ],
    };

    return (
        <>
            {!userData ? (
                <section className="landing">
                    <div className="overlay">
                        <div className="landing-container">
                            <div className="landing-text">
                                <h1>FinZen – Find Your Financial Balance</h1>
                                <p>
                                    Take control of your personal finances with FinZen. Track your expenses, create smart budgets, and achieve your financial goals — short and long-term.
                                </p>
                                <div className="buttons">
                                    <a href="/register" className="btn">Register</a>
                                    <a href="/login" className="btn secondary">Sign in</a>
                                </div>
                            </div>
                            <div className="landing-logo">
                                <img src={logo} alt="FinZen Logo" />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="dashboard">
                    <div className="card">
                        <h2>Goals</h2>
                        <Bar data={goalsData} />
                    </div>
                    <div className="card">
                        <h2>Budgets</h2>
                        <Doughnut data={budgetsData} />
                    </div>
                    <div className="card">
                        <h2>Transactions</h2>
                        <Line data={transactionsData} />
                    </div>
                    <div className="card">
                        <h2>Financial Overview</h2>
                        <Pie data={overviewData} />
                    </div>
                </section>
            )}
        </>
    );
}

export default Landing;
