import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'si-radio',
  templateUrl: './si-radio.component.html',
  styleUrls: ['./si-radio.component.css', '../dark.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SiRadioComponent),
    multi: true
  }]
})
export class SiRadioComponent implements OnInit, ControlValueAccessor {
  @Input() name = '';
  @Input() value = '';
  @Input() radioClass = 'primary';
  @Input() dark = false;

  private _modelValue = '';
  // get accessor
  get modelValue(): string {
    return this._modelValue;
  }

  // set accessor including call the onchange callback
  set modelValue(v: string) {
    if (v !== this._modelValue) {
      this._modelValue = v;
      this.onChange(v);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * Invoked when the model has been changed
   */
  onChange: (_: any) => void = (_: any) => { };

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => { };


  /* ControlValueAccessor Overrides */
  /**
     * Writes a new item to the element.
     * @param value the value
     */
  writeValue(value: string): void {
    this.modelValue = value;
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
