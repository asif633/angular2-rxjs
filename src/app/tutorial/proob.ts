import { Observable } from 'rxjs/Observable';
import { } from 'rxjs/Rx';

let promise = new Promise(
    resolve => {
        setTimeout(() => {
            resolve('promise timeout');
        }, 2000);
    }
);

promise.then(value => console.log(value));

let stream$ = new Observable(
    observer => {
        let timeout = setTimeout(() =>{
            observer.next('observable timeout');
        },2000);

        return () => {
            clearTimeout(timeout);
        }
    }
);

let disposable = stream$.subscribe(value => console.log(value));

setTimeout(() => {
    disposable.unsubscribe();
},1000);

let stream2$ = new Observable(
    observer => {
        let count =0;
        let interval = setInterval(() =>{
            observer.next(count++);
        },2000);

        return () => {
            clearInterval(interval);
        }
    }
);

stream2$
        .map( (value: number) => value*2)
        .filter( (value: number) => value % 2 ===0)
        .subscribe(value => console.log(value));

// Let we have two buttons inr and dcr

let incrbt = document.getElementById('incr');
let dcrbt = document.getElementById('dcr');

let incr$ = Observable.fromEvent(incrbt, 'click');
let dcr$ = Observable.fromEvent(dcrbt, 'click');

let click$ = Observable
                .merge(incr$,dcr$)
                .map((event:any) => parseInt(event.target.value,10));

let total$ = click$
                .scan((total, value) => total + value, 0);

total$.subscribe(total => console.log(total));
