import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {

  offres:any=[]
  id:any 

  constructor(private offreService:OffreService , private router:Router) {}

  ngOnInit(): void {

    this.getAlloffres()
  }

  

  deleteOffre(id:any){
    this.offreService.deleteoffre(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAlloffres()
         }
    )

    /* for (let i = 0; i< this.matches.length; i++) {
      if (this.matches[i].id===id) {
        this.matches.splice(i,1)
      }
    } */
  }

  navigate(id:any){
    this.router.navigate(["/add-offre/"+id])
  }

  getAlloffres(){
    this.offreService.getAlloffres().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.offres=response}
    );
  }

}
