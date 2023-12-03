import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../services/api-services/api.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  student: Student[] = [];
  // columns we will show on the table
  public displayedColumns = ['firstName', 'lastName', 'studentEmail', 'yearOfStudy', 'registrationNumber', 'course' ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Student>();

  //dependency injection
  constructor(private studentApiService: ApiService) {
  }

  ngOnInit(){
    //call this method on component load
    this.getStudentsInformation();
  }
  /**
   * This method returns students details
   */
  getStudentsInformation(){
    this.studentApiService.getStudentsInformation()
      .subscribe((res)=>{
        console.log(res);
        this.dataSource.data = res;
      })
  }

}
