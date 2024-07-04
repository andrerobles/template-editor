import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ParagraphElement } from '../slate-editor/slate-editor.component';

@Injectable({
  providedIn: 'root',
})
export class ViewTypeService {
  private elementSource = new BehaviorSubject<ParagraphElement | null>(null);

  getElement() {
    return this.elementSource.asObservable();
  }

  setElement(element: ParagraphElement) {
    this.elementSource.next(element);
  }
}
