import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';
import Role from '../Role';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {

  
  role: any = {};
  roles: Role[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private rs: RoleService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rs.detailRole(params['id']).subscribe(res => {
        this.role = res;
      });
    });
  }

  refreshRoles(): void {
    this.rs
    .getRoles()
    .subscribe((data: Role[]) => {
    this.roles = data;
    this.router.navigate(['role']);
    })
    }

  deleteRole(id) {
    this.rs.deleteRole(id).subscribe(res => {
      console.log('Deleted');
      this.refreshRoles();
    });
  }


}
