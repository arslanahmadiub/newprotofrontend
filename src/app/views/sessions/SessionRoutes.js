import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const NotFound = Loadable(lazy(() => import('./NotFound')))
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')))
const JwtLogin = Loadable(lazy(() => import('./login/JwtLogin')))
const JwtRegister = Loadable(lazy(() => import('./register/JwtRegister')))

const sessionRoutes = [
    {
        path: '/signup',
        element: <JwtRegister />,
    },
    {
        path: '/',
        element: <JwtLogin />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/not-found',
        element: <NotFound />,
    },
]

export default sessionRoutes
