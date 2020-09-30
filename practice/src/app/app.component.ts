import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  a:object[] = [{name:'raju',age:22},{name:'navya',age:22},{name:'jaga',age:22},{name:'amm',age:22}]
  b:any[] = [];
  names:any[] = [];
  i:any;
  dt = false;
  
  title = 'practice';
  ngOnInit(): void {  
    console.log(this.a.sort()) 
    this.a.forEach((val)=>{
      console.log(val['name'])
      this.b.push(val['name']);
      this.b.sort()
    })
    this.a.forEach((val1)=>{
      for(this.i=0; this.i<this.b.length; this.i++){
        console.log(this.b[this.i])
        if(val1['name'] == this.b[this.i]){
          this.names.push(val1);
        }
      }
    })
    console.log(this.names)
    //console.log(this.b)
    
  }

  send(d){
    this.dt = true;
    console.log(d.value)
  }
  Closedata(){
    this.dt = false;
  }
}
