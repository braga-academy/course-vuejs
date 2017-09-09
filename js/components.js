Vue.component('hello-component', {
    template:   `<h1>{{ title }}</h1>
                <input type="text" v-model="title">`,
    props: ['title']
});

new Vue({
    el: 'body',
    data: {
        title: 'Components'
    }
})