import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { MemberComponent } from './member/member.component';
import { HeaderComponent } from './common/header/header.component';

import { MemberService } from './member/member.service';
import { MemberListComponent } from './member-list/member-list.component';

const appRoutes: Routes = [
  { path: 'member/:name', component: MemberComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    MemberComponent,
    HeaderComponent,
    MemberListComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
