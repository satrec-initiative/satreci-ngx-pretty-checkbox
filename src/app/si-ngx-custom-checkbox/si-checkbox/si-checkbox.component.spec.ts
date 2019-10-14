import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiCheckboxComponent } from './si-checkbox.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SiCheckboxComponent', () => {
  let component: SiCheckboxComponent;
  let fixture: ComponentFixture<SiCheckboxComponent>;
  let checkboxInput: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiCheckboxComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiCheckboxComponent);
    component = fixture.componentInstance;
    checkboxInput = fixture.debugElement.query(By.css(`[type='checkbox']`)).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkbox test', () => {
    expect(checkboxInput.checked).toBeFalsy();

    checkboxInput.click();
    fixture.detectChanges();

    expect(checkboxInput.checked).toBeTruthy();
  });
});
