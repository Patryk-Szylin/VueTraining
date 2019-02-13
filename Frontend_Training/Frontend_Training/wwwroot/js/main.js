import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
var dummyData = new DummyData();
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        dummyData: dummyData.entries
    }
});
//# sourceMappingURL=main.js.map