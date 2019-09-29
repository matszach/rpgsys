import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCharacterCreationComponent } from './rules-character-creation.component';

describe('RulesCharacterCreationComponent', () => {
  let component: RulesCharacterCreationComponent;
  let fixture: ComponentFixture<RulesCharacterCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesCharacterCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCharacterCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
