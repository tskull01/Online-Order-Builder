import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerBuilderComponent } from './burger-builder.component';

describe('BurgerBuilderComponent', () => {
  let component: BurgerBuilderComponent;
  let fixture: ComponentFixture<BurgerBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
