import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

// import { of } from 'rxjs';
// import { map } from 'rxjs/operators'

// Promise.resolve(1000).then(x => x + 1).then(console.log);

// of(1000, 200, 300).pipe(
//   map(x => x + 100)
// ).subscribe((x) => {
//   console.log(x);
// })



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: IUser[] | undefined;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(search?: string): void {
    this.users = undefined;
    this.userService.loadUsers(search).subscribe(users => this.users = users)
  }

  reloadButtonHandler() {
    this.loadUsers();
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  }
}
