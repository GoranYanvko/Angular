import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { GardServices } from '../core/services/gars/gards.services';

@Injectable()

export class AuthGards implements CanActivate {
    constructor(private auth: GardServices, private router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.auth.isTokenLive()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}