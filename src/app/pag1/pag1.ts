
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pag1.html',
  styleUrls: ['./pag1.scss']
})
export class Pag1 {
  characters: {
    name: string;
    image: string;
    role: string;
    voiceActors: string;
    id: number;
  }[] = [];

  constructor(private animeSvc: AnimeService) {}

  ngOnInit(): void {
    const seiyuusPorId: Record<number, string> = {
      2030: 'Kotono Mitsuishi',   // Usagi Tsukino
      2366: 'Aya Hisakawa',        // Ami Mizuno
      2367: 'Michie Tomizawa',     // Rei Hino
      2825: 'Emi Shinohara',       // Makoto Kino
      2826: 'Rica Fukami',         // Minako Aino
      4013: 'Toru Furuya',         // Mamoru Chiba (Tuxedo Mask)
      5407: 'Keiko Han',           // Luna
      5408: 'Yasuhiro Takato'      // Artemis
    };

    this.animeSvc.getCharacters().subscribe((response) => {
      this.characters = response.data.map((char: any) => {
        const id = char.character.mal_id;
        const voiceActor = seiyuusPorId[id] || 'No disponible';

        return {
          name: char.character.name,
          image: char.character.images.jpg.image_url,
          role: char.role,
          voiceActors: voiceActor,
          id
        };
      });
    });
  }
}
