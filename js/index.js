 // Loadings
 var loadJS = new ldBar("#loadJS", {
  "type": "fill",
  "value":"90",
  "img": "https://diegofranca92.github.io/meu-site/images/js.svg",
  "fill-dir": "btt"
 });

 var loadCSS = new ldBar("#loadCSS", {
  "type": "fill",
  "value":"90",
  "img": "https://diegofranca92.github.io/meu-site/images/css.svg",
  "fill-dir": "btt"
 });

 var loadHTML = new ldBar("#loadHTML", {
  "type": "fill",
  "value":"90",
  "img": "https://diegofranca92.github.io/meu-site/images/html.svg",
  "fill-dir": "btt"
 });

 setInterval(reloading(), 3000);
  setInterval(loadJS.set(70), 3000);
  setInterval(loadCSS.set(90), 3000);
  setInterval(loadHTML.set(90), 3000);