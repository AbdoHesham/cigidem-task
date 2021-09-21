import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeAndDislikeComponent } from './like-and-dislike.component';

describe('LikeAndDislikeComponent', () => {
  let component: LikeAndDislikeComponent;
  let fixture: ComponentFixture<LikeAndDislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeAndDislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeAndDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
