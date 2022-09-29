import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FuseAlertService } from '@fuse/components/alert';

@Injectable({
    providedIn: 'root'
})
export class UploadResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _fuseAlertService: FuseAlertService )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return new Observable((subscriber) => {
            this._fuseAlertService.dismiss('notification');
            subscriber.complete();
        });
    }
}
