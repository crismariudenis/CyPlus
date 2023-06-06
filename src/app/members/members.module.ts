import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    MembersComponent,
    MemberComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MembersComponent }
    ])
  ]
})
export class MembersModule { }
