import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertExampleComponent } from './alert-example.component';

describe('AlertExampleComponent', () => {
  let component: AlertExampleComponent;
  let fixture: ComponentFixture<AlertExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
