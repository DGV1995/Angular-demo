import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsContainerComponent } from './animals-container.component';

describe('AnimalsContainerComponent', () => {
  let component: AnimalsContainerComponent;
  let fixture: ComponentFixture<AnimalsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
