import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: boolean;
  @Input() isRelative?: boolean;

  constructor(public loaderService: LoaderService) {

  }

  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe((s: boolean) => {
      this.isLoading = s;
    })

  }

}