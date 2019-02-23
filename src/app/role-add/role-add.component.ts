import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { RoleService } from '../role.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {

  rolForm: FormGroup;
  role: any = {};
  roles = [];
  permissions = [
    {perm1: "create"},
    {perm2: "read"},
    {perm3: "update"},
    {perm4: "delete"},
    {perm5: "publish"},
    {perm6: "archive"},
  ];

  rolePermOptions = new Array<any>();

  constructor(
    private fb: FormBuilder, 
    private rs: RoleService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.rolForm = this.fb.group({
        roleId: ['', Validators.required ],
        roleName: ['', Validators.required ],
        permissions: []
    });
      this.roles.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.rolForm.controls.orders as FormArray).push(control);
    });
    setTimeout(() => {
      this.rolePermOptions = this.permissions;
      }, 1000);
  }

  
  
  get rf() { 
    return this.rolForm.controls; 
  }

  addRole(roleId, roleName, perm1, perm2, perm3, perm4, perm5, perm6) {
    this.route.params.subscribe(params => {
        this.rs.addRole(roleId, roleName, perm1, perm2, perm3, perm4, perm5, perm6).subscribe((data: string) => {
          console.log(data);
          this.router.navigate(['role']);
        });
      });
    }


}