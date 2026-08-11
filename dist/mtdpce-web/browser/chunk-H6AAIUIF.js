import {
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/features/admin/users/users/users.component.ts
var _c0 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c1 = () => ({});
var _c2 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Aucun utilisateur");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_14_For_16_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getRoleLabel(role_r3));
  }
}
function UsersComponent_Conditional_14_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Actif");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_14_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Inactif");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_14_For_16_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 40);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_14_For_16_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 21)(3, "div", 22)(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275repeaterCreate(14, UsersComponent_Conditional_14_For_16_For_15_Template, 2, 1, "span", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275conditionalCreate(17, UsersComponent_Conditional_14_For_16_Conditional_17_Template, 2, 0, "span", 28)(18, UsersComponent_Conditional_14_For_16_Conditional_18_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 17)(20, "div", 30)(21, "button", 31);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_For_16_Template_button_click_21_listener() {
      const user_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editUser(user_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 32);
    \u0275\u0275element(23, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 34);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_For_16_Template_button_click_24_listener() {
      const user_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(user_r5));
    });
    \u0275\u0275conditionalCreate(25, UsersComponent_Conditional_14_For_16_Conditional_25_Template, 2, 0, ":svg:svg", 35)(26, UsersComponent_Conditional_14_For_16_Conditional_26_Template, 2, 0, ":svg:svg", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 37);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_For_16_Template_button_click_27_listener() {
      const user_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteUser(user_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 38);
    \u0275\u0275element(29, "path", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((user_r5.firstName == null ? null : user_r5.firstName.charAt(0)) || "U");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r5.firstName, " ", user_r5.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(user_r5.roles);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r5.enabled ? 17 : 18);
    \u0275\u0275advance(7);
    \u0275\u0275property("title", user_r5.enabled ? "D\xE9sactiver" : "Activer")("ngClass", user_r5.enabled ? "border-secondary-500 hover:bg-secondary-50" : "border-green-500 hover:bg-green-50");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r5.enabled ? 25 : 26);
  }
}
function UsersComponent_Conditional_14_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 42);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_ng_container_20_Template_button_click_1_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.currentPage() === page_r7 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r3.currentPage() === page_r7 ? \u0275\u0275pureFunction0(3, _c0) : \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7, " ");
  }
}
function UsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 16)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "R\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 17);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, UsersComponent_Conditional_14_For_16_Template, 30, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 18)(18, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(19, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, UsersComponent_Conditional_14_ng_container_20_Template, 3, 5, "ng-container", 20);
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_Template_button_click_21_listener() {
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
    \u0275\u0275repeater(ctx_r3.users());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function UsersComponent_Conditional_15_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 48);
    \u0275\u0275text(2, "Mot de passe ");
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_15_Conditional_31_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.form.password, $event) || (ctx_r3.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.password);
  }
}
function UsersComponent_Conditional_15_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 61);
  }
}
function UsersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 43)(2, "div", 44)(3, "h2", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 46);
    \u0275\u0275listener("ngSubmit", function UsersComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveUser());
    });
    \u0275\u0275elementStart(6, "div", 47)(7, "div")(8, "label", 48);
    \u0275\u0275text(9, "Pr\xE9nom ");
    \u0275\u0275elementStart(10, "span", 49);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.firstName, $event) || (ctx_r3.form.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 48);
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 49);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_15_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.lastName, $event) || (ctx_r3.form.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div")(20, "label", 48);
    \u0275\u0275text(21, "Nom d'utilisateur ");
    \u0275\u0275elementStart(22, "span", 49);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_15_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.username, $event) || (ctx_r3.form.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 48);
    \u0275\u0275text(27, "Email ");
    \u0275\u0275elementStart(28, "span", 49);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_15_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.email, $event) || (ctx_r3.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, UsersComponent_Conditional_15_Conditional_31_Template, 6, 1, "div");
    \u0275\u0275elementStart(32, "div")(33, "label", 48);
    \u0275\u0275text(34, "R\xF4le ");
    \u0275\u0275elementStart(35, "span", 49);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_15_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.role, $event) || (ctx_r3.form.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 55);
    \u0275\u0275text(39, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 56);
    \u0275\u0275text(41, "Mod\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 57);
    \u0275\u0275text(43, "Administrateur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 58)(45, "button", 59);
    \u0275\u0275listener("click", function UsersComponent_Conditional_15_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(46, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 60);
    \u0275\u0275conditionalCreate(48, UsersComponent_Conditional_15_Conditional_48_Template, 1, 0, "div", 61);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.editingUser() ? "Modifier l'utilisateur" : "Nouvel utilisateur", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.firstName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.lastName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.username);
    \u0275\u0275property("disabled", !!ctx_r3.editingUser());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.editingUser() ? 31 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.role);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingUser() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function UsersComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "path", 67);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "path", 68);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "path", 69);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 63);
    \u0275\u0275template(2, UsersComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 64)(3, UsersComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 64)(4, UsersComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 64);
    \u0275\u0275elementStart(5, "span", 65);
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
function UsersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 70)(2, "h3", 71);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 73)(7, "button", 74);
    \u0275\u0275listener("click", function UsersComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 75);
    \u0275\u0275listener("click", function UsersComponent_Conditional_17_Template_button_click_9_listener() {
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
var UsersComponent = class _UsersComponent {
  apiService;
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingUser = signal(null, ...ngDevMode ? [{ debugName: "editingUser" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = { firstName: "", lastName: "", username: "", email: "", password: "", role: "ROLE_USER" };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(page = 0) {
    this.apiService.getAllUsers(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.users.set(response.data.content);
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
      this.loadUsers(this.currentPage());
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadUsers(this.currentPage() - 2);
    }
  }
  goToPage(page) {
    this.loadUsers(page - 1);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
  openModal() {
    this.form = { firstName: "", lastName: "", username: "", email: "", password: "", role: "ROLE_USER" };
    this.editingUser.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingUser.set(null);
  }
  editUser1(user) {
    this.form = { firstName: user.firstName || "", lastName: user.lastName || "", username: user.username, email: user.email, password: "", role: user.roles[0] || "ROLE_USER" };
    this.editingUser.set(user);
    this.showModal.set(true);
  }
  editUser(user) {
    const role = Array.isArray(user.roles) && user.roles.length > 0 ? String(user.roles[0]) : "ROLE_USER";
    this.form = {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      username: user.username,
      email: user.email,
      password: "",
      role
    };
    this.editingUser.set(user);
    this.showModal.set(true);
  }
  saveUser() {
    if (!this.form.firstName || !this.form.lastName || !this.form.username || !this.form.email)
      return;
    this.saving.set(true);
    const editing = this.editingUser();
    if (editing) {
      this.apiService.updateUser(editing.id, { firstName: this.form.firstName, lastName: this.form.lastName, email: this.form.email, roles: [this.form.role] }).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadUsers();
            this.closeModal();
          }
          this.saving.set(false);
          this.showNotification("Utilisateur mis \xE0 avec succ\xE8s", "success");
        },
        error: (err) => {
          console.error("Erreur lors de la sauvegarde", err);
          this.saving.set(false);
          this.showNotification("Erreur lors de la sauvegarde", "error");
        }
      });
    } else {
      this.apiService.createUser(__spreadProps(__spreadValues({}, this.form), { roles: [this.form.role] })).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadUsers();
            this.closeModal();
          }
          this.saving.set(false);
          this.showNotification("Utilisateur mis \xE0 avec succ\xE8s", "success");
        },
        error: (err) => {
          console.error("Erreur lors de la sauvegarde", err);
          this.saving.set(false);
          this.showNotification("Erreur lors de la sauvegarde", "error");
        }
      });
    }
  }
  toggleUserStatus(user) {
    const action = user.enabled ? "d\xE9sactiver" : "activer";
    if (confirm(`Voulez-vous ${action} l'utilisateur "${user.username}" ?`)) {
      this.apiService.toggleUserStatus(user.id).subscribe({ next: () => this.loadUsers() });
    }
  }
  getRoleLabel(role) {
    const labels = { "ROLE_USER": "Utilisateur", "ROLE_MODERATOR": "Mod\xE9rateur", "ROLE_ADMIN": "Admin", "ROLE_SUPER_ADMIN": "Super Admin" };
    return labels[role] || role;
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
  deleteUser(user) {
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'utilisateur "${user.username}" ?`, () => {
      this.apiService.deleteUser(user.id).subscribe({
        next: () => {
          this.loadUsers();
          this.closeConfirmModal();
          this.showNotification("Utilisateur supprim\xE9 avec succ\xE8s", "success");
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }
  showNotification(message, type = "success", duration = 2e3) {
    this.notification.set({ show: true, message, type });
    setTimeout(() => this.notification.update((n) => __spreadProps(__spreadValues({}, n), { show: false })), duration);
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 18, vars: 4, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "table"], [1, "text-right"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-primary-100", "rounded-full", "flex", "items-center", "justify-center"], [1, "text-primary-600", "font-medium"], [1, "font-medium", "text-neutral-900"], [1, "text-xs", "text-neutral-400"], [1, "text-sm", "text-neutral-600"], [1, ""], [1, "badge-primary", "mr-1"], [1, "badge", "bg-neutral-100", "text-neutral-600"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 2, "border-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "#00843B", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5\n                                    m-1.414-9.414a2 2 0 112.828 2.828\n                                    L11.828 15H9v-2.828l8.586-8.586z"], [1, "flex", "items-center", "justify-center", "p-2", "border-2", "rounded-full", "bg-white", "transition-colors", 3, "click", "title", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-secondary-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21\n                                    H7.862a2 2 0 01-1.995-1.858L5 7\n                                    m5 4v6m4-6v6\n                                    m1-10V4a1 1 0 00-1-1h-4\n                                    a1 1 0 00-1 1v3M4 7h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 18.364A9 9 0 005.636 5.636\n                                      m12.728 12.728A9 9 0 015.636 5.636\n                                      m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4\n                                      m6 2a9 9 0 11-18 0\n                                      9 9 0 0118 0z"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "grid", "grid-cols-2", "gap-4"], [1, "label"], [1, "text-danger-500"], ["type", "text", "name", "firstName", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "username", "required", "", 1, "input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "email", "name", "email", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "role", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "ROLE_USER"], ["value", "ROLE_MODERATOR"], ["value", "ROLE_ADMIN"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], ["type", "password", "name", "password", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez les comptes utilisateurs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel utilisateur ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, UsersComponent_Conditional_12_Template, 2, 0, "div", 8)(13, UsersComponent_Conditional_13_Template, 5, 0, "div", 8)(14, UsersComponent_Conditional_14_Template, 23, 3, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, UsersComponent_Conditional_15_Template, 50, 11, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, UsersComponent_Conditional_16_Template, 7, 9, "div", 11);
      \u0275\u0275conditionalCreate(17, UsersComponent_Conditional_17_Template, 11, 1, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.users().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, FormsModule], template: ` <div class="space-y-6">\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Utilisateurs</h1>\r
          <p class="text-neutral-500">G\xE9rez les comptes utilisateurs</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouvel utilisateur\r
        </button>\r
      </div>\r
      \r
      <div class="card p-0">\r
        @if (loading()) {\r
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>\r
        } @else if (users().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun utilisateur</p>\r
          </div>\r
        } @else {\r
          <div class="table-container">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>Utilisateur</th>\r
                  <th>Email</th>\r
                  <th>R\xF4les</th>\r
                  <th>Statut</th>\r
                  <th class="text-right">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (user of users(); track user.id) {\r
                  <tr>\r
                    <td>\r
                      <div class="flex items-center gap-3">\r
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">\r
                          <span class="text-primary-600 font-medium">{{ user.firstName?.charAt(0) || 'U' }}</span>\r
                        </div>\r
                        <div>\r
                          <p class="font-medium text-neutral-900">{{ user.firstName }} {{ user.lastName }}</p>\r
                          <p class="text-xs text-neutral-400">{{ user.username }}</p>\r
                        </div>\r
                      </div>\r
                    </td>\r
                    <td class="text-sm text-neutral-600">{{ user.email }}</td>\r
                    <td>\r
                      @for (role of user.roles; track role) {\r
                        <span class="">{{ getRoleLabel(role) }}</span>\r
                      }\r
                    </td>\r
                    <td>\r
                      @if (user.enabled) {\r
                        <span class="badge-primary mr-1">Actif</span>\r
                      } @else {\r
                        <span class="badge bg-neutral-100 text-neutral-600">Inactif</span>\r
                      }\r
                    </td>\r
\r
                    <td class="text-right">\r
                      <div class="flex justify-end gap-2">\r
\r
                        <!-- Modifier -->\r
                      <!-- Modifier (vert #00843B) -->\r
                        <button\r
                          (click)="editUser(user)"\r
                          title="Modifier"\r
                          class="flex items-center justify-center p-2 border-2 rounded-full\r
                                bg-white hover:bg-green-50 transition-colors"\r
                          style="border-color: #00843B;">\r
                          <svg class="w-4 h-4" fill="none" stroke="#00843B" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5\r
                                    m-1.414-9.414a2 2 0 112.828 2.828\r
                                    L11.828 15H9v-2.828l8.586-8.586z"/>\r
                          </svg>\r
                        </button>\r
\r
\r
\r
                        <!-- Activer / D\xE9sactiver -->\r
                        <button\r
                          (click)="toggleUserStatus(user)"\r
                          [title]="user.enabled ? 'D\xE9sactiver' : 'Activer'"\r
                          class="flex items-center justify-center p-2 border-2 rounded-full bg-white transition-colors"\r
                          [ngClass]="user.enabled\r
                            ? 'border-secondary-500 hover:bg-secondary-50'\r
                            : 'border-green-500 hover:bg-green-50'">\r
\r
                          @if (user.enabled) {\r
                            <svg class="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M18.364 18.364A9 9 0 005.636 5.636\r
                                      m12.728 12.728A9 9 0 015.636 5.636\r
                                      m12.728 12.728L5.636 5.636"/>\r
                            </svg>\r
                          } @else {\r
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4\r
                                      m6 2a9 9 0 11-18 0\r
                                      9 9 0 0118 0z"/>\r
                            </svg>\r
                          }\r
                        </button>\r
\r
                        <!-- Supprimer -->\r
                        <button\r
                          (click)="deleteUser(user)"\r
                          title="Supprimer"\r
                          class="flex items-center justify-center p-2 border-2 border-red-500 rounded-full\r
                                bg-white hover:bg-red-50 transition-colors">\r
                          <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21\r
                                    H7.862a2 2 0 01-1.995-1.858L5 7\r
                                    m5 4v6m4-6v6\r
                                    m1-10V4a1 1 0 00-1-1h-4\r
                                    a1 1 0 00-1 1v3M4 7h16"/>\r
                          </svg>\r
                        </button>\r
\r
                      </div>\r
                    </td>\r
\r
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
          </div>\r
        }\r
      </div>\r
      \r
      @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingUser() ? 'Modifier l\\'utilisateur' : 'Nouvel utilisateur' }} </h2>\r
            </div>\r
            <form (ngSubmit)="saveUser()" class="p-6 space-y-5">\r
              <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                  <label class="label">Pr\xE9nom <span class="text-danger-500">*</span></label>\r
                  <input type="text" [(ngModel)]="form.firstName" name="firstName" class="input" required>\r
                </div>\r
                <div>\r
                  <label class="label">Nom <span class="text-danger-500">*</span></label>\r
                  <input type="text" [(ngModel)]="form.lastName" name="lastName" class="input" required>\r
                </div>\r
              </div>\r
              <div>\r
                <label class="label">Nom d'utilisateur <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.username" name="username" class="input" required [disabled]="!!editingUser()">\r
              </div>\r
              <div>\r
                <label class="label">Email <span class="text-danger-500">*</span></label>\r
                <input type="email" [(ngModel)]="form.email" name="email" class="input" required>\r
              </div>\r
              @if (!editingUser()) {\r
                <div>\r
                  <label class="label">Mot de passe <span class="text-danger-500">*</span></label>\r
                  <input type="password" [(ngModel)]="form.password" name="password" class="input" required>\r
                </div>\r
              }\r
              <div>\r
                <label class="label">R\xF4le <span class="text-danger-500">*</span></label>\r
                <select [(ngModel)]="form.role" name="role" class="input">\r
                  <option value="ROLE_USER">Utilisateur</option>\r
                  <option value="ROLE_MODERATOR">Mod\xE9rateur</option>\r
                  <option value="ROLE_ADMIN">Administrateur</option>\r
                </select>\r
              </div>\r
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">\r
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">Annuler</button>\r
                <button type="submit" [disabled]="saving()" class="btn-primary">\r
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }\r
                  {{ editingUser() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
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
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/features/admin/users/users/users.component.ts", lineNumber: 14 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-H6AAIUIF.js.map
