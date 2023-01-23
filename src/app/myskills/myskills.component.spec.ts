import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskillsComponent } from './myskills.component';

describe('MyskillsComponent', () => {
  let component: MyskillsComponent;
  let fixture: ComponentFixture<MyskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
