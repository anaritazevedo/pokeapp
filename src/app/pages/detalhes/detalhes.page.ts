import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from 'src/app/servicos/pokemon.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class DetalhesPage implements OnInit {
  nome!: string;
  info: any;

  tipos = '';
  habilidades = '';

  constructor(
    private rota: ActivatedRoute,
    private pokeAPI: PokemonService
  ) {}

  ngOnInit() {
    this.nome = this.rota.snapshot.paramMap.get('nome')!;
    this.pokeAPI.detalhesDoPokemon(this.nome).subscribe((data: any) => {
      this.info = data;
      // pré-processa textos para exibir no template
      this.tipos = data.types?.map((t: any) => t.type.name).join(', ') ?? '';
      this.habilidades = data.abilities
        ?.map((a: any) => a.ability.name)
        .join(', ') ?? '';
    });
  }
}
