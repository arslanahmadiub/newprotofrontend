import { Navigate } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'
import customRoutes from './CustomRoutes'



const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Navigate to="/dashboard" />,
    },
]

const errorRoute = [
    {
        component: () => <Navigate to="/not-found" />,
    },
]






const routes = [
    ...customRoutes,
    ...dashboardRoutes,
    ...materialRoutes,
    ...chartsRoute,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
