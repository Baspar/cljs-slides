// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.pages');
goog.require('cljs.core');
goog.require('template.ui_elements');
goog.require('template.util');
if(typeof template.pages.render_page !== 'undefined'){
} else {
template.pages.render_page = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"template.pages","render-page"),((function (method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__,hierarchy__19388__auto__){
return (function() {
var G__25496 = null;
var G__25496__1 = (function (state){
return template.util.get_slide.call(null,state).call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
});
var G__25496__2 = (function (state,page){
return template.util.get_slide.call(null,state,page).call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
});
G__25496 = function(state,page){
switch(arguments.length){
case 1:
return G__25496__1.call(this,state);
case 2:
return G__25496__2.call(this,state,page);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25496.cljs$core$IFn$_invoke$arity$1 = G__25496__1;
G__25496.cljs$core$IFn$_invoke$arity$2 = G__25496__2;
return G__25496;
})()
;})(method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__,hierarchy__19388__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,template.pages.render_page,new cljs.core.Keyword(null,"introduction","introduction",-764137703),(function (state){
return template.ui_elements.cols.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [template.ui_elements.block.call(null,"Block",cljs.core.PersistentVector.EMPTY),template.ui_elements.block.call(null,"Block",cljs.core.PersistentVector.EMPTY),template.ui_elements.question_block.call(null,"Block",cljs.core.PersistentVector.EMPTY)], null));
}));
cljs.core._add_method.call(null,template.pages.render_page,new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (state){
return template.ui_elements.block.call(null,"Titre",template.ui_elements.cols.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [template.ui_elements.question_block.call(null,"Subtitle1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"HELLO"], null)),template.ui_elements.question_block.call(null,"Subtitle2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"HELLO"], null)),template.ui_elements.question_block.call(null,"Subtitle3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"HELLO"], null)),template.ui_elements.question_block.call(null,"Subtitle4",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"HELLO"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"HELLO"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"test1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"test2"], null)], null),template.ui_elements.block.call(null,"end",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"fini"], null)], null))], null))], null)));
}));
cljs.core._add_method.call(null,template.pages.render_page,new cljs.core.Keyword(null,"part1","part1",-878603297),(function (state){
return template.ui_elements.block.call(null,"Part1 content",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reminder!"], null),"List of todo",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"todo1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"todo2"], null)], null)], null));
}));
cljs.core._add_method.call(null,template.pages.render_page,new cljs.core.Keyword(null,"part2","part2",-735271005),(function (state){
return template.ui_elements.rows.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template.ui_elements.cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template.ui_elements.block.call(null,"1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null)),template.ui_elements.block.call(null,"2",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2"], null))], null)),template.ui_elements.cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template.ui_elements.block.call(null,"3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3"], null)),template.ui_elements.block.call(null,"4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4"], null))], null))], null));
}));
cljs.core._add_method.call(null,template.pages.render_page,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state){
var slide = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template.util.get_slide.call(null,state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Please provide key for"),cljs.core.str(slide)].join('')], null);
}));

//# sourceMappingURL=pages.js.map?rel=1471713159016