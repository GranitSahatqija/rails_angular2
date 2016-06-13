import {Component} from "angular2/core";
import {DataService} from "../services/data.service";

@Component({
    selector: 'component-1',
    template: `<div>
                    <button (click)="onTestGet()">Test Get Request</button><br>
                    <p>Output {{getData}}</p><br>
                    <button (click)="onTestPost()">Test Post Data</button><br>
                    <p>OutPut: {{postData}}</p>
               </div>`,
    providers: [DataService]
})

export class Component1Component {

        getData: string;
        postData: string;
        constructor(private _dataService: DataService) {}

        onTestGet() {
            this._dataService.getCurrentTime()
                .subscribe(
                    data => this.getData = JSON.stringify(data),
                    error => alert('error'),
                    () => console.log('finished')
                );
        }

        onTestPost() {
            this._dataService.postJSON()
                .subscribe(
                    data => this.postData = JSON.stringify(data),
                    error => alert('error'),
                    () => console.log('finished')
                );
        }
}