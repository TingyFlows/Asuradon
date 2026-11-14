import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeVerfication } from './age-verfication';

describe('AgeVerfication', () => {
  let component: AgeVerfication;
  let fixture: ComponentFixture<AgeVerfication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeVerfication],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeVerfication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
