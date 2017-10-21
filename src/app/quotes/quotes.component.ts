import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() {
    this.filteredQuotes = this.quotes;
    this.listFilter = '';
  }

  ngOnInit() {
  }
  _listFilter: string = '';
  filteredQuotes: string[];
  quotes: string[] = [
    'Benji 2017 | "Ich nehme die ganze Zeit Stifte und Flaschen auseinander!',
    'Andrin, Dienstag Nachmittag 2017 | "Wenn man nach Viren sucht, findet man keine!"',
    'Tobias 2017 | "Jonas, wann hörst du damit endlich auf?"', 'Florian 2016 | "Du bist wie ein Upgrade, nice to have aber nicht nötig."',
    'Mathias 2016 | "Du bist anders Benji."',
    'Jonas, Dienstag Nachmittag 2017 | "Spongebob ist wie das echte Leben."',
    'Benji 2017 | „Immer wenn ich mit Bällen spiele landen sie in meinem Gesicht"',
    'Laurent 2017 | "Du wirst nie Aufkleber, Jonas!"',
    'Benji 2017 | "Ich setze morgen einen Cookie in deinem Browser"'
  ]

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredQuotes = this.listFilter ? this.performFilter(this.listFilter) : this.quotes;
  }

  performFilter(filterBy: string): string[] {
    filterBy = filterBy.toLowerCase();
    return this.quotes.filter((quote: string) =>
      quote.toLowerCase().indexOf(filterBy) !== -1)

  }
}
