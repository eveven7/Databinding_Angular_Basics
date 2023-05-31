import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockipitComponent } from './cockipit.component';

describe('CockipitComponent', () => {
  let component: CockipitComponent;
  let fixture: ComponentFixture<CockipitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockipitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockipitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
