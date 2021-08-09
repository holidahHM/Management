<template>
  <div id="app">

    <Nav :user="user"/>
    
  <div class="manage-wrapper">
      <div class="manage-inner">
        <router-view :user="user" />
      </div>

  </div>
   
  
  <footer>
    <div class="footer">
        <p class="footer-text-left">
            <a href="#">about</a>
            <a href="/">home</a>
            <a href="/login">login</a>
            <a href="/register">create user</a>
        </p>
        

        <div class="footer-content-right">
            <a href="#"><img src="assets/email.png" alt="email" class="icon-style"></a>
            <a href="#"><img src="assets/facebook.png" class="icon-style" alt="facebook"></a>
            <a href="#"><img src="assets/twitter.png" alt="twitter" class="icon-style"></a>
            <a href="#"><img src="assets/linkedin.png" alt="linkedin" class="icon-style"></a>
            <a href="#"><img src="assets/github.png" alt="github" class="icon-style"></a>
        </div>
        
        <div class="copyright-content-left">
            <p><span>&copy;</span>Muchere Brian 2021</p>
        </div>
    </div>
    
</footer>
 </div>

 

</template>

<script>
  import Nav from './components/Nav.vue'


export default {
  name: 'App',
  components:{
    Nav,
  }
  
}
</script>

<style>

  *{
    box-sizing: border-box;
  }

  body{
   /* background: #1c8ef9 !important;*/
    min-height: 100vh;
    display:flex;
    font-weight: 400;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(assets/1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-color: lightblue;
    background-position: center;
    margin: 0%;
    padding: 0%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span{
    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  body, html, #app{
    width: 100%;
    height: 100%;
  }

  #app{
    text-align: center;
  }

  navbar-light{
    background-color: white;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }

  .manage-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .manage-inner{
    width: 500px;
    margin: auto;
    background: white;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }


  .manage-wrapper .form-control:focus{
    border-color: #167bff;
    box-shadow: none;
  }


  .manage-wrapper h3{
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .custom-control{
    font-weight: 400;
  }


  .forgot-password,
  .forgot-password a{
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forgot-password a{
    color: #167bff;

  }

  
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: teal;
}

.footer-text-left{
    font-size: 15px;
    padding-left: 25px;
    float: left;
    word-spacing: 5px;
    text-decoration: none;
    
}
.footer-text-left a:hover{
    background: orangered;
    
}

.footer-text-left a{
  border: 1px solid green;
    padding: 10px 30px;
    border-color: yellowgreen;
    text-decoration: none;
    background: black;
    margin-top: -30px;
    margin-right: 15px;
    margin-left: -30x;
    font-size: 10px;
    font-weight: 400;
    color: white;
}

.footer-content-right{
    padding-right: 40px;
    margin-top: 20px;
    float: right;
}
.icon-style{
    height: 40px;
    margin-left: 20px;
    margin-top: 5px;
}

.icon-style:hover{
    background-color: orange;
    padding: 5px;
}

.copyright-content-left{
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    align-content: center;
}

</style>
