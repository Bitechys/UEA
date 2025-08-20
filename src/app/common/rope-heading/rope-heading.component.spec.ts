import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeHeadingComponent } from './rope-heading.component';

describe('RopeHeadingComponent', () => {
  let component: RopeHeadingComponent;
  let fixture: ComponentFixture<RopeHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopeHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
