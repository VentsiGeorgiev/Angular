import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ITheme } from '../share/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  ngOnInit(): void {
  }

  themes: ITheme[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes)
  }

}
