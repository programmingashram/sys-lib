import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slide-example',
  templateUrl: './slide-example.component.html',
  styleUrls: ['./slide-example.component.scss']
})
export class SlideExampleComponent {
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      enableWifi: [true, Validators.requiredTrue],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }


  onFormSubmit(formValue: any) {
    alert(JSON.stringify(formValue, null, 2));
  }

  ngOnInit(){

  }
  onSubmit() {
    console.log(this.myForm.getRawValue());
  }

  selectedOption: string;

  onOptionSelected(eve: any){
    this.selectedOption = eve;
    console.log(this.selectedOption);
  }

}
