import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  fullText: string = "Hola Soy Maverick Cordova Bustos";
  displayedText: string = "";
  typingSpeed: number = 100; // Tiempo en milisegundos para cada letra
  deletingSpeed: number = 50; // Tiempo en milisegundos para cada letra al borrar
  index: number = 0;
  isDeleting: boolean = false;
  repeatCount: number = 0; // Contador de repeticiones
  maxRepeats: number = 2; // Número máximo de repeticiones antes de detenerse
  showCursor: boolean = true; // Estado del cursor

  ngOnInit(): void {
    this.typeText();
    this.toggleCursor(); // Iniciar el parpadeo del cursor
  }

  typeText(): void {
    if (this.isDeleting) {
      this.displayedText = this.fullText.substring(0, this.index);
      this.index--;

      if (this.index < 0) {
        this.isDeleting = false; // Cambiar a modo escritura
        this.index = 0; // Reiniciar el índice para volver a escribir
        this.repeatCount++; // Incrementar el contador de repeticiones

        // Verificar si se ha alcanzado el número máximo de repeticiones
        if (this.repeatCount < this.maxRepeats) {
          setTimeout(() => this.typeText(), this.typingSpeed * 2); // Esperar antes de empezar a escribir de nuevo
        } else {
          this.displayedText = this.fullText; // Mostrar el nombre completo
          this.showCursor = false; // Ocultar el cursor al final
        }
      } else {
        setTimeout(() => this.typeText(), this.deletingSpeed);
      }
    } else {
      this.displayedText = this.fullText.substring(0, this.index);
      this.index++;

      if (this.index > this.fullText.length) {
        this.isDeleting = true; // Cambiar a modo borrado
        setTimeout(() => this.typeText(), this.typingSpeed * 2); // Esperar antes de empezar a borrar
      } else {
        setTimeout(() => this.typeText(), this.typingSpeed);
      }
    }
  }

  toggleCursor(): void {
    setInterval(() => {
      if (this.showCursor) {
        this.showCursor = false; // Inicia oculto
      } else if (this.index < this.fullText.length || this.isDeleting) {
        this.showCursor = true; // Muestra el cursor mientras se escribe o se borra
      }
    }, 500); // Cambia el tiempo según lo que desees
  }
}