import API from "./Api"
import * as Sentry from "@sentry/browser";

export const getHello = async () => {
    try {
        const response = await API.get("/hello");
        
        return response;
    } catch (err){
        Sentry.captureException(err);
        console.error(err);
    }
}