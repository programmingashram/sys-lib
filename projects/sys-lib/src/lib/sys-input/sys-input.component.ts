import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'sys-input',
  templateUrl: './sys-input.component.html',
  styleUrls: ['./sys-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SysInputComponent),
      multi: true
    }
  ]
})
export class SysInputComponent implements ControlValueAccessor {
  @Input() type!: string;
  @Input() value!: string;
  @Input() disable: boolean;
  @Input() readonly: boolean;
  @Input() label: string;
  @Input() id?: any;
  @Input() placeholder: string;
  @Input() errorMessege: string;
  @Input() errorIcon: string;
  @Input() warnMessege: string;
  @Input() warnIcon: string;
  @Input() successMessege: string;
  @Input() successIcon: string;
  @Input() sampleMessege: string;
  @Input() sampleIcon: string;
  @Input() icon: string;
  @Input() preIcon: string;

  myControl = new FormControl('', [Validators.required]);
  // add any other form controls and validation rules here




  onChange: any = () => {};
  onTouch: any = () => {};

  dispalyValue?: string = '';

  constructor() { }

  writeValue(value: any) {
    this.dispalyValue = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    // You can add any disabled state logic here
  }

  onInputChange(event: any) {
    this.dispalyValue = event.target.value;
    this.onChange(this.dispalyValue);
    this.onTouch();
  }


}
