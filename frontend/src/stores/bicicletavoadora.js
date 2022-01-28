import { writable } from "svelte/store";
import {getHello} from "../services/bicicletavoadora"

export const bicicletaVoadaraHello = writable("");

export const fetch = async () => {
    const response = await getHello();
    bicicletaVoadaraHello.set(response.message);
};
