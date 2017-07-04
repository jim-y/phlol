import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  public name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.name = name;
  }

}
