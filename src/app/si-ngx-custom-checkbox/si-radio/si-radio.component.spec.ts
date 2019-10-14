import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiRadioComponent } from './si-radio.component';
import { FormsModule } from '@angular/forms';

describe('SiRadioComponent', () => {
  let component: SiRadioComponent;
  let fixture: ComponentFixture<SiRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiRadioComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
