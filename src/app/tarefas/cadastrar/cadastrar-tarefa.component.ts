import {Component, OnInit, ViewChild} from '@angular/core';
import {TarefaModel, TarefaService} from '../shared';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: TarefaModel;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new TarefaModel();
  }

  cadastrar(): void{
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
