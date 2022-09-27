import { Route } from '@angular/router';
import { VehicleprodComponent } from '@module/admin/dashboards/vehicleprod/vehicleprod.component';
import { VehicleprodResolver} from '@module/admin/dashboards/vehicleprod/vehicleprod.resolver';
import {UploadComponent} from '@module/admin/dashboards/vehicleprod/upload/upload.component';

export const vehicleprodRoutes: Route[] = [
    {
        path     : '',
        component: VehicleprodComponent,
        resolve  : {

        }
    },
    {
        path     : 'upload',
        component: UploadComponent,
        resolve  : {
            
        }
    },
];
