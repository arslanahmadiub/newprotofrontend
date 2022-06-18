import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AddParts = Loadable(lazy(() => import('./views/Parts/AddParts')))
const ViewParts = Loadable(lazy(() => import('./views/Parts/ViewParts')))

const customRoutes = [
    {
        path: '/parts/add',
        element: <AddParts />,
    },
    {
        path: '/parts/view',
        element: <ViewParts />,
    },
]

export default customRoutes
