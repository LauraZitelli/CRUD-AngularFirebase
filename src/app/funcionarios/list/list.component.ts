import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioDataService } from '../funcionario-data.service';
import { Funcionario } from '../funcionario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  funcionarios: Observable<any>;

  constructor(private funcionarioService: FuncionarioService, private funcionarioDataService: FuncionarioDataService) { }

  ngOnInit(): void {// inicialização da view de listagem, logo chamamos o método getAll()
    this.funcionarios = this.funcionarioService.getAll();
  }

  delete(key: string): void {
    this.funcionarioService.delete(key);
  }

  edit(funcionario: Funcionario, key: string): void {
    this.funcionarioDataService.obtemFuncionario(funcionario, key);
  }

}
