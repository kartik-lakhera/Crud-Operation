import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submitData() {
    if (this.loginForm.value.email == 'login' && this.loginForm.value.password == 'user') {
      localStorage.setItem(this.loginForm.value.email, this.loginForm.value.password);
      this._router.navigate(['/table'])
      return;
    }
  }

  resetData() {
    localStorage.clear();
    this.loginForm.reset();
  }
}
