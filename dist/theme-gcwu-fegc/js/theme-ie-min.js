/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-22 02:38 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var j=pe.menu.navcurrent(b.menubar,b.bcrumb),e=j.parents("div.mb-sm"),h,i,f=pe.mobile,k=(f?["gcwu-wmms"]:["gcwu-wmms","gcwu-sig"]),l,g,d=pe.print,m=b.sft.length!==0;if(!pe.svg||pe.svgfix){i=k.length;while(i--){l=document.getElementById(k[i]);if(l!==null){g=l.getElementsByTagName("object");if(g.length>0){g=g[0];g.parentNode.innerHTML=g.parentNode.innerHTML.replace(/<object[\s\S]*?\/object>/i,((d||!m)?g.innerHTML:g.innerHTML.replace(".png","-w.png")))}else{if(m){h=l.getElementsByTagName("img");if(h.length>0){h=h[0];h.src=(d?h.src:h.src.replace(".png","-w.png"))}}}}}}if(e.length!==0){e.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){j=pe.menu.navcurrent(pe.secnav,b.bcrumb);e=j.parents("ul");e.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){j=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var y,P="",e,p,Y=pe.dic.get("%settings"),C=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),D,u,f,n,W,ab="",w='<a data-role="button" data-iconpos="notext"',F=' data-rel="popup" data-position-to="window"',r=w+F,G='<div data-role="popup" data-overlay-theme="a"',J='<div data-role="header"',aa=J+"><h1>",E=' data-theme="c" class="ui-corner-all">',s=J+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',X=w+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",S=r+' data-icon="back" class="ui-btn-left"',Q=">"+pe.dic.get("%back")+"</a>",Z="</div></div>",q='<ul data-role="listview"',z="",M,m,v,t,L,g,d,V,U,x,o,N,I,k,B=c(document),R,l,A,O,K,T,H;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");y=G+' id="jqm-wb-mb">'+aa+e+"</h1>"+X+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){I=b.bcrumb[0];M=I.getElementsByTagName("a");if(M.length!==0){R=M[0].href}y+='<section><div id="jqm-mb-location-text">'+I.innerHTML+"</div></section>"}else{y+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){P+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){P+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}y+='<div id="jqm-mb-menu"></div></nav></div></div></div>';ab+=y;b.menu=P;z+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");x=f.length;while(x--){f[x].setAttribute("data-role","none")}W=G+' id="jqm-wb-search">'+aa+p+"</h1>"+X+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";ab+=W;z+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}l='<div data-role="header"><div class="ui-title"></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof R!=="undefined"){l+=w+' href="'+R+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=w+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(z.length!==0){l+=z}l+=r+' href="#popupSettings" data-icon="gear">'+Y+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(l);b.title[0].className+=" ui-bar-b";H=document.getElementById("wb-session");t=b.gcnb.find('li[id*="-lang"]');D=G+' id="popupSettings"'+E;D+=s+Y+"</h1>"+X+"</div>";D+=h+q+">";if(H!==null){O=H.getElementsByClassName("settings");for(V=0,x=O.length;V!==x;V+=1){K=O[V].getElementsByTagName("a")[0];D+='<li><a href="'+K.getAttribute("href")+'">'+K.innerHTML+"</a></li>"}T=H.getElementsByClassName("session")[0].getElementsByTagName("a")[0];D+='<li><a href="'+T.getAttribute("href")+'">'+T.innerHTML+"</a></li>"}if(t.length!==0){D+='<li><a href="#popupLanguages"'+F+">"+pe.dic.get("%languages")+"</a></li>"}D+='<li class="ui-corner-bottom"><a href="#popupAbout"'+F+">"+pe.dic.get("%about")+"</a></li>";D+="</ul>"+Z;if(t.length!==0){D+=G+' id="popupLanguages"'+E;D+=s+pe.dic.get("%languages")+"</h1>"+S+' href="#popupSettings"'+Q+X+"</div>";D+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){D+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}N=t.get();x=N.length;V=x;while(V--){I=N[V];m=I.getElementsByTagName("a")[0];D+="<li"+(V===0?' class="ui-corner-bottom"':"");if(I.id.indexOf("-lang-current")!==-1){D+='><a href="javascript:;" class="ui-disabled">'+I.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{D+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}D+="</ul>"+Z}D+=G+' id="popupAbout"'+E;D+=s+pe.dic.get("%about")+"</h1>"+S+' href="#popupSettings"'+Q+X+"</div>";D+=h;D+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("a")[0].innerHTML+"</div></div>";I=pe.main.find("#gcwu-date-mod").children();if(I.length!==0){d=I[1];if(d.getElementsByTagName("time").length===0){D+='<div class="app-version">'+I[0].innerHTML+" "+d.innerHTML+"</div>"}}D+=q+' data-inset="true">';M=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(V=0,x=M.length;V!==x;V+=1){m=M[V];D+='<li><a href="'+m.href+'">'+m.innerHTML+"</a></li>"}N=b.sft.find(".wet-col-head");for(V=0,x=N.length;V!==x;V+=1){I=N.eq(V);m=I.children("a");k=I.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:I[0].innerHTML;if(k.length!==0){D+='<li data-role="collapsible" data-inset="false"><h2>'+d+'</h2><ul data-role="listview">';M=k[0].getElementsByTagName("a");for(U=0,o=M.length;U!==o;U+=1){I=M[U];D+='<li><a href="'+I.href+'">'+I.innerHTML+"</a></li>"}if(m.length!==0){D+='<li><a href="'+m.attr("href")+'">'+m.html()+C+"</a></li>"}D+="</ul></li>"}else{if(m.length!==0){D+="<li"+(V===(x-1)?' class="ui-corner-bottom"':"")+'><a href="'+m.href+'">'+m.html()+"</a></li>"}}}D+="</ul></div>"+Z;pe.bodydiv.append(ab+D)}else{t=document.getElementById("gcwu-lang");if(t!==null){N=t.getElementsByTagName("li");L='<div data-role="navbar"><ul>';for(V=0,x=N.length;V<x;V+=1){I=N[V];m=I.getElementsByTagName("a")[0];L+='<li><a href="'+m.href+'"'+(I.hasAttribute("lang")?' lang="'+I.getAttribute("lang")+'"':"")+' data-theme="a">'+m.innerHTML+"</a></li>"}L+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=L;t=document.getElementById("gcwu-other-lang");if(t!==null){t.parentNode.removeChild(t)}}d=document.getElementById("gcwu-tc");if(d!==null){N=d.getElementsByTagName("li");v='<ul class="ui-grid-a">';for(V=0,x=N.length;V<x;V+=1){I=N[V];m=I.getElementsByTagName("a")[0];v+='<li class="ui-block-'+(V%2!==0?"b":"a")+'"><a href="'+m.href+'"'+(I.hasAttribute("lang")?' lang="'+I.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+m.innerHTML+"</a></li>"}v+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=v}A=document.getElementById("gcwu-wmms");if(A!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(A.cloneNode(true));A.parentNode.removeChild(A)}}B.on("pagecreate",function(){var ae=b.gcnb.find("#gcwu-mnavbar"),ag=pe.bodydiv.find("#jqm-mb-menu"),af,ad,j,ac;if(ae.length!==0){if(!ae.hasClass("ui-controlgroup")){ae.controlgroup()}ae.removeClass("wb-hide");if(ag.length!==0){ag.append(b.menu);ae.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ag.trigger("create");af=ag.find(".ui-controlgroup");ad=af.get();x=ad.length;while(x--){I=ad[x];ac=I.getElementsByTagName("li")[0];if(ac.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&ac.className.indexOf("ui-corner-top")===-1){ac.className+=" ui-corner-top"}j=af.eq(x).find(".ui-btn").get();I=j[j.length-1];if(typeof I!=="undefined"&&I.className.indexOf("ui-corner-bottom")===-1){I.className+=" ui-corner-bottom"}}})}}function i(ai,ah,al,ak){var aj;c.mobile.showPageLoadingMsg();aj=c.mobile.transitionHandlers.simultaneous("pop",ah,al,ak);aj.done(function(){c.mobile.hidePageLoadingMsg()});return aj}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});B.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));