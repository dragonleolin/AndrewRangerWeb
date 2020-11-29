import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  token = this.testService.token;
  playlistCategories: any[] = [];
  featuredPlaylist: any[] = [];
  itemsPerSlide = 6;
  singleSlideOffset = true;
  noWrap = true;

  constructor(private testService: TestService, private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getPlaylistCategories();
    this.getFeaturedPlaylist();
  }

  onClickToPlayWidgets(id: string, title: string) {
    // console.log('carousel:', id , ' + ', title);

    this.testService.setAlbumId(id, title);
    this.router.navigateByUrl('/playerWidgets');
  }

  getPlaylistCategories(){
    this.testService.getPlaylistCategories().subscribe((value) => {
        this.playlistCategories = [value];
        this.playlistCategories = this.playlistCategories[0].playlists.data;
          // console.log('getPlaylistCategories:', this.playlistCategories);
        });
  }


  getFeaturedPlaylist() {
    this.testService.getFeaturedPlaylist()
      .subscribe((value) => {
        this.featuredPlaylist = [value];
        this.featuredPlaylist =  this.featuredPlaylist[0].data;
        // console.log('getFeaturedPlaylist:', this.featuredPlaylist);
      });
  }
}
