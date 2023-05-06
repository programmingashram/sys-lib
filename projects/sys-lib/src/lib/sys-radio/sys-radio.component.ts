import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, Validators, ControlValueAccessor } from '@angular/forms';
import { SysInputComponent } from '../sys-input/sys-input.component';

@Component({
  selector: 'sys-radio',
  templateUrl: './sys-radio.component.html',
  styleUrls: ['./sys-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SysRadioComponent),
      multi: true
    }
  ]
})
export class SysRadioComponent implements ControlValueAccessor {
  @Input() type: string = "radio";
  @Input() value: string;
  @Input() name!: string;
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
  @Input() outline: boolean;
  @Input() modern: boolean;
  @Input() default: boolean;
  @Input() danger: boolean;
  @Input() selected: boolean;
  @Input() defaultValue: boolean;

  @Output() radioSelected = new EventEmitter<string>();


  select(){
    this.radioSelected.emit(this.value);
  }

  myControl = new FormControl('', [Validators.required]);
  // add any other form controls and validation rules here

  // @Output() closeDialog = new EventEmitter();

  @Output() search = new EventEmitter();

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
