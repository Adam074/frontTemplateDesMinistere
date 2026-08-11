import {
  AuthService
} from "./chunk-A5LVPKIT.js";
import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-MJTGFJCP.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  HostListener,
  NgClass,
  NgIf,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresolveWindow,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/layouts/public/header/header.component.ts
var _c0 = (a0, a1) => ({ "text-primary-600 bg-primary-50": a0, "text-slate-600": a1 });
var _c1 = () => ({ exact: true });
function HeaderComponent__svg_path_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 36);
  }
}
function HeaderComponent__svg_path_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 37);
  }
}
var HeaderComponent = class _HeaderComponent {
  router;
  activeSection = "";
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  authService = inject(AuthService);
  API_URL = environment.FileUrl;
  apiService = inject(ApiService);
  etatService = inject(MinistereService);
  mobileMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileMenuOpen" }] : []);
  searchOpen = signal(false, ...ngDevMode ? [{ debugName: "searchOpen" }] : []);
  openSubmenu = signal(null, ...ngDevMode ? [{ debugName: "openSubmenu" }] : []);
  ministeres = signal([], ...ngDevMode ? [{ debugName: "ministeres" }] : []);
  ministere1;
  ministere = signal(null, ...ngDevMode ? [{ debugName: "ministere" }] : []);
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.loadMinistere();
  }
  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
    if (!this.mobileMenuOpen()) {
      this.openSubmenu.set(null);
    }
  }
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    this.openSubmenu.set(null);
  }
  toggleSearch() {
    this.searchOpen.update((v) => !v);
  }
  toggleSubmenu(menu) {
    this.openSubmenu.update((v) => v === menu ? null : menu);
  }
  onResize() {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
      this.openSubmenu.set(null);
    }
  }
  loadMinistere() {
    this.loading.set(true);
    this.apiService.getAllMins(0, 10).subscribe({
      next: (response) => {
        if (response.success) {
          this.ministeres.set(response.data.content);
          const articlesArray = this.ministeres();
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
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  setActive(section) {
    this.activeSection = section;
  }
  onScroll() {
    if (this.router.url !== "/")
      return;
    const sections = ["hero", "projets", "actualites"];
    let currentSection = "";
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          currentSection = section;
        }
      }
    }
    this.activeSection = currentSection;
  }
  goToAccueil() {
    this.activeSection = "";
    this.router.navigate(["/"]).then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  goToSection(section) {
    this.activeSection = "";
    if (this.router.url !== "/") {
      this.router.navigate(["/"]).then(() => {
        setTimeout(() => this.scrollTo(section), 100);
      });
    } else {
      this.scrollTo(section);
    }
  }
  scrollTo(section) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  // Liste de toutes les routes enfants du menu Ressources
  ressourcesRoutes = ["/ressources/documents", "/ressources/politiques", "/faq"];
  isRessourcesActive() {
    return this.ressourcesRoutes.some((route) => this.router.url.startsWith(route));
  }
  // Liste des routes enfants du menu Ministère
  ministereRoutes = [
    "/ministere/ministre",
    "/ministere/missions",
    "/ministere/organigramme",
    "/ministere/structures"
  ];
  // Fonction pour savoir si le parent Ministère doit être actif
  isMinistereActive() {
    return this.ministereRoutes.some((route) => this.router.url.startsWith(route));
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function HeaderComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow)("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 58, vars: 35, consts: [[1, "bg-white", "sticky", "top-0", "z-50", "shadow-sm"], [1, "max-w-7xl", "mx-auto", "px-6", "sm:px-8", "lg:px-10"], [1, "flex", "items-center", "h-20", "justify-between"], ["routerLink", "/", 1, "flex", "items-center", "gap-2", "flex-shrink-0"], [1, "w-16", "h-16", "flex-shrink-0"], [1, "w-full", "h-full", "object-contain", 3, "src", "alt"], [1, "hidden", "md:flex", "flex-col", "leading-tight", "max-w-xs"], [1, "text-xl", "font-bold", "text-slate-900", "break-words"], [1, "text-sm", "font-medium", "text-danger-500"], [1, "hidden", "lg:flex", "items-center", "gap-1", "ml-12"], [1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors", "whitespace-nowrap", "cursor-pointer", 3, "click"], [1, "relative", "group"], [1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "hover:text-primary-600", "hover:bg-primary-50", "flex", "items-center", "gap-1", "transition-colors", "whitespace-nowrap", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform", "group-hover:rotate-180"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "absolute", "top-full", "left-0", "mt-2", "w-56", "bg-white", "rounded-lg", "shadow-md", "border", "border-slate-100", "py-1", "opacity-0", "invisible", "group-hover:opacity-100", "group-hover:visible", "transition-all", "duration-200"], ["routerLink", "/ministere/ministre", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/ministere/missions", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/ministere/organigramme", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/ministere/structures", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], [1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "hover:text-primary-600", "hover:bg-primary-50", "cursor-pointer", 3, "click", "ngClass"], [1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors", "whitespace-nowrap", "cursor-pointer", 3, "click", "ngClass"], ["routerLink", "/evenements", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors", "whitespace-nowrap", 3, "click"], ["routerLink", "/ressources/documents", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/ressources/politiques", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/faq", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "block", "px-4", "py-2", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors", "whitespace-nowrap", 3, "click"], [1, "flex", "items-center", "gap-2", "ml-6"], [1, "p-2", "rounded-lg", "text-slate-500", "hover:text-slate-700", "hover:bg-slate-100", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["routerLink", "/admin", 1, "hidden", "sm:inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-primary-500", "text-white", "text-sm", "font-medium", "rounded-lg", "hover:bg-primary-600", "transition-colors", 2, "background-color", "#00843B"], [1, "lg:hidden", "p-2", "rounded-lg", "text-slate-500", "hover:text-slate-700", "hover:bg-slate-100", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, " Burkina Faso ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "nav", 9)(12, "a", 10);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_12_listener() {
        return ctx.goToAccueil();
      });
      \u0275\u0275text(13, " Accueil\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
      \u0275\u0275text(16, " Minist\xE8re ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 13);
      \u0275\u0275element(18, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 15)(20, "a", 16);
      \u0275\u0275text(21, " Le Ministre ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 17);
      \u0275\u0275text(23, " Missions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 18);
      \u0275\u0275text(25, " Organigramme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 19);
      \u0275\u0275text(27, " Structures Rattach\xE9es ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "a", 20);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_28_listener() {
        ctx.goToSection("actualites");
        return ctx.setActive("actualites");
      });
      \u0275\u0275text(29, " Actualit\xE9s\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 21);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_30_listener() {
        return ctx.goToSection("projets");
      });
      \u0275\u0275text(31, " Grands Chantiers\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 22);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_32_listener() {
        return ctx.activeSection = "";
      });
      \u0275\u0275text(33, " Calendrier ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11)(35, "button", 12);
      \u0275\u0275text(36, " Ressources ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 13);
      \u0275\u0275element(38, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "div", 15)(40, "a", 23);
      \u0275\u0275text(41, " R\xE8glementation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 24);
      \u0275\u0275text(43, " Strat\xE9gie ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 25);
      \u0275\u0275text(45, " FAQ ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "a", 26);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_46_listener() {
        return ctx.activeSection = "";
      });
      \u0275\u0275text(47, " Contact ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 27)(49, "button", 28);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_49_listener() {
        return ctx.toggleSearch();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 29);
      \u0275\u0275element(51, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "a", 31);
      \u0275\u0275text(53, " Administration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "button", 32);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_54_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 33);
      \u0275\u0275template(56, HeaderComponent__svg_path_56_Template, 1, 0, "path", 34)(57, HeaderComponent__svg_path_57_Template, 1, 0, "path", 35);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ((tmp_0_0 = ctx.ministere()) == null ? null : tmp_0_0.logo) ? ctx.getImageUrl(ctx.ministere().logo) : "assets/images/armoirie.png", \u0275\u0275sanitizeUrl)("alt", ((tmp_1_0 = ctx.ministere()) == null ? null : tmp_1_0.nomReel) || "Burkina Faso");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx.ministere()) == null ? null : tmp_2_0.nomReel) || "Burkina Faso", " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c0, ctx.isMinistereActive(), !ctx.isMinistereActive()));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(19, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(20, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(22, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c0, ctx.activeSection === "actualites", ctx.activeSection !== "actualites"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(26, _c0, ctx.activeSection === "projets", ctx.activeSection !== "projets"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(29, _c0, ctx.isRessourcesActive(), !ctx.isRessourcesActive()));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(32, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(33, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(34, _c1));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.mobileMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.mobileMenuOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: `<header class="bg-white sticky top-0 z-50 shadow-sm">\r
  <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">\r
    <div class="flex items-center h-20 justify-between">\r
\r
      <!-- Logo + Sigle -->\r
      <a routerLink="/" class="flex items-center gap-2 flex-shrink-0" >\r
        <!-- Logo -->\r
        <div class="w-16 h-16 flex-shrink-0">\r
          <img\r
            [src]="ministere()?.logo ? getImageUrl(ministere()!.logo) : 'assets/images/armoirie.png'"\r
            [alt]="ministere()?.nomReel || 'Burkina Faso'"\r
            class="w-full h-full object-contain"\r
          />\r
        </div>\r
\r
        <!-- Sigle du Minist\xE8re + Burkina Faso -->\r
       <div class="hidden md:flex flex-col leading-tight max-w-xs">\r
          <span class="text-xl font-bold text-slate-900 break-words">\r
            {{ ministere()?.nomReel || 'Burkina Faso' }}\r
          </span>\r
          <span class="text-sm font-medium text-danger-500">\r
            Burkina Faso\r
          </span>\r
        </div>\r
      </a>\r
\r
      <!-- Navigation Desktop -->\r
      <nav class="hidden lg:flex items-center gap-1 ml-12"> <!-- ml-12 pour espacer le menu du logo -->\r
\r
<a (click)="goToAccueil()"\r
   class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap cursor-pointer">\r
   Accueil\r
</a>\r
        <!-- <a routerLink="/" routerLinkActive="text-primary-600" [routerLinkActiveOptions]="{exact:true}"\r
           class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap">\r
          Accueil\r
        </a>-->\r
\r
<div class="relative group">\r
  <!-- Bouton parent -->\r
  <button\r
    [ngClass]="{\r
      'text-primary-600 bg-primary-50': isMinistereActive(),\r
      'text-slate-600': !isMinistereActive()\r
    }"\r
    class="px-3 py-2 rounded-lg text-sm font-medium hover:text-primary-600 hover:bg-primary-50 flex items-center gap-1 transition-colors whitespace-nowrap">\r
    Minist\xE8re\r
    <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>\r
    </svg>\r
  </button>\r
\r
  <!-- Dropdown -->\r
  <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-md border border-slate-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">\r
    <a routerLink="/ministere/ministre"\r
       routerLinkActive="text-primary-600 bg-primary-50"\r
       [routerLinkActiveOptions]="{ exact: true }"\r
       class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
       Le Ministre\r
    </a>\r
    <a routerLink="/ministere/missions"\r
       routerLinkActive="text-primary-600 bg-primary-50"\r
       [routerLinkActiveOptions]="{ exact: true }"\r
       class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
       Missions\r
    </a>\r
    <a routerLink="/ministere/organigramme"\r
       routerLinkActive="text-primary-600 bg-primary-50"\r
       [routerLinkActiveOptions]="{ exact: true }"\r
       class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
       Organigramme\r
    </a>\r
    <a routerLink="/ministere/structures"\r
       routerLinkActive="text-primary-600 bg-primary-50"\r
       [routerLinkActiveOptions]="{ exact: true }"\r
       class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
       Structures Rattach\xE9es\r
    </a>\r
  </div>\r
</div>\r
\r
       <a \r
  (click)="goToSection('actualites'); setActive('actualites')"\r
  [ngClass]="{\r
    'text-primary-600 bg-primary-50': activeSection === 'actualites',\r
    'text-slate-600': activeSection !== 'actualites'\r
  }"\r
  class="px-3 py-2 rounded-lg text-sm font-medium hover:text-primary-600 hover:bg-primary-50 cursor-pointer">\r
  Actualit\xE9s\r
</a>\r
\r
       <!-- <a routerLink="/actualites" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap">\r
          Actualit\xE9s\r
        </a>-->\r
\r
  <a \r
  (click)="goToSection('projets')" \r
  [ngClass]="{\r
    'text-primary-600 bg-primary-50': activeSection === 'projets',\r
    'text-slate-600': activeSection !== 'projets'\r
  }"\r
  class="px-3 py-2 rounded-lg text-sm font-medium hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap cursor-pointer">\r
  Grands Chantiers\r
</a>\r
\r
        <!--<a routerLink="/projets" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap">\r
          Grands Chantiers\r
        </a>-->\r
\r
        <a routerLink="/evenements" (click)="activeSection = ''"\r
          routerLinkActive="text-primary-600 bg-primary-50" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap">\r
          Calendrier\r
        </a>\r
\r
        <div class="relative group">\r
          <!-- Bouton parent -->\r
          <button\r
            [ngClass]="{\r
              'text-primary-600 bg-primary-50': isRessourcesActive(),\r
              'text-slate-600': !isRessourcesActive()\r
            }"\r
            class="px-3 py-2 rounded-lg text-sm font-medium hover:text-primary-600 hover:bg-primary-50 flex items-center gap-1 transition-colors whitespace-nowrap">\r
            Ressources\r
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>\r
            </svg>\r
          </button>\r
\r
                <!-- Dropdown -->\r
              <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-md border border-slate-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">\r
                  <a routerLink="/ressources/documents"\r
                    routerLinkActive="text-primary-600 bg-primary-50"\r
                    [routerLinkActiveOptions]="{ exact: true }"\r
                    class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
                    R\xE8glementation\r
                  </a>\r
                  <a routerLink="/ressources/politiques"\r
                    routerLinkActive="text-primary-600 bg-primary-50"\r
                    [routerLinkActiveOptions]="{ exact: true }"\r
                    class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
                    Strat\xE9gie\r
                  </a>\r
                  <a routerLink="/faq"\r
                    routerLinkActive="text-primary-600 bg-primary-50"\r
                    [routerLinkActiveOptions]="{ exact: true }"\r
                    class="block px-4 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\r
                    FAQ\r
                  </a>\r
                </div>\r
        </div>\r
\r
        <a \r
          routerLink="/contact"\r
          (click)="activeSection = ''"\r
          routerLinkActive="text-primary-600 bg-primary-50"\r
          class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap">\r
          Contact\r
        </a>\r
\r
       <!--  <a routerLink="/contact" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap">\r
          Contact\r
        </a>-->\r
      </nav>\r
\r
      <!-- Actions -->\r
      <div class="flex items-center gap-2 ml-6">\r
        <button (click)="toggleSearch()" class="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
          </svg>\r
        </button>\r
        <a routerLink="/admin" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors" style="background-color: #00843B;">\r
          Administration\r
        </a>\r
        <button (click)="toggleMobileMenu()" class="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">\r
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path *ngIf="mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>\r
            <path *ngIf="!mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</header>\r
` }]
  }], () => [{ type: Router }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }], onScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layouts/public/header/header.component.ts", lineNumber: 18 });
})();

// src/app/layouts/public/footers/footers.component.ts
var FootersComponent = class _FootersComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FootersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FootersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FootersComponent, selectors: [["app-footers"]], decls: 119, vars: 1, consts: [[1, "bg-[#00843B]", "text-white"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-4", "gap-8"], [1, "flex", "items-center", "gap-4", "mb-4"], ["src", "assets/images/armoirie.png", "alt", "Logo MTDPCE", 1, "w-24", "h-24", "object-contain"], [1, "flex", "flex-col"], [1, "font-bold", "text-white", "text-2xl"], [1, "text-sm", "font-medium", 2, "color", "#D9776C"], [1, "text-white/80", "text-sm", "leading-relaxed"], [1, "font-bold", "text-lg", "text-white", "uppercase", "mb-6", "tracking-wide"], [1, "space-y-3"], [1, "flex", "items-center", "gap-2"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-white/80", "flex-shrink-0"], ["d", "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"], ["routerLink", "/", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["routerLink", "/ministere/ministre", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["routerLink", "/actualites", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["routerLink", "/projets", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["routerLink", "/documents", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["routerLink", "/contact", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["href", "https://www.presidence.gov.bf", "target", "_blank", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["href", "https://www.gouvernement.gov.bf", "target", "_blank", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["href", "https://www.an.bf", "target", "_blank", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["href", "https://www.sig.gov.bf", "target", "_blank", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["href", "https://www.anptic.gov.bf", "target", "_blank", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], ["href", "https://www.service-public.gov.bf", "target", "_blank", 1, "text-sm", "text-white/80", "hover:text-white", "transition-colors"], [1, "text-sm", "text-white/80", "mb-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-3"], ["type", "email", "placeholder", "Votre email", "required", "", 1, "w-full", "sm:flex-1", "px-4", "py-2", "rounded-lg", "border", "border-white/30", "bg-white/10", "text-white", "placeholder-white/60", "focus:outline-none", "focus:ring-2", "focus:ring-white/50", "focus:border-white"], ["type", "submit", 1, "px-6", "py-2", "bg-white", "text-[#00843B]", "font-semibold", "rounded-lg", "hover:bg-white/90", "transition-colors"], [1, "flex", "items-center", "gap-3", "mt-6"], ["href", "https://facebook.com", "target", "_blank", 1, "w-9", "h-9", "bg-white/20", "hover:bg-white", "text-white", "hover:text-[#00843B]", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"], ["href", "https://twitter.com", "target", "_blank", 1, "w-9", "h-9", "bg-white/20", "hover:bg-white", "text-white", "hover:text-[#00843B]", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["d", "M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"], ["href", "https://youtube.com", "target", "_blank", 1, "w-9", "h-9", "bg-white/20", "hover:bg-white", "text-white", "hover:text-[#00843B]", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["d", "M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"], ["href", "https://linkedin.com", "target", "_blank", 1, "w-9", "h-9", "bg-white/20", "hover:bg-white", "text-white", "hover:text-[#00843B]", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], [1, "border-t", "border-slate-200", "bg-white"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-4"], [1, "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-4", "text-sm", "text-slate-500"], ["href", "#", 1, "hover:text-primary-600", "transition-colors"]], template: function FootersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3);
      \u0275\u0275domElement(5, "img", 4);
      \u0275\u0275domElementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8, "Ministere de la justice");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 7);
      \u0275\u0275text(10, "Burkina Faso");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(11, "p", 8);
      \u0275\u0275text(12, " Minist\xE8re de la Justice et des Droits Humains du Burkina Faso. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div")(14, "h4", 9);
      \u0275\u0275text(15, "Liens rapides");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "ul", 10)(17, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(18, "svg", 12);
      \u0275\u0275domElement(19, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(20, "a", 14);
      \u0275\u0275text(21, "Accueil");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(23, "svg", 12);
      \u0275\u0275domElement(24, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(25, "a", 15);
      \u0275\u0275text(26, "Le Ministre");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(28, "svg", 12);
      \u0275\u0275domElement(29, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(30, "a", 16);
      \u0275\u0275text(31, "Actualit\xE9s");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(33, "svg", 12);
      \u0275\u0275domElement(34, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(35, "a", 17);
      \u0275\u0275text(36, "Projets et Programmes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(38, "svg", 12);
      \u0275\u0275domElement(39, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(40, "a", 18);
      \u0275\u0275text(41, "Documents");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(43, "svg", 12);
      \u0275\u0275domElement(44, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(45, "a", 19);
      \u0275\u0275text(46, "Contact");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(47, "div")(48, "h4", 9);
      \u0275\u0275text(49, "Annuaire officiel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "ul", 10)(51, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(52, "svg", 12);
      \u0275\u0275domElement(53, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(54, "a", 20);
      \u0275\u0275text(55, "Pr\xE9sidence du Faso");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(56, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(57, "svg", 12);
      \u0275\u0275domElement(58, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(59, "a", 21);
      \u0275\u0275text(60, "Gouvernement");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(61, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(62, "svg", 12);
      \u0275\u0275domElement(63, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(64, "a", 22);
      \u0275\u0275text(65, "Assembl\xE9e Nationale");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(66, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(67, "svg", 12);
      \u0275\u0275domElement(68, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(69, "a", 23);
      \u0275\u0275text(70, "SIG");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(71, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(72, "svg", 12);
      \u0275\u0275domElement(73, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(74, "a", 24);
      \u0275\u0275text(75, "ANPTIC");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "li", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(77, "svg", 12);
      \u0275\u0275domElement(78, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(79, "a", 25);
      \u0275\u0275text(80, "Service Public");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(81, "div")(82, "h4", 9);
      \u0275\u0275text(83, "Newsletter");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "p", 26);
      \u0275\u0275text(85, " Restez inform\xE9 des derni\xE8res actualit\xE9s et projets du MTDPCE. Inscrivez votre email ci-dessous : ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "form", 27);
      \u0275\u0275domElement(87, "input", 28);
      \u0275\u0275domElementStart(88, "button", 29);
      \u0275\u0275text(89, " S\u2019abonner ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(90, "div", 30)(91, "a", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(92, "svg", 32);
      \u0275\u0275domElement(93, "path", 33);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(94, "a", 34);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(95, "svg", 32);
      \u0275\u0275domElement(96, "path", 35);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(97, "a", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(98, "svg", 32);
      \u0275\u0275domElement(99, "path", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(100, "a", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(101, "svg", 32);
      \u0275\u0275domElement(102, "path", 39);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(103, "div", 40)(104, "div", 41)(105, "div", 42)(106, "p", 43);
      \u0275\u0275text(107);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(108, "div", 44)(109, "a", 45);
      \u0275\u0275text(110, "Mentions l\xE9gales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "span");
      \u0275\u0275text(112, "\u2022");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(113, "a", 45);
      \u0275\u0275text(114, "Politique de confidentialit\xE9");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "span");
      \u0275\u0275text(116, "\u2022");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "a", 45);
      \u0275\u0275text(118, "Plan du site");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(107);
      \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " MTDPCE Burkina Faso. Tous droits r\xE9serv\xE9s. ");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FootersComponent, [{
    type: Component,
    args: [{ selector: "app-footers", standalone: true, imports: [CommonModule], template: '<footer class="bg-[#00843B] text-white">\r\n  <!-- Contenu principal -->\r\n  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">\r\n    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">\r\n      <!-- \xC0 propos -->\r\n      <!-- \xC0 propos modernis\xE9 -->\r\n<!-- \xC0 propos simplifi\xE9 -->\r\n <!-- \xC0 propos avec logo agrandi -->\r\n        <div>\r\n            <div class="flex items-center gap-4 mb-4">\r\n                <!-- Logo blanc tr\xE8s grand -->\r\n                <img src="assets/images/armoirie.png" alt="Logo MTDPCE" class="w-24 h-24 object-contain">\r\n\r\n                <!-- Nom du minist\xE8re -->\r\n                <div class="flex flex-col">\r\n                <span class="font-bold text-white text-2xl">Ministere de la justice</span>\r\n                 <span class="text-sm font-medium" style="color: #D9776C;">Burkina Faso</span>\r\n       \r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Description -->\r\n            <p class="text-white/80 text-sm leading-relaxed">\r\n                Minist\xE8re de la Justice et des Droits Humains du Burkina Faso.\r\n            </p>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n      <!-- Liens rapides -->\r\n        <div>\r\n        <h4 class="font-bold text-lg text-white uppercase mb-6 tracking-wide">Liens rapides</h4>\r\n        <ul class="space-y-3">\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a routerLink="/" class="text-sm text-white/80 hover:text-white transition-colors">Accueil</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a routerLink="/ministere/ministre" class="text-sm text-white/80 hover:text-white transition-colors">Le Ministre</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a routerLink="/actualites" class="text-sm text-white/80 hover:text-white transition-colors">Actualit\xE9s</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a routerLink="/projets" class="text-sm text-white/80 hover:text-white transition-colors">Projets et Programmes</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a routerLink="/documents" class="text-sm text-white/80 hover:text-white transition-colors">Documents</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a routerLink="/contact" class="text-sm text-white/80 hover:text-white transition-colors">Contact</a>\r\n            </li>\r\n        </ul>\r\n        </div>\r\n\r\n\r\n      <!-- Annuaire officiel -->\r\n        <div>\r\n        <h4 class="font-bold text-lg text-white uppercase mb-6 tracking-wide">Annuaire officiel</h4>\r\n        <ul class="space-y-3">\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a href="https://www.presidence.gov.bf" target="_blank" class="text-sm text-white/80 hover:text-white transition-colors">Pr\xE9sidence du Faso</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a href="https://www.gouvernement.gov.bf" target="_blank" class="text-sm text-white/80 hover:text-white transition-colors">Gouvernement</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a href="https://www.an.bf" target="_blank" class="text-sm text-white/80 hover:text-white transition-colors">Assembl\xE9e Nationale</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a href="https://www.sig.gov.bf" target="_blank" class="text-sm text-white/80 hover:text-white transition-colors">SIG</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a href="https://www.anptic.gov.bf" target="_blank" class="text-sm text-white/80 hover:text-white transition-colors">ANPTIC</a>\r\n            </li>\r\n            <li class="flex items-center gap-2">\r\n            <svg class="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r\n                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>\r\n            </svg>\r\n            <a href="https://www.service-public.gov.bf" target="_blank" class="text-sm text-white/80 hover:text-white transition-colors">Service Public</a>\r\n            </li>\r\n        </ul>\r\n        </div>\r\n\r\n\r\n      <!-- Contact -->\r\n      <div>\r\n        <h4 class="font-bold text-lg text-white uppercase mb-6 tracking-wide">Newsletter</h4>\r\n  <p class="text-sm text-white/80 mb-4">\r\n    Restez inform\xE9 des derni\xE8res actualit\xE9s et projets du MTDPCE. Inscrivez votre email ci-dessous :\r\n  </p>\r\n  <form class="flex flex-col sm:flex-row gap-3">\r\n    <input \r\n      type="email" \r\n      placeholder="Votre email" \r\n      class="w-full sm:flex-1 px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white"\r\n      required\r\n    />\r\n    <button \r\n      type="submit" \r\n      class="px-6 py-2 bg-white text-[#00843B] font-semibold rounded-lg hover:bg-white/90 transition-colors"\r\n    >\r\n      S\u2019abonner\r\n    </button>\r\n  </form>\r\n\r\n        <!-- R\xE9seaux sociaux -->\r\n        <div class="flex items-center gap-3 mt-6">\r\n          <a href="https://facebook.com" target="_blank" class="w-9 h-9 bg-white/20 hover:bg-white text-white hover:text-[#00843B] rounded-lg flex items-center justify-center transition-colors">\r\n            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>\r\n          </a>\r\n          <a href="https://twitter.com" target="_blank" class="w-9 h-9 bg-white/20 hover:bg-white text-white hover:text-[#00843B] rounded-lg flex items-center justify-center transition-colors">\r\n            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"/></svg>\r\n          </a>\r\n          <a href="https://youtube.com" target="_blank" class="w-9 h-9 bg-white/20 hover:bg-white text-white hover:text-[#00843B] rounded-lg flex items-center justify-center transition-colors">\r\n            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"/></svg>\r\n          </a>\r\n          <a href="https://linkedin.com" target="_blank" class="w-9 h-9 bg-white/20 hover:bg-white text-white hover:text-[#00843B] rounded-lg flex items-center justify-center transition-colors">\r\n            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>\r\n          </a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Copyright -->\r\n  <!-- Copyright -->\r\n      <div class="border-t border-slate-200 bg-white">\r\n        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">\r\n          <div class="flex flex-col md:flex-row items-center justify-between gap-4">\r\n            <p class="text-sm text-slate-500">\r\n              \xA9 {{ currentYear }} MTDPCE Burkina Faso. Tous droits r\xE9serv\xE9s.\r\n            </p>\r\n            <div class="flex items-center gap-4 text-sm text-slate-500">\r\n              <a href="#" class="hover:text-primary-600 transition-colors">Mentions l\xE9gales</a>\r\n              <span>\u2022</span>\r\n              <a href="#" class="hover:text-primary-600 transition-colors">Politique de confidentialit\xE9</a>\r\n              <span>\u2022</span>\r\n              <a href="#" class="hover:text-primary-600 transition-colors">Plan du site</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</footer>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FootersComponent, { className: "FootersComponent", filePath: "src/app/layouts/public/footers/footers.component.ts", lineNumber: 11 });
})();

// src/app/layouts/public/public-layout.component.ts
var PublicLayoutComponent = class _PublicLayoutComponent {
  static \u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 5, vars: 0, consts: [[1, "min-h-screen", "flex", "flex-col"], [1, "flex-1"]], template: function PublicLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footers");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, HeaderComponent, FootersComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLayoutComponent, [{
    type: Component,
    args: [{
      selector: "app-public-layout",
      standalone: true,
      imports: [CommonModule, RouterModule, HeaderComponent, FootersComponent],
      template: `
    <div class="min-h-screen flex flex-col">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footers />
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "src/app/layouts/public/public-layout.component.ts", lineNumber: 23 });
})();
export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-GGZTA5VO.js.map
