import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {

  rolForm: FormGroup;
  role: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private rs: RoleService,
    private fb: FormBuilder) {
      this.createForm();
      }

  createForm() {
    this.rolForm = this.fb.group({
      roleId: ['', Validators.required ],
      roleName: ['', Validators.required ],
      perm1: [],
      perm2: [],
      perm3: [],
      perm4: [],
      perm5: [],
      perm6: [],
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rs.editRole(params['id']).subscribe(res => {
        this.role = res;
      });
    });
  }

  get rf() { 
    return this.rolForm.controls; 
  }

  updateRole(roleId, roleName, perm1, perm2, perm3, perm4, perm5, perm6) {
    this.route.params.subscribe(params => {
        this.rs.updateRole(roleId, roleName, perm1, perm2, perm3, perm4, perm5, perm6, params['id']).subscribe((data: string) => {
          console.log(data);
          this.router.navigate(['role/detail/', params['id']]);
        });
      });
    }
}
