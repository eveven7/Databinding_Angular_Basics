import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // does not work
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string; //binding to primitive
  @ViewChild( 'heading', { static : true } ) heading:ElementRef;;
  @ContentChild( 'contentParagraph', { static : true } ) paragraph:ElementRef;;

  constructor() {
    console.log('Constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.heading.nativeElement.textContent)
  }
  ngDoCheck(): void {
    console.log('DoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent)

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
