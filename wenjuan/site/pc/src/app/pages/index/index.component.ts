import {Component, OnInit} from '@angular/core';
import {QuestService} from "../../core/quest.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    currentQuest = null;

    constructor(private router: Router,
                private  questSv: QuestService) {
    }

    ngOnInit() {
    }


    goToDetail() {
        this.router.navigate(['/pages/quest-detail',  this.questSv.current.quest_id],)
    }
}
