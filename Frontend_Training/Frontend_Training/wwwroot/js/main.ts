import Vue from 'vue';

import { DummyData } from "./Data/DummyData";
let dummyData = new DummyData();

var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        dummyData: dummyData.entries
    }
})