import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'sys-tabs',
  templateUrl: './sys-tab.component.html',
  styleUrls: ['./sys-tab.component.scss'],

})
export class SysTabComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() disable!: boolean;
  @Input() noBorder: boolean;
  @Input() vertical: boolean;
  @Input() bottomHeader : boolean;
  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
