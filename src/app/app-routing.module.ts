import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { YoutubePageComponent } from './page/youtube-page/youtube-page.component';
import { PlayerWidgetsComponent } from './page/player-widgets/player-widgets.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'page' }, /**空白會跳轉到home */

  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      }, /**空白會跳轉到home */
      { path: 'home', component: HomeComponent },
      //利用Service來存ID
      { path: 'youtubePage', component: YoutubePageComponent },
      //利用網址列的方式來存ID
      // { path: 'youtubePage/:id', component: YoutubePageComponent },
      { path: 'playerWidgets', component: PlayerWidgetsComponent },
      // {
      //   path: "talk",
      //   loadChildren: () =>
      //     import("./page/checkout/checkout.module").then((m) => m.CheckoutModule),
      // },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  } /**萬用路由:隨便輸入都會到home */,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
