import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { SysRadioComponent } from '../sys-radio.component';

@Component({
  selector: 'sys-radio-group',
  templateUrl: './sys-radio-group.component.html',
  styleUrls: ['./sys-radio-group.component.scss']
})
export class SysRadioGroupComponent {
  @ContentChildren(SysRadioComponent) radios: QueryList<SysRadioComponent>;
  selectedValue : string;

  selectRadio(radio: SysRadioComponent){
    this.radios.forEach(r => r.selected = false);
    radio.selected = true;
    this.selectedValue = radio.value;
  }
}
