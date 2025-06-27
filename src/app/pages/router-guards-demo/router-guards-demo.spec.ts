import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterGuardsDemo } from './router-guards-demo';

describe('RouterGuardsDemo', () => {
  let component: RouterGuardsDemo;
  let fixture: ComponentFixture<RouterGuardsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterGuardsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterGuardsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
