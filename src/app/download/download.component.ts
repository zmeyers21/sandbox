import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../shared/services/download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  constructor(private downloadService: DownloadService) { }

  downloadFiles() {
    this.downloadService.download();
  }

}
