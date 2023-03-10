import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { DownloadRoutingModule } from './download-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/modules/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DownloadComponent
  ],
  exports: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class DownloadModule { }
