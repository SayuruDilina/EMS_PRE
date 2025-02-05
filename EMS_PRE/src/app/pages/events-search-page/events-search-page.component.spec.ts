import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchPageComponent } from './events-search-page.component';

describe('EventsSearchPageComponent', () => {
  let component: EventsSearchPageComponent;
  let fixture: ComponentFixture<EventsSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
