import { Component, AfterViewInit } from '@angular/core';
declare let mdc: any;

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const drawer = new mdc.drawer.MDCDrawer.attachTo(
      document.querySelector('.mdc-drawer')
    );
    drawer.open = true;
    const topAppBar = new mdc.topAppBar.MDCTopAppBar(
      document.getElementById('app-bar')
    );
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  }


}
