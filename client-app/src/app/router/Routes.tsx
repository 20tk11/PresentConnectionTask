import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import BillForm from "../../layouts/forms/BillForm";
import HomePage from "../../layouts/views/HomePage";
import InvoicePage from "../../layouts/views/InvoicePage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'bill', element: <BillForm /> },
            { path: 'invoice', element: <InvoicePage /> },
        ]
    }
]


export const router = createBrowserRouter(routes);