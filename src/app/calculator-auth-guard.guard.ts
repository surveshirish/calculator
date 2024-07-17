import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class CalculatorAuthGuardGuard implements CanActivate {
  us!:User;
  constructor(private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      this.us=new User();
      this.us.firstName="Admin";  
      localStorage.setItem('currentUser', JSON.stringify(this.us));
      if (localStorage.getItem('currentUser')) {
        return true;
        }
  
           // if not logged in redirect to login page with the return url
           this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
           return false;
  }
  
}
