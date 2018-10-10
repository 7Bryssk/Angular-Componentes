import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit, OnDestroy {

  @Input() nomeExterno;
  @Output() myClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("olá!");
  }

  ngOnDestroy() {
    console.log("tchau!");
  }

  callClick() {
    this.myClick.emit('JáJá');
  }

}
