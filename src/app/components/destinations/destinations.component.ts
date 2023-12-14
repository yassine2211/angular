import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations:any=[]
  id:any 
  term:any

  constructor(private destinationService:DestinationService , private router:Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    this.getAlldestinations()
  }

  

  deletedestination(id:any){
    this.destinationService.deleteDestination(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAlldestinations()
         }
    )

    
  }

  getSafeImage(image: string | null): SafeUrl | null {
    if (image) {
      const imageUrl = 'data:image/png;base64,' + image;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
    return null;
  }

  navigate(id:any){
    this.router.navigate(["/reserver-destination/"+id])
  }

  getAlldestinations(){
    this.destinationService.getAllDestinationes().subscribe(
      (destinations)=>{
        console.log("here response  from BE ",destinations);
         this.destinations=destinations}
    );
  }


  chercher(nom:any){
    nom.toLowerCase();0
    this.destinationService.getDestinationByName(nom).subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.destinations=response}
    );
  }

}
