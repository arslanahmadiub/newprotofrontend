import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

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
]

export default customRoutes
