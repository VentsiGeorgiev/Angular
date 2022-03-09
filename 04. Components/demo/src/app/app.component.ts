import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 3;

  users = [
    {
      name: 'Ivan 1',
      age: 21
    },
    {
      name: 'Ivan 2',
      age: 21
    },
    {
      name: 'Ivan 3',
      age: 23
    },
  ]

  buttonClickHandler(){
    // this.title++;
    const current = this.title++;

    this.users.push({
      name: `Ivan ${current}`,
      age: 20 + current,
    })
  }

  showText = true;
  toggleText():void {
    this.showText = !this.showText;
  }

  showEventText = true;

  toggleTextEvent(event: MouseEvent):void {
    event.preventDefault();
    this.showEventText = !this.showEventText;
  }

  imgUrl = 'https://miro.medium.com/max/450/1*Lvp7DLX4bfKX4GRJ7VpnYA.png'


  classes = ['test', 'test-1']

  changeHeadingHandler(inputEl: HTMLInputElement): void {
    this.heading = inputEl.value;
    inputEl.value = '';
  }

  heading = 'Reference other elements';

  addNewUserHandler(newUser: IUser): void{
    this.users.push(newUser)
  }

}

export class UsersDemo {
  users = [
    {
      name: 'Ivan 1',
      age: 21
    },
    {
      name: 'Ivan 2',
      age: 22
    },
    {
      name: 'Ivan 3',
      age: 23
    },
  ];

  
}
