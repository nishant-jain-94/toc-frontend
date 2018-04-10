import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';
import { TocService } from '../toc-service';
import { omit } from 'lodash';

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
  pseudoNode: any;
  childGenerator: any;
  nextIndex: number;

  constructor(private tocService: TocService) {
    this.nextIndex = 0;
  }

  ngOnInit() {
    this.tocService.loadPath(this.id, this.path).subscribe((node) => {
      this.node = node;
      this.node.children = this.node.children ? this.node.children : [];      
      this.childGenerator = this.generateChildren();
      this.pseudoNode = omit(node, 'children');
      this.pseudoNode.childrenLength = this.node.children.length;
    });
  }

  *generateChildren() {
    while (this.nextIndex < this.node.children.length) {
      yield this.node.children.splice(this.nextIndex, 1);
      this.nextIndex++;
    }
  }

  getNextMaxNChildren(max: number) {
    const n = (this.nextIndex + max < this.node.children.length) ? max : 
      this.node.children.length - this.nextIndex - 2;
    return Array(n).fill(0).reduce((accumulator, currentValue) => {
      return accumulator.concat(this.childGenerator.next().value);
    }, []);
  }

  onOpened() {
    this.pseudoNode.children = this.getNextMaxNChildren(5);
  }
  
  onClosed() {
    this.pseudoNode.children = undefined;
    this.nextIndex = 0;
    this.childGenerator = this.generateChildren();
  }

  onMore() {
    Array.prototype.push.apply(this.pseudoNode.children, this.getNextMaxNChildren(5));
  }
}
