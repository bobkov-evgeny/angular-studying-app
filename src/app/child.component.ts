import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: 'child-comp',
  template: `
    <p>Привет, {{name}}</p>
  `
})

export class ChildComponent {
  name:string = '';

}
