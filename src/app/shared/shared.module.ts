import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import {
  MatList,
  MatListItem,

} from "@angular/material/list"
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const sharedMaterialModule = [
  MatCardModule, MatList, MatListItem, FlexLayoutModule, MatToolbarModule, MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    ...sharedMaterialModule,
    CommonModule
  ],
  exports: [...sharedMaterialModule]
})
export class SharedModule { }
