import {Component} from '@angular/core';
import {TestService} from './test.service';

@Component({
    selector: 'app-test',
    template: `<h1>{{message}}</h1>`
})

export class TestComponent {
    message: any;
    constructor(private testService:TestService){
        this.message = this.testService.getData();
        this.displayData();
    }
    async displayData(){
        try {
            const data = await this.testService.getData();
        }
        catch(error){
            console.error('Error',error)
        }
    } 

}