import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkPageComponent } from './talk-page.component';

describe('TalkPageComponent', () => {
  let component: TalkPageComponent;
  let fixture: ComponentFixture<TalkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
