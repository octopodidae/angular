import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonadmisComponent } from './nonadmis.component';

describe('NonadmisComponent', () => {
  let component: NonadmisComponent;
  let fixture: ComponentFixture<NonadmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonadmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonadmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
