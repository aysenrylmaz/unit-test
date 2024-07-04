import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log("A Http Call");
  }

  mySharedFunction(){
  console.log("Service is tested");

  }
}
