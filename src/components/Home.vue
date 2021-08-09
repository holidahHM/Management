<template>
    <h1>The secrete of success in life is for a man to be ready  for his opportunity when it comes.</h1>
  
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    props: ['user'],

    async created() {
        const response = await axios.get('user', {
            headers: {
                Autorization: 'Bearer' + localStorage.getItem('token')
            }
        });

        console.log(response);

    }
}
</script>

