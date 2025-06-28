import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtermDemo } from './xterm-demo';

describe('XtermDemo', () => {
  let component: XtermDemo;
  let fixture: ComponentFixture<XtermDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XtermDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XtermDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
