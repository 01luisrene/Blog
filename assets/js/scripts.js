$("#open-menu").click(function(){$("#menu").addClass("menu-active")}),$("#close-menu").click(function(){$("#menu").removeClass("menu-active")});var div=document.createElement("div");div.textContent="I ❤️ emoji!",document.body.appendChild(div),twemoji.parse(document.body);var img=div.querySelector("img");img.parentNode===div,img.src,img.alt,img.className,img.draggable,disqus=function(e,t,i){if($("#disqus_thread").length)if("undefined"==typeof DISQUS){var n="filisantillan";!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+n+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}else DISQUS.reset({reload:!0,config:function(){this.page.identifier=e,this.page.url=t,this.page.title=i}})},disqus(window.location.href,window.location.href,$("#post-text").text());