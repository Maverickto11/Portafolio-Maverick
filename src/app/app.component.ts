import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { AcercaDeMiComponent } from "./acerca-de-mi/acerca-de-mi.component";
import { HabilidadesComponent } from "./habilidades/habilidades.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, AcercaDeMiComponent, HabilidadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioWeb-Maverick';
}
