import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCoreMechanicsComponent } from './rules-core-mechanics.component';

describe('RulesCoreMechanicsComponent', () => {
  let component: RulesCoreMechanicsComponent;
  let fixture: ComponentFixture<RulesCoreMechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesCoreMechanicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCoreMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
