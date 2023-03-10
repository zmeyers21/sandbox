import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import JSZip from 'jszip';
import * as filesaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  jsonHeader = 'application/json; odata=verbose';
  headers = { 'Content-Type': this.jsonHeader, Accept: this.jsonHeader };
  filesArray: [];
  showFileArray: [];

  constructor(private http: HttpClient) { }

  get files() {
    return [
      {
        name: 'test1.pdf',
        url: 'https://s3.amazonaws.com/pdf.zachmeyers.com/test1.pdf'
      },
      {
        name: 'test2.pdf',
        url: 'https://s3.amazonaws.com/pdf.zachmeyers.com/test2.pdf'
      },
      {
        name: 'test3.pdf',
        url: 'https://s3.amazonaws.com/pdf.zachmeyers.com/test3.pdf'
      },
      {
        name: 'test4.csv',
        url: 'https://s3.amazonaws.com/pdf.zachmeyers.com/test4.csv'
      }
    ];
  }

  async download() {
    const zip = new JSZip();

    const list = this.files.map(async item => {
      const response = await fetch(item.url);
      const data = await response.blob();
      console.log(data);
      zip.file(`${item.name}`, data);
      return data;
    });
  
    Promise.all(list).then(function() {
      zip.generateAsync({type:"blob"})
      .then(function(content) {
        filesaver.saveAs(content, `content`);
      });
    }); 

  }

}
