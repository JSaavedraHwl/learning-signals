import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-basico',
  templateUrl: './signal-basico.component.html',
  styleUrl: './signal-basico.component.scss'
})
export class SignalBasicoComponent {

// Signal para manejar el texto ingresado
textoIngresado = signal('');

// Método para actualizar el valor del signal
enviar(valor: string) {
  this.textoIngresado.set(valor);
}

// Código de ejemplo para mostrar en el componente
codigoEjemploTS = `
  import { Component, Signal, signal } from '@angular/core';

  @Component({
    selector: 'app-signal-demo',
    standalone: true,
    template: ` + '`<input (keyup)="enviar($event.target.value)" />{{ textoIngresado() }}`' + `
  })
  export class SignalDemoComponent {
    textoIngresado: Signal<string> = signal('');

    enviar(valor: string) {
      this.textoIngresado.set(valor);
    }
  }
`;

codigoEjemploHTML = `
  <form>
    <mat-form-field appearance="outline">
      <input matInput placeholder="Escriba aquí" (keyup)="enviar($event.target.value)" />
    </mat-form-field>
    <h4>Valor del signal: {{ textoIngresado() }}</h4>
  </form>
`;
}
