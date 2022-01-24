import API from "./Api"

export const getHello = async () => {
    try {
        const response = await API.get("/hello");
        console.log(response);
        return response;
    } catch (error){
        console.error(error);
    }
}