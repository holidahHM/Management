<template>
    <div class="wrapper">
        <img src="assets/4.png" alt="profile picture" width="85">

        <div class="right">
            <h3>Contact details</h3>
            <br>
            <hr>
            <div class="info_data">
                <div class="data">
                    <h4>email</h4>
                    <p>brian@gmail.com</p>
                </div>
                <div class="data">
                    <h4>email address</h4>
                    <p>50103- Eldoret</p>

                </div>

                <div class="data">
                    <h4>phone number</h4>
                    <p>+254 799737828</p>
                    
                </div>

            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped> 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

dody{
    background-color: skyblue;
}

.wrapper{
    position: absolute;
    top: 50;
    left: 50%;
    transform: translate(-50% -50);
    width: 450px;
    display: flex;
    box-shadow: 0 1px 20px 0(rgba(red, green, blue, alpha));
}

.wrapper .left{
    width: 35%;
    background: linear-gradient(to right, #01a9ac, #01dbdf);
    color: white;
    text-align: center;
    padding: 30px 25px;
}

.wrapper .right{
    width: 65%;
    background: white;
    border-radius: 5px;
    padding: 30px 35px;
}



</style>