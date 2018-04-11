import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from '@angular/material/expansion';
import { TocService } from '../toc-service';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html'
})
export class ExpansionPanelComponent implements OnInit {
  @Input()
  id: string;
  
  @Input()
  path: string;
  
  node: any;
  items: Array<string>;

  constructor(private tocService: TocService) {
    this.items = [];
  }

  ngOnInit() {
    this.tocService.loadPath(this.id, this.path).subscribe((node: any) => {
      this.node = node;
    });
  }
}
