import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';
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

  constructor(private tocService: TocService) { }

  ngOnInit() {
    this.tocService.loadPath(this.id, this.path).subscribe((node) => {
      this.node = node;
    });
  }
}
