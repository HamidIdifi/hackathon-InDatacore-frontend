import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgChartsModule} from 'ng2-charts';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {DashComponent} from './dash/dash.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {AppRoutingModule} from "./app-routing.module";
import {CardComponent} from './card/card.component';
import {StackedBarChartComponentComponent} from './stacked-bar-chart-component/stacked-bar-chart-component.component';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {DateTimeAxisGraphComponent} from './date-time-axis-graph/date-time-axis-graph.component';
import {HttpClientModule} from "@angular/common/http";
import {DataTableComponent} from './data-table/data-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ReactiveFormsModule} from "@angular/forms";
import { FileUploaderComponent } from './shared/file-uploader/file-uploader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './regester/register.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DndDirective } from './shared/directives/dnd.directive';
import { ProgressComponent } from './shared/progress/progress.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        DashComponent,
        CardComponent,
        StackedBarChartComponentComponent,
        PieChartComponent,
        DateTimeAxisGraphComponent,
        DataTableComponent,
        FileUploaderComponent,
        LoginComponent,
        RegisterComponent,
        DashboardHomeComponent,
        DndDirective,
        ProgressComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgChartsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        RouterLink,
        RouterOutlet,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        CanvasJSAngularChartsModule,
        HttpClientModule,
        MatTableModule,
        MatDialogModule,
        MatExpansionModule,
        MatProgressBarModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
