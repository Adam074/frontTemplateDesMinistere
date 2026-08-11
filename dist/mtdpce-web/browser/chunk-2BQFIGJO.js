import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
import {
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
  environment,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/admin/ministere/ministre/ministre.component.ts
var _c0 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c1 = () => ({});
var _c2 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function MinistreComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
  }
}
function MinistreComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Aucun ajout pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function MinistreComponent_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 22)(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td")(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 18)(15, "div", 27)(16, "button", 28);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_14_For_16_Template_button_click_16_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editDocument(doc_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 29);
    \u0275\u0275element(18, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 31);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_14_For_16_Template_button_click_19_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteDocument(doc_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 32);
    \u0275\u0275element(21, "path", 33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(doc_r3.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r3.prenom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r3.profession);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", doc_r3.isActif ? "badge-primary" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r3.isActif ? "Activ\xE9" : "Non activ\xE9", " ");
  }
}
function MinistreComponent_Conditional_14_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 34);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_14_ng_container_20_Template_button_click_1_listener() {
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
function MinistreComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 17)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Profession");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 18);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, MinistreComponent_Conditional_14_For_16_Template, 22, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "button", 20);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_14_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(19, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MinistreComponent_Conditional_14_ng_container_20_Template, 3, 5, "ng-container", 21);
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_14_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(22, " Suivant \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r3.documents());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function MinistreComponent_Conditional_15_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.nomGeneral, " ");
  }
}
function MinistreComponent_Conditional_15_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1, " Le contenu est obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function MinistreComponent_Conditional_15_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function MinistreComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 35)(2, "div", 36)(3, "h2", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 38);
    \u0275\u0275listener("ngSubmit", function MinistreComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveDocument());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 39);
    \u0275\u0275text(8, "Minist\xE8re");
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function MinistreComponent_Conditional_15_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.ministereId, $event) || (ctx_r3.form.ministereId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 42);
    \u0275\u0275text(13, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MinistreComponent_Conditional_15_option_14_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 44)(16, "div")(17, "label", 39);
    \u0275\u0275text(18, "Nom ");
    \u0275\u0275elementStart(19, "span", 40);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function MinistreComponent_Conditional_15_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.nom, $event) || (ctx_r3.form.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 39);
    \u0275\u0275text(24, "Prenom ");
    \u0275\u0275elementStart(25, "span", 40);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function MinistreComponent_Conditional_15_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.prenom, $event) || (ctx_r3.form.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div")(29, "label", 39);
    \u0275\u0275text(30, "Profession ");
    \u0275\u0275elementStart(31, "span", 40);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function MinistreComponent_Conditional_15_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.profession, $event) || (ctx_r3.form.profession = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "label", 39);
    \u0275\u0275text(36, "Biographie ");
    \u0275\u0275elementStart(37, "span", 48);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "textarea", 49, 0);
    \u0275\u0275twoWayListener("ngModelChange", function MinistreComponent_Conditional_15_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.biographie, $event) || (ctx_r3.form.biographie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, MinistreComponent_Conditional_15_p_41_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "label", 39);
    \u0275\u0275text(44, "Photo");
    \u0275\u0275elementStart(45, "span", 48);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "input", 51);
    \u0275\u0275listener("change", function MinistreComponent_Conditional_15_Template_input_change_47_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 52)(49, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function MinistreComponent_Conditional_15_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.isActif, $event) || (ctx_r3.form.isActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label", 54);
    \u0275\u0275text(51, "Activer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 55)(53, "button", 56);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_15_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(54, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 57);
    \u0275\u0275conditionalCreate(56, MinistreComponent_Conditional_15_Conditional_56_Template, 1, 0, "div", 58);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const content_r9 = \u0275\u0275reference(40);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.editingDocument() ? "Modifier " : "Nouveau ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.ministereId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.projects());
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.nom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.prenom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.profession);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.biographie);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", content_r9.invalid && content_r9.touched);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.isActif);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingDocument() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function MinistreComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 64);
    \u0275\u0275element(1, "path", 65);
    \u0275\u0275elementEnd();
  }
}
function MinistreComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 64);
    \u0275\u0275element(1, "path", 66);
    \u0275\u0275elementEnd();
  }
}
function MinistreComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 64);
    \u0275\u0275element(1, "path", 67);
    \u0275\u0275elementEnd();
  }
}
function MinistreComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 61);
    \u0275\u0275template(2, MinistreComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 62)(3, MinistreComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 62)(4, MinistreComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 62);
    \u0275\u0275elementStart(5, "span", 63);
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
function MinistreComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 68)(2, "h3", 69);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 71)(7, "button", 72);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 73);
    \u0275\u0275listener("click", function MinistreComponent_Conditional_17_Template_button_click_9_listener() {
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
var MinistreComponent = class _MinistreComponent {
  apiService;
  minService;
  API_URL = environment.FileUrl;
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingDocument = signal(null, ...ngDevMode ? [{ debugName: "editingDocument" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  selectedImage = null;
  selectedFile = null;
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = {
    nom: "",
    prenom: "",
    profession: "",
    biographie: "",
    isActif: true,
    ministereId: 0
  };
  constructor(apiService, minService) {
    this.apiService = apiService;
    this.minService = minService;
  }
  ngOnInit() {
    this.loadDocuments();
    this.loadProjects();
  }
  loadDocuments(page = 0) {
    this.loading.set(true);
    this.apiService.getAllMinistre(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.documents.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(page + 1);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadDocuments(this.currentPage());
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadDocuments(this.currentPage() - 2);
    }
  }
  goToPage(page) {
    this.loadDocuments(page - 1);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
  openModal() {
    this.form = {
      nom: "",
      prenom: "",
      profession: "",
      biographie: "",
      ministereId: 0,
      isActif: true
    };
    this.selectedFile = null;
    this.editingDocument.set(null);
    this.showModal.set(true);
  }
  openModal1() {
    this.form = {
      nom: "",
      prenom: "",
      profession: "",
      biographie: "",
      isActif: true,
      ministereId: 0
    };
    this.editingDocument.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingDocument.set(null);
  }
  editDocument1(doc) {
    this.form = {
      nom: doc.nom,
      prenom: doc.prenom,
      profession: doc.profession,
      biographie: doc.biographie,
      isActif: doc.isActif,
      ministereId: doc.ministereId
    };
    this.editingDocument.set(doc);
    this.showModal.set(true);
  }
  editDocument(doc) {
    this.form = {
      nom: doc.nom,
      prenom: doc.prenom,
      profession: doc.profession,
      ministereId: doc.ministereId,
      biographie: doc.biographie,
      isActif: doc.isActif
    };
    this.editingDocument.set(doc);
    this.showModal.set(true);
  }
  loadProjects() {
    this.minService.getAllMins().subscribe({
      next: (response) => {
        console.log("RESPONSE =", response);
        this.projects.set(response.data.content);
        console.log("PROJECTS =", this.projects());
      },
      error: (err) => {
        console.error("Erreur API", err);
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      return;
    }
    const file = input.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Pour une actualit\xE9, veuillez s\xE9lectionner une image");
      input.value = "";
      this.selectedFile = null;
      return;
    }
    this.selectedFile = file;
  }
  saveDocument() {
    if (!this.form.nom)
      return;
    const selectedType = this.projects().find((t) => t.id == this.form.ministereId);
    const typeName = selectedType?.nomGeneral;
    this.saving.set(true);
    const editing = this.editingDocument();
    const articleDTO = {
      nom: this.form.nom,
      prenom: this.form.prenom,
      profession: this.form.profession,
      biographie: this.form.biographie,
      isActif: this.form.isActif,
      ministereId: this.form.ministereId
    };
    console.log(articleDTO);
    const formData = new FormData();
    formData.append("ministre", new Blob([JSON.stringify(articleDTO)], { type: "application/json" }));
    if (this.selectedFile)
      formData.append("photo", this.selectedFile);
    const request = editing ? this.apiService.updateMinistre(editing.id, formData) : this.apiService.createMinistre(formData);
    request.subscribe({
      next: (response) => {
        this.loadDocuments();
        this.closeModal();
        this.saving.set(false);
        this.showNotification(editing ? "Document mis \xE0 jour avec succ\xE8s" : "Document cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
  }
  formatDate(dateStr) {
    return dateStr ? new Date(dateStr).toLocaleDateString("fr-FR") : "";
  }
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
  deleteDocument(article) {
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.nom}" ?`, () => {
      this.apiService.deleteOrg(article.id).subscribe({
        next: () => {
          this.loadDocuments();
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
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  static \u0275fac = function MinistreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinistreComponent)(\u0275\u0275directiveInject(MinistereService), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MinistreComponent, selectors: [["app-ministre"]], decls: 18, vars: 4, consts: [["content", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "table"], [1, "text-right"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, ""], [1, "badge-primary"], [3, "ngClass"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-3xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-danger-500"], ["name", "ministereId", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["type", "text", "name", "nom", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "prenom", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "profession", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], [1, "text-red-500"], ["name", "biographie", "rows", "6", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "input", 3, "change"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "name", "isActif", "id", "isActif", 1, "rounded", "border-neutral-300", "text-primary-500", "focus:ring-primary-500", 3, "ngModelChange", "ngModel"], ["for", "featured", 1, "text-sm", "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], [3, "value"], [1, "text-sm", "text-red-500", "mt-1"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function MinistreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
      \u0275\u0275text(4, "Ministres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "G\xE9rez le suivi des ministres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function MinistreComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel Ajout ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275conditionalCreate(12, MinistreComponent_Conditional_12_Template, 2, 0, "div", 9)(13, MinistreComponent_Conditional_13_Template, 5, 0, "div", 9)(14, MinistreComponent_Conditional_14_Template, 23, 3, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, MinistreComponent_Conditional_15_Template, 58, 12, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, MinistreComponent_Conditional_16_Template, 7, 9, "div", 12);
      \u0275\u0275conditionalCreate(17, MinistreComponent_Conditional_17_Template, 11, 1, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.documents().length === 0 ? 13 : 14);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinistreComponent, [{
    type: Component,
    args: [{ selector: "app-ministre", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Ministres</h1>\r
          <p class="text-neutral-500">G\xE9rez le suivi des ministres</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouvel Ajout\r
        </button>\r
      </div>\r
      \r
      <div class="card p-0">\r
        @if (loading()) {\r
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>\r
        } @else if (documents().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun ajout pour le moment</p>\r
          </div>\r
        } @else {\r
          <div class="table-container">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>Nom</th>\r
                  <th>pr\xE9nom</th>\r
                  <th>Profession</th>\r
                  <th>Actif</th>\r
                 \r
                  <th class="text-right">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (doc of documents(); track doc.id) {\r
                  <tr>\r
                    <td>\r
                      <div class="max-w-xs">\r
                        <p class="font-medium text-neutral-900 truncate">{{ doc.nom }}</p>\r
                        \r
                      </div>\r
                    </td>\r
\r
                    <td><span class="">{{ doc.prenom }}</span></td>\r
                    \r
                    <td><span class="badge-primary">{{ doc.profession }}</span></td>\r
                  <td>\r
                    <span\r
                        [ngClass]="doc.isActif ? 'badge-primary' : 'badge-danger'"\r
                    >\r
                        {{ doc.isActif ? 'Activ\xE9' : 'Non activ\xE9' }}\r
                    </span>\r
                    </td>\r
                    \r
                   \r
                   \r
                    <td class="text-right">\r
                      <div class="flex justify-end gap-2">\r
                        <button (click)="editDocument(doc)"\r
                                class="flex items-center justify-center p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition-colors"\r
                                title="Modifier">\r
                          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <button (click)="deleteDocument(doc)"\r
                                class="flex items-center justify-center p-2 border-2 border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"\r
                                title="Supprimer">\r
                          <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                          </svg>\r
                        </button>\r
                        \r
                       \r
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
          </div>\r
        }\r
      </div>\r
      \r
      @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingDocument() ? 'Modifier ' : 'Nouveau ' }}</h2>\r
            </div>\r
            <form (ngSubmit)="saveDocument()" class="p-6 space-y-5">\r
\r
                <div>\r
                  <label class="label">Minist\xE8re<span class="text-danger-500">*</span></label>\r
                  <select [(ngModel)]="form.ministereId" name="ministereId" class="input" required>\r
                  <option value="">-- S\xE9lectionner  --</option>\r
\r
                  <option *ngFor="let type of projects()" [value]="type.id">\r
                    {{ type.nomGeneral }}\r
                  </option>\r
\r
                </select>\r
                </div>\r
\r
             <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                \r
                \r
               <div>\r
                <label class="label">Nom <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.nom" name="nom" class="input" required>\r
              </div>\r
\r
               \r
                <div>\r
                <label class="label">Prenom <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.prenom" name="prenom" class="input" required>\r
              </div>\r
               </div>\r
               <div>\r
                <label class="label">Profession <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.profession" name="profession" class="input" required>\r
              </div>\r
             \r
             \r
               <div>\r
                <label class="label">Biographie <span class="text-red-500">*</span></label>\r
\r
                <textarea [(ngModel)]="form.biographie"\r
                          name="biographie"\r
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
             \r
               <div >\r
                <label class="label">Photo<span class="text-red-500">*</span></label>\r
                <input type="file" (change)="onFileSelected($event)" accept="image/*" class="input">\r
              </div>\r
\r
             <div class="flex items-center gap-2">\r
                <input type="checkbox" [(ngModel)]="form.isActif" name="isActif" id="isActif" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">\r
                <label for="featured" class="text-sm text-neutral-700">Activer</label>\r
              </div>\r
\r
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">\r
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">Annuler</button>\r
                <button type="submit" [disabled]="saving()" class="btn-primary">\r
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }\r
                  {{ editingDocument() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
                </button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
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
  }], () => [{ type: MinistereService }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MinistreComponent, { className: "MinistreComponent", filePath: "src/app/features/admin/ministere/ministre/ministre.component.ts", lineNumber: 17 });
})();
export {
  MinistreComponent
};
//# sourceMappingURL=chunk-2BQFIGJO.js.map
