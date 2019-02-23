import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  angForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder) {
      this.createForm();
      }

  createForm() {
    this.angForm = this.fb.group({
        firstName: ['', Validators.required ],
        lastName: ['', Validators.required ],
        phoneNum: ['', Validators.required ],
          email: ['', [Validators.required, Validators.email] ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  get af() { 
    return this.angForm.controls; 
  }

  updateUser(firstName, lastName, phoneNum, email) {
    this.route.params.subscribe(params => {
        this.us.updateUser(firstName, lastName, phoneNum, email, params['id']).subscribe((data: string) => {
          console.log(data);
          this.router.navigate(['user/detail/', params['id']]);
        });
      });
    }
}