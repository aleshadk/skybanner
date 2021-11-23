import { Injectable } from '@angular/core';
import { IPollData, PollComponent } from './poll.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private dialog: MatDialog) { }

  showPoll(data: IPollData): MatDialogRef<PollComponent> {
    return this.dialog.open(PollComponent, {
      width: '360px',
      data,
    });
  }
}
