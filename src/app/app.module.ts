import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

const appRoutes : Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroesListComponent },
  {path: '', redirectTo: '/heroes', pathMatch: 'full'}, // 빈 주소 접근시 리다이렉트 path 정의 / pathMatch:full -> 주소가 정확히 ''일때만 매칭되어 라우팅 적용
  {path: '**', component: PageNotFoundComponent}  // 정의하지 않은 주소로 접근시 (와일드카드 라우팅- 라우팅 규칙 마지막에 등록) 
]

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
