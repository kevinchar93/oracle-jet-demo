/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a){a.ys=function(){this.id=null;this.depth=0;this.parent=null;this.children=[];this.rO=this.attr=this.title=null};a.ys.prototype.faa=function(a){return function(b,d){return b.attr&&d.attr&&b.attr[a]&&d.attr[a]?b.attr[a]<d.attr[a]?-1:b.attr[a]===d.attr[a]?0:1:b[a]<d[a]?-1:b[a]===d[a]?0:1}};a.ys.prototype.vca=function(a){return function(b,d){return b.attr&&d.attr&&b.attr[a]&&d.attr[a]?b.attr[a]<d.attr[a]?1:b.attr[a]===d.attr[a]?0:-1:
b[a]<d[a]?1:b[a]===d[a]?0:-1}};a.ys.prototype.V0=function(a){var b=a.key;"ascending"===a.direction?this.children.sort(this.faa(b)):"descending"===a.direction&&this.children.sort(this.vca(b));for(var b=0,d=this.children.length;b<d;b++)this.children[b].V0(a)};a.ic=function(f){var b;b=new a.ys;f.id||(b.id="root");this.data=this.JU({count:0},b,f);a.ic.r.constructor.call(this,b)};o_("JsonTreeDataSource",a.ic,a);a.b.ga(a.ic,a.Ap,"oj.JsonTreeDataSource");a.ic.prototype.Init=function(){a.ic.r.Init.call(this)};
a.b.g("JsonTreeDataSource.prototype.Init",{Init:a.ic.prototype.Init});a.ic.prototype.JU=function(f,b,d,c){var e,g,h,k,l,m,n;c||(c=0);for(k in d)if("children"==k||0==c&&d instanceof Array)for(e=0==c&&d instanceof Array?d:d[k],c++,n=0;n<e.length;n++){h=e[n];g=new a.ys;h.id||(f.count++,h.attr?h.attr.id||(h.attr.id="rid_"+f.count):g.id="rid_"+f.count);for(l in h)for(m in g)l==m&&"children"!=l&&(g[m]=h[l]),"depth"==m&&(g[m]=c);b.children.push(g);for(m in h)"children"==m&&this.JU(f,b.children[n],h,c)}return b};
a.ic.prototype.ff=function(a){a||(a=this.data.id);a=this.wo(this.data,a);return a.children?a.children.length:0};a.b.g("JsonTreeDataSource.prototype.getChildCount",{ff:a.ic.prototype.ff});a.ic.prototype.Nf=function(f,b,d){var c,e,g,h,k;g=[];f||(f=this.data.id);h=this.wo(this.data,f);b||(b=[],b.start=0,b.count=h.children.length);b.count||(b.count=h.children.length);b.start||(b.start=0);c=b.start;e=Math.min(h.children.length,c+b.count);for(b=c;b<e;b+=1)k=new a.ys,h.children[b].attr&&(k.attr=h.children[b].attr),
h.children[b].id&&(k.id=h.children[b].id),h.children[b].depth&&(k.depth=h.children[b].depth),h.children[b].title&&(k.title=h.children[b].title),h.children[b].parent&&(k.parent=h.children[b].parent),k.rO=0<h.children[b].children.length?!1:!0,g.push(k);f=new a.We(c,e,g,f);null!=d&&null!=d.success&&d.success.call(null,f)};a.b.g("JsonTreeDataSource.prototype.fetchChildren",{Nf:a.ic.prototype.Nf});a.ic.prototype.Eu=function(f,b){var d,c,e,g;e=[];f||(f=this.data.id);g=this.wo(this.data,f);d=[];d.start=
0;d.count=g.children.length;c=d.start;for(d=Math.min(g.children.length,c+d.count);c<d;c+=1)g.children[c].rO=0<g.children[c].children.length?!1:!0,e.push(g.children[c]);e=new a.We(0,e.length,e,f);null!=b&&null!=b.success&&b.success.call(null,e)};a.b.g("JsonTreeDataSource.prototype.fetchDescendants",{Eu:a.ic.prototype.Eu});a.ic.prototype.rd=function(){return"valid"};a.b.g("JsonTreeDataSource.prototype.moveOK",{rd:a.ic.prototype.rd});a.ic.prototype.move=function(f,b,d,c){var e;e=b;if(!e||e==this.data.id){if("inside"!=
d){a.q.log("Error: root can not be the reference node if position equals to "+d);return}e||(e=this.data.id)}f=this.wo(null,f);this.wo(f,e)?a.q.log("Error: the node to move contains the reference node as its sub-tree."):(b=this.wo(null,e),e=this.uJ(e),this.kka(f),"inside"==d?(this.lm(f,f.depth-(b.depth+1)),b.children.push(f)):"before"==d?(this.lm(f,f.depth-b.depth),d=e.children.indexOf(b),-1<d&&(0!=d?e.children.splice(d-1,0,f):e.children.unshift(f))):"after"==d?(this.lm(f,f.depth-b.depth),d=e.children.indexOf(b),
-1<d&&e.children.splice(d,0,f)):"first"==d?(this.lm(f,f.depth-b.depth),e.children.unshift(f)):"last"==d&&(this.lm(f,f.depth-b.depth),e.children.push(f)),null!=c&&null!=c.success&&c.success.call(null,this.data))};a.b.g("JsonTreeDataSource.prototype.move",{move:a.ic.prototype.move});a.ic.prototype.sort=function(a,b){var d;d=this.wo(this.data,this.data.id);d.V0(a);null!=b&&null!=b.success&&b.success.call(null,d)};a.b.g("JsonTreeDataSource.prototype.sort",{sort:a.ic.prototype.sort});a.ic.prototype.Am=
function(){return{key:null,direction:"none"}};a.b.g("JsonTreeDataSource.prototype.getSortCriteria",{Am:a.ic.prototype.Am});a.ic.prototype.uJ=function(a,b){var d,c=null;if(a==this.data.id)return null;b||(b=this.data);if(b.children&&0<b.children.length){for(d=0;d<b.children.length;d++)if(b.children[d].id&&b.children[d].id==a||b.children[d].attr&&b.children[d].attr.id==a)return b;for(d=0;d<b.children.length&&!(c=this.uJ(a,b.children[d]));d++);}return c};a.ic.prototype.wo=function(a,b){var d,c=null;a||
(a=this.data);if(a.id&&a.id==b||a.attr&&a.attr.id==b)return a;if(null!=a.children)for(d=0;d<a.children.length&&!c;d++)c=a.children[d].id&&a.children[d].id==b||a.children[d].attr&&a.children[d].attr.id==b?a.children[d]:this.wo(a.children[d],b);return c};a.ic.prototype.lm=function(a,b){var d;a.depth-=b;if(a.children&&0!=a.children.length)for(d=0;d<a.children.length;d++)this.lm(a.children[d],b)};a.ic.prototype.kka=function(a){var b;a.id?b=a.id:a.attr&&(b=a.attr.id);(b=this.uJ(b))||(b=this.data);a=b.children.indexOf(a);
-1<a&&b.children.splice(a,1)};a.ic.prototype.getCapability=function(a){return"fetchDescendants"===a?"enable":"sort"===a?"default":"batchFetch"===a?"disable":"move"===a?"full":null};a.b.g("JsonTreeDataSource.prototype.getCapability",{getCapability:a.ic.prototype.getCapability});a.We=function(f,b,d,c){a.l.nm(f,null);a.l.nm(b,null);this.Spa=c;this.Yo=f;this.yE=b;this.Vf=d};o_("JsonNodeSet",a.We,a);a.We.prototype.getParent=function(){return this.Spa};a.b.g("JsonNodeSet.prototype.getParent",{getParent:a.We.prototype.getParent});
a.We.prototype.ta=function(){return this.Yo};a.b.g("JsonNodeSet.prototype.getStart",{ta:a.We.prototype.ta});a.We.prototype.R=function(){return Math.max(0,this.yE-this.Yo)};a.b.g("JsonNodeSet.prototype.getCount",{R:a.We.prototype.R});a.We.prototype.getData=function(f){a.l.assert(f<=this.yE&&f>=this.Yo);f-=this.Yo;return this.Vf[f]?this.Vf[f].attr:null};a.b.g("JsonNodeSet.prototype.getData",{getData:a.We.prototype.getData});a.We.prototype.getMetadata=function(f){var b=[];a.l.assert(f<=this.yE&&f>=this.Yo);
f-=this.Yo;b.key=this.Vf[f].id?this.Vf[f].id:this.Vf[f].attr.id;b.leaf=this.Vf[f].rO;b.depth=this.Vf[f].depth;null==b.leaf&&(b.leaf=this.Vf[f].children&&0<this.Vf[f].children.length?!1:!0);return b};a.b.g("JsonNodeSet.prototype.getMetadata",{getMetadata:a.We.prototype.getMetadata});a.We.prototype.lm=function(a,b){var d;b++;a.depth=b;if(a.children&&0!=a.children.length)for(d=0;d<a.children.length;d++)this.lm(a.children[d],b)};a.We.prototype.Qf=function(f){var b,d,c;a.l.assert(f<=this.yE&&f>=this.Yo);
f-=this.Yo;d=this.Vf[f].depth;b=this.Vf[f].children;if(0==b.length)return null;f=this.Vf[f].id?this.Vf[f].id:this.Vf[f].attr.id;for(c=0;c<b.length;c++)this.lm(b[c],d);return new a.We(0,b.length,b,f)};a.b.g("JsonNodeSet.prototype.getChildNodeSet",{Qf:a.We.prototype.Qf})});