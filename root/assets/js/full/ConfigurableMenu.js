mwf.full.ConfigurableMenu=function(b){var c=b;var a=function(){var d=null;if(mwf.standard.preferences.isSupported()){var g=mwf.standard.preferences.get(c);if(g!==null){try{d=JSON.parse(g)}catch(f){d=null}}}return d};this.render=function(l,d,e){var j=document.getElementById(l);if(j===null){return}var n="";var m=a();if(m===null){m={};m.on=[];for(var k in d){if(d.hasOwnProperty(k)){m.on.push(+k);n+=d[k]}}if(mwf.standard.preferences.isSupported()){mwf.standard.preferences.set(c,JSON.stringify(m))}}else{var g;if(!m.hasOwnProperty("on")){m.on=[]}var h=m.on;for(g=0;g<h.length;g++){if(d.hasOwnProperty(h[g])){n+=d[h[g]]}}var f=m.hasOwnProperty("off")?m.off:[];for(g in d){if(d.hasOwnProperty(g)){if(f.indexOf(+g)==-1&&h.indexOf(+g)==-1){m.on.push(+g);n+=d[g]}}}if(mwf.standard.preferences.isSupported()){mwf.standard.preferences.set(c,JSON.stringify(m))}if(e){for(g=0;g<f.length;g++){if(e.hasOwnProperty(f[g])){n+=e[f[g]]}}}}j.innerHTML=n};this.set=function(f,d){var g=d?"on":"off";var e=a();if(e==null){e={}}if(!e.hasOwnProperty(g)){e[g]=[f]}else{if(e[g].indexOf(f)==-1){e[g].push(+f)}}otherProp=g=="on"?"off":"on";if(e.hasOwnProperty(otherProp)){while(e[otherProp].indexOf(f)!=-1){e[otherProp].splice(e[otherProp].indexOf(f),1)}}mwf.standard.preferences.set(c,JSON.stringify(e))};this.moveUp=function(f){keys=a();if(keys.hasOwnProperty("on")){var e=keys.on.indexOf(f);if(e>0){var d=keys.on[e];keys.on[e]=keys.on[e-1];keys.on[e-1]=d;mwf.standard.preferences.set(c,JSON.stringify(keys))}}};this.moveDown=function(f){keys=a();if(keys.hasOwnProperty("on")){var e=keys.on.indexOf(f);if(e>-1&&e<keys.on.length-1){var d=keys.on[e];keys.on[e]=keys.on[e+1];keys.on[e+1]=d;mwf.standard.preferences.set(c,JSON.stringify(keys))}}}};