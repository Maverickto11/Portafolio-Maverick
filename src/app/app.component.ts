import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { AcercaDeMiComponent } from "./acerca-de-mi/acerca-de-mi.component";
import { HabilidadesComponent } from "./habilidades/habilidades.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { CertificadosComponent } from "./certificados/certificados.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent, AcercaDeMiComponent, HabilidadesComponent, ProyectosComponent, CertificadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioWeb-Maverick';
}
