import {
  AuthService
} from "./chunk-A5LVPKIT.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-MJTGFJCP.js";
import {
  Component,
  catchError,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/core/guards/auth.guard.ts
var adminGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated() && authService.isModerator()) {
    return true;
  }
  if (!authService.isAuthenticated()) {
    router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
  } else {
    router.navigate(["/"]);
  }
  return false;
};
var guestGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  // Public routes with layout
  {
    path: "",
    loadComponent: () => import("./chunk-GGZTA5VO.js").then((m) => m.PublicLayoutComponent),
    children: [
      { path: "", loadComponent: () => import("./chunk-J5W5KYIV.js").then((m) => m.HomeComponent) },
      { path: "actualites", loadComponent: () => import("./chunk-F4DEKJHX.js").then((m) => m.ArticlesComponent) },
      { path: "actualites/:id", loadComponent: () => import("./chunk-V2TC3FNS.js").then((m) => m.DetailArticlesComponent) },
      { path: "projets", loadComponent: () => import("./chunk-TAYZ3PFF.js").then((m) => m.ProjetsComponent) },
      { path: "projets/:id", loadComponent: () => import("./chunk-XB6O2MTE.js").then((m) => m.DetailProjetsComponent) },
      { path: "ressources/documents", loadComponent: () => import("./chunk-HXK7B6EL.js").then((m) => m.DocumentsComponent) },
      { path: "ressources/politiques", loadComponent: () => import("./chunk-NQ5SIZVY.js").then((m) => m.PolitiquesComponent) },
      { path: "contact", loadComponent: () => import("./chunk-XPE2EJ64.js").then((m) => m.ContactComponent) },
      { path: "ministere/ministre", loadComponent: () => import("./chunk-2VHI6ARS.js").then((m) => m.MinistreComponent) },
      { path: "ministere/missions", loadComponent: () => import("./chunk-6NA5WZQ6.js").then((m) => m.MissionComponent) },
      { path: "ministere/organigramme", loadComponent: () => import("./chunk-B5JNSGSF.js").then((m) => m.OrganigrammeComponent) },
      { path: "ministere/structures", loadComponent: () => import("./chunk-WSYQNWSA.js").then((m) => m.StructurerattachesComponent) },
      { path: "faq", loadComponent: () => import("./chunk-EFDHFJCA.js").then((m) => m.FAQComponent) },
      { path: "services", loadComponent: () => import("./chunk-YGD3XT3X.js").then((m) => m.ServiceComponent) },
      { path: "evenements", loadComponent: () => import("./chunk-6E3TPCXM.js").then((m) => m.EvenementsComponent) },
      { path: "agendas", loadComponent: () => import("./chunk-6VDAUSNN.js").then((m) => m.AgendasComponent) },
      { path: "agendas/:id", loadComponent: () => import("./chunk-RJ55RLN3.js").then((m) => m.DetailAgendaComponent) },
      { path: "communiques", loadComponent: () => import("./chunk-LTXPCKKA.js").then((m) => m.CommuniquesComponent) },
      // Redirections pour compatibilité
      { path: "articles", redirectTo: "actualites", pathMatch: "full" },
      { path: "articles/:id", redirectTo: "actualites/:id", pathMatch: "full" },
      { path: "projects", redirectTo: "projets", pathMatch: "full" },
      { path: "projects/:id", redirectTo: "projets/:id", pathMatch: "full" },
      { path: "documents", redirectTo: "ressources/documents", pathMatch: "full" },
      { path: "politiques", redirectTo: "ressources/politiques", pathMatch: "full" },
      { path: "services", redirectTo: "services", pathMatch: "full" }
    ]
  },
  // Auth routes (no layout)
  {
    path: "auth/login",
    loadComponent: () => import("./chunk-HKMZFJDW.js").then((m) => m.LoginComponent),
    canActivate: [guestGuard]
  },
  // Admin routes
  {
    path: "admin",
    loadComponent: () => import("./chunk-FYSZNGIJ.js").then((m) => m.AdminLayoutComponent),
    canActivate: [adminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-HC27LYLU.js").then((m) => m.DashbordComponent) },
      { path: "articlest", loadComponent: () => import("./chunk-W5OWC7GP.js").then((m) => m.AdminArticlesComponent) },
      { path: "project", loadComponent: () => import("./chunk-3DTWUQOL.js").then((m) => m.AdminProjectsComponent) },
      { path: "projects", loadComponent: () => import("./chunk-66EQALAG.js").then((m) => m.ProjetComponent) },
      { path: "documentst", loadComponent: () => import("./chunk-7564WHTT.js").then((m) => m.AdminDocumentsComponent) },
      { path: "contacts", loadComponent: () => import("./chunk-I3TAA7L7.js").then((m) => m.ContactsComponent) },
      { path: "users", loadComponent: () => import("./chunk-H6AAIUIF.js").then((m) => m.UsersComponent) },
      { path: "articles", loadComponent: () => import("./chunk-EMAYPPB5.js").then((m) => m.ArticleComponent) },
      { path: "Articles/:id", loadComponent: () => import("./chunk-P4UJJVH4.js").then((m) => m.DetailArticleComponent) },
      { path: "documents", loadComponent: () => import("./chunk-ZZRKPRYC.js").then((m) => m.DocumentsComponent) },
      { path: "types", loadComponent: () => import("./chunk-CMWVMWWZ.js").then((m) => m.TypesComponent) },
      { path: "types-projets", loadComponent: () => import("./chunk-WQAX3QGY.js").then((m) => m.TypesComponent) },
      { path: "agendas", loadComponent: () => import("./chunk-GOMHJWYD.js").then((m) => m.AgendaComponent) },
      { path: "services", loadComponent: () => import("./chunk-67XRFGLU.js").then((m) => m.ServicesComponent) },
      { path: "evenements", loadComponent: () => import("./chunk-RMTTHCIJ.js").then((m) => m.EvenementsComponent) },
      { path: "minist\xE8re", loadComponent: () => import("./chunk-F3BMRPGC.js").then((m) => m.MinistereComponent) },
      { path: "organigramme", loadComponent: () => import("./chunk-BQ7OMLVY.js").then((m) => m.OrganigrammeComponent) },
      { path: "missions", loadComponent: () => import("./chunk-ZTUJUXDG.js").then((m) => m.MissionComponent) },
      { path: "domains", loadComponent: () => import("./chunk-HVV6OLN2.js").then((m) => m.DomainsComponent) },
      { path: "ministre", loadComponent: () => import("./chunk-2BQFIGJO.js").then((m) => m.MinistreComponent) },
      { path: "etats", loadComponent: () => import("./chunk-DUDLMAZ4.js").then((m) => m.EtatsComponent) },
      { path: "structures", loadComponent: () => import("./chunk-VHEU25VN.js").then((m) => m.StructureRattachesComponent) }
    ]
  },
  // Fallback
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      authService.logout();
      if (router.url.startsWith("/admin")) {
        router.navigate(["/auth/login"]);
      }
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
