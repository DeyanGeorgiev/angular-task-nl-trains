import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
   imports: [
      CommonModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatIconModule
   ],
   exports: [
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatIconModule
   ],
   providers: []
})

export class AngularMaterialModule { }