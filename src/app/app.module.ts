import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailsService } from './details.service';
import { FilterTablePipe } from './filter-table.pipe';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewListDetailsComponent } from './view-list-details/view-list-details.component';

const routes: Routes = [
  { path: 'viewListDetails/:id', component: ViewListDetailsComponent },
  { path: 'viewList', component: ViewListComponent },
] 

@NgModule({
  declarations: [
    AppComponent,
    FilterTablePipe,
    ViewListComponent,
    ViewListDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
