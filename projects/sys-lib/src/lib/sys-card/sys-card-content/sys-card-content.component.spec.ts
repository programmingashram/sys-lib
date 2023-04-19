import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCardContentComponent } from './sys-card-content.component';

describe('SysCardContentComponent', () => {
  let component: SysCardContentComponent;
  let fixture: ComponentFixture<SysCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysCardContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
