import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {


  addOffreForm !: FormGroup
  user: any = {}
  test = true
  offre: any = {}
  id: any
  title: string = "ADD offre"
  destinations: any = [];
  idDestination: any

  constructor(private offreService: OffreService, private destService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.addOffreForm=this.fb.group({
       nom:['',[Validators.required]],
       destination:['',[Validators.required]],
       prix:['',[Validators.required]],
       duree:[''],
       description :[''],
       dateDeb :[''],
     }); 

    this.destService.getAllDestinationes().subscribe(
      (response) => {
        this.destinations = response;
          this.idDestination = this.destinations[0].id;
      }
    );
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title = "Edit offre"
      this.getoffreById();
    }
  }

 

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.offre.image = file;
  }

  add() {
    const formData = new FormData();
    formData.append('nom', this.offre.name);
    formData.append('prix', this.offre.prix);
    formData.append('duree', this.offre.duree);
    formData.append('descr', this.offre.description);
    formData.append('date', this.offre.dateDeb);
 
    if (this.offre.image) {
      formData.append('img', this.offre.image, this.offre.image.name);
    }

    if (this.id) {
      // Edit destination
      formData.append('id', this.id);
      this.offreService.updateoffre(formData,this.idDestination).subscribe(
        (response) => {
          console.log("here response updated from BE", response);
        }
      );
    } else {
      console.log("here result destination", this.offre)
      console.log("here result image", this.offre.image)

      // Add destination
      this.offreService.addoffre(formData,this.idDestination).subscribe(
        (response) => {
           console.log("here response from BE", response);
        }
      );
    }
     this.router.navigate(["/list-offres"]);
  }


  getoffreById(){
    this.offreService.getoffreById(this.id).subscribe(
      (response)=>{console.log("here offre by id",response);
    this.offre=response
    }
    )
  }


  selectDestination(evt: any){
    console.log("here event ID", evt.target.value);
      this.idDestination = evt.target.value;
  }

}







