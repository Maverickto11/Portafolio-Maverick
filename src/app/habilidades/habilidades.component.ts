import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  skills = [
    {
      experience: 'Frontend',
      title: 'Lenguajes y tecnologías principales',
      icons: [
        { src: '/assets/iconos/html.png', alt: 'HTML' },
        { src: '/assets/iconos/css-3.png', alt: 'CSS' },
        { src: '/assets/iconos/javascript.png', alt: 'JavaScript' },
        { src: '/assets/iconos/TypeScript.png', alt: 'TypeScript' },
      ]
    },
    {
      experience: 'Libraries',
      title: 'Frameworks',
      icons: [
        { src: 'assets/iconos/angular-icon.svg', alt: 'Angular' },
        { src: 'assets/iconos/spring-boot-ok.png', alt: 'spring-boot-ok' },
        { src: 'assets/iconos/net.png', alt: 'net' },
      ]
    },
    {
      experience: 'Backend',
      title: 'Lenguajes',
      icons: [
        { src: 'assets/iconos/java.png', alt: 'java' },
        { src: 'assets/iconos/c.png', alt: 'c' },
        
      ]
    },
    {
      experience: 'Interfaces',
      title: 'Componentes UI',
      icons: [
        { src: 'assets/iconos/tailwind.png', alt: 'tailwind' },
        { src: 'assets/iconos/bootstrap.png', alt: 'bootstrap' },
        { src: 'assets/iconos/Material UI.png', alt: 'Material UI' },

      ]
    },
    {
      experience: 'Database and Tools',
      title: 'Bases de datos y herramientas',
      icons: [
        { src: 'assets/iconos/sqlServer.png', alt: 'servidor-sql' },
        { src: 'assets/iconos/postgresql.png', alt: 'postgresql' },
        { src: 'assets/iconos/postman.png', alt: 'postman' },
        { src: 'assets/iconos/git.png', alt: 'git' },
        { src: 'assets/iconos/Swagger.png', alt: 'Swagger' }
      ]
    },
    {
      experience: 'Services cloud',
      title: 'Alojamiento web',
      icons: [
        { src: 'assets/iconos/netlify.png', alt: 'netlify' },
        { src: 'assets/iconos/firebase.png', alt: 'firebase' },
        { src: 'assets/iconos/github.png', alt: 'github' },
        { src: 'assets/iconos/render.png', alt: 'render' },
        { src: 'assets/iconos/Cloud Clusters.png', alt: 'Cloud Clusters' }
      ]
    },
    {
      experience: 'Structure and design',
      title: 'Diseño y maquetado',
      icons: [
        { src: 'assets/iconos/figma.png', alt: 'figma' },
        { src: 'assets/iconos/photoshop.png', alt: 'photoshop' },
      ]
    },
    {
    experience: 'Data',
    title: 'Análisis de datos',
    icons: [
      { src: 'assets/iconos/power bi.png', alt: 'power bi' },
    ]
  },
  {
    experience: 'Estudio',
    title: 'En proceso',
    icons: [
      { src: 'assets/iconos/python.png', alt: 'python' },
      { src: 'assets/iconos/Pandas.png', alt: 'Pandas' },
      { src: 'assets/iconos/anaconda.png', alt: 'anaconda' },

    ]
  },
  ];
}
