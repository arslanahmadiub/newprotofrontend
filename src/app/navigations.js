export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'Services',
        icon: 'receipt',
        children: [
            {
                name: 'Add Services',
                path: 'services/add',
                iconText: 'A',
            },

            {
                name: 'View Services',
                path: '/services/view',
                iconText: 'E',
            },
        ],
    },

    {
        name: 'Parts',
        icon: 'widgets',
        children: [
            {
                name: 'Add Parts',
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
        icon: 'transfer_within_a_station',
        children: [
            {
                name: 'Add Customer',
                path: '/customer/add',
                iconText: 'A',
            },

            {
                name: 'View Customer',
                path: '/customer/view',
                iconText: 'E',
            },
        ],
    },

    {
        name: 'Tasks',
        icon: 'tasks',
        children: [
            {
                name: 'Add Task',
                path: '/task/add',
                iconText: 'A',
            },

            {
                name: 'View Task',
                path: '/task/view',
                iconText: 'E',
            },
        ],
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
