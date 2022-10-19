import { Component, OnInit } from '@angular/core';
import { faBackward, faCoffee, faSearch, faBackwardStep, faChevronLeft, faRefresh, faCalendar, faBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-attendancelog',
  templateUrl: './attendancelog.component.html',
  styleUrls: ['./attendancelog.component.css']
})
export class AttendancelogComponent implements OnInit {
  faBackward=faBackward;
  faCoffee = faCoffee;
  faSearch=faSearch;
  faBackwardStep=faBackwardStep;
  faChevronLeft=faChevronLeft;
  faRefresh=faRefresh;
  faCalendar=faCalendar;
  faBook=faBook

  constructor() { }

  ngOnInit(): void {
  }


  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
