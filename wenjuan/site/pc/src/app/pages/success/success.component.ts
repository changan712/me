import {Component, OnInit} from '@angular/core';
import {QuestService} from "../../core/quest.service";

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
    config: any;
    questCurrent: any;

    constructor(private questSv: QuestService,) {


    }

    ngOnInit() {
        this.questCurrent = this.questSv.current;

    }

}
