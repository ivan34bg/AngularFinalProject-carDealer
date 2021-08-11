import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDetailsViewComponent } from './ad-details-view.component';

describe('AdDetailsViewComponent', () => {
  let component: AdDetailsViewComponent;
  let fixture: ComponentFixture<AdDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
