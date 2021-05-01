import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
})
export class FullscreenComponent implements OnInit {
  @ContentChild('passedTemplate') passedTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
