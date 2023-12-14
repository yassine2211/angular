import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  offres:any=[]
  id:any 
  term:any

  name: any;



  constructor(private offreService:OffreService , private router:Router,  private activatedRoute: ActivatedRoute,  private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    if (this.name) {
      this.getoffreByName();
    }else{
      this.getAlloffres();
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


  getoffreByName() {
    this.offreService.getoffreByName(this.name).subscribe(
      (response) => {
        console.log("here destination by id", response);
        this.offres = response;
      }
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

  chercher(nom:any){
    this.offreService.getoffreByName(nom).subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.offres=response}
    );
  }

}
