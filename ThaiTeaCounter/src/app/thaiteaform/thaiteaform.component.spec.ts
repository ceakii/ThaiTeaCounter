import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiTeaFormComponent } from './thaiteaform.component';

describe('ThaiTeaFormComponent', () => {
  let component: ThaiTeaFormComponent;
  let fixture: ComponentFixture<ThaiTeaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThaiTeaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThaiTeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
