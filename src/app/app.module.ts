import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { FooterComponent } from './layouts/layout-sections/footer/footer.component';
import { HeaderComponent } from './layouts/layout-sections/header/header.component';
import { SidebarComponent } from './layouts/layout-sections/sidebar/sidebar.component';
import { DropdownMenuDirective } from './directives/dropdown/dropdown-menu.directive';
import { AppLoginLayoutComponent } from './layouts/app-login-layout/app-login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DropdownMenuDirective,
    AppLoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
