import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UrlService } from 'src/app/core/Services/url.service';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { Select, Store } from '@ngxs/store'
import { getUser } from 'src/app/ngxs/action';
import { userState } from 'src/app/ngxs/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'fatherName', 'motherName', 'actions'];
  // dataSource: any = new MatTableDataSource<any>();.
  dataSource: any;
  dataStore: any = [];
  @Select(userState.getUserDetails) userData$!: Observable<any[]>;
  constructor(private _service: UrlService, public dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
    this.getDataFromApi();
    // this.getUserDetails();
    // always use in ngOnInit because it is a get request
  }

  getDataFromApi() {
    this._service.getData().subscribe((res: any) => {
      for (let i = 0; i < res?.length; i++) {
        this._service.emails.push({ "name": res?.[i]?.name, "id": res?.[i]?.id })
      }
      this.dataStore = new MatTableDataSource(res);
      this.dataSource = this.dataStore;
    })
  }

  applyFilter(filterValue: any) {
    return this.dataSource = this.dataStore?.filteredData?.filter((x: any) => Object.keys(x).find((val: any) => x[val].toString().includes(filterValue.target.value))
    )
  }

  //get request
  getData() {
    this.store.dispatch(new getUser())
  }

  getUserDetails() {
    this.userData$.subscribe((res) => {
      if (res.length == 0) this.getData();
      else this.dataSource = new MatTableDataSource(res);
    })
  }

  //open dialog
  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getDataFromApi(); //get call because after close dialog update the table data
      } else {
        return
      }
    });
  }

  //update-table data
  updateData(element: any) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { id: element?.id, data: element } //send data to form it helps to fill data in form
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getDataFromApi(); //get call because after close dialog update the table data
      }
    });
  }

  deleteData(element: any) {
    this._service.deleteData(element?.id).subscribe((res: any) => {
      this.getData();
    })
  }
}
