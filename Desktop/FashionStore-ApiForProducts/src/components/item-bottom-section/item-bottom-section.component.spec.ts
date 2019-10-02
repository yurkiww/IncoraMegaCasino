import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBottomSectionComponent } from './item-bottom-section.component';

describe('ItemBottomSectionComponent', () => {
  let component: ItemBottomSectionComponent;
  let fixture: ComponentFixture<ItemBottomSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBottomSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
