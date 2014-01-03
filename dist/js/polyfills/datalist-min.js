/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.0.13-development Build: 2014-01-03 10:15 AM EST
 *
 */
(function(a){a.fn.datalist=function(){return a(this).each(function(g){var h=a(this),k=this.id,e=k+"-label",i=pe.main.find("label").filter("[for="+k+"]"),m=a("#"+h.attr("list")),f,n,d=[],j,c,l,b;if(i.length!==0){i.attr("id",e)}j=function(q){var o,p;if(q.length!==0){o=q.toLowerCase();p=n.filter(function(){var s=a(this),r=s.find("span.al-value").html();if(r.length===0){r=s.find("span.al-label").html()}return(o.length===0||r.toLowerCase().indexOf(o)!==-1)})}else{p=n}f.empty().append(p);if(p.length!==0){l();f.removeClass("al-hide");h.attr("aria-expanded","true")}else{f.addClass("al-hide");h.attr("aria-expanded","false")}};c=function(){f.addClass("al-hide").empty();h.attr({"aria-expanded":"false","aria-activedescendent":""})};l=function(){f.css("width",h.innerWidth());if(pe.preIE8){f.css("top",h.innerHeight()+13)}};pe.resize(l);m.find("option").each(function(r){var q=a(this),p=q.attr("value"),o=q.attr("label");if(typeof p==="undefined"){p=q.text()}d.push('<li class="al-option" id="al-option-'+g+"-"+r+'"><a href="javascript:;"><span class="al-value">'+(typeof p!=="undefined"?p:"")+'</span><span class="al-label">'+(typeof o!=="undefined"&&p!==o?o:"")+"</span></a></li>")});h.attr({autocomplete:"off",role:"textbox","aria-haspopup":"true","aria-autocomplete":"list","aria-owns":"wb-autolist-"+g,"aria-activedescendent":""}).wrap('<div class="wb-al-container" role="application" aria-'+(i.length!==0?'labelledby="'+e:'-label="'+h.attr("title"))+'"/>');b=h.parent();f=a('<ul role="listbox" id="wb-autolist-'+g+'" class="wb-autolist al-hide" aria-hidden="true" aria-live="polite"></ul>');n=a(d.join(""));h.after(f);h.on("keyup keydown click vclick touchstart focus",function(r){var p=r.type,q=r.keyCode,o;if(p==="keyup"){if(!(r.ctrlKey||r.altKey||r.metaKey)){if((q>47&&q<91)||(q>95&&q<112)||(q>185&&q<223)||q===32||q===8){j(h.val())}}}else{if(p==="keydown"){if(!(r.ctrlKey||r.metaKey)){if(!r.altKey&&!f.hasClass("al-hide")){if(q===27){c();return false}else{if((q===38||q===40)&&h.attr("aria-activedescendent")===""){if(q===38){o=f.find("a").last()}else{o=f.find("a").eq(0)}h.attr("aria-activedescendent",o.parent().attr("id"));pe.focus(o);return false}}}else{if(q===38||q===40){j("");return false}}}}else{if(p==="click"||p==="vclick"){if(!f.hasClass("al-hide")){c()}return false}else{if(pe.preIE8&&p==="focus"){f.addClass("al-hide").empty()}}}}});f.on("keyup keydown click vclick touchstart","a, span",function(r){var t=r.type,w=r.keyCode,s=a(r.target),o,q,v,p=h.val(),u;if(t==="keyup"){if(!(r.ctrlKey||r.altKey||r.metaKey)){if((w>47&&w<91)||(w>95&&w<112)||(w>185&&w<223)||w===32){h.val(p+String.fromCharCode(w));pe.focus(h);j(h.val())}else{if(w===8){if(h.val().length>0){h.val(p.substring(0,p.length-1));j(h.val())}pe.focus(h)}}}}else{if(t==="keydown"){if(!(r.ctrlKey||r.altKey||r.metaKey)){if(w===13){u=s.find("span.al-value").html();if(u.length===0){u=s.find("span.al-label").html()}h.val(u);pe.focus(h);c();return false}else{if(w===9||w===27){pe.focus(h);c();return false}else{if(w===38||w===40){o=f.find("a");if(o.length!==0){q=o.index(s);if(w===38){v=((q-1)===-1?o.last():o.eq(q-1))}else{v=((q+1)===o.length?o.eq(0):o.eq(q+1))}h.attr("aria-activedescendent",v.parent().attr("id"));pe.focus(v)}return false}}}}}else{if(t==="click"||t==="vclick"||t==="touchstart"){if(!s.hasClass("al-option")){s=s.parent()}u=s.find("span.al-value").html();if(u.length===0){u=s.find("span.al-label").html()}h.val(u);pe.focus(h);c()}}}});pe.document.on("click vclick touchstart",function(o){if(!f.hasClass("al-hide")&&!a(o.target).is(h)){c()}})})};a("input[list]").datalist()}(jQuery));