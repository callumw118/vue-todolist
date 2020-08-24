import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            items: [
                {name: "Buy Shopping"},
                {name: "Clean Bathroom"},
                {name: "Car's MOT"}
            ],
            newItem: ""
        },
        methods: {
            saveNewItem: function() {
                this.items.push({
                    name: this.newItem
                });
                this.newItem = "";
            }
        }
    });
});