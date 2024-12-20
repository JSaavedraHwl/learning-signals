import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalServiceComponentComponent } from './signal-service-component.component';

describe('SignalServiceComponentComponent', () => {
  let component: SignalServiceComponentComponent;
  let fixture: ComponentFixture<SignalServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalServiceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
