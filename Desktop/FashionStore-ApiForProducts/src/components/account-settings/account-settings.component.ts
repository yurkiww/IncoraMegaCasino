import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { IUser } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: IUser[] = [];
  currentUser: IUser;
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });

    // this.getUsers();
    // this.getUser(2);
    this.getCurrentUser();
  }
  // private getUsers() {
  //   this.userService.getUsers().subscribe(
  //     (res) => {
  //       this.users = res;
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  // private getUser(userId: number) {
  //   this.userService.getUser(userId).subscribe((res) => {
  //     this.users = res;w
  //     console.log(res);
  //   });
  // }
  private getCurrentUser() {
    this.userService.getMe().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }
  updateUser = () => {
    if (this.currentUser) {
      const user = {
        ...this.form.value,
        id: this.currentUser.id,
      };
      this.userService.editUser(user).subscribe((res) => {
        this.getCurrentUser();
        this.currentUser = null;
      });
    }
  };

  setUser = (user: IUser) => {
    this.currentUser = user;
    this.form.patchValue(user);
  };

  onSubmit() {
    console.log('Submitted', this.form);
  }

  isFieldValid = (filedName) => {
    return this.form.get(filedName).invalid && this.form.get(filedName).touched;
  };
}
