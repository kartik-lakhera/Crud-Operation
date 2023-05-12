import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UrlService } from 'src/app/core/Services/url.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  createUser!: FormGroup;

  constructor(private service: UrlService, public dialogRef: MatDialogRef<TableComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private _fb: FormBuilder) {

    this.createUser = this._fb.group({
      name: new FormControl('', [Validators.required]),
      fatherName: new FormControl('', [Validators.required]),
      motherName: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.createUser.patchValue({
      name: this.data?.data?.name,
      fatherName: this.data?.data?.fatherName,
      motherName: this.data?.data?.motherName
    })
  }

  //post data
  submitForm() {
    if (this.createUser?.invalid) {
      return
    }
    else if (this.createUser?.valid && !this.data?.data) {
      for (let i = 0; i < this.service.emails?.length; i++) {
        if (this.service.emails[i]?.name == this.createUser?.value?.name) {
          alert('Name Should Be Changed')
          this.dialogRef.close();
          return
        }
      }

      this.service.postData(this.createUser?.value).subscribe((res: any) => {
        this.dialogRef.close(this.createUser?.value);
      })
      return
    }
    else if (this.createUser?.valid) {
      for (let i = 0; i < this.service.emails?.length; i++) {
        if ((this.service.emails[i]?.name == this.createUser?.value?.name) && this.data?.id != this.service.emails[i]?.id) {
          alert('Name Should Be Changed');
          this.dialogRef.close();
          return
        }
      }
      this.service.putData(this.data?.id, this.createUser?.value).subscribe((res: any) => {
        this.dialogRef.close(this.createUser?.value);
      })
    }
    else {
      this.dialogRef.close();
    }
  }

  close() {
    this.dialogRef.close();
  }
}
