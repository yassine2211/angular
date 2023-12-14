import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent implements OnInit {

  destinations:any=[]
  id:any 

  constructor(private destinationService:DestinationService , private router:Router) {}

  ngOnInit(): void {

    this.getAllDestinations()
  }

  

  deleteDestination(id:any){
    this.destinationService.deleteDestination(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
         this.getAllDestinations();
         }
    )

    /* for (let i = 0; i< this.matches.length; i++) {
      if (this.matches[i].id===id) {
        this.matches.splice(i,1)
      }
    } */
  }

  navigate(id:any){
    this.router.navigate(["/add-destination/"+id])
  }

  getAllDestinations(){
    this.destinationService.getAllDestinationes().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.destinations=response}
    );
  }
 

}
