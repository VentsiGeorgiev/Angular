import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { ITheme } from './share/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop';

  themes: ITheme[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes)
  }
}