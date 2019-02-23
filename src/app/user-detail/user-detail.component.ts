import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import User from '../User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any = {};
  users: User[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.detailUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  refreshUsers(): void {
    this.us
    .getUsers()
    .subscribe((data: User[]) => {
    this.users = data;
    this.router.navigate(['user']);
    })
    }

  deleteUser(id) {
    this.us.deleteUser(id).subscribe(res => {
      console.log('Deleted');
      this.refreshUsers();
    });
  }


}
