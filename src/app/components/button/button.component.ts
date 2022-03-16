import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Output() click = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
