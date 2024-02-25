import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface TableData {
  img:string;
  name: string;
  age: number;
  city: string;
  ctrl: string;
  accordionOpen: boolean;
  checked: boolean;
}

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {

  tableData: TableData[] = [
    {
      img:'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      name: "Ayushman",
      age: 20,
      city: "Bilaspur",
      ctrl: "Delete",
      accordionOpen: true,
      checked: false
    },
    {
      img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg',
      name: "Ansh",
      age: 22,
      city: "Raipur",
      ctrl: "Delete",
      accordionOpen: false,
      checked: false
    },
    {
      img: 'https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp',
      name: "Fhalak",
      age: 21,
      city: "Waraseoni",
      ctrl: "Delete",
      accordionOpen: false,
      checked: false
    },
    {
      img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
      name: "Ashutosh",
      age: 32,
      city: "Raigar",
      ctrl: "Delete",
      accordionOpen: false,
      checked: false
    }
  ]


  // Searchbar
  searchControl = new FormControl<any>('');


  // Sorting Table
  sortBy(column: string) {
    this.tableData.sort((a: any, b:any) => a[column].localeCompare(b[column]));
  }

  // Paginator Code
  pageSize = new FormControl<any>(5); 
  currentPage = 0;
  get displayedTableData() {
    const start = this.currentPage * this.pageSize.value;
    return this.tableData.slice(start, start + this.pageSize.value);
  }
  nextPage() {
    if (this.currentPage < this.tableData.length / this.pageSize.value - 1) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  changePageSize() {
    this.currentPage = 0;
  }
  

  // Accordion
  toggleAccordion(index: number) {
    this.tableData[index].accordionOpen = !this.tableData[index].accordionOpen;
  }

  isAccordionOpen(index: number): boolean {
    return this.tableData[index].accordionOpen;
  }

  // Checkboxes
  toggleCheckbox(index: number) {
    this.tableData[index].checked = !this.tableData[index].checked;
  }

  // Select All 
  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.tableData.forEach(row => row.checked = isChecked);
  }
  
  // Delete Selected row
  deleteCheckedRows() {
    this.tableData = this.tableData.filter(x => !x.checked);
  }

  // Manual Delete
  deleteRow(index: number) {
    this.tableData.splice(index, 1);
  }

}
