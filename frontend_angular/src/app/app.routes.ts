import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import * as inicioSesionComponent from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'sesion', component: inicioSesionComponent.InicioSesionComponent },
    { path: 'home', component: HomeComponent},
    {
        path: '',
        redirectTo: '/sesion',
        pathMatch: 'full'
    }
    

];
