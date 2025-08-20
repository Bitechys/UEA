import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbtntwoComponent } from './mainbtntwo.component';

describe('MainbtntwoComponent', () => {
  let component: MainbtntwoComponent;
  let fixture: ComponentFixture<MainbtntwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainbtntwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainbtntwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
