import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowChannelComponent } from './follow-channel.component';

describe('FollowChannelComponent', () => {
  let component: FollowChannelComponent;
  let fixture: ComponentFixture<FollowChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
