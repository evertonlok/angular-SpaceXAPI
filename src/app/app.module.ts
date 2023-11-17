
// Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSortModule } from '@angular/material/sort'

import { PtBrMatPaginatorIntl } from './i18n/table'

// Components
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component'
import { CrewDialogComponent } from './home-page/dialogs/crew/crew-dialog.component'
import { PayloadDialogComponent } from './home-page/dialogs/payload/payload-dialog.component'
import { HistoryEventsComponent } from './home-page/history-events/history-events.component'
import { RocketListComponent } from './home-page/rocket-list/rocket-list.component'
import { CacheInterceptor } from './services/cache.interceptor'
import { NotFoundComponent } from './not-found/not-found.component'
import { ShowcaseDirective } from './directives/showcase/showcase.directive';
import { LaunchesTableComponent } from './home-page/launches-table/launches-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CrewDialogComponent,
    PayloadDialogComponent,
    HistoryEventsComponent,
    RocketListComponent,
    NotFoundComponent,
    ShowcaseDirective,
    LaunchesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
