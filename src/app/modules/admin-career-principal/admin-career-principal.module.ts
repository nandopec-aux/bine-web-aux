import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

/* Routing */
import { appRoutes } from './admin-career-principal.routing';

/* Components */
import { AcpSidebarComponent } from './components/acp-sidebar/acp-sidebar.component';
import { AcpNavbarComponent } from './components/acp-navbar/acp-navbar.component';

/* Pages */
import { PagesComponent } from './pages/pages.component';
import { AcpDashboardComponent } from './pages/acp-dashboard/acp-dashboard.component';
import { AcpStudentsComponent } from './pages/acp-students/acp-students.component';
import { AcpTeachersComponent } from './pages/acp-teachers/acp-teachers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  declarations: [
    PagesComponent,
    AcpDashboardComponent,
    AcpSidebarComponent,
    AcpNavbarComponent,
    AcpStudentsComponent,
    AcpTeachersComponent,
  ]
})
export class AdminCareerPrincipalModule { }
