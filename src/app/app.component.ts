import { Component } from '@angular/core';
let styles   = require('../styles.css');

@Component({
  selector: 'app-root',
  template: `<section>Section Part<br/>
            <button id="login" class="btn btn-primary">Button</button><br/>
           Input: <input type="textbox" class="">
            </section>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
