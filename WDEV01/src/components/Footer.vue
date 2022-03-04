<template>
   
   <footer>

       <a class="social-link" target="blank" v-for="(redeSocial,index) in redesSociais" :key="index" :href="redeSocial.rede">
           <img :title="redeSocial.nome" :src="redeSocial.url"/>
       </a>

   </footer>

</template>

<!-- -------------------------------------------------------------------------------------------------------------- -->

<script>
    import api from '../services/api.js';

    export default {
        name: 'Footer',
        data(){
            return{
                redesSociais: []
            }
        },
        async mounted(){  // este evento acontece quando a página for montada 
            const {data:{results}} = await api.get('/parse/classes/wdev_testes'); //api.get('/parse/classes/wdev_testes').then(response =>{this.redesSociais = response.data}); //  {console.log(response.data);} para enviar para o console do navegador
            this.redesSociais = results;
    
            //console.log(this.redesSociais);
            //api.get().then(response =>{console.log(response.data)}); 
        }

    }
</script>

<!-- -------------------------------------------------------------------------------------------------------------- -->

<style scoped>

    footer{
        width: 100%;
        height: 60px;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social-link{
        border: 2px solid var(--color-text-light);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-left: 10px;
    }

    .social-link img{
        height: 30px;
    }

</style>