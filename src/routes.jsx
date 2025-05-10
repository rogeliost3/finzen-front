import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root.jsx';
import NewBudget from './pages/budget/NewBudget.jsx';
import NewUser from './pages/user/newUser.jsx';
import Auth from './pages/auth/Auth.jsx';
import TransactionPage from './pages/transaction/TransactionPage.jsx';
import BudgetPage from './pages/budget/BudgetPage.jsx';
import { getAllCategories } from './utils/api/category.js';
import { getUserInfo } from './utils/api/user.js';
import Landing from "./pages/root/Landing.jsx";

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            { index: true, element: <Landing /> },
            {
            path: "/budget/report",
            element: <BudgetPage />,
            },
            {
                path: "/budget/create",
                element: <NewBudget />,
                loader: getAllCategories,
            },
            {
                path: "/transaction",
                element: <TransactionPage />,
                loader: getAllCategories,
            },            
            {
                path: "/register",
                element: <NewUser />,
            },
            // {
            //     path: "/user/edit",
            //     id: "formEditUser",
            //     element: <EditUser />,
            //     loader: getUserInfo
            // },
            {
                path: "/login",
                element: <Auth />,
            }
            // {
            //     path: "/user/remove",
            //     element: <RemoveUser />,
            // }
        ]
    },
])

export default router;