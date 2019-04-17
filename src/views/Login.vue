<template>
      <form id="login">
            <div id="box">
                <h1 id="title"><u>Success Journal</u></h1>
                <h1 id="titleLogin">Login</h1>
                <p v-if="error" class="error">{{error}}</p>
                <input type="text" placeholder="Username" id="input" v-model="username">
                <p></p>
                <input type="password" placeholder="Password" id="inputPassword" v-model="password">
                <p></p>
                <button type="submit" id="btn" @click.prevent="login">Login</button>
                <button type="submit" id="register" @click.prevent="register">Register</button>
            </div>
    </form>
</template>

<style scoped>
    #login {
    left: 50%;
    top: 50%;
    position: absolute;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -moz-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    color: black;
    border: 1px solid;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, .7);
}

#box {
    position: relative;
    margin: 0 auto;
    padding: 20px 20px 20px;
    width: 310px;
    border-radius: 3px;
    
}

#btn {
    padding: 10px;
    width: 100%
}

#register {
    padding: 10px;
    width: 100%
}

#titleLogin {
    align-content: center;
    text-align: center;
}

#inputPassword {
    position: relative;
    margin: 0 auto;
    padding: 10px 10px 10px;
    width: 93%;
    -webkit-text-security: circle;
}

#title {
    align-content: center;
    text-align: center;
    color: rgb(202, 92, 2);
}

#input {
    position: relative;
    margin: 0 auto;
    padding: 10px 10px 10px;
    width: 93%;
}
</style>

<script>
  export default {
    name: 'login',
    data()  {
      return {
        user: null,
        username: null,
        password: null,
        error: null,
      }
    },
    methods: {
        async login(){
            try {
                this.error = await this.$store.dispatch("login", {
                    username: this.username,
                    password: this.password
                });
                if (this.error === "")
                    this.$router.push('layout'); /* CHANGE PAGE */
            } catch(error){
                console.log(error);
            }
        }
    }
  }
</script>