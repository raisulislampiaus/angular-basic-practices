import { Component, OnInit } from '@angular/core';
import { faRemove, faAdd, faSortAlphaDown,  faMinus, faParachuteBox, faToolbox, faBoxesStacked, faBoxArchive, faUnderline, faDeleteLeft,faBackward, faCoffee, faSearch, faBackwardStep, faChevronLeft, faRefresh, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  faRemove = faRemove;
  faAdd = faAdd;
  faSortAlphaDown =faSortAlphaDown;

  faMinus = faMinus;
  faParachuteBox=faParachuteBox;
  faToolbox =faToolbox;
  faBoxesStacked =faBoxesStacked ;
  faBoxArchive =faBoxArchive;
  faUnderline = faUnderline;
  faDeleteLeft = faDeleteLeft;
  faBackward=faBackward;
  faCoffee = faCoffee;
  faSearch=faSearch;
  faBackwardStep=faBackwardStep;
  faChevronLeft=faChevronLeft;
  faRefresh=faRefresh;
  faFilter=faFilter


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
