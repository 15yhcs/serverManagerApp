import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscribable } from 'rxjs';
@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrl: './error-not-found.component.css'
})
export class ErrorNotFoundComponent implements OnInit{
  errorMessage:string;
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data["message"];
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data.message
    })
  }
}
