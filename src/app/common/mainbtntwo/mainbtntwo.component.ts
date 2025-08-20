import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mainbtntwo',
  templateUrl: './mainbtntwo.component.html',
  styleUrls: ['./mainbtntwo.component.scss']
})
export class MainbtntwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() content: string = ''

  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
