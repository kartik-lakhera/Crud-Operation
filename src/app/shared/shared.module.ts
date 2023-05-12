import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [  //export for use in another component
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    MainLayoutComponent
  ]
})
export class SharedModule { }
