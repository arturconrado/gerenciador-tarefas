import { Component, OnInit } from '@angular/core';
import {TarefaModel, TarefaService} from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: TarefaModel[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new TarefaModel(1, "tarefa teste", true)
    ];
  }

  listarTodos(): TarefaModel[]{
    return this.tarefaService.listarTodos();
  }




}
