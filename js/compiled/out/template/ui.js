// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.ui');
goog.require('cljs.core');
goog.require('template.dispatch');
template.ui.page = (function template$ui$page(state){
return React.createElement("div",{"style": {"width": "90vw", "height": "90vh", "display": "flex", "flexDirection": "column", "justifyContent": "space-around", "alignItems": "center", "overflow": "hidden", "backgroundColor": "grey"}},React.createElement("div",{"style": {"position": "relative", "height": "70%", "perspective": "1000px", "width": "70%"}},sablono.interpreter.interpret.call(null,React.createElement(React.addons.CSSTransitionGroup,{"transitionName": cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"anim","anim",-1276068045)), "transitionLeave": true, "transitionEnter": true, "transitionLeaveTimeout": (500), "transitionEnterTimeout": (500)},React.createElement("div",{"key": cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"cpt","cpt",262873405),(0)), "style": {"borderRadius": "30px", "width": "100%", "justifyContent": "center", "display": "flex", "position": "absolute", "boxShadow": "0px 0px 3px 0px black", "backgroundColor": "white", "height": "100%", "alignItems": "center"}},(function (){var attrs29187 = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"cpt","cpt",262873405),(0));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29187))?sablono.interpreter.attributes.call(null,attrs29187):null),((cljs.core.map_QMARK_.call(null,attrs29187))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29187)], null)));
})())))));
});
/**
 * Show or transition between application pages
 */
template.ui.app = (function template$ui$app(state){
return template.ui.page.call(null,state);
});

//# sourceMappingURL=ui.js.map?rel=1470995250900