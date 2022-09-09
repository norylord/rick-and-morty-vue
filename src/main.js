import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import components from '@/components/UI/index'
import directives from "@/directives";
import VIntersection from "@/directives/VIntersection";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})
app.directive('intersection', VIntersection)

app
    .use(router)
    .mount('#app')
