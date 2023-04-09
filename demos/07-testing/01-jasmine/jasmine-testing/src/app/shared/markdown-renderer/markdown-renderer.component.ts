import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
})
export class MarkdownRendererComponent implements OnInit {
  @Input() md: string = '';
  panelOpenState = true;

  constructor() { }

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }

  ngOnInit() { }
}
