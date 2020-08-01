import { Component, OnInit, Type, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Injector } from '@angular/core';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart
} from '@angular/router';
// import { FooComponent } from './components/foo/foo.component';
// import { BarComponent } from './components/bar/bar.component';
// import { TestService } from './services/test.service';
declare let mdc: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  // foo: Promise<Type<FooComponent>>;
  // barRef: ComponentRef<BarComponent>;
  // fooInjector: Injector;
  title = 'Material.io';
  loading = false;

  constructor(
    private router: Router,
    private injector: Injector,
    private resolver: ComponentFactoryResolver){
      this.router.events.subscribe((event: Event) => {
        switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          mdc.autoInit(document, () => { });
          break;
        }
        default: {
          break;
        }
        }
      });
    }

  ngOnInit(): void {
    // this.loadfoo();
  }

  // loadfoo(): void {
  //   if (!this.foo) {
  //     this.fooInjector = Injector.create({
  //       providers: [{
  //         provide: 'fooData',
  //         useValue: { id: 1, title: 'emoji' }
  //       },
  //       {
  //         provide: 'TestService',
  //         useExisting: TestService
  //       }
  //     ],
  //       parent: this.injector
  //     });
  //   }
  //   this.foo = import(`./components/foo/foo.component`)
  //             .then(({ FooComponent }) => FooComponent);
  // }

  // async loadBar() {
  //   if (!this.barRef) {
  //     const { BarComponent } = await import(`./components/bar/bar.component`);
  //     const factory = this.resolver.resolveComponentFactory(BarComponent);
  //     this.barRef = this.vcr.createComponent(factory);
  //     // this.barRef.instance.title = 100000;
  //     // Don't forget to unsubscribe
  //     this.barRef.instance.titleChanges.subscribe((data: number) => {
  //       console.log(data);
  //     });
  //   }
  // }

}

