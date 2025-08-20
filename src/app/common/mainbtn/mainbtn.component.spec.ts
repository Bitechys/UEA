import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbtnComponent } from './mainbtn.component';

describe('MainbtnComponent', () => {
  let component: MainbtnComponent;
  let fixture: ComponentFixture<MainbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
