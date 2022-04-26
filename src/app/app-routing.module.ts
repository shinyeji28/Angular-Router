import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroesListComponent },
  {path: '', redirectTo: '/heroes', pathMatch: 'full'}, // 빈 주소 접근시 리다이렉트 path 정의 / pathMatch:full -> 주소가 정확히 ''일때만 매칭되어 라우팅 적용
  {path: '**', component: PageNotFoundComponent}  // 정의하지 않은 주소로 접근시 (와일드카드 라우팅- 라우팅 규칙 마지막에 등록) 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(  // forRoot : 객체 배열을 인자로 받아 개별 객체마다 라우팅 규칙을 정의
      appRoutes,
      { enableTracing: true } // 디버그 활성화
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
