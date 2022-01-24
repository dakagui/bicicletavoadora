<script>
    import { onMount} from 'svelte';
    import {getHello} from "../services/bicicletavoadora"

    let bicicletaVoadaraHello = {};

    onMount(async () => {
        const res = await getHello();
        bicicletaVoadaraHello = res;

    })
</script>
<main>
    <h1>{bicicletaVoadaraHello.message}</h1>
</main>
