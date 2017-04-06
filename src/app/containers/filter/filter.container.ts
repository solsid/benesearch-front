import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState, AppState } from '../../store';
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

  @select((state: AppState) => state.filterState.boss) public bossChoicesObservable: Observable<BossChoices>;
  private bossChoicesSubscription: Subscription;

  constructor(private filterActions: FilterActions) {
  }

  ngOnInit() {
    this.bossChoicesSubscription = this.bossChoicesObservable.subscribe((bossChoices) => {
      this.bossChoicesArray = Object.keys(bossChoices).map(key => bossChoices[key]);
    });
  }

  ngOnDestroy() {
    this.bossChoicesSubscription.unsubscribe();
  }

  public changeBossFilter = (choice: ChoiceElement) => {
    this.filterActions.changeBossFilter(choice);
  }
}
