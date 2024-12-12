import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoryoComponent } from './yoryo.component';

describe('YoryoComponent', () => {
  let component: YoryoComponent;
  let fixture: ComponentFixture<YoryoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoryoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoryoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
