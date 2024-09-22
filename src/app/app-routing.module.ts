import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './core/component/ticket/ticket.component';
import { ShowEventComponent } from './core/component/show-event/show-event.component';
import { RentVenuComponent } from './core/component/rent-venu/rent-venu.component';
import { AboutUsComponent } from './core/component/about-us/about-us.component';
import { HomeComponent } from './core/component/home/home.component';

const routes: Routes = [
  { path: 'ticket', component: TicketComponent },
  { path: 'shows-event', component: ShowEventComponent },
  { path: 'rentVenu', component: RentVenuComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
