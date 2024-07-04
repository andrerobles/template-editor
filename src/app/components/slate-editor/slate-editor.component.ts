import { Component, OnInit } from '@angular/core';
import {
  createEditor,
  Descendant,
  Element as SlateElement,
  BaseEditor,
} from 'slate';
import { withAngular, AngularEditor } from 'slate-angular';

export type CustomText = { text: string };
export type ParagraphElement = { type: 'paragraph'; children: CustomText[] };

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
  editor = withAngular(createEditor());
  value: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
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

  updateLineCount() {
    this.lineCount = this.value.reduce((count, node) => {
      if (SlateElement.isElement(node) && node.type === 'paragraph') {
        return count + 1;
      }
      return count;
    }, 0);
  }
}
