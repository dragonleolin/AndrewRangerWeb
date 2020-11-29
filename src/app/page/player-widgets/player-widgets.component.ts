import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player-widgets',
  templateUrl: './player-widgets.component.html',
  styleUrls: ['./player-widgets.component.scss'],
})
export class PlayerWidgetsComponent implements OnInit {
  token = this.testService.token;
  getId;
  url:string;
  datas: any;

  urlSafe: SafeResourceUrl;
  safeUrl: any;

  constructor(
    private testService: TestService,
    private http: HttpClient,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.testService.albumId$.subscribe((res) => {
      this.getId = res.id;
      console.log('PlayerWidgetsComponent:', this.getId);
      this.  getSongData();
    });
  }




  getSongData(){
        this.url = `https://widget.kkbox.com/v1/?id=${this.getId}&type=playlist&terr=TW&lang=en&autoplay=true"`
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


}
