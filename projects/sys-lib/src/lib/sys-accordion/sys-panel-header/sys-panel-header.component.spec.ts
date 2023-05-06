import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysPanelHeaderComponent } from './sys-panel-header.component';

describe('SysPanelHeaderComponent', () => {
  let component: SysPanelHeaderComponent;
  let fixture: ComponentFixture<SysPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysPanelHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
