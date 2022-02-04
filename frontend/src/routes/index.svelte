<script>
    import { fetch as fetchHello, bicicletaVoadaraHello } from "../stores/bicicletavoadora";
    import Header from "../components/Header.svelte";
    import Monitoring  from "../middleware/monitoring";
    
    Monitoring.captureMessage('Hello, world!');

    let hello = callHello();

    async function callHello() {
        await fetchHello()
		return $bicicletaVoadaraHello;
    }
</script>
<Header title="Bicicleta Voadora"/>
<div>
    {#await hello}
        <h1>Waiting for hello ...</h1>
    {:then msg}
        <h1>{msg}</h1>
    {/await}
|</div>
