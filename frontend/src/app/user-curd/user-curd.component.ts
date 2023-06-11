import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-curd',
  templateUrl: './user-curd.component.html',
  styleUrls: ['./user-curd.component.scss']
})
export class UserCURDComponent {
  public title: string = '';
  public Users: any[] = [];
  public currentID: any = '';


  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http.get("http://localhost:8000/v1/User/getAll")
      .subscribe((resultData: any) => {
        this.Users = resultData;
        // console.log(this.Users);
      });
  }

  submit() {
    let bodyData = {
      "title": this.title
    };
    this.http.post("http://localhost:8000/v1/User/create/", bodyData).subscribe((result: any) => {
      console.log(result);
      alert("yoooo successfully!!!")
      this.title = '';
      this.getAll();
    })
  }


  editTask() {
    let bodyData = {
      "title": this.title
    };
    this.http.put("http://localhost:8000/v1/User/update/" +
      this.currentID, bodyData).subscribe((resultData: any) => {
        console.log(resultData, "updated");
        this.getAll();
      })
  }

  updateUser(data: any) {
    this.title = data.title;
    this.currentID = data._id;
  }

  save() {
    if (this.currentID == '') {
      this.submit();
    }
    else {
      this.editTask();
    }

  }

  deleteUser(data: any) {
    this.currentID = data._id;
    this.http.delete("http://localhost:8000/v1/User/delete/" + this.currentID).subscribe((resultData: any) => {
      console.log(resultData);
      alert(" Deletedd")
      this.getAll();
    });
  }
}
