import { NgModule } from '@angular/core';

import {MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule, MatMenuModule,
  MatStepperModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatTableModule
} from '@angular/material';

const material = [
    MatButtonModule,
    MatSelectModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatTabsModule, 
    MatMenuModule, 
    MatStepperModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatFormFieldModule,
    MatTableModule
  ];
@NgModule({
  declarations: [],
  imports: [
   material
  ],
  exports: [
   material
  ]
})
export class MaterialModule { }