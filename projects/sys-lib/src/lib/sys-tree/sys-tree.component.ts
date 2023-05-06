import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

export interface TreeNode {
  label: string;
  icon?: string;
  children?: TreeNode[];
  expanded?: boolean;
  isClickable?: Function;
  action?: Function;

}

@Component({
  selector: 'sys-tree',
  templateUrl: './sys-tree.component.html',
  styleUrls: ['./sys-tree.component.scss']
})
export class SysTreeComponent {
  @Input() nodes: TreeNode[];
  @Input() defaultIcon : string = "chevron_right";
  @Input() expendedIcon : string = "expand_more";

  @Output() clicktreeMenu = new EventEmitter();
  toggleNode(node: TreeNode) {
    node.expanded = !node.expanded;
  }


  onClickNode($event : MouseEvent, node : any){
    node.action.call(this);
  }
}
