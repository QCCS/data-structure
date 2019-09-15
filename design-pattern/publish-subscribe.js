// Publisher 发布者
// Subject 被观察者
function Publisher() {
    this.subscribers = [];
    this.publish = function (message) {
        this.subscribers.forEach(function (subscriber) {
            subscriber.getMessage(message);
        });
    };
}

// Subscriber 订阅者
// Observer 观察者
function Subscriber() {
    this.subscribe = function (publish) {
        publish.subscribers.push(this);
    };
    this.getMessage = function (message) {
        console.log(message);
    };
}


let publisher = new Publisher();
let subscriber1 = new Subscriber();
let subscriber2 = new Subscriber();

subscriber1.subscribe(publisher);
subscriber2.subscribe(publisher);
publish.publish("message");
