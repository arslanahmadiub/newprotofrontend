import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import ServicesDetails from './views/Services/ServicesDetails'
import ViewTask from './views/Tasks/ViewTask'
import AddTask from './views/Tasks/AddTask'
import TaskDetails from './views/Tasks/TaskDetails'




const AddParts = Loadable(lazy(() => import('./views/Parts/AddParts')))
const ViewParts = Loadable(lazy(() => import('./views/Parts/ViewParts')))

const AddServices = Loadable(lazy(() => import('./views/Services/AddServices')))
const ViewServices = Loadable(
    lazy(() => import('./views/Services/ViewServices'))
)

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
        element: <TaskDetails/>,
    },
]

export default customRoutes
