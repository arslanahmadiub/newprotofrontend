import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import ServicesDetails from './views/Services/ServicesDetails'
import ViewTask from './views/Tasks/ViewTask'
import AddTask from './views/Tasks/AddTask'
import TaskDetails from './views/Tasks/TaskDetails'
import AddCustomer from './views/Customers/AddCustomer'
import ViewCustomer from './views/Customers/ViewCustomer'
import ViewInvoice from './views/Invoices/ViewInvoice'

const AddParts = Loadable(lazy(() => import('./views/Parts/AddParts')))
const ViewParts = Loadable(lazy(() => import('./views/Parts/ViewParts')))

const AddServices = Loadable(lazy(() => import('./views/Services/AddServices')))
const ViewServices = Loadable(
    lazy(() => import('./views/Services/ViewServices'))
)

const ViewMechanic = Loadable(
    lazy(() => import('./views/Mechanic/ViewMechanic'))
)
const ViewMechanicDetails = Loadable(
    lazy(() => import('./views/Mechanic/ViewMechanicDetails'))
)

const AddMechanic = Loadable(lazy(() => import('./views/Mechanic/AddMechanic')))

const customRoutes = [
    {
        path: '/parts/add',
        element: <AddParts />,
    },
    {
        path: '/parts/view',
        element: <ViewParts />,
    },
    {
        path: '/services/add',
        element: <AddServices />,
    },
    {
        path: '/services/view',
        element: <ViewServices />,
    },
    {
        path: '/services/details/:id',
        element: <ServicesDetails />,
    },
    {
        path: '/task/add',
        element: <AddTask />,
    },
    {
        path: '/task/view',
        element: <ViewTask />,
    },
    {
        path: '/task/details/:id',
        element: <TaskDetails />,
    },
    {
        path: '/customer/add',
        element: <AddCustomer />,
    },
    {
        path: '/customer/view',
        element: <ViewCustomer />,
    },
    {
        path: '/invoices',
        element: <ViewInvoice />,
    },
    {
        path: '/mechanic/view',
        element: <ViewMechanic />,
    },
    {
        path: '/mechanic/view/details/:id',
        element: <ViewMechanicDetails />,
    },
    {
        path: '/mechanic/add',
        element: <AddMechanic />,
    },
]

export default customRoutes
