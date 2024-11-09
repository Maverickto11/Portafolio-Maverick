import { Component } from '@angular/core';
import { ContactoComponent } from "../contacto/contacto.component";

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
