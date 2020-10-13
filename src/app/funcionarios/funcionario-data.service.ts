//classe responsável por obter o próximo funcionário quando fizermos uma edição
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Funcionario } from './funcionario'; 

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDataService {

  constructor() { }

  private funcionarioSource = new BehaviorSubject({funcionario: null, key: ''});//atualiza a variável assim que ela recebe uma mudança
  funcionarioAtual = this.funcionarioSource.asObservable();//asObservable é assíncrono, não tem retorno no momento

  obtemFuncionario(funcionario: Funcionario, key: string){
    this.funcionarioSource.next({funcionario: funcionario, key: key});//o segundo funcionario e a segunda key dizem respeito ao funcionario e key do parametro
  }
}
