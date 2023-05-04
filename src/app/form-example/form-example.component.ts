import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {
  myForm: FormGroup;
  constructor() { }
  test = "Default Value";
  ngOnInit(){
    this.myForm = new FormGroup({
      test: new FormControl(''),
      test2: new FormControl('Readonly value')
    });
  }
  onSubmit() {
    console.log(this.myForm.getRawValue().test);
  }
}
