import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesResourcesComponent } from './rules-resources.component';

describe('RulesResourcesComponent', () => {
  let component: RulesResourcesComponent;
  let fixture: ComponentFixture<RulesResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
