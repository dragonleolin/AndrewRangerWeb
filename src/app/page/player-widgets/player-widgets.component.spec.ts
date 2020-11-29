import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWidgetsComponent } from './player-widgets.component';

describe('PlayerWidgetsComponent', () => {
  let component: PlayerWidgetsComponent;
  let fixture: ComponentFixture<PlayerWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
