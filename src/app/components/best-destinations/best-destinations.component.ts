import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-best-destinations',
  templateUrl: './best-destinations.component.html',
  styleUrls: ['./best-destinations.component.css']
})
export class BestDestinationsComponent implements OnInit {

  destinations:any=[]
  bestdestinations:any=[]
  id:any 
  term:any


  constructor(private destinationService:DestinationService , private router:Router,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getAlldestinations();
  }

  getbestdestinations(){
    this.getAlldestinations();
    for (let i = 0; i< 3; i++) {
      this.bestdestinations[i]=this.destinations[i]
  }
  }



  getSafeImage(image: string | null): SafeUrl | null {
    if (image) {
      // Si vous avez une chaîne base64, créez une URL sécurisée
      const imageUrl = 'data:image/png;base64,' + image;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
    return null;
  }

  deletedestination(id:any){
    this.destinationService.deleteDestination(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAlldestinations()
         }
    )

    
  }

  navigate(id:any){
    this.router.navigate(["/reserver-destination/"+id])
  }

  getAlldestinations(){
    this.destinationService.getAllDestinationes().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.destinations=response}
    );
  }

}
