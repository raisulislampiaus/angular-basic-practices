import { Component, OnInit } from '@angular/core';
import { faBackward, faCoffee, faSearch, faBackwardStep, faChevronLeft, faRefresh, faCalendar, faMap, faLocation,faBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  faBackward=faBackward;
  faCoffee = faCoffee;
  faSearch=faSearch;
  faBackwardStep=faBackwardStep;
  faChevronLeft=faChevronLeft;
  faRefresh=faRefresh;
  faCalendar=faCalendar;
  faMap= faMap;
  faLocation=faLocation;
  faBook=faBook

  constructor() { }

  ngOnInit(): void {

  }

}
