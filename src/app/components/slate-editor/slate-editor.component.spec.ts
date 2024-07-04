import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlateEditorComponent } from './slate-editor.component';

describe('SlateEditorComponent', () => {
  let component: SlateEditorComponent;
  let fixture: ComponentFixture<SlateEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlateEditorComponent]
    });
    fixture = TestBed.createComponent(SlateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
