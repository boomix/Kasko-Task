import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() change = new EventEmitter();
  private error: string;

  //Call event that input got updated
  onInput(val: string) {

    //Show error if only text
    if (isNaN(val as any) && val != '') {
      document.getElementById('inputField').classList.add('is-invalid');
      this.error = 'Error: invalid value provided.';
    } else {
      document.getElementById('inputField').classList.remove('is-invalid');
      this.error = '';
    }

    //Send event
    this.change.emit({ val: val })
  }

}
