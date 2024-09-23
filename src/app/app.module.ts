import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ScannerComponent } from './component/scanner/scanner.component';
import { HttpClientModule } from '@angular/common/http';
import { NewListComponent } from './component/new-list/new-list.component';
import { ListeComponent } from './component/liste/liste.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'scanner',
    component: ScannerComponent,
  },
  {
    path: 'add',
    component: NewListComponent,
  },
  {
    path: 'liste',
    component: ListeComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ScannerComponent,
    NewListComponent,
    ListeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
