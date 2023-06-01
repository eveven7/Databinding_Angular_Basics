import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockipit',
  templateUrl: './cockipit.component.html',
  styleUrls: ['./cockipit.component.css'],
})
export class CockipitComponent implements OnInit {
  //output passing out of the component
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>(); //call a constructor of an emitter, created new emitter object
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  // newServerContent = '';
@ViewChild('serverContentInput') serverContentInput:ElementRef;
  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
      // serverName: this.newServerName,

    // console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,

      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
    serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
