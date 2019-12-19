import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router,  private route: ActivatedRoute) {}

  changePage(val: boolean) {
    const currentPageNumber: number = +(this.route.snapshot.firstChild.url[1].path);
    let newPageNumber: number;

    if (val && currentPageNumber < 17) {
      newPageNumber = currentPageNumber + 1;
    }

    if (!val && currentPageNumber > 0) {
      newPageNumber = currentPageNumber - 1;
    }

    if (newPageNumber !== undefined) {
      this.router.navigate([`/page/${newPageNumber}`]);
    }
  }
}
