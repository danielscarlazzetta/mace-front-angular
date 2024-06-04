import { Component } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent {

  inputValue: string = '';
  inputFocused: boolean = false;

  onFocus() {
    this.inputFocused = true;
  }

  onBlur() {
    if (!this.inputValue) {
      this.inputFocused = false;
    }
  }
}
