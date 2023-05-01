import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysTreeComponent } from './sys-tree.component';

describe('SysTreeComponent', () => {
  let component: SysTreeComponent;
  let fixture: ComponentFixture<SysTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
