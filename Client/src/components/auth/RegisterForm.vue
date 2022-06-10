<template>
<div class="container">
    <h1>Register Page</h1>
<form class="form" >
    <input type="text" placeholder="Enter User Name" v-model="userName">
    <input type="text" placeholder="Enter Nick Name" v-model="nickName">
    <input type="text" placeholder="Enter Full Name" v-model="fullName">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="text" placeholder="Enter Phone Number" v-model="phoneNumber">
    <input type="text" placeholder="Enter Adress" v-model="adress">
    <input type="text" placeholder="Enter User Img" v-model="img">
    <input type="text" placeholder="Enter true for male / false for female" v-model="male">

    <button class="btn" @click="addUser">Register</button>

</form>
</div>



    
</template>

<script>
import axios from 'axios';

export default {
    name:"RegisterForm",
    methods:{
        addUser(e){
            e.preventDefault();

            const newUser = {
            userName:this.userName,
            nickName:this.nickName,
            fullName:this.fullName,
            email:this.email,
            phoneNumber:this.phoneNumber,
            adress:this.adress,
            img:this.img,
            male:this.male
            };
            console.log(newUser);

            axios.post('http://localhost:3000/api/new',newUser)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))



            this.userName = "";
            this.nickName = "";
            this.fullName = "";
            this.email = "";
            this.phoneNumber = "";
            this.adress = "";
            this.img = "";
            this.male = "";


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
    width: 200px;
    height: 30px;
    border: solid 1px green;
    border-radius: 5px;
}
.btn{
        width: 100px;
    height: 30px;
    margin: 10px;
    background: green;
    border: green;
    color: white;
    cursor: pointer;

}

</style>


