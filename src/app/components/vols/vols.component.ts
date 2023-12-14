import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {

  vols:any=[]
  id:any 
  term:any


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

  }

  navigate(id:any){
    this.router.navigate(["/reserver-vol/"+id])
  }

  getAllvols(){
    this.volService.getAllvols().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.vols=response}
    );
  }

  chercher(nom:any){
    this.volService.getvolByName(nom).subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.vols=response}
    );
  }

}
