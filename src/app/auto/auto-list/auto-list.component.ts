import { Component, OnInit } from '@angular/core';
import { Auto } from './auto.model';
import { AutoService } from './auto.service';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  Autos: Array<Auto> = [];
  totalRenault=0
  totalChevrolett=0
  totalNissan=0
    constructor(private autoService: AutoService) { }
   
    getAuts(): void {
      this.autoService.getAutos().subscribe((results) => {
        if(results){
        this.totalRenault = results.filter(x => { return x.marca === "Renault" }).length;
        this.totalChevrolett = results.filter(x => { return x.marca === "Chevrolet" }).length;
        this.totalNissan = results.filter(x => { return x.marca === "Nissan" }).length;
        this.Autos = results;
        }
      });
    }
   
    ngOnInit() {
    this.getAuts();
    }

}

