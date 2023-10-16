import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncomponentComponent } from './btncomponent.component';

describe('BtncomponentComponent', () => {
  let component: BtncomponentComponent;
  let fixture: ComponentFixture<BtncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtncomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
