# KKBox_Angular

建立Angular專案

使用router去跳轉頁面

啟動前端用 npm start

要啟動node Serve: node dummyService.js

## 跳轉頁面都要使用Router去做跳轉，因為Angular是SPA的結構，要好好善用Router，若用重新刷新會有存取資料消失的問題。

### 直接跳轉頁面
this.router.navigateByUrl('/youtubePage');
### 跳轉頁面用網址列的方式就要去Router去做設定
1. this.router.navigateByUrl('/youtubePage/?id=' + id); 利用網址列的方式存字串。
2.  { path: 'youtubePage/:id', component: YoutubePageComponent },

## Component之間的傳值

### home_component使用Service傳值到youtube-page_component的方法
1. 先建立一個HomeData.ts的物件。
2. 在home_component去把值傳送到Service。
3. 在Service內取用HomeData的物件去存資料，再用BehaviorSubject把資料傳遞出去。
4. 在youtube_component的ngOnInit()內使用subscribe去訂閱資料並取回。

## URL綁定方式

### 在iframe內的src使用綁定方式
1. 先import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'
2. 設定變數urlSafe: SafeResourceUrl;、youtubeUrl
3. 在constructor()加入public sanitizer: DomSanitizer
4. 在ngOnInit()設定this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
5. 在畫面上加入 <iframe [src]="urlSafe"></iframe>
