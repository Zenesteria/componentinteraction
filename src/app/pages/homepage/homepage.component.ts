import { Component } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { CustombuttonComponent } from "../../custombutton/custombutton.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgxSemanticModule, CustombuttonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
