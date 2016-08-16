import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http'

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent }  from './app.component';
import { routing } from './app.routing'

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'
import { HeroesComponent } from './heroes.component'
import { HeroSearchComponent } from './hero-search.component'
import { DashboardComponent } from './dashboard.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
       HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
