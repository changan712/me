import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable, Observer} from "rxjs";

/**
 * Generated class for the CountdownComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */


export  interface CountdownData {
    total: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

@Component({
    selector: 'app-countdown',
    templateUrl: 'countdown.html',
    styleUrls:['./countdown.scss']
})
export class CountdownComponent implements OnInit {

    warningFlag: boolean = false;
    completeFlag: boolean = false;

    data: CountdownData = null;

    deviceTime: number = Date.now();

    @Input() completedText: string = '已超时';
    @Input() endTime: number;
    @Input() serverTime: number;
    @Input() warningTime: number = 5 * 60 * 1000;


    @Output() change: EventEmitter<CountdownData> = new EventEmitter();
    @Output() complete: EventEmitter<CountdownData> = new EventEmitter();
    @Output() warning: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        this.getServerTime().subscribe((res: CountdownData) => {
            this.change.emit(res);
            this.data = res;
            if (res.total <= this.warningTime && res.total > 0 && !this.warningFlag) {
                this.warning.emit(res);
                this.warningFlag = true;

            }
        }, () => {

        }, () => {
            this.completeFlag = true;
            this.complete.emit();
        })
    }


    getRemainTime(): CountdownData {
        let t = this.endTime - Date.now() + (this.deviceTime - this.serverTime);
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        }
    }

    getServerTime(): Observable<CountdownData> {

        return Observable.create((ob: Observer<CountdownData>) => {
            let intervalTimer = setInterval(() => {

                // 得到剩余时间
                let remainTime = this.getRemainTime();
                ob.next(remainTime);

                if (remainTime.total <= 0) {
                    clearInterval(intervalTimer);
                    ob.complete();
                }
            }, 1000)
        })


    }

}
