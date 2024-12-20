import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasicoComponent } from './signal-basico.component';

describe('SignalBasicoComponent', () => {
  let component: SignalBasicoComponent;
  let fixture: ComponentFixture<SignalBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalBasicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
