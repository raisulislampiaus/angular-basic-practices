import { Component, OnInit } from '@angular/core';
import { faBackward, faCoffee, faSearch, faBackwardStep, faChevronLeft, faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  faBackward=faBackward;
  faCoffee = faCoffee;
  faSearch=faSearch;
  faBackwardStep=faBackwardStep;
  faChevronLeft=faChevronLeft;
  faRefresh=faRefresh;


  constructor() { }

  ngOnInit(): void {
  }

}
