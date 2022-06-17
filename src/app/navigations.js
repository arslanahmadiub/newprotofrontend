export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },

    {
        name: 'Services',
        path: '/services',
        icon: 'receipt',
    },

    {
        name: 'Parts',
        icon: 'widgets',
        children: [
            {
                name: 'Add parts',
                path: '/parts/add',
                iconText: 'A',
            },

            {
                name: 'View Parts',
                path: '/parts/view',
                iconText: 'E',
            },
        ],
    },

    {
        name: 'Customers',
        path: '/customers',
        icon: 'transfer_within_a_station',
    },
    {
        name: 'Tasks',
        path: '/tasks',
        icon: 'tasks',
    },
    {
        name: 'Mechanics',
        path: '/mechanics',
        icon: 'subtitles',
    },
    {
        name: 'Enquiries',
        path: '/enquieries',
        icon: 'speaker_notes',
    },
    {
        name: 'Invoices',
        path: '/invoices',
        icon: 'featured_play_list',
    },
    {
        name: 'Notification',
        path: '/notification',
        icon: 'notifications_active',
    },
    {
        name: 'Setting',
        path: '/setting',
        icon: 'brightness_low',
    },
    {
        name: 'LogOut',
        path: '/',
        icon: 'logout',
    },
]
