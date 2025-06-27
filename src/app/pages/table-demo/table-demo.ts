import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SiteData } from '../../site-data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table-demo',
  imports: [MatFormFieldModule, MatFormFieldModule, MatInputModule, MatPaginator, MatSort, MatTableModule, MatCardModule, CommonModule ],
  templateUrl: './table-demo.html',
  styleUrl: './table-demo.css', 
  providers: [SiteData]
})
export class TableDemo {
  actorStats: any = {};
  displayedColumns: string[] = ['year','title','role','director','studio','notes'];
  dataSource!: MatTableDataSource<any>; // Replace 'any' with your data interface

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sds: SiteData) {}

  ngOnInit() {
    this.loadActorData();
  }

  async loadActorData() {
    const data = await this.sds.getActorData().then((data) => {
      this.actorStats.name = data.actor,
      this.actorStats.birthdate = data.birth_date,
      this.actorStats.birthplace = data.birth_place,
      this.actorStats.total_films = data.total_films,
      this.actorStats.total_box_office = data.box_office_gross,
      this.actorStats.career_span = data.career_span,
      this.actorStats.notable_awards = data.notable_awards;

      this.dataSource = new MatTableDataSource(data.filmography);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
