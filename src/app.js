import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            items: [
                {name: "Buy Shopping", priority: true},
                {name: "Clean Bathroom", priority: false},
                {name: "Car's MOT", priority: true}
            ],
            newItem: "",
            picked: ""
        },
        methods: {
            saveNewItem: function() {
                this.items.push({
                    name: this.newItem,
                    priority: this.picked
                });
                this.newItem = "";
            },
            removeItem: function(index) {
                this.items.splice(index, 1)
            }
        }
    });
});