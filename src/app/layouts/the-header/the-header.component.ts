import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string): any {
    this.featureSelected.emit(feature);
  }

}
