import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de navbar
import { AboutComponent } from './components/navigation/about/about.component';
import { ContactComponent } from './components/navigation/contact/contact.component';
import { HomeComponent } from './components/navigation/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
