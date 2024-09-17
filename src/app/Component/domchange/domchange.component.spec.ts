import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMChangeComponent } from './domchange.component';

describe('DOMChangeComponent', () => {
  let component: DOMChangeComponent;
  let fixture: ComponentFixture<DOMChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DOMChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOMChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
