import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityGeneratorComponent } from './ability-generator.component';

describe('AbilityGeneratorComponent', () => {
  let component: AbilityGeneratorComponent;
  let fixture: ComponentFixture<AbilityGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
