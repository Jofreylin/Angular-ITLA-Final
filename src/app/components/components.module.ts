import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorComponent } from './paginator/paginator.component';
import { FormsModule } from '@angular/forms';
import { SearcherComponent } from './searcher/searcher.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    NavbarComponent,
    PaginatorComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    PaginatorComponent,
    SearcherComponent
  ]
})
export class ComponentsModule { }
