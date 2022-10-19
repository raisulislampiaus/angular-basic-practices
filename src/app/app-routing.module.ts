import { SidebarComponent } from './sidebar/sidebar.component';
import { DistributorComponent } from './distributor/distributor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AttendancelogComponent } from './attendancelog/attendancelog.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
 {
  path:'login', component:LoginComponent
 },
 {
  path:'dashboard', component:DashboardComponent

 },
 {
  path:'distributor', component:DistributorComponent

 },
 {
  path:'attendance', component:AttendancelogComponent

 },
 {
  path:'attendancemap', component: AttendanceComponent

 },
 {
  path:'products', component: ProductListComponent

 },
 {
  path:'productCard', component: ProductCardComponent

 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, DashboardComponent]
