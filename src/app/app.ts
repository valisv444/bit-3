import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent
  ],
  template: `
    <nav class="main-nav">
      <div class="crystal-center"></div>

      <div class="menu">
        <a routerLink="/pag1" routerLinkActive="active">Characters</a>
        <a routerLink="/pag2/all" routerLinkActive="active">Information</a>
      </div>

      <div class="orbs">
        <div class="orb red"></div>
        <div class="orb blue"></div>
        <div class="orb green"></div>
        <div class="orb yellow"></div>
        <div class="orb pink"></div>
      </div>

      <div class="stars">
  <div class="star star1"></div>
  <div class="star star2"></div>
  <div class="star star3"></div>
  <div class="star star4"></div>
  <div class="star star5"></div> 
  <div class="star star6"></div> 
    </div>

   </nav>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {}
