import { Injectable } from '@angular/core';
import { Member, LOLServer } from './member.types';

@Injectable()
export class MemberService {

  public members: Member[] = [];

  constructor() {
    let m: Member = {
      phName: 'Jim-Y',
      phRef: 'https://prohardver.hu/dl/faces/own/goodoldtimes.gif',
      ign: 'MogyiBogyi',
      igRef: 'https://euw.op.gg/summoner/?userName=MogyiBogyi',
      server: LOLServer.EUNE
    };

    let n: Member = {
      phName: 'GoodOldTimes',
      phRef: 'https://prohardver.hu/tag/jim-y.html',
      ign: 'YUKKURI SHINDENE',
      igRef: 'https://euw.op.gg/summoner/?userName=MogyiBogyi',
      server: LOLServer.EUW
    };

    for (let i = 0; i < 10; ++i) {
      this.members.push(m);
    }

    this.members.push(n);
  }

}
