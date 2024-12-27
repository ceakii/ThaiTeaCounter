import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebuttonComponent } from './removebutton.component';

describe('RemovebuttonComponent', () => {
  let component: RemovebuttonComponent;
  let fixture: ComponentFixture<RemovebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovebuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
