import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mainbtn',
  templateUrl: './mainbtn.component.html',
  styleUrls: ['./mainbtn.component.scss']
})
export class MainbtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() content: string = '' 

  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }

}
