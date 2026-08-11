import {
  Router,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IZU5KOS7.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
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
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/admin/evenements/evenements.component.ts
var _c0 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c1 = () => ({});
var _c2 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function EvenementsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "Aucun Ev\xE8nement pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function EvenementsComponent_Conditional_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 24)(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 28)(17, "div", 29)(18, "button", 30);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_14_For_18_Template_button_click_18_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 31);
    \u0275\u0275element(20, "path", 32)(21, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 34);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_14_For_18_Template_button_click_22_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 35);
    \u0275\u0275element(24, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 37);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_14_For_18_Template_button_click_25_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 38);
    \u0275\u0275element(27, "path", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const article_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getStatusClass(article_r3.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getStatusLabel(article_r3.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.formatDate(article_r3.startDate), " - ", ctx_r3.formatDate(article_r3.endDate));
  }
}
function EvenementsComponent_Conditional_14_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 40);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_14_ng_container_22_Template_button_click_1_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.currentPage() === page_r6 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r3.currentPage() === page_r6 ? \u0275\u0275pureFunction0(3, _c0) : \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r6, " ");
  }
}
function EvenementsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Localit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 20);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, EvenementsComponent_Conditional_14_For_18_Template, 28, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 21)(20, "button", 22);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_14_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(21, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EvenementsComponent_Conditional_14_ng_container_22_Template, 3, 5, "ng-container", 23);
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_14_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(24, " Suivant \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r3.articles());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function EvenementsComponent_Conditional_15_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1, " Le titre est obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_15_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1, " Le contenu est obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_15_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function EvenementsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 41)(2, "div", 42)(3, "h2", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 44, 0);
    \u0275\u0275listener("ngSubmit", function EvenementsComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveArticle());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 45);
    \u0275\u0275text(9, "Titre ");
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 47, 1);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.title, $event) || (ctx_r3.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EvenementsComponent_Conditional_15_p_14_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 45);
    \u0275\u0275text(17, "r\xE9sum\xE9 ");
    \u0275\u0275elementStart(18, "span", 46);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "textarea", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.description, $event) || (ctx_r3.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 45);
    \u0275\u0275text(23, "Contenu ");
    \u0275\u0275elementStart(24, "span", 46);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "textarea", 50, 2);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.content, $event) || (ctx_r3.form.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, EvenementsComponent_Conditional_15_p_28_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 51)(30, "div")(31, "label", 45);
    \u0275\u0275text(32, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 52, 1);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.category, $event) || (ctx_r3.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "label", 45);
    \u0275\u0275text(37, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.statut, $event) || (ctx_r3.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 54);
    \u0275\u0275text(40, "\xC0 venir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 55);
    \u0275\u0275text(42, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 56);
    \u0275\u0275text(44, "Termin\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 57);
    \u0275\u0275text(46, "Annul\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 51)(48, "div")(49, "label", 45);
    \u0275\u0275text(50, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.startDate, $event) || (ctx_r3.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div")(53, "label", 45);
    \u0275\u0275text(54, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.endDate, $event) || (ctx_r3.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 51)(57, "div")(58, "label", 45);
    \u0275\u0275text(59, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.location, $event) || (ctx_r3.form.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "label", 45);
    \u0275\u0275text(63, "Nombre de Place Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.maxParticipants, $event) || (ctx_r3.form.maxParticipants = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div")(66, "label", 45);
    \u0275\u0275text(67, "Image mise en avant ");
    \u0275\u0275elementStart(68, "span", 46);
    \u0275\u0275text(69, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "input", 62);
    \u0275\u0275listener("change", function EvenementsComponent_Conditional_15_Template_input_change_70_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 63)(72, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function EvenementsComponent_Conditional_15_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.isPublic, $event) || (ctx_r3.form.isPublic = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "label", 65);
    \u0275\u0275text(74, "Rendre Public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 66)(76, "button", 67);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_15_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(77, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 68);
    \u0275\u0275conditionalCreate(79, EvenementsComponent_Conditional_15_Conditional_79_Template, 1, 0, "div", 69);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const title_r8 = \u0275\u0275reference(13);
    const content_r9 = \u0275\u0275reference(27);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingArticle() ? "Modifier l'\xE9v\xE8nement" : "Nouvel \xE9v\xE8nement", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", title_r8.invalid && title_r8.touched);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.description);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.content);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", content_r9.invalid && content_r9.touched);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.category);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.statut);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.endDate);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.maxParticipants);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.isPublic);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingArticle() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function EvenementsComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 75);
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 76);
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 77);
    \u0275\u0275elementEnd();
  }
}
function EvenementsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 71);
    \u0275\u0275template(2, EvenementsComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 72)(3, EvenementsComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 72)(4, EvenementsComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 72);
    \u0275\u0275elementStart(5, "span", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c2, ctx_r3.notification().type === "success", ctx_r3.notification().type === "error", ctx_r3.notification().type === "info"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.notification().message);
  }
}
function EvenementsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 78)(2, "h3", 79);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 81)(7, "button", 82);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 83);
    \u0275\u0275listener("click", function EvenementsComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmModal().onConfirm());
    });
    \u0275\u0275text(10, " Supprimer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.confirmModal().message);
  }
}
var EvenementsComponent = class _EvenementsComponent {
  apiService;
  router;
  // ---------------- NOTIFICATION MODAL ----------------
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingArticle = signal(null, ...ngDevMode ? [{ debugName: "editingArticle" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  selectedImage = null;
  selectedImages = [];
  fileError = false;
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = {
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    category: "",
    statut: "UPCOMING",
    location: "",
    content: "",
    isPublic: false,
    maxParticipants: 0,
    currentParticipants: 0
  };
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
  }
  ngOnInit() {
    this.loadevents();
  }
  loadevents(page = 0) {
    this.loading.set(true);
    this.apiService.getAllEvents(page, this.pageSize).subscribe({
      next: (response) => {
        this.articles.set(response.content);
        this.totalPages.set(response.totalPages);
        this.currentPage.set(page + 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadevents(this.currentPage());
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadevents(this.currentPage() - 2);
    }
  }
  goToPage(page) {
    this.loadevents(page - 1);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
  openModal() {
    this.form = {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      content: "",
      category: "",
      statut: "UPCOMING",
      location: "",
      isPublic: false,
      maxParticipants: 0,
      currentParticipants: 0
    };
    this.selectedImage = null;
    this.fileError = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  closeModal(form) {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedImage = null;
    this.fileError = false;
    form?.resetForm();
  }
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      this.selectedImages = [];
      return;
    }
    this.selectedImages = Array.from(input.files);
    this.fileError = false;
  }
  // Fonction viewArticle
  viewArticle(article) {
    this.router.navigate([`/admin/evenement`, article.id]);
  }
  editArticle(article) {
    this.form = {
      title: article.title,
      description: article.description,
      startDate: article.startDate,
      endDate: article.endDate,
      content: article.content,
      category: article.category,
      statut: article.statut,
      location: article.location,
      isPublic: article.isPublic,
      maxParticipants: article.maxParticipants,
      currentParticipants: article.currentParticipants
    };
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  saveArticle(form) {
    if (!this.form.title || !this.form.description)
      return;
    if (!this.editingArticle() && (!this.selectedImages || this.selectedImages.length === 0)) {
      this.fileError = true;
      return;
    }
    this.saving.set(true);
    const editing = this.editingArticle();
    const articleDTO = {
      title: this.form.title,
      content: this.form.content,
      description: this.form.description,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      category: this.form.category,
      statut: this.form.statut,
      location: this.form.location,
      isPublic: this.form.isPublic,
      maxParticipants: this.form.maxParticipants,
      currentParticipants: this.form.currentParticipants
    };
    const formData = new FormData();
    formData.append("evenement", new Blob([JSON.stringify(articleDTO)], { type: "application/json" }));
    this.selectedImages.forEach((file) => {
      formData.append("file", file);
    });
    const request = editing ? this.apiService.updateEvent(editing.id, formData) : this.apiService.createEvent(formData);
    request.subscribe({
      next: (response) => {
        this.loadevents();
        this.closeModal(form);
        this.saving.set(false);
        this.showNotification(editing ? "Article mis \xE0 jour avec succ\xE8s" : "Article cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
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
  // ----------------- HELPERS -----------------
  trackByArticleId(index, article) {
    return article.id;
  }
  // ----------------- NOTIFICATIONS -----------------
  showNotification(message, type = "success", duration = 2e3) {
    this.notification.set({ show: true, message, type });
    setTimeout(() => this.notification.update((n) => __spreadProps(__spreadValues({}, n), { show: false })), duration);
  }
  // ----------------- CONFIRMATION MODAL -----------------
  confirmModal = signal({
    show: false,
    message: "",
    onConfirm: () => {
    }
  }, ...ngDevMode ? [{ debugName: "confirmModal" }] : []);
  openConfirmModal(message, onConfirm) {
    this.confirmModal.set({ show: true, message, onConfirm });
  }
  closeConfirmModal() {
    this.confirmModal.update((c) => __spreadProps(__spreadValues({}, c), { show: false }));
  }
  deleteArticle(article) {
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
      this.apiService.deleteEvent(article.id).subscribe({
        next: () => {
          this.loadevents();
          this.closeConfirmModal();
          this.showNotification("Article supprim\xE9 avec succ\xE8s", "success");
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  static \u0275fac = function EvenementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvenementsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvenementsComponent, selectors: [["app-evenements"]], decls: 18, vars: 4, consts: [["articleForm", "ngForm"], ["title", "ngModel"], ["content", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "table"], [1, "text-right"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "text-xs", "text-neutral-400", "truncate"], [1, "text-sm", "text-neutral-500"], [1, "px-6", "py-4", "text-right"], [1, "flex", "justify-end", "gap-2"], ["title", "Voir l'article", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-blue-500", "rounded-full", "bg-white", "hover:bg-blue-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], ["novalidate", "", 1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-red-500"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["name", "description", "rows", "2", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], ["name", "content", "rows", "6", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "text", "name", "category", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "statut", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "UPCOMING"], ["value", "ONGOING"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["type", "datetime-local", "name", "startDate", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", "name", "endDate", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "location", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "maxParticipants", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "file", "multiple", "", "accept", "image/*", 1, "input", 3, "change"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "name", "isPublic", "id", "isPublic", 1, "rounded", "border-neutral-300", "text-primary-500", "focus:ring-primary-500", 3, "ngModelChange", "ngModel"], ["for", "featured", 1, "text-sm", "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "rounded-lg", "bg-[#00843B]", "text-white", "hover:bg-[#006830]", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], [1, "text-sm", "text-red-500", "mt-1"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function EvenementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5);
      \u0275\u0275text(4, "Ev\xE8nements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 6);
      \u0275\u0275text(6, "G\xE9rez les \xE9v\xE8nements ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function EvenementsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel Ev\xE8nement ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275conditionalCreate(12, EvenementsComponent_Conditional_12_Template, 2, 0, "div", 11)(13, EvenementsComponent_Conditional_13_Template, 5, 0, "div", 11)(14, EvenementsComponent_Conditional_14_Template, 25, 3, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, EvenementsComponent_Conditional_15_Template, 81, 16, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, EvenementsComponent_Conditional_16_Template, 7, 9, "div", 14);
      \u0275\u0275conditionalCreate(17, EvenementsComponent_Conditional_17_Template, 11, 1, "div", 15);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.articles().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvenementsComponent, [{
    type: Component,
    args: [{ selector: "app-evenements", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `  <div class="space-y-6">\r
      <!-- Header -->\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Ev\xE8nements</h1>\r
          <p class="text-neutral-500">G\xE9rez les \xE9v\xE8nements </p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouvel Ev\xE8nement\r
        </button>\r
      </div>\r
      \r
      <!-- Table -->\r
      <div class="card p-0">\r
        @if (loading()) {\r
          <div class="p-8 text-center">\r
            <div class="spinner w-8 h-8 mx-auto"></div>\r
          </div>\r
        } @else if (articles().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun Ev\xE8nement pour le moment</p>\r
          </div>\r
        } @else {\r
          <div class="table-container">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>Titre</th>\r
                  <th>Cat\xE9gorie</th>\r
                  <th>Statut</th>\r
                  <th>Localit\xE9</th>\r
                  <th>P\xE9riode</th>\r
                  <th class="text-right">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (article of articles(); track article.id) {\r
                  <tr>\r
                    <td>\r
                      <div class="max-w-xs">\r
                        <p class="font-medium text-neutral-900 truncate">{{ article.title }}</p>\r
                        <p class="text-xs text-neutral-400 truncate">{{ article.description }}</p>\r
                      </div>\r
                    </td>\r
                    <td class="font-medium text-neutral-900 truncate">{{ article.category }}</td>\r
                     <td><span [class]="getStatusClass(article.statut)">{{ getStatusLabel(article.statut) }}</span></td>\r
                    <td>{{ article.location }}</td>\r
                    <td class="text-sm text-neutral-500">{{ formatDate(article.startDate) }} - {{ formatDate(article.endDate) }}</td>\r
                    <td class="px-6 py-4 text-right">\r
                      <div class="flex justify-end gap-2">\r
\r
                        <button (click)="viewArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-blue-500 rounded-full bg-white hover:bg-blue-50 transition-colors"\r
                                title="Voir l'article">\r
                          <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <!-- Modifier -->\r
                        <button (click)="editArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition-colors"\r
                                title="Modifier">\r
                          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <!-- Supprimer -->\r
                        <button (click)="deleteArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"\r
                                title="Supprimer">\r
                          <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                          </svg>\r
                        </button>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
\r
          <!-- Pagination int\xE9gr\xE9e au tableau avec couleur #00843B -->\r
          <div class="flex justify-end items-center mt-2 px-6 py-2 gap-2 border-t border-gray-200 bg-gray-50 rounded-b-lg">\r
          <!-- Bouton pr\xE9c\xE9dent -->\r
          <button (click)="prevPage()" \r
                  [disabled]="currentPage() === 1"\r
                  class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              &laquo; Pr\xE9c\xE9dent\r
          </button>\r
\r
          <!-- Pages num\xE9rot\xE9es -->\r
          <ng-container *ngFor="let page of pages()">\r
              <button (click)="goToPage(page)"\r
                      [ngClass]="currentPage() === page\r
                              ? 'px-3 py-1 border rounded text-white' \r
                              : 'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors'"\r
                      [ngStyle]="currentPage() === page ? {'background-color':'#00843B', 'border-color':'#00843B'} : {}">\r
              {{ page }}\r
              </button>\r
          </ng-container>\r
\r
          <!-- Bouton suivant -->\r
          <button (click)="nextPage()" \r
                  [disabled]="currentPage() === totalPages()"\r
                  class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              Suivant &raquo;\r
          </button>\r
          </div>\r
\r
            \r
          </div>\r
        }\r
      </div>\r
      \r
      \r
      <!-- Modal -->\r
      @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
              <h2 class="text-xl font-semibold text-neutral-900">\r
              {{ editingArticle() ? "Modifier l'\xE9v\xE8nement" : 'Nouvel \xE9v\xE8nement' }}\r
            </h2>\r
\r
            </div>\r
            \r
            <form #articleForm="ngForm" (ngSubmit)="saveArticle()"  class="p-6 space-y-5" novalidate>\r
              <div>\r
                <label class="label">Titre <span class="text-red-500">*</span></label>\r
\r
                <input type="text"\r
                      [(ngModel)]="form.title"\r
                      name="title"\r
                      #title="ngModel"\r
                      class="input"\r
                      required>\r
\r
                <p *ngIf="title.invalid && title.touched"\r
                  class="text-sm text-red-500 mt-1">\r
                  Le titre est obligatoire\r
                </p>\r
              </div>\r
\r
              \r
              <div>\r
                <label class="label">r\xE9sum\xE9  <span class="text-red-500">*</span></label>\r
                <textarea [(ngModel)]="form.description" name="description" rows="2" class="input resize-none"></textarea>\r
              </div>\r
\r
              <div>\r
                <label class="label">Contenu <span class="text-red-500">*</span></label>\r
\r
                <textarea [(ngModel)]="form.content"\r
                          name="content"\r
                          #content="ngModel"\r
                          rows="6"\r
                          class="input resize-none"\r
                          required></textarea>\r
\r
                <p *ngIf="content.invalid && content.touched"\r
                  class="text-sm text-red-500 mt-1">\r
                  Le contenu est obligatoire\r
                </p>\r
              </div>\r
              \r
             \r
\r
              \r
              <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                <label class="label">Cat\xE9gorie</label>\r
                <input type="text"\r
                      [(ngModel)]="form.category"\r
                      name="category"\r
                      #title="ngModel"\r
                      class="input"\r
                      required>\r
                \r
              </div>\r
                <div>\r
                  <label class="label">Statut</label>\r
                  <select [(ngModel)]="form.statut" name="statut" class="input">\r
                    <option value="UPCOMING">\xC0 venir</option>\r
                    <option value="ONGOING">En cours</option>\r
                    <option value="COMPLETED">Termin\xE9</option>\r
                     <option value="CANCELLED">Annul\xE9</option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
\r
                <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                <label class="label">Date de d\xE9but</label>\r
                <input \r
                    type="datetime-local" \r
                    [(ngModel)]="form.startDate" \r
                    name="startDate" \r
                    class="input">\r
                \r
              </div>\r
                <div>\r
                  <label class="label">Date de fin</label>\r
                 <input \r
                    type="datetime-local" \r
                    [(ngModel)]="form.endDate" \r
                    name="endDate" \r
                    class="input">\r
                </div>\r
              </div>\r
\r
\r
\r
            \r
\r
\r
\r
\r
                     <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                <label class="label">Lieu</label>\r
                <input \r
                    type="text" \r
                    [(ngModel)]="form.location" \r
                    name="location" \r
                    class="input">\r
                \r
              </div>\r
                <div>\r
                  <label class="label">Nombre de Place Disponible</label>\r
                 <input \r
                    type="text" \r
                    [(ngModel)]="form.maxParticipants" \r
                    name="maxParticipants" \r
                    class="input">\r
                </div>\r
              </div>\r
\r
               <div >\r
                <label class="label">Image mise en avant <span class="text-red-500">*</span></label>\r
                <input type="file" multiple (change)="onFileSelected($event)" accept="image/*" class="input">\r
              </div>\r
              \r
              <div class="flex items-center gap-2">\r
                <input type="checkbox" [(ngModel)]="form.isPublic" name="isPublic" id="isPublic" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">\r
                <label for="featured" class="text-sm text-neutral-700">Rendre Public</label>\r
              </div>\r
              \r
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">\r
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">Annuler</button>\r
                <button type="submit" [disabled]="saving()" class="px-4 py-2 rounded-lg bg-[#00843B] text-white hover:bg-[#006830] transition-colors font-medium flex items-center justify-center gap-2">\r
                  @if (saving()) {\r
                    <div class="spinner w-4 h-4 mr-2"></div>\r
                  }\r
                  {{ editingArticle() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
                </button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
\r
\r
    <!-- Notification Modal -->\r
@if(notification().show) {\r
  <div class="fixed top-4 right-4 z-50 pointer-events-none">\r
    <div\r
      [ngClass]="{\r
        'bg-green-50 border-green-500 text-green-700': notification().type === 'success',\r
        'bg-red-50 border-red-500 text-red-700': notification().type === 'error',\r
        'bg-blue-50 border-blue-500 text-blue-700': notification().type === 'info'\r
      }"\r
      class="pointer-events-auto border-l-4 rounded-lg shadow-lg p-6 max-w-sm w-full flex items-center gap-4 animate-fade-in"\r
    >\r
      <svg *ngIf="notification().type === 'success'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
      </svg>\r
      <svg *ngIf="notification().type === 'error'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
      </svg>\r
      <svg *ngIf="notification().type === 'info'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"></path>\r
      </svg>\r
      <span class="text-sm font-medium">{{ notification().message }}</span>\r
    </div>\r
  </div>\r
}\r
\r
\r
\r
<!-- Modal de confirmation -->\r
@if(confirmModal().show) {\r
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">\r
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4">\r
      <h3 class="text-lg font-semibold text-neutral-900">Confirmation</h3>\r
      <p class="text-neutral-700">{{ confirmModal().message }}</p>\r
      \r
      <div class="flex justify-end gap-3 mt-4">\r
        <button (click)="closeConfirmModal()" \r
                class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium">\r
          Annuler\r
        </button>\r
        <button (click)="confirmModal().onConfirm()" \r
                class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium">\r
          Supprimer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}` }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvenementsComponent, { className: "EvenementsComponent", filePath: "src/app/features/admin/evenements/evenements.component.ts", lineNumber: 15 });
})();
export {
  EvenementsComponent
};
//# sourceMappingURL=chunk-RMTTHCIJ.js.map
