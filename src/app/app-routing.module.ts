import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { OlympiadComponent } from './pages/olympiad/olympiad.component';
import { PollComponent } from './pages/poll/poll.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'poll', component: PollComponent },
  { path: 'cabinet', component: CabinetComponent },
  { path: 'olympiad', component: OlympiadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
