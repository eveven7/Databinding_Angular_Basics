import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,

      // serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }
}
