import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAndDependencyInjectionComponent } from './service-and-dependency-injection.component';

describe('ServiceAndDependencyInjectionComponent', () => {
  let component: ServiceAndDependencyInjectionComponent;
  let fixture: ComponentFixture<ServiceAndDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceAndDependencyInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAndDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
