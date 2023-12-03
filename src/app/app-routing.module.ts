import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashComponent} from "./dash/dash.component";
import {DataTableComponent} from "./data-table/data-table.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./regester/register.component";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {FileUploaderComponent} from "./shared/file-uploader/file-uploader.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardHomeComponent,children:[
      {path:'',component:DashComponent} ,
    {path: 'datatable', component: DataTableComponent},
      {path:'upload-data',component:FileUploaderComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

