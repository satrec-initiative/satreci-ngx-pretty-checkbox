import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SiNgxPrettyCheckboxModule } from './si-ngx-pretty-checkbox/si-ngx-pretty-checkbox.module';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SiRadioComponent } from './si-ngx-pretty-checkbox/si-radio/si-radio.component';
import { SiCheckboxComponent } from './si-ngx-pretty-checkbox/si-checkbox/si-checkbox.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let radioComponents: SiRadioComponent[];
  let radioElements: any[];
  let checkboxElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        SiNgxPrettyCheckboxModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    const elements = fixture.debugElement.queryAll(By.directive(SiRadioComponent));
    radioComponents = [];
    radioElements = [];
    elements.forEach(e => {
      radioComponents.push(e.componentInstance);
      radioElements.push(e.query(By.css(`input[type='radio']`)).nativeElement);
    });
    const checkbox = fixture.debugElement.query(By.directive(SiCheckboxComponent));
    checkboxElement = checkbox.query(By.css(`[type='checkbox']`)).nativeElement;

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  const radioClicker = (i: number) => {
    radioElements[i].click();
    fixture.detectChanges();
    expect(component.radioValue).toEqual(radioComponents[i].value);
  };

  it('radio test', () => {
    expect(component.radioValue).toEqual(radioComponents[0].value);

    for (let i = 1; i < radioComponents.length; ++i) {
      radioClicker(i);
    }
  });

  it('checkbox test', () => {
    expect(component.checkboxState).toBeFalsy();

    checkboxElement.click();
    fixture.detectChanges();
    expect(component.checkboxState).toBeTruthy();

    checkboxElement.click();
    fixture.detectChanges();
    expect(component.checkboxState).toBeFalsy();
  });
});
