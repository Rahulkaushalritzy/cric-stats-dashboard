import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsmanRankingComponent } from './batsman-ranking.component';

describe('BatsmanRankingComponent', () => {
  let component: BatsmanRankingComponent;
  let fixture: ComponentFixture<BatsmanRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatsmanRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsmanRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
