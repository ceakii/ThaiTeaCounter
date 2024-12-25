import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButton } from './counterbutton.component';

describe('CounterbuttonComponent', () => {
  let component: CounterButton;
  let fixture: ComponentFixture<CounterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
