# satreci-ngx-pretty-checkbox

satreci-ngx-pretty-checkbox 은 [pretty-checkbox](https://lokesh-coder.github.io/pretty-checkbox/) 의 스타일을 적용한 체크박스/라디오 컨트롤을 Angular 컴포넌트로 제공합니다.

## Installation

```bash
npm install satreci-ngx-pretty-checkbox --save
```

## Usage

Angular 모듈 파일 (app.module.ts)

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiNgxPrettyCheckboxModule } from 'satreci-ngx-pretty-checkbox';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [AppComponent],
    imports: [SiNgxPrettyCheckboxModule, BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

컴포넌트 내 사용 예시 (app.component.ts)

```javascript
import { Component } from '@angular/core';
@Component({
    selector: 'app',
    template: `
        <!-- checkbox -->
        <si-checkbox [(ngModel)]="checkboxState" name="c-success" checkboxClass="p-success">Success</si-checkbox>
        <si-checkbox [(ngModel)]="checkboxState" name="c-success" checkboxClass="p-success">Success</si-checkbox>
        <!-- radio -->
        <si-radio [(ngModel)]="radioValue" name="si-radio" value="primary" radioClass="p-primary-o">Primary</si-radio>
        <si-radio [(ngModel)]="radioValue" name="si-radio" value="success" radioClass="p-success-o">Success</si-radio>
    `
})
export class AppComponent {
    checkboxState: boolean = false;
    radioValue: string = 'primary';
}
```

## Examples

[Codesandbox](https://codesandbox.io/s/github/satrec-initiative/satreci-ngx-pretty-checkbox)

## License

[MIT](https://choosealicense.com/licenses/mit/)

