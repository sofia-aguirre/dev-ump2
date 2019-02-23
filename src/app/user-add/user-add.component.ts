import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;
  user: any = {};
  roles = [];

  constructor(
    private fb: FormBuilder, 
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
        roles: new FormArray([], ),
        firstName: ['', Validators.required ],
        lastName: ['', Validators.required ],
        phoneNum: ['', Validators.required ],
        email: ['', [Validators.required, Validators.email] ]
    });
      this.roles.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.angForm.controls.orders as FormArray).push(control);
    });
  }

  
  
  get af() { 
    return this.angForm.controls; 
  }

  addUser(firstName, lastName, phoneNum, email) {
    this.route.params.subscribe(params => {
        this.us.addUser(firstName, lastName, phoneNum, email).subscribe((data: string) => {
          console.log(data);
          this.router.navigate(['user']);
        });
      });
    }


}