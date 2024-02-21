import { Component, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sys-select',
  templateUrl: './sys-select.component.html',
  styleUrls: ['./sys-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SysSelectComponent),
      multi: true,
    },
  ]
})
export class SysSelectComponent implements ControlValueAccessor {

  @Input() options: any[];
  selectedOption: string;
  selectControl = new FormControl();
  ngOnInit() {
    this.selectControl.valueChanges.subscribe((value) => {
      this.selectedOption = value;
      this.onChange(value);
      this.onTouched();
    });
  }

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};
  writeValue(value: any): void {
    this.selectedOption = value;
    this.onChange(value);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

}
