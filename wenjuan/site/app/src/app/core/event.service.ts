
import {Subject, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class EventsService {

    eventsSubject: Subject<any> = new Subject();
    listeners = {};
    events = Observable.from(this.eventsSubject);

    constructor() {
        this.events.subscribe(
            ({name, args}) => {
                if (this.listeners[name]) {
                    for (let listener of this.listeners[name]) {
                        listener(...args);
                    }
                }
            });
    }

    on(name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
    }

    broadcast(name, ...args) {
        this.eventsSubject.next({
            name,
            args
        });
    }
}