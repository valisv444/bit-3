
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <p>© 2025 Sailor Moon Fan App | Datos obtenidos de la API oficial</p>
    </footer>
  `,
  styleUrls: ['./footer.scss']
})
export class FooterComponent {}
