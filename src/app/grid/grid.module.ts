import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid/grid.component';
import { HerosComponent } from './heros/heros.component';
import { HeroItemComponent } from './heros/hero-item/hero-item.component';



@NgModule({
  declarations: [GridComponent, HerosComponent, HeroItemComponent],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }
