import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';




import { ToolbarComponent } from './toolbar/toolbar.component';

import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogVideoComponent, MainPageComponent } from './main-page/main-page.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    MainPageComponent,
    SimulatorComponent,
    FooterComponent,
    DialogVideoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatDialogModule,
    YouTubePlayerModule

  ],
  exports: [
    ToolbarComponent,
    MainPageComponent,
    SimulatorComponent,
    FooterComponent,
    DialogVideoComponent
  ]
})

export class LayoutModule { }
