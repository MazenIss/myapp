import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface canComponentDeactivate {
  canDeactivate : ()=> Observable<boolean> | Promise<boolean> | boolean ;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<canComponentDeactivate> {

canDeactivate(component: canComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
   nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
}}
