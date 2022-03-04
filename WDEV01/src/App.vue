<template>
    <div id="app">

        <Header/>
        <Home />
        <Footer />
        
    </div>
</template>

<script>

    //Estylos
    import './styles/global.css';

    //Componentes
    import Header from './components/Header'; //NAO POR A EXTENSAO
    import Home from './pages/Home';
    import Footer from './components/Footer';

    //Construtor de 'app'
    export default {
        name: 'app',
        components: {
            Header,
            Home,
            Footer
        }
    };
</script>

<style>



</style>

