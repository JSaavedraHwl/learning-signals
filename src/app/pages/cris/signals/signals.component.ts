import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {


  textoIngresado = signal('');

  // Método para manejar el envío del formulario
  enviar(textoIngresado:string) {
    this.textoIngresado.set(textoIngresado)
  }

  codigoEjemploTS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ejemplo',
    templateUrl: './ejemplo.component.html',
    styleUrls: ['./ejemplo.component.scss']
  })
  export class EjemploComponent {
    textoIngresado = signal('');

    enviar(texto: string) {
      this.textoIngresado.set(texto);
    }
  }
  `;
  codigoEjemploHTML = `
  <form>
      <mat-form-field appearance="outline">
        <mat-divider class="custom-divider"></mat-divider>

        <input #textoEjemplo matInput placeholder="Escriba aquí"
            (keyup)="enviar(textoEjemplo.value)" name="texto">
    </mat-form-field>
  </form>
  <h4>Valor del signal: {{textoIngresado()}}</h4>
  `;
}
