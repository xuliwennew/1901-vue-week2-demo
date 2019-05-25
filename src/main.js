import Vue from "vue"
import app from "./app"

new Vue({
    el:"#app",
    render(createElement){ //react render  diff
        return createElement(app)
    }
})
