import { Component, OnInit } from '@angular/core';
import { faBell, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faBell=faBell;
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }





}
