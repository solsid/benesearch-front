import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState, AppState } from '../../store';
import { bossesSelector } from '../../store/filter/filter.selectors';
import { Observable, Subscription } from 'rxjs/Rx';
import { FilterActions } from '../../store/filter/filter.actions';
import { BossChoices } from './boss-choices';
import { ChoiceElement } from '../../components/choice-inline/choice-element';

@Component({
  selector: 'filter',
  templateUrl: './filter.html'
})
export class FilterContainer implements OnInit, OnDestroy {

  public bossChoicesArray: ChoiceElement[];
  public bossLabel: string;

  @select(['filterState', 'boss', 'label']) public bossLabelObservable: Observable<string>;
  @select(bossesSelector) public bossChoicesObservable: Observable<BossChoices>;
  private bossChoicesSubscription: Subscription;

  constructor(private filterActions: FilterActions) {
  }

  ngOnInit() {
    this.bossChoicesSubscription = this.bossChoicesObservable.subscribe(
      (bossChoices) => {
        console.log('hello');
      this.bossChoicesArray = Object.keys(bossChoices).filter(key => bossChoices[key].label).map(key => bossChoices[key]);
      this.bossLabel = bossChoices.label;
    });
  }

  ngOnDestroy() {
    this.bossChoicesSubscription.unsubscribe();
  }

  public changeBossFilter = (choice: ChoiceElement) => {
    this.filterActions.changeBossFilter(choice);
  }
}
