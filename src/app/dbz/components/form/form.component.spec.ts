import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBZFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: DBZFormComponent;
  let fixture: ComponentFixture<DBZFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBZFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBZFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
