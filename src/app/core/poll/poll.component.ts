import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface IPollData {
  url: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PollComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPollData
  ) {

  }
  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }

  public complete(): void {
    this.close();
  }

}
