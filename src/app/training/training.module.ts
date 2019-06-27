import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    FormsModule
  ],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
