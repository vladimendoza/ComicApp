import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailheroeComponent } from './detailheroe.component';

describe('DetailheroeComponent', () => {
  let component: DetailheroeComponent;
  let fixture: ComponentFixture<DetailheroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailheroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
