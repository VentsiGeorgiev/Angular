import { Component, Input } from '@angular/core';
import { ITheme } from 'src/app/share/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent<ITheme> {

  @Input() title!: string;
  @Input() items!: any | undefined;

  constructor() { }

}
