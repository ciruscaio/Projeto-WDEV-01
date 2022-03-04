<!--Requisito monimo <template> e template deve conter no minimo um objeto, <script>, <style scoped>-->
<template>
    <div>

        <header class="container">

            <nav>
           
                <a href="/"><img alt="Raye Logo" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"/></a>
                <img v-on:click="AbreMenu" alt="Abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" />
                <div v-on:click="FechaMenu" id="menu-overlay" v-if="EstadoMenu"/> <!-- v-if imprime o componente na tela se tiver true -->
                <div id="menu-itens" :class="{AtivarMenu:EstadoMenu}"> <!-- {acão:estado} -->
                    <a href="/"><img alt="Raye Logo" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"/></a>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Vídeos</a></li>
                        <li><a href="/">Sobre</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </div>

            </nav>

        </header>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){ 
            return{
                EstadoMenu: false
            }
        },
        methods:{
            AbreMenu : function(){
                this.EstadoMenu = true;
            },
            FechaMenu : function(){
                this.EstadoMenu = false;
            }
        }

    }
      
</script>

<style scoped>

    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav{
        display: flex;                                      /* Expande o controle sobre o alinhamento de elementos */
        justify-content: space-between;                     /* Coloca um espaço automático entre os elementos */
        height: 60px;
        align-items: center;
    }

    #logo{
        width: 130px;
    }

    #menu-button{
        width: 30px;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: black;
        opacity: 0.8;
    }

    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-itens{
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100vh;
        background-color: var(--color-background-nav);
        display: none; /* esconde o menu ao criar */
        flex-direction: column;
        justify-content: flex-start; /* opcioinal */
        align-items: center;
    }

    #menu-itens.AtivarMenu{
        display: flex;
    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul li{
        margin: 20px 0px;
    }

    ul li a{
        color: var(--color-text-light);
    }

    @media(min-width: 700px){ /* alterar o layout conforme o tamanho do ecrã */
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-itens{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
        }

        ul li{
            margin: 0;
            margin-left: 20px;
        }
    }

</style>