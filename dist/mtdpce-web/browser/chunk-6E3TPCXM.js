import {
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
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/events/evenements/evenements.component.ts
var _c0 = (a0) => ["/events", a0];
var _forTrack0 = ($index, $item) => $item.id;
function EvenementsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Chargement des \xE9v\xE9nements...");
    \u0275\u0275elementEnd()();
  }
}
function EvenementsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 16);
    \u0275\u0275text(4, "Aucun \xE9v\xE9nement trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function EvenementsComponent_Conditional_22_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, " En ligne ");
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_22_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Gratuit ");
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_22_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 34)(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r1.location);
  }
}
function EvenementsComponent_Conditional_22_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", event_r1.maxParticipants, " places");
  }
}
function EvenementsComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22)(9, "div", 23)(10, "div", 24)(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, EvenementsComponent_Conditional_22_For_2_Conditional_13_Template, 2, 0, "span", 26);
    \u0275\u0275conditionalCreate(14, EvenementsComponent_Conditional_22_For_2_Conditional_14_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h3", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 29);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 30)(20, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 32);
    \u0275\u0275element(22, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, EvenementsComponent_Conditional_22_For_2_Conditional_25_Template, 6, 1, "div", 31);
    \u0275\u0275conditionalCreate(26, EvenementsComponent_Conditional_22_For_2_Conditional_26_Template, 5, 1, "div", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, event_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDay(event_r1.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getMonth(event_r1.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getYear(event_r1.startDate));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getStatusClass(event_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(event_r1.statut), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.isOnline ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.isFree ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.formatDate(event_r1.startDate), " - ", ctx_r1.formatDate(event_r1.endDate));
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.location ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.maxParticipants ? 26 : -1);
  }
}
function EvenementsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, EvenementsComponent_Conditional_22_For_2_Template, 27, 17, "div", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredEvents());
  }
}
var EvenementsComponent = class _EvenementsComponent {
  apiService;
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
  filteredEvents = signal([], ...ngDevMode ? [{ debugName: "filteredEvents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedStatus = "all";
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  pageSize = 4;
  searchQuery = "";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadEvents();
  }
  loadEvents() {
    this.loading.set(true);
    this.apiService.getPublicEvents().subscribe({
      next: (response) => {
        console.log(response);
        const eventsList = response.content || [];
        this.events.set(eventsList);
        this.filteredEvents.set(eventsList);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  filterByStatus(status) {
    this.selectedStatus = status;
    if (status === "all") {
      this.filteredEvents.set(this.events());
    } else {
      this.filteredEvents.set(this.events().filter((e) => e.statut === status));
    }
  }
  getDay(dateStr) {
    return new Date(dateStr).getDate().toString().padStart(2, "0");
  }
  getMonth(dateStr) {
    const months = ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Juin", "Juil", "Ao\xFBt", "Sep", "Oct", "Nov", "D\xE9c"];
    return months[new Date(dateStr).getMonth()];
  }
  getYear(dateStr) {
    return new Date(dateStr).getFullYear().toString();
  }
  formatTime(dateStr) {
    return new Date(dateStr).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  getStatusClass(status) {
    switch (status) {
      case "UPCOMING":
        return "bg-blue-100 text-blue-700";
      case "ONGOING":
        return "bg-green-100 text-green-700";
      case "COMPLETED":
        return "bg-gray-100 text-gray-700";
      case "CANCELLED":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "UPCOMING":
        return "\xC0 venir";
      case "ONGOING":
        return "En cours";
      case "COMPLETED":
        return "Termin\xE9";
      case "CANCELLED":
        return "Annul\xE9";
      default:
        return status;
    }
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  static \u0275fac = function EvenementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvenementsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvenementsComponent, selectors: [["app-evenements"]], decls: 23, vars: 13, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", 2, "color", "white"], [1, "text-xl", "text-emerald-100"], [1, "py-6", "bg-white", "shadow-sm"], [1, "flex", "gap-4"], [1, "px-6", "py-2", "rounded-lg", "font-medium", "transition-colors", 3, "click", "ngClass"], [1, "py-12"], [1, "text-center", "py-12"], [1, "text-center", "py-12", "bg-white", "rounded-xl", "shadow-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-emerald-600", "mx-auto"], [1, "mt-4", "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-gray-500", "text-lg"], [1, "bg-white", "rounded-xl", "shadow-sm", "overflow-hidden", "hover:shadow-md", "transition-shadow", "flex", "cursor-pointer", "transition-all", "duration-300", "hover:shadow-xl", "hover:scale-[1.02]", 3, "routerLink"], [1, "w-32", "bg-[#E30613]", "text-white", "flex", "flex-col", "items-center", "justify-center", "text-center", "p-6"], [1, "text-3xl", "font-bold"], [1, "text-sm", "uppercase"], [1, "text-sm"], [1, "flex-1", "p-6"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-medium"], [1, "px-3", "py-1", "bg-blue-100", "text-blue-700", "rounded-full", "text-xs", "font-medium"], [1, "px-3", "py-1", "bg-green-100", "text-green-700", "rounded-full", "text-xs", "font-medium"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600", "mb-4", "line-clamp-2"], [1, "flex", "flex-wrap", "gap-4", "text-sm", "text-gray-500"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"]], template: function EvenementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Agenda des \xC9v\xE9nements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "D\xE9couvrez les \xE9v\xE9nements organis\xE9s par le minist\xE8re");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 5)(8, "div", 2)(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function EvenementsComponent_Template_button_click_10_listener() {
        return ctx.filterByStatus("all");
      });
      \u0275\u0275text(11, " Tous ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function EvenementsComponent_Template_button_click_12_listener() {
        return ctx.filterByStatus("UPCOMING");
      });
      \u0275\u0275text(13, " \xC0 venir ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function EvenementsComponent_Template_button_click_14_listener() {
        return ctx.filterByStatus("ONGOING");
      });
      \u0275\u0275text(15, " En cours ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 7);
      \u0275\u0275listener("click", function EvenementsComponent_Template_button_click_16_listener() {
        return ctx.filterByStatus("COMPLETED");
      });
      \u0275\u0275text(17, " Pass\xE9s ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "section", 8)(19, "div", 2);
      \u0275\u0275conditionalCreate(20, EvenementsComponent_Conditional_20_Template, 4, 0, "div", 9)(21, EvenementsComponent_Conditional_21_Template, 5, 0, "div", 10)(22, EvenementsComponent_Conditional_22_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275styleProp("background-color", ctx.selectedStatus === "all" ? "#006B30" : "");
      \u0275\u0275property("ngClass", ctx.selectedStatus === "all" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background-color", ctx.selectedStatus === "UPCOMING" ? "#006B30" : "");
      \u0275\u0275property("ngClass", ctx.selectedStatus === "UPCOMING" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background-color", ctx.selectedStatus === "ONGOING" ? "#006B30" : "");
      \u0275\u0275property("ngClass", ctx.selectedStatus === "ONGOING" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background-color", ctx.selectedStatus === "COMPLETED" ? "#006B30" : "");
      \u0275\u0275property("ngClass", ctx.selectedStatus === "COMPLETED" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 20 : ctx.filteredEvents().length === 0 ? 21 : 22);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvenementsComponent, [{
    type: Component,
    args: [{ selector: "app-evenements", standalone: true, imports: [CommonModule, RouterModule], template: `    <div class="min-h-screen bg-gray-50">\r
      <!-- Hero Section -->\r
      <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">\r
        <div class="container mx-auto px-4">\r
          <h1 class="text-4xl font-bold mb-4" style="color: white;">Agenda des \xC9v\xE9nements</h1>\r
          <p class="text-xl text-emerald-100">D\xE9couvrez les \xE9v\xE9nements organis\xE9s par le minist\xE8re</p>\r
        </div>\r
      </section>\r
\r
      <!-- Filter Tabs -->\r
<section class="py-6 bg-white shadow-sm">\r
        <div class="container mx-auto px-4">\r
          <div class="flex gap-4">\r
\r
  <button\r
    (click)="filterByStatus('all')"\r
    [ngClass]="selectedStatus === 'all' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"\r
    class="px-6 py-2 rounded-lg font-medium transition-colors"\r
    [style.background-color]="selectedStatus === 'all' ? '#006B30' : ''"\r
  >\r
    Tous\r
  </button>\r
\r
  <button\r
    (click)="filterByStatus('UPCOMING')"\r
    [ngClass]="selectedStatus === 'UPCOMING' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"\r
    class="px-6 py-2 rounded-lg font-medium transition-colors"\r
    [style.background-color]="selectedStatus === 'UPCOMING' ? '#006B30' : ''"\r
  >\r
    \xC0 venir\r
  </button>\r
\r
  <button\r
    (click)="filterByStatus('ONGOING')"\r
    [ngClass]="selectedStatus === 'ONGOING' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"\r
    class="px-6 py-2 rounded-lg font-medium transition-colors"\r
    [style.background-color]="selectedStatus === 'ONGOING' ? '#006B30' : ''"\r
  >\r
    En cours\r
  </button>\r
\r
  <button\r
    (click)="filterByStatus('COMPLETED')"\r
    [ngClass]="selectedStatus === 'COMPLETED' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"\r
    class="px-6 py-2 rounded-lg font-medium transition-colors"\r
    [style.background-color]="selectedStatus === 'COMPLETED' ? '#006B30' : ''"\r
  >\r
    Pass\xE9s\r
  </button>\r
\r
</div>\r
\r
        </div>\r
      </section>\r
\r
<!-- Events List -->\r
<section class="py-12">\r
  <div class="container mx-auto px-4">\r
    @if (loading()) {\r
      <div class="text-center py-12">\r
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>\r
        <p class="mt-4 text-gray-600">Chargement des \xE9v\xE9nements...</p>\r
      </div>\r
    } @else if (filteredEvents().length === 0) {\r
      <div class="text-center py-12 bg-white rounded-xl shadow-sm">\r
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r
        </svg>\r
        <p class="text-gray-500 text-lg">Aucun \xE9v\xE9nement trouv\xE9</p>\r
      </div>\r
    } @else {\r
      <!-- Grid 2 colonnes -->\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        @for (event of filteredEvents(); track event.id) {\r
          <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex cursor-pointer\r
         transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" [routerLink]="['/events', event.id]">\r
            <!-- Date Badge (100% hauteur \xE0 gauche) -->\r
           <div class="w-32 bg-[#E30613] text-white flex flex-col items-center justify-center text-center p-6">\r
            <span class="text-3xl font-bold">{{ getDay(event.startDate) }}</span>\r
            <span class="text-sm uppercase">{{ getMonth(event.startDate) }}</span>\r
            <span class="text-sm">{{ getYear(event.startDate) }}</span>\r
            </div>\r
\r
            <!-- Event Content -->\r
            <div class="flex-1 p-6">\r
              <div class="flex flex-col gap-4">\r
                <div class="flex items-center gap-2 mb-2">\r
                  <span [class]="getStatusClass(event.statut)" class="px-3 py-1 rounded-full text-xs font-medium">\r
                    {{ getStatusLabel(event.statut) }}\r
                  </span>\r
                  @if (event.isOnline) {\r
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">\r
                      En ligne\r
                    </span>\r
                  }\r
                  @if (event.isFree) {\r
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">\r
                      Gratuit\r
                    </span>\r
                  }\r
                </div>\r
\r
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ event.title }}</h3>\r
                <p class="text-gray-600 mb-4 line-clamp-2">{{ event.description }}</p>\r
\r
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">\r
                  <div class="flex items-center gap-1">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>\r
                    </svg>\r
                    <span>{{ formatDate(event.startDate) }} - {{ formatDate(event.endDate) }}</span>\r
                  </div>\r
                  @if (event.location) {\r
                    <div class="flex items-center gap-1">\r
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>\r
                      </svg>\r
                      <span>{{ event.location }}</span>\r
                    </div>\r
                  }\r
                  @if (event.maxParticipants) {\r
                    <div class="flex items-center gap-1">\r
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>\r
                      </svg>\r
                      <span>{{ event.maxParticipants }} places</span>\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
\r
    }\r
  </div>\r
</section>\r
    </div>` }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvenementsComponent, { className: "EvenementsComponent", filePath: "src/app/features/events/evenements/evenements.component.ts", lineNumber: 14 });
})();
export {
  EvenementsComponent
};
//# sourceMappingURL=chunk-6E3TPCXM.js.map
