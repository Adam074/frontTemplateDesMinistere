import {
  ContactStatus
} from "./chunk-MDVDJK3Z.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/admin/contacts/contacts/contacts.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ContactsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275domElement(1, "div", 7);
    \u0275\u0275domElementEnd();
  }
}
function ContactsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 8);
    \u0275\u0275domElement(2, "path", 9);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "p", 2);
    \u0275\u0275text(4, "Aucun message pour le moment");
    \u0275\u0275domElementEnd()();
  }
}
function ContactsComponent_Conditional_9_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td")(2, "div")(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "td", 15);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "td", 16);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 11)(15, "div", 17)(16, "button", 18);
    \u0275\u0275domListener("click", function ContactsComponent_Conditional_9_For_16_Template_button_click_16_listener() {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewContact(contact_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(17, "svg", 19);
    \u0275\u0275domElement(18, "path", 20)(19, "path", 21);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(20, "button", 22);
    \u0275\u0275domListener("click", function ContactsComponent_Conditional_9_For_16_Template_button_click_20_listener() {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteContact(contact_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(21, "svg", 19);
    \u0275\u0275domElement(22, "path", 23);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const contact_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary-50", contact_r2.status === ctx_r2.ContactStatus.NON_LU);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(contact_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r2.subject);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(contact_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(contact_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(contact_r2.createdAt));
  }
}
function ContactsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Exp\xE9diteur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Sujet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 11);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ContactsComponent_Conditional_9_For_16_Template, 23, 9, "tr", 12, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.contacts());
  }
}
function ContactsComponent_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedContact().phone);
  }
}
function ContactsComponent_Conditional_10_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 37);
    \u0275\u0275domListener("click", function ContactsComponent_Conditional_10_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markAsRead(ctx_r2.selectedContact()));
    });
    \u0275\u0275text(1, "Marquer comme lu");
    \u0275\u0275domElementEnd();
  }
}
function ContactsComponent_Conditional_10_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 38);
    \u0275\u0275domListener("click", function ContactsComponent_Conditional_10_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markAsProcessed(ctx_r2.selectedContact()));
    });
    \u0275\u0275text(1, "Marquer comme trait\xE9");
    \u0275\u0275domElementEnd();
  }
}
function ContactsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 24)(2, "div", 25)(3, "h2", 26);
    \u0275\u0275text(4, "D\xE9tail du message");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 27);
    \u0275\u0275domListener("click", function ContactsComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedContact.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 28);
    \u0275\u0275domElement(7, "path", 29);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(8, "div", 30)(9, "div")(10, "p", 16);
    \u0275\u0275text(11, "De");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "p", 13);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p", 31);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(16, ContactsComponent_Conditional_10_Conditional_16_Template, 2, 1, "p", 31);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div")(18, "p", 16);
    \u0275\u0275text(19, "Sujet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "p", 13);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "div")(23, "p", 16);
    \u0275\u0275text(24, "Message");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "p", 32);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div", 33)(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 34);
    \u0275\u0275conditionalCreate(31, ContactsComponent_Conditional_10_Conditional_31_Template, 2, 0, "button", 35);
    \u0275\u0275conditionalCreate(32, ContactsComponent_Conditional_10_Conditional_32_Template, 2, 0, "button", 36);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.selectedContact().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedContact().email);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedContact().phone ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedContact().subject);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedContact().message);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(ctx_r2.selectedContact().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(ctx_r2.selectedContact().status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedContact().status === ctx_r2.ContactStatus.NON_LU ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedContact().status !== ctx_r2.ContactStatus.TRAITE ? 32 : -1);
  }
}
var ContactsComponent = class _ContactsComponent {
  apiService;
  contacts = signal([], ...ngDevMode ? [{ debugName: "contacts" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedContact = signal(null, ...ngDevMode ? [{ debugName: "selectedContact" }] : []);
  ContactStatus = ContactStatus;
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadContacts();
  }
  loadContacts() {
    this.apiService.getAllContacts(0, 50).subscribe({
      next: (response) => {
        if (response.success)
          this.contacts.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  viewContact(contact) {
    this.selectedContact.set(contact);
  }
  markAsRead(contact) {
    this.apiService.updateContactStatus(contact.id, "LU").subscribe({
      next: () => {
        this.loadContacts();
        this.selectedContact.set(null);
      }
    });
  }
  markAsProcessed(contact) {
    this.apiService.updateContactStatus(contact.id, "TRAITE").subscribe({
      next: () => {
        this.loadContacts();
        this.selectedContact.set(null);
      }
    });
  }
  deleteContact(contact) {
    if (confirm(`Supprimer le message de "${contact.name}" ?`)) {
      this.apiService.deleteContact(contact.id).subscribe({ next: () => this.loadContacts() });
    }
  }
  getStatusLabel(status) {
    const labels = { "NOUVEAU": "Nouveau", "LU": "Lu", "EN_COURS": "En cours", "TRAITE": "Trait\xE9" };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes = { "NOUVEAU": "badge-primary", "LU": "badge bg-neutral-100 text-neutral-600", "EN_COURS": "badge-warning", "TRAITE": "badge-success" };
    return classes[status] || "badge";
  }
  formatDate(dateStr) {
    return dateStr ? new Date(dateStr).toLocaleDateString("fr-FR") : "";
  }
  static \u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], decls: 11, vars: 2, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "table"], [1, "text-right"], [3, "bg-primary-50"], [1, "font-medium", "text-neutral-900"], [1, "text-xs", "text-neutral-400"], [1, "max-w-xs", "truncate"], [1, "text-sm", "text-neutral-500"], [1, "flex", "justify-end", "gap-2"], ["title", "Voir", 1, "btn-ghost", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["title", "Supprimer", 1, "btn-ghost", "p-2", "text-secondary-500", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg"], [1, "p-6", "border-b", "border-neutral-200", "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "btn-ghost", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-4"], [1, "text-sm", "text-neutral-600"], [1, "text-neutral-700", "whitespace-pre-wrap"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-neutral-200"], [1, "flex", "gap-2"], [1, "btn-outline", "text-sm"], [1, "btn-primary", "text-sm"], [1, "btn-outline", "text-sm", 3, "click"], [1, "btn-primary", "text-sm", 3, "click"]], template: function ContactsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Messages");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 2);
      \u0275\u0275text(5, "G\xE9rez les demandes de contact");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 3);
      \u0275\u0275conditionalCreate(7, ContactsComponent_Conditional_7_Template, 2, 0, "div", 4)(8, ContactsComponent_Conditional_8_Template, 5, 0, "div", 4)(9, ContactsComponent_Conditional_9_Template, 17, 0, "div", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, ContactsComponent_Conditional_10_Template, 33, 10, "div", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 7 : ctx.contacts().length === 0 ? 8 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.selectedContact() ? 10 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactsComponent, [{
    type: Component,
    args: [{ selector: "app-contacts", standalone: true, imports: [CommonModule], template: '  <div class="space-y-6">\r\n      <div>\r\n        <h1 class="text-2xl font-bold text-neutral-900">Messages</h1>\r\n        <p class="text-neutral-500">G\xE9rez les demandes de contact</p>\r\n      </div>\r\n      \r\n      <div class="card p-0">\r\n        @if (loading()) {\r\n          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>\r\n        } @else if (contacts().length === 0) {\r\n          <div class="p-8 text-center">\r\n            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r\n            </svg>\r\n            <p class="text-neutral-500">Aucun message pour le moment</p>\r\n          </div>\r\n        } @else {\r\n          <div class="table-container">\r\n            <table class="table">\r\n              <thead>\r\n                <tr>\r\n                  <th>Exp\xE9diteur</th>\r\n                  <th>Sujet</th>\r\n                  <th>Statut</th>\r\n                  <th>Date</th>\r\n                  <th class="text-right">Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @for (contact of contacts(); track contact.id) {\r\n                  <tr [class.bg-primary-50]="contact.status === ContactStatus.NON_LU">\r\n                    <td>\r\n                      <div>\r\n                        <p class="font-medium text-neutral-900">{{ contact.name }}</p>\r\n                        <p class="text-xs text-neutral-400">{{ contact.email }}</p>\r\n                      </div>\r\n                    </td>\r\n                    <td class="max-w-xs truncate">{{ contact.subject }}</td>\r\n                    <td><span [class]="getStatusBadgeClass(contact.status)">{{ getStatusLabel(contact.status) }}</span></td>\r\n                    <td class="text-sm text-neutral-500">{{ formatDate(contact.createdAt) }}</td>\r\n                    <td class="text-right">\r\n                      <div class="flex justify-end gap-2">\r\n                        <button (click)="viewContact(contact)" class="btn-ghost p-2" title="Voir">\r\n                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r\n                          </svg>\r\n                        </button>\r\n                        <button (click)="deleteContact(contact)" class="btn-ghost p-2 text-secondary-500" title="Supprimer">\r\n                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r\n                          </svg>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                }\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        }\r\n      </div>\r\n      \r\n      @if (selectedContact()) {\r\n        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r\n          <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg">\r\n            <div class="p-6 border-b border-neutral-200 flex items-center justify-between">\r\n              <h2 class="text-xl font-semibold text-neutral-900">D\xE9tail du message</h2>\r\n              <button (click)="selectedContact.set(null)" class="btn-ghost p-2">\r\n                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n                </svg>\r\n              </button>\r\n            </div>\r\n            <div class="p-6 space-y-4">\r\n              <div>\r\n                <p class="text-sm text-neutral-500">De</p>\r\n                <p class="font-medium text-neutral-900">{{ selectedContact()!.name }}</p>\r\n                <p class="text-sm text-neutral-600">{{ selectedContact()!.email }}</p>\r\n                @if (selectedContact()!.phone) {\r\n                  <p class="text-sm text-neutral-600">{{ selectedContact()!.phone }}</p>\r\n                }\r\n              </div>\r\n              <div>\r\n                <p class="text-sm text-neutral-500">Sujet</p>\r\n                <p class="font-medium text-neutral-900">{{ selectedContact()!.subject }}</p>\r\n              </div>\r\n              <div>\r\n                <p class="text-sm text-neutral-500">Message</p>\r\n                <p class="text-neutral-700 whitespace-pre-wrap">{{ selectedContact()!.message }}</p>\r\n              </div>\r\n              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">\r\n                <span [class]="getStatusBadgeClass(selectedContact()!.status)">{{ getStatusLabel(selectedContact()!.status) }}</span>\r\n                <div class="flex gap-2">\r\n                  @if (selectedContact()!.status === ContactStatus.NON_LU) {\r\n                    <button (click)="markAsRead(selectedContact()!)" class="btn-outline text-sm">Marquer comme lu</button>\r\n                  }\r\n                  @if (selectedContact()!.status !== ContactStatus.TRAITE) {\r\n                    <button (click)="markAsProcessed(selectedContact()!)" class="btn-primary text-sm">Marquer comme trait\xE9</button>\r\n                  }\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>' }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src/app/features/admin/contacts/contacts/contacts.component.ts", lineNumber: 13 });
})();
export {
  ContactsComponent
};
//# sourceMappingURL=chunk-I3TAA7L7.js.map
