import http from "../http-common";

class EmpresaDataService {
    listaDeEmpresas() {
        return http.get("/empresas");
    }
}