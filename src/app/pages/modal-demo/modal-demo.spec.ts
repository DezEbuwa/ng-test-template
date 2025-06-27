import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemo } from './modal-demo';

describe('ModalDemo', () => {
  let component: ModalDemo;
  let fixture: ComponentFixture<ModalDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
