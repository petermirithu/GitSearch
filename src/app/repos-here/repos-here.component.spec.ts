import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposHereComponent } from './repos-here.component';

describe('ReposHereComponent', () => {
  let component: ReposHereComponent;
  let fixture: ComponentFixture<ReposHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
