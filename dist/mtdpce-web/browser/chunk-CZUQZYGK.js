import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-L2DNARFP.js";

// src/app/core/services/ministere.service.ts
var MinistereService = class _MinistereService {
  http;
  API_URL = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // organiramme
  createOrg(formData) {
    return this.http.post(`${this.API_URL}/structures`, formData);
  }
  updateOrg(id, formData) {
    return this.http.put(`${this.API_URL}/structures/${id}`, formData);
  }
  deleteOrg(id) {
    return this.http.delete(`${this.API_URL}/structures/${id}`);
  }
  getAllOrg(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/structures`, { params });
  }
  getAllOrgPub1() {
    return this.http.get(`${this.API_URL}/structures`);
  }
  getAllOrgPub() {
    return this.http.get(`${this.API_URL}/structures`);
  }
  //domains
  getAllTypes(page = 0, size = 10, sortBy = "nom", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/domaines`, { params });
  }
  getAllDomaines() {
    return this.http.get(`${this.API_URL}/domaines`);
  }
  getypesById(id) {
    return this.http.get(`${this.API_URL}/domaines/${id}`);
  }
  createTypes(project) {
    return this.http.post(`${this.API_URL}/domaines`, project);
  }
  updateTypes(id, project) {
    return this.http.put(`${this.API_URL}/domaines/${id}`, project);
  }
  deleteTypes(id) {
    return this.http.delete(`${this.API_URL}/domaines/${id}`);
  }
  //structures rattachaché 
  // organiramme
  createStruc1(formData) {
    return this.http.post(`${this.API_URL}/structures-rattachees`, formData);
  }
  createStruc(formData) {
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post(`${this.API_URL}/structures-rattachees`, formData, { headers });
  }
  updatetruc(id, formData) {
    return this.http.put(`${this.API_URL}/structures-rattachees/${id}`, formData);
  }
  deletetruc(id) {
    return this.http.delete(`${this.API_URL}/structures-rattachees/${id}`);
  }
  getAlltruc(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/structures-rattachees`, { params });
  }
  getAllTruc() {
    return this.http.get(`${this.API_URL}/structures-rattachees`);
  }
  //Mission
  getAllMissions(page = 0, size = 10, sortBy = "categorie", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/missions`, { params });
  }
  getAllMissionss() {
    return this.http.get(`${this.API_URL}/missions`);
  }
  getMissionsById(id) {
    return this.http.get(`${this.API_URL}/missions/${id}`);
  }
  createMissions(project) {
    return this.http.post(`${this.API_URL}/missions`, project);
  }
  updateMissions(id, project) {
    return this.http.put(`${this.API_URL}/missions/${id}`, project);
  }
  deleteMissions(id) {
    return this.http.delete(`${this.API_URL}/missions/${id}`);
  }
  // Minsitre
  createMinistre(formData) {
    return this.http.post(`${this.API_URL}/ministres`, formData);
  }
  updateMinistre(id, formData) {
    return this.http.put(`${this.API_URL}/ministres/${id}`, formData);
  }
  deleteMinistre(id) {
    return this.http.delete(`${this.API_URL}/ministres/${id}`);
  }
  getAllMinistre(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/ministres`, { params });
  }
  getAllMinistrePub1() {
    return this.http.get(`${this.API_URL}/ministres`);
  }
  getAllMinistrePub() {
    return this.http.get(`${this.API_URL}/ministres`);
  }
  getMinistreById(id) {
    return this.http.get(`${this.API_URL}/ministres/${id}`);
  }
  // Etats
  getAllEtats(page = 0, size = 10, sortBy = "nom", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/statistiques`, { params });
  }
  getAllEtat() {
    return this.http.get(`${this.API_URL}/statistiques`);
  }
  getAllEtatPub() {
    return this.http.get(`${this.API_URL}/statistiques`);
  }
  geEtatById(id) {
    return this.http.get(`${this.API_URL}/statistiques/${id}`);
  }
  createEtat(project) {
    return this.http.post(`${this.API_URL}/statistiques`, project);
  }
  updateEtats(id, project) {
    return this.http.put(`${this.API_URL}/statistiques/${id}`, project);
  }
  deleteEtats(id) {
    return this.http.delete(`${this.API_URL}/statistiques/${id}`);
  }
  static \u0275fac = function MinistereService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinistereService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MinistereService, factory: _MinistereService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinistereService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MinistereService
};
//# sourceMappingURL=chunk-CZUQZYGK.js.map
