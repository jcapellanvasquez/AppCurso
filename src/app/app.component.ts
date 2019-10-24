import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Blog de la nasa';
    nombre: string = "";
    public getTituloPrefijo(): string {
        return `Hola ${this.title} app de ejemplo`;
    }

}
