import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-best-offres',
  templateUrl: './best-offres.component.html',
  styleUrls: ['./best-offres.component.css']
})
export class BestOffresComponent implements OnInit {

  offres:any=[]
  bestOffres:any=[]
  id:any 
  term:any


  constructor(private offreService:OffreService , private router:Router,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getAlloffres();
  }

  getbestoffres(){
    this.getAlloffres();
    for (let i = 0; i< 3; i++) {
      this.bestOffres[i]=this.offres[i]
  }
  }

  deleteOffre(id:any){
    this.offreService.deleteoffre(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAlloffres()
         }
    )

  }

  navigate(id:any){
    this.router.navigate(["/reserver-offre/"+id])
  }

  getAlloffres(){
    this.offreService.getAlloffres().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.offres=response}
    );
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
