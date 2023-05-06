import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSidebarContentComponent } from './sys-sidebar-content.component';

describe('SysSidebarContentComponent', () => {
  let component: SysSidebarContentComponent;
  let fixture: ComponentFixture<SysSidebarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSidebarContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
