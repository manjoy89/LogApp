import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  Content:String;
  Staging:String;
  file:any;
  ErrFlag:boolean = false;
  WarnFlag:boolean = false;
  ErrCount:number = 0;
  WarnCount:number = 0;

  constructor() { 
  }

  ngOnInit() {

  }

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    console.log(file);
    fileReader.onloadend = function(x) {
      self.Staging = fileReader.result as string;
      if (self.Staging.indexOf('Error') >= 0){
        self.ErrFlag = true;
      }
      if (self.Staging.indexOf('Warning') >= 0){
        self.WarnFlag = true;
      }
      self.ErrCount = (self.Staging.match(/Error/g) || []).length;
      self.WarnCount = (self.Staging.match(/Warning/g) || []).length;
      self.Content = self.Staging.split('Error').join('<=============================Error==========================>');
    }
    self.ErrCount = 0;
    self.WarnCount = 0;
    var myInterval = setInterval(function() {
    fileReader.readAsText(file);
    self.ErrFlag = false;
    self.WarnFlag = false;
    var textarea = document.getElementById('textarea_id');
    textarea.scrollTop = textarea.scrollHeight;
  }, 1000);
  }  

  cleardata(){
    if(window.confirm('Are sure you want to clear the Logs ?')){
    this.Content = "";
   }
}
  


}
