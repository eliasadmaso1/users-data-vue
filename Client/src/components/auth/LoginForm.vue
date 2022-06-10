<template>
<div class="container">
    <h1>Login Page</h1>
<form class="form" @submit="loginUser">
    <input type="number" placeholder="Your Id" v-model="id">
    <button class="btn" type="submit">Login</button>

</form>
</div>



    
</template>

<script>
export default {
    name:"LoginForm",
    data(){
        return{
         
            id:"",
           
            
        }
    },
    methods:{
        loginUser(e){
            e.preventDefault();

            const currentUser = {
            id:this.id,
           
            }

            this.$emit('login-user',currentUser);

            this.id = "";
          


        }
    }
    
}
</script>

<style scoped>

.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form input{
    margin: 5px;
}

</style>