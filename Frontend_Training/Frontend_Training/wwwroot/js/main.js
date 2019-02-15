import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
var dummyData = new DummyData();
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        entriesData: dummyData.entries
    },
    methods: {
        addToPlayers: function (event) {
            this.entriesData[0].players.push("Patrick");
        }
    }
});
//# sourceMappingURL=main.js.map