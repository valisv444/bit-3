import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router'; // ✅ asegúrate de importar RouterModule
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-pag2',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ agrega RouterModule aquí
  templateUrl: './pag2.html',
  styleUrls: ['./pag2.scss']
})
export class Pag2 implements OnInit {
  characters: any[] = [];
  currentId: string | null = null;

  constructor(
    private animeSvc: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentId = this.route.snapshot.paramMap.get('id');

    if (this.currentId && this.currentId !== 'all') {
      this.animeSvc.getCharacterDetails(+this.currentId).subscribe((res) => {
        this.characters = [res.data];
      });
    } else {
      this.animeSvc.getCharacters().subscribe((response) => {
        response.data.forEach((char: any) => {
          this.animeSvc.getCharacterDetails(char.character.mal_id).subscribe((res) => {
            this.characters.push(res.data);
          });
        });
      });
    }
  }
}
