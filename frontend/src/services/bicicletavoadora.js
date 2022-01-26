import API from "./Api"

export const getHello = async () => {
    try {
        const response = await API.get("/hello");
        return response;
    } catch (error){
        console.error(error);
    }
}