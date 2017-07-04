import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member/member.service';
import {LOLServer} from "../member/member.types";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  public servers = LOLServer;

  constructor(
      private memberService: MemberService
  ) {}

  ngOnInit() {
  }

}
