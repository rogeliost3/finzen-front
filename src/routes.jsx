import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root.jsx';
// import TransactionList from './pages/transactionList/TransactionList';
// import BudgetList from './pages/budgetList/BudgetList';
import Auth from './pages/auth/Auth.jsx';

// import { getAllProducts } from './utils/api/product';
// import { getAllStands } from './utils/api/stand';

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            // {
            //     path: "/budget",
            //     element: <BudgetList />,
            //     loader: getAllBudgets
            // },
            // {
            //     path: "/transaction",
            //     element: <TransactionList />,
            //     loader: getAllTransactions
            // },
            {
                path: "/login",
                element: <Auth />,
            }
        ]
    },
])

export default router;