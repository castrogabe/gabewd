(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n}\n.row::after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n[class*=\"col-\"] {\n  padding: 15px;\n}\nhtml {\n  font-family: \"Lucida Sans\", sans-serif;\n}\n/* CSS Variables */\n:root {\n  --primary: #ffffff; /* nav buttons */\n  --dark: #36454f; /* charcoal */\n  --medium: #68655d; /* keyboard gray */\n  --light: #ffffff;\n  --background: #f4f4f4; /* very light gray */\n  --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);\n}\n/* For desktop: */\n.content {\n  /* width: 100%; */\n  /* margin: 0px; */\n}\n.body {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  color: var(--medium);\n}\n.body h2 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  color: var(--dark);\n}\n/********** Navbar and JavaScript slide sidebar **********/\nbody {\n  font-family: \"arial\", Serif;\n  background-color: var(--background); /* very light gray */\n  overflow-x: hidden;\n}\n.navbar {\n  background-color: var(--dark); /* charcoal */\n  overflow: hidden;\n  height: 63px;\n}\n.navbar a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n.navbar ul {\n  margin: 8px 0 0 0;\n  list-style: none; /* no bullet points */\n}\n.navbar a:hover {\n  background-color: #ddd; /* light gray */\n  color: #000;\n}\n.side-nav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111; /* light black */\n  opacity: 0.9;\n  overflow-x: hidden; /* disables scrolling horizontally */\n  padding-top: 60px;\n  transition: 0.5s;\n}\n.side-nav a {\n  padding: 10px 10px 10px 30px;\n  text-decoration: none;\n  font-size: 22px;\n  color: #ccc; /* light gray */\n  display: block;\n  transition: 0.3s;\n}\n.side-nav a:hover {\n  color: fff;\n}\n.side-nav .btn-close {\n  /* X close button */\n  background-color: #111;\n  position: absolute;\n  top: 0;\n  right: 22px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n#main {\n  transition: margin-left 0.5s;\n  padding: 20px;\n  overflow: hidden;\n  width: 100%;\n}\n/*********** Global Styles********/\n.wrapper {\n  width: 100%;\n}\n.topHeader {\n  /* keyboard */\n  width: 100%;\n  height: auto;\n  margin-top: 15px;\n  margin-right: 0;\n  margin-left: 0;\n}\n.content {\n  background-color: var(--light);\n  color: var(--medium);\n  padding-left: 3%;\n  padding-right: 3%;\n  font-size: 1em;\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n.background {\n  background-color: var(--light);\n  padding-left: 3%;\n  padding-right: 3%;\n  font-size: 1em;\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n.header {\n  font-family: \"Maven pro\", sans-serif;\n  height: auto;\n  background-color: var(--light);\n  color: var(--dark);\n  text-align: center;\n  padding: 2.5em;\n}\n.content h2 {\n  font-family: \"Maven pro\", sans-serif;\n  color: var(--dark);\n}\n#about {\n  /* background-image: url(\"src/assets/images/waves.gif\"); */\n  background-image: url(https://media1.tenor.com/images/b1b118ed130d9ab085e475ab0ecadcb6/tenor.gif?itemid=15826314);\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 1em;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n  text-shadow: 2px 2px #742d8d; /* text shadow */\n}\n.img-circle {\n  border-radius: 50%;\n  max-width: 15em;\n  position: center;\n  bottom: 4em;\n  padding-top: 1em;\n}\n#design {\n  /* design for computer png */\n  float: right;\n  margin-right: 0;\n}\n#about {\n  margin-top: 1em;\n}\n#about h2 {\n  color: #a1a1a0; /* light gray */\n  font-size: 2em;\n  padding-bottom: 1em;\n}\n#about span {\n  font-weight: 300;\n  font-size: 0.7em;\n}\n.img-circle {\n  border-radius: 50%;\n  max-width: 15em;\n  position: center;\n  bottom: 4em;\n  padding-top: 1em;\n}\n.work {\n  padding-top: 1em;\n}\n.work h2 {\n  color: #ff6945;\n  font-size: 2em;\n  margin-bottom: 0.7em;\n}\n.work p {\n  color: #ffffff; /* white */\n  font-size: 1.4em;\n  margin-bottom: 1em;\n}\n#work {\n  margin-bottom: 2em;\n}\n/***** visit website button *****/\n.my-button {\n  font-size: 1em;\n  line-height: normal;\n  text-transform: uppercase;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 900;\n  transition: all 0.3s ease-in-out, color 0.2s 0.3s;\n  letter-spacing: 0;\n  border-radius: 45px;\n  height: auto;\n  padding: 0.5em 1em;\n}\n.my-button:hover {\n  cursor: pointer;\n  padding: 0.5em 1.5em;\n}\n/* button orange with orange boarder */\n.details a,\n.details a:link,\n.details a:active {\n  color: rgba(255, 103, 68, 0.91);\n  border: 2px solid rgba(255, 103, 68, 0.91) !important;\n  background-color: #fff;\n  text-decoration: none;\n  margin-left: 10%;\n}\n/* turns button orange on hover */\n.details a:hover,\n.details a:focus {\n  /*box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 14px 1px rgba(0, 0, 0, 0.15);*/\n  background-color: rgba(255, 103, 68, 0.91) !important;\n  color: #fff;\n}\n#middleBox {\n  clear: both;\n  width: 100%;\n  text-align: center;\n  background-color: #30473e; /* ocean green */\n  padding: 2em;\n}\nhtml {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--dark);\n}\nbody {\n  background-color: #ccc; /* #ccc very light gray */\n  margin: 10px 10px; /* top bottom/left right, width of container Important! */\n  line-height: 1.4;\n}\nimg {\n  max-width: 100%;\n}\n.wraper {\n  display: grid;\n  grid-gap: 20px;\n}\n/* info is on Portfolio page */\n.info {\n  background-color: var(--light);\n  color: var(--medium);\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 3rem;\n}\n.info h2 {\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--dark);\n  text-align: left;\n  padding-bottom: 10px;\n}\n.info p,\na {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  text-align: left;\n  padding: 0;\n  color: var(--medium);\n}\n/* ends info */\n/* footer */\nfooter p {\n  text-decoration: none;\n  border-top: 2px;\n  margin-top: 1rem;\n  background: var(--dark);\n  color: var(--light);\n  text-align: center;\n  padding: 2em;\n}\n/* media queries */\n@media (max-width: 700px) {\n  /* .box {\n    grid-template-areas: ;\n  } */\n\n  .info h1 {\n    font-size: 1.5rem;\n  }\n\n  .info p {\n    font-size: 0.8rem;\n  }\n\n  .main-nav ul {\n    grid-template-columns: 1fr;\n  }\n\n  .info {\n    grid-template-columns: 1fr;\n  }\n\n  .info .btn {\n    display: block;\n    text-align: center;\n    margin: auto;\n  }\n}\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n  }\n\n  .content {\n    width: 100%;\n  }\n\n  .wrapper {\n    width: 100%;\n  }\n\n  .img-circle {\n    width: 50%;\n  }\n}\n/********** sideBar **********/\n@media (max-width: 568px) {\n  .navbar-nav {\n    display: none;\n  }\n}\n@media (min-width: 568px) {\n  /* hides top nav and opens side menu */\n  .open-slide {\n    display: none;\n  }\n}\n/* this is for older phones, iphone6 is 326px wide */\n@media screen and (max-width: 320px) {\n  #container {\n    width: 320px;\n  }\n}\n", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": "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",
      "file": "styles.css",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.row::after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n[class*=\"col-\"] {\n  padding: 15px;\n}\nhtml {\n  font-family: \"Lucida Sans\", sans-serif;\n}\n\n/* CSS Variables */\n:root {\n  --primary: #ffffff; /* nav buttons */\n  --dark: #36454f; /* charcoal */\n  --medium: #68655d; /* keyboard gray */\n  --light: #ffffff;\n  --background: #f4f4f4; /* very light gray */\n  --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);\n}\n\n/* For desktop: */\n.content {\n  /* width: 100%; */\n  /* margin: 0px; */\n}\n\n.body {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  color: var(--medium);\n}\n\n.body h2 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  color: var(--dark);\n}\n\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400,700\");\n\n/********** Navbar and JavaScript slide sidebar **********/\nbody {\n  font-family: \"arial\", Serif;\n  background-color: var(--background); /* very light gray */\n  overflow-x: hidden;\n}\n\n.navbar {\n  background-color: var(--dark); /* charcoal */\n  overflow: hidden;\n  height: 63px;\n}\n\n.navbar a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.navbar ul {\n  margin: 8px 0 0 0;\n  list-style: none; /* no bullet points */\n}\n\n.navbar a:hover {\n  background-color: #ddd; /* light gray */\n  color: #000;\n}\n\n.side-nav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111; /* light black */\n  opacity: 0.9;\n  overflow-x: hidden; /* disables scrolling horizontally */\n  padding-top: 60px;\n  transition: 0.5s;\n}\n\n.side-nav a {\n  padding: 10px 10px 10px 30px;\n  text-decoration: none;\n  font-size: 22px;\n  color: #ccc; /* light gray */\n  display: block;\n  transition: 0.3s;\n}\n\n.side-nav a:hover {\n  color: fff;\n}\n\n.side-nav .btn-close {\n  /* X close button */\n  background-color: #111;\n  position: absolute;\n  top: 0;\n  right: 22px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n#main {\n  transition: margin-left 0.5s;\n  padding: 20px;\n  overflow: hidden;\n  width: 100%;\n}\n\n/*********** Global Styles********/\n.wrapper {\n  width: 100%;\n}\n\n.topHeader {\n  /* keyboard */\n  width: 100%;\n  height: auto;\n  margin-top: 15px;\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.content {\n  background-color: var(--light);\n  color: var(--medium);\n  padding-left: 3%;\n  padding-right: 3%;\n  font-size: 1em;\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.background {\n  background-color: var(--light);\n  padding-left: 3%;\n  padding-right: 3%;\n  font-size: 1em;\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.header {\n  font-family: \"Maven pro\", sans-serif;\n  height: auto;\n  background-color: var(--light);\n  color: var(--dark);\n  text-align: center;\n  padding: 2.5em;\n}\n\n.content h2 {\n  font-family: \"Maven pro\", sans-serif;\n  color: var(--dark);\n}\n\n#about {\n  /* background-image: url(\"src/assets/images/waves.gif\"); */\n  background-image: url(https://media1.tenor.com/images/b1b118ed130d9ab085e475ab0ecadcb6/tenor.gif?itemid=15826314);\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 1em;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n  text-shadow: 2px 2px #742d8d; /* text shadow */\n}\n\n.img-circle {\n  border-radius: 50%;\n  max-width: 15em;\n  position: center;\n  bottom: 4em;\n  padding-top: 1em;\n}\n\n#design {\n  /* design for computer png */\n  float: right;\n  margin-right: 0;\n}\n\n#about {\n  margin-top: 1em;\n}\n\n#about h2 {\n  color: #a1a1a0; /* light gray */\n  font-size: 2em;\n  padding-bottom: 1em;\n}\n\n#about span {\n  font-weight: 300;\n  font-size: 0.7em;\n}\n\n.img-circle {\n  border-radius: 50%;\n  max-width: 15em;\n  position: center;\n  bottom: 4em;\n  padding-top: 1em;\n}\n\n.work {\n  padding-top: 1em;\n}\n\n.work h2 {\n  color: #ff6945;\n  font-size: 2em;\n  margin-bottom: 0.7em;\n}\n\n.work p {\n  color: #ffffff; /* white */\n  font-size: 1.4em;\n  margin-bottom: 1em;\n}\n\n#work {\n  margin-bottom: 2em;\n}\n\n/***** visit website button *****/\n.my-button {\n  font-size: 1em;\n  line-height: normal;\n  text-transform: uppercase;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 900;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out, color 0.2s 0.3s;\n  letter-spacing: 0;\n  border-radius: 45px;\n  height: auto;\n  padding: 0.5em 1em;\n}\n\n.my-button:hover {\n  cursor: pointer;\n  padding: 0.5em 1.5em;\n}\n\n/* button orange with orange boarder */\n.details a,\n.details a:link,\n.details a:active {\n  color: rgba(255, 103, 68, 0.91);\n  border: 2px solid rgba(255, 103, 68, 0.91) !important;\n  background-color: #fff;\n  text-decoration: none;\n  margin-left: 10%;\n}\n\n/* turns button orange on hover */\n.details a:hover,\n.details a:focus {\n  /*box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 14px 1px rgba(0, 0, 0, 0.15);*/\n  background-color: rgba(255, 103, 68, 0.91) !important;\n  color: #fff;\n}\n\n#middleBox {\n  clear: both;\n  width: 100%;\n  text-align: center;\n  background-color: #30473e; /* ocean green */\n  padding: 2em;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--dark);\n}\n\nbody {\n  background-color: #ccc; /* #ccc very light gray */\n  margin: 10px 10px; /* top bottom/left right, width of container Important! */\n  line-height: 1.4;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.wraper {\n  display: grid;\n  grid-gap: 20px;\n}\n\n/* info is on Portfolio page */\n.info {\n  background-color: var(--light);\n  color: var(--medium);\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 3rem;\n}\n\n.info h2 {\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--dark);\n  text-align: left;\n  padding-bottom: 10px;\n}\n\n.info p,\na {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  text-align: left;\n  padding: 0;\n  color: var(--medium);\n}\n/* ends info */\n\n/* footer */\nfooter p {\n  text-decoration: none;\n  border-top: 2px;\n  margin-top: 1rem;\n  background: var(--dark);\n  color: var(--light);\n  text-align: center;\n  padding: 2em;\n}\n\n/* media queries */\n@media (max-width: 700px) {\n  /* .box {\n    grid-template-areas: ;\n  } */\n\n  .info h1 {\n    font-size: 1.5rem;\n  }\n\n  .info p {\n    font-size: 0.8rem;\n  }\n\n  .main-nav ul {\n    grid-template-columns: 1fr;\n  }\n\n  .info {\n    grid-template-columns: 1fr;\n  }\n\n  .info .btn {\n    display: block;\n    text-align: center;\n    margin: auto;\n  }\n}\n\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n  }\n\n  .content {\n    width: 100%;\n  }\n\n  .wrapper {\n    width: 100%;\n  }\n\n  .img-circle {\n    width: 50%;\n  }\n}\n\n/********** sideBar **********/\n@media (max-width: 568px) {\n  .navbar-nav {\n    display: none;\n  }\n}\n\n@media (min-width: 568px) {\n  /* hides top nav and opens side menu */\n  .open-slide {\n    display: none;\n  }\n}\n\n/* this is for older phones, iphone6 is 326px wide */\n@media screen and (max-width: 320px) {\n  #container {\n    width: 320px;\n  }\n}\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/gabrielcastro/Desktop/gabewd/src/styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map