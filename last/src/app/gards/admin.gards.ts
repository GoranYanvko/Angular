import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { GardServices } from '../core/services/gars/gards.services';

@Injectable()

export class AdminGards implements CanActivate {
    constructor(private admin: GardServices, private router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

       console.log(localStorage.getItem('rolle'))
        if( localStorage.getItem('rolle')==='admin') {
            return true;
        } else {
          
            localStorage.clear();
            this.router.navigate(['/login']);
            return false;
        }
    }
    

}