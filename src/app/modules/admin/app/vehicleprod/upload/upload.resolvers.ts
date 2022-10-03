import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { FuseAlertService } from '@fuse/components/alert';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    resolve(): Observable<any> {
        this._fuseAlertService.dismiss('notification');
        return of('Resolve').pipe(delay(1000));
      }
}
