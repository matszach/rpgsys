import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesNpcComponent } from './rules-npc.component';

describe('RulesNpcComponent', () => {
  let component: RulesNpcComponent;
  let fixture: ComponentFixture<RulesNpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesNpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
