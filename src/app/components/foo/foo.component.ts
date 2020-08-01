import { Component, OnInit, Inject, NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  myGroup: FormGroup;

  constructor(
    @Inject('fooData') data,
    @Inject('TestService') testService,
    private test: TestService
    ) {
      console.log(testService.myData());
    }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      awesome: new FormControl()
   });

   this.myGroup.controls.awesome.valueChanges.subscribe(()=>{
      console.log('i am Changed');
   });
  }

}

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [FooComponent]
})
class FooModule {
}
