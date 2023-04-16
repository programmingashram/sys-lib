import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-header',
  templateUrl: './sys-header.component.html',
  styleUrls: ['./sys-header.component.scss']
})
export class SysHeaderComponent {
  @Input() logo!: any;
  @Input() subTitle!: string;
  @Input() Menu!: any[];
  menu: boolean = false;
  menuClose: boolean = false;

  menuOpen(){
    this.menu=!this.menu;
  }
  ngOnInit(){
    if (window.innerWidth >= 768) {
      this.menu=!this.menu;
      this.menuClose = !this.menuClose;
    }else{
    }
  
    return true;
  }

}
