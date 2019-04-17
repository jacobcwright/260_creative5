<template>
<div id="index">
<router-view/>
    <footer id="footer">
        <a href="https://github.com/jacobcwright/">Github
          <!-- <img id="footerpic" src="./src/assets/github.png"> -->
        </a>
    </footer>
</div>
</template>

<style scoped>
html, body {
/*margin: 0;*/
height: 100%;
}


#index {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    /*background: url(~.\src\assets\Sunrise,_Kauai.jpg) no-repeat center center fixed;*/ 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: rgb(248, 239, 204);
}

#footer {
    position:fixed;
    left:0px;
    bottom:-33px;
    height:50px;
    width:100%;
    /* background:rgb(255, 255, 255, .7);;
    color: black; */
    text-align: center; 
} 

#footerpic {
    height: 30px;
 }


</style>

<script>
import Login from './views/Login.vue'

export default {
  data(){
    return {

    }
  },
  components: {

}
}
</script>

