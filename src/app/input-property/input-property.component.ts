import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //@Input() nomeCurso: string = ''; // O Decorator Input expôe a propriedade 'nome' para o seletor 'app-curso'
  @Input('nome') nomeCurso: string = ''; // O parametro indica o nome da variável extena 'nome' que vai associar a variavel interna 'nomeCurso'

  constructor() { }

  ngOnInit(): void {
  }

}
