import { Component, OnInit } from '@angular/core';
import {  faCalendar, faMap, faLocation,faBook,faRemove, faAdd, faSortAlphaDown,  faMinus, faParachuteBox, faToolbox, faBoxesStacked, faBoxArchive, faUnderline, faDeleteLeft,faBackward, faCoffee, faSearch, faBackwardStep, faChevronLeft, faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  faBackward=faBackward;
  faCoffee = faCoffee;
  faSearch=faSearch;
  faBackwardStep=faBackwardStep;
  faChevronLeft=faChevronLeft;
  faRefresh=faRefresh;
  faCalendar=faCalendar;
  faMap= faMap;
  faLocation=faLocation;
  faBook=faBook;
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
  faTrash = faTrash


  constructor() { }

  ngOnInit(): void {
  }

}
