import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {

  @Input() label: string = '';
  @Input() type: string = 'text';  // Tipo de entrada
  @Input() placeholder: string = ''; // Placeholder para la entrada

  inputValue: string = '';
  inputFocused: boolean = false;
  isPasswordVisible: boolean = false;  // Controla la visibilidad de la contraseña

  onFocus() {
    this.inputFocused = true;
  }

  onBlur() {
    if (!this.inputValue) {
      this.inputFocused = false;
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
