import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { UploadUserService } from './upload-user.service'

@Component({
  selector: 'app-upload-user',
  templateUrl: './upload-user.component.html',
  styleUrls: ['./upload-user.component.css']
})
export class UploadUserComponent implements OnInit {



  csvRecords: any;
  header: boolean = true;

  constructor(private ngxCsvParser: NgxCsvParser, private uploadUserService: UploadUserService) { }

  @ViewChild('fileImportInput') fileImportInput: any;

  ngOnInit(): void {
  }

//is called when the user uploads an .csv
//takes the file uploaded and parses the headers
//calls validateHeader() which returns true if the headers match the database
//if the headers are true, it updates the DOM to display the data
fileChangeListener ($event: any): any {
  const files = $event.srcElement.files;
  var headers = new Array<any>();
  this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',', encoding: 'utf8' })
      .pipe().subscribe({
        next: (result): any => {
          //parses csv, including the headers
          this.csvRecords = result;
          //creates an array of the headers
          for (let i = 0; i < this.csvRecords[0].length;i++) {
            headers.push(this.csvRecords[0][i])
          }
          //validates the headers by comparing them to those in the database
          //these are hardcoded into validateHeader
          if (this.validateHeader(headers) == true){
            //ignores the headers and parses the data, logging it into this.csvRecords which updates the DOM
            this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',', encoding: 'utf8' })
            .pipe().subscribe({
              next: (result): void => {
                console.log('Result', result);
                this.csvRecords = result;
                this.uploadUserService.postUsers(result);
              },
              error: (error: NgxCSVParserError): void => {
                console.log('Error', error);
              }
            });
          }
          else {
            alert("Incorrect headers!");
          }
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        },
      });
} 
//validates the headers
//returns a boolean value after checking to see if the appropriate headers were used in the csv file
validateHeader(arr: any): any {
  const headers: Array<string> = ['firstname', 'lastname', 'address', 'city', 'state', 'usernumber', 'group'];
    for (let i =0; i<headers[0].length;i++){
      if(arr[i] != headers[i]){
        return false;
      }
    }
    return true;
  }
}
