import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'
import Add from '../Parts/Add'

const Analytics = Loadable(lazy(() => import('./Analytics')))

const dashboardRoutes = [
    {
        path: '/dashboard',
        element: <Analytics />,
        auth: authRoles.admin,
    },
    {
        path: '/parts/add',
        element: <Add />,
        auth: authRoles.admin,
    },
]

export default dashboardRoutes
