import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message = 'message';
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickMessage() {
    this.clicked.emit('clicked');
    console.log('clicked');
  }

}
