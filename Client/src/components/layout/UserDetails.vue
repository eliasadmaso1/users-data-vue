<template >

<div class="container">
   <form class="form">
    <input type="text" placeholder="Enter User Name" v-model="username">
    <button class="btn" @click="getUser">Submit</button>

</form>
    <div class="user-details">
        <img v-if="user.male" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" alt="user" class="user-image">
        <img v-else src="http://cdn.onlinewebfonts.com/svg/img_508631.png" alt="user" class="user-image">

        <span class="detail">{{user.userName}}</span>
        <span class="detail">{{user.nickName}}</span>
    </div>

    <div class="user-details">
        <span class="detail">{{user.fullName}}</span>
        <span class="detail">{{user.email}}</span>
        <span class="detail">{{user.phoneNumber}}</span>
        <span class="detail">{{user.adress}}</span>

    </div>

    <div class="buttons">
        <button class="info" @click="displayUser">Info</button>
        <button class="delete" @click="deleteUser">Delete</button>
        <span>{{message}}</span>
    </div>
</div>
    
</template>

<script>
import axios from 'axios';

export default {
    name:"UserDetails",
    data(){
        return {
            username:"",
            message:"",
            user:{
                userName:"User Name",
                nickName:"nick name",
                fullName:"full name",
                email:"email",
                phoneNumber:"phone number",
                adress:"adress",
                img:"",
                male:false
            },
            users:[]
        }
        
            
    },
    methods:{
        deleteUser(){
            console.log("user deleted");
            axios.delete(`http://localhost:3000/api/delete/${this.users[0].id}`)
            .then(res => this.message = res.data)
            .catch(err=>console.log(err))

            this.user.userName="User Name",
            this.user.nickName="nick name",
            this.user.fullName="full name",
            this.user.email="email",
            this.user.phoneNumber="phone number",
            this.user.adress="adress",
            this.user.img="",
            this.user.male = true
            

        },
        getUser(){
            axios.get(`http://localhost:3000/api/find/${this.username}`)
            .then(res => this.users = [...this.users,res.data[0]])
            .catch(err=>console.log(err));

        },
        displayUser(){
            this.user = this.users[0]
            
        }
    }
  
    
}
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns:0.5fr 1fr 1fr 1fr;
    border: solid 1px  #4d88ff;
    border-radius: 20px;
    padding: 80px;


}
.user-details{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

}
.buttons{
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
      width: 100%;
    height: 100%;


}
.info{
    width: 100px;
    height: 30px;
    margin: 10px;
    background: #3377ff;
    border: #3377ff;
    color: white;
    cursor: pointer;
    

}
.delete{
      width: 100px;
    height: 30px;
    margin: 10px;
    background: #ff5050;
    border: #ff5050;
    color: white;
    cursor: pointer;

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

.detail{
    margin: 5px;
}

.user-image{
    width:50px;
    border: solid 1px black;
    border-radius: 50%;
    object-fit: cover;
    margin: 10px;

}

</style>


