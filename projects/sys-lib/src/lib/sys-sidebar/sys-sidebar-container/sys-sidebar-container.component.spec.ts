import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSidebarContainerComponent } from './sys-sidebar-container.component';

describe('SysSidebarContainerComponent', () => {
  let component: SysSidebarContainerComponent;
  let fixture: ComponentFixture<SysSidebarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSidebarContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSidebarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
