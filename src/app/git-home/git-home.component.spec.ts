import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHomeComponent } from './git-home.component';

describe('GitHomeComponent', () => {
  let component: GitHomeComponent;
  let fixture: ComponentFixture<GitHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
