import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/ministere/mission/mission.component.ts
var _c0 = (a0) => ({ "rotate-180": a0 });
function MissionComponent_div_17_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mission_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mission_r4.description, " ");
  }
}
function MissionComponent_div_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275listener("click", function MissionComponent_div_17_ng_container_2_Template_div_click_3_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.open[i_r2] = !ctx_r2.open[i_r2]);
    });
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 19);
    \u0275\u0275element(7, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 22);
    \u0275\u0275element(11, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, MissionComponent_div_17_ng_container_2_div_12_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mission_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "#E30613");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(mission_r4.categorie);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r2.open[i_r2]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.open[i_r2]);
  }
}
function MissionComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 12);
    \u0275\u0275template(2, MissionComponent_div_17_ng_container_2_Template, 13, 7, "ng-container", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.missions());
  }
}
function MissionComponent_ng_template_18_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "article", 26);
    \u0275\u0275element(2, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mission_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.formatContent(mission_r5), \u0275\u0275sanitizeHtml);
  }
}
function MissionComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MissionComponent_ng_template_18_div_0_Template, 3, 1, "div", 11);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const noMission_r6 = \u0275\u0275reference(21);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.ministere()) == null ? null : tmp_3_0.missionGeneral)("ngIfElse", noMission_r6);
  }
}
function MissionComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 31);
    \u0275\u0275text(4, "Aucune mission");
    \u0275\u0275elementEnd()();
  }
}
var MissionComponent = class _MissionComponent {
  apiService;
  router;
  min;
  open = [false, false, false, false];
  // 4 missions
  missions = signal([], ...ngDevMode ? [{ debugName: "missions" }] : []);
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  ministere = signal(null, ...ngDevMode ? [{ debugName: "ministere" }] : []);
  // peut être null au départ
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(apiService, router, min) {
    this.apiService = apiService;
    this.router = router;
    this.min = min;
  }
  ngOnInit() {
    this.loadArticles();
    this.loadMins();
  }
  loadArticles() {
    this.loading.set(true);
    this.min.getAllMissions().subscribe({
      next: (response) => {
        if (response.success) {
          this.missions.set(response.data.content);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadMins() {
    this.loading.set(true);
    this.apiService.getAllMins(0, 10).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
          const articlesArray = this.articles();
          if (articlesArray.length > 0) {
            const ministereId = articlesArray[0].id;
            this.loadMinistereById(ministereId);
          }
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadMinistereById(id) {
    this.apiService.getminById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.ministere.set(response.data);
        } else {
          console.error("Erreur :", response.message);
        }
      },
      error: (err) => {
        console.error("Erreur chargement minist\xE8re", err);
      }
    });
  }
  formatContent(content) {
    if (!content)
      return "";
    content = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const paragraphs = content.split(/\n+/);
    return paragraphs.map((p) => `<p>${p.trim()}</p>`).join("");
  }
  missions1 = [
    {
      title: "D\xE9veloppement des infrastructures \xE9lectroniques et des communications \xE9lectroniques",
      icon: "M3 12h18M3 6h18M3 18h18",
      // exemple icône, tu peux changer
      color: "#00843B",
      // couleur du pays
      description: [
        "Dans le domaine du d\xE9veloppement des infrastructures \xE9lectroniques et des communications \xE9lectroniques",
        "de l\u2019\xE9laboration du cadre juridique pour le d\xE9veloppement des r\xE9seaux et services de communications \xE9lectroniques et du suivi de son application ;",
        "de la veille r\xE9glementaire en mati\xE8re de t\xE9l\xE9communications ;",
        "du suivi de la gestion des ressources rares ;",
        "du suivi de la pr\xE9paration, la d\xE9livrance et la gestion des autorisations pour l\u2019\xE9tablissement et l\u2019exploitation des r\xE9seaux de communications \xE9lectroniques, la fourniture de service t\xE9l\xE9phoniques au public et la fourniture de capacit\xE9 ;",
        "du suivi de la gestion des d\xE9clarations des services de communications \xE9lectroniques ouverts au public ;",
        "de l\u2019\xE9laboration et du suivi de la mise en \u0153uvre des projets de d\xE9veloppement des infrastructures de communications \xE9lectroniques ;",
        "de l\u2019\xE9laboration et du suivi de la mise en \u0153uvre de la strat\xE9gie de d\xE9veloppement de l\u2019acc\xE8s et du service universel des communications \xE9lectronique conform\xE9ment \xE0 la r\xE9glementation ;",
        "de la mise \xE0 la disposition des minist\xE8res en charge de la s\xE9curit\xE9 et de la d\xE9fense du territoire une infrastructure num\xE9rique s\xE9curis\xE9e, r\xE9siliente et redondante qui facilite le d\xE9ploiement et l\u2019exploitation de services divers en mati\xE8re de surveillance du territoire, de renseignements et de contre-terrorisme tout en garantissant la souverainet\xE9 num\xE9rique du Burkina Faso ;",
        "de la coordination et du suivi des activit\xE9s li\xE9es \xE0 la participation du Burkina Faso dans les institutions et organisations sp\xE9cialis\xE9es dont il est membre ;",
        "de la pr\xE9paration, du suivi et de la mise en \u0153uvre des accords, trait\xE9s et conventions internationaux concernant le d\xE9veloppement des t\xE9l\xE9communications auxquels le Burkina Faso est partie prenante ;",
        "de la diffusion des normes internationales en mati\xE8re de t\xE9l\xE9communications ;",
        "du d\xE9veloppement de l\u2019expertise nationale dans le domaine des t\xE9l\xE9communications."
      ]
    },
    {
      title: "Promotion des usages du num\xE9rique",
      icon: "M12 4v16m8-8H4",
      color: "#E30613",
      description: [
        "Dans le domaine de la promotion des usages du num\xE9rique",
        "de la mise en \u0153uvre de l\u2019interop\xE9rabilit\xE9 des bases de donn\xE9es d'identit\xE9 des personnes \xE0 travers la mise en place d\u2019un syst\xE8me d\u2019identification fondamentale (identification fondamentale ou de base) ;",
        "de l\u2019\xE9laboration et de la coordination des politiques, des strat\xE9gies et des plans nationaux et sectoriels de d\xE9veloppement des usages du num\xE9rique et de leur coh\xE9rence et de leur compl\xE9mentarit\xE9 ;",
        "de la prise en compte de ces politiques, strat\xE9gies et plans nationaux et sectoriels dans les diff\xE9rents plans de d\xE9veloppement, et de coordonner leur mise en \u0153uvre ;",
        "du d\xE9veloppement, de l\u2019administration et de la maintenance du R\xE9seau Informatique National de l\u2019Administration (RESINA) ;",
        "de la coordination, de la conception et de la mise en \u0153uvre des plateformes transversales pour le e-gouvernement et la e-administration ;",
        "de la formulation et du suivi de la mise en \u0153uvre des grands travaux de transformation digitale dans l\u2019administration publique en collaboration avec les structures b\xE9n\xE9ficiaires ;",
        "de la coordination de l'utilisation du num\xE9rique et de l'appui aux structures publiques et parapubliques pour acc\xE9l\xE9rer les objectifs en mati\xE8re de rationalisation des d\xE9penses de transparence ;",
        "de la coordination de la d\xE9finition de principes, de r\xE8gles, de normes, de proc\xE9dures de prise de d\xE9cisions et de r\xE9f\xE9rentiels communs, afin de garantir l\u2019interop\xE9rabilit\xE9 ;",
        "de la coordination de la mise en place du cadre juridique et institutionnel favorable au d\xE9veloppement des usages du num\xE9rique et du suivi de son application ;",
        "de la veille r\xE8glementaire en mati\xE8re d\u2019usages du num\xE9rique ;",
        "de l'\xE9laboration de cyberstrat\xE9gies en mati\xE8re de s\xE9curit\xE9 des syst\xE8mes d'information nationaux et de la mise en \u0153uvre des instruments de cybers\xE9curit\xE9 en relation avec les structures op\xE9rationnelles ;",
        "du suivi :",
        "de l\u2019accr\xE9ditation des prestataires de services de certification \xE9lectronique ;",
        "du contr\xF4le, par l\u2019autorit\xE9 de protection, du traitement des donn\xE9es personnelles ;",
        "de l\u2019enregistrement et de la modification des noms de domaines Internet sous le domaine de premier niveau \xAB .bf \xBB ;",
        "de l\u2019organisation de l\u2019octroi et du retrait d\u2019agr\xE9ments aux soci\xE9t\xE9s op\xE9rant dans le domaine de l\u2019informatique ;",
        "du contr\xF4le technique des services informatiques et syst\xE8mes d\u2019information des d\xE9partements minist\xE9riels et instituions d\u2019Etat, des centres de traitement num\xE9rique, des centres de formation sur le num\xE9rique et de toutes autres structures publiques dont l\u2019activit\xE9 entre dans le cadre de ses attributions ;",
        "de la formulation d\u2019avis sur les march\xE9s publics relatifs au num\xE9rique ;",
        "de la sensibilisation de toutes les composantes de la soci\xE9t\xE9 sur les enjeux li\xE9s num\xE9rique et servir de conseil \xE0 tous les niveaux de prise de d\xE9cision ;",
        "de la promotion du d\xE9veloppement de contenus num\xE9riques adapt\xE9s aux besoins locaux ;",
        "de la promotion des initiatives de r\xE9duction de la fracture num\xE9rique et l\u2019acc\xE9l\xE9ration de l\u2019usage du num\xE9rique dans tous les secteurs de la vie sociale et \xE9conomique et par toutes les couches de la population ;",
        "de la pr\xE9paration, de la mise en \u0153uvre et du suivi des accords, trait\xE9s et conventions internationaux relatifs \xE0 la gouvernance de l\u2019Internet et au d\xE9veloppement des usages du num\xE9rique auxquels le Burkina Faso est partie prenante ;",
        "de la diffusion des normes internationales en mati\xE8re de num\xE9rique ;",
        "du d\xE9veloppement de l\u2019expertise nationale dans le domaine du num\xE9rique ;",
        "de la coordination et du suivi des activit\xE9s li\xE9es \xE0 la participation du Burkina Faso dans les institutions et organisations sp\xE9cialis\xE9es dont il est membre."
      ]
    },
    {
      title: "D\xE9veloppement d\u2019une industrie num\xE9rique locale",
      icon: "M5 13l4 4L19 7",
      color: "#FFD700",
      description: [
        "Dans le domaine du d\xE9veloppement d\u2019une industrie num\xE9rique locale",
        "de l\u2019\xE9laboration d\u2019une politique nationale de d\xE9veloppement de l\u2019industrie num\xE9rique ;",
        "de l\u2019\xE9laboration et du suivi de la mise en \u0153uvre de la strat\xE9gie de d\xE9veloppement d\u2019une industrie num\xE9rique locale ;",
        "de la mise en place du cadre juridique et institutionnel pour le d\xE9veloppement de l\u2019industrie num\xE9rique et du suivi de leur application ;",
        "de la veille r\xE8glementaire en mati\xE8re d\u2019industrie num\xE9rique ;",
        "de l\u2019\xE9laboration et de la gestion de tout projet de d\xE9veloppement de l\u2019industrie num\xE9rique ;",
        "de la pr\xE9paration, du suivi et de la mise en \u0153uvre des accords, trait\xE9s et conventions internationaux concernant le d\xE9veloppement des domaines contribuant au d\xE9veloppement de l\u2019industrie num\xE9rique auxquels le Burkina Faso est partie prenante ;",
        "de la diffusion des normes techniques et des instruments juridiques internationaux dans le domaine de l\u2019industrie num\xE9rique ;",
        "de la coordination et du suivi des activit\xE9s li\xE9es \xE0 la participation du Burkina Faso dans les institutions et organisations sp\xE9cialis\xE9es dans ce domaine dont il est membre ;",
        "du d\xE9veloppement de l\u2019expertise nationale permettant de contribuer \xE0 l\u2019\xE9tablissement et au d\xE9veloppement d\u2019une industrie num\xE9rique."
      ]
    },
    {
      title: "Secteur Postal",
      icon: "M12 8v8m4-4H8",
      color: "#00843B",
      description: [
        "En mati\xE8re de poste",
        "de l\u2019\xE9laboration du cadre r\xE9glementaire pour le d\xE9veloppement du secteur postal et du suivi de son application ;",
        "de la veille r\xE9glementaire en mati\xE8re des postes ;",
        "de la pr\xE9paration et du suivi des accords, trait\xE9s et conventions internationaux concernant les postes et auxquels le Burkina Faso est partie prenante ;",
        "de la contribution \xE0 l\u2019extension de la couverture du territoire national en services postaux et financiers, \xE0 leur modernisation et \xE0 l\u2019inclusion financi\xE8re ;",
        "du suivi de la mise en \u0153uvre du service postal universel ;",
        "de la contribution \xE0 la veille et \xE0 l\u2019innovation dans le secteur postal ;",
        "de l\u2019\xE9laboration et la mise en \u0153uvre des projets de d\xE9veloppement dans le secteur postal ;",
        "de la coordination et du suivi des activit\xE9s li\xE9es \xE0 la participation du Burkina Faso dans les institutions et organisations sp\xE9cialis\xE9es dont il est membre ;",
        "de l\u2019\xE9mission des timbres-poste ;",
        "du d\xE9veloppement de l\u2019expertise nationale dans le domaine postal."
      ]
    }
  ];
  static \u0275fac = function MissionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MissionComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MinistereService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MissionComponent, selectors: [["app-mission"]], decls: 22, vars: 2, consts: [["checkMissionGeneral", ""], ["noMission", ""], [1, "bg-gradient-to-r", "from-[#00843B]", "to-[#006B30]", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-16", "bg-gray-100"], [4, "ngIf", "ngIfElse"], [1, "grid", "gap-6"], [4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6", "hover:shadow-lg", "transition-shadow", "relative"], [1, "absolute", "top-0", "left-0", "h-full", "w-1", "rounded-l-xl"], [1, "flex", "justify-between", "items-center", "cursor-pointer", "ml-4", 3, "click"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "bg-green-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 12h18M3 6h18M3 18h18"], [1, "text-lg", "font-semibold", "text-gray-800"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-500", "transform", "transition-transform", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "mt-4 text-gray-600 text-justify space-y-2 ml-4", 4, "ngIf"], [1, "mt-4", "text-gray-600", "text-justify", "space-y-2", "ml-4"], [1, "max-w-none", "text-black", "content-article", "text-base", "leading-relaxed", "text-justify", "py-6", "px-4", "bg-white", "rounded-xl", "shadow"], [3, "innerHTML"], [1, "text-center", "py-16"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"]], template: function MissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
      \u0275\u0275text(3, "Missions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 5)(5, "a", 6);
      \u0275\u0275text(6, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275text(10, "Minist\xE8re");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "Missions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 10)(16, "div", 3);
      \u0275\u0275template(17, MissionComponent_div_17_Template, 3, 1, "div", 11)(18, MissionComponent_ng_template_18_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, MissionComponent_ng_template_20_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const checkMissionGeneral_r7 = \u0275\u0275reference(19);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.missions() && ctx.missions().length > 0)("ngIfElse", checkMissionGeneral_r7);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MissionComponent, [{
    type: Component,
    args: [{ selector: "app-mission", standalone: true, imports: [CommonModule, RouterLink, RouterModule], template: ` <!-- Banni\xE8re -->\r
    <div class="bg-gradient-to-r from-[#00843B] to-[#006B30] py-12" >\r
      <div class="container mx-auto px-4">\r
        <h1 class="text-3xl font-bold text-white mb-2">Missions</h1>\r
        <nav class="text-green-100 text-sm">\r
          <a routerLink="/" class="hover:text-white">Accueil</a>\r
          <span class="mx-2">\u203A</span>\r
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>\r
          <span class="mx-2">\u203A</span>\r
          <span class="text-white">Missions</span>\r
        </nav>\r
      </div>\r
    </div>\r
    \r
<section class="py-16 bg-gray-100">\r
  <div class="container mx-auto px-4">\r
   \r
    <!--  <h2 class="text-2xl font-bold text-gray-900 mb-4">Attributions et Missions</h2>\r
\r
   \r
    <p class="text-gray-700 mb-8 text-justify">\r
      Le Minist\xE8re de la Transition Digitale, des Postes et des Communications Electroniques assure l\u2019\xE9laboration, la mise en \u0153uvre et le suivi de la politique du Gouvernement en mati\xE8re de transition digitale, des postes et des communications \xE9lectroniques.\r
      <br><br>\r
      A ce titre et en relation avec les d\xE9partements minist\xE9riels comp\xE9tents, il est charg\xE9 :\r
    </p>-->\r
\r
     <!-- Cas 1 : missions sp\xE9cifiques -->\r
<div *ngIf="missions() && missions().length > 0; else checkMissionGeneral">\r
  <div class="grid gap-6">\r
    <ng-container *ngFor="let mission of missions(); let i = index">\r
      <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow relative">\r
        <!-- Bande fine couleur pays -->\r
        <div class="absolute top-0 left-0 h-full w-1 rounded-l-xl" [style.background]="'#E30613'"></div>\r
\r
        <!-- En-t\xEAte -->\r
        <div class="flex justify-between items-center cursor-pointer ml-4" (click)="open[i] = !open[i]">\r
          <div class="flex items-center gap-4">\r
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">\r
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18"/>\r
              </svg>\r
            </div>\r
            <h3 class="text-lg font-semibold text-gray-800">{{ mission.categorie }}</h3>\r
          </div>\r
          <svg [ngClass]="{'rotate-180': open[i]}" class="w-6 h-6 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>\r
          </svg>\r
        </div>\r
\r
        <!-- Contenu -->\r
        <div *ngIf="open[i]" class="mt-4 text-gray-600 text-justify space-y-2 ml-4">\r
          {{ mission.description }}\r
        </div>\r
      </div>\r
    </ng-container>\r
  </div>\r
</div>\r
\r
<!-- Cas 2 : pas de missions sp\xE9cifiques mais mission g\xE9n\xE9rale existe -->\r
<ng-template #checkMissionGeneral>\r
  <div *ngIf="ministere()?.missionGeneral as mission; else noMission">\r
    <article class="max-w-none text-black content-article text-base leading-relaxed text-justify py-6 px-4 bg-white rounded-xl shadow">\r
      <div [innerHTML]="formatContent(mission)"></div>\r
    </article>\r
  </div>\r
</ng-template>\r
\r
<!-- Cas 3 : aucune mission -->\r
<ng-template #noMission>\r
  <div class="text-center py-16">\r
    <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
    </svg>\r
    <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucune mission</h3>\r
  </div>\r
</ng-template>\r
  </div>\r
</section>\r
\r
` }]
  }], () => [{ type: ApiService }, { type: Router }, { type: MinistereService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MissionComponent, { className: "MissionComponent", filePath: "src/app/features/ministere/mission/mission.component.ts", lineNumber: 15 });
})();
export {
  MissionComponent
};
//# sourceMappingURL=chunk-6NA5WZQ6.js.map
