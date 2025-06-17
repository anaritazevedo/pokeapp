import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonService } from 'src/app/servicos/pokemon.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class InicioPage implements OnInit {
  lista: any[] = [];
  deslocamento = 0;
  limite = 20;

  constructor(private pokeAPI: PokemonService) {}

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.pokeAPI.listarPokemons(this.deslocamento, this.limite).subscribe((res: any) => {
      res.results.forEach((item: any, i: number) => {
        const id = this.deslocamento + i + 1;
        this.lista.push({
          nome: item.name,
          imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        });
      });
    });
  }

  carregarMais() {
    this.deslocamento += this.limite;
    this.carregarLista();
  }

  abrirDetalhes(nome: string) {
    window.location.href = `/detalhes/${nome}`;
  }
}
