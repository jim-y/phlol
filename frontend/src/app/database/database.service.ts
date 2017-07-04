import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Member } from '../member/member.types';

@Injectable()
export class DatabaseService {

  private readonly _database = firebase.database();

  constructor() { }

  get database() {
    return this._database;
  }

  createSummoner(member: Member) {
    this.database.ref('summoners/' + member.ign).set({
      ign: member.ign,
      opggProfile: member.igRef,
      prohardverName: member.phName,
      prohardverLink: member.phRef,
    });
  }

}
