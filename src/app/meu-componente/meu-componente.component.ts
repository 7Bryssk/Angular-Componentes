import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from } from 'rxjs';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit, OnDestroy {
  @Input() nome;
  @Output() nomeChange = new EventEmitter();

  @Input() nomeExterno;
  @Output() myClick = new EventEmitter();

  @ViewChild('meuElemento') myElement: ElementRef;

  myStyle = '';

  get mySafeStyle() {
    return this.sanitizer.bypassSecurityTrustStyle(this.myStyle);
  }

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    console.log("olá!");
    console.log(this.myElement)
  }

  ngOnDestroy() {
    console.log("tchau!");
  }

  callClick() {
    this.myClick.emit('JáJá');
  }

  onChangeName() {
    this.nomeChange.emit(this.nome);
  }

}
