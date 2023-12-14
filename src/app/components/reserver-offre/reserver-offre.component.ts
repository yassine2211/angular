import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreReservationService } from 'src/app/services/offre-reservation.service';
import { OffreService } from 'src/app/services/offre.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reserver-offre',
  templateUrl: './reserver-offre.component.html',
  styleUrls: ['./reserver-offre.component.css']
})
export class ReserverOffreComponent implements OnInit {

  addOffreReservationForm !: FormGroup
  offreRes: any = {}
  offre: any = {}
  id:any
  title:string="ADD offre Reservation"
  destinations: any=[];
  idDestination :any

  constructor(private offreResService:OffreReservationService ,private offreService:OffreService, private activatedRoute:ActivatedRoute ,private router:Router , private fb:FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.addOffreReservationForm=this.fb.group({
      nbPersonne :[''],
    });

    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id){
      this.getoffreById();
  }
  }

  add(){
    if (this.id){
      //Addoffre
      //this.offre.DESTINATION_ID=this.idDestination;
      this.offreResService.addOffreReservation(this.offreRes,this.id).subscribe(
        (response:any)=>{console.log("here response from BE",response)}
      );
    }
    alert("reservation effectue avec succes");

  }

  
  getoffreById(){
    this.offreService.getoffreById(this.id).subscribe(
      (response)=>{console.log("here offre by id",response);
    this.offre=response
    }

    )
  }

  getSafeImage(image: string | null): SafeUrl | null {
    if (image) {
      // Si vous avez une chaîne base64, créez une URL sécurisée
      const imageUrl = 'data:image/png;base64,' + image;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
    return null;
  }

  

  

}
