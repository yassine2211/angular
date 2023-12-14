import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-list-vols',
  templateUrl: './list-vols.component.html',
  styleUrls: ['./list-vols.component.css']
})
export class ListVolsComponent implements OnInit {

  vols:any=[]
  id:any 

  constructor(private volService:VolService , private router:Router) {}

  ngOnInit(): void {

    this.getAllvols()
  }

  

  deletevol(id:any){
    this.volService.deletevol(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAllvols()
         }
    )

    /* for (let i = 0; i< this.matches.length; i++) {
      if (this.matches[i].id===id) {
        this.matches.splice(i,1)
      }
    } */
  }

  navigate(id:any){
    this.router.navigate(["/add-vol/"+id])
  }

  getAllvols(){
    this.volService.getAllvols().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.vols=response}
    );
  }

}
