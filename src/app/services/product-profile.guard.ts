import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductProfileGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('Inside ProductProfileGuard route', route);
    console.log('Inside ProductProfileGuard state', state);
    let id = +route.paramMap.get('id');
    if (!isNaN(id) && id > 0) {
      return true;
    } else {
      this.router.navigate(['not-found']);
      return false;
    }
  }
}
