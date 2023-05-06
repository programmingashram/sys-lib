import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideExampleComponent } from './slide-example.component';

describe('SlideExampleComponent', () => {
  let component: SlideExampleComponent;
  let fixture: ComponentFixture<SlideExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
