new Vue({
    el: 'body',
    data: {
        person: {
            first_name: 'Luciano',
            last_name: 'Braga'
        }
    },
    computed: {
        full_name: {
            get(){
                return `${this.person.first_name} ${this.person.last_name}`
            }, 
            set(value){
                const[first, ...last] = value.split(' ');
                this.person.first_name = first;
                this.person.last_name = last.join(' ');
            }
        }
    }
})