import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {

  addVolForm !: FormGroup
  user: any = {}

  test=true

  vol: any = {}
  id:any
  title:string="ADD vol"
  destinations: any=[];
  idDestination :any

  constructor(private volService:VolService , private activatedRoute:ActivatedRoute ,private router:Router , private fb:FormBuilder) { }


  ngOnInit(): void {
    this.addVolForm=this.fb.group({
      depart:['',[Validators.required]],
      arrivee:['',[Validators.required]],
      prix:['',[Validators.required]],
      dateDep:[''],
      classe:['']
    });

    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id){
      this.title="Edit vol"
      this.getvolById();
  }
  
}

add(){

  if (this.id){
    //Edit vol
    this.volService.updatevol(this.vol).subscribe(
      (response:any)=>{console.log("here response updated from BE",response); }
    );
  }else{
    //Addvol
    //this.vol.DESTINATION_ID=this.idDestination;
    this.volService.addvol(this.vol).subscribe(
      (response:any)=>{console.log("here response from BE",response)}
    );
  }
  this.router.navigate(["/list-vols"])
  
}


getvolById(){
  this.volService.getvolById(this.id).subscribe(
    (response)=>{console.log("here vol by id",response);
  this.vol=response
  }

  )
}


}
