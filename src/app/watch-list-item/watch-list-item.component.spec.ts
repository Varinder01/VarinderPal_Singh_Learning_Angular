import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListItemComponent } from './watch-list-item.component';

describe('WatchListItemComponent', () => {
  let component: WatchListItemComponent;
  let fixture: ComponentFixture<WatchListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
