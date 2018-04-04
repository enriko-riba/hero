import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
  declarations: [StatsComponent]
})
export class CharacterModule { }
