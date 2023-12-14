import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent implements OnInit {

  addDestinationForm !: FormGroup;
  user: any = {};
  test = true;
  destination: any = {};
  id: any;
  title: string = "ADD destination";
  destinations: any = [];
  idDestination: any;
  //image: File | undefined;  // Nouvelle propriété pour stocker l'image

  constructor(
    private destinationService: DestinationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addDestinationForm = this.fb.group({
      name: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      // ... autres champs du formulaire
    });

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit destination";
      this.getdestinationById();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.destination.image = file;
  }

  add() {
    const formData = new FormData();
    formData.append('nom', this.destination.name);
    formData.append('pays', this.destination.pays);
    console.log("here result name", this.destination.name)
    console.log("here result pays", this.destination.pays)

    // ... autres champs du formulaire

    if (this.destination.image) {
      console.log("here result file image", this.destination.image)
      console.log("here result nom image",this.destination.image.name )

      formData.append('img', this.destination.image, this.destination.image.name);
    }

    if (this.id) {
      // Edit destination
      formData.append('id', this.id);
      this.destinationService.updateDestination(formData).subscribe(
        (response) => {
          console.log("here response updated from BE", response);
        }
      );
    } else {
      console.log("here result destination", this.destination)
      console.log("here result image", this.destination.image)

      // Add destination
      this.destinationService.addDestination(formData).subscribe(
        (response) => {
           console.log("here response from BE", response);
        }
      );
    }

     this.router.navigate(["/list-destination"]);
  }

  // Modifiez votre méthode add() dans AddDestinationComponent
  
  
  getdestinationById() {
    this.destinationService.getDestinationById(this.id).subscribe(
      (response) => {
        console.log("here destination by id", response);
        this.destination = response;
      }
    );
  }
}
