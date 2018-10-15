import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { CorAleatoriaDirective } from './diretivas/cor-aleatoria.directive';
import { UnLessDirective } from './diretivas/un-less.directive';
import { ReversePipe } from './myPipes/reverseCaracter/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    CorAleatoriaDirective,
    UnLessDirective,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
