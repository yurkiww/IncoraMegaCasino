import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlaceOrderComponent } from './modal-place-order.component';

describe('ModalPlaceOrderComponent', () => {
  let component: ModalPlaceOrderComponent;
  let fixture: ComponentFixture<ModalPlaceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPlaceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
