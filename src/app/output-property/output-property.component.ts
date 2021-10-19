import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef; // esse decorator seleciona o elemento pela variável com a hashtag em qualquer tag html ou componente 

  incrementa(){
    console.log(this.campoValorInput.nativeElement.value);
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor}); //emitir qualquer coisa para o componente pai, seja string número ou até um objeto complexo
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
