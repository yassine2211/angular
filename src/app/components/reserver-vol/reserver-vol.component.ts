import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VolReservationService } from 'src/app/services/vol-reservation.service';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-reserver-vol',
  templateUrl: './reserver-vol.component.html',
  styleUrls: ['./reserver-vol.component.css']
})
export class ReserverVolComponent implements OnInit {

  addVolReservationForm !: FormGroup
  VolRes: any = {}
  Vol: any = {}
  id: any
  title: string = "ADD Vol Reservation"
  destinations: any = [];
  idDestination: any

  constructor(private VolResService: VolReservationService, private VolService: VolService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addVolReservationForm = this.fb.group({
      nbPersonne: [''],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.getVolById();
    }
  }

  add() {
    if (this.id) {
      //AddVol
      this.VolResService.addvolReservation(this.VolRes, this.id).subscribe(
        (response: any) => { console.log("here response from BE", response) }
      );
      alert("reservation effectue avec succes");

      setTimeout(() => {
        this.router.navigate(["/list-Vols"]);
      }, 3000);

    }

  }


  getVolById() {
    this.VolService.getvolById(this.id).subscribe(
      (response) => {
        console.log("here Vol by id", response);
        this.Vol = response
      }

    )
  }


}
