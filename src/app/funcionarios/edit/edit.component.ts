import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioDataService } from '../funcionario-data.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  funcionario: Funcionario;
  key: string = '';//sempre que clicarmos na lista de um funcionário vamos guardar sua chave para saber se ele vai ter que inserir ou atualizar

  constructor(private funcionarioService: FuncionarioService, private funcionarioDataService: FuncionarioDataService) { }

  ngOnInit(): void { //aqui o form é carregado
    this.funcionario = new Funcionario(); //instanciando a classe Funcionario

    //funcionarioDataService é a classe responsável por obter os novos dados quando editamos um funcionário, por isso é um serviço
    this.funcionarioDataService.funcionarioAtual.subscribe(data => {//assim que os novos dados chegarem, o subscribe já os atribui para a classe que instanciamos 
      if(data.funcionario && data.key) { //se já existe, vamos editá-lo
        this.funcionario = new Funcionario();//zeramos os campos instanciando um novo funcionario
        this.funcionario.nome = data.funcionario.nome;
        this.funcionario.departamento = data.funcionario.departamento;//preenchemos os campos com as novas informações de data
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if(this.key){//se tem chave, é edição
      this.funcionarioService.update(this.funcionario, this.key)//chama a função update e passa os dados novos que recebemos no subscribe
    }else {//se não tem, é criação
      this.funcionarioService.insert(this.funcionario)//chama a função de inserir um funcionário
    }

    this.funcionario = new Funcionario(); //zerando a instância
    this.key = null; //zerando a key para que da próxima vez que houver inserção ela não venha preenchida e entre no if
  }

}
