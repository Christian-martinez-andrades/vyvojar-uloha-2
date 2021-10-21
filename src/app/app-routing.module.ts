import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/elementos/home/home.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';


const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  { path: 'employees', component: ListEmployeeComponent },
  // Pruebas
  // { path: 'pruebaGPS', component: PruebagpsComponent },
  // { path: 'pruebaGoogle', component: MapaGoogleComponent },
  // { path: 'pruebamapa', component: MapaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
