import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'First Project';

  constructor() { }

  ngOnInit() {

  }


}
