// src/app/core/models/index.ts
var ArticleCategory;
(function(ArticleCategory2) {
  ArticleCategory2["ACTUALITE"] = "ACTUALITE";
  ArticleCategory2["COMMUNIQUE"] = "COMMUNIQUE";
  ArticleCategory2["EVENEMENT"] = "EVENEMENT";
  ArticleCategory2["PROJET"] = "PROJET";
  ArticleCategory2["RAPPORT"] = "RAPPORT";
  ArticleCategory2["DISCOURS"] = "DISCOURS";
})(ArticleCategory || (ArticleCategory = {}));
var ArticleStatus;
(function(ArticleStatus2) {
  ArticleStatus2["DRAFT"] = "DRAFT";
  ArticleStatus2["PENDING"] = "PENDING";
  ArticleStatus2["PUBLISHED"] = "PUBLISHED";
  ArticleStatus2["ARCHIVED"] = "ARCHIVED";
})(ArticleStatus || (ArticleStatus = {}));
var ProjectStatus;
(function(ProjectStatus2) {
  ProjectStatus2["PLANIFIE"] = "PLANIFIE";
  ProjectStatus2["EN_COURS"] = "EN_COURS";
  ProjectStatus2["SUSPENDU"] = "SUSPENDU";
  ProjectStatus2["TERMINE"] = "TERMINE";
  ProjectStatus2["ANNULE"] = "ANNULE";
})(ProjectStatus || (ProjectStatus = {}));
var DocumentCategory;
(function(DocumentCategory2) {
  DocumentCategory2["RAPPORT"] = "RAPPORT";
  DocumentCategory2["FORMULAIRE"] = "FORMULAIRE";
  DocumentCategory2["GUIDE"] = "GUIDE";
  DocumentCategory2["LOI"] = "LOI";
  DocumentCategory2["DECRET"] = "DECRET";
  DocumentCategory2["ARRETE"] = "ARRETE";
  DocumentCategory2["CIRCULAIRE"] = "CIRCULAIRE";
  DocumentCategory2["AUTRE"] = "AUTRE";
})(DocumentCategory || (DocumentCategory = {}));
var DocumentType;
(function(DocumentType2) {
  DocumentType2["DOCUMENT"] = "DOCUMENT SIMPLE";
  DocumentType2["POLITIQUE"] = "DOCUMENT POLITIQUE";
})(DocumentType || (DocumentType = {}));
var ProjetType;
(function(ProjetType2) {
  ProjetType2["PROJET"] = "PROJET";
  ProjetType2["PROGRAMME"] = "PROGRAMME";
})(ProjetType || (ProjetType = {}));
var ContactStatus;
(function(ContactStatus2) {
  ContactStatus2["NON_LU"] = "NON_LU";
  ContactStatus2["LU"] = "LU";
  ContactStatus2["EN_TRAITEMENT"] = "EN_TRAITEMENT";
  ContactStatus2["TRAITE"] = "TRAITE";
  ContactStatus2["ARCHIVE"] = "ARCHIVE";
})(ContactStatus || (ContactStatus = {}));

export {
  ArticleCategory,
  ArticleStatus,
  ProjectStatus,
  DocumentCategory,
  DocumentType,
  ProjetType,
  ContactStatus
};
//# sourceMappingURL=chunk-MDVDJK3Z.js.map
