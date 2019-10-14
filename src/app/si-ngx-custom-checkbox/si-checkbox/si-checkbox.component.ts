import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'si-checkbox',
  templateUrl: './si-checkbox.component.html',
  styleUrls: ['./si-checkbox.component.css', '../dark.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SiCheckboxComponent),
    multi: true
  }]
})
export class SiCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() name = '';
  @Input() checkboxClass = 'primary';
  @Input() dark = false;

  private _value = false;
  // get accessor
  get value(): boolean {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(v: boolean) {
    this._value = v;
    this.onChange(v);
  }
  /**
   * Invoked when the model has been changed
   */
  onChange: (_: any) => void = (_: any) => { };

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => { };


  constructor() { }

  ngOnInit() {
  }

  /* ControlValueAccessor Overrides */
  /**
     * Writes a new item to the element.
     * @param value the state
     */
  writeValue(value: boolean): void {
    this.value = value;
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
