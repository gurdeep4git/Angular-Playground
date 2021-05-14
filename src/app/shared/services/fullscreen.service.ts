import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  private isFullscreenShownSource$ = new BehaviorSubject(false);
  public isFullscreenShown$ = this.isFullscreenShownSource$.asObservable();

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  show() {
    this.isFullscreenShownSource$.next(true);
    this.hideScrollbar();
  }

  hideScrollbar() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  hide() {
    this.isFullscreenShownSource$.next(false);
    this.showScrollbar();
  }

  showScrollbar() {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
}
