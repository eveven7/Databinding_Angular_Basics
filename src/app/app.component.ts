import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'just a test' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(bluePrintData: {
    newServerName: string;
    newServerContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.newServerName,
      content: bluePrintData.newServerContent,
    });
  }
}
