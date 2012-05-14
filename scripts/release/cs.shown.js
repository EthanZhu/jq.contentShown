/******************************************
 * gomesoft.com
 *
 * @author          Ethan.zhu（zhuyidong）
 * @version         Version 2.0
 * @copyright       Copyright (c) 2012 gomesoft.com
 * @license         This contentShown jQuery plug-in is dual licensed under the MIT and GPL licenses.
 * 
 * @docs            http://ethanzhu.github.com/jq.contentShown/
 * @demo            http://ethanzhu.github.com/jq.contentShown/img-demo.html;
 * 					http://ethanzhu.github.com/jq.contentShown/cont-demo.html
 * @link            http://www.gomesoft.com; http://www.cnblogs.com/zhuyidong/
 * @email			pig.whose@gmail.com; 12377166@qq.com
 * 
 *
 ******************************************/
(function($,undefined){function ContentShown(){this.debug=!1,this.blank="../content/images/blank.gif",this.func=function(){},this.classes=[],this.classes[""]={_nav:"cs-nav",_tlist:"cs-nav-list",_items:"cs-nav-items",_item:"cs-nav-item",_btn:"cs-nav-btn",_btnPrev:"cs-nav-prev",_btnNext:"cs-nav-next",_playBtn:"cs-play-btn",_playPrev:"cs-play-prev",_playNext:"cs-play-next",_active:"cs-nav-active",_hover:"cs-nav-hover",_aside:"cs-nav-aside",_scroll:"cs-nav-scroll",_sover:"cs-scroll-over",_tover:"cs-nav-over",_player:"cs-player",_message:"cs-tips-message",_tbackground:"cs-tips-background",_tinfo:"cs-tips-info",_pitem:"cs-player-item",_plist:"cs-player-list",_otitle:"cs-tips-ot",_tbtn:"cs-tips-btn",_ptype:"cs-player-type",_addtional:"cs-nav-addtional"},this._defaults={id:null,navSpace:27,pWidth:0,pHeight:0,navNum:4,navPlace:null,autoPlay:!0,autoTime:4e3,events:"mouseenter",tbgAnimate:null,tbgSpeed:"fast",addtional:!1,step:1,navSpeed:"fast",opacity:.6,data:null,loop:!0,player:!0,animate:"fade",showTips:!1,tipsAnimate:"fade",selected:1,callback:null,preLoad:!0,target:"_blank",pSpeed:500,pType:!1,nContent:"image",pContent:"image",listPlace:null,tipsBtn:!1,loadClass:"cs-player-loading",missing:"cs-load-missing",playBtn:!1,playBtnShow:null},$.extend(this._defaults,this.classes[""])}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}var PROP_NAME="contentShown";$.extend(ContentShown.prototype,{marker:"hasContentShown",log:function(){this.debug&&console.log.apply("",arguments)},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_initContentShown:function(elem,settings){var self=this,id=elem.id,$elem=$(elem),inline=null,name,val;for(name in self._defaults){val=elem.getAttribute("date:"+name);if(val){inline=inline||{};try{inline[name]=eval(val)}catch(err){inline[name]=val}}}id||(self.uuid+=1,elem.id="cs"+self.uuid),self._defaults.id=elem.id;var inst=self._newInst($(elem));inst.settings=$.extend({},settings||{},inline||{});if($elem.hasClass(self.marker))return;$elem.addClass(self.marker),$.data(elem,PROP_NAME,inst),self._instData(inst)},_instData:function(a){var b=this,c=b._g(a,"data"),d=a.data,e,f,g,h;if(c&&typeof c!="undefined"){e=c.length;if(!d){a.data=[];for(h=0;h<e;h++)g=c[h],$.isEmptyObject(g)?b.func:a.data.push(g)}else{f=d.length;for(var h=0;h<e;h++)g=c[h],$.isEmptyObject(g)||(h<f?a.data[h]=g:a.data.push(g))}}typeof a.data=="object"&&$.isArray(a.data)&&(a.total=a.data.length,b._initOption(a),b._initHtml(a),b._initEvents(a))},_initOption:function(a){var b=this,c=b._g(a,"navNum"),d=a.total,e=b._g(a,"step"),f=b.func,g,h,i,j,k;a.loaded=[],a.images=[],e=e<d?e<c?b._g(a,"step"):parseInt(c/2):1,c==d?extendRemove(a.settings,{loop:!1}):f,extendRemove(a.settings,{step:e}),g=b._g(a,"selected"),g>a.total?(a.selected=0,g=1):a.selected=g-1;if(a.selected>0){h=a.data[g];for(k=g;k>0;k--)a.data[k]=a.data[k-1];a.data[0]=h,a.selected=0}i=b._g(a,"player"),a.firstPlay=!1,a.$playBtns=a.$player="";if(i){var l,m,n,o;a.$player=$('<div class="'+b._g(a,"_player")+'" />'),m=b._g(a,"loadClass"),b._g(a,"preLoad")&&(a.$player.hasClass(m)?a.$player.hasClass(m)&&a.$player.removeClass(m):a.$player.addClass(m)),l=$('<ul class="'+b._g(a,"_plist")+'" />'),l.appendTo(a.$player),l=null,b._g(a,"playBtn")&&(n=b._g(a,"_playBtn"),o=b._g(a,"playBtnShow")!="always"?' style="display:none;"':"",a.$playBtns=$('<div class="'+n+" "+b._g(a,"_playPrev")+'"'+o+'></div><div class="'+n+" "+b._g(a,"_playNext")+'"'+o+"></div>"))}a.$nav=$('<div class="'+b._g(a,"_nav")+'" />'),j=b._g(a,"_btn"),a.$btnPrev=$('<div class="'+j+'"><span class="'+b._g(a,"_btnPrev")+'" />'),a.$btnNext=$('<div class="'+j+" "+b._g(a,"_aside")+'"><span class="'+b._g(a,"_btnNext")+'" />'),a.$navList=$('<div class="'+b._g(a,"_tlist")+'" />'),b._g(a,"showTips")?(a.$tipsBg=$('<div class="'+b._g(a,"_tbackground")+'" />').css("opacity",b._g(a,"opacity")),a.$tipsInfo=$('<div class="'+b._g(a,"_tinfo")+'" />')):(a.selfipsBg="",a.selfipsInfo=""),typeof c=="string"&&(extendRemove(a.settings,{loop:!1,tbgAnimate:!1,navPlace:null}),a.$btnPrev=a.$btnNext=""),b._g(a,"tbgAnimate")?(a.$scroll=$('<div class="'+b._g(a,"_scroll")+'"><a href="#" target="'+b._g(a,"target")+'">&nbsp;</a></div'),a.navOver=b._g(a,"_sover")):(a.$scroll="",a.navOver=b._g(a,"_tover"))},_getAttribute:function(a,b,c,d,e){var f,g,h,i,j,k,l;j=d||"",k=e||"",h=c,b===""?(f="javascript:void(0)",h="_self"):f=b,typeof a=="string"?(g=a,i=""):(l=$.isArray(a)?a[0]:a,$.isEmptyObject(l)?(g=null,i=null):(f=l.l?l.l:f,g=l.t?l.t:"",h=l.g?l.g:h,i=l.a?l.a:"",j=l.w?l.w:j,k=l.h?l.h:k));if(g)return{t:g,l:f,g:h,a:i,w:j,h:k}},_initHtml:function(a){var b=this,c=a.data;a.$elem.html("");var d,e,f,g,h,i=b._g(a,"target"),j=a.total,k=b._g(a,"pWidth"),l=b._g(a,"pHeight"),m=b._g(a,"navNum"),n=b._g(a,"pContent"),o=b._g(a,"nContent"),p=b._g(a,"preLoad"),q=b._g(a,"_item"),r=b._g(a,"_pitem"),s=b._g(a,"player"),t=b.blank,u=b.func,v=$('<ul class="'+b._g(a,"_items")+'" />'),w=function(c,d,e,f){var g,h,m=null,n,o;return e=="play"?(h=b._getAttribute(c.b,d,i,k,l),o=r):(h=b._getAttribute(c.s,d,i),o=q),typeof h!="undefined"?(h.w&&h.h&&h.w!=""&&h.h!=""?m=p?'<img data-origital="'+h.t+'" src="'+t+'" width="'+h.w+'" height="'+h.h+'" alt="'+h.a+'">':'<img src="'+h.t+'" width="'+h.w+'" height="'+h.h+'" alt="'+h.a+'">':m=p?'<img data-origital="'+h.t+'" src="'+t+'" alt="'+h.a+'">':'<img src="'+h.t+'" alt="'+h.a+'">',n=$(['<li class="'+o+'"><a href="'+h.l+'" target="'+h.g+'">'+m+"</a></li>"].join(""))):n=$(['<li class="'+o+'">Missing data.</li>'].join("")),e=="play"?n.css({"z-index":j-f,opacity:0}):u,p||$(m).load(function(){n.attr("data-missing","false"),n.find("img").unbind()}).error(function(){n.attr("data-missing","true"),n.find("img").addClass(b._g(a,"missing")).attr("src",t).unbind()}),n},x=function(a,b,c){var d=null,e,f=c==="nav"?q:r;if(typeof a=="string")d=$("<div>"+a+"</div>"),e=d.find("a"),typeof e[0]!="undefined"?(e.attr("target",i),d=$(['<li class="'+f+'">'+a+"</li>"].join(""))):typeof b!="undefined"?d=$(['<li class="'+f+'"><a href="'+b+'" target="'+i+'">'+a+"</a></li>"].join("")):d=$(['<li class="'+f+'">'+a+"</li>"].join(""));else if(typeof a=="object"&&!$.isEmptyObject(a)){var g=a.l?a.l:b,h=a.g?a.g:i,j=a.p;d=$("<div>"+j+"</div>"),e=d.find("a"),d=typeof e[0]!="undefined"?(e.attr("target",h),$(['<li class="'+f+'">'+j+"</li>"].join(""))):$(['<li class="'+f+'"><a href="'+g+'" target="'+h+'">'+j+"</a></li>"].join(""))}return d},y=function(a,b){for(d=0;d<j;d++){h=a[d],f=h.l;if(!$.isEmptyObject(h)){switch(b){case"image":e=w(h,f);break;case"num":e=$(['<li class="'+q+'"><span>'+(d+1)+"</span></li>"].join(""));break;case"content":e=x(h.s,f,"nav");break;default:e=$(['<li class="'+q+'"><span>&nbsp;</span></li>'].join(""))}e.attr("data-index",d),e.appendTo(v)}}};if(s){k=k?k:"",l=l?l:"",a.$player.css({width:k,height:l});for(d=0;d<j;d++)h=c[d],f=h.l,$.isEmptyObject(h)||(g=n=="content"?x(h.b,f):w(h,f,"play",d),g.css({width:k,height:l}),a.images.push(g),p?"":a.loaded.push(g),a.$player.find("ul."+b._g(a,"_plist")).append(g),g=null)}y(c,o),v.appendTo(a.$navList),typeof m=="number"&&(b._g(a,"tbgAnimate")&&(b._g(a,"events")=="click"?a.$scroll.find("a").remove():"",a.$scroll.appendTo(a.$navList)),j<=m&&(a.$btnPrev=a.$btnNext="")),b._g(a,"showTips")&&a.$tipsInfo.append($('<div class="'+b._g(a,"_message")+'" />')),a.$nav.append(a.$btnPrev,a.$navList,a.$btnNext),b._g(a,"ptype")&&(a.$playType=$('<div class="'+b._g(a,"_ptype")+'" />')),a.$elem.append(a.$player,a.$nav,a.$tipsBg,a.$playType,a.$tipsInfo,a.$playBtns);if(s){var z=b._g(a,"animate"),A=a.$player.find("li."+r);switch(z){case"left":A.css({left:k,opacity:1});break;case"right":A.css({left:0-k,opacity:1});break;case"top":A.css({top:0-l,opacity:1});break;case"bottom":A.css({top:l,opacity:1})}A=null}var B=b._g(a,"navPlace"),C,D,E,F=b._g(a,"navSpace"),G=F*m;typeof m=="number"&&(C=a.$navList.find("li:first"),B=="lr"?(k=C.outerWidth(!0),l=G,E=k,D=j*F):(k=G,l=C.outerHeight(!0),E=j*F,D=l),a.$navList.css({width:k,height:l}),b._g(a,"listPlace")=="center"&&(B=="lr"?a.$navList.css({top:"50%","margin-top":0-parseInt(l/2)}):a.$navList.css({left:"50%","margin-left":0-parseInt(k/2)})),v.css({width:E,height:D,position:"absolute",top:0,left:0})),a.$navList=v,v=null;var H,I,J;H=a.$navList.find("li"),m=="css"&&b._g(a,"addtional")&&(a.$addtional=$('<div class="'+b._g(a,"_addtional")+'" />'),H.each(function(){I=$(this),I.height(I.find("img").height()),I.width(I.find("img").width())}),a.$nav.append(a.$addtional.append(a.$navList.clone()))),p?H.each(function(a){J=$(this).find("img"),img=J[0],typeof img!="undefined"?img.src=J.attr("data-origital"):u}):u,B=B=="lr"?"top":"left",b._g(a,"loop")?H.each(function(a){$(this).css(B,a*F).css("position","absolute"),a==j-1&&(v=null)}):u,b._extendNav(a)},_extendNav:function(a){return},_initEvents:function(a){var b=this;b._element(a),b._mobile(a),b._navBtns(a),b._navItem(a),b._playBtns(a),b._selected(a),b._end(a)},_end:function(a){for(var b in a)a[b]===""?a[b]=null:this.func;var c=$.support;!c.opacity&&!c.style&&!c.tbody&&CollectGarbage()},_mobile:function(a){},_element:function(a){var b=this,c=b._g(a,"autoPlay"),d=b._g(a,"loop"),e=b.func,f,g=b._g(a,"playBtnShow");f=a.$playBtns,a.$elem.mouseenter(function(){a.hoverPause=!0,d?e:a.cSelected=a.selected,c?b.stop(a.id):e,f&&f!=""&&g!="always"?f.fadeIn():e}).mouseleave(function(){a.hoverPause=!1,b.startAt(a.id),f&&f!=""&&g!="always"?f.fadeOut():e}).delegate("a","focus",function(){this.blur&&this.blur()})},_navItem:function(a){var b=this,c=b._g(a,"navNum"),d=b._g(a,"addtional"),e=b._g(a,"_item"),f=a.$navList,g=f.find("li."+e),h=b._g(a,"events");c=="css"&&d&&(f=a.$addtional.find("ul")),f.delegate("li."+e,h,function(c){var e=$(this),f=e.attr("data-index");h=="click"&&c.preventDefault(),f!=a.selected&&(d?b._selected(a,g.eq(f)):b._selected(a,e))}),f=null},_navBtns:function(a){var b=this,c,d=function(){c=a.$btnPrev;if(!c||c=="")return;c.unbind().bind("click",function(){a.btnClick&&b._scrollByStep(a,"prev",!0)})},e=function(){c=a.$btnNext;if(!c||c=="")return;c.unbind().bind("click",function(){a.btnClick&&b._scrollByStep(a,"next")})},f=function(){var c=a.$nav.find("."+b._g(a,"_btn")),d=b._g(a,"_active"),e=b._g(a,"_hover"),f=b._g(a,"_aside");c&&c.addClass(d),b._g(a,"loop")||a.selected+1<=b._g(a,"navNum")&&c.each(function(){var a=$(this);a.hasClass(f)?a.addClass(d):a.removeClass(d)}),c.hover(function(){var a=$(this);a.hasClass(d)&&a.addClass(e)},function(){var a=$(this);a.hasClass(d)&&a.hasClass(e)&&a.removeClass(e)})};e(),d(),f(),a.$nav=null},_selected:function(a,b){var c=this,d=c._g(a,"tbgSpeed"),e=a.navOver,f=c._g(a,"navPlace"),g=c._g(a,"tbgAnimate"),h=c._g(a,"nContent"),i=a.$navList,j=c._g(a,"loop"),k=c.func,l,m,n,o,p;a.btnClick=!1,a.firstPlay||(a.firstPlay=!0),b?k:j?b=i.find("li").eq(0):b=i.find("li").eq(a.selected),l=b.attr("data-index"),a.firstPlay?(a.selected=-1,a.firstPlay=!1):k,a.selected=a.cSelected=parseInt(l),a.selected_=b.index();if(h=="image"){var q=b.find("img"),r=c._g(a,"opacity");typeof q[0]!="undefined"?q.stop().animate({opacity:1},"fast"):k,b.siblings().each(function(){var a=$(this),b=a.find("img");typeof b[0]!="undefined"?b.stop().animate({opacity:r},"fast"):k})}n=b.position(),f==="lr"?(n=parseInt(n.top),o=parseInt(i.css("top"))):(n=parseInt(n.left),o=parseInt(i.css("left"))),p=n-Math.abs(o);var s=c._g(a,"navSpace"),t=c._g(a,"navNum"),u=s*(t-1),v=function(){a.btnClick=!0,p>u&&c._scrollByStep(a,"next"),p<0&&(j||(a.selected==0?c._resetNav(a):c._scrollByStep(a,"prev")))};c._display(a),g?(m=a.$scroll,$scrollLink=m.find("a"),scrollLink=$scrollLink[0],$objLink=b.find("a:first"),objLink=$objLink[0],f=="lr"?m.stop(!0,!0).animate({top:p},d,v):m.stop(!0,!0).animate({left:p},d,v)):v(),c._extendStyle(a),b.addClass(e).siblings().removeClass(e)},_extendStyle:function(a){return},_scrollByStep:function(a,b,c){var d=this,e=a.total,f=d._g(a,"navNum"),g=d._g(a,"navSpace"),h=d._g(a,"step"),i=d._g(a,"navSpeed"),j=a.$navList,k=d._g(a,"navPlace"),l=d._g(a,"loop"),m=d.func,n=d._g(a,"tbgAnimate"),o=d._g(a,"tbgSpeed"),p=g*h,q=(e-f)*g,r,s,t,u=0,v=a.$scroll,w=k==="lr"?"top":"left",x=b==="prev"?"next":"prev";if(!l){d._enabledBtn(a,x),r=parseInt(j.css(w));if(b==="next"){if(Math.abs(r)===q)return;a.btnClick=!1,s=Math.abs(r)+p,s>q?(u=s-q,s=q):m,s=0-s,p=0-p}else if(b==="prev"){if(Math.abs(r)===0)return;a.btnClick=!1,s=r+p,s>0?(u=0-s,s=0):m,q=0}d._scrollNav(a,s,function(){Math.abs(parseInt(j.css(w)))===q?d._disabledBtn(a,b):m,n?m:a.btnClick=!0}),n&&(t=parseInt(v.css(w))+p,k==="lr"?v.animate({top:t+u},o,function(){a.btnClick=!0}):v.animate({left:t+u},o,function(){a.btnClick=!0}))}else{a.btnClick=!1;var y,z,A,B=d._g(a,"_item"),C,D,E,F;q=e*g,b==="next"?(F=function(){E=j.find("li."+B),E.each(function(a){$(this).css(w,(a-h)*g)}),j.css(w,0),j=null,E.slice(0,h).detach().insertAfter(E.last()).each(function(b){y=$(this),y.css(w,q+parseInt(y.css(w))),b==h-1&&(A=d._indexAt(a),a.selected_=A.index(),n&&(D=parseInt(d._indexAt(a).css(w)),C=parseInt(a.$scroll.stop(!0,!0).css(w)),C!=D&&v.css(w,D)),a.btnClick=!0),y=null}),E=null},k==="lr"?(n?(C=parseInt(v.css(w))-p,v.animate({top:C},o)):m,j.animate({top:0-p},i,F)):(n?(C=parseInt(v.css(w))-p,v.animate({left:C},o)):m,j.animate({left:0-p},i,F))):(E=j.find("li."+B),E.each(function(a){y=$(this),y.css(w,(a+h)*g)}),j.css(w,0-p),E.slice(e-h).detach().insertBefore(E.slice(0,1)).each(function(){y=$(this),y.css(w,parseInt(y.css(w))-q)}),F=function(){A=d._indexAt(a),a.selected_=A.index(),n&&(D=parseInt(d._indexAt(a).css(w)),C=parseInt(a.$scroll.stop(!0,!0).css(w)),C!=D&&v.css(w,D),a.btnClick=!0,j=null)},k==="lr"?(n?(C=parseInt(v.css(w))+p,v.animate({top:C},o)):m,j.animate({top:0},i,F)):(n?(C=parseInt(v.css(w))+p,v.animate({left:C},o)):m,j.animate({left:0},i,F)))}},_playBtns:function(a){var b,c=this,d=a.$playBtns,e,f,g=a.$navList.find("li"),h=c._g(a,"loop"),i=a.total;d&&d!=""&&d.mouseenter(function(){c.startAt(a.id)}).click(function(){e=h?a.selected_:a.selected;if(a.btnClick)if($(this).hasClass(c._g(a,"_playNext"))){if(h)g=a.$navList.find("li");else if(e==i-1)return;e=parseInt(e)+1,f=g.eq(e),c._selected(a,f)}else{if(h)e==0?c._scrollByStep(a,"prev"):c.func,g=a.$navList.find("li"),e=c._indexAt(a).index();else if(e==0)return;e=parseInt(e)-1,f=g.eq(e),c._selected(a,f)}})},_scrollNav:function(a,b,c){var d=a.$navList,e=this._g(a,"navSpeed"),f=this._g(a,"navPlace"),g=c||function(){};f=="lr"?d.animate({top:b},e,g):d.animate({left:b},e,g)},_enabledBtn:function(a,b){var c=this._g(a,"_active"),d;d=b==="prev"?a.$btnPrev:a.$btnNext,d.hasClass(c)?this.func:d.addClass(c)},_disabledBtn:function(a,b){var c=this._g(a,"_active"),d=this._g(a,"_hover"),e,f=this.func;e=b==="prev"?a.$btnPrev:a.$btnNext,e.hasClass(c)?(e.removeClass(c),e.hasClass(d)?e.removeClass(d):f):f},stop:function(a){var b=this._getInst($("#"+a)[0]);b.timeOutID&&clearTimeout(b.timeOutID)},startAt:function(a){var b=this._getInst($("#"+a)[0]);b.timeOutID&&clearTimeout(b.timeOutID);var c=this,d=b.$scroll,e=c._g(b,"loop"),f=c._g(b,"navSpace"),g=c._g(b,"navPlace"),h=c._g(b,"navNum"),i=(h-1)*f,j=c._g(b,"tbgAnimate"),k=c._indexAt(b),l,m,n,o;if(e)l=g=="lr"?k.css("top"):k.css("left"),l=parseInt(l),parseInt(l)>i&&(j&&(l=g=="lr"?parseInt(d.css("top")):parseInt(d.css("left")),l>i?g=="lr"?d.css("top",0):d.css("left",0):c.func),c._selected(b));else{o=b.$navList,l=k.position(),m=g=="lr"?o.css("top"):o.css("left"),l=g=="lr"?l.top:l.left,m=Math.abs(parseInt(m)),l=Math.abs(parseInt(l));if(l<m)b.selected=parseInt(m/f);else if(m+i<l){b.selected=parseInt(m/f);if(j){var n=g=="lr"?parseInt(d.css("top")):parseInt(d.css("left"));n>i?g=="lr"?d.css("top",0):d.css("left",0):""}}else b.cSelected=b.selected;b.cSelected!=b.selected&&c._selected(b)}c.start(a)},start:function(a){var b=this,c=b._getInst($("#"+a)[0]),d=b.func;c.timeOutID?clearTimeout(c.timeOutID):d,c.haveLoad&&b._g(c,"autoPlay")&&(c.timeOutID=null,c.timeOutID=b._g(c,"autoPlay")?setTimeout(function(){b._auto(c)},b._g(c,"autoTime")):d)},_auto:function(a){var b=this,c=null;a.timeOutID&&a.haveLoad&&(b._g(a,"loop")?(a.selected_=a.selected_<a.total-1?++a.selected_:0,c=a.$navList.find("li").eq(a.selected_)):(a.selected=a.selected<a.total-1?++a.selected:0,c=a.$navList.find("li").eq(a.selected)),b._selected(a,c))},setCallback:function(a){var b=this._getInst($("#"+a)[0]);b.backOptions={id:b.id,total:b.total,selected:b.selected,curNav:this._indexAt(b),curPlay:b.$curPlay}},_display:function(a){var b=this,c=a.id,d=b._g(a,"callback"),e=b.func,f=b._g(a,"player");b.stop(c),d?(b.setCallback(c),d(a.backOptions)):e;if(f){var g=a.$player,h=b._g(a,"animate"),i=a.$navList,j=b._g(a,"pContent"),k=a.total,l=a.images,m=a.selected,n,o,p,q=b.blank,r,s,t=b._g(a,"preLoad"),u,v,w=function(a){return l[a]},x=function(a){n=a.find("img"),n.each(function(){v=$(this),typeof v[0]!="undefined"&&(o=v[0].src,p=v.attr("data-origital"),p&&p!=""?o==q?v[0].src=p:o!=p?v[0].src=p:e:e)})};r=a.$curPlay=w(m),s=a.$played,r.siblings().find("img").unbind(),u=r.index();var y=r.find("img"),z=typeof y[0]!="undefined"?y.size():0;a.haveLoad=!1;if(a.loaded[u])a.haveLoad=!0,b.playStart(c);else{t?x(r):e;var A=function(){a.haveLoad=!0,b.playStart(c)};s&&typeof s!="undefiend"&&s.css("opacity","0.3"),j=="image"?z>0?y.load(function(){r.attr("data-missing","false"),$(this).unbind(),A()}).error(function(){v=$(this),r.attr("data-missing","true"),v.addClass(b._g(a,"missing")),v[0].src=b.blank,v.unbind(),A()}):A():j=="content"&&(z>0&&y.each(function(c){v=$(this),v.load(function(){r.attr("data-missing","false")}).error(function(){v=$(this),r.attr("data-missing","true"),v.addClass(b._g(a,"missing")),v[0].src=b.blank})}),A()),a.loaded[u]=r}}else a.haveLoad=!0,a.hoverPause||b.start(a.id)},_indexAt:function(a){var b=a.selected,c=a.$navList.find("li"),d,e,f=null,g;for(d=0,e=c.length;d<e;d++){g=$(c[d]);if(parseInt(g.attr("data-index"))===b){f=g;break}}return f},_doPlayer:function(a){var b=this,c=b._g(a,"animate"),d=b._g(a,"pSpeed"),e=a.total,f=b._g(a,"pWidth"),g=b._g(a,"pHeight"),h=a.$curPlay,i=a.$played;if(!a.playPause&&h){switch(c){case"fade":b._pf(h,d,e,function(){a.$played=h});break;case"left":b._plr(h,f,e,d,function(){a.$played=h,h.siblings().css("left",f)},"left");break;case"right":b._plr(h,f,e,d,function(){a.$played=h,h.siblings().css("left",0-f)});break;case"bottom":b._pbt(h,g,e,d,function(){a.$played=h,h.siblings().css("top",g)},"bottom");break;case"top":b._pbt(h,g,e,d,function(){a.$played=h,h.siblings().css("top",0-g)});break;default:h.stop().css({opacity:1,"z-index":e}).show().siblings().css({opacity:0,"z-index":0}).hide()}b._setTipsInfo(a),a.hoverPause||b.start(a.id)}},_setTipsInfo:function(a){var b=this,c=b.func;if(b._g(a,"showTips")){var d=a.$tipsBg,e=a.$tipsInfo,f=a.selected,g=a.data[f],h=g.l,i=b._g(a,"target"),j=b._g(a,"ptype"),k=b._g(a,"_ptype"),l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A="",B;j&&(o=g.tp,p=o?k+" "+k+"-"+o:k,a.$playType[0].className=p);var C=function(a,b,c){return typeof a=="string"&&a!=""?y=b=="none"?a:'<a href="'+b+'" target="'+c+'">'+a+"</a>":typeof a=="object"?(t=a.l?a.l:b,u=a.g?a.g:c,y=b=="none"?a.t:'<a href="'+t+'" target="'+u+'">'+a.t+"</a>"):""},D=function(a,b,c){if(a&&!$.isArray(a))return C(a,b,c);z=a.length,A="";for(s=0;s<z;s++)A+=C(a[s],b,c);return A},E=function(c,d,e){p=b._g(a,"_otitle"),B=[];if(typeof c=="string")return'<p class="'+p+'">'+c+"</p>";if(typeof c=="object"){if(c&&!$.isArray(c))return'<p class="'+p+'"><label class="name">'+C(c.n,"none")+": </label>"+D(c.list,d,e)+"</p>";q=c.length;for(r=0;r<q;r++)y=c[r],B.push('<p class="'+p+'">'),B.push('<label class="name">'+y.n+": </label>"),B.push(D(y.list,d,e)),B.push("</p>");return B.join("")}},F=function(a,b,c,d){tipBtn='<a class="'+d+'" href="'+b+'" target="'+c+'"></a>';if(typeof a=="string")tipBtn='<a class="'+d+" "+d+"-"+a+'" href="'+b+'" target="'+c+'"></a>';else if(typeof a=="object"){x=function(a,e){return $.isEmptyObject(a)?tipBtn:(t=a.l?a.l:b,u=a.g?a.g:c,thisStyle=a.c?d+"-"+a.c:d,v=a.t?a.t:"",w=a.t_?a.t_:"",e&e>0?'<a class="'+d+" "+d+e+" "+thisStyle+'" href="'+t+'" target="'+u+'" title="'+v+'">'+w+"</a>":'<a class="'+d+" "+thisStyle+'" href="'+t+'" target="'+u+'" title="'+v+'">'+w+"</a>")};if($.isArray(a)){for(r=0;r<a.length;r++)A+=x(a[r],r);tipBtn=A}else tipBtn=x(a)}return tipBtn},G="",H=C(g.t,h,i),I=C(g.t1,h,i),J="";H=H!=""?"<h2>"+H+"</h2>":"",I=I!=""?"<h3>"+I+"</h3>":"",G+=H+I,n=g.ot,n=n?E(n,h,i):"",n?c:n="",l=g.m?'<p class="info">'+g.m+"</p>":"",J=H==""&&I==""||n==""&&l==""?"":'<hr class="separator" />',G+=J+n+l,b._g(a,"tipsBtn")&&(G+=F(g.b_,h,i,b._g(a,"_tbtn"))),b._tipsAnimate(a,G)}},_tipsAnimate:function(a,b){var c=a.$tipsInfo,d=a.$tipsBg,e=this._g(a,"tipsAnimate"),f=c.find("div");switch(e){case"slide":b!=""?(f.html("").html(b),c.stop(!1,!0).slideUp("normal").stop(!1,!0).slideDown("normal"),d.stop(!1,!0).slideUp("normal").stop(!1,!0).slideDown("normal")):(f.html(""),c.stop(!1,!0).slideUp("fast"),d.stop(!1,!0).slideUp("fast"));break;case"fade":b!=""?(f.html("").html(b),c.stop(!1,!0).fadeOut("normal").stop(!1,!0).fadeIn("normal"),d.stop(!1,!0).fadeOut("normal").stop(!1,!0).fadeIn("normal")):(f.html(""),c.stop(!1,!0).fadeOut("fast"),d.stop(!1,!0).fadeOut("fast"));break;default:b!=""?(f.html("").html(b),c.show(),d.show()):(f.html(""),c.hide(),d.hide())}},_pf:function(a,b,c,d){var e=d||function(){};a.siblings().each(function(a){$(this).css({"z-index":c-a})}),a.siblings().stop().animate({opacity:0},b),a.css("z-index",c+1).stop().animate({opacity:1},b,e)},_plr:function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this,n=e||function(){};f==="left"?(g=b,h=0-b):(g=0-b,h=b),a.siblings("li").each(function(a){l=$(this),l.css({"z-index":c-a}),i=parseInt(l.css("left")),j=f==="left"?g:h,i<j&&i>=0?l.animate({left:h},d,function(){l.css({left:g})}):m.func}),k=a.css("opacity"),k&&k<1&&a.css("opacity",1),a.stop(!0,!0).css({"z-index":c+1,left:g}).animate({left:0},d,n)},_pbt:function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this,n=e||function(){};f==="bottom"?(g=b,h=0-b):(g=0-b,h=b),a.siblings("li").each(function(a){l=$(this),l.css({"z-index":c-a}),i=parseInt(l.css("top")),j=f==="bottom"?g:h,i<j&&i>=0?l.animate({top:h},d,function(){l.css({top:g})}):m.func}),k=a.css("opacity"),k&&k<1&&a.css("opacity",1),a.stop(!0,!0).css({"z-index":c+1,top:g}).animate({top:0},d,n)},playPause:function(a){var b=this._getInst($("#"+a)[0]);b.playPause=!0},playStart:function(a){var b=this._getInst($("#"+a)[0]);b.playPause?b.playPause=!1:this._doPlayer(b)},_resetNav:function(a){var b=this,c=b._g(a,"tbgAnimate"),d=b._g(a,"navPlace"),e=b._g(a,"tbgSpeed"),f=a.$scroll;b._scrollNav(a,0,function(){b._enabledBtn(a),b._disabledBtn(a,"prev")}),c?d=="lr"?f.css({top:0},e):f.css({left:0},e):b.func},_newInst:function(a){var b=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:b,$elem:a,$nav:null,$btnPrev:"",$btnNext:"",$scroll:"",$navList:"",$player:"",$tipsBg:"",$tipsInfo:"",$playType:"",$playBtns:"",$played:null,$curNav:null,$curPlay:null,hoverPause:!1,haveLoad:!1,selected:0,selected_:0,timeOutID:null,cSelected:0,loaded:[],navOver:null,data:null,images:[],total:0,btnClick:!0,firstPlay:null,build:!1,playPause:!1,$extend:null,extend_:0}},_g:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this contentShown"}},_optionContentShown:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.contentShownT._defaults):d?b=="all"?$.extend({},d.settings):this._g(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c),d&&(extendRemove(d.settings,e),d.build?d.build=!1:this._instData(d)),d=null},_extendRemove:function(a,b){extendRemove(a,b)}}),$.fn.contentShown=function(a){if(!this.length)return this;$.contentShown.initialized||($.contentShown.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.contentShown["_"+a+"ContentShown"].apply($.contentShown,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.contentShown["_"+a+"ContentShown"].apply($.contentShown,[this].concat(b)):$.contentShown._initContentShown(this,a)})},$.contentShown=new ContentShown,$.contentShown.initialized=!1,$.contentShown.uuid=(new Date).getTime(),$.contentShown.version="@VERSION"})(jQuery),window.zydContentShown=!0