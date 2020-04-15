import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dialog-konfirmasi',
  templateUrl: './dialog-konfirmasi.component.html',
  styleUrls: ['./dialog-konfirmasi.component.css'],
})
export class DialogkonfirmasiComponent implements OnInit {
  constructor( 
  public api: ApiService,
  public dialogRef: MatDialogRef<DialogkonfirmasiComponent>,
  @Inject(MAT_DIALOG_DATA) public Id: any
  ){}

  ngOnInit(): void {}
   konfirmasi() {
    	this.dialogRef.close(true);
}
}
