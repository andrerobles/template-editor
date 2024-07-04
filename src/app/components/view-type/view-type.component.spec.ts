import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeComponent } from './view-type.component';

describe('ViewTypeComponent', () => {
  let component: ViewTypeComponent;
  let fixture: ComponentFixture<ViewTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTypeComponent]
    });
    fixture = TestBed.createComponent(ViewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
