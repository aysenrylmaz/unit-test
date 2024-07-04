import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let calc: CalcService;
  let shared:SharedService;


  beforeEach(() => {       //Before other test application, we need to implement this blog for every project
    // shared=new SharedService();
    // calc=new CalcService(shared);
     
    shared=jasmine.createSpyObj("SharedService", ["mySharedFunction"]); //Mock Service
    TestBed.configureTestingModule({
     providers:[CalcService, 
      {provide:SharedService,useValue:shared}
      ]
    });
    shared=TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });     

  it('should be created', () => {
    expect(calc).toBeTruthy();
  });

  beforeEach(()=>{
    console.log("Before each is called");
  });

  // it("should multiple two numbers", () => {
  //   const result=calc.multiply(3,5);
  //   expect(result).toBe(15);
  // });



  it("should call the mySharedFunction", () => {
    //spyOn(shared,"mySharedFunction");
    //spyOn(shared,"mySharedFunction").and.callThrough();
    const result=calc.multiply(3,5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  });



});
