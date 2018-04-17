import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd'
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm($event, value) {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    // 校验表单，当表单填写不合规范，不允许请求后台
    if (this.getFormControl('userName').hasError('email') || this.validateForm.controls.password.hasError('required') || this.validateForm.controls.userName.hasError('required')) {
      return;
    }
    this.http.post("http://localhost:8090/login", {
      email: value.userName,
      password: value.password
    }).subscribe(
      (data) => {
        let response = { code: 0, email: '', token: '', msg: '' };
        for (var i in data) {
          response[i] = data[i];
        }
        if (response.code === 1) {
          let storage = { "isLoggedIn": true, "email": response.email }
          window.localStorage.setItem("privilege", JSON.stringify(storage));
          window.localStorage.setItem('access_token', response.token)
          this.createBasicMessage('success', '登录成功');
          this.router.navigateByUrl("/")
          return;
        }
        this.createBasicMessage('error', response.msg);
      },
      response => {
        console.log("POST call in error", response);
      });
  };

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, email: true };
    }
  };

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  createBasicMessage(type, msg) {
    this._message.create(type, msg);
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private _message: NzMessageService, private router: Router) {
    this.validateForm = this.fb.group({
      userName: [null, [this.emailValidator]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit() { }
}
