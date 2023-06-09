import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, Scroll } from '@angular/router';
import { CardComponent } from './cards/card/card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SelectCardComponent } from './admin/select-card/select-card.component';
import { FullCardComponent } from './cards/full-card/full-card.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

const routes: Routes = [
        
  { path: 'card', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'select-card', component: SelectCardComponent },
  { path: ':id', component: FullCardComponent }, 
  
  { path: '**', redirectTo: 'card' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
