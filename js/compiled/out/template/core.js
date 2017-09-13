// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('template.ui');
goog.require('template.util');
goog.require('template.state');
cljs.core.enable_console_print_BANG_.call(null);
template.core.render_app = (function template$core$render_app(dom_node){

return (function (_,a,o,n){
return ReactDOM.render(template.ui.page.call(null,a),dom_node);
});
});
template.core.main = (function template$core$main(){

var temp__4657__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
cljs.core.add_watch.call(null,template.state.app_state,new cljs.core.Keyword(null,"render","render",-1408033454),template.core.render_app.call(null,node));

return ReactDOM.render(template.ui.page.call(null,template.state.app_state),node);
} else {
return null;
}
});
template.core.main.call(null);
document.onkeydown = (function (p1__40305_SHARP_){
if((cljs.core._EQ_.call(null,(37),p1__40305_SHARP_.keyCode)) || (cljs.core._EQ_.call(null,(8),p1__40305_SHARP_.keyCode))){
return template.util.go_to_previous.call(null,template.state.app_state);
} else {
if((cljs.core._EQ_.call(null,(39),p1__40305_SHARP_.keyCode)) || (cljs.core._EQ_.call(null,(32),p1__40305_SHARP_.keyCode))){
return template.util.go_to_next.call(null,template.state.app_state);
} else {
if(cljs.core._EQ_.call(null,(13),p1__40305_SHARP_.keyCode)){
return cljs.core.swap_BANG_.call(null,template.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),(function (x){
return cljs.core.not.call(null,x);
}));
} else {
return null;
}
}
}
});

//# sourceMappingURL=core.js.map?rel=1505303162212