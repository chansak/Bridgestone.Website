/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards.home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/dashboards/home',
    },
    {
        id      : 'dashboards',
        title   : 'Bridgestone',
        subtitle: 'OE Budget Sytem',
        type    : 'group',
        icon    : 'mat_outline:apps',
        children: [
            {
                id   : 'dashboards.vehicleprod',
                title: 'Estimate Vehicle Production',
                type : 'collapsable',
                icon : 'mat_outline:directions_car_filled',
                link : '/dashboards/vehicleprod',
                children:[
                    {
                        id        : 'dashboards.vehicleprod.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/dashboards/vehicleprod',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.vehicleprod.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/dashboards/vehicleprod/upload'
                    },
                    {
                        id   : 'dashboards.vehicleprod.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/dashboards/vehicleprod/checking'
                    },
                ]
            },
            {
                id   : 'dashboards.tiredemand',
                title: 'Tire Demand',
                type : 'collapsable',
                icon : 'mat_solid:album',
                link : '/dashboards/tiredemand',
                children:[
                    {
                        id        : 'dashboards.tiredemand.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/dashboards/tiredemand',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.tiredemand.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/dashboards/tiredemand/upload'
                    },
                    {
                        id   : 'dashboards.tiredemand.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/dashboards/tiredemand/search'
                    },
                ]
            },
            {
                id   : 'dashboards.saledemand',
                title: 'Sales Demand',
                type : 'collapsable',
                icon : 'mat_solid:attach_money',
                link : '/dashboards/saledemand',
                children:[
                    {
                        id        : 'dashboards.saledemand.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/dashboards/saledemand',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.saledemand.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/dashboards/saledemand/upload'
                    },
                    {
                        id   : 'dashboards.saledemand.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/dashboards/saledemand/search'
                    },
                ]
            },
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'app.settings',
        title   : 'Application',
        subtitle: 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [
            {
                id      : 'app.settings.master',
                title   : 'Master Data',
                icon    : 'heroicons_outline:database',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'app.settings.master.vehicle',
                        title   : 'Vehicle',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'app.settings.master.vehicle.band',
                                title   : 'Brand',
                                type    : 'basic',
                            }
                        ]
                    },
                    {
                        id      : 'app.settings.master.tire',
                        title   : 'Tire',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'app.settings.master.tire.band',
                                title   : 'AAA',
                                type    : 'basic',
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards.home',
        title: 'Home',
        subtitle: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/dashboards/home',
    },
    {
        id      : 'dashboards',
        title   : 'Bridgestone',
        subtitle: 'OE Budget Sytem',
        type    : 'group',
        icon    : 'mat_outline:apps',
        children: [
            {
                id   : 'dashboards.vehicleprod',
                title: 'Estimate Vehicle Production',
                type : 'collapsable',
                icon : 'mat_outline:directions_car_filled',
                link : '/dashboards/vehicleprod',
                children:[
                    {
                        id        : 'dashboards.vehicleprod.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/dashboards/vehicleprod',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.vehicleprod.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/dashboards/vehicleprod/upload'
                    },
                    {
                        id   : 'dashboards.vehicleprod.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/dashboards/vehicleprod/checking'
                    },
                ]
            },
            {
                id   : 'dashboards.tiredemand',
                title: 'Tire Demand',
                type : 'collapsable',
                icon : 'mat_solid:album',
                link : '/dashboards/tiredemand',
                children:[
                    {
                        id        : 'dashboards.tiredemand.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/dashboards/tiredemand',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.tiredemand.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/dashboards/tiredemand/upload'
                    },
                    {
                        id   : 'dashboards.tiredemand.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/dashboards/tiredemand/search'
                    },
                ]
            },
            {
                id   : 'dashboards.saledemand',
                title: 'Sales Demand',
                type : 'collapsable',
                icon : 'mat_solid:attach_money',
                link : '/dashboards/saledemand',
                children:[
                    {
                        id        : 'dashboards.saledemand.home',
                        title     : 'Search',
                        type      : 'basic',
                        icon      : "heroicons_outline:document-search",
                        link      : '/dashboards/saledemand',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.saledemand.upload',
                        title: 'Upload File',
                        type : 'basic',
                        icon : 'heroicons_outline:upload',
                        link : '/dashboards/saledemand/upload'
                    },
                    {
                        id   : 'dashboards.saledemand.search',
                        title: 'Status checking',
                        type : 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link : '/dashboards/saledemand/search'
                    },
                ]
            },
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'app.settings',
        title   : 'Application',
        subtitle: 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [
            {
                id      : 'app.settings.master',
                title   : 'Master Data',
                icon    : 'heroicons_outline:database',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'app.settings.master.vehicle',
                        title   : 'Vehicle',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'app.settings.master.vehicle.band',
                                title   : 'Brand',
                                type    : 'basic',
                            }
                        ]
                    },
                    {
                        id      : 'app.settings.master.tire',
                        title   : 'Tire',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'app.settings.master.tire.band',
                                title   : 'AAA',
                                type    : 'basic',
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
