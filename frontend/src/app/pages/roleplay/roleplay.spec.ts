import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Roleplay } from './roleplay';

describe('Roleplay', () => {
  let component: Roleplay;
  let fixture: ComponentFixture<Roleplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roleplay],
    }).compileComponents();

    fixture = TestBed.createComponent(Roleplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
