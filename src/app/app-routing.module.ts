import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorHomeComponent } from './calculator-home/calculator-home.component';
import { CalculatorAuthGuardGuard } from './calculator-auth-guard.guard';

const appRoutes: Routes = [
 { path: '', component: CalculatorHomeComponent, canActivate: [CalculatorAuthGuardGuard] },
// { path: '', component: CalculatorHomeComponent },
 

 // otherwise redirect to homev
 { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
