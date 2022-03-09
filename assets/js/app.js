
const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        numberEmail: '',
    },

    methods: {
        getEmail: function(){
            if(this.numberEmail == 0 || this.numberEmail > 20){
                alert('c')

            }else{   

                for(let i = 0; i < this.numberEmail; i++){
                    
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(email => {
                        this.emails.push(email.data.response);
                    })
                }                
            }
        }
    }
})