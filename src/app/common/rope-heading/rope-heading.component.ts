import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rope-heading',
  templateUrl: './rope-heading.component.html',
  styleUrls: ['./rope-heading.component.scss']
})
export class RopeHeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string = ''
  @Input() bgColor:string = ''
}
