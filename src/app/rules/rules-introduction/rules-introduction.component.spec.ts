import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesIntroductionComponent } from './rules-introduction.component';

describe('RulesIntroductionComponent', () => {
  let component: RulesIntroductionComponent;
  let fixture: ComponentFixture<RulesIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
