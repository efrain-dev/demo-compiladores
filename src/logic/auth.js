import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://devartworks.online/ProyectoCompiladores/Analizador";
//const ENDPOINT_PATH = "/ProyectoCompiladores/Analizador";

export default {
    getENDPOINT_PATH() {
       return ENDPOINT_PATH
    },
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
    },
    getUserLogged() {
        return Cookies.get("userLogged");
    },
    unsetUserLogged() {
        return Cookies.remove("userLogged");
    },

    getActiveSession(){
        return Cookies.get("userLogged") !== undefined;
    },
};
