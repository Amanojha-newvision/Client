import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

Injectable({ 
  providedIn: 'root'
})
export const CanActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
    const accountService = inject(AccountService);
    const toastr = inject(ToastrService)

    return accountService.currentUser$.pipe(
      map(user => { 
        if(user) return true;
        else {
          toastr.error('You shall not pass')
          return false
        }
      })
    )
    }
  
    export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => CanActivate(route, state);    

