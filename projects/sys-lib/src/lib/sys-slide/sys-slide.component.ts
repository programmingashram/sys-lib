import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'sys-slide',
  templateUrl: './sys-slide.component.html',
  styleUrls: ['./sys-slide.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SysSlideComponent),
      multi: true
    }
  ]
})
export class SysSlideComponent implements ControlValueAccessor {
  @Input() type: string = "radio";
  @Input() value: string;
  @Input() name!: string;
  @Input() disable: boolean;
  @Input() readonly: boolean;
  @Input() label: string;
  @Input() id?: any;
  @Input() default: boolean;
  @Input() danger: boolean;
  @Input() success: boolean;
  @Input() selected: boolean;
  @Input() defaultValue: boolean;
  @Input() switchCard: boolean;
  @Input() divider: boolean;
  @Input() accent: boolean;

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
