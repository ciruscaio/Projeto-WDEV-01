<template>
    <main>

        <div class="text-top">Vídeos novos todas as <b>quinta</b> às <b>20h</b></div>

        <a href="https:/youtube.com/wdevoficial" target="black">
            <img alt="Inscreva-se" id="subscrive" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg"/>
        </a>

        <div class="text-bottom">youtube.coom/wdevoficial</div>

    </main>
</template>

<!-- -------------------------------------------------------------------------------------------------------------- -->

<script>


export default {
    name:'Home'
}
</script>

<!-- -------------------------------------------------------------------------------------------------------------- -->

<style scoped>

    main{
        background-color: var(--color-background-home);
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .text-top{
        color: var(--color-text-light); 
        font-size: 22px;
        margin-bottom: 20px;
    }

    #subscrive{
        width: 340px;
    }

    .text-bottom{
        color: var(--color-text-light); 
        font-size: 18px;
        margin-top: 20px;
    }

    @media(min-width: 700px){
        #subscrive{
            width: 400px;
        }
    }

</style>