import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamestoreHomeComponent } from './gamestore-home.component';

describe('GamestoreHomeComponent', () => {
  let component: GamestoreHomeComponent;
  let fixture: ComponentFixture<GamestoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamestoreHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamestoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
