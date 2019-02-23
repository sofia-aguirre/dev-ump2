import { Component, OnInit } from '@angular/core';
import Role from '../Role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-get',
  templateUrl: './role-get.component.html',
  styleUrls: ['./role-get.component.scss']
})
export class RoleGetComponent implements OnInit {

  roles: Role[];

  constructor(private bs: RoleService) { }

  ngOnInit() {
    this.bs
    .getRoles()
    .subscribe((data: Role[]) => {
    this.roles = data;
    })
  }
}
