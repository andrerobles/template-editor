import { Component, Input, OnInit } from '@angular/core';
import {
  CustomText,
  ParagraphElement,
} from '../slate-editor/slate-editor.component';
import { ViewTypeService } from './view-type.service';

@Component({
  selector: 'app-view-type',
  template: `<p>
    <ng-container *ngFor="let child of element?.children">{{
      renderLeaf(child)
    }}</ng-container>
  </p>`,
})
export class ViewTypeComponent implements OnInit {
  constructor(private viewTypeService: ViewTypeService) {}

  element: ParagraphElement | null = null;

  ngOnInit() {
    this.viewTypeService.getElement().subscribe((element) => {
      this.element = element;
    });
  }

  renderLeaf(leaf: CustomText) {
    return `<span>${leaf.text}</span>`;
  }
}
