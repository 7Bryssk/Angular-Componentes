import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCorAleatoria]'
})
export class CorAleatoriaDirective {

  @HostBinding('style.color') minhaCorDeFonte: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {

    let color = '';
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        color = 'red';
        break;
      case 1:
        color = 'green';
        break;
      case 2:
        color = 'orange';
        break;
      case 3:
        color = 'blue';
        break;
    }
    // Não é muito seguro usar assim porque mexe direto na DOM
    // this.elementRef.nativeElement.style.backgroundColor = color;

    // Jeito mais seguro pra se fazer
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
  }

  @HostListener('click') meuClick() {
    alert("click do HostListner na diretiva");
    this.minhaCorDeFonte = 'white';
  }

}
