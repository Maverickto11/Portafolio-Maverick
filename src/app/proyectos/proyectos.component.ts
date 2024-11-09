import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CertificadosComponent } from "../certificados/certificados.component";

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  projects = [
    {
      title: 'Trailer de películas',
      link: 'https://trailers-maverick.netlify.app',
      image: '/assets/img/trailers.png',
      techIcons: [
        { src: 'https://angular.io/assets/images/logos/angular/angular.svg', alt: 'Angular Icon' },
      ],
    },
    {
      title: 'Parrilla Eléctrica',
      link: 'https://parrilla-electrica.web.app/',
      image: '/assets/img/parrila-electrica.png',
      techIcons: [
        { src: 'https://angular.io/assets/images/logos/angular/angular.svg', alt: 'Angular Icon' },
      ],
    },
    {
      title: 'Mini Ecommerce',
      link: 'https://ecommerce-maverick.netlify.app',
      image: '/assets/img/ecommerce.png',
      techIcons: [
        { src: 'https://angular.io/assets/images/logos/angular/angular.svg', alt: 'Angular Icon' },
        { src: '/assets/iconos/net.png', alt: 'Spring Boot Icon' },
        { src: '/assets/iconos/sqlServer.png', alt: 'MySQL Workbench Icon' },
      ],
    },
    {
      title: 'Diseño de app para Tienda',
      link: 'https://www.figma.com/proto/Rf2XwR291XgcBsxzbs3ZCe/FIGMA_TAREA',
      image: '/assets/img/figma-tienda.png',
      techIcons: [
        { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma Icon' },
      ],
    },
    {
      title: 'Diseño de app para Animales',
      link: 'https://www.figma.com/proto/sdOkZkDqUHhy6vOU3E0Hvz/Proyecto-UX-(Copy)',
      image: '/assets/img/app-VetCuidados.png',
      techIcons: [
        { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma Icon' },
      ],
    },
    {
      title: 'Visas Flash: Obtén tu visa',
      link: 'https://visasflash4.godaddysites.com/',
      image: '/assets/img/visasflash.png',
      techIcons: [
        { src: '/assets/iconos/wordpress.png', alt: 'WordPress Icon' },
      ],
    },
  ];
}
