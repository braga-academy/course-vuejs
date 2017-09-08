new Vue({
    el: 'body',
    data: {
        image: {
            visible: true
        }
    },
    ready(){
        setTimeout(() => {
            this.title = 'Curso Vue';
            this.active = false
            
        }, 3000);

    }
})