
const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        numberEmail: '',
        divAlert: false,
        startEmail: true,
    },

    methods: {
        getEmail: function(){
            if(this.numberEmail == 0 || this.numberEmail > 20){
                this.divAlert = !this.divAlert;
            }else{

                this.startEmail = false;
                for(let i = 0; i < this.numberEmail; i++){
                                   
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(email => {
                        this.emails.push(email.data.response);
                    })
                }             
            }
        },
        restart: function(){
            this.emails = [];
            this.numberEmail = '';
            this.startEmail = true;
        }
    }
})