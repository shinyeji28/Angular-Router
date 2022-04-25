import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  // forRoot : 객체 배열을 인자로 받아 개별 객체마다 라우팅 규칙을 정의
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'}, // 빈 주소 접근시 리다이렉트 path 정의
      {path: '**', component: PageNotFoundComponent}  // 정의하지 않은 주소로 접근시 (와일드카드 라우팅- 라우팅 규칙 마지막에 등록) 
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
