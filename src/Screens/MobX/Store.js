'use strict';

import {observable} from 'mobx';

const CounterStore = observable({
  counter: 0
});
CounterStore.increment = function () {
    this.counter++;
};
CounterStore.decrement = function() {
    this.counter--;
};
CounterStore.incrementAsync = function() {
  setTimeout(() => {
    this.counter++;
    }, 1000);
};
module.exports = CounterStore;
