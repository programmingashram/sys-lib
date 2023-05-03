import { Component } from '@angular/core';
import { TreeNode } from 'projects/sys-lib/src/lib/sys-tree/sys-tree.component';

@Component({
  selector: 'app-tree-example',
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.scss']
})
export class TreeExampleComponent {
  data: TreeNode[] = [
    {
      label: 'Parent 1',
      icon : "folder",
      expanded : true,
      children: [
        { label: 'Child 1' ,
        children: [
          { label: 'Child 1' , icon: "picture_as_pdf"},
          { label: 'Child 2' ,
            children: [
              { label: 'Child 1' , icon: "picture_as_pdf"},
              { label: 'Child 2' ,
                children: [
                  { label: 'Child 1' , icon: "picture_as_pdf"},
                  { label: 'Child 2' , icon: "picture_as_pdf"},
                  { label: 'Child 3' , icon: "picture_as_pdf"}
                ]
              },
              { label: 'Child 3' , icon: "picture_as_pdf"}
            ]
          },
          { label: 'Child 3' , icon: "picture_as_pdf"}
        ]
        },
        { label: 'Child 2' , icon: "folder_open"},
        { label: 'Child 3' , icon: "folder_open"}
      ]
    },
    {
      label: 'Parent 2',
      icon : "folder",
      children: [
        { label: 'Child 1' ,
        children: [
          { label: 'Child 1' , icon: "picture_as_pdf"},
          { label: 'Child 2' , icon: "picture_as_pdf"},
          { label: 'Child 3' , icon: "picture_as_pdf"}
        ]
        },
        { label: 'Child 2' , icon: "folder_open"},
        { label: 'Child 3' , icon: "folder_open"}
      ]
    },
  ];

  data2: TreeNode[] = [
    {
      label: 'Parent 1',
      icon : "folder",
      children: [
        { label: 'Child 1' ,
        children: [
          { label: 'Child 1' , icon: "picture_as_pdf"},
          { label: 'Child 2' , icon: "picture_as_pdf"},
          { label: 'Child 3' , icon: "picture_as_pdf"}
        ]
        },
        { label: 'Child 2' , icon: "folder_open"},
        { label: 'Child 3' , icon: "folder_open"}
      ]
    },
    {
      label: 'Parent 2',
      icon : "folder",
      children: [
        { label: 'Child 1' ,
        children: [
          { label: 'Child 1' , icon: "picture_as_pdf"},
          { label: 'Child 2' , icon: "picture_as_pdf"},
          { label: 'Child 3' , icon: "picture_as_pdf"}
        ]
        },
        { label: 'Child 2' , icon: "folder_open"},
        { label: 'Child 3' , icon: "folder_open"}
      ]
    },
  ];
}
