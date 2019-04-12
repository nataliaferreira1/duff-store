import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cerevja',
  templateUrl: './add-cerevja.page.html',
  styleUrls: ['./add-cerevja.page.scss'],
})
export class AddCerevjaPage implements OnInit {

  constructor() { }
mensagem;

  ngOnInit() {
    this.mensagem=""
  }

  salvar(form){
    const cervejaString= JSON.stringify(form.value)
    const nomeCerveja = form.value.nome
      sessionStorage.setItem(nomeCerveja, cervejaString)
      form.reset()
      this.mensagem = "Cadastrado com sucesso"
  }
}
