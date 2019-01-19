import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  Content:String;
  Staging:String;


  constructor(private http: HttpClient) { 
    var myInterval = setInterval(() =>{
    this.http.get('http://localhost:8080/',{responseType: 'text'}).subscribe(data=>{

      this.Staging = data;
      var textarea = document.getElementById('textarea_id');
      textarea.style.backgroundColor = "";
      textarea.scrollTop = textarea.scrollHeight;
      this.Content = this.Staging.split('Error').join('<=============================Error==========================>');
    })
  }, 1000);
   
 
  }

  ngOnInit() {

  }
/*
  public onChange(fileList: FileList): void {
    let file = fileList[0];
    console.log(file);
    let fileReader: FileReader = new FileReader();
    let self = this;
    console.log(file);
    fileReader.onloadend = function(x) {
      self.Content = fileReader.result as string;
    }
    var myInterval = setInterval(function() {
    fileReader.readAsText(file);
    var textarea = document.getElementById('textarea_id');
    textarea.scrollTop = textarea.scrollHeight;
  }, 1000);
  }  
  */

 

}
