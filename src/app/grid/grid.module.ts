import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid/grid.component';
import { HerosComponent } from './heros/heros.component';
import { HeroItemComponent } from './heros/hero-item/hero-item.component';
import { AsyncCodeComponent } from './async-code/async-code.component';



@NgModule({
  declarations: [GridComponent, HerosComponent, HeroItemComponent, AsyncCodeComponent],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }
