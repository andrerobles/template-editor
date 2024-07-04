import { Component, OnInit, Type } from '@angular/core';
import {
  createEditor,
  Descendant,
  Element as SlateElement,
  BaseEditor,
} from 'slate';
import { withAngular, AngularEditor } from 'slate-angular';
import { ViewTypeComponent } from '../view-type/view-type.component';
import { ViewTypeService } from '../view-type/view-type.service';

export type CustomText = { text: string };
export type ParagraphElement = { type: 'paragraph'; children: CustomText[] };
export type ViewType = Type<ViewTypeComponent>;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & AngularEditor;
    Element: ParagraphElement;
    Text: CustomText;
  }
}

@Component({
  selector: 'app-slate-editor',
  templateUrl: './slate-editor.component.html',
  styleUrls: ['./slate-editor.component.scss'],
})
export class SlateEditorComponent implements OnInit {
  constructor(private viewTypeService: ViewTypeService) {}

  editor = withAngular(createEditor());
  value: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: 'Digite o texto aqui' }],
    },
  ];
  lineCount = 0;

  ngOnInit() {
    this.updateLineCount();
  }

  onChange(value: Descendant[]) {
    this.value = value;
    this.updateLineCount();
  }

  renderElement = (element: ParagraphElement): ViewType | null => {
    switch (element.type) {
      case 'paragraph':
        this.viewTypeService.setElement(element);
        return ViewTypeComponent;
      default:
        return null;
    }
  };

  updateLineCount() {
    this.lineCount = this.value.reduce((count, node) => {
      if (SlateElement.isElement(node) && node.type === 'paragraph') {
        return count + 1;
      }
      return count;
    }, 0);
  }
}
