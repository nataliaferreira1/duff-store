import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {
  nome;
  detalhes;
  image;

  constructor(private route:ActivatedRoute) {
    console.log("EXECUTOU O CONSTRUTOR")
  }

  ngOnInit() {
    let idCerveja = this.route.snapshot.params.id;

    if(idCerveja === '50'){
        this.nome = "Proibida";
        this.detalhes = "A Proibida é uma cerveja puro malte originalmente brasileira, inspirada na região das melhores cervejas do mundo";
        this.image = "assets/proibida-card-header.png";
    }

    if(idCerveja === '51'){
      this.nome = "Skol";
      this.detalhes = " A cerveja Skol é uma cerveja clara, com aroma refinado e sabor leve e suave. Cerveja Skol é jovem, ousada, irreverente";
      this.image = "assets/skol-puro-malte.webp";
  }

    if(idCerveja === '60'){
      this.nome = "Pilsen";
      this.detalhes = "Essa cerveja tambem é boa para um caraleo, tome dessa merda";
      this.image = "assets/pilsen-card-header.jpg";
  }


  }

} 
