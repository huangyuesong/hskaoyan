/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(2);

	__webpack_require__(12);

	__webpack_require__(13);

	$(function () {
		$('#fullpage').fullpage({
			anchors: ['page1', 'page2', 'page3', 'page4']
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/.npminstall/sass-loader/3.2.0/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/.npminstall/sass-loader/3.2.0/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/*! Amaze UI v2.6.1 | by Amaze UI Team | (c) 2016 AllMobilize, Inc. | Licensed under MIT | 2016-04-06T09:34:39+0800 */\n*, :after, :before, img {\n  -webkit-box-sizing: border-box; }\n\nbody, sub, sup {\n  position: relative; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted; }\n\nhr, legend, td, th {\n  padding: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, hr, main, menu, nav, section, summary {\n  display: block; }\n\nhr, iframe, img, legend {\n  border: 0; }\n\n.am-container, .am-g-fixed {\n  max-width: 1000px; }\n\n.am-container:after, .am-container:before, .am-g:after, .am-g:before, [class*=am-avg-]:after, [class*=am-avg-]:before {\n  display: table;\n  content: \" \"; }\n\n.am-container:after, .am-g:after, [class*=am-avg-]:after {\n  clear: both; }\n\npre, pre code {\n  white-space: pre-wrap; }\n\na, pre code {\n  background-color: transparent; }\n\n.ath-viewport, html {\n  -webkit-tap-highlight-color: transparent; }\n\n*, :after, :before {\n  box-sizing: border-box; }\n\nbody, html {\n  min-height: 100%; }\n\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], script, template {\n  display: none; }\n\na {\n  color: #0e90d2; }\n\na:active, a:hover {\n  outline: 0; }\n\na, ins {\n  text-decoration: none; }\n\nb, optgroup, strong {\n  font-weight: 700; }\n\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nimg {\n  box-sizing: border-box;\n  vertical-align: middle; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ncode, kbd, pre, samp {\n  font-size: 1em; }\n\nfieldset {\n  padding: .35em .625em .75em; }\n\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\naddress, dfn[title] {\n  font-style: normal; }\n\nbody, pre {\n  line-height: 1.6; }\n\nbutton {\n  overflow: visible; }\n\nbutton, input {\n  line-height: normal; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\ninput[type=checkbox], input[type=radio] {\n  cursor: pointer;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput[type=search] {\n  -webkit-appearance: textfield; }\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\n.am-btn, button, input:not([type=radio]):not([type=checkbox]), select {\n  vertical-align: middle; }\n\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  font-size: 10px; }\n\nbody {\n  margin: 0;\n  background: #fff;\n  font-family: \"Segoe UI\",\"Lucida Grande\",Helvetica,Arial,\"Microsoft YaHei\",FreeSans,Arimo,\"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\",\"Hiragino Sans GB W3\",FontAwesome,sans-serif;\n  font-weight: 400;\n  color: #333;\n  font-size: 1.6rem; }\n\nbody, button, input, select, textarea {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -moz-font-feature-settings: \"liga\",\"kern\"; }\n\na:focus, a:hover {\n  color: #095f8a; }\n\na:focus {\n  outline: dotted thin;\n  outline: -webkit-focus-ring-color auto 1px;\n  outline-offset: -2px; }\n\nins, mark {\n  background: #ffa;\n  color: #333; }\n\nabbr[title], dfn[title] {\n  cursor: help; }\n\naddress, blockquote, dl, fieldset, figure, hr, ol, p, pre, ul {\n  margin: 0 0 1.6rem; }\n\n* + address, * + blockquote, * + dl, * + fieldset, * + figure, * + hr, * + ol, * + p, * + pre, * + ul {\n  margin-top: 1.6rem; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0 0 1.6rem;\n  font-weight: 600;\n  font-size: 100%; }\n\nh1 {\n  font-size: 1.5em; }\n\nh2 {\n  font-size: 1.25em; }\n\ncode, pre {\n  font-size: 1.3rem;\n  background-color: #f8f8f8; }\n\n* + h1, * + h2, * + h3, * + h4, * + h5, * + h6 {\n  margin-top: 2em; }\n\nol, ul {\n  padding-left: 2em; }\n\nol > li > ol, ol > li > ul, ul > li > ol, ul > li > ul {\n  margin: 1em 0; }\n\ndt {\n  font-weight: 700; }\n\ndt + dd {\n  margin-top: .5em; }\n\ndd {\n  margin-left: 0; }\n\ndd + dt {\n  margin-top: 1em; }\n\nhr {\n  height: 0;\n  border-top: 1px solid #eee;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\nblockquote {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 15px;\n  border-left: 4px solid #ddd;\n  font-family: Georgia,\"Times New Roman\",Times,Kai,\"Kaiti SC\",KaiTi,BiauKai,FontAwesome,serif; }\n\nblockquote small {\n  display: block;\n  color: #999;\n  font-family: \"Segoe UI\",\"Lucida Grande\",Helvetica,Arial,\"Microsoft YaHei\",FreeSans,Arimo,\"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\",\"Hiragino Sans GB W3\",FontAwesome,sans-serif;\n  text-align: right; }\n\nblockquote p:last-of-type {\n  margin-bottom: 0; }\n\n.am-scrollbar-measure {\n  width: 100px;\n  height: 100px;\n  overflow: scroll;\n  position: absolute;\n  top: -9999px; }\n\n.am-container {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 100%; }\n\n.am-container > .am-g {\n  width: auto;\n  margin-left: -1rem;\n  margin-right: -1rem; }\n\n@media only screen and (min-width: 641px) {\n  .am-container {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n  .am-container > .am-g {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem; } }\n\n.am-g {\n  margin: 0 auto;\n  width: 100%; }\n\n.am-g .am-g {\n  margin-left: -1rem;\n  margin-right: -1rem;\n  width: auto; }\n\n.am-g .am-g.am-g-collapse {\n  margin-left: 0;\n  margin-right: 0;\n  width: auto; }\n\n@media only screen and (min-width: 641px) {\n  .am-g .am-g {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem; } }\n\n.am-g.am-g-collapse .am-g {\n  margin-left: 0;\n  margin-right: 0; }\n\n.am-g-collapse [class*=am-u-] {\n  padding-left: 0;\n  padding-right: 0; }\n\n[class*=am-u-] {\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  float: left;\n  position: relative; }\n\n[class*=am-u-] + [class*=am-u-]:last-child {\n  float: right; }\n\n[class*=am-u-] + [class*=am-u-].am-u-end {\n  float: left; }\n\n[class*=am-u-pull-] {\n  left: auto; }\n\n[class*=am-u-push-] {\n  right: auto; }\n\n@media only screen {\n  .am-u-sm-1 {\n    width: 8.33333333%; }\n  .am-u-sm-2 {\n    width: 16.66666667%; }\n  .am-u-sm-3 {\n    width: 25%; }\n  .am-u-sm-4 {\n    width: 33.33333333%; }\n  .am-u-sm-5 {\n    width: 41.66666667%; }\n  .am-u-sm-6 {\n    width: 50%; }\n  .am-u-sm-7 {\n    width: 58.33333333%; }\n  .am-u-sm-8 {\n    width: 66.66666667%; }\n  .am-u-sm-9 {\n    width: 75%; }\n  .am-u-sm-10 {\n    width: 83.33333333%; }\n  .am-u-sm-11 {\n    width: 91.66666667%; }\n  .am-u-sm-12 {\n    width: 100%; }\n  .am-u-sm-pull-0 {\n    right: 0; }\n  .am-u-sm-pull-1 {\n    right: 8.33333333%; }\n  .am-u-sm-pull-2 {\n    right: 16.66666667%; }\n  .am-u-sm-pull-3 {\n    right: 25%; }\n  .am-u-sm-pull-4 {\n    right: 33.33333333%; }\n  .am-u-sm-pull-5 {\n    right: 41.66666667%; }\n  .am-u-sm-pull-6 {\n    right: 50%; }\n  .am-u-sm-pull-7 {\n    right: 58.33333333%; }\n  .am-u-sm-pull-8 {\n    right: 66.66666667%; }\n  .am-u-sm-pull-9 {\n    right: 75%; }\n  .am-u-sm-pull-10 {\n    right: 83.33333333%; }\n  .am-u-sm-pull-11 {\n    right: 91.66666667%; }\n  .am-u-sm-push-0 {\n    left: 0; }\n  .am-u-sm-push-1 {\n    left: 8.33333333%; }\n  .am-u-sm-push-2 {\n    left: 16.66666667%; }\n  .am-u-sm-push-3 {\n    left: 25%; }\n  .am-u-sm-push-4 {\n    left: 33.33333333%; }\n  .am-u-sm-push-5 {\n    left: 41.66666667%; }\n  .am-u-sm-push-6 {\n    left: 50%; }\n  .am-u-sm-push-7 {\n    left: 58.33333333%; }\n  .am-u-sm-push-8 {\n    left: 66.66666667%; }\n  .am-u-sm-push-9 {\n    left: 75%; }\n  .am-u-sm-push-10 {\n    left: 83.33333333%; }\n  .am-u-sm-push-11 {\n    left: 91.66666667%; }\n  .am-u-sm-offset-0 {\n    margin-left: 0; }\n  .am-u-sm-offset-1 {\n    margin-left: 8.33333333%; }\n  .am-u-sm-offset-2 {\n    margin-left: 16.66666667%; }\n  .am-u-sm-offset-3 {\n    margin-left: 25%; }\n  .am-u-sm-offset-4 {\n    margin-left: 33.33333333%; }\n  .am-u-sm-offset-5 {\n    margin-left: 41.66666667%; }\n  .am-u-sm-offset-6 {\n    margin-left: 50%; }\n  .am-u-sm-offset-7 {\n    margin-left: 58.33333333%; }\n  .am-u-sm-offset-8 {\n    margin-left: 66.66666667%; }\n  .am-u-sm-offset-9 {\n    margin-left: 75%; }\n  .am-u-sm-offset-10 {\n    margin-left: 83.33333333%; }\n  .am-u-sm-offset-11 {\n    margin-left: 91.66666667%; }\n  .am-u-sm-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n  [class*=am-u-].am-u-sm-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  [class*=am-u-].am-u-sm-centered:last-child {\n    float: none; }\n  [class*=am-u-].am-u-sm-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n  [class*=am-u-].am-u-sm-uncentered:last-child {\n    float: left; } }\n\n@media only screen and (min-width: 641px) {\n  [class*=am-u-] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n  .am-u-md-1 {\n    width: 8.33333333%; }\n  .am-u-md-2 {\n    width: 16.66666667%; }\n  .am-u-md-3 {\n    width: 25%; }\n  .am-u-md-4 {\n    width: 33.33333333%; }\n  .am-u-md-5 {\n    width: 41.66666667%; }\n  .am-u-md-6 {\n    width: 50%; }\n  .am-u-md-7 {\n    width: 58.33333333%; }\n  .am-u-md-8 {\n    width: 66.66666667%; }\n  .am-u-md-9 {\n    width: 75%; }\n  .am-u-md-10 {\n    width: 83.33333333%; }\n  .am-u-md-11 {\n    width: 91.66666667%; }\n  .am-u-md-12 {\n    width: 100%; }\n  .am-u-md-pull-0 {\n    right: 0; }\n  .am-u-md-pull-1 {\n    right: 8.33333333%; }\n  .am-u-md-pull-2 {\n    right: 16.66666667%; }\n  .am-u-md-pull-3 {\n    right: 25%; }\n  .am-u-md-pull-4 {\n    right: 33.33333333%; }\n  .am-u-md-pull-5 {\n    right: 41.66666667%; }\n  .am-u-md-pull-6 {\n    right: 50%; }\n  .am-u-md-pull-7 {\n    right: 58.33333333%; }\n  .am-u-md-pull-8 {\n    right: 66.66666667%; }\n  .am-u-md-pull-9 {\n    right: 75%; }\n  .am-u-md-pull-10 {\n    right: 83.33333333%; }\n  .am-u-md-pull-11 {\n    right: 91.66666667%; }\n  .am-u-md-push-0 {\n    left: 0; }\n  .am-u-md-push-1 {\n    left: 8.33333333%; }\n  .am-u-md-push-2 {\n    left: 16.66666667%; }\n  .am-u-md-push-3 {\n    left: 25%; }\n  .am-u-md-push-4 {\n    left: 33.33333333%; }\n  .am-u-md-push-5 {\n    left: 41.66666667%; }\n  .am-u-md-push-6 {\n    left: 50%; }\n  .am-u-md-push-7 {\n    left: 58.33333333%; }\n  .am-u-md-push-8 {\n    left: 66.66666667%; }\n  .am-u-md-push-9 {\n    left: 75%; }\n  .am-u-md-push-10 {\n    left: 83.33333333%; }\n  .am-u-md-push-11 {\n    left: 91.66666667%; }\n  .am-u-md-offset-0 {\n    margin-left: 0; }\n  .am-u-md-offset-1 {\n    margin-left: 8.33333333%; }\n  .am-u-md-offset-2 {\n    margin-left: 16.66666667%; }\n  .am-u-md-offset-3 {\n    margin-left: 25%; }\n  .am-u-md-offset-4 {\n    margin-left: 33.33333333%; }\n  .am-u-md-offset-5 {\n    margin-left: 41.66666667%; }\n  .am-u-md-offset-6 {\n    margin-left: 50%; }\n  .am-u-md-offset-7 {\n    margin-left: 58.33333333%; }\n  .am-u-md-offset-8 {\n    margin-left: 66.66666667%; }\n  .am-u-md-offset-9 {\n    margin-left: 75%; }\n  .am-u-md-offset-10 {\n    margin-left: 83.33333333%; }\n  .am-u-md-offset-11 {\n    margin-left: 91.66666667%; }\n  .am-u-md-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n  [class*=am-u-].am-u-md-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  [class*=am-u-].am-u-md-centered:last-child {\n    float: none; }\n  [class*=am-u-].am-u-md-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n  [class*=am-u-].am-u-md-uncentered:last-child {\n    float: left; } }\n\n@media only screen and (min-width: 1025px) {\n  .am-u-lg-1 {\n    width: 8.33333333%; }\n  .am-u-lg-2 {\n    width: 16.66666667%; }\n  .am-u-lg-3 {\n    width: 25%; }\n  .am-u-lg-4 {\n    width: 33.33333333%; }\n  .am-u-lg-5 {\n    width: 41.66666667%; }\n  .am-u-lg-6 {\n    width: 50%; }\n  .am-u-lg-7 {\n    width: 58.33333333%; }\n  .am-u-lg-8 {\n    width: 66.66666667%; }\n  .am-u-lg-9 {\n    width: 75%; }\n  .am-u-lg-10 {\n    width: 83.33333333%; }\n  .am-u-lg-11 {\n    width: 91.66666667%; }\n  .am-u-lg-12 {\n    width: 100%; }\n  .am-u-lg-pull-0 {\n    right: 0; }\n  .am-u-lg-pull-1 {\n    right: 8.33333333%; }\n  .am-u-lg-pull-2 {\n    right: 16.66666667%; }\n  .am-u-lg-pull-3 {\n    right: 25%; }\n  .am-u-lg-pull-4 {\n    right: 33.33333333%; }\n  .am-u-lg-pull-5 {\n    right: 41.66666667%; }\n  .am-u-lg-pull-6 {\n    right: 50%; }\n  .am-u-lg-pull-7 {\n    right: 58.33333333%; }\n  .am-u-lg-pull-8 {\n    right: 66.66666667%; }\n  .am-u-lg-pull-9 {\n    right: 75%; }\n  .am-u-lg-pull-10 {\n    right: 83.33333333%; }\n  .am-u-lg-pull-11 {\n    right: 91.66666667%; }\n  .am-u-lg-push-0 {\n    left: 0; }\n  .am-u-lg-push-1 {\n    left: 8.33333333%; }\n  .am-u-lg-push-2 {\n    left: 16.66666667%; }\n  .am-u-lg-push-3 {\n    left: 25%; }\n  .am-u-lg-push-4 {\n    left: 33.33333333%; }\n  .am-u-lg-push-5 {\n    left: 41.66666667%; }\n  .am-u-lg-push-6 {\n    left: 50%; }\n  .am-u-lg-push-7 {\n    left: 58.33333333%; }\n  .am-u-lg-push-8 {\n    left: 66.66666667%; }\n  .am-u-lg-push-9 {\n    left: 75%; }\n  .am-u-lg-push-10 {\n    left: 83.33333333%; }\n  .am-u-lg-push-11 {\n    left: 91.66666667%; }\n  .am-u-lg-offset-0 {\n    margin-left: 0; }\n  .am-u-lg-offset-1 {\n    margin-left: 8.33333333%; }\n  .am-u-lg-offset-2 {\n    margin-left: 16.66666667%; }\n  .am-u-lg-offset-3 {\n    margin-left: 25%; }\n  .am-u-lg-offset-4 {\n    margin-left: 33.33333333%; }\n  .am-u-lg-offset-5 {\n    margin-left: 41.66666667%; }\n  .am-u-lg-offset-6 {\n    margin-left: 50%; }\n  .am-u-lg-offset-7 {\n    margin-left: 58.33333333%; }\n  .am-u-lg-offset-8 {\n    margin-left: 66.66666667%; }\n  .am-u-lg-offset-9 {\n    margin-left: 75%; }\n  .am-u-lg-offset-10 {\n    margin-left: 83.33333333%; }\n  .am-u-lg-offset-11 {\n    margin-left: 91.66666667%; }\n  .am-u-lg-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n  [class*=am-u-].am-u-lg-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  [class*=am-u-].am-u-lg-centered:last-child {\n    float: none; }\n  [class*=am-u-].am-u-lg-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n  [class*=am-u-].am-u-lg-uncentered:last-child {\n    float: left; } }\n\n[class*=am-avg-] {\n  display: block;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n[class*=am-avg-] > li {\n  display: block;\n  height: auto;\n  float: left; }\n\n@media only screen {\n  .am-avg-sm-1 > li {\n    width: 100%; }\n  .am-avg-sm-1 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-1 > li:nth-of-type(1n+1) {\n    clear: both; }\n  .am-avg-sm-2 > li {\n    width: 50%; }\n  .am-avg-sm-2 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-2 > li:nth-of-type(2n+1) {\n    clear: both; }\n  .am-avg-sm-3 > li {\n    width: 33.33333333%; }\n  .am-avg-sm-3 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-3 > li:nth-of-type(3n+1) {\n    clear: both; }\n  .am-avg-sm-4 > li {\n    width: 25%; }\n  .am-avg-sm-4 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-4 > li:nth-of-type(4n+1) {\n    clear: both; }\n  .am-avg-sm-5 > li {\n    width: 20%; }\n  .am-avg-sm-5 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-5 > li:nth-of-type(5n+1) {\n    clear: both; }\n  .am-avg-sm-6 > li {\n    width: 16.66666667%; }\n  .am-avg-sm-6 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-6 > li:nth-of-type(6n+1) {\n    clear: both; }\n  .am-avg-sm-7 > li {\n    width: 14.28571429%; }\n  .am-avg-sm-7 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-7 > li:nth-of-type(7n+1) {\n    clear: both; }\n  .am-avg-sm-8 > li {\n    width: 12.5%; }\n  .am-avg-sm-8 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-8 > li:nth-of-type(8n+1) {\n    clear: both; }\n  .am-avg-sm-9 > li {\n    width: 11.11111111%; }\n  .am-avg-sm-9 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-9 > li:nth-of-type(9n+1) {\n    clear: both; }\n  .am-avg-sm-10 > li {\n    width: 10%; }\n  .am-avg-sm-10 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-10 > li:nth-of-type(10n+1) {\n    clear: both; }\n  .am-avg-sm-11 > li {\n    width: 9.09090909%; }\n  .am-avg-sm-11 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-11 > li:nth-of-type(11n+1) {\n    clear: both; }\n  .am-avg-sm-12 > li {\n    width: 8.33333333%; }\n  .am-avg-sm-12 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-sm-12 > li:nth-of-type(12n+1) {\n    clear: both; } }\n\n@media only screen and (min-width: 641px) {\n  .am-avg-md-1 > li {\n    width: 100%; }\n  .am-avg-md-1 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-1 > li:nth-of-type(1n+1) {\n    clear: both; }\n  .am-avg-md-2 > li {\n    width: 50%; }\n  .am-avg-md-2 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-2 > li:nth-of-type(2n+1) {\n    clear: both; }\n  .am-avg-md-3 > li {\n    width: 33.33333333%; }\n  .am-avg-md-3 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-3 > li:nth-of-type(3n+1) {\n    clear: both; }\n  .am-avg-md-4 > li {\n    width: 25%; }\n  .am-avg-md-4 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-4 > li:nth-of-type(4n+1) {\n    clear: both; }\n  .am-avg-md-5 > li {\n    width: 20%; }\n  .am-avg-md-5 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-5 > li:nth-of-type(5n+1) {\n    clear: both; }\n  .am-avg-md-6 > li {\n    width: 16.66666667%; }\n  .am-avg-md-6 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-6 > li:nth-of-type(6n+1) {\n    clear: both; }\n  .am-avg-md-7 > li {\n    width: 14.28571429%; }\n  .am-avg-md-7 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-7 > li:nth-of-type(7n+1) {\n    clear: both; }\n  .am-avg-md-8 > li {\n    width: 12.5%; }\n  .am-avg-md-8 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-8 > li:nth-of-type(8n+1) {\n    clear: both; }\n  .am-avg-md-9 > li {\n    width: 11.11111111%; }\n  .am-avg-md-9 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-9 > li:nth-of-type(9n+1) {\n    clear: both; }\n  .am-avg-md-10 > li {\n    width: 10%; }\n  .am-avg-md-10 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-10 > li:nth-of-type(10n+1) {\n    clear: both; }\n  .am-avg-md-11 > li {\n    width: 9.09090909%; }\n  .am-avg-md-11 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-11 > li:nth-of-type(11n+1) {\n    clear: both; }\n  .am-avg-md-12 > li {\n    width: 8.33333333%; }\n  .am-avg-md-12 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-md-12 > li:nth-of-type(12n+1) {\n    clear: both; } }\n\n@media only screen and (min-width: 1025px) {\n  .am-avg-lg-1 > li {\n    width: 100%; }\n  .am-avg-lg-1 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-1 > li:nth-of-type(1n+1) {\n    clear: both; }\n  .am-avg-lg-2 > li {\n    width: 50%; }\n  .am-avg-lg-2 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-2 > li:nth-of-type(2n+1) {\n    clear: both; }\n  .am-avg-lg-3 > li {\n    width: 33.33333333%; }\n  .am-avg-lg-3 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-3 > li:nth-of-type(3n+1) {\n    clear: both; }\n  .am-avg-lg-4 > li {\n    width: 25%; }\n  .am-avg-lg-4 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-4 > li:nth-of-type(4n+1) {\n    clear: both; }\n  .am-avg-lg-5 > li {\n    width: 20%; }\n  .am-avg-lg-5 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-5 > li:nth-of-type(5n+1) {\n    clear: both; }\n  .am-avg-lg-6 > li {\n    width: 16.66666667%; }\n  .am-avg-lg-6 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-6 > li:nth-of-type(6n+1) {\n    clear: both; }\n  .am-avg-lg-7 > li {\n    width: 14.28571429%; }\n  .am-avg-lg-7 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-7 > li:nth-of-type(7n+1) {\n    clear: both; }\n  .am-avg-lg-8 > li {\n    width: 12.5%; }\n  .am-avg-lg-8 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-8 > li:nth-of-type(8n+1) {\n    clear: both; }\n  .am-avg-lg-9 > li {\n    width: 11.11111111%; }\n  .am-avg-lg-9 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-9 > li:nth-of-type(9n+1) {\n    clear: both; }\n  .am-avg-lg-10 > li {\n    width: 10%; }\n  .am-avg-lg-10 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-10 > li:nth-of-type(10n+1) {\n    clear: both; }\n  .am-avg-lg-11 > li {\n    width: 9.09090909%; }\n  .am-avg-lg-11 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-11 > li:nth-of-type(11n+1) {\n    clear: both; }\n  .am-avg-lg-12 > li {\n    width: 8.33333333%; }\n  .am-avg-lg-12 > li:nth-of-type(n) {\n    clear: none; }\n  .am-avg-lg-12 > li:nth-of-type(12n+1) {\n    clear: both; } }\n\n.am-form-horizontal .am-form-group:after, .am-nav:after, .am-topbar-collapse:after, .am-topbar:after {\n  clear: both; }\n\ncode, kbd, pre, samp {\n  font-family: Monaco,Menlo,Consolas,\"Courier New\",FontAwesome,monospace; }\n\ncode {\n  padding: 2px 4px;\n  color: #c7254e;\n  white-space: nowrap;\n  border-radius: 0; }\n\npre {\n  display: block;\n  padding: 1rem;\n  margin: 1rem 0;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #555;\n  border: 1px solid #dedede;\n  border-radius: 0; }\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  border-radius: 0; }\n\n.am-pre-scrollable {\n  max-height: 24rem;\n  overflow-y: scroll; }\n\n.am-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  padding: .5em 1em;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 1.2;\n  text-align: center;\n  white-space: nowrap;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n  cursor: pointer;\n  outline: 0;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: background-color .3s ease-out,border-color .3s ease-out;\n  transition: background-color .3s ease-out,border-color .3s ease-out; }\n\n.am-btn-block, legend {\n  display: block;\n  width: 100%; }\n\n.am-pagination, th {\n  text-align: left; }\n\n.am-btn:active:focus, .am-btn:focus {\n  outline: dotted thin;\n  outline: -webkit-focus-ring-color auto 1px;\n  outline-offset: -2px; }\n\n.am-btn:focus, .am-btn:hover {\n  color: #444;\n  text-decoration: none; }\n\n.am-btn.am-active, .am-btn:active {\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.15); }\n\n.am-btn.am-disabled, .am-btn[disabled], fieldset[disabled] .am-btn {\n  pointer-events: none;\n  border-color: transparent;\n  cursor: not-allowed;\n  opacity: .45;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.am-btn.am-round {\n  border-radius: 1000px; }\n\n.am-btn.am-radius {\n  border-radius: 2px; }\n\n.am-btn-default {\n  color: #444;\n  background-color: #e6e6e6;\n  border-color: #e6e6e6; }\n\na.am-btn-default:visited {\n  color: #444; }\n\n.am-active .am-btn-default.am-dropdown-toggle, .am-btn-default.am-active, .am-btn-default:active, .am-btn-default:focus, .am-btn-default:hover {\n  color: #444;\n  border-color: #c7c7c7; }\n\n.am-btn-default:focus, .am-btn-default:hover {\n  background-color: #d4d4d4; }\n\n.am-active .am-btn-default.am-dropdown-toggle, .am-btn-default.am-active, .am-btn-default:active {\n  background-image: none;\n  background-color: #c2c2c2; }\n\n.am-btn-default.am-disabled, .am-btn-default.am-disabled.am-active, .am-btn-default.am-disabled:active, .am-btn-default.am-disabled:focus, .am-btn-default.am-disabled:hover, .am-btn-default[disabled], .am-btn-default[disabled].am-active, .am-btn-default[disabled]:active, .am-btn-default[disabled]:focus, .am-btn-default[disabled]:hover, fieldset[disabled] .am-btn-default, fieldset[disabled] .am-btn-default.am-active, fieldset[disabled] .am-btn-default:active, fieldset[disabled] .am-btn-default:focus, fieldset[disabled] .am-btn-default:hover {\n  background-color: #e6e6e6;\n  border-color: #e6e6e6; }\n\n.am-btn-group .am-btn-default, .am-btn-group-stacked .am-btn-default {\n  border-color: #d9d9d9; }\n\n.am-btn-primary {\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #0e90d2; }\n\na.am-btn-primary:visited {\n  color: #fff; }\n\n.am-active .am-btn-primary.am-dropdown-toggle, .am-btn-primary.am-active, .am-btn-primary:active, .am-btn-primary:focus, .am-btn-primary:hover {\n  color: #fff;\n  border-color: #0a6999; }\n\n.am-btn-primary:focus, .am-btn-primary:hover {\n  background-color: #0c79b1; }\n\n.am-active .am-btn-primary.am-dropdown-toggle, .am-btn-primary.am-active, .am-btn-primary:active {\n  background-image: none;\n  background-color: #0a628f; }\n\n.am-btn-primary.am-disabled, .am-btn-primary.am-disabled.am-active, .am-btn-primary.am-disabled:active, .am-btn-primary.am-disabled:focus, .am-btn-primary.am-disabled:hover, .am-btn-primary[disabled], .am-btn-primary[disabled].am-active, .am-btn-primary[disabled]:active, .am-btn-primary[disabled]:focus, .am-btn-primary[disabled]:hover, fieldset[disabled] .am-btn-primary, fieldset[disabled] .am-btn-primary.am-active, fieldset[disabled] .am-btn-primary:active, fieldset[disabled] .am-btn-primary:focus, fieldset[disabled] .am-btn-primary:hover {\n  background-color: #0e90d2;\n  border-color: #0e90d2; }\n\n.am-btn-group .am-btn-primary, .am-btn-group-stacked .am-btn-primary {\n  border-color: #0c80ba; }\n\n.am-btn-warning {\n  color: #fff;\n  background-color: #F37B1D;\n  border-color: #F37B1D; }\n\na.am-btn-warning:visited {\n  color: #fff; }\n\n.am-active .am-btn-warning.am-dropdown-toggle, .am-btn-warning.am-active, .am-btn-warning:active, .am-btn-warning:focus, .am-btn-warning:hover {\n  color: #fff;\n  border-color: #c85e0b; }\n\n.am-btn-warning:focus, .am-btn-warning:hover {\n  background-color: #e0690c; }\n\n.am-active .am-btn-warning.am-dropdown-toggle, .am-btn-warning.am-active, .am-btn-warning:active {\n  background-image: none;\n  background-color: #be590a; }\n\n.am-btn-warning.am-disabled, .am-btn-warning.am-disabled.am-active, .am-btn-warning.am-disabled:active, .am-btn-warning.am-disabled:focus, .am-btn-warning.am-disabled:hover, .am-btn-warning[disabled], .am-btn-warning[disabled].am-active, .am-btn-warning[disabled]:active, .am-btn-warning[disabled]:focus, .am-btn-warning[disabled]:hover, fieldset[disabled] .am-btn-warning, fieldset[disabled] .am-btn-warning.am-active, fieldset[disabled] .am-btn-warning:active, fieldset[disabled] .am-btn-warning:focus, fieldset[disabled] .am-btn-warning:hover {\n  background-color: #F37B1D;\n  border-color: #F37B1D; }\n\n.am-btn-group .am-btn-warning, .am-btn-group-stacked .am-btn-warning {\n  border-color: #ea6e0c; }\n\n.am-btn-danger {\n  color: #fff;\n  background-color: #dd514c;\n  border-color: #dd514c; }\n\na.am-btn-danger:visited {\n  color: #fff; }\n\n.am-active .am-btn-danger.am-dropdown-toggle, .am-btn-danger.am-active, .am-btn-danger:active, .am-btn-danger:focus, .am-btn-danger:hover {\n  color: #fff;\n  border-color: #c62b26; }\n\n.am-btn-danger:focus, .am-btn-danger:hover {\n  background-color: #d7342e; }\n\n.am-active .am-btn-danger.am-dropdown-toggle, .am-btn-danger.am-active, .am-btn-danger:active {\n  background-image: none;\n  background-color: #be2924; }\n\n.am-btn-danger.am-disabled, .am-btn-danger.am-disabled.am-active, .am-btn-danger.am-disabled:active, .am-btn-danger.am-disabled:focus, .am-btn-danger.am-disabled:hover, .am-btn-danger[disabled], .am-btn-danger[disabled].am-active, .am-btn-danger[disabled]:active, .am-btn-danger[disabled]:focus, .am-btn-danger[disabled]:hover, fieldset[disabled] .am-btn-danger, fieldset[disabled] .am-btn-danger.am-active, fieldset[disabled] .am-btn-danger:active, fieldset[disabled] .am-btn-danger:focus, fieldset[disabled] .am-btn-danger:hover {\n  background-color: #dd514c;\n  border-color: #dd514c; }\n\n.am-btn-group .am-btn-danger, .am-btn-group-stacked .am-btn-danger {\n  border-color: #d93c37; }\n\n.am-btn-success {\n  color: #fff;\n  background-color: #5eb95e;\n  border-color: #5eb95e; }\n\na.am-btn-success:visited {\n  color: #fff; }\n\n.am-active .am-btn-success.am-dropdown-toggle, .am-btn-success.am-active, .am-btn-success:active, .am-btn-success:focus, .am-btn-success:hover {\n  color: #fff;\n  border-color: #429842; }\n\n.am-btn-success:focus, .am-btn-success:hover {\n  background-color: #4aaa4a; }\n\n.am-active .am-btn-success.am-dropdown-toggle, .am-btn-success.am-active, .am-btn-success:active {\n  background-image: none;\n  background-color: #3f913f; }\n\n.am-btn-success.am-disabled, .am-btn-success.am-disabled.am-active, .am-btn-success.am-disabled:active, .am-btn-success.am-disabled:focus, .am-btn-success.am-disabled:hover, .am-btn-success[disabled], .am-btn-success[disabled].am-active, .am-btn-success[disabled]:active, .am-btn-success[disabled]:focus, .am-btn-success[disabled]:hover, fieldset[disabled] .am-btn-success, fieldset[disabled] .am-btn-success.am-active, fieldset[disabled] .am-btn-success:active, fieldset[disabled] .am-btn-success:focus, fieldset[disabled] .am-btn-success:hover {\n  background-color: #5eb95e;\n  border-color: #5eb95e; }\n\n.am-btn-group .am-btn-success, .am-btn-group-stacked .am-btn-success {\n  border-color: #4db14d; }\n\n.am-btn-secondary {\n  color: #fff;\n  background-color: #3bb4f2;\n  border-color: #3bb4f2; }\n\na.am-btn-secondary:visited {\n  color: #fff; }\n\n.am-active .am-btn-secondary.am-dropdown-toggle, .am-btn-secondary.am-active, .am-btn-secondary:active, .am-btn-secondary:focus, .am-btn-secondary:hover {\n  color: #fff;\n  border-color: #0f9ae0; }\n\n.am-btn-secondary:focus, .am-btn-secondary:hover {\n  background-color: #19a7f0; }\n\n.am-active .am-btn-secondary.am-dropdown-toggle, .am-btn-secondary.am-active, .am-btn-secondary:active {\n  background-image: none;\n  background-color: #0e93d7; }\n\n.am-btn-secondary.am-disabled, .am-btn-secondary.am-disabled.am-active, .am-btn-secondary.am-disabled:active, .am-btn-secondary.am-disabled:focus, .am-btn-secondary.am-disabled:hover, .am-btn-secondary[disabled], .am-btn-secondary[disabled].am-active, .am-btn-secondary[disabled]:active, .am-btn-secondary[disabled]:focus, .am-btn-secondary[disabled]:hover, fieldset[disabled] .am-btn-secondary, fieldset[disabled] .am-btn-secondary.am-active, fieldset[disabled] .am-btn-secondary:active, fieldset[disabled] .am-btn-secondary:focus, fieldset[disabled] .am-btn-secondary:hover {\n  background-color: #3bb4f2;\n  border-color: #3bb4f2; }\n\n.am-btn-group .am-btn-secondary, .am-btn-group-stacked .am-btn-secondary {\n  border-color: #23abf0; }\n\n.am-btn-link {\n  color: #0e90d2;\n  font-weight: 400;\n  cursor: pointer;\n  border-radius: 0; }\n\n.am-btn-link, .am-btn-link:active, .am-btn-link[disabled], fieldset[disabled] .am-btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.am-btn-link, .am-btn-link:active, .am-btn-link:focus, .am-btn-link:hover {\n  border-color: transparent; }\n\n.am-btn-link:focus, .am-btn-link:hover {\n  color: #095f8a;\n  text-decoration: underline;\n  background-color: transparent; }\n\n.am-btn-link[disabled]:focus, .am-btn-link[disabled]:hover, fieldset[disabled] .am-btn-link:focus, fieldset[disabled] .am-btn-link:hover {\n  color: #999;\n  text-decoration: none; }\n\n.am-btn-xs {\n  font-size: 1.2rem; }\n\n.am-btn-sm {\n  font-size: 1.4rem; }\n\n.am-btn-lg {\n  font-size: 1.8rem; }\n\n.am-btn-xl, legend {\n  font-size: 2rem; }\n\n.am-btn-block {\n  padding-left: 0;\n  padding-right: 0; }\n\n.am-btn-block + .am-btn-block {\n  margin-top: 5px; }\n\ninput[type=button].am-btn-block, input[type=reset].am-btn-block, input[type=submit].am-btn-block {\n  width: 100%; }\n\n.am-btn.am-btn-loading .am-icon-spin {\n  margin-right: 5px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  max-width: 100%;\n  background-color: transparent;\n  empty-cells: show; }\n\n.am-btn-group-justify, .am-input-group, .am-table {\n  border-collapse: separate; }\n\ntable code {\n  white-space: normal; }\n\n.am-table {\n  width: 100%;\n  margin-bottom: 1.6rem;\n  border-spacing: 0; }\n\n.am-table > tbody > tr > td, .am-table > tbody > tr > th, .am-table > tfoot > tr > td, .am-table > tfoot > tr > th, .am-table > thead > tr > td, .am-table > thead > tr > th {\n  padding: .7rem;\n  line-height: 1.6;\n  vertical-align: top;\n  border-top: 1px solid #ddd; }\n\n.am-table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 1px solid #ddd; }\n\n.am-table > caption + thead > tr:first-child > td, .am-table > caption + thead > tr:first-child > th, .am-table > colgroup + thead > tr:first-child > td, .am-table > colgroup + thead > tr:first-child > th, .am-table > thead:first-child > tr:first-child > td, .am-table > thead:first-child > tr:first-child > th {\n  border-top: 0; }\n\n.am-table > tbody + tbody tr:first-child td {\n  border-top: 2px solid #ddd; }\n\n.am-table-bordered {\n  border: 1px solid #ddd;\n  border-left: none; }\n\n.am-table-bordered > tbody > tr > td, .am-table-bordered > tbody > tr > th, .am-table-bordered > tfoot > tr > td, .am-table-bordered > tfoot > tr > th, .am-table-bordered > thead > tr > td, .am-table-bordered > thead > tr > th {\n  border-left: 1px solid #ddd; }\n\n.am-table-bordered > tbody > tr:first-child > td, .am-table-bordered > tbody > tr:first-child > th {\n  border-top: none; }\n\n.am-table-bordered > thead + tbody > tr:first-child > td, .am-table-bordered > thead + tbody > tr:first-child > th {\n  border-top: 1px solid #ddd; }\n\n.am-table-radius {\n  border: 1px solid #ddd;\n  border-radius: 2px; }\n\n.am-table-radius > thead > tr:first-child > td:first-child, .am-table-radius > thead > tr:first-child > th:first-child {\n  border-top-left-radius: 2px;\n  border-left: none; }\n\n.am-table-radius > thead > tr:first-child > td:last-child, .am-table-radius > thead > tr:first-child > th:last-child {\n  border-top-right-radius: 2px;\n  border-right: none; }\n\n.am-table-radius > tbody > tr > td:first-child, .am-table-radius > tbody > tr > th:first-child {\n  border-left: none; }\n\n.am-table-radius > tbody > tr > td:last-child, .am-table-radius > tbody > tr > th:last-child {\n  border-right: none; }\n\n.am-table-radius > tbody > tr:last-child > td, .am-table-radius > tbody > tr:last-child > th {\n  border-bottom: none; }\n\n.am-table-radius > tbody > tr:last-child > td:first-child, .am-table-radius > tbody > tr:last-child > th:first-child {\n  border-bottom-left-radius: 2px; }\n\n.am-table-radius > tbody > tr:last-child > td:last-child, .am-table-radius > tbody > tr:last-child > th:last-child {\n  border-bottom-right-radius: 2px; }\n\n.am-table-striped > tbody > tr:nth-child(odd) > td, .am-table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f9f9f9; }\n\n.am-table-hover > tbody > tr:hover > td, .am-table-hover > tbody > tr:hover > th {\n  background-color: #e9e9e9; }\n\n.am-table-compact > tbody > tr > td, .am-table-compact > tbody > tr > th, .am-table-compact > tfoot > tr > td, .am-table-compact > tfoot > tr > th, .am-table-compact > thead > tr > td, .am-table-compact > thead > tr > th {\n  padding: .4rem; }\n\n.am-table-centered > tbody > tr > td, .am-table-centered > tbody > tr > th, .am-table-centered > tfoot > tr > td, .am-table-centered > tfoot > tr > th, .am-table-centered > thead > tr > td, .am-table-centered > thead > tr > th {\n  text-align: center; }\n\n.am-table > tbody > tr.am-active > td, .am-table > tbody > tr.am-active > th, .am-table > tbody > tr > td.am-active, .am-table > tbody > tr > th.am-active, .am-table > tfoot > tr.am-active > td, .am-table > tfoot > tr.am-active > th, .am-table > tfoot > tr > td.am-active, .am-table > tfoot > tr > th.am-active, .am-table > thead > tr.am-active > td, .am-table > thead > tr.am-active > th, .am-table > thead > tr > td.am-active, .am-table > thead > tr > th.am-active {\n  background-color: #ffd; }\n\n.am-table > tbody > tr.am-disabled > td, .am-table > tbody > tr.am-disabled > th, .am-table > tbody > tr > td.am-disabled, .am-table > tbody > tr > th.am-disabled, .am-table > tfoot > tr.am-disabled > td, .am-table > tfoot > tr.am-disabled > th, .am-table > tfoot > tr > td.am-disabled, .am-table > tfoot > tr > th.am-disabled, .am-table > thead > tr.am-disabled > td, .am-table > thead > tr.am-disabled > th, .am-table > thead > tr > td.am-disabled, .am-table > thead > tr > th.am-disabled {\n  color: #999; }\n\n.am-table > tbody > tr.am-primary > td, .am-table > tbody > tr.am-primary > th, .am-table > tbody > tr > td.am-primary, .am-table > tbody > tr > th.am-primary, .am-table > tfoot > tr.am-primary > td, .am-table > tfoot > tr.am-primary > th, .am-table > tfoot > tr > td.am-primary, .am-table > tfoot > tr > th.am-primary, .am-table > thead > tr.am-primary > td, .am-table > thead > tr.am-primary > th, .am-table > thead > tr > td.am-primary, .am-table > thead > tr > th.am-primary {\n  color: #0b76ac;\n  background-color: rgba(14, 144, 210, 0.115); }\n\n.am-table > tbody > tr.am-success > td, .am-table > tbody > tr.am-success > th, .am-table > tbody > tr > td.am-success, .am-table > tbody > tr > th.am-success, .am-table > tfoot > tr.am-success > td, .am-table > tfoot > tr.am-success > th, .am-table > tfoot > tr > td.am-success, .am-table > tfoot > tr > th.am-success, .am-table > thead > tr.am-success > td, .am-table > thead > tr.am-success > th, .am-table > thead > tr > td.am-success, .am-table > thead > tr > th.am-success {\n  color: #5eb95e;\n  background-color: rgba(94, 185, 94, 0.115); }\n\n.am-table > tbody > tr.am-warning > td, .am-table > tbody > tr.am-warning > th, .am-table > tbody > tr > td.am-warning, .am-table > tbody > tr > th.am-warning, .am-table > tfoot > tr.am-warning > td, .am-table > tfoot > tr.am-warning > th, .am-table > tfoot > tr > td.am-warning, .am-table > tfoot > tr > th.am-warning, .am-table > thead > tr.am-warning > td, .am-table > thead > tr.am-warning > th, .am-table > thead > tr > td.am-warning, .am-table > thead > tr > th.am-warning {\n  color: #F37B1D;\n  background-color: rgba(243, 123, 29, 0.115); }\n\n.am-table > tbody > tr.am-danger > td, .am-table > tbody > tr.am-danger > th, .am-table > tbody > tr > td.am-danger, .am-table > tbody > tr > th.am-danger, .am-table > tfoot > tr.am-danger > td, .am-table > tfoot > tr.am-danger > th, .am-table > tfoot > tr > td.am-danger, .am-table > tfoot > tr > th.am-danger, .am-table > thead > tr.am-danger > td, .am-table > thead > tr.am-danger > th, .am-table > thead > tr > td.am-danger, .am-table > thead > tr > th.am-danger {\n  color: #dd514c;\n  background-color: rgba(221, 81, 76, 0.115); }\n\nfieldset {\n  border: none; }\n\nlegend {\n  margin-bottom: 2rem;\n  line-height: inherit;\n  color: #333;\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: .5rem; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 5px;\n  font-weight: 700; }\n\ninput[type=search] {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=checkbox], input[type=radio] {\n  margin: 4px 0 0;\n  margin-top: 1px\\9;\n  line-height: normal; }\n\ninput[type=file] {\n  display: block; }\n\nselect[multiple], select[size] {\n  height: auto; }\n\nselect optgroup {\n  font-size: inherit;\n  font-style: inherit;\n  font-family: inherit; }\n\ninput[type=checkbox]:focus, input[type=file]:focus, input[type=radio]:focus {\n  outline: dotted thin;\n  outline: -webkit-focus-ring-color auto 1px;\n  outline-offset: -2px; }\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\noutput {\n  display: block;\n  padding-top: 1.6rem;\n  font-size: 1.6rem;\n  line-height: 1.6;\n  color: #555;\n  vertical-align: middle; }\n\n.am-form input[type=number], .am-form input[type=search], .am-form input[type=text], .am-form input[type=password], .am-form input[type=datetime], .am-form input[type=datetime-local], .am-form input[type=date], .am-form input[type=month], .am-form input[type=time], .am-form input[type=week], .am-form input[type=email], .am-form input[type=url], .am-form input[type=tel], .am-form input[type=color], .am-form select, .am-form textarea, .am-form-field {\n  display: block;\n  width: 100%;\n  padding: .5em;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n  transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out; }\n\n.am-form input[type=number]:focus, .am-form input[type=search]:focus, .am-form input[type=text]:focus, .am-form input[type=password]:focus, .am-form input[type=datetime]:focus, .am-form input[type=datetime-local]:focus, .am-form input[type=date]:focus, .am-form input[type=month]:focus, .am-form input[type=time]:focus, .am-form input[type=week]:focus, .am-form input[type=email]:focus, .am-form input[type=url]:focus, .am-form input[type=tel]:focus, .am-form input[type=color]:focus, .am-form select:focus, .am-form textarea:focus, .am-form-field:focus {\n  background-color: #fefffe;\n  border-color: #3bb4f2;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px rgba(59, 180, 242, 0.3);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px rgba(59, 180, 242, 0.3); }\n\n.am-form input[type=number]::-webkit-input-placeholder, .am-form input[type=search]::-webkit-input-placeholder, .am-form input[type=text]::-webkit-input-placeholder, .am-form input[type=password]::-webkit-input-placeholder, .am-form input[type=datetime]::-webkit-input-placeholder, .am-form input[type=datetime-local]::-webkit-input-placeholder, .am-form input[type=date]::-webkit-input-placeholder, .am-form input[type=month]::-webkit-input-placeholder, .am-form input[type=time]::-webkit-input-placeholder, .am-form input[type=week]::-webkit-input-placeholder, .am-form input[type=email]::-webkit-input-placeholder, .am-form input[type=url]::-webkit-input-placeholder, .am-form input[type=tel]::-webkit-input-placeholder, .am-form input[type=color]::-webkit-input-placeholder, .am-form select::-webkit-input-placeholder, .am-form textarea::-webkit-input-placeholder, .am-form-field::-webkit-input-placeholder {\n  color: #999; }\n\n.am-form input[type=number]::-moz-placeholder, .am-form input[type=search]::-moz-placeholder, .am-form input[type=text]::-moz-placeholder, .am-form input[type=password]::-moz-placeholder, .am-form input[type=datetime]::-moz-placeholder, .am-form input[type=datetime-local]::-moz-placeholder, .am-form input[type=date]::-moz-placeholder, .am-form input[type=month]::-moz-placeholder, .am-form input[type=time]::-moz-placeholder, .am-form input[type=week]::-moz-placeholder, .am-form input[type=email]::-moz-placeholder, .am-form input[type=url]::-moz-placeholder, .am-form input[type=tel]::-moz-placeholder, .am-form input[type=color]::-moz-placeholder, .am-form select::-moz-placeholder, .am-form textarea::-moz-placeholder, .am-form-field::-moz-placeholder {\n  color: #999;\n  opacity: 1; }\n\n.am-form input[type=number]:-ms-input-placeholder, .am-form input[type=search]:-ms-input-placeholder, .am-form input[type=text]:-ms-input-placeholder, .am-form input[type=password]:-ms-input-placeholder, .am-form input[type=datetime]:-ms-input-placeholder, .am-form input[type=datetime-local]:-ms-input-placeholder, .am-form input[type=date]:-ms-input-placeholder, .am-form input[type=month]:-ms-input-placeholder, .am-form input[type=time]:-ms-input-placeholder, .am-form input[type=week]:-ms-input-placeholder, .am-form input[type=email]:-ms-input-placeholder, .am-form input[type=url]:-ms-input-placeholder, .am-form input[type=tel]:-ms-input-placeholder, .am-form input[type=color]:-ms-input-placeholder, .am-form select:-ms-input-placeholder, .am-form textarea:-ms-input-placeholder, .am-form-field:-ms-input-placeholder {\n  color: #999; }\n\n.am-form input[type=number]::placeholder, .am-form input[type=search]::placeholder, .am-form input[type=text]::placeholder, .am-form input[type=password]::placeholder, .am-form input[type=datetime]::placeholder, .am-form input[type=datetime-local]::placeholder, .am-form input[type=date]::placeholder, .am-form input[type=month]::placeholder, .am-form input[type=time]::placeholder, .am-form input[type=week]::placeholder, .am-form input[type=email]::placeholder, .am-form input[type=url]::placeholder, .am-form input[type=tel]::placeholder, .am-form input[type=color]::placeholder, .am-form select::placeholder, .am-form textarea::placeholder, .am-form-field::placeholder {\n  color: #999; }\n\n.am-form input[type=number][disabled], .am-form input[type=number][readonly], .am-form input[type=search][disabled], .am-form input[type=search][readonly], .am-form input[type=text][disabled], .am-form input[type=text][readonly], .am-form input[type=password][disabled], .am-form input[type=password][readonly], .am-form input[type=datetime][disabled], .am-form input[type=datetime][readonly], .am-form input[type=datetime-local][disabled], .am-form input[type=datetime-local][readonly], .am-form input[type=date][disabled], .am-form input[type=date][readonly], .am-form input[type=month][disabled], .am-form input[type=month][readonly], .am-form input[type=time][disabled], .am-form input[type=time][readonly], .am-form input[type=week][disabled], .am-form input[type=week][readonly], .am-form input[type=email][disabled], .am-form input[type=email][readonly], .am-form input[type=url][disabled], .am-form input[type=url][readonly], .am-form input[type=tel][disabled], .am-form input[type=tel][readonly], .am-form input[type=color][disabled], .am-form input[type=color][readonly], .am-form select[disabled], .am-form select[readonly], .am-form textarea[disabled], .am-form textarea[readonly], .am-form-field[disabled], .am-form-field[readonly], fieldset[disabled] .am-form input[type=number], fieldset[disabled] .am-form input[type=search], fieldset[disabled] .am-form input[type=text], fieldset[disabled] .am-form input[type=password], fieldset[disabled] .am-form input[type=datetime], fieldset[disabled] .am-form input[type=datetime-local], fieldset[disabled] .am-form input[type=date], fieldset[disabled] .am-form input[type=month], fieldset[disabled] .am-form input[type=time], fieldset[disabled] .am-form input[type=week], fieldset[disabled] .am-form input[type=email], fieldset[disabled] .am-form input[type=url], fieldset[disabled] .am-form input[type=tel], fieldset[disabled] .am-form input[type=color], fieldset[disabled] .am-form select, fieldset[disabled] .am-form textarea, fieldset[disabled] .am-form-field {\n  cursor: not-allowed;\n  background-color: #eee; }\n\n.am-form input[type=number].am-radius, .am-form input[type=search].am-radius, .am-form input[type=text].am-radius, .am-form input[type=password].am-radius, .am-form input[type=datetime].am-radius, .am-form input[type=datetime-local].am-radius, .am-form input[type=date].am-radius, .am-form input[type=month].am-radius, .am-form input[type=time].am-radius, .am-form input[type=week].am-radius, .am-form input[type=email].am-radius, .am-form input[type=url].am-radius, .am-form input[type=tel].am-radius, .am-form input[type=color].am-radius, .am-form select.am-radius, .am-form textarea.am-radius, .am-form-field.am-radius {\n  border-radius: 2px; }\n\n.am-form input[type=number].am-round, .am-form input[type=search].am-round, .am-form input[type=text].am-round, .am-form input[type=password].am-round, .am-form input[type=datetime].am-round, .am-form input[type=datetime-local].am-round, .am-form input[type=date].am-round, .am-form input[type=month].am-round, .am-form input[type=time].am-round, .am-form input[type=week].am-round, .am-form input[type=email].am-round, .am-form input[type=url].am-round, .am-form input[type=tel].am-round, .am-form input[type=color].am-round, .am-form select.am-round, .am-form textarea.am-round, .am-form-field.am-round {\n  border-radius: 1000px; }\n\n.am-form select[multiple], .am-form select[size], .am-form textarea {\n  height: auto; }\n\n.am-form select {\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n  -webkit-border-radius: 0;\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+) 100% center no-repeat #fff; }\n\n.am-form select[multiple=multiple] {\n  background-image: none; }\n\n.am-form-help {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #999;\n  font-size: 1.3rem; }\n\n.am-form-group {\n  margin-bottom: 1.5rem; }\n\n.am-form-file {\n  position: relative;\n  overflow: hidden; }\n\n.am-form-file input[type=file] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  opacity: 0;\n  cursor: pointer;\n  font-size: 50rem; }\n\n.am-checkbox, .am-radio {\n  display: block;\n  min-height: 1.92rem;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  vertical-align: middle; }\n\n.am-checkbox label, .am-radio label {\n  display: inline;\n  margin-bottom: 0;\n  font-weight: 400;\n  cursor: pointer; }\n\n.am-checkbox input[type=checkbox], .am-checkbox-inline input[type=checkbox], .am-radio input[type=radio], .am-radio-inline input[type=radio] {\n  float: left;\n  margin-left: -20px;\n  outline: 0; }\n\n.am-checkbox + .am-checkbox, .am-radio + .am-radio {\n  margin-top: -5px; }\n\n.am-checkbox-inline, .am-radio-inline {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: 400;\n  cursor: pointer; }\n\n.am-checkbox-inline + .am-checkbox-inline, .am-radio-inline + .am-radio-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\n.am-checkbox-inline[disabled], .am-checkbox[disabled], .am-radio-inline[disabled], .am-radio[disabled], fieldset[disabled] .am-checkbox, fieldset[disabled] .am-checkbox-inline, fieldset[disabled] .am-radio, fieldset[disabled] .am-radio-inline, fieldset[disabled] input[type=checkbox], fieldset[disabled] input[type=radio], input[type=checkbox][disabled], input[type=radio][disabled] {\n  cursor: not-allowed; }\n\n.am-form-warning .am-checkbox, .am-form-warning .am-checkbox-inline, .am-form-warning .am-form-help, .am-form-warning .am-form-label, .am-form-warning .am-radio, .am-form-warning .am-radio-inline, .am-form-warning [class*=icon-], .am-form-warning label {\n  color: #F37B1D; }\n\n.am-form-warning .am-form-field {\n  border-color: #F37B1D !important;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n\n.am-form-warning .am-form-field:focus {\n  background-color: #fefffe;\n  border-color: #d2620b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #f8b47e !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #f8b47e !important; }\n\n.am-form-error .am-checkbox, .am-form-error .am-checkbox-inline, .am-form-error .am-form-help, .am-form-error .am-form-label, .am-form-error .am-radio, .am-form-error .am-radio-inline, .am-form-error [class*=icon-], .am-form-error label {\n  color: #dd514c; }\n\n.am-field-error, .am-form-error .am-form-field {\n  border-color: #dd514c !important;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n\n.am-field-error:focus, .am-form-error .am-form-field:focus {\n  background-color: #fefffe;\n  border-color: #cf2d27;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #eda4a2 !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #eda4a2 !important; }\n\n.am-form-success .am-checkbox, .am-form-success .am-checkbox-inline, .am-form-success .am-form-help, .am-form-success .am-form-label, .am-form-success .am-radio, .am-form-success .am-radio-inline, .am-form-success [class*=icon-], .am-form-success label {\n  color: #5eb95e; }\n\n.am-field-valid, .am-form-success .am-form-field {\n  border-color: #5eb95e !important;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n\n.am-field-valid:focus, .am-form-success .am-form-field:focus {\n  background-color: #fefffe;\n  border-color: #459f45;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #a5d8a5 !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #a5d8a5 !important; }\n\n.am-form-horizontal .am-checkbox, .am-form-horizontal .am-checkbox-inline, .am-form-horizontal .am-form-label, .am-form-horizontal .am-radio, .am-form-horizontal .am-radio-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: .6em; }\n\n.am-form-horizontal .am-form-group:after, .am-form-horizontal .am-form-group:before {\n  content: \" \";\n  display: table; }\n\n@media only screen and (min-width: 641px) {\n  .am-form-horizontal .am-form-label {\n    text-align: right; }\n  .am-form-inline .am-form-group, .am-form-inline .am-form-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .am-form-inline .am-form-group {\n    display: inline-block; }\n  .am-form-inline .am-form-field {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .am-form-inline .am-input-group {\n    display: inline-table;\n    vertical-align: middle; }\n  .am-form-inline .am-input-group .am-form-label, .am-form-inline .am-input-group .am-input-group-btn, .am-form-inline .am-input-group .am-input-group-label {\n    width: auto; }\n  .am-form-inline .am-input-group > .am-form-field {\n    width: 100%; }\n  .am-form-inline .am-checkbox, .am-form-inline .am-radio {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 0;\n    vertical-align: middle; }\n  .am-form-inline .am-checkbox input[type=checkbox], .am-form-inline .am-radio input[type=radio] {\n    float: none;\n    margin-left: 0; } }\n\n.am-input-sm {\n  font-size: 1.4rem !important; }\n\n.am-input-lg {\n  font-size: 1.8rem !important; }\n\n.am-form-group-sm .am-checkbox, .am-form-group-sm .am-form-field, .am-form-group-sm .am-form-label, .am-form-group-sm .am-radio {\n  font-size: 1.4rem !important; }\n\n.am-form-group-lg .am-checkbox, .am-form-group-lg .am-form-field, .am-form-group-lg .am-form-label, .am-form-group-lg .am-radio {\n  font-size: 1.8rem !important; }\n\n.am-form-group-lg input[type=checkbox], .am-form-group-lg input[type=radio] {\n  margin-top: 7px; }\n\n.am-form-icon {\n  position: relative; }\n\n.am-form-icon .am-form-field {\n  padding-left: 1.75em !important; }\n\n.am-form-icon [class*=am-icon-] {\n  position: absolute;\n  left: .5em;\n  top: 50%;\n  display: block;\n  margin-top: -.5em;\n  line-height: 1;\n  z-index: 2; }\n\n.am-form-icon label ~ [class*=am-icon-] {\n  top: 70%; }\n\n.am-form-feedback {\n  position: relative; }\n\n.am-form-feedback .am-form-field {\n  padding-left: 0.5em !important;\n  padding-right: 1.75em !important; }\n\n.am-form-feedback [class*=am-icon-] {\n  right: .5em;\n  left: auto; }\n\n.am-form-horizontal .am-form-feedback [class*=am-icon-] {\n  right: 1.6em; }\n\n.am-form-set {\n  margin-bottom: 1.5rem;\n  padding: 0; }\n\n.am-form-set > input {\n  position: relative;\n  top: -1px;\n  border-radius: 0 !important; }\n\n.am-form-set > input:focus {\n  z-index: 2; }\n\n.am-form-set > input:first-child {\n  top: 1px;\n  border-top-right-radius: 0 !important;\n  border-top-left-radius: 0 !important; }\n\n.am-form-set > input:last-child {\n  top: -2px;\n  border-bottom-right-radius: 0 !important;\n  border-bottom-left-radius: 0 !important; }\n\n.am-img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 2px;\n  line-height: 1.6;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out; }\n\n.am-img-thumbnail.am-radius {\n  border-radius: 2px; }\n\n.am-img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.am-nav {\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none; }\n\n.am-nav:after, .am-nav:before {\n  content: \" \";\n  display: table; }\n\n.am-nav > li, .am-nav > li > a {\n  display: block;\n  position: relative; }\n\n.am-nav > li + li {\n  margin-top: 5px; }\n\n.am-nav > li + .am-nav-header {\n  margin-top: 1em; }\n\n.am-nav > li > a {\n  padding: .4em 1em;\n  border-radius: 0; }\n\n.am-nav > li > a:focus, .am-nav > li > a:hover {\n  text-decoration: none;\n  background-color: #eee; }\n\n.am-nav > li.am-active > a, .am-nav > li.am-active > a:focus, .am-nav > li.am-active > a:hover {\n  color: #fff;\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-nav > li.am-disabled > a {\n  color: #999; }\n\n.am-nav > li.am-disabled > a:focus, .am-nav > li.am-disabled > a:hover {\n  color: #999;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed; }\n\n.am-nav-header {\n  padding: .4em 1em;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 100%;\n  color: #555; }\n\n.am-nav-divider {\n  margin: 15px 1em !important;\n  border-top: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 0 #fff;\n  box-shadow: 0 1px 0 #fff; }\n\n.am-nav-pills > li {\n  float: left; }\n\n.am-nav-pills > li + li {\n  margin-left: 5px;\n  margin-top: 0; }\n\n.am-nav-tabs {\n  border-bottom: 1px solid #ddd; }\n\n.am-nav-tabs > li {\n  float: left;\n  margin-bottom: -1px; }\n\n.am-nav-tabs > li + li {\n  margin-top: 0; }\n\n.am-nav-tabs > li > a {\n  margin-right: 5px;\n  line-height: 1.6;\n  border: 1px solid transparent;\n  border-radius: 0; }\n\n.am-nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd; }\n\n.am-nav-tabs > li.am-active > a, .am-nav-tabs > li.am-active > a:focus, .am-nav-tabs > li.am-active > a:hover {\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default; }\n\n.am-topbar, .am-topbar a {\n  color: #666; }\n\n.am-nav-tabs.am-nav-justify {\n  border-bottom: 0; }\n\n.am-nav-tabs.am-nav-justify > li > a {\n  margin-right: 0;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0; }\n\n.am-nav-tabs.am-nav-justify > .am-active > a, .am-nav-tabs.am-nav-justify > .am-active > a:focus, .am-nav-tabs.am-nav-justify > .am-active > a:hover {\n  border-bottom-color: #fff; }\n\n.am-nav-justify {\n  width: 100%;\n  display: table; }\n\n.am-nav-justify > li, .lte9 .am-nav-justify > li {\n  display: table-cell;\n  width: 1%; }\n\n.am-nav-justify > li {\n  float: none; }\n\n.am-nav-justify > li > a {\n  text-align: center;\n  margin-bottom: 0; }\n\n.am-list, .am-topbar {\n  margin-bottom: 1.6rem; }\n\n.am-topbar-collapse:after, .am-topbar-collapse:before, .am-topbar:after, .am-topbar:before {\n  content: \" \";\n  display: table; }\n\n.am-topbar {\n  position: relative;\n  min-height: 50px;\n  background: #f8f8f8;\n  border-width: 0 0 1px;\n  border-style: solid;\n  border-color: #ddd; }\n\n.am-topbar-brand a:hover {\n  color: #4d4d4d; }\n\n.am-topbar-collapse {\n  width: 100%;\n  overflow-x: visible;\n  padding: 10px;\n  clear: both;\n  -webkit-overflow-scrolling: touch; }\n\n.am-topbar-collapse.am-in {\n  overflow-y: auto; }\n\n@media only screen and (min-width: 641px) {\n  .am-topbar-brand {\n    float: left; }\n  .am-topbar-collapse {\n    margin-top: 0;\n    padding: 0;\n    width: auto;\n    clear: none; }\n  .am-topbar-collapse.am-collapse {\n    display: block !important;\n    height: auto !important;\n    padding: 0;\n    overflow: visible !important; }\n  .am-topbar-collapse.am-in {\n    overflow-y: visible; }\n  .am-topbar-toggle {\n    display: none; } }\n\n.am-article:after, .am-btn-group-stacked > .am-btn-group:after, .am-btn-toolbar:after, .am-comment:after, .am-divider, .am-intro-more-bottom, .am-pagination:after, .am-slider .am-slides:after, .am-tabs-bd:after, ul.am-dropdown-content > li > a {\n  clear: both; }\n\n.am-topbar-brand {\n  margin: 0;\n  padding: 0 10px;\n  float: left;\n  font-size: 1.8rem;\n  height: 50px;\n  line-height: 50px; }\n\n.am-topbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 10px; }\n\n@media only screen and (max-width: 640px) {\n  body {\n    word-wrap: break-word;\n    -webkit-hyphens: auto;\n    -ms-hyphens: auto;\n    -moz-hyphens: auto;\n    hyphens: auto; }\n  .am-topbar-nav {\n    margin-bottom: 8px; }\n  .am-topbar-nav > li {\n    float: none; }\n  .am-topbar-nav > li + li {\n    margin-left: 0;\n    margin-top: 5px; } }\n\n@media only screen and (min-width: 641px) {\n  .am-topbar-nav {\n    float: left; }\n  .am-topbar-nav > li > a {\n    position: relative;\n    line-height: 50px;\n    padding: 0 10px; }\n  .am-topbar-nav > li > a:after {\n    position: absolute;\n    left: 50%;\n    margin-left: -7px;\n    bottom: -1px;\n    content: \"\";\n    display: inline-block;\n    width: 0;\n    height: 0;\n    vertical-align: middle;\n    border-bottom: 7px solid #f8f8f8;\n    border-right: 7px solid transparent;\n    border-left: 7px solid transparent;\n    border-top: 0 dotted;\n    -webkit-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg);\n    opacity: 0;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s; }\n  .am-topbar-nav > li > a:hover:after {\n    opacity: 1;\n    border-bottom-color: #666; }\n  .am-topbar-nav > li.am-dropdown > a:after {\n    display: none; }\n  .am-topbar-nav > li.am-active > a, .am-topbar-nav > li.am-active > a:focus, .am-topbar-nav > li.am-active > a:hover {\n    border-radius: 0;\n    color: #0e90d2;\n    background: 0 0; }\n  .am-topbar-nav > li.am-active > a:after {\n    opacity: 1;\n    border-bottom-color: #0e90d2; } }\n\n@media only screen and (max-width: 640px) {\n  .am-topbar-collapse .am-dropdown.am-active .am-dropdown-content {\n    float: none;\n    position: relative;\n    width: 100%; }\n  .am-topbar-form .am-form-group {\n    margin-bottom: 5px; }\n  .am-topbar-collapse .am-btn, .am-topbar-collapse .am-topbar-btn {\n    display: block;\n    width: 100%; } }\n\n@media only screen and (min-width: 641px) {\n  .am-topbar-left {\n    float: left; }\n  .am-topbar-right {\n    float: right;\n    margin-right: 10px; }\n  .am-topbar-form {\n    padding: 0 10px;\n    margin-top: 8px; }\n  .am-topbar-form .am-form-group + .am-btn {\n    margin-left: 5px; } }\n\n.am-topbar-btn {\n  margin-top: 8px; }\n\n.am-topbar-inverse {\n  background-color: #0e90d2;\n  border-color: #0b6fa2;\n  color: #eee; }\n\n.am-topbar-inverse a {\n  color: #eee; }\n\n.am-topbar-inverse .am-topbar-brand a {\n  color: #fff; }\n\n.am-topbar-inverse .am-topbar-brand a:focus, .am-topbar-inverse .am-topbar-brand a:hover {\n  color: #fff;\n  background-color: transparent; }\n\n.am-topbar-inverse .am-topbar-nav > li > a {\n  color: #eee; }\n\n.am-topbar-inverse .am-topbar-nav > li > a:focus, .am-topbar-inverse .am-topbar-nav > li > a:hover {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.am-topbar-inverse .am-topbar-nav > li > a:focus:after, .am-topbar-inverse .am-topbar-nav > li > a:hover:after {\n  border-bottom-color: #0b6fa2; }\n\n.am-topbar-inverse .am-topbar-nav > li > a:after {\n  border-bottom-color: #0e90d2; }\n\n.am-topbar-inverse .am-topbar-nav > li.am-active > a, .am-topbar-inverse .am-topbar-nav > li.am-active > a:focus, .am-topbar-inverse .am-topbar-nav > li.am-active > a:hover {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.am-topbar-inverse .am-topbar-nav > li.am-active > a:after, .am-topbar-inverse .am-topbar-nav > li.am-active > a:focus:after, .am-topbar-inverse .am-topbar-nav > li.am-active > a:hover:after {\n  border-bottom-color: #fff; }\n\n.am-topbar-inverse .am-topbar-nav > li .disabled > a, .am-topbar-inverse .am-topbar-nav > li .disabled > a:focus, .am-topbar-inverse .am-topbar-nav > li .disabled > a:hover {\n  color: #444;\n  background-color: transparent; }\n\n.am-topbar-fixed-bottom, .am-topbar-fixed-top {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.am-topbar-fixed-top {\n  top: 0; }\n\n.am-topbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.am-with-topbar-fixed-top {\n  padding-top: 51px; }\n\n.am-with-topbar-fixed-bottom {\n  padding-bottom: 51px; }\n\n@media only screen and (max-width: 640px) {\n  .am-topbar-fixed-bottom .am-topbar-collapse {\n    position: absolute;\n    bottom: 100%;\n    margin-bottom: 1px;\n    background-color: #f8f8f8; }\n  .am-topbar-fixed-bottom .am-topbar-collapse .am-dropdown-content:after, .am-topbar-fixed-bottom .am-topbar-collapse .am-dropdown-content:before {\n    display: none; }\n  .am-topbar-fixed-bottom.am-topbar-inverse .am-topbar-collapse {\n    background-color: #0e90d2; } }\n\n.am-breadcrumb {\n  padding: .7em .5em;\n  margin-bottom: 2rem;\n  list-style: none;\n  background-color: transparent;\n  border-radius: 0;\n  font-size: 85%; }\n\n.am-breadcrumb > li {\n  display: inline-block; }\n\n.am-breadcrumb > li [class*=am-icon-]:before {\n  color: #999;\n  margin-right: 5px; }\n\n.am-breadcrumb > li + li:before {\n  content: \"\\BB\\A0\";\n  padding: 0 8px;\n  color: #ccc; }\n\n.am-breadcrumb > .am-active {\n  color: #999; }\n\n.am-breadcrumb-slash > li + li:before {\n  content: \"/\\A0\"; }\n\n.am-pagination {\n  padding-left: 0;\n  margin: 1.5rem 0;\n  list-style: none;\n  color: #999; }\n\n* + .am-article-divider, .am-article + .am-article {\n  margin-top: 2.4rem; }\n\n.am-pagination:after, .am-pagination:before {\n  content: \" \";\n  display: table; }\n\n.am-pagination > li {\n  display: inline-block; }\n\n.am-pagination > li > a, .am-pagination > li > span {\n  position: relative;\n  display: block;\n  padding: .5em 1em;\n  text-decoration: none;\n  line-height: 1.2;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  margin-bottom: 5px;\n  margin-right: 5px; }\n\n.am-pagination .am-pagination-next a, .am-pagination .am-pagination-prev a {\n  border-radius: 0; }\n\n.am-pagination > li:last-child > a, .am-pagination > li:last-child > span {\n  margin-right: 0; }\n\n.am-pagination > li > a:focus, .am-pagination > li > a:hover, .am-pagination > li > span:focus, .am-pagination > li > span:hover {\n  background-color: #eee; }\n\n.am-pagination > .am-active > a, .am-pagination > .am-active > a:focus, .am-pagination > .am-active > a:hover, .am-pagination > .am-active > span, .am-pagination > .am-active > span:focus, .am-pagination > .am-active > span:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #0e90d2;\n  cursor: default; }\n\n.am-pagination > .am-disabled > a, .am-pagination > .am-disabled > a:focus, .am-pagination > .am-disabled > a:hover, .am-pagination > .am-disabled > span, .am-pagination > .am-disabled > span:focus, .am-pagination > .am-disabled > span:hover {\n  color: #999;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n  pointer-events: none; }\n\n.am-pagination .am-pagination-prev {\n  float: left; }\n\n.am-pagination .am-pagination-next {\n  float: right; }\n\n.am-pagination-centered {\n  text-align: center; }\n\n.am-pagination-right {\n  text-align: right; }\n\n.am-badge, .am-close, .am-icon-btn, .am-icon-fw, .am-icon-li, .am-progress-bar {\n  text-align: center; }\n\n[class*=am-animation-] {\n  -webkit-animation-duration: .5s;\n  animation-duration: .5s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@media screen {\n  .cssanimations [data-am-scrollspy*=animation] {\n    opacity: 0; } }\n\n.am-animation-fade {\n  -webkit-animation-name: am-fade;\n  animation-name: am-fade;\n  -webkit-animation-duration: .8s;\n  animation-duration: .8s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear; }\n\n.am-animation-scale-up {\n  -webkit-animation-name: am-scale-up;\n  animation-name: am-scale-up; }\n\n.am-animation-scale-down {\n  -webkit-animation-name: am-scale-down;\n  animation-name: am-scale-down; }\n\n.am-animation-slide-top {\n  -webkit-animation-name: am-slide-top;\n  animation-name: am-slide-top; }\n\n.am-animation-slide-bottom {\n  -webkit-animation-name: am-slide-bottom;\n  animation-name: am-slide-bottom; }\n\n.am-animation-slide-left {\n  -webkit-animation-name: am-slide-left;\n  animation-name: am-slide-left; }\n\n.am-animation-slide-right {\n  -webkit-animation-name: am-slide-right;\n  animation-name: am-slide-right; }\n\n.am-animation-slide-top-fixed {\n  -webkit-animation-name: am-slide-top-fixed;\n  animation-name: am-slide-top-fixed; }\n\n.am-animation-shake {\n  -webkit-animation-name: am-shake;\n  animation-name: am-shake; }\n\n.am-animation-spin {\n  -webkit-animation: am-spin 2s infinite linear;\n  animation: am-spin 2s infinite linear; }\n\n.am-animation-left-spring {\n  -webkit-animation: am-left-spring .3s ease-in-out;\n  animation: am-left-spring .3s ease-in-out; }\n\n.am-animation-right-spring {\n  -webkit-animation: am-right-spring .3s ease-in-out;\n  animation: am-right-spring .3s ease-in-out; }\n\n.am-animation-reverse {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse; }\n\n.am-animation-paused {\n  -webkit-animation-play-state: paused !important;\n  animation-play-state: paused !important; }\n\n.am-animation-delay-1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.am-animation-delay-2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s; }\n\n.am-animation-delay-3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s; }\n\n.am-animation-delay-4 {\n  -webkit-animation-delay: 4s;\n  animation-delay: 4s; }\n\n.am-animation-delay-5 {\n  -webkit-animation-delay: 5s;\n  animation-delay: 5s; }\n\n.am-animation-delay-6 {\n  -webkit-animation-delay: 6s;\n  animation-delay: 6s; }\n\n@-webkit-keyframes am-fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes am-fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes am-scale-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n    transform: scale(0.2); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes am-scale-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n    transform: scale(0.2); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@-webkit-keyframes am-scale-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.8);\n    transform: scale(1.8); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes am-scale-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.8);\n    transform: scale(1.8); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@-webkit-keyframes am-slide-top {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes am-slide-top {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes am-slide-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes am-slide-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes am-slide-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes am-slide-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes am-slide-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes am-slide-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes am-shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  10% {\n    -webkit-transform: translateX(-9px);\n    transform: translateX(-9px); }\n  20% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px); }\n  30% {\n    -webkit-transform: translateX(-7px);\n    transform: translateX(-7px); }\n  40% {\n    -webkit-transform: translateX(6px);\n    transform: translateX(6px); }\n  50% {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px); }\n  60% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px); }\n  70% {\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px); }\n  80% {\n    -webkit-transform: translateX(2px);\n    transform: translateX(2px); }\n  90% {\n    -webkit-transform: translateX(-1px);\n    transform: translateX(-1px); } }\n\n@keyframes am-shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  10% {\n    -webkit-transform: translateX(-9px);\n    transform: translateX(-9px); }\n  20% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px); }\n  30% {\n    -webkit-transform: translateX(-7px);\n    transform: translateX(-7px); }\n  40% {\n    -webkit-transform: translateX(6px);\n    transform: translateX(6px); }\n  50% {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px); }\n  60% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px); }\n  70% {\n    -webkit-transform: translateX(-3px);\n    transform: translateX(-3px); }\n  80% {\n    -webkit-transform: translateX(2px);\n    transform: translateX(2px); }\n  90% {\n    -webkit-transform: translateX(-1px);\n    transform: translateX(-1px); } }\n\n@-webkit-keyframes am-slide-top-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes am-slide-top-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes am-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes am-slide-bottom-fixed {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes am-spin {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes am-spin {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@-webkit-keyframes am-right-spring {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(-20%);\n    transform: translateX(-20%); } }\n\n@keyframes am-right-spring {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(-20%);\n    transform: translateX(-20%); } }\n\n@-webkit-keyframes am-left-spring {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(20%);\n    transform: translateX(20%); } }\n\n@keyframes am-left-spring {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(20%);\n    transform: translateX(20%); } }\n\n.am-article:after, .am-article:before {\n  content: \" \";\n  display: table; }\n\n.am-article > :last-child {\n  margin-bottom: 0; }\n\n.am-article-title {\n  font-size: 2.8rem;\n  line-height: 1.15;\n  font-weight: 400; }\n\n.am-article-title a {\n  color: inherit;\n  text-decoration: none; }\n\n.am-article-meta {\n  font-size: 1.2rem;\n  line-height: 1.5;\n  color: #999; }\n\n.am-article-lead {\n  color: #666;\n  font-size: 1.4rem;\n  line-height: 1.5;\n  border: 1px solid #dedede;\n  border-radius: 2px;\n  background: #f9f9f9;\n  padding: 10px; }\n\n.am-badge, .am-badge.am-square {\n  border-radius: 0; }\n\n.am-article-divider {\n  margin-bottom: 2.4rem;\n  border-color: #eee; }\n\n.am-article-bd blockquote {\n  font-family: Georgia,\"Times New Roman\",Times,Kai,\"Kaiti SC\",KaiTi,BiauKai,FontAwesome,serif; }\n\n.am-article-bd img {\n  display: block;\n  max-width: 100%; }\n\n.am-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: .25em .625em;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  background-color: #999; }\n\n.am-badge:empty {\n  display: none; }\n\n.am-badge.am-radius {\n  border-radius: 2px; }\n\n.am-badge.am-round {\n  border-radius: 1000px; }\n\na.am-badge:focus, a.am-badge:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.am-badge-primary {\n  background-color: #0e90d2; }\n\n.am-badge-secondary {\n  background-color: #3bb4f2; }\n\n.am-badge-success {\n  background-color: #5eb95e; }\n\n.am-badge-warning {\n  background-color: #F37B1D; }\n\n.am-badge-danger {\n  background-color: #dd514c; }\n\n.am-comment:after, .am-comment:before {\n  content: \" \";\n  display: table; }\n\n.am-comment-avatar {\n  float: left;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid transparent; }\n\n@media only screen and (min-width: 641px) {\n  .am-comment-avatar {\n    width: 48px;\n    height: 48px; } }\n\n.am-comment-main {\n  position: relative;\n  margin-left: 42px;\n  border: 1px solid #dedede;\n  border-radius: 0; }\n\n.am-btn-group-stacked > .am-btn-group:not(:first-child):not(:last-child) > .am-btn, .am-btn-group-stacked > .am-btn:not(:first-child):not(:last-child), .am-btn-group > .am-btn-group:not(:first-child):not(:last-child) > .am-btn, .am-btn-group > .am-btn:not(:first-child):not(:last-child):not(.am-dropdown-toggle) {\n  border-radius: 0; }\n\n.am-comment-main:after, .am-comment-main:before {\n  position: absolute;\n  top: 10px;\n  left: -8px;\n  right: 100%;\n  width: 0;\n  height: 0;\n  display: block;\n  content: \" \";\n  border-color: transparent;\n  border-style: solid solid outset;\n  border-width: 8px 8px 8px 0;\n  pointer-events: none; }\n\n.am-comment-hd, .am-pureview-slider li {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox; }\n\n.am-comment-main:before {\n  border-right-color: #dedede;\n  z-index: 1; }\n\n.am-comment-main:after {\n  border-right-color: #f8f8f8;\n  margin-left: 1px;\n  z-index: 2; }\n\n@media only screen and (min-width: 641px) {\n  .am-comment-main {\n    margin-left: 63px; } }\n\n.am-comment-hd {\n  background: #f8f8f8;\n  border-bottom: 1px solid #eee;\n  display: flex; }\n\n.am-comment-title {\n  margin: 0 0 8px;\n  font-size: 1.6rem;\n  line-height: 1.2; }\n\n.am-comment-actions, .am-comment-meta {\n  font-size: 13px;\n  color: #999; }\n\n.am-comment-meta {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  padding: 10px 15px;\n  line-height: 1.2;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.am-comment-meta a {\n  color: #999; }\n\n.am-comment-author {\n  font-weight: 700;\n  color: #999; }\n\n.am-comment-bd {\n  padding: 15px;\n  overflow: hidden; }\n\n.am-comment-bd > :last-child {\n  margin-bottom: 0; }\n\n.am-comment-footer {\n  padding: 0 15px 5px; }\n\n.am-comment-footer .am-comment-actions a + a {\n  margin-left: 5px; }\n\n.am-comment-actions a {\n  display: inline-block;\n  padding: 10px 5px;\n  line-height: 1;\n  color: #999;\n  opacity: .7; }\n\n.am-comment-actions a:hover {\n  color: #0e90d2;\n  opacity: 1; }\n\n.am-comment-hd .am-comment-actions {\n  padding-right: .5rem; }\n\n.am-comment-flip .am-comment-avatar {\n  float: right; }\n\n.am-btn-group > .am-btn-group, .am-btn-toolbar .am-btn-group, .am-btn-toolbar .am-input-group {\n  float: left; }\n\n.am-comment-flip .am-comment-main {\n  margin-left: auto;\n  margin-right: 42px; }\n\n@media only screen and (min-width: 641px) {\n  .am-comment-flip .am-comment-main {\n    margin-right: 63px; } }\n\n.am-comment-flip .am-comment-main:after, .am-comment-flip .am-comment-main:before {\n  left: auto;\n  right: -8px;\n  border-width: 8px 0 8px 8px; }\n\n.am-comment-flip .am-comment-main:before {\n  border-left-color: #dedede; }\n\n.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8;\n  margin-right: 1px;\n  margin-left: auto; }\n\n.am-comment-primary .am-comment-avatar, .am-comment-primary .am-comment-main {\n  border-color: #0e90d2; }\n\n.am-comment-primary .am-comment-main:before {\n  border-right-color: #0e90d2; }\n\n.am-comment-primary.am-comment-flip .am-comment-main:before {\n  border-left-color: #0e90d2;\n  border-right-color: transparent; }\n\n.am-comment-primary.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8; }\n\n.am-comment-highlight .am-comment-avatar, .am-comment-highlight .am-comment-main, .am-comment-secondary .am-comment-avatar, .am-comment-secondary .am-comment-main {\n  border-color: #3bb4f2; }\n\n.am-comment-highlight .am-comment-main:before, .am-comment-secondary .am-comment-main:before {\n  border-right-color: #3bb4f2; }\n\n.am-comment-highlight.am-comment-flip .am-comment-main:before, .am-comment-secondary.am-comment-flip .am-comment-main:before {\n  border-left-color: #3bb4f2;\n  border-right-color: transparent; }\n\n.am-comment-highlight.am-comment-flip .am-comment-main:after, .am-comment-secondary.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8; }\n\n.am-comment-success .am-comment-avatar, .am-comment-success .am-comment-main {\n  border-color: #5eb95e; }\n\n.am-comment-success .am-comment-main:before {\n  border-right-color: #5eb95e; }\n\n.am-comment-success.am-comment-flip .am-comment-main:before {\n  border-left-color: #5eb95e;\n  border-right-color: transparent; }\n\n.am-comment-success.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8; }\n\n.am-comment-warning .am-comment-avatar, .am-comment-warning .am-comment-main {\n  border-color: #F37B1D; }\n\n.am-comment-warning .am-comment-main:before {\n  border-right-color: #F37B1D; }\n\n.am-comment-warning.am-comment-flip .am-comment-main:before {\n  border-left-color: #F37B1D;\n  border-right-color: transparent; }\n\n.am-comment-warning.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8; }\n\n.am-comment-danger .am-comment-avatar, .am-comment-danger .am-comment-main {\n  border-color: #dd514c; }\n\n.am-comment-danger .am-comment-main:before {\n  border-right-color: #dd514c; }\n\n.am-comment-danger.am-comment-flip .am-comment-main:before {\n  border-left-color: #dd514c;\n  border-right-color: transparent; }\n\n.am-comment-danger.am-comment-flip .am-comment-main:after {\n  border-left-color: #f8f8f8; }\n\n.am-comments-list {\n  padding: 0;\n  list-style: none; }\n\n.am-comments-list .am-comment {\n  margin: 1.6rem 0 0;\n  list-style: none; }\n\n@media only screen and (min-width: 641px) {\n  .am-comments-list-flip .am-comment-main {\n    margin-right: 64px; }\n  .am-comments-list-flip .am-comment-flip .am-comment-main {\n    margin-left: 64px; } }\n\n.am-btn-group, .am-btn-group-stacked {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n\n.am-btn-group-stacked > .am-btn, .am-btn-group > .am-btn {\n  position: relative;\n  float: left; }\n\n.am-btn-group-stacked > .am-btn.active, .am-btn-group-stacked > .am-btn:active, .am-btn-group-stacked > .am-btn:focus, .am-btn-group-stacked > .am-btn:hover, .am-btn-group > .am-btn.active, .am-btn-group > .am-btn:active, .am-btn-group > .am-btn:focus, .am-btn-group > .am-btn:hover {\n  z-index: 2; }\n\n.am-btn-group-stacked > .am-btn:focus, .am-btn-group > .am-btn:focus {\n  outline: 0; }\n\n.am-btn-group .am-btn + .am-btn, .am-btn-group .am-btn + .am-btn-group, .am-btn-group .am-btn-group + .am-btn, .am-btn-group .am-btn-group + .am-btn-group {\n  margin-left: -1px; }\n\n.am-btn-toolbar {\n  margin-left: -5px; }\n\n.am-btn-toolbar:after, .am-btn-toolbar:before {\n  content: \" \";\n  display: table; }\n\n.am-btn-toolbar > .am-btn, .am-btn-toolbar > .am-btn-group, .am-btn-toolbar > .am-input-group {\n  margin-left: 5px; }\n\n.am-btn-group > .am-btn:first-child {\n  margin-left: 0; }\n\n.am-btn-group > .am-btn:first-child:not(:last-child):not(.am-dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.am-btn-group > .am-btn:last-child:not(:first-child), .am-btn-group > .am-dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-btn-group > .am-btn-group:first-child > .am-btn:last-child, .am-btn-group > .am-btn-group:first-child > .am-dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.am-btn-group > .am-btn-group:last-child > .am-btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-btn-group-xs > .am-btn {\n  font-size: 1.2rem; }\n\n.am-btn-group-sm > .am-btn {\n  font-size: 1.4rem; }\n\n.am-btn-group-lg > .am-btn {\n  font-size: 1.8rem; }\n\n.am-btn-group-stacked > .am-btn, .am-btn-group-stacked > .am-btn-group, .am-btn-group-stacked > .am-btn-group > .am-btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.am-btn-group-stacked > .am-btn-group:after, .am-btn-group-stacked > .am-btn-group:before {\n  content: \" \";\n  display: table; }\n\n.am-btn-group-stacked > .am-btn-group > .am-btn {\n  float: none; }\n\n.am-btn-group-stacked > .am-btn + .am-btn, .am-btn-group-stacked > .am-btn + .am-btn-group, .am-btn-group-stacked > .am-btn-group + .am-btn, .am-btn-group-stacked > .am-btn-group + .am-btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.am-input-group-label input[type=checkbox], .am-input-group-label input[type=radio], .am-list-item-hd {\n  margin-top: 0; }\n\n.am-btn-group-stacked > .am-btn:first-child:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.am-btn-group-stacked > .am-btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-btn-group-stacked > .am-btn-group:first-child:not(:last-child) > .am-btn:last-child, .am-btn-group-stacked > .am-btn-group:first-child:not(:last-child) > .am-dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.am-btn-group-stacked > .am-btn-group:last-child:not(:first-child) > .am-btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-btn-group-justify {\n  display: table;\n  table-layout: fixed;\n  width: 100%; }\n\n.am-btn-group-justify > .am-btn, .am-btn-group-justify > .am-btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%; }\n\n.am-btn-group-justify > .am-btn-group .am-btn {\n  width: 100%; }\n\n.lte9 .am-btn-group-justify {\n  display: table;\n  table-layout: fixed;\n  border-collapse: separate; }\n\n.lte9 .am-btn-group-justify > .am-btn, .lte9 .am-btn-group-justify > .am-btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%; }\n\n.am-btn-group .am-dropdown {\n  float: left;\n  margin-left: -1px; }\n\n.am-btn-group .am-dropdown > .am-btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-btn-group .am-active .am-dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n\n.am-btn-group .am-active .am-dropdown-toggle.am-btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.am-btn-group .am-active .am-dropdown-toggle, .am-btn-group .am-dropdown-toggle:active {\n  outline: 0; }\n\n.am-btn-group-check > .am-btn > input[type=checkbox], .am-btn-group-check > .am-btn > input[type=radio], [data-am-button] > .am-btn > input[type=checkbox], [data-am-button] > .am-btn > input[type=radio] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n\n.am-close {\n  display: inline-block;\n  width: 24px;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 24px;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n.am-close:focus, .am-close:hover {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .5;\n  outline: 0; }\n\n.am-close[class*=am-icon-] {\n  font-size: 16px; }\n\nbutton.am-close {\n  padding: 0;\n  cursor: pointer;\n  background: 0 0;\n  border: 0;\n  -webkit-appearance: none; }\n\na.am-close:hover {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer; }\n\n.am-close-alt {\n  border-radius: 50%;\n  background: #eee;\n  opacity: .7;\n  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25); }\n\n.am-close-alt:focus, .am-close-alt:hover {\n  opacity: 1; }\n\n.am-close-spin:hover {\n  -webkit-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n  transform: rotate(360deg); }\n\n@font-face {\n  font-family: FontAwesome;\n  src: url(" + __webpack_require__(5) + ");\n  src: url(" + __webpack_require__(6) + "?#iefix&v=4.5.0) format(\"embedded-opentype\"), url(" + __webpack_require__(7) + ") format(\"woff2\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(9) + ") format(\"truetype\"), url(" + __webpack_require__(10) + "#fontawesomeregular) format(\"svg\");\n  font-weight: 400;\n  font-style: normal; }\n\n[class*=am-icon-] {\n  display: inline-block;\n  font-style: normal; }\n\n.am-slider-default .am-direction-nav a:before, [class*=am-icon-]:before {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  text-rendering: auto;\n  -moz-osx-font-smoothing: grayscale; }\n\n[class*=am-icon-]:before {\n  display: inline-block;\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0); }\n\n.am-icon-border {\n  padding: .2em .25em .15em;\n  border: .08em solid #eee;\n  border-radius: .1em; }\n\n[class*=am-icon-].am-fl {\n  margin-right: .3em; }\n\n[class*=am-icon-].am-fr {\n  margin-left: .3em; }\n\n.am-icon-sm:before {\n  font-size: 150%;\n  vertical-align: -10%; }\n\n.am-icon-md:before {\n  font-size: 200%;\n  vertical-align: -16%; }\n\n.am-icon-lg:before {\n  font-size: 250%;\n  vertical-align: -22%; }\n\n.am-icon-btn {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  font-size: 24px;\n  line-height: 48px;\n  border-radius: 50%;\n  background-color: #eee;\n  color: #555; }\n\n.am-icon-btn:focus, .am-icon-btn:hover {\n  background-color: #f5f5f5;\n  color: #333;\n  text-decoration: none;\n  outline: 0; }\n\n.am-icon-btn:active {\n  background-color: #ddd;\n  color: #333; }\n\n.am-icon-btn.am-danger, .am-icon-btn.am-primary, .am-icon-btn.am-secondary, .am-icon-btn.am-success, .am-icon-btn.am-warning {\n  color: #fff; }\n\n.am-icon-btn.am-primary {\n  background-color: #0e90d2; }\n\n.am-icon-btn.am-secondary {\n  background-color: #3bb4f2; }\n\n.am-icon-btn.am-success {\n  background-color: #5eb95e; }\n\n.am-icon-btn.am-warning {\n  background-color: #F37B1D; }\n\n.am-icon-btn.am-danger {\n  background-color: #dd514c; }\n\n.am-icon-btn-sm {\n  width: 32px;\n  height: 32px;\n  font-size: 16px;\n  line-height: 32px; }\n\n.am-icon-btn-lg {\n  width: 64px;\n  height: 64px;\n  font-size: 28px;\n  line-height: 64px; }\n\n.am-icon-fw {\n  width: 1.25em; }\n\n.am-icon-glass:before {\n  content: \"\\F000\"; }\n\n.am-icon-music:before {\n  content: \"\\F001\"; }\n\n.am-icon-search:before {\n  content: \"\\F002\"; }\n\n.am-icon-envelope-o:before {\n  content: \"\\F003\"; }\n\n.am-icon-heart:before {\n  content: \"\\F004\"; }\n\n.am-icon-star:before {\n  content: \"\\F005\"; }\n\n.am-icon-star-o:before {\n  content: \"\\F006\"; }\n\n.am-icon-user:before {\n  content: \"\\F007\"; }\n\n.am-icon-film:before {\n  content: \"\\F008\"; }\n\n.am-icon-th-large:before {\n  content: \"\\F009\"; }\n\n.am-icon-th:before {\n  content: \"\\F00A\"; }\n\n.am-icon-th-list:before {\n  content: \"\\F00B\"; }\n\n.am-icon-check:before {\n  content: \"\\F00C\"; }\n\n.am-icon-close:before, .am-icon-remove:before, .am-icon-times:before {\n  content: \"\\F00D\"; }\n\n.am-icon-search-plus:before {\n  content: \"\\F00E\"; }\n\n.am-icon-search-minus:before {\n  content: \"\\F010\"; }\n\n.am-icon-power-off:before {\n  content: \"\\F011\"; }\n\n.am-icon-signal:before {\n  content: \"\\F012\"; }\n\n.am-icon-cog:before, .am-icon-gear:before {\n  content: \"\\F013\"; }\n\n.am-icon-trash-o:before {\n  content: \"\\F014\"; }\n\n.am-icon-home:before {\n  content: \"\\F015\"; }\n\n.am-icon-file-o:before {\n  content: \"\\F016\"; }\n\n.am-icon-clock-o:before {\n  content: \"\\F017\"; }\n\n.am-icon-road:before {\n  content: \"\\F018\"; }\n\n.am-icon-download:before {\n  content: \"\\F019\"; }\n\n.am-icon-arrow-circle-o-down:before {\n  content: \"\\F01A\"; }\n\n.am-icon-arrow-circle-o-up:before {\n  content: \"\\F01B\"; }\n\n.am-icon-inbox:before {\n  content: \"\\F01C\"; }\n\n.am-icon-play-circle-o:before {\n  content: \"\\F01D\"; }\n\n.am-icon-repeat:before, .am-icon-rotate-right:before {\n  content: \"\\F01E\"; }\n\n.am-icon-refresh:before {\n  content: \"\\F021\"; }\n\n.am-icon-list-alt:before {\n  content: \"\\F022\"; }\n\n.am-icon-lock:before {\n  content: \"\\F023\"; }\n\n.am-icon-flag:before {\n  content: \"\\F024\"; }\n\n.am-icon-headphones:before {\n  content: \"\\F025\"; }\n\n.am-icon-volume-off:before {\n  content: \"\\F026\"; }\n\n.am-icon-volume-down:before {\n  content: \"\\F027\"; }\n\n.am-icon-volume-up:before {\n  content: \"\\F028\"; }\n\n.am-icon-qrcode:before {\n  content: \"\\F029\"; }\n\n.am-icon-barcode:before {\n  content: \"\\F02A\"; }\n\n.am-icon-tag:before {\n  content: \"\\F02B\"; }\n\n.am-icon-tags:before {\n  content: \"\\F02C\"; }\n\n.am-icon-book:before {\n  content: \"\\F02D\"; }\n\n.am-icon-bookmark:before {\n  content: \"\\F02E\"; }\n\n.am-icon-print:before {\n  content: \"\\F02F\"; }\n\n.am-icon-camera:before {\n  content: \"\\F030\"; }\n\n.am-icon-font:before {\n  content: \"\\F031\"; }\n\n.am-icon-bold:before {\n  content: \"\\F032\"; }\n\n.am-icon-italic:before {\n  content: \"\\F033\"; }\n\n.am-icon-text-height:before {\n  content: \"\\F034\"; }\n\n.am-icon-text-width:before {\n  content: \"\\F035\"; }\n\n.am-icon-align-left:before {\n  content: \"\\F036\"; }\n\n.am-icon-align-center:before {\n  content: \"\\F037\"; }\n\n.am-icon-align-right:before {\n  content: \"\\F038\"; }\n\n.am-icon-align-justify:before {\n  content: \"\\F039\"; }\n\n.am-icon-list:before {\n  content: \"\\F03A\"; }\n\n.am-icon-dedent:before, .am-icon-outdent:before {\n  content: \"\\F03B\"; }\n\n.am-icon-indent:before {\n  content: \"\\F03C\"; }\n\n.am-icon-video-camera:before {\n  content: \"\\F03D\"; }\n\n.am-icon-image:before, .am-icon-photo:before, .am-icon-picture-o:before {\n  content: \"\\F03E\"; }\n\n.am-icon-pencil:before {\n  content: \"\\F040\"; }\n\n.am-icon-map-marker:before {\n  content: \"\\F041\"; }\n\n.am-icon-adjust:before {\n  content: \"\\F042\"; }\n\n.am-icon-tint:before {\n  content: \"\\F043\"; }\n\n.am-icon-edit:before, .am-icon-pencil-square-o:before {\n  content: \"\\F044\"; }\n\n.am-icon-share-square-o:before {\n  content: \"\\F045\"; }\n\n.am-icon-check-square-o:before {\n  content: \"\\F046\"; }\n\n.am-icon-arrows:before {\n  content: \"\\F047\"; }\n\n.am-icon-step-backward:before {\n  content: \"\\F048\"; }\n\n.am-icon-fast-backward:before {\n  content: \"\\F049\"; }\n\n.am-icon-backward:before {\n  content: \"\\F04A\"; }\n\n.am-icon-play:before {\n  content: \"\\F04B\"; }\n\n.am-icon-pause:before {\n  content: \"\\F04C\"; }\n\n.am-icon-stop:before {\n  content: \"\\F04D\"; }\n\n.am-icon-forward:before {\n  content: \"\\F04E\"; }\n\n.am-icon-fast-forward:before {\n  content: \"\\F050\"; }\n\n.am-icon-step-forward:before {\n  content: \"\\F051\"; }\n\n.am-icon-eject:before {\n  content: \"\\F052\"; }\n\n.am-icon-chevron-left:before {\n  content: \"\\F053\"; }\n\n.am-icon-chevron-right:before {\n  content: \"\\F054\"; }\n\n.am-icon-plus-circle:before {\n  content: \"\\F055\"; }\n\n.am-icon-minus-circle:before {\n  content: \"\\F056\"; }\n\n.am-icon-times-circle:before {\n  content: \"\\F057\"; }\n\n.am-icon-check-circle:before {\n  content: \"\\F058\"; }\n\n.am-icon-question-circle:before {\n  content: \"\\F059\"; }\n\n.am-icon-info-circle:before {\n  content: \"\\F05A\"; }\n\n.am-icon-crosshairs:before {\n  content: \"\\F05B\"; }\n\n.am-icon-times-circle-o:before {\n  content: \"\\F05C\"; }\n\n.am-icon-check-circle-o:before {\n  content: \"\\F05D\"; }\n\n.am-icon-ban:before {\n  content: \"\\F05E\"; }\n\n.am-icon-arrow-left:before {\n  content: \"\\F060\"; }\n\n.am-icon-arrow-right:before {\n  content: \"\\F061\"; }\n\n.am-icon-arrow-up:before {\n  content: \"\\F062\"; }\n\n.am-icon-arrow-down:before {\n  content: \"\\F063\"; }\n\n.am-icon-mail-forward:before, .am-icon-share:before {\n  content: \"\\F064\"; }\n\n.am-icon-expand:before {\n  content: \"\\F065\"; }\n\n.am-icon-compress:before {\n  content: \"\\F066\"; }\n\n.am-icon-plus:before {\n  content: \"\\F067\"; }\n\n.am-icon-minus:before {\n  content: \"\\F068\"; }\n\n.am-icon-asterisk:before {\n  content: \"\\F069\"; }\n\n.am-icon-exclamation-circle:before {\n  content: \"\\F06A\"; }\n\n.am-icon-gift:before {\n  content: \"\\F06B\"; }\n\n.am-icon-leaf:before {\n  content: \"\\F06C\"; }\n\n.am-icon-fire:before {\n  content: \"\\F06D\"; }\n\n.am-icon-eye:before {\n  content: \"\\F06E\"; }\n\n.am-icon-eye-slash:before {\n  content: \"\\F070\"; }\n\n.am-icon-exclamation-triangle:before, .am-icon-warning:before {\n  content: \"\\F071\"; }\n\n.am-icon-plane:before {\n  content: \"\\F072\"; }\n\n.am-icon-calendar:before {\n  content: \"\\F073\"; }\n\n.am-icon-random:before {\n  content: \"\\F074\"; }\n\n.am-icon-comment:before {\n  content: \"\\F075\"; }\n\n.am-icon-magnet:before {\n  content: \"\\F076\"; }\n\n.am-icon-chevron-up:before {\n  content: \"\\F077\"; }\n\n.am-icon-chevron-down:before {\n  content: \"\\F078\"; }\n\n.am-icon-retweet:before {\n  content: \"\\F079\"; }\n\n.am-icon-shopping-cart:before {\n  content: \"\\F07A\"; }\n\n.am-icon-folder:before {\n  content: \"\\F07B\"; }\n\n.am-icon-folder-open:before {\n  content: \"\\F07C\"; }\n\n.am-icon-arrows-v:before {\n  content: \"\\F07D\"; }\n\n.am-icon-arrows-h:before {\n  content: \"\\F07E\"; }\n\n.am-icon-bar-chart-o:before, .am-icon-bar-chart:before {\n  content: \"\\F080\"; }\n\n.am-icon-twitter-square:before {\n  content: \"\\F081\"; }\n\n.am-icon-facebook-square:before {\n  content: \"\\F082\"; }\n\n.am-icon-camera-retro:before {\n  content: \"\\F083\"; }\n\n.am-icon-key:before {\n  content: \"\\F084\"; }\n\n.am-icon-cogs:before, .am-icon-gears:before {\n  content: \"\\F085\"; }\n\n.am-icon-comments:before {\n  content: \"\\F086\"; }\n\n.am-icon-thumbs-o-up:before {\n  content: \"\\F087\"; }\n\n.am-icon-thumbs-o-down:before {\n  content: \"\\F088\"; }\n\n.am-icon-star-half:before {\n  content: \"\\F089\"; }\n\n.am-icon-heart-o:before {\n  content: \"\\F08A\"; }\n\n.am-icon-sign-out:before {\n  content: \"\\F08B\"; }\n\n.am-icon-linkedin-square:before {\n  content: \"\\F08C\"; }\n\n.am-icon-thumb-tack:before {\n  content: \"\\F08D\"; }\n\n.am-icon-external-link:before {\n  content: \"\\F08E\"; }\n\n.am-icon-sign-in:before {\n  content: \"\\F090\"; }\n\n.am-icon-trophy:before {\n  content: \"\\F091\"; }\n\n.am-icon-github-square:before {\n  content: \"\\F092\"; }\n\n.am-icon-upload:before {\n  content: \"\\F093\"; }\n\n.am-icon-lemon-o:before {\n  content: \"\\F094\"; }\n\n.am-icon-phone:before {\n  content: \"\\F095\"; }\n\n.am-icon-square-o:before {\n  content: \"\\F096\"; }\n\n.am-icon-bookmark-o:before {\n  content: \"\\F097\"; }\n\n.am-icon-phone-square:before {\n  content: \"\\F098\"; }\n\n.am-icon-twitter:before {\n  content: \"\\F099\"; }\n\n.am-icon-facebook-f:before, .am-icon-facebook:before {\n  content: \"\\F09A\"; }\n\n.am-icon-github:before {\n  content: \"\\F09B\"; }\n\n.am-icon-unlock:before {\n  content: \"\\F09C\"; }\n\n.am-icon-credit-card:before {\n  content: \"\\F09D\"; }\n\n.am-icon-feed:before, .am-icon-rss:before {\n  content: \"\\F09E\"; }\n\n.am-icon-hdd-o:before {\n  content: \"\\F0A0\"; }\n\n.am-icon-bullhorn:before {\n  content: \"\\F0A1\"; }\n\n.am-icon-bell:before {\n  content: \"\\F0F3\"; }\n\n.am-icon-certificate:before {\n  content: \"\\F0A3\"; }\n\n.am-icon-hand-o-right:before {\n  content: \"\\F0A4\"; }\n\n.am-icon-hand-o-left:before {\n  content: \"\\F0A5\"; }\n\n.am-icon-hand-o-up:before {\n  content: \"\\F0A6\"; }\n\n.am-icon-hand-o-down:before {\n  content: \"\\F0A7\"; }\n\n.am-icon-arrow-circle-left:before {\n  content: \"\\F0A8\"; }\n\n.am-icon-arrow-circle-right:before {\n  content: \"\\F0A9\"; }\n\n.am-icon-arrow-circle-up:before {\n  content: \"\\F0AA\"; }\n\n.am-icon-arrow-circle-down:before {\n  content: \"\\F0AB\"; }\n\n.am-icon-globe:before {\n  content: \"\\F0AC\"; }\n\n.am-icon-wrench:before {\n  content: \"\\F0AD\"; }\n\n.am-icon-tasks:before {\n  content: \"\\F0AE\"; }\n\n.am-icon-filter:before {\n  content: \"\\F0B0\"; }\n\n.am-icon-briefcase:before {\n  content: \"\\F0B1\"; }\n\n.am-icon-arrows-alt:before {\n  content: \"\\F0B2\"; }\n\n.am-icon-group:before, .am-icon-users:before {\n  content: \"\\F0C0\"; }\n\n.am-icon-chain:before, .am-icon-link:before {\n  content: \"\\F0C1\"; }\n\n.am-icon-cloud:before {\n  content: \"\\F0C2\"; }\n\n.am-icon-flask:before {\n  content: \"\\F0C3\"; }\n\n.am-icon-cut:before, .am-icon-scissors:before {\n  content: \"\\F0C4\"; }\n\n.am-icon-copy:before, .am-icon-files-o:before {\n  content: \"\\F0C5\"; }\n\n.am-icon-paperclip:before {\n  content: \"\\F0C6\"; }\n\n.am-icon-floppy-o:before, .am-icon-save:before {\n  content: \"\\F0C7\"; }\n\n.am-icon-square:before {\n  content: \"\\F0C8\"; }\n\n.am-icon-bars:before, .am-icon-navicon:before, .am-icon-reorder:before {\n  content: \"\\F0C9\"; }\n\n.am-icon-list-ul:before {\n  content: \"\\F0CA\"; }\n\n.am-icon-list-ol:before {\n  content: \"\\F0CB\"; }\n\n.am-icon-strikethrough:before {\n  content: \"\\F0CC\"; }\n\n.am-icon-underline:before {\n  content: \"\\F0CD\"; }\n\n.am-icon-table:before {\n  content: \"\\F0CE\"; }\n\n.am-icon-magic:before {\n  content: \"\\F0D0\"; }\n\n.am-icon-truck:before {\n  content: \"\\F0D1\"; }\n\n.am-icon-pinterest:before {\n  content: \"\\F0D2\"; }\n\n.am-icon-pinterest-square:before {\n  content: \"\\F0D3\"; }\n\n.am-icon-google-plus-square:before {\n  content: \"\\F0D4\"; }\n\n.am-icon-google-plus:before {\n  content: \"\\F0D5\"; }\n\n.am-icon-money:before {\n  content: \"\\F0D6\"; }\n\n.am-icon-caret-down:before {\n  content: \"\\F0D7\"; }\n\n.am-icon-caret-up:before {\n  content: \"\\F0D8\"; }\n\n.am-icon-caret-left:before {\n  content: \"\\F0D9\"; }\n\n.am-icon-caret-right:before {\n  content: \"\\F0DA\"; }\n\n.am-icon-columns:before {\n  content: \"\\F0DB\"; }\n\n.am-icon-sort:before, .am-icon-unsorted:before {\n  content: \"\\F0DC\"; }\n\n.am-icon-sort-desc:before, .am-icon-sort-down:before {\n  content: \"\\F0DD\"; }\n\n.am-icon-sort-asc:before, .am-icon-sort-up:before {\n  content: \"\\F0DE\"; }\n\n.am-icon-envelope:before {\n  content: \"\\F0E0\"; }\n\n.am-icon-linkedin:before {\n  content: \"\\F0E1\"; }\n\n.am-icon-rotate-left:before, .am-icon-undo:before {\n  content: \"\\F0E2\"; }\n\n.am-icon-gavel:before, .am-icon-legal:before {\n  content: \"\\F0E3\"; }\n\n.am-icon-dashboard:before, .am-icon-tachometer:before {\n  content: \"\\F0E4\"; }\n\n.am-icon-comment-o:before {\n  content: \"\\F0E5\"; }\n\n.am-icon-comments-o:before {\n  content: \"\\F0E6\"; }\n\n.am-icon-bolt:before, .am-icon-flash:before {\n  content: \"\\F0E7\"; }\n\n.am-icon-sitemap:before {\n  content: \"\\F0E8\"; }\n\n.am-icon-umbrella:before {\n  content: \"\\F0E9\"; }\n\n.am-icon-clipboard:before, .am-icon-paste:before {\n  content: \"\\F0EA\"; }\n\n.am-icon-lightbulb-o:before {\n  content: \"\\F0EB\"; }\n\n.am-icon-exchange:before {\n  content: \"\\F0EC\"; }\n\n.am-icon-cloud-download:before {\n  content: \"\\F0ED\"; }\n\n.am-icon-cloud-upload:before {\n  content: \"\\F0EE\"; }\n\n.am-icon-user-md:before {\n  content: \"\\F0F0\"; }\n\n.am-icon-stethoscope:before {\n  content: \"\\F0F1\"; }\n\n.am-icon-suitcase:before {\n  content: \"\\F0F2\"; }\n\n.am-icon-bell-o:before {\n  content: \"\\F0A2\"; }\n\n.am-icon-coffee:before {\n  content: \"\\F0F4\"; }\n\n.am-icon-cutlery:before {\n  content: \"\\F0F5\"; }\n\n.am-icon-file-text-o:before {\n  content: \"\\F0F6\"; }\n\n.am-icon-building-o:before {\n  content: \"\\F0F7\"; }\n\n.am-icon-hospital-o:before {\n  content: \"\\F0F8\"; }\n\n.am-icon-ambulance:before {\n  content: \"\\F0F9\"; }\n\n.am-icon-medkit:before {\n  content: \"\\F0FA\"; }\n\n.am-icon-fighter-jet:before {\n  content: \"\\F0FB\"; }\n\n.am-icon-beer:before {\n  content: \"\\F0FC\"; }\n\n.am-icon-h-square:before {\n  content: \"\\F0FD\"; }\n\n.am-icon-plus-square:before {\n  content: \"\\F0FE\"; }\n\n.am-icon-angle-double-left:before {\n  content: \"\\F100\"; }\n\n.am-icon-angle-double-right:before {\n  content: \"\\F101\"; }\n\n.am-icon-angle-double-up:before {\n  content: \"\\F102\"; }\n\n.am-icon-angle-double-down:before {\n  content: \"\\F103\"; }\n\n.am-icon-angle-left:before {\n  content: \"\\F104\"; }\n\n.am-icon-angle-right:before {\n  content: \"\\F105\"; }\n\n.am-icon-angle-up:before {\n  content: \"\\F106\"; }\n\n.am-icon-angle-down:before {\n  content: \"\\F107\"; }\n\n.am-icon-desktop:before {\n  content: \"\\F108\"; }\n\n.am-icon-laptop:before {\n  content: \"\\F109\"; }\n\n.am-icon-tablet:before {\n  content: \"\\F10A\"; }\n\n.am-icon-mobile-phone:before, .am-icon-mobile:before {\n  content: \"\\F10B\"; }\n\n.am-icon-circle-o:before {\n  content: \"\\F10C\"; }\n\n.am-icon-quote-left:before {\n  content: \"\\F10D\"; }\n\n.am-icon-quote-right:before {\n  content: \"\\F10E\"; }\n\n.am-icon-spinner:before {\n  content: \"\\F110\"; }\n\n.am-icon-circle:before {\n  content: \"\\F111\"; }\n\n.am-icon-mail-reply:before, .am-icon-reply:before {\n  content: \"\\F112\"; }\n\n.am-icon-github-alt:before {\n  content: \"\\F113\"; }\n\n.am-icon-folder-o:before {\n  content: \"\\F114\"; }\n\n.am-icon-folder-open-o:before {\n  content: \"\\F115\"; }\n\n.am-icon-smile-o:before {\n  content: \"\\F118\"; }\n\n.am-icon-frown-o:before {\n  content: \"\\F119\"; }\n\n.am-icon-meh-o:before {\n  content: \"\\F11A\"; }\n\n.am-icon-gamepad:before {\n  content: \"\\F11B\"; }\n\n.am-icon-keyboard-o:before {\n  content: \"\\F11C\"; }\n\n.am-icon-flag-o:before {\n  content: \"\\F11D\"; }\n\n.am-icon-flag-checkered:before {\n  content: \"\\F11E\"; }\n\n.am-icon-terminal:before {\n  content: \"\\F120\"; }\n\n.am-icon-code:before {\n  content: \"\\F121\"; }\n\n.am-icon-mail-reply-all:before, .am-icon-reply-all:before {\n  content: \"\\F122\"; }\n\n.am-icon-star-half-empty:before, .am-icon-star-half-full:before, .am-icon-star-half-o:before {\n  content: \"\\F123\"; }\n\n.am-icon-location-arrow:before {\n  content: \"\\F124\"; }\n\n.am-icon-crop:before {\n  content: \"\\F125\"; }\n\n.am-icon-code-fork:before {\n  content: \"\\F126\"; }\n\n.am-icon-chain-broken:before, .am-icon-unlink:before {\n  content: \"\\F127\"; }\n\n.am-icon-question:before {\n  content: \"\\F128\"; }\n\n.am-icon-info:before {\n  content: \"\\F129\"; }\n\n.am-icon-exclamation:before {\n  content: \"\\F12A\"; }\n\n.am-icon-superscript:before {\n  content: \"\\F12B\"; }\n\n.am-icon-subscript:before {\n  content: \"\\F12C\"; }\n\n.am-icon-eraser:before {\n  content: \"\\F12D\"; }\n\n.am-icon-puzzle-piece:before {\n  content: \"\\F12E\"; }\n\n.am-icon-microphone:before {\n  content: \"\\F130\"; }\n\n.am-icon-microphone-slash:before {\n  content: \"\\F131\"; }\n\n.am-icon-shield:before {\n  content: \"\\F132\"; }\n\n.am-icon-calendar-o:before {\n  content: \"\\F133\"; }\n\n.am-icon-fire-extinguisher:before {\n  content: \"\\F134\"; }\n\n.am-icon-rocket:before {\n  content: \"\\F135\"; }\n\n.am-icon-maxcdn:before {\n  content: \"\\F136\"; }\n\n.am-icon-chevron-circle-left:before {\n  content: \"\\F137\"; }\n\n.am-icon-chevron-circle-right:before {\n  content: \"\\F138\"; }\n\n.am-icon-chevron-circle-up:before {\n  content: \"\\F139\"; }\n\n.am-icon-chevron-circle-down:before {\n  content: \"\\F13A\"; }\n\n.am-icon-html5:before {\n  content: \"\\F13B\"; }\n\n.am-icon-css3:before {\n  content: \"\\F13C\"; }\n\n.am-icon-anchor:before {\n  content: \"\\F13D\"; }\n\n.am-icon-unlock-alt:before {\n  content: \"\\F13E\"; }\n\n.am-icon-bullseye:before {\n  content: \"\\F140\"; }\n\n.am-icon-ellipsis-h:before {\n  content: \"\\F141\"; }\n\n.am-icon-ellipsis-v:before {\n  content: \"\\F142\"; }\n\n.am-icon-rss-square:before {\n  content: \"\\F143\"; }\n\n.am-icon-play-circle:before {\n  content: \"\\F144\"; }\n\n.am-icon-ticket:before {\n  content: \"\\F145\"; }\n\n.am-icon-minus-square:before {\n  content: \"\\F146\"; }\n\n.am-icon-minus-square-o:before {\n  content: \"\\F147\"; }\n\n.am-icon-level-up:before {\n  content: \"\\F148\"; }\n\n.am-icon-level-down:before {\n  content: \"\\F149\"; }\n\n.am-icon-check-square:before {\n  content: \"\\F14A\"; }\n\n.am-icon-pencil-square:before {\n  content: \"\\F14B\"; }\n\n.am-icon-external-link-square:before {\n  content: \"\\F14C\"; }\n\n.am-icon-share-square:before {\n  content: \"\\F14D\"; }\n\n.am-icon-compass:before {\n  content: \"\\F14E\"; }\n\n.am-icon-caret-square-o-down:before, .am-icon-toggle-down:before {\n  content: \"\\F150\"; }\n\n.am-icon-caret-square-o-up:before, .am-icon-toggle-up:before {\n  content: \"\\F151\"; }\n\n.am-icon-caret-square-o-right:before, .am-icon-toggle-right:before {\n  content: \"\\F152\"; }\n\n.am-icon-eur:before, .am-icon-euro:before {\n  content: \"\\F153\"; }\n\n.am-icon-gbp:before {\n  content: \"\\F154\"; }\n\n.am-icon-dollar:before, .am-icon-usd:before {\n  content: \"\\F155\"; }\n\n.am-icon-inr:before, .am-icon-rupee:before {\n  content: \"\\F156\"; }\n\n.am-icon-cny:before, .am-icon-jpy:before, .am-icon-rmb:before, .am-icon-yen:before {\n  content: \"\\F157\"; }\n\n.am-icon-rouble:before, .am-icon-rub:before, .am-icon-ruble:before {\n  content: \"\\F158\"; }\n\n.am-icon-krw:before, .am-icon-won:before {\n  content: \"\\F159\"; }\n\n.am-icon-bitcoin:before, .am-icon-btc:before {\n  content: \"\\F15A\"; }\n\n.am-icon-file:before {\n  content: \"\\F15B\"; }\n\n.am-icon-file-text:before {\n  content: \"\\F15C\"; }\n\n.am-icon-sort-alpha-asc:before {\n  content: \"\\F15D\"; }\n\n.am-icon-sort-alpha-desc:before {\n  content: \"\\F15E\"; }\n\n.am-icon-sort-amount-asc:before {\n  content: \"\\F160\"; }\n\n.am-icon-sort-amount-desc:before {\n  content: \"\\F161\"; }\n\n.am-icon-sort-numeric-asc:before {\n  content: \"\\F162\"; }\n\n.am-icon-sort-numeric-desc:before {\n  content: \"\\F163\"; }\n\n.am-icon-thumbs-up:before {\n  content: \"\\F164\"; }\n\n.am-icon-thumbs-down:before {\n  content: \"\\F165\"; }\n\n.am-icon-youtube-square:before {\n  content: \"\\F166\"; }\n\n.am-icon-youtube:before {\n  content: \"\\F167\"; }\n\n.am-icon-xing:before {\n  content: \"\\F168\"; }\n\n.am-icon-xing-square:before {\n  content: \"\\F169\"; }\n\n.am-icon-youtube-play:before {\n  content: \"\\F16A\"; }\n\n.am-icon-dropbox:before {\n  content: \"\\F16B\"; }\n\n.am-icon-stack-overflow:before {\n  content: \"\\F16C\"; }\n\n.am-icon-instagram:before {\n  content: \"\\F16D\"; }\n\n.am-icon-flickr:before {\n  content: \"\\F16E\"; }\n\n.am-icon-adn:before {\n  content: \"\\F170\"; }\n\n.am-icon-bitbucket:before {\n  content: \"\\F171\"; }\n\n.am-icon-bitbucket-square:before {\n  content: \"\\F172\"; }\n\n.am-icon-tumblr:before {\n  content: \"\\F173\"; }\n\n.am-icon-tumblr-square:before {\n  content: \"\\F174\"; }\n\n.am-icon-long-arrow-down:before {\n  content: \"\\F175\"; }\n\n.am-icon-long-arrow-up:before {\n  content: \"\\F176\"; }\n\n.am-icon-long-arrow-left:before {\n  content: \"\\F177\"; }\n\n.am-icon-long-arrow-right:before {\n  content: \"\\F178\"; }\n\n.am-icon-apple:before {\n  content: \"\\F179\"; }\n\n.am-icon-windows:before {\n  content: \"\\F17A\"; }\n\n.am-icon-android:before {\n  content: \"\\F17B\"; }\n\n.am-icon-linux:before {\n  content: \"\\F17C\"; }\n\n.am-icon-dribbble:before {\n  content: \"\\F17D\"; }\n\n.am-icon-skype:before {\n  content: \"\\F17E\"; }\n\n.am-icon-foursquare:before {\n  content: \"\\F180\"; }\n\n.am-icon-trello:before {\n  content: \"\\F181\"; }\n\n.am-icon-female:before {\n  content: \"\\F182\"; }\n\n.am-icon-male:before {\n  content: \"\\F183\"; }\n\n.am-icon-gittip:before, .am-icon-gratipay:before {\n  content: \"\\F184\"; }\n\n.am-icon-sun-o:before {\n  content: \"\\F185\"; }\n\n.am-icon-moon-o:before {\n  content: \"\\F186\"; }\n\n.am-icon-archive:before {\n  content: \"\\F187\"; }\n\n.am-icon-bug:before {\n  content: \"\\F188\"; }\n\n.am-icon-vk:before {\n  content: \"\\F189\"; }\n\n.am-icon-weibo:before {\n  content: \"\\F18A\"; }\n\n.am-icon-renren:before {\n  content: \"\\F18B\"; }\n\n.am-icon-pagelines:before {\n  content: \"\\F18C\"; }\n\n.am-icon-stack-exchange:before {\n  content: \"\\F18D\"; }\n\n.am-icon-arrow-circle-o-right:before {\n  content: \"\\F18E\"; }\n\n.am-icon-arrow-circle-o-left:before {\n  content: \"\\F190\"; }\n\n.am-icon-caret-square-o-left:before, .am-icon-toggle-left:before {\n  content: \"\\F191\"; }\n\n.am-icon-dot-circle-o:before {\n  content: \"\\F192\"; }\n\n.am-icon-wheelchair:before {\n  content: \"\\F193\"; }\n\n.am-icon-vimeo-square:before {\n  content: \"\\F194\"; }\n\n.am-icon-try:before, .am-icon-turkish-lira:before {\n  content: \"\\F195\"; }\n\n.am-icon-plus-square-o:before {\n  content: \"\\F196\"; }\n\n.am-icon-space-shuttle:before {\n  content: \"\\F197\"; }\n\n.am-icon-slack:before {\n  content: \"\\F198\"; }\n\n.am-icon-envelope-square:before {\n  content: \"\\F199\"; }\n\n.am-icon-wordpress:before {\n  content: \"\\F19A\"; }\n\n.am-icon-openid:before {\n  content: \"\\F19B\"; }\n\n.am-icon-bank:before, .am-icon-institution:before, .am-icon-university:before {\n  content: \"\\F19C\"; }\n\n.am-icon-graduation-cap:before, .am-icon-mortar-board:before {\n  content: \"\\F19D\"; }\n\n.am-icon-yahoo:before {\n  content: \"\\F19E\"; }\n\n.am-icon-google:before {\n  content: \"\\F1A0\"; }\n\n.am-icon-reddit:before {\n  content: \"\\F1A1\"; }\n\n.am-icon-reddit-square:before {\n  content: \"\\F1A2\"; }\n\n.am-icon-stumbleupon-circle:before {\n  content: \"\\F1A3\"; }\n\n.am-icon-stumbleupon:before {\n  content: \"\\F1A4\"; }\n\n.am-icon-delicious:before {\n  content: \"\\F1A5\"; }\n\n.am-icon-digg:before {\n  content: \"\\F1A6\"; }\n\n.am-icon-pied-piper:before {\n  content: \"\\F1A7\"; }\n\n.am-icon-pied-piper-alt:before {\n  content: \"\\F1A8\"; }\n\n.am-icon-drupal:before {\n  content: \"\\F1A9\"; }\n\n.am-icon-joomla:before {\n  content: \"\\F1AA\"; }\n\n.am-icon-language:before {\n  content: \"\\F1AB\"; }\n\n.am-icon-fax:before {\n  content: \"\\F1AC\"; }\n\n.am-icon-building:before {\n  content: \"\\F1AD\"; }\n\n.am-icon-child:before {\n  content: \"\\F1AE\"; }\n\n.am-icon-paw:before {\n  content: \"\\F1B0\"; }\n\n.am-icon-spoon:before {\n  content: \"\\F1B1\"; }\n\n.am-icon-cube:before {\n  content: \"\\F1B2\"; }\n\n.am-icon-cubes:before {\n  content: \"\\F1B3\"; }\n\n.am-icon-behance:before {\n  content: \"\\F1B4\"; }\n\n.am-icon-behance-square:before {\n  content: \"\\F1B5\"; }\n\n.am-icon-steam:before {\n  content: \"\\F1B6\"; }\n\n.am-icon-steam-square:before {\n  content: \"\\F1B7\"; }\n\n.am-icon-recycle:before {\n  content: \"\\F1B8\"; }\n\n.am-icon-automobile:before, .am-icon-car:before {\n  content: \"\\F1B9\"; }\n\n.am-icon-cab:before, .am-icon-taxi:before {\n  content: \"\\F1BA\"; }\n\n.am-icon-tree:before {\n  content: \"\\F1BB\"; }\n\n.am-icon-spotify:before {\n  content: \"\\F1BC\"; }\n\n.am-icon-deviantart:before {\n  content: \"\\F1BD\"; }\n\n.am-icon-soundcloud:before {\n  content: \"\\F1BE\"; }\n\n.am-icon-database:before {\n  content: \"\\F1C0\"; }\n\n.am-icon-file-pdf-o:before {\n  content: \"\\F1C1\"; }\n\n.am-icon-file-word-o:before {\n  content: \"\\F1C2\"; }\n\n.am-icon-file-excel-o:before {\n  content: \"\\F1C3\"; }\n\n.am-icon-file-powerpoint-o:before {\n  content: \"\\F1C4\"; }\n\n.am-icon-file-image-o:before, .am-icon-file-photo-o:before, .am-icon-file-picture-o:before {\n  content: \"\\F1C5\"; }\n\n.am-icon-file-archive-o:before, .am-icon-file-zip-o:before {\n  content: \"\\F1C6\"; }\n\n.am-icon-file-audio-o:before, .am-icon-file-sound-o:before {\n  content: \"\\F1C7\"; }\n\n.am-icon-file-movie-o:before, .am-icon-file-video-o:before {\n  content: \"\\F1C8\"; }\n\n.am-icon-file-code-o:before {\n  content: \"\\F1C9\"; }\n\n.am-icon-vine:before {\n  content: \"\\F1CA\"; }\n\n.am-icon-codepen:before {\n  content: \"\\F1CB\"; }\n\n.am-icon-jsfiddle:before {\n  content: \"\\F1CC\"; }\n\n.am-icon-life-bouy:before, .am-icon-life-buoy:before, .am-icon-life-ring:before, .am-icon-life-saver:before, .am-icon-support:before {\n  content: \"\\F1CD\"; }\n\n.am-icon-circle-o-notch:before {\n  content: \"\\F1CE\"; }\n\n.am-icon-ra:before, .am-icon-rebel:before {\n  content: \"\\F1D0\"; }\n\n.am-icon-empire:before, .am-icon-ge:before {\n  content: \"\\F1D1\"; }\n\n.am-icon-git-square:before {\n  content: \"\\F1D2\"; }\n\n.am-icon-git:before {\n  content: \"\\F1D3\"; }\n\n.am-icon-hacker-news:before, .am-icon-y-combinator-square:before, .am-icon-yc-square:before {\n  content: \"\\F1D4\"; }\n\n.am-icon-tencent-weibo:before {\n  content: \"\\F1D5\"; }\n\n.am-icon-qq:before {\n  content: \"\\F1D6\"; }\n\n.am-icon-wechat:before, .am-icon-weixin:before {\n  content: \"\\F1D7\"; }\n\n.am-icon-paper-plane:before, .am-icon-send:before {\n  content: \"\\F1D8\"; }\n\n.am-icon-paper-plane-o:before, .am-icon-send-o:before {\n  content: \"\\F1D9\"; }\n\n.am-icon-history:before {\n  content: \"\\F1DA\"; }\n\n.am-icon-circle-thin:before {\n  content: \"\\F1DB\"; }\n\n.am-icon-header:before {\n  content: \"\\F1DC\"; }\n\n.am-icon-paragraph:before {\n  content: \"\\F1DD\"; }\n\n.am-icon-sliders:before {\n  content: \"\\F1DE\"; }\n\n.am-icon-share-alt:before {\n  content: \"\\F1E0\"; }\n\n.am-icon-share-alt-square:before {\n  content: \"\\F1E1\"; }\n\n.am-icon-bomb:before {\n  content: \"\\F1E2\"; }\n\n.am-icon-futbol-o:before, .am-icon-soccer-ball-o:before {\n  content: \"\\F1E3\"; }\n\n.am-icon-tty:before {\n  content: \"\\F1E4\"; }\n\n.am-icon-binoculars:before {\n  content: \"\\F1E5\"; }\n\n.am-icon-plug:before {\n  content: \"\\F1E6\"; }\n\n.am-icon-slideshare:before {\n  content: \"\\F1E7\"; }\n\n.am-icon-twitch:before {\n  content: \"\\F1E8\"; }\n\n.am-icon-yelp:before {\n  content: \"\\F1E9\"; }\n\n.am-icon-newspaper-o:before {\n  content: \"\\F1EA\"; }\n\n.am-icon-wifi:before {\n  content: \"\\F1EB\"; }\n\n.am-icon-calculator:before {\n  content: \"\\F1EC\"; }\n\n.am-icon-paypal:before {\n  content: \"\\F1ED\"; }\n\n.am-icon-google-wallet:before {\n  content: \"\\F1EE\"; }\n\n.am-icon-cc-visa:before {\n  content: \"\\F1F0\"; }\n\n.am-icon-cc-mastercard:before {\n  content: \"\\F1F1\"; }\n\n.am-icon-cc-discover:before {\n  content: \"\\F1F2\"; }\n\n.am-icon-cc-amex:before {\n  content: \"\\F1F3\"; }\n\n.am-icon-cc-paypal:before {\n  content: \"\\F1F4\"; }\n\n.am-icon-cc-stripe:before {\n  content: \"\\F1F5\"; }\n\n.am-icon-bell-slash:before {\n  content: \"\\F1F6\"; }\n\n.am-icon-bell-slash-o:before {\n  content: \"\\F1F7\"; }\n\n.am-icon-trash:before {\n  content: \"\\F1F8\"; }\n\n.am-icon-copyright:before {\n  content: \"\\F1F9\"; }\n\n.am-icon-at:before {\n  content: \"\\F1FA\"; }\n\n.am-icon-eyedropper:before {\n  content: \"\\F1FB\"; }\n\n.am-icon-paint-brush:before {\n  content: \"\\F1FC\"; }\n\n.am-icon-birthday-cake:before {\n  content: \"\\F1FD\"; }\n\n.am-icon-area-chart:before {\n  content: \"\\F1FE\"; }\n\n.am-icon-pie-chart:before {\n  content: \"\\F200\"; }\n\n.am-icon-line-chart:before {\n  content: \"\\F201\"; }\n\n.am-icon-lastfm:before {\n  content: \"\\F202\"; }\n\n.am-icon-lastfm-square:before {\n  content: \"\\F203\"; }\n\n.am-icon-toggle-off:before {\n  content: \"\\F204\"; }\n\n.am-icon-toggle-on:before {\n  content: \"\\F205\"; }\n\n.am-icon-bicycle:before {\n  content: \"\\F206\"; }\n\n.am-icon-bus:before {\n  content: \"\\F207\"; }\n\n.am-icon-ioxhost:before {\n  content: \"\\F208\"; }\n\n.am-icon-angellist:before {\n  content: \"\\F209\"; }\n\n.am-icon-cc:before {\n  content: \"\\F20A\"; }\n\n.am-icon-ils:before, .am-icon-shekel:before, .am-icon-sheqel:before {\n  content: \"\\F20B\"; }\n\n.am-icon-meanpath:before {\n  content: \"\\F20C\"; }\n\n.am-icon-buysellads:before {\n  content: \"\\F20D\"; }\n\n.am-icon-connectdevelop:before {\n  content: \"\\F20E\"; }\n\n.am-icon-dashcube:before {\n  content: \"\\F210\"; }\n\n.am-icon-forumbee:before {\n  content: \"\\F211\"; }\n\n.am-icon-leanpub:before {\n  content: \"\\F212\"; }\n\n.am-icon-sellsy:before {\n  content: \"\\F213\"; }\n\n.am-icon-shirtsinbulk:before {\n  content: \"\\F214\"; }\n\n.am-icon-simplybuilt:before {\n  content: \"\\F215\"; }\n\n.am-icon-skyatlas:before {\n  content: \"\\F216\"; }\n\n.am-icon-cart-plus:before {\n  content: \"\\F217\"; }\n\n.am-icon-cart-arrow-down:before {\n  content: \"\\F218\"; }\n\n.am-icon-diamond:before {\n  content: \"\\F219\"; }\n\n.am-icon-ship:before {\n  content: \"\\F21A\"; }\n\n.am-icon-user-secret:before {\n  content: \"\\F21B\"; }\n\n.am-icon-motorcycle:before {\n  content: \"\\F21C\"; }\n\n.am-icon-street-view:before {\n  content: \"\\F21D\"; }\n\n.am-icon-heartbeat:before {\n  content: \"\\F21E\"; }\n\n.am-icon-venus:before {\n  content: \"\\F221\"; }\n\n.am-icon-mars:before {\n  content: \"\\F222\"; }\n\n.am-icon-mercury:before {\n  content: \"\\F223\"; }\n\n.am-icon-intersex:before, .am-icon-transgender:before {\n  content: \"\\F224\"; }\n\n.am-icon-transgender-alt:before {\n  content: \"\\F225\"; }\n\n.am-icon-venus-double:before {\n  content: \"\\F226\"; }\n\n.am-icon-mars-double:before {\n  content: \"\\F227\"; }\n\n.am-icon-venus-mars:before {\n  content: \"\\F228\"; }\n\n.am-icon-mars-stroke:before {\n  content: \"\\F229\"; }\n\n.am-icon-mars-stroke-v:before {\n  content: \"\\F22A\"; }\n\n.am-icon-mars-stroke-h:before {\n  content: \"\\F22B\"; }\n\n.am-icon-neuter:before {\n  content: \"\\F22C\"; }\n\n.am-icon-genderless:before {\n  content: \"\\F22D\"; }\n\n.am-icon-facebook-official:before {\n  content: \"\\F230\"; }\n\n.am-icon-pinterest-p:before {\n  content: \"\\F231\"; }\n\n.am-icon-whatsapp:before {\n  content: \"\\F232\"; }\n\n.am-icon-server:before {\n  content: \"\\F233\"; }\n\n.am-icon-user-plus:before {\n  content: \"\\F234\"; }\n\n.am-icon-user-times:before {\n  content: \"\\F235\"; }\n\n.am-icon-bed:before, .am-icon-hotel:before {\n  content: \"\\F236\"; }\n\n.am-icon-viacoin:before {\n  content: \"\\F237\"; }\n\n.am-icon-train:before {\n  content: \"\\F238\"; }\n\n.am-icon-subway:before {\n  content: \"\\F239\"; }\n\n.am-icon-medium:before {\n  content: \"\\F23A\"; }\n\n.am-icon-y-combinator:before, .am-icon-yc:before {\n  content: \"\\F23B\"; }\n\n.am-icon-optin-monster:before {\n  content: \"\\F23C\"; }\n\n.am-icon-opencart:before {\n  content: \"\\F23D\"; }\n\n.am-icon-expeditedssl:before {\n  content: \"\\F23E\"; }\n\n.am-icon-battery-4:before, .am-icon-battery-full:before {\n  content: \"\\F240\"; }\n\n.am-icon-battery-3:before, .am-icon-battery-three-quarters:before {\n  content: \"\\F241\"; }\n\n.am-icon-battery-2:before, .am-icon-battery-half:before {\n  content: \"\\F242\"; }\n\n.am-icon-battery-1:before, .am-icon-battery-quarter:before {\n  content: \"\\F243\"; }\n\n.am-icon-battery-0:before, .am-icon-battery-empty:before {\n  content: \"\\F244\"; }\n\n.am-icon-mouse-pointer:before {\n  content: \"\\F245\"; }\n\n.am-icon-i-cursor:before {\n  content: \"\\F246\"; }\n\n.am-icon-object-group:before {\n  content: \"\\F247\"; }\n\n.am-icon-object-ungroup:before {\n  content: \"\\F248\"; }\n\n.am-icon-sticky-note:before {\n  content: \"\\F249\"; }\n\n.am-icon-sticky-note-o:before {\n  content: \"\\F24A\"; }\n\n.am-icon-cc-jcb:before {\n  content: \"\\F24B\"; }\n\n.am-icon-cc-diners-club:before {\n  content: \"\\F24C\"; }\n\n.am-icon-clone:before {\n  content: \"\\F24D\"; }\n\n.am-icon-balance-scale:before {\n  content: \"\\F24E\"; }\n\n.am-icon-hourglass-o:before {\n  content: \"\\F250\"; }\n\n.am-icon-hourglass-1:before, .am-icon-hourglass-start:before {\n  content: \"\\F251\"; }\n\n.am-icon-hourglass-2:before, .am-icon-hourglass-half:before {\n  content: \"\\F252\"; }\n\n.am-icon-hourglass-3:before, .am-icon-hourglass-end:before {\n  content: \"\\F253\"; }\n\n.am-icon-hourglass:before {\n  content: \"\\F254\"; }\n\n.am-icon-hand-grab-o:before, .am-icon-hand-rock-o:before {\n  content: \"\\F255\"; }\n\n.am-icon-hand-paper-o:before, .am-icon-hand-stop-o:before {\n  content: \"\\F256\"; }\n\n.am-icon-hand-scissors-o:before {\n  content: \"\\F257\"; }\n\n.am-icon-hand-lizard-o:before {\n  content: \"\\F258\"; }\n\n.am-icon-hand-spock-o:before {\n  content: \"\\F259\"; }\n\n.am-icon-hand-pointer-o:before {\n  content: \"\\F25A\"; }\n\n.am-icon-hand-peace-o:before {\n  content: \"\\F25B\"; }\n\n.am-icon-trademark:before {\n  content: \"\\F25C\"; }\n\n.am-icon-registered:before {\n  content: \"\\F25D\"; }\n\n.am-icon-creative-commons:before {\n  content: \"\\F25E\"; }\n\n.am-icon-gg:before {\n  content: \"\\F260\"; }\n\n.am-icon-gg-circle:before {\n  content: \"\\F261\"; }\n\n.am-icon-tripadvisor:before {\n  content: \"\\F262\"; }\n\n.am-icon-odnoklassniki:before {\n  content: \"\\F263\"; }\n\n.am-icon-odnoklassniki-square:before {\n  content: \"\\F264\"; }\n\n.am-icon-get-pocket:before {\n  content: \"\\F265\"; }\n\n.am-icon-wikipedia-w:before {\n  content: \"\\F266\"; }\n\n.am-icon-safari:before {\n  content: \"\\F267\"; }\n\n.am-icon-chrome:before {\n  content: \"\\F268\"; }\n\n.am-icon-firefox:before {\n  content: \"\\F269\"; }\n\n.am-icon-opera:before {\n  content: \"\\F26A\"; }\n\n.am-icon-internet-explorer:before {\n  content: \"\\F26B\"; }\n\n.am-icon-television:before, .am-icon-tv:before {\n  content: \"\\F26C\"; }\n\n.am-icon-contao:before {\n  content: \"\\F26D\"; }\n\n.am-icon-500px:before {\n  content: \"\\F26E\"; }\n\n.am-icon-amazon:before {\n  content: \"\\F270\"; }\n\n.am-icon-calendar-plus-o:before {\n  content: \"\\F271\"; }\n\n.am-icon-calendar-minus-o:before {\n  content: \"\\F272\"; }\n\n.am-icon-calendar-times-o:before {\n  content: \"\\F273\"; }\n\n.am-icon-calendar-check-o:before {\n  content: \"\\F274\"; }\n\n.am-icon-industry:before {\n  content: \"\\F275\"; }\n\n.am-icon-map-pin:before {\n  content: \"\\F276\"; }\n\n.am-icon-map-signs:before {\n  content: \"\\F277\"; }\n\n.am-icon-map-o:before {\n  content: \"\\F278\"; }\n\n.am-icon-map:before {\n  content: \"\\F279\"; }\n\n.am-icon-commenting:before {\n  content: \"\\F27A\"; }\n\n.am-icon-commenting-o:before {\n  content: \"\\F27B\"; }\n\n.am-icon-houzz:before {\n  content: \"\\F27C\"; }\n\n.am-icon-vimeo:before {\n  content: \"\\F27D\"; }\n\n.am-icon-black-tie:before {\n  content: \"\\F27E\"; }\n\n.am-icon-fonticons:before {\n  content: \"\\F280\"; }\n\n.am-icon-reddit-alien:before {\n  content: \"\\F281\"; }\n\n.am-icon-edge:before {\n  content: \"\\F282\"; }\n\n.am-icon-credit-card-alt:before {\n  content: \"\\F283\"; }\n\n.am-icon-codiepie:before {\n  content: \"\\F284\"; }\n\n.am-icon-modx:before {\n  content: \"\\F285\"; }\n\n.am-icon-fort-awesome:before {\n  content: \"\\F286\"; }\n\n.am-icon-usb:before {\n  content: \"\\F287\"; }\n\n.am-icon-product-hunt:before {\n  content: \"\\F288\"; }\n\n.am-icon-mixcloud:before {\n  content: \"\\F289\"; }\n\n.am-icon-scribd:before {\n  content: \"\\F28A\"; }\n\n.am-icon-pause-circle:before {\n  content: \"\\F28B\"; }\n\n.am-icon-pause-circle-o:before {\n  content: \"\\F28C\"; }\n\n.am-icon-stop-circle:before {\n  content: \"\\F28D\"; }\n\n.am-icon-stop-circle-o:before {\n  content: \"\\F28E\"; }\n\n.am-icon-shopping-bag:before {\n  content: \"\\F290\"; }\n\n.am-icon-shopping-basket:before {\n  content: \"\\F291\"; }\n\n.am-icon-hashtag:before {\n  content: \"\\F292\"; }\n\n.am-icon-bluetooth:before {\n  content: \"\\F293\"; }\n\n.am-icon-bluetooth-b:before {\n  content: \"\\F294\"; }\n\n.am-icon-percent:before {\n  content: \"\\F295\"; }\n\n@-webkit-keyframes icon-spin {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes icon-spin {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.am-icon-spin {\n  -webkit-animation: icon-spin 2s infinite linear;\n  animation: icon-spin 2s infinite linear; }\n\n.am-icon-pulse {\n  -webkit-animation: icon-spin 1s infinite steps(8);\n  animation: icon-spin 1s infinite steps(8); }\n\n.am-icon-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n\n.am-input-group-btn:last-child > .am-btn, .am-input-group-btn:last-child > .am-btn-group, .am-input-group-btn > .am-btn + .am-btn {\n  margin-left: -1px; }\n\n.am-icon-ul > li {\n  position: relative; }\n\n.am-icon-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: .14285714em; }\n\n.am-input-group {\n  position: relative;\n  display: table; }\n\n.am-input-group .am-form-field {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0; }\n\n.am-input-group .am-form-field, .am-input-group-btn, .am-input-group-label {\n  display: table-cell; }\n\n.am-input-group .am-form-field:not(:first-child):not(:last-child), .am-input-group-btn:not(:first-child):not(:last-child), .am-input-group-label:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.am-input-group-btn, .am-input-group-label {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.am-input-group-label {\n  height: 38px;\n  padding: 0 1em;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 36px;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 0; }\n\n.am-input-group .am-form-field:first-child, .am-input-group-btn:first-child > .am-btn, .am-input-group-btn:first-child > .am-btn-group > .am-btn, .am-input-group-btn:first-child > .am-dropdown-toggle, .am-input-group-btn:last-child > .am-btn-group:not(:last-child) > .am-btn, .am-input-group-btn:last-child > .am-btn:not(:last-child):not(.dropdown-toggle), .am-input-group-label:first-child {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.am-input-group-label:first-child {\n  border-right: 0; }\n\n.am-input-group .am-form-field:last-child, .am-input-group-btn:first-child > .am-btn-group:not(:first-child) > .am-btn, .am-input-group-btn:first-child > .am-btn:not(:first-child), .am-input-group-btn:last-child > .am-btn, .am-input-group-btn:last-child > .am-btn-group > .am-btn, .am-input-group-btn:last-child > .am-dropdown-toggle, .am-input-group-label:last-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-input-group-label:last-child {\n  border-left: 0; }\n\n.am-input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n\n.am-input-group-btn > .am-btn {\n  position: relative;\n  border-color: #ccc; }\n\n.am-input-group-btn > .am-btn:active, .am-input-group-btn > .am-btn:focus, .am-input-group-btn > .am-btn:hover {\n  z-index: 2; }\n\n.am-input-group-btn:first-child > .am-btn, .am-input-group-btn:first-child > .am-btn-group {\n  margin-right: -2px; }\n\n.am-input-group .am-form-field, .am-input-group-btn > .am-btn {\n  height: 38px;\n  padding-bottom: auto; }\n\n.am-input-group-lg > .am-form-field, .am-input-group-lg > .am-input-group-btn > .am-btn, .am-input-group-lg > .am-input-group-label {\n  height: 42px;\n  font-size: 1.8rem !important; }\n\n.am-input-group-lg > .am-input-group-label {\n  line-height: 40px; }\n\n.am-input-group-sm > .am-form-field, .am-input-group-sm > .am-input-group-btn > .am-btn, .am-input-group-sm > .am-input-group-label {\n  height: 33px;\n  font-size: 1.4rem !important; }\n\n.am-input-group-sm > .am-input-group-label {\n  line-height: 31px; }\n\n.am-input-group-primary .am-input-group-label {\n  background: #0e90d2;\n  color: #fff; }\n\n.am-input-group-primary .am-input-group-btn > .am-btn, .am-input-group-primary .am-input-group-label, .am-input-group-primary.am-input-group .am-form-field {\n  border-color: #0e90d2; }\n\n.am-input-group-secondary .am-input-group-label {\n  background: #3bb4f2;\n  color: #fff; }\n\n.am-input-group-secondary .am-input-group-btn > .am-btn, .am-input-group-secondary .am-input-group-label, .am-input-group-secondary.am-input-group .am-form-field {\n  border-color: #3bb4f2; }\n\n.am-input-group-success .am-input-group-label {\n  background: #5eb95e;\n  color: #fff; }\n\n.am-input-group-success .am-input-group-btn > .am-btn, .am-input-group-success .am-input-group-label, .am-input-group-success.am-input-group .am-form-field {\n  border-color: #5eb95e; }\n\n.am-input-group-warning .am-input-group-label {\n  background: #F37B1D;\n  color: #fff; }\n\n.am-input-group-warning .am-input-group-btn > .am-btn, .am-input-group-warning .am-input-group-label, .am-input-group-warning.am-input-group .am-form-field {\n  border-color: #F37B1D; }\n\n.am-input-group-danger .am-input-group-label {\n  background: #dd514c;\n  color: #fff; }\n\n.am-input-group-danger .am-input-group-btn > .am-btn, .am-input-group-danger .am-input-group-label, .am-input-group-danger.am-input-group .am-form-field {\n  border-color: #dd514c; }\n\n.am-list {\n  padding-left: 0; }\n\n.am-list > li {\n  position: relative;\n  display: block;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #dedede;\n  border-width: 1px 0; }\n\n.am-angle, .am-sr-only {\n  position: absolute; }\n\n.am-list > li > a {\n  display: block;\n  padding: 1rem 0; }\n\n.am-list > li > a.am-active, .am-list > li > a.am-active:focus, .am-list > li > a.am-active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #0e90d2; }\n\n.am-list > li > a.am-active .am-list-item-heading, .am-list > li > a.am-active:focus .am-list-item-heading, .am-list > li > a.am-active:hover .am-list-item-heading {\n  color: inherit; }\n\n.am-list > li > a.am-active .am-list-item-text, .am-list > li > a.am-active:focus .am-list-item-text, .am-list > li > a.am-active:hover .am-list-item-text {\n  color: #b2e2fa; }\n\n.am-list > li > .am-badge {\n  float: right; }\n\n.am-list > li > .am-badge + .am-badge {\n  margin-right: 5px; }\n\n.am-list-static > li {\n  padding: .8rem .2rem; }\n\n.am-list-border > li > a, .am-list-bordered > li > a, .am-list-static.am-list-border > li {\n  padding: 1rem; }\n\n.am-list-border > li, .am-list-bordered > li {\n  border-width: 1px; }\n\n.am-list-border > li:first-child, .am-list-border > li:first-child > a, .am-list-bordered > li:first-child, .am-list-bordered > li:first-child > a {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-list-border > li:last-child, .am-list-border > li:last-child > a, .am-list-bordered > li:last-child, .am-list-bordered > li:last-child > a {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.am-list-border > li > a:focus, .am-list-border > li > a:hover, .am-list-bordered > li > a:focus, .am-list-bordered > li > a:hover {\n  background-color: #f5f5f5; }\n\n.am-list-striped > li:nth-of-type(even) {\n  background: #f5f5f5; }\n\n.am-progress-striped .am-progress-bar, .am-progress-striped .am-progress-bar-secondary {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.am-list-item-text {\n  line-height: 1.4;\n  font-size: 1.3rem;\n  color: #999;\n  margin: 0; }\n\n.am-panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.am-panel-hd, .am-panel > .am-table:first-child > tbody:first-child > tr:first-child td:first-child, .am-panel > .am-table:first-child > tbody:first-child > tr:first-child th:first-child, .am-panel > .am-table:first-child > thead:first-child > tr:first-child td:first-child, .am-panel > .am-table:first-child > thead:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 0; }\n\n.am-panel-hd, .am-panel > .am-table:first-child > tbody:first-child > tr:first-child td:last-child, .am-panel > .am-table:first-child > tbody:first-child > tr:first-child th:last-child, .am-panel > .am-table:first-child > thead:first-child > tr:first-child td:last-child, .am-panel > .am-table:first-child > thead:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 0; }\n\n.am-panel-footer, .am-panel > .am-table:last-child > tbody:last-child > tr:last-child td:first-child, .am-panel > .am-table:last-child > tbody:last-child > tr:last-child th:first-child, .am-panel > .am-table:last-child > tfoot:last-child > tr:last-child td:first-child, .am-panel > .am-table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 0; }\n\n.am-panel-footer, .am-panel > .am-table:last-child > tbody:last-child > tr:last-child td:last-child, .am-panel > .am-table:last-child > tbody:last-child > tr:last-child th:last-child, .am-panel > .am-table:last-child > tfoot:last-child > tr:last-child td:last-child, .am-panel > .am-table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 0; }\n\n.am-panel-hd {\n  padding: .6rem 1.25rem;\n  border-bottom: 1px solid transparent; }\n\n.am-panel-bd {\n  padding: 1.25rem; }\n\n.am-panel-title {\n  margin: 0;\n  font-size: 100%;\n  color: inherit; }\n\n.am-panel-title > a {\n  color: inherit; }\n\n.am-panel-footer {\n  padding: .6rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd; }\n\n.am-panel-default {\n  border-color: #ddd; }\n\n.am-panel-default > .am-panel-hd {\n  color: #444;\n  background-color: #f5f5f5;\n  border-color: #ddd; }\n\n.am-panel-default > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #ddd; }\n\n.am-panel-default > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #ddd; }\n\n.am-panel-primary {\n  border-color: #10a0ea; }\n\n.am-panel-primary > .am-panel-hd {\n  color: #fff;\n  background-color: #0e90d2;\n  border-color: #10a0ea; }\n\n.am-panel-primary > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #10a0ea; }\n\n.am-panel-primary > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #10a0ea; }\n\n.am-panel-secondary {\n  border-color: #caebfb; }\n\n.am-panel-secondary > .am-panel-hd {\n  color: #14a6ef;\n  background-color: rgba(59, 180, 242, 0.15);\n  border-color: #caebfb; }\n\n.am-panel-secondary > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #caebfb; }\n\n.am-panel-secondary > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #caebfb; }\n\n.am-panel-success {\n  border-color: #c9e7c9; }\n\n.am-panel-success > .am-panel-hd {\n  color: #5eb95e;\n  background-color: rgba(94, 185, 94, 0.15);\n  border-color: #c9e7c9; }\n\n.am-panel-success > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #c9e7c9; }\n\n.am-panel-success > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #c9e7c9; }\n\n.am-panel-warning {\n  border-color: #fbd0ae; }\n\n.am-panel-warning > .am-panel-hd {\n  color: #F37B1D;\n  background-color: rgba(243, 123, 29, 0.15);\n  border-color: #fbd0ae; }\n\n.am-panel-warning > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #fbd0ae; }\n\n.am-panel-warning > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #fbd0ae; }\n\n.am-panel-danger {\n  border-color: #f5cecd; }\n\n.am-panel-danger > .am-panel-hd {\n  color: #dd514c;\n  background-color: rgba(221, 81, 76, 0.15);\n  border-color: #f5cecd; }\n\n.am-panel-danger > .am-panel-hd + .am-panel-collapse > .am-panel-bd {\n  border-top-color: #f5cecd; }\n\n.am-panel-danger > .am-panel-footer + .am-panel-collapse > .am-panel-bd {\n  border-bottom-color: #f5cecd; }\n\n.am-panel-group .am-panel-hd, .am-panel > .am-table-bd > tbody > tr:first-child > td, .am-panel > .am-table-bd > tbody > tr:first-child > th, .am-panel > .am-table-bd > tbody > tr:last-child > td, .am-panel > .am-table-bd > tbody > tr:last-child > th, .am-panel > .am-table-bd > tfoot > tr:last-child > td, .am-panel > .am-table-bd > tfoot > tr:last-child > th, .am-panel > .am-table-bd > thead > tr:first-child > td, .am-panel > .am-table-bd > thead > tr:first-child > th {\n  border-bottom: 0; }\n\n.am-panel > .am-table {\n  margin-bottom: 0; }\n\n.am-panel > .am-table:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-panel > .am-table:last-child {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.am-panel > .am-panel-bd + .am-table {\n  border-top: 1px solid #ddd; }\n\n.am-panel > .am-table > tbody:first-child > tr:first-child td, .am-panel > .am-table > tbody:first-child > tr:first-child th {\n  border-top: 0; }\n\n.am-panel > .am-table-bd {\n  border: 0; }\n\n.am-panel > .am-table-bd > tbody > tr > td:first-child, .am-panel > .am-table-bd > tbody > tr > th:first-child, .am-panel > .am-table-bd > tfoot > tr > td:first-child, .am-panel > .am-table-bd > tfoot > tr > th:first-child, .am-panel > .am-table-bd > thead > tr > td:first-child, .am-panel > .am-table-bd > thead > tr > th:first-child {\n  border-left: 0; }\n\n.am-panel > .am-table-bd > tbody > tr > td:last-child, .am-panel > .am-table-bd > tbody > tr > th:last-child, .am-panel > .am-table-bd > tfoot > tr > td:last-child, .am-panel > .am-table-bd > tfoot > tr > th:last-child, .am-panel > .am-table-bd > thead > tr > td:last-child, .am-panel > .am-table-bd > thead > tr > th:last-child {\n  border-right: 0; }\n\n.am-panel > .am-list {\n  margin: 0; }\n\n.am-panel > .am-list-static li, .am-panel > .am-list > li > a {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.am-panel-group {\n  margin-bottom: 2rem; }\n\n.am-panel-group .am-panel {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.am-panel-group .am-panel + .am-panel {\n  margin-top: 6px; }\n\n.am-panel-group .am-panel-hd + .am-panel-collapse .am-panel-bd {\n  border-top: 1px solid #ddd; }\n\n.am-panel-group .am-panel-footer {\n  border-top: 0; }\n\n.am-panel-group .am-panel-footer + .am-panel-collapse .am-panel-bd {\n  border-bottom: 1px solid #ddd; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 36px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 36px 0; }\n  to {\n    background-position: 0 0; } }\n\n.am-progress {\n  overflow: hidden;\n  height: 2rem;\n  margin-bottom: 2rem;\n  background-color: #f5f5f5;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.am-progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 1.2rem;\n  line-height: 2rem;\n  color: #fff;\n  background-color: #0e90d2;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width .6s ease;\n  transition: width .6s ease; }\n\n.am-progress-striped .am-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 36px 36px;\n  background-size: 36px 36px; }\n\n.am-progress.am-active .am-progress-bar {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.am-progress-bar[aria-valuenow=\"1\"], .am-progress-bar[aria-valuenow=\"2\"] {\n  min-width: 30px; }\n\n.am-progress-bar[aria-valuenow=\"0\"] {\n  color: #999;\n  min-width: 30px;\n  background: 0 0;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.am-progress-bar-secondary {\n  background-color: #3bb4f2; }\n\n.am-progress-striped .am-progress-bar-secondary {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.am-progress-striped .am-progress-bar-success, .am-progress-striped .am-progress-bar-warning {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.am-progress-bar-success {\n  background-color: #5eb95e; }\n\n.am-progress-striped .am-progress-bar-success {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.am-progress-bar-warning {\n  background-color: #F37B1D; }\n\n.am-progress-striped .am-progress-bar-warning {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.am-progress-bar-danger {\n  background-color: #dd514c; }\n\n.am-progress-striped .am-progress-bar-danger {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.am-progress-xs {\n  height: .6rem; }\n\n.am-progress-sm {\n  height: 1.2rem; }\n\n.am-thumbnail {\n  display: block;\n  padding: 2px;\n  margin-bottom: 2rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out; }\n\n.am-thumbnail a > img, .am-thumbnail > img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.am-thumbnail a.am-thumbnail.active, .am-thumbnail a.am-thumbnail:focus, .am-thumbnail a.am-thumbnail:hover {\n  border-color: #0e90d2;\n  background-color: #fff; }\n\n.am-thumbnail a > img, .am-thumbnail > img, img.am-thumbnail {\n  max-width: 100%;\n  height: auto; }\n\n.am-thumbnail-caption {\n  margin: 0;\n  padding: .8rem;\n  color: #333;\n  font-weight: 400; }\n\n.am-thumbnail-caption :last-child {\n  margin-bottom: 0; }\n\n.am-thumbnails {\n  margin-left: -.5rem;\n  margin-right: -.5rem; }\n\n.am-thumbnails > li {\n  padding: 0 .5rem 1rem; }\n\n.am-scrollable-horizontal {\n  width: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-overflow-scrolling: touch; }\n\n.am-scrollable-vertical {\n  height: 240px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  resize: vertical; }\n\n.am-square {\n  border-radius: 0; }\n\n.am-radius {\n  border-radius: 2px; }\n\n.am-round {\n  border-radius: 1000px; }\n\n.am-circle {\n  border-radius: 50%; }\n\n.am-cf:after, .am-cf:before {\n  content: \" \";\n  display: table; }\n\n.am-cf:after {\n  clear: both; }\n\n.am-fl {\n  float: left; }\n\n.am-fr {\n  float: right; }\n\n.am-nbfc {\n  overflow: hidden; }\n\n.am-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.am-block {\n  display: block !important; }\n\n.am-inline {\n  display: inline !important; }\n\n.am-inline-block {\n  display: inline-block !important; }\n\n.am-hide {\n  display: none !important;\n  visibility: hidden !important; }\n\n.am-vertical-align {\n  font-size: 0; }\n\n.am-vertical-align:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n.am-vertical-align-bottom, .am-vertical-align-middle {\n  display: inline-block;\n  font-size: 1.6rem;\n  max-width: 100%; }\n\n.am-vertical-align-middle {\n  vertical-align: middle; }\n\n.am-vertical-align-bottom {\n  vertical-align: bottom; }\n\n.am-responsive-width {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  max-width: 100%;\n  height: auto; }\n\n.am-margin {\n  margin: 1.6rem; }\n\n.am-margin-0 {\n  margin: 0 !important; }\n\n.am-margin-xs {\n  margin: .5rem; }\n\n.am-margin-sm {\n  margin: 1rem; }\n\n.am-margin-lg {\n  margin: 2.4rem; }\n\n.am-margin-xl {\n  margin: 3.2rem; }\n\n.am-margin-horizontal {\n  margin-left: 1.6rem;\n  margin-right: 1.6rem; }\n\n.am-margin-horizontal-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\n.am-margin-horizontal-xs {\n  margin-left: .5rem;\n  margin-right: .5rem; }\n\n.am-margin-horizontal-sm {\n  margin-left: 1rem;\n  margin-right: 1rem; }\n\n.am-margin-horizontal-lg {\n  margin-left: 2.4rem;\n  margin-right: 2.4rem; }\n\n.am-margin-horizontal-xl {\n  margin-left: 3.2rem;\n  margin-right: 3.2rem; }\n\n.am-margin-vertical {\n  margin-top: 1.6rem;\n  margin-bottom: 1.6rem; }\n\n.am-margin-vertical-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.am-margin-vertical-xs {\n  margin-top: .5rem;\n  margin-bottom: .5rem; }\n\n.am-margin-vertical-sm {\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n.am-margin-vertical-lg {\n  margin-top: 2.4rem;\n  margin-bottom: 2.4rem; }\n\n.am-margin-vertical-xl {\n  margin-top: 3.2rem;\n  margin-bottom: 3.2rem; }\n\n.am-margin-top {\n  margin-top: 1.6rem; }\n\n.am-margin-top-0 {\n  margin-top: 0 !important; }\n\n.am-margin-top-xs {\n  margin-top: .5rem; }\n\n.am-margin-top-sm {\n  margin-top: 1rem; }\n\n.am-margin-top-lg {\n  margin-top: 2.4rem; }\n\n.am-margin-top-xl {\n  margin-top: 3.2rem; }\n\n.am-margin-bottom {\n  margin-bottom: 1.6rem; }\n\n.am-margin-bottom-0 {\n  margin-bottom: 0 !important; }\n\n.am-margin-bottom-xs {\n  margin-bottom: .5rem; }\n\n.am-margin-bottom-sm {\n  margin-bottom: 1rem; }\n\n.am-margin-bottom-lg {\n  margin-bottom: 2.4rem; }\n\n.am-margin-bottom-xl {\n  margin-bottom: 3.2rem; }\n\n.am-margin-left {\n  margin-left: 1.6rem; }\n\n.am-margin-left-0 {\n  margin-left: 0 !important; }\n\n.am-margin-left-xs {\n  margin-left: .5rem; }\n\n.am-margin-left-sm {\n  margin-left: 1rem; }\n\n.am-margin-left-lg {\n  margin-left: 2.4rem; }\n\n.am-margin-left-xl {\n  margin-left: 3.2rem; }\n\n.am-margin-right {\n  margin-right: 1.6rem; }\n\n.am-margin-right-0 {\n  margin-right: 0 !important; }\n\n.am-margin-right-xs {\n  margin-right: .5rem; }\n\n.am-margin-right-sm {\n  margin-right: 1rem; }\n\n.am-margin-right-lg {\n  margin-right: 2.4rem; }\n\n.am-margin-right-xl {\n  margin-right: 3.2rem; }\n\n.am-padding {\n  padding: 1.6rem; }\n\n.am-padding-0 {\n  padding: 0 !important; }\n\n.am-padding-xs {\n  padding: .5rem; }\n\n.am-padding-sm {\n  padding: 1rem; }\n\n.am-padding-lg {\n  padding: 2.4rem; }\n\n.am-padding-xl {\n  padding: 3.2rem; }\n\n.am-padding-horizontal {\n  padding-left: 1.6rem;\n  padding-right: 1.6rem; }\n\n.am-padding-horizontal-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.am-padding-horizontal-xs {\n  padding-left: .5rem;\n  padding-right: .5rem; }\n\n.am-padding-horizontal-sm {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.am-padding-horizontal-lg {\n  padding-left: 2.4rem;\n  padding-right: 2.4rem; }\n\n.am-padding-horizontal-xl {\n  padding-left: 3.2rem;\n  padding-right: 3.2rem; }\n\n.am-padding-vertical {\n  padding-top: 1.6rem;\n  padding-bottom: 1.6rem; }\n\n.am-padding-vertical-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.am-padding-vertical-xs {\n  padding-top: .5rem;\n  padding-bottom: .5rem; }\n\n.am-padding-vertical-sm {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.am-padding-vertical-lg {\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem; }\n\n.am-padding-vertical-xl {\n  padding-top: 3.2rem;\n  padding-bottom: 3.2rem; }\n\n.am-padding-top {\n  padding-top: 1.6rem; }\n\n.am-padding-top-0 {\n  padding-top: 0 !important; }\n\n.am-padding-top-xs {\n  padding-top: .5rem; }\n\n.am-padding-top-sm {\n  padding-top: 1rem; }\n\n.am-padding-top-lg {\n  padding-top: 2.4rem; }\n\n.am-padding-top-xl {\n  padding-top: 3.2rem; }\n\n.am-padding-bottom {\n  padding-bottom: 1.6rem; }\n\n.am-padding-bottom-0 {\n  padding-bottom: 0 !important; }\n\n.am-padding-bottom-xs {\n  padding-bottom: .5rem; }\n\n.am-padding-bottom-sm {\n  padding-bottom: 1rem; }\n\n.am-padding-bottom-lg {\n  padding-bottom: 2.4rem; }\n\n.am-padding-bottom-xl {\n  padding-bottom: 3.2rem; }\n\n.am-padding-left {\n  padding-left: 1.6rem; }\n\n.am-padding-left-0 {\n  padding-left: 0 !important; }\n\n.am-padding-left-xs {\n  padding-left: .5rem; }\n\n.am-padding-left-sm {\n  padding-left: 1rem; }\n\n.am-padding-left-lg {\n  padding-left: 2.4rem; }\n\n.am-padding-left-xl {\n  padding-left: 3.2rem; }\n\n.am-padding-right {\n  padding-right: 1.6rem; }\n\n.am-padding-right-0 {\n  padding-right: 0 !important; }\n\n.am-padding-right-xs {\n  padding-right: .5rem; }\n\n.am-padding-right-sm {\n  padding-right: 1rem; }\n\n.am-padding-right-lg {\n  padding-right: 2.4rem; }\n\n.am-padding-right-xl {\n  padding-right: 3.2rem; }\n\n@media only screen {\n  .am-hide-lg, .am-hide-lg-only, .am-hide-lg-up, .am-hide-md, .am-hide-md-only, .am-hide-md-up, .am-show-lg-down, .am-show-md-down, .am-show-sm, .am-show-sm-down, .am-show-sm-only, .am-show-sm-up {\n    display: inherit !important; }\n  .am-hide-lg-down, .am-hide-md-down, .am-hide-sm, .am-hide-sm-down, .am-hide-sm-only, .am-hide-sm-up, .am-show-lg, .am-show-lg-only, .am-show-lg-up, .am-show-md, .am-show-md-only, .am-show-md-up {\n    display: none !important; }\n  table.am-hide-lg, table.am-hide-lg-only, table.am-hide-lg-up, table.am-hide-md, table.am-hide-md-only, table.am-hide-md-up, table.am-show-lg-down, table.am-show-md-down, table.am-show-sm, table.am-show-sm-down, table.am-show-sm-only, table.am-show-sm-up {\n    display: table !important; }\n  thead.am-hide-lg, thead.am-hide-lg-only, thead.am-hide-lg-up, thead.am-hide-md, thead.am-hide-md-only, thead.am-hide-md-up, thead.am-show-lg-down, thead.am-show-md-down, thead.am-show-sm, thead.am-show-sm-down, thead.am-show-sm-only, thead.am-show-sm-up {\n    display: table-header-group !important; }\n  tbody.am-hide-lg, tbody.am-hide-lg-only, tbody.am-hide-lg-up, tbody.am-hide-md, tbody.am-hide-md-only, tbody.am-hide-md-up, tbody.am-show-lg-down, tbody.am-show-md-down, tbody.am-show-sm, tbody.am-show-sm-down, tbody.am-show-sm-only, tbody.am-show-sm-up {\n    display: table-row-group !important; }\n  tr.am-hide-lg, tr.am-hide-lg-only, tr.am-hide-lg-up, tr.am-hide-md, tr.am-hide-md-only, tr.am-hide-md-up, tr.am-show-lg-down, tr.am-show-md-down, tr.am-show-sm, tr.am-show-sm-down, tr.am-show-sm-only, tr.am-show-sm-up {\n    display: table-row !important; }\n  td.am-hide-lg, td.am-hide-lg-only, td.am-hide-lg-up, td.am-hide-md, td.am-hide-md-only, td.am-hide-md-up, td.am-show-lg-down, td.am-show-md-down, td.am-show-sm, td.am-show-sm-down, td.am-show-sm-only, td.am-show-sm-up, th.am-hide-lg, th.am-hide-lg-only, th.am-hide-lg-up, th.am-hide-md, th.am-hide-md-only, th.am-hide-md-up, th.am-show-lg-down, th.am-show-md-down, th.am-show-sm, th.am-show-sm-down, th.am-show-sm-only, th.am-show-sm-up {\n    display: table-cell !important; }\n  .am-text-left {\n    text-align: left !important; }\n  .am-text-right {\n    text-align: right !important; }\n  .am-text-center {\n    text-align: center !important; }\n  .am-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width: 641px) {\n  .am-hide-lg, .am-hide-lg-only, .am-hide-lg-up, .am-hide-sm, .am-hide-sm-down, .am-hide-sm-only, .am-show-lg-down, .am-show-md, .am-show-md-down, .am-show-md-only, .am-show-md-up, .am-show-sm-up {\n    display: inherit !important; }\n  .am-hide-lg-down, .am-hide-md, .am-hide-md-down, .am-hide-md-only, .am-hide-md-up, .am-hide-sm-up, .am-show-lg, .am-show-lg-only, .am-show-lg-up, .am-show-sm, .am-show-sm-down, .am-show-sm-only {\n    display: none !important; }\n  table.am-hide-lg, table.am-hide-lg-only, table.am-hide-lg-up, table.am-hide-sm, table.am-hide-sm-down, table.am-hide-sm-only, table.am-show-lg-down, table.am-show-md, table.am-show-md-down, table.am-show-md-only, table.am-show-md-up, table.am-show-sm-up {\n    display: table !important; }\n  thead.am-hide-lg, thead.am-hide-lg-only, thead.am-hide-lg-up, thead.am-hide-sm, thead.am-hide-sm-down, thead.am-hide-sm-only, thead.am-show-lg-down, thead.am-show-md, thead.am-show-md-down, thead.am-show-md-only, thead.am-show-md-up, thead.am-show-sm-up {\n    display: table-header-group !important; }\n  tbody.am-hide-lg, tbody.am-hide-lg-only, tbody.am-hide-lg-up, tbody.am-hide-sm, tbody.am-hide-sm-down, tbody.am-hide-sm-only, tbody.am-show-lg-down, tbody.am-show-md, tbody.am-show-md-down, tbody.am-show-md-only, tbody.am-show-md-up, tbody.am-show-sm-up {\n    display: table-row-group !important; }\n  tr.am-hide-lg, tr.am-hide-lg-only, tr.am-hide-lg-up, tr.am-hide-sm, tr.am-hide-sm-down, tr.am-hide-sm-only, tr.am-show-lg-down, tr.am-show-md, tr.am-show-md-down, tr.am-show-md-only, tr.am-show-md-up, tr.am-show-sm-up {\n    display: table-row !important; }\n  td.am-hide-lg, td.am-hide-lg-only, td.am-hide-lg-up, td.am-hide-sm, td.am-hide-sm-down, td.am-hide-sm-only, td.am-show-lg-down, td.am-show-md, td.am-show-md-down, td.am-show-md-only, td.am-show-md-up, td.am-show-sm-up, th.am-hide-lg, th.am-hide-lg-only, th.am-hide-lg-up, th.am-hide-sm, th.am-hide-sm-down, th.am-hide-sm-only, th.am-show-lg-down, th.am-show-md, th.am-show-md-down, th.am-show-md-only, th.am-show-md-up, th.am-show-sm-up {\n    display: table-cell !important; } }\n\n@media only screen and (min-width: 1025px) {\n  .am-hide-md, .am-hide-md-down, .am-hide-md-only, .am-hide-sm, .am-hide-sm-down, .am-hide-sm-only, .am-show-lg, .am-show-lg-down, .am-show-lg-only, .am-show-lg-up, .am-show-md-up, .am-show-sm-up {\n    display: inherit !important; }\n  .am-hide-lg, .am-hide-lg-down, .am-hide-lg-only, .am-hide-lg-up, .am-hide-md-up, .am-hide-sm-up, .am-show-md, .am-show-md-down, .am-show-md-only, .am-show-sm, .am-show-sm-down, .am-show-sm-only {\n    display: none !important; }\n  table.am-hide-md, table.am-hide-md-down, table.am-hide-md-only, table.am-hide-sm, table.am-hide-sm-down, table.am-hide-sm-only, table.am-show-lg, table.am-show-lg-down, table.am-show-lg-only, table.am-show-lg-up, table.am-show-md-up, table.am-show-sm-up {\n    display: table !important; }\n  thead.am-hide-md, thead.am-hide-md-down, thead.am-hide-md-only, thead.am-hide-sm, thead.am-hide-sm-down, thead.am-hide-sm-only, thead.am-show-lg, thead.am-show-lg-down, thead.am-show-lg-only, thead.am-show-lg-up, thead.am-show-md-up, thead.am-show-sm-up {\n    display: table-header-group !important; }\n  tbody.am-hide-md, tbody.am-hide-md-down, tbody.am-hide-md-only, tbody.am-hide-sm, tbody.am-hide-sm-down, tbody.am-hide-sm-only, tbody.am-show-lg, tbody.am-show-lg-down, tbody.am-show-lg-only, tbody.am-show-lg-up, tbody.am-show-md-up, tbody.am-show-sm-up {\n    display: table-row-group !important; }\n  tr.am-hide-md, tr.am-hide-md-down, tr.am-hide-md-only, tr.am-hide-sm, tr.am-hide-sm-down, tr.am-hide-sm-only, tr.am-show-lg, tr.am-show-lg-down, tr.am-show-lg-only, tr.am-show-lg-up, tr.am-show-md-up, tr.am-show-sm-up {\n    display: table-row !important; }\n  td.am-hide-md, td.am-hide-md-down, td.am-hide-md-only, td.am-hide-sm, td.am-hide-sm-down, td.am-hide-sm-only, td.am-show-lg, td.am-show-lg-down, td.am-show-lg-only, td.am-show-lg-up, td.am-show-md-up, td.am-show-sm-up, th.am-hide-md, th.am-hide-md-down, th.am-hide-md-only, th.am-hide-sm, th.am-hide-sm-down, th.am-hide-sm-only, th.am-show-lg, th.am-show-lg-down, th.am-show-lg-only, th.am-show-lg-up, th.am-show-md-up, th.am-show-sm-up {\n    display: table-cell !important; } }\n\n@media only screen and (orientation: landscape) {\n  .am-hide-portrait, .am-show-landscape {\n    display: inherit !important; }\n  .am-hide-landscape, .am-show-portrait {\n    display: none !important; } }\n\n@media only screen and (orientation: portrait) {\n  .am-hide-landscape, .am-show-portrait {\n    display: inherit !important; }\n  .am-hide-portrait, .am-show-landscape {\n    display: none !important; } }\n\n.am-sans-serif {\n  font-family: \"Segoe UI\",\"Lucida Grande\",Helvetica,Arial,\"Microsoft YaHei\",FreeSans,Arimo,\"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\",\"Hiragino Sans GB W3\",FontAwesome,sans-serif; }\n\n.am-serif {\n  font-family: Georgia,\"Times New Roman\",Times,SimSun,FontAwesome,serif; }\n\n.am-kai {\n  font-family: Georgia,\"Times New Roman\",Times,Kai,\"Kaiti SC\",KaiTi,BiauKai,FontAwesome,serif; }\n\n.am-monospace {\n  font-family: Monaco,Menlo,Consolas,\"Courier New\",FontAwesome,monospace; }\n\n.am-text-primary {\n  color: #0e90d2; }\n\n.am-text-secondary {\n  color: #3bb4f2; }\n\n.am-text-success {\n  color: #5eb95e; }\n\n.am-text-warning {\n  color: #F37B1D; }\n\n.am-text-danger {\n  color: #dd514c; }\n\n.am-link-muted, .am-link-muted a {\n  color: #666; }\n\n.am-link-muted a:hover, .am-link-muted:hover {\n  color: #555; }\n\n.am-text-default {\n  font-size: 1.6rem; }\n\n.am-text-xs {\n  font-size: 1.2rem; }\n\n.am-text-sm {\n  font-size: 1.4rem; }\n\n.am-text-lg {\n  font-size: 1.8rem; }\n\n.am-text-xl {\n  font-size: 2.4rem; }\n\n.am-text-xxl {\n  font-size: 3.2rem; }\n\n.am-text-xxxl {\n  font-size: 4.2rem; }\n\n.am-ellipsis, .am-text-truncate {\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-text-break {\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  hyphens: auto; }\n\n.am-modal-actions-group .am-list > li, .am-modal-actions-group .am-list > li > a, .am-modal-btn, .am-popup-hd .am-popup-title, .am-pureview-bar .am-pureview-title {\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.am-text-nowrap {\n  white-space: nowrap; }\n\n[class*=am-align-] {\n  margin-bottom: 1rem; }\n\n.am-align-left {\n  margin-right: 1rem;\n  float: left; }\n\n.am-align-right {\n  margin-left: 1rem;\n  float: right; }\n\n.am-sr-only {\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.am-text-ir {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.am-alert, .am-alert a {\n  color: #fff; }\n\n@media only screen and (max-width: 640px) {\n  .am-sm-only-text-left {\n    text-align: left !important; }\n  .am-sm-only-text-right {\n    text-align: right !important; }\n  .am-sm-only-text-center {\n    text-align: center !important; }\n  .am-sm-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width: 641px) and (max-width: 1024px) {\n  .am-md-only-text-left {\n    text-align: left !important; }\n  .am-md-only-text-right {\n    text-align: right !important; }\n  .am-md-only-text-center {\n    text-align: center !important; }\n  .am-md-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width: 641px) {\n  .am-md-text-left {\n    text-align: left !important; }\n  .am-md-text-right {\n    text-align: right !important; }\n  .am-md-text-center {\n    text-align: center !important; }\n  .am-md-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width: 1025px) {\n  .am-lg-text-left {\n    text-align: left !important; }\n  .am-lg-text-right {\n    text-align: right !important; }\n  .am-lg-text-center {\n    text-align: center !important; }\n  .am-lg-text-justify {\n    text-align: justify !important; } }\n\n.am-text-top {\n  vertical-align: top !important; }\n\n.am-text-middle {\n  vertical-align: middle !important; }\n\n.am-text-bottom {\n  vertical-align: bottom !important; }\n\n.am-angle:after, .am-angle:before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 8px dashed transparent;\n  z-index: 1; }\n\n.am-angle-up {\n  top: 0; }\n\n.am-angle-up:after, .am-angle-up:before {\n  border-bottom-style: solid;\n  border-width: 0 8px 8px; }\n\n.am-angle-up:before {\n  border-bottom-color: #ddd;\n  bottom: 0; }\n\n.am-angle-up:after {\n  border-bottom-color: #fff;\n  bottom: -1px; }\n\n.am-angle-down {\n  bottom: -9px; }\n\n.am-angle-down:after, .am-angle-down:before {\n  border-top-style: solid;\n  border-width: 8px 8px 0; }\n\n.am-angle-down:before {\n  border-top-color: #ddd;\n  bottom: 0; }\n\n.am-angle-down:after {\n  border-top-color: #fff;\n  bottom: 1px; }\n\n.am-angle-left {\n  left: -9px; }\n\n.am-angle-left:after, .am-angle-left:before {\n  border-right-style: solid;\n  border-width: 8px 8px 8px 0; }\n\n.am-angle-left:before {\n  border-right-color: #ddd;\n  left: 0; }\n\n.am-angle-left:after {\n  border-right-color: #fff;\n  left: 1px; }\n\n.am-angle-right {\n  right: 0; }\n\n.am-angle-right:after, .am-angle-right:before {\n  border-left-style: solid;\n  border-width: 8px 0 8px 8px; }\n\n.am-angle-right:before {\n  border-left-color: #ddd;\n  left: 0; }\n\n.am-angle-right:after {\n  border-left-color: #fff;\n  left: -1px; }\n\n.am-alert {\n  margin-bottom: 1em;\n  padding: .625em;\n  background: #0e90d2;\n  border: 1px solid #0c7cb5;\n  border-radius: 0; }\n\n.am-alert h1, .am-alert h2, .am-alert h3, .am-alert h4, .am-alert h5, .am-alert h6 {\n  color: inherit; }\n\n.am-alert .am-close {\n  opacity: .4; }\n\n.am-alert .am-close:hover {\n  opacity: .6; }\n\n* + .am-alert {\n  margin-top: 1em; }\n\n.am-alert > :last-child {\n  margin-bottom: 0; }\n\n.am-form-group .am-alert {\n  margin: 5px 0 0;\n  padding: .25em .625em;\n  font-size: 1.3rem; }\n\n.am-alert > .am-close:first-child {\n  float: right;\n  height: auto;\n  margin: -3px -5px auto auto; }\n\n.am-alert > .am-close:first-child + * {\n  margin-top: 0; }\n\n.am-alert-secondary {\n  background-color: #eee;\n  border-color: #dfdfdf;\n  color: #555; }\n\n.am-alert-success {\n  background-color: #5eb95e;\n  border-color: #4bad4b;\n  color: #fff; }\n\n.am-alert-warning {\n  background-color: #F37B1D;\n  border-color: #e56c0c;\n  color: #fff; }\n\n.am-alert-danger {\n  background-color: #dd514c;\n  border-color: #d83832;\n  color: #fff; }\n\n.am-dropdown {\n  position: relative;\n  display: inline-block; }\n\n.am-dropdown-toggle:focus {\n  outline: 0; }\n\n.am-dropdown-content {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1020;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 15px;\n  margin: 9px 0 0;\n  text-align: left;\n  line-height: 1.6;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  -webkit-animation-duration: .15s;\n  animation-duration: .15s; }\n\n.am-dropdown-content:after, .am-dropdown-content:before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 8px dashed transparent;\n  z-index: 1;\n  border-bottom-style: solid;\n  border-width: 0 8px 8px;\n  left: 10px;\n  top: -8px;\n  pointer-events: none; }\n\n.am-dropdown-content:before {\n  border-bottom-color: #ddd;\n  bottom: 0; }\n\n.am-dropdown-content:after {\n  border-bottom-color: #fff;\n  bottom: -1px;\n  top: -7px; }\n\n.am-active > .am-dropdown-content {\n  display: block; }\n\n.am-dropdown-content :first-child {\n  margin-top: 0; }\n\n.am-dropdown-up .am-dropdown-content {\n  top: auto;\n  bottom: 100%;\n  margin: 0 0 9px; }\n\n.am-dropdown-up .am-dropdown-content:after, .am-dropdown-up .am-dropdown-content:before {\n  border-bottom: none;\n  border-top: 8px solid #ddd;\n  top: auto;\n  bottom: -8px; }\n\n.am-dropdown-up .am-dropdown-content:after {\n  bottom: -7px;\n  border-top-color: #fff; }\n\n.am-dropdown-flip .am-dropdown-content {\n  left: auto;\n  right: 0; }\n\n.am-dropdown-flip .am-dropdown-content:after, .am-dropdown-flip .am-dropdown-content:before {\n  left: auto;\n  right: 10px; }\n\n.am-fr > .am-dropdown-content, ul.am-dropdown-content.am-fr {\n  right: 0;\n  left: auto; }\n\nul.am-dropdown-content {\n  list-style: none;\n  padding: 5px 0; }\n\nul.am-dropdown-content .am-divider {\n  height: 1px;\n  margin: 0;\n  overflow: hidden;\n  background-color: #e5e5e5; }\n\nul.am-dropdown-content > li > a {\n  display: block;\n  padding: 6px 20px;\n  font-weight: 400;\n  color: #333;\n  white-space: nowrap; }\n\nul.am-dropdown-content > li > a:focus, ul.am-dropdown-content > li > a:hover {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\nul.am-dropdown-content > .am-active > a, ul.am-dropdown-content > .am-active > a:focus, ul.am-dropdown-content > .am-active > a:hover {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #0e90d2; }\n\nul.am-dropdown-content > .am-disabled > a, ul.am-dropdown-content > .am-disabled > a:focus, ul.am-dropdown-content > .am-disabled > a:hover {\n  color: #999; }\n\nul.am-dropdown-content > .am-disabled > a:focus, ul.am-dropdown-content > .am-disabled > a:hover {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  cursor: not-allowed; }\n\n.am-dropdown-header {\n  display: block;\n  padding: 6px 20px;\n  font-size: 1.2rem;\n  color: #999; }\n\n.am-fr > .am-dropdown-content:before {\n  right: 10px;\n  left: auto; }\n\n.am-dropdown-animation {\n  -webkit-animation: am-dropdown-animation .15s ease-out;\n  animation: am-dropdown-animation .15s ease-out; }\n\n@-webkit-keyframes am-dropdown-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px); } }\n\n@keyframes am-dropdown-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px); } }\n\n.am-slider a:focus, .am-slider a:hover {\n  outline: 0; }\n\n.am-control-nav, .am-direction-nav, .am-slides {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.am-slider {\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\n.am-slider .am-slides:after, .am-slider .am-slides:before {\n  content: \" \";\n  display: table; }\n\n.am-slider .am-slides > li {\n  display: none;\n  -webkit-backface-visibility: hidden;\n  position: relative; }\n\n.no-js .am-slider .am-slides > li:first-child {\n  display: block; }\n\n.am-slider .am-slides img {\n  width: 100%;\n  display: block; }\n\n.am-pauseplay span {\n  text-transform: capitalize; }\n\n.am-viewport {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.am-slider-carousel li {\n  margin-right: 5px; }\n\n.am-control-nav {\n  position: absolute; }\n\n.am-control-nav li {\n  display: inline-block; }\n\n.am-control-thumbs {\n  position: static;\n  overflow: hidden; }\n\n.am-control-thumbs img {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.am-slider-slide .am-slides > li {\n  display: none;\n  position: relative; }\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .am-slider-slide .am-slides > li {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n    transition: -webkit-transform .6s ease-in-out;\n    transition: transform .6s ease-in-out;\n    transition: transform .6s ease-in-out,-webkit-transform .6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    perspective: 1000px; }\n  .am-slider-slide .am-slides > li.active.right, .am-slider-slide .am-slides > li.next {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0; }\n  .am-slider-slide .am-slides > li.active.left, .am-slider-slide .am-slides > li.prev {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0; }\n  .am-slider-slide .am-slides > li.active, .am-slider-slide .am-slides > li.next.left, .am-slider-slide .am-slides > li.prev.right {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0; } }\n\n.am-slider-slide .am-slides > .active, .am-slider-slide .am-slides > .next, .am-slider-slide .am-slides > .prev {\n  display: block; }\n\n.am-slider-slide .am-slides > .active {\n  left: 0; }\n\n.am-slider-slide .am-slides > .next, .am-slider-slide .am-slides > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.am-slider-slide .am-slides > .next {\n  left: 100%; }\n\n.am-slider-slide .am-slides > .prev {\n  left: -100%; }\n\n.am-slider-slide .am-slides > .next.left, .am-slider-slide .am-slides > .prev.right {\n  left: 0; }\n\n.am-slider-slide .am-slides > .active.left {\n  left: -100%; }\n\n.am-slider-slide .am-slides > .active.right {\n  left: 100%; }\n\n.am-slider-default {\n  margin: 0 0 20px;\n  background-color: #fff;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15); }\n\n.am-slider-default .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-default .am-viewport {\n  max-height: 300px; }\n\n.am-slider-default .carousel li {\n  margin-right: 5px; }\n\n.am-slider-default .am-direction-nav a {\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  display: block;\n  width: 36px;\n  height: 36px;\n  margin: -18px 0 0;\n  overflow: hidden;\n  opacity: .45;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-default .am-direction-nav a:before {\n  display: inline-block;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  width: 100%;\n  color: #333;\n  content: \"\\F137\";\n  font-size: 24px !important;\n  text-align: center;\n  line-height: 36px !important;\n  height: 36px; }\n\n.am-slider-default .am-direction-nav a.am-next:before {\n  content: \"\\F138\"; }\n\n.am-slider-default .am-direction-nav .am-prev {\n  left: 10px; }\n\n.am-slider-default .am-direction-nav .am-next {\n  right: 10px;\n  text-align: right; }\n\n.am-slider-default .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-default:hover .am-prev {\n  opacity: .7;\n  left: 10px; }\n\n.am-slider-default:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-default:hover .am-next {\n  opacity: .7;\n  right: 10px; }\n\n.am-slider-default:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-default .am-pauseplay a {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n  opacity: .8;\n  z-index: 10;\n  overflow: hidden;\n  cursor: pointer;\n  color: #000; }\n\n.am-slider-default .am-pauseplay a::before {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n  font-size: 20px;\n  display: inline-block;\n  content: \"\\F04C\"; }\n\n.am-modal-btn.am-modal-btn-bold, .am-modal-hd {\n  font-weight: 500; }\n\n.am-slider-default .am-pauseplay a:hover {\n  opacity: 1; }\n\n.am-slider-default .am-pauseplay a.am-play::before {\n  content: \"\\F04B\"; }\n\n.am-slider-default .am-slider-desc {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  bottom: 0;\n  padding: 10px;\n  width: 100%;\n  color: #fff; }\n\n.am-slider-default .am-control-nav {\n  width: 100%;\n  position: absolute;\n  bottom: -15px;\n  text-align: center; }\n\n.am-slider-default .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block; }\n\n.am-slider-default .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: #666;\n  background-color: rgba(0, 0, 0, 0.5);\n  line-height: 0;\n  font-size: 0;\n  cursor: pointer;\n  text-indent: -9999px;\n  border-radius: 20px;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3); }\n\n.am-slider-default .am-control-nav li a:hover {\n  background-color: #333;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.am-slider-default .am-control-nav li a.am-active {\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-slider-default .am-control-thumbs {\n  margin: 5px 0 0;\n  position: static;\n  overflow: hidden; }\n\n.am-slider-default .am-control-thumbs li {\n  width: 25%;\n  float: left;\n  margin: 0; }\n\n.am-slider-default .am-control-thumbs img {\n  width: 100%;\n  height: auto;\n  display: block;\n  opacity: .7;\n  cursor: pointer; }\n\n.am-slider-default .am-control-thumbs img:hover {\n  opacity: 1; }\n\n.am-slider-default .am-control-thumbs .am-active {\n  opacity: 1;\n  cursor: default; }\n\n.am-slider-default .am-control-thumbs i {\n  position: absolute; }\n\n.am-modal, .am-modal-actions, .am-popup {\n  position: fixed;\n  left: 0; }\n\n.am-modal {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1110;\n  display: none;\n  opacity: 0;\n  outline: 0;\n  text-align: center;\n  -webkit-transform: scale(1.185);\n  -ms-transform: scale(1.185);\n  transform: scale(1.185);\n  -webkit-transition-property: opacity,-webkit-transform;\n  transition-property: opacity,-webkit-transform;\n  transition-property: transform,opacity;\n  transition-property: transform,opacity,-webkit-transform;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px; }\n\n.am-modal-dialog, .am-modal:before {\n  display: inline-block;\n  vertical-align: middle; }\n\n.am-modal:focus {\n  outline: 0; }\n\n.am-modal.am-modal-active {\n  opacity: 1;\n  -webkit-transition-duration: .3s;\n  transition-duration: .3s;\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.am-modal.am-modal-out {\n  opacity: 0;\n  z-index: 1109;\n  -webkit-transition-duration: .3s;\n  transition-duration: .3s;\n  -webkit-transform: scale(0.815);\n  -ms-transform: scale(0.815);\n  transform: scale(0.815); }\n\n.am-modal-actions, .am-modal-actions.am-modal-out {\n  -webkit-transform: translateY(100%);\n  -ms-transform: translateY(100%); }\n\n.am-modal:before {\n  content: \"\\200B\";\n  height: 100%; }\n\n.am-modal-dialog {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  width: 270px;\n  max-width: 100%;\n  border-radius: 0;\n  background: #f8f8f8; }\n\n@media only screen and (min-width: 641px) {\n  .am-modal-dialog {\n    width: 540px; } }\n\n.am-modal-hd {\n  padding: 15px 10px 5px;\n  font-size: 1.8rem; }\n\n.am-modal-hd + .am-modal-bd {\n  padding-top: 0; }\n\n.am-modal-hd .am-close {\n  position: absolute;\n  top: 4px;\n  right: 4px; }\n\n.am-modal-bd {\n  padding: 15px 10px;\n  text-align: center;\n  border-bottom: 1px solid #dedede;\n  border-radius: 2px 2px 0 0; }\n\n.am-modal-bd + .am-modal-bd {\n  margin-top: 5px; }\n\n.am-modal-prompt-input {\n  display: block;\n  margin: 5px auto 0;\n  border-radius: 0;\n  padding: 5px;\n  line-height: 1.8rem;\n  width: 80%;\n  border: 1px solid #dedede;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none; }\n\n.am-modal-prompt-input:focus {\n  outline: 0;\n  border-color: #d6d6d6; }\n\n.am-modal-footer {\n  height: 44px;\n  overflow: hidden;\n  display: table;\n  width: 100%;\n  border-collapse: collapse; }\n\n.am-modal-btn {\n  display: table-cell !important;\n  padding: 0 5px;\n  height: 44px;\n  -webkit-box-sizing: border-box !important;\n  box-sizing: border-box !important;\n  font-size: 1.6rem;\n  line-height: 44px;\n  text-align: center;\n  color: #0e90d2;\n  overflow: hidden;\n  cursor: pointer;\n  border-right: 1px solid #dedede; }\n\n.am-modal-btn:first-child {\n  border-radius: 0; }\n\n.am-modal-btn:last-child {\n  border-right: none;\n  border-radius: 0; }\n\n.am-modal-btn:first-child:last-child {\n  border-radius: 0; }\n\n.am-modal-btn:active {\n  background: #d4d4d4; }\n\n.am-modal-btn + .am-modal-btn {\n  border-left: 1px solid #dedede; }\n\n.am-modal-no-btn .am-modal-dialog {\n  border-radius: 0;\n  border-bottom: none; }\n\n.am-modal-no-btn .am-modal-bd {\n  border-bottom: none; }\n\n.am-modal-no-btn .am-modal-footer {\n  display: none; }\n\n.am-modal-loading .am-modal-bd {\n  border-bottom: none; }\n\n.am-modal-loading .am-icon-spin {\n  display: inline-block;\n  font-size: 2.4rem; }\n\n.am-modal-loading .am-modal-footer {\n  display: none; }\n\n.am-modal-actions {\n  bottom: 0;\n  z-index: 1110;\n  width: 100%;\n  max-height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-align: center;\n  border-radius: 0;\n  transform: translateY(100%);\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s,-webkit-transform .3s; }\n\n.am-modal-actions.am-modal-active {\n  -webkit-transform: translateY(0);\n  -ms-transform: translateY(0);\n  transform: translateY(0); }\n\n.am-modal-actions.am-modal-out {\n  z-index: 1109;\n  transform: translateY(100%); }\n\n.am-modal-actions-group {\n  margin: 10px; }\n\n.am-modal-actions-group .am-list {\n  margin: 0;\n  border-radius: 0; }\n\n.am-modal-actions-group .am-list > li {\n  margin-bottom: 0;\n  border-bottom: none;\n  display: block;\n  overflow: hidden;\n  -webkit-box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.015);\n  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.015); }\n\n.am-modal-actions-group .am-list > li > a {\n  padding: 1rem;\n  display: block;\n  overflow: hidden; }\n\n.am-modal-actions-group .am-list > li:first-child {\n  border-top: none;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.am-modal-actions-group .am-list > li:last-child {\n  border-bottom: none;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.am-modal-actions-header {\n  padding: 1rem;\n  color: #999;\n  font-size: 1.4rem; }\n\n.am-modal-actions-danger {\n  color: #dd514c; }\n\n.am-modal-actions-danger a {\n  color: inherit; }\n\n.am-popup {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1110;\n  background: #fff;\n  display: none;\n  overflow: hidden;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform,-webkit-transform;\n  -webkit-transform: translateY(100%);\n  -ms-transform: translateY(100%);\n  transform: translateY(100%); }\n\n.am-popup.am-modal-active, .am-popup.am-modal-out {\n  -webkit-transition-duration: .3s;\n  transition-duration: .3s; }\n\n.am-popup.am-modal-active {\n  -webkit-transform: translateY(0);\n  -ms-transform: translateY(0);\n  transform: translateY(0); }\n\n.am-popup.am-modal-out {\n  -webkit-transform: translateY(100%);\n  -ms-transform: translateY(100%);\n  transform: translateY(100%); }\n\n@media all and (min-width: 630px) and (min-height: 630px) {\n  .am-popup {\n    width: 630px;\n    height: 630px;\n    left: 50%;\n    top: 50%;\n    margin-left: -315px;\n    margin-top: -315px;\n    -webkit-transform: translateY(1024px);\n    -ms-transform: translateY(1024px);\n    transform: translateY(1024px); }\n  .am-popup.am-modal-active {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  .am-popup.am-modal-out {\n    -webkit-transform: translateY(1024px);\n    -ms-transform: translateY(1024px);\n    transform: translateY(1024px); } }\n\n.am-datepicker-caret, .am-popover-caret, .am-popup-hd .am-close:hover {\n  -webkit-transform: rotate(360deg);\n  -ms-transform: rotate(360deg); }\n\n.am-popup-inner {\n  padding-top: 44px;\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.am-popup-hd {\n  position: absolute;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 43px;\n  border-bottom: 1px solid #dedede;\n  background-color: #fff; }\n\n.am-popup-hd .am-popup-title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  line-height: 43px;\n  text-align: center;\n  margin: 0 30px;\n  color: #333;\n  display: block;\n  overflow: hidden; }\n\n.am-popup-hd .am-close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  cursor: pointer;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  color: #999; }\n\n.am-popup-hd .am-close:hover {\n  transform: rotate(360deg);\n  color: #555; }\n\n.am-popup-bd {\n  padding: 15px;\n  background: #f8f8f8;\n  color: #555; }\n\n.am-offcanvas {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1090;\n  background: rgba(0, 0, 0, 0.15); }\n\n.am-offcanvas.am-active {\n  display: block; }\n\n.am-offcanvas-page {\n  position: fixed;\n  -webkit-transition: margin-left .3s ease-in-out;\n  transition: margin-left .3s ease-in-out; }\n\n.am-offcanvas-bar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1091;\n  width: 270px;\n  max-width: 100%;\n  background: #333;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transition: -webkit-transform .3s ease-in-out;\n  transition: -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out;\n  transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out;\n  -webkit-transform: translateX(-100%);\n  -ms-transform: translateX(-100%);\n  transform: translateX(-100%); }\n\n.am-offcanvas-bar:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 1px;\n  background: #262626; }\n\n.am-offcanvas.am-active .am-offcanvas-bar.am-offcanvas-bar-active {\n  -webkit-transform: translateX(0);\n  -ms-transform: translateX(0);\n  transform: translateX(0); }\n\n.am-offcanvas-bar-flip {\n  left: auto;\n  right: 0;\n  -webkit-transform: translateX(100%);\n  -ms-transform: translateX(100%);\n  transform: translateX(100%); }\n\n.am-offcanvas-bar-flip:after {\n  right: auto;\n  left: 0; }\n\n.am-offcanvas-content {\n  padding: 15px;\n  color: #999; }\n\n.am-offcanvas-content a {\n  color: #ccc; }\n\n.am-popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  border-radius: 0;\n  background: #333;\n  color: #fff;\n  border: 1px solid #333;\n  display: none;\n  font-size: 1.6rem;\n  z-index: 1150;\n  opacity: 0;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s; }\n\n.am-popover.am-active {\n  display: block !important;\n  opacity: 1; }\n\n.am-popover-inner {\n  position: relative;\n  background: #333;\n  padding: 8px;\n  z-index: 110; }\n\n.am-popover-caret {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-bottom: 8px solid #333;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n  border-top: 0 dotted;\n  transform: rotate(360deg);\n  overflow: hidden; }\n\n.am-popover-top .am-popover-caret {\n  top: auto;\n  bottom: -8px;\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.am-popover-bottom .am-popover-caret {\n  top: -8px; }\n\n.am-popover-bottom .am-popover-caret, .am-popover-top .am-popover-caret {\n  left: 50%;\n  margin-left: -8px; }\n\n.am-popover-left .am-popover-caret {\n  left: auto;\n  right: -12px;\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.am-popover-right .am-popover-caret {\n  right: auto;\n  left: -12px;\n  -webkit-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  transform: rotate(-90deg); }\n\n.am-popover-left .am-popover-caret, .am-popover-right .am-popover-caret {\n  top: 50%;\n  margin-top: -4px; }\n\n.am-popover-sm {\n  font-size: 1.4rem; }\n\n.am-popover-sm .am-popover-inner {\n  padding: 5px; }\n\n.am-popover-lg {\n  font-size: 1.8rem; }\n\n.am-popover-primary {\n  border-color: #0e90d2; }\n\n.am-popover-primary .am-popover-inner {\n  background: #0e90d2; }\n\n.am-popover-primary .am-popover-caret {\n  border-bottom-color: #0e90d2; }\n\n.am-popover-secondary {\n  border-color: #3bb4f2; }\n\n.am-popover-secondary .am-popover-inner {\n  background: #3bb4f2; }\n\n.am-popover-secondary .am-popover-caret {\n  border-bottom-color: #3bb4f2; }\n\n.am-popover-success {\n  border-color: #5eb95e; }\n\n.am-popover-success .am-popover-inner {\n  background: #5eb95e; }\n\n.am-popover-success .am-popover-caret {\n  border-bottom-color: #5eb95e; }\n\n.am-popover-warning {\n  border-color: #F37B1D; }\n\n.am-popover-warning .am-popover-inner {\n  background: #F37B1D; }\n\n.am-popover-warning .am-popover-caret {\n  border-bottom-color: #F37B1D; }\n\n.am-popover-danger {\n  border-color: #dd514c; }\n\n.am-popover-danger .am-popover-inner {\n  background: #dd514c; }\n\n.am-popover-danger .am-popover-caret {\n  border-bottom-color: #dd514c; }\n\n#nprogress {\n  pointer-events: none; }\n\n#nprogress .nprogress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  width: 100%;\n  height: 2px;\n  background: #5eb95e; }\n\n#nprogress .nprogress-peg {\n  display: block;\n  position: absolute;\n  right: 0;\n  width: 100px;\n  height: 100%;\n  -webkit-box-shadow: 0 0 10px #5eb95e,0 0 5px #5eb95e;\n  box-shadow: 0 0 10px #5eb95e,0 0 5px #5eb95e;\n  opacity: 1;\n  -webkit-transform: rotate(3deg) translate(0, -4px);\n  -ms-transform: rotate(3deg) translate(0, -4px);\n  transform: rotate(3deg) translate(0, -4px); }\n\n#nprogress .nprogress-spinner {\n  position: fixed;\n  top: 15px;\n  right: 15px;\n  z-index: 2000;\n  display: block; }\n\n#nprogress .nprogress-spinner-icon {\n  width: 18px;\n  height: 18px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-top-color: #5eb95e;\n  border-left-color: #5eb95e;\n  border-radius: 50%;\n  -webkit-animation: nprogress-spinner .4s linear infinite;\n  animation: nprogress-spinner .4s linear infinite; }\n\n@-webkit-keyframes nprogress-spinner {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes nprogress-spinner {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.am-tabs-bd {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #ddd;\n  border-top: none;\n  z-index: 100;\n  -webkit-transition: height .3s;\n  transition: height .3s; }\n\n.am-tabs-bd:after, .am-tabs-bd:before {\n  content: \" \";\n  display: table; }\n\n.am-tabs-bd .am-tab-panel {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  float: left;\n  width: 100%;\n  padding: 10px 10px 15px;\n  visibility: hidden;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s,-webkit-transform .3s;\n  -webkit-transform: translateX(-100%);\n  -ms-transform: translateX(-100%);\n  transform: translateX(-100%); }\n\n.am-tabs-bd .am-tab-panel * {\n  -webkit-user-drag: none; }\n\n.am-tabs-bd .am-tab-panel.am-active {\n  position: relative;\n  z-index: 100;\n  visibility: visible;\n  -webkit-transform: translateX(0);\n  -ms-transform: translateX(0);\n  transform: translateX(0); }\n\n.am-tabs-bd .am-tab-panel.am-active ~ .am-tab-panel {\n  -webkit-transform: translateX(100%);\n  -ms-transform: translateX(100%);\n  transform: translateX(100%); }\n\n.am-tabs-bd .am-tabs-bd {\n  border: none; }\n\n.am-tabs-bd-ofv {\n  overflow: visible; }\n\n.am-tabs-fade .am-tab-panel {\n  opacity: 0;\n  -webkit-transition: opacity .25s linear;\n  transition: opacity .25s linear; }\n\n.am-tabs-fade .am-tab-panel.am-in {\n  opacity: 1; }\n\n.am-share {\n  font-size: 14px; }\n\n.am-share-title {\n  padding: 10px 0 0;\n  margin: 0 10px;\n  font-weight: 400;\n  text-align: center;\n  color: #555;\n  background-color: #f8f8f8;\n  border-bottom: 1px solid #fff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px; }\n\n.am-share-title:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 0;\n  margin-top: 10px;\n  border-bottom: 1px solid #dfdfdf; }\n\n.am-share-sns {\n  margin: 0 10px;\n  padding-top: 15px;\n  background-color: #f8f8f8;\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px; }\n\n.am-share-sns li {\n  margin-bottom: 15px; }\n\n.am-share-sns a {\n  display: block;\n  color: #555; }\n\n.am-share-sns span {\n  display: block; }\n\n.am-share-sns [class*=am-icon] {\n  background-color: #3bb4f2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  margin-bottom: 5px;\n  font-size: 18px; }\n\n.am-share-sns .am-icon-weibo {\n  background-color: #ea1328; }\n\n.am-share-sns .am-icon-qq {\n  background-color: #009cda; }\n\n.am-share-sns .am-icon-star {\n  background-color: #ffc028; }\n\n.am-share-sns .am-icon-tencent-weibo {\n  background-color: #23ccfe; }\n\n.am-share-sns .am-icon-wechat, .am-share-sns .am-icon-weixin {\n  background-color: #44b549; }\n\n.am-share-sns .am-icon-renren {\n  background-color: #105ba3; }\n\n.am-share-sns .am-icon-comment {\n  background-color: #5eb95e; }\n\n.am-share-footer {\n  margin: 10px; }\n\n.am-share-footer .am-btn {\n  color: #555; }\n\n.am-share-wechat-qr {\n  font-size: 14px;\n  color: #777; }\n\n.am-share-wechat-qr .am-modal-dialog {\n  background-color: #fff;\n  border: 1px solid #dedede; }\n\n.am-share-wechat-qr .am-modal-hd {\n  padding-top: 10px;\n  text-align: left;\n  margin-bottom: 10px; }\n\n.am-share-wechat-qr .am-share-wx-qr {\n  margin-bottom: 10px; }\n\n.am-share-wechat-qr .am-share-wechat-tip {\n  text-align: left; }\n\n.am-share-wechat-qr .am-share-wechat-tip em {\n  color: #dd514c;\n  font-weight: 700;\n  font-style: normal;\n  margin-left: 3px;\n  margin-right: 3px; }\n\n.am-pureview {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1120;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.95);\n  display: none;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s,-webkit-transform .3s;\n  -webkit-transform: translate(0, 100%);\n  -ms-transform: translate(0, 100%);\n  transform: translate(0, 100%); }\n\n.am-pureview-slider li.am-active, .am-pureview.am-active {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0); }\n\n.am-pureview.am-active {\n  transform: translate(0, 0); }\n\n.am-pureview ol, .am-pureview ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n\n.am-pureview-slider {\n  overflow: hidden;\n  height: 100%; }\n\n.am-pureview-slider li {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  vertical-align: middle;\n  -webkit-transition: all .3s linear;\n  transition: all .3s linear;\n  z-index: 100;\n  visibility: hidden; }\n\n.am-pureview-slider li.am-pureview-slide-prev {\n  -webkit-transform: translate(-100%, 0);\n  -ms-transform: translate(-100%, 0);\n  transform: translate(-100%, 0);\n  z-index: 109; }\n\n.am-pureview-slider li.am-pureview-slide-next {\n  -webkit-transform: translate(100%, 0);\n  -ms-transform: translate(100%, 0);\n  transform: translate(100%, 0);\n  z-index: 109; }\n\n.am-pureview-slider li.am-active {\n  position: relative;\n  z-index: 110;\n  transform: translate(0, 0);\n  visibility: visible; }\n\n.am-pureview-slider .pinch-zoom-container {\n  width: 100%;\n  z-index: 1121; }\n\n.am-pureview-slider .am-pinch-zoom {\n  position: relative;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.am-pureview-slider .am-pinch-zoom:after {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n  content: \"\\F110\";\n  -webkit-animation: icon-spin 2s infinite linear;\n  animation: icon-spin 2s infinite linear;\n  font-size: 24px;\n  line-height: 24px;\n  color: #eee;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -12px;\n  margin-top: -12px;\n  z-index: 1; }\n\n.am-pureview-slider .am-pinch-zoom.am-pureview-loaded:after {\n  display: none; }\n\n.am-pureview-slider img {\n  position: relative;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  opacity: 0;\n  z-index: 200;\n  -webkit-user-drag: none;\n  -webkit-transition: opacity .2s ease-in;\n  transition: opacity .2s ease-in; }\n\n.am-pureview-slider img.am-img-loaded {\n  opacity: 1; }\n\n.am-pureview-direction {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  margin-top: -18px !important;\n  z-index: 1122; }\n\n.am-pureview-only .am-pureview-direction, .am-touch .am-pureview-direction {\n  display: none; }\n\n.am-pureview-direction li {\n  position: absolute;\n  width: 36px;\n  height: 36px; }\n\n.am-pureview-direction a {\n  display: block;\n  height: 36px;\n  border: none;\n  color: #ccc;\n  opacity: .5;\n  cursor: pointer;\n  text-align: center;\n  z-index: 1125; }\n\n.am-pureview-actions, .am-pureview-bar {\n  height: 45px;\n  background-color: rgba(0, 0, 0, 0.35);\n  position: absolute; }\n\n.am-pureview-direction a:before {\n  content: \"\\F137\";\n  line-height: 36px;\n  font-size: 24px; }\n\n.am-pureview-direction a:hover {\n  opacity: 1; }\n\n.am-pureview-direction .am-pureview-prev {\n  left: 15px; }\n\n.am-pureview-direction .am-pureview-next {\n  right: 15px; }\n\n.am-pureview-direction .am-pureview-next a:before {\n  content: \"\\F138\"; }\n\n.am-pureview-bar {\n  bottom: 0;\n  width: 100%;\n  color: #eee;\n  line-height: 45px;\n  padding: 0 10px;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.am-pureview-bar .am-pureview-title {\n  display: block;\n  overflow: hidden;\n  margin-left: 6px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.am-pureview-bar .am-pureview-total {\n  font-size: 10px;\n  line-height: 48px; }\n\n.am-pureview-actions {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.am-pureview-actions a {\n  position: absolute;\n  left: 10px;\n  color: #ccc;\n  display: block;\n  width: 45px;\n  line-height: 45px;\n  text-align: left;\n  font-size: 16px; }\n\n.am-pureview-actions a:hover {\n  color: #fff; }\n\n.am-pureview-actions [data-am-toggle=share] {\n  left: auto;\n  right: 10px; }\n\n.am-pureview-actions, .am-pureview-bar {\n  opacity: 0;\n  -webkit-transition: all .15s;\n  transition: all .15s;\n  z-index: 1130; }\n\n.am-pureview-bar-active .am-pureview-actions, .am-pureview-bar-active .am-pureview-bar {\n  opacity: 1; }\n\n.am-checkbox .am-icon-checked, .am-checkbox-inline .am-icon-checked, .am-radio .am-icon-checked, .am-radio-inline .am-icon-checked, .am-ucheck-checkbox:checked + .am-ucheck-icons .am-icon-unchecked, .am-ucheck-radio:checked + .am-ucheck-icons .am-icon-unchecked {\n  opacity: 0; }\n\n.am-pureview-nav {\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 1131; }\n\n.am-pureview-bar-active .am-pureview-nav {\n  display: none; }\n\n.am-pureview-nav li {\n  display: inline-block;\n  background: #ccc;\n  background: rgba(255, 255, 255, 0.5);\n  width: 8px;\n  height: 8px;\n  margin: 0 3px;\n  border-radius: 50%;\n  text-indent: -9999px;\n  overflow: hidden;\n  cursor: pointer; }\n\n.am-pureview-nav .am-active {\n  background: #fff;\n  background: rgba(255, 255, 255, 0.9); }\n\n[data-am-pureview] img {\n  cursor: pointer; }\n\n.am-pureview-active {\n  overflow: hidden; }\n\n.ath-viewport * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ath-viewport {\n  position: relative;\n  z-index: 2147483641;\n  pointer-events: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  text-size-adjust: none; }\n\n.ath-container, .ath-modal {\n  pointer-events: auto !important; }\n\n.ath-modal {\n  background: rgba(0, 0, 0, 0.6); }\n\n.ath-mandatory {\n  background: #000; }\n\n.ath-container {\n  position: absolute;\n  z-index: 2147483641;\n  padding: .7em .6em;\n  width: 18em;\n  background: #eee;\n  -webkit-background-size: 100% auto;\n  background-size: 100% auto;\n  -webkit-box-shadow: 0 .2em 0 #d1d1d1;\n  box-shadow: 0 .2em 0 #d1d1d1;\n  font-family: sans-serif;\n  font-size: 15px;\n  line-height: 1.5em;\n  text-align: center; }\n\n.ath-action-icon, .ath-container:before {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  overflow: hidden; }\n\n.ath-container small {\n  font-size: .8em;\n  line-height: 1.3em;\n  display: block;\n  margin-top: .5em; }\n\n.ath-ios.ath-phone {\n  bottom: 1.8em;\n  left: 50%;\n  margin-left: -9em; }\n\n.ath-ios6.ath-tablet {\n  left: 5em;\n  top: 1.8em; }\n\n.ath-ios7.ath-tablet {\n  left: .7em;\n  top: 1.8em; }\n\n.ath-ios8.ath-tablet {\n  right: .4em;\n  top: 1.8em; }\n\n.ath-android {\n  bottom: 1.8em;\n  left: 50%;\n  margin-left: -9em; }\n\n.ath-container:before {\n  content: '';\n  position: relative;\n  display: block;\n  float: right;\n  margin: -.7em -.6em 0 .5em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAdVBMVEUAAAA5OTkzMzM7Ozs3NzdBQUFAQEA/Pz8+Pj5BQUFAQEA/Pz8+Pj5BQUFAQEA/Pz9BQUE+Pj4/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8+Pj4/Pz8+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8/Pz9AQEA/Pz+fdCaPAAAAJnRSTlMACQoNDjM4OTo7PEFCQ0RFS6ytsbS1tru8vcTFxu7x8vX19vf4+C5yomAAAAJESURBVHgBvdzLTsJAGEfxr4C2KBcVkQsIDsK8/yPaqIsPzVlyzrKrX/5p0kkXEz81L23otc9NpIbbWia2YVLqdnhlqFlhGWpSDHe1aopsSIpRb8gK0dC3G30b9rVmhWZIimTICsvQtx/FsuYOrWHoDjX3Gu31gzJxdki934WrAIOsAIOsAIOiAMPhPsJTgKGN0BVsYIVsYIVpYIVpYIVpYIVpYIVpYIVpYIVpYIVlAIVgEBRs8BRs8BRs8BRs8BRs8BRs8BRs8BRTNmgKNngKNngKNngKNngKNhiKGxgiOlZoBlaYBlaYBlaYBlaYBlaYBlaYBlaYBlZIBlBMfQMrVAMr2KAqBENSHFHhGEABhi5CV6gGUKgGUKgGUKgGUFwuqgEUvoEVsoEVpoEUpgEUggF+gKTKY+h1fxSlC7/Z+RrxOQ3fcEoAPPHZBlaYBlaYBlaYBlZYBlYIhvLBCstw7PgM7hkiWOEZWGEaWGEaWGEaIsakEAysmHkGVpxmvoEVqoEVpoEVpoEVpoEVpoEVpoEVkoEVgkFQsEFSsEFQsGEcoSvY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnY4CnmbNAUT2c2WAo2eAo2eAo2eAo2eAo2eArNEPFACjZ4CjZ4CjZ4CjaIird/rBvFH6llNCvewdli1URWCIakSIZesUaDoFg36dKFWk9zCZDei3TtwmCj7pC22AwikiIZPEU29IpFNliKxa/hC9DFITjQPYhcAAAAAElFTkSuQmCC);\n  background-color: rgba(255, 255, 255, 0.8);\n  -webkit-background-size: 50% 50%;\n  background-size: 50%;\n  width: 2.7em;\n  height: 2.7em;\n  text-align: center;\n  color: #a33;\n  z-index: 2147483642; }\n\n.ath-container.ath-icon:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  float: none; }\n\n.ath-mandatory .ath-container:before {\n  display: none; }\n\n.ath-container.ath-android:before {\n  float: left;\n  margin: -.7em .5em 0 -.6em; }\n\n.ath-container.ath-android.ath-icon:before {\n  position: absolute;\n  right: auto;\n  left: 0;\n  margin: 0;\n  float: none; }\n\n.ath-action-icon {\n  display: inline-block;\n  vertical-align: middle;\n  text-indent: -9999em; }\n\n.ath-ios7 .ath-action-icon, .ath-ios8 .ath-action-icon {\n  width: 1.6em;\n  height: 1.6em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACtCAYAAAB7l7tOAAAF6UlEQVR4AezZWWxUZRiH8VcQEdxZEFFiUZBFUCIa1ABBDARDcCciYGKMqTEGww3SOcNSAwQTjOBiiIpEhRjAhRgXRC8MFxojEhAFZUGttVhaoSxlaW3n8W3yXZxm6vTrOMM5Q98n+V9MMu1pvl++uZhKuypghu49KaaTWGdZSYoVN6VD95nMpLNYZ9XNbdQR2od2k88O3Gm6Bh0t7H0p5Vwp2Ax3ajpu2tYbciFWwkTFO63DY6+JcI4USFaSyYpWp8N7SVZJKR3EinkBk9JxvZFXxhnZSjBaoWp1ZL0ES8WKYXMZp0AndORgy8WKFe5Yf1zvvSBWDEpys2LU6MjD5kmEWQlGKsJRHXlcqUSQVcItEnDEA6gAb7LhjvD9WO6yIEfICQI5A1nzGCYB1T4og5bBiFcyv2f6ujYhl4iVxwKG6qp8MK55HsqPwK0rMr9v/yEo3uCPrJstVh5KMER30Aeh31Ioq0FrHfjXw9CYghnrvYFTuqfEymFzGSwBlT4ARYr7u+K6GLmCVGvAGg2NMG0d/sgJnpScZLjXSkC5z8H3eQ72/k24Q8NfzvwFyK4qtuJSZKaubRPyE/K/Mtx+EvCHL+7uasId1t10w0scz/RzSzYzAfgKV30D3LPaG7lRkR8RK4tKKJKAMp+D7r0EfmmOe0x3m2itAc/ZxBjgAt1mXHWKPPkdb+QGSTJdrDaU5EoJ2OtzwD0WwY7KNNzbRfMFFg24WPdtGHnS221Cflgsj56hjwTs8TnY7oq7/QDhjutGicsb2AVcovsO18l6uPPNNiE/JFaGAq7Q7fY50G4LYVtz3FrdaNGyBXbIl+q24DqhyHes9EaulwR3SwtZs+ktAT/7HORliru1gnCndONFyx44Dfn7MPLYN7yR6yTJZAllJeguAT/4HOBFz8I3ZWm4E0TLFbBD7qn7EVdtHYx53R9ZN0ksrZRuErDN5+AuLIWvm+Oe1k0ULdfADrmX7idcR0/DyBXeyCdlLuMMOGCBz4F1ng+f7yFcve5e0fIFHELeiav6BAx70Rt5p0yhY3u/wR0kyarW/uX35b403PtFyzewQ75ctwtXzSkY8WqruHslSV8RscrL6TJ1bcvfWJ0/HzbtIdw/ugdFyzdwOOAq3T6fmzxwGQ3vbmO8iFioIWqYSsHMj9M/ljfuTsOdItoZBXYBfXX7cVXVwvXLm/8+fU3lcdCqdEMNGBbgUmRmfQISQKd5sGEn4VK6YtEiAXYBA3QVuA4q8hCHrDcafR1ul65jewfuovsCl7vJrNlOuEbdo6JFCuwCrtb9hqusBu56Cw4cI1y1briIWEBn3Ue0XKPuMdGiBg4H9NdV0HJ/6QZLOEPmPN0GmpfSPS5arIBdwHUtIFfoBsl/ZsgfhHCfFi2WwC5goO4AmvanbqBkzJA76tboZokWa2AXMEi3RTdAvDLkDqJFAhzB32xFD2wZsGXA0WfAlgFbBmwZsGXAlgFbBpzk04JaKb0iA9ZnF9x5SQAFtRKKIgPWZxfaeRmwAZ/BGbAB37eaG6MCbnq2Aed5czYyKirgpmcbsAHHZAZswN0Wwo7KeG1fFf2jAm56dtzOQ42yB+65mDhWFBUwUETMUiMDNmADbp/APRaTAh6I2bpGCNw1bufRZJQ1cPdF/NueHZsgDEBBGLbMGoIu4AZu5gLOZeEaYmEXeznF3jRPyEv4frgJvvJe3qTefY0AAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwb8rwADBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgz4/sz1Nia/9hizA7zgklwy3RYwYMBzBRjw4bPjxAbAAizAAtwgwAIswAIswAIMGDBgARZgARZgAS4FWIAFWIAFWIABAwYswAIswAIswIUAC7AAC7AACzBgwIAFWIAFWIAFuBBgARZgARZgAQYMGPApQ99ZCdgWtzqwATbABtgAG2DbnxNb7zbRimsMLMACrDf2wMWI/WasfQAAAABJRU5ErkJggg==);\n  margin-top: -.3em;\n  -webkit-background-size: auto 100%;\n  background-size: auto 100%; }\n\n.ath-ios6 .ath-action-icon {\n  width: 1.8em;\n  height: 1.8em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAB0CAQAAADAmnOnAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAAWwEAAFsBAXkZiFwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAF4klEQVR4Ae3a/a+XdR3H8ec5HM45HDmKICoVohkZsxESRRCzcZM/2JKkdGR5MrSkleA0Pd00O4u5IVuNM2yYc6XSzCExU4oUNRPCJFdMUAhsYZpUGhscOHA4N8/WZzsL6HBxvofvdV3fa3yer//gsV3vH659KHzncBsJxUYhDzOEhCKQbORs+ip2wzgM+wvj+P9i35qAGLaHGcQSgKSTrxBLABJppZpYApCspoFYApBsZjSxBCD5OxOJJQBJG1cQSwCSLpqJJQCJ3MvgCGTinuSMCJS8LZwfgZL3FtMiUPIOcU0ESl4PLRHoRPsJtREoeRsYGYGS9yrvo6RmpbLaigWSfzOdErLs6+bLUMFA0sF1+QF1cz1UNlBYK9V5AHXyWSgEkKyiIWOgGh829Ki1lLcaxjCVK7mJRSxjBY+zgRf/u9pXcMB7jhEZAg32EUP3O6hMKOP5Iq2sZQeHMZXt5KKMgOpcY+iHVnFyjeQKlrCBdsxge5ieAVC9vzLUelI8H+A7bKIHM10H81IGGuKvDf1ggDxVTKOV1zG3/Yia1ICG+ltD32MgNTKfP2HuW0VDKkCNrjfUTOm9i6XswwrZJkaVHeh0f2fodkrtfO6jAytqrzG+rEDDfVG1x1sprZEs5RBW4PZxeT+Bbrf5hPu9arfzKaU6WjiAFbseWvoF1GW/6vYGSmkyW7Dit4xB5QHq9Br6Xx2t9GAhtp6zkoHsfNp1J9wX6H+jeR4LtJc4LxGopZZyNpN/YcG2mw9nBTSPLizgOmjKAujGgvJID3ekD7QYi7nGzkvmQtpA38Vi7iJf0TedlC7QTVjMfcY2QyvSBPpUMW/PIBfbo9pls1XpAX2EdizeznStob3OJpQO0DB2YfE21q2GtnghpAm0Gou3T9tm6BGHQppA12HRVt17eboNlydNoLHsx2JtmL801OYcQmkC/QKLtQt9ydBW3wNpA30ci7Ur3WdolUMhbaBqNhf/8qQJ9Hkszs5wjaH9XkUobaAqtmFRdoGbDb3sWMgG6DIs5852knO82RaXer+P+qyb3eWeo7ZNBrRZvm1otY2QFdBjeHIb6hTne49Put12+9ObMoDdYmfy5UkF6AK6cCCr9aM2u9IddptcOYCG+FNDB5xLKCugO7G01TndFp/xgAntdYvrfdwVLnORt3q9Vx25F27DUjbGPxr6qxMgW6Cd2N+d6wLXedA+6nKbK73Lr/pJxzusvE/wZrvX0FOOgGyBxmF/dprXutYOj6nNdS6xyYnWp/dGcaGdhr5vDWQN9E1MXrUzfcA2j2qPj/l1J1uT9iPOeh8w1O7nCGUN9HzyGZ7ndo9qp0ucanU2r1xH+wdDu5wIeQDVVx0+/kd1i697RNv8thdn+Qz4Uv9p6DeOhHyApmBfq3OBu+3Nfd7nVELZAX3Nw4ZarYG8gG7GY1dlk6/Zm3/2Rk8jlB1QvT82dNAmQjkBVf8Mj957fdrefM7ZVhPKEuidvmDob06CXIGGbsX/bZDf8KAhfdbJhLIGmuZuQ084HHIGatiLvRvrRkP6qldbBXkAzbfD0N0OhryBGqrEMOd50FC7d1hPKGugBh8ydMh5hPIGGouI1d5lj6F1vptQ9kDvcKOhN5wMlQH0QcRGnzC03yZCeQDN9G1D6xwBFQI07FI8x02GdjgB8gJqttPQcmuhYoAumzvG7YZWejrkA1TrPYYO+SVCFQO0aM4bqj0uJJQH0LluSP7PkyeQU9QOmyAvoBm+Zegpz4LKA/qYB/wE5AXUe3m81zqoRKAPOYWcuvP9dxvqcD6h7IAKkaNU3eUlHLcI9EzS5YlAi62h/zUy89QCqqKUmvgHywsJlEHnsQYxAvXVIJo5gIhnPhiBju1iNmLvLn85Ah1ZPYs5jBGo72awEzEC9dVwHqQHI9DxWoAYgSLQQKteGIESu/qhCJTYtT+PQBEoAkWgCBSBkotAEehUWwSKQBEoAkWg/BeBIlAEikARKAJFoFmealu4gVLy1Gt5dkARKAL9BzujPSurTmu/AAAAAElFTkSuQmCC);\n  margin-bottom: .4em;\n  -webkit-background-size: 100% auto;\n  background-size: 100% auto; }\n\n.ath-android .ath-action-icon {\n  width: 1.4em;\n  height: 1.4em;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEVmZmb///9mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZW6fJrAAAAEXRSTlMAAAYHG21ub8fLz9DR8/T4+RrZ9owAAAB3SURBVHja7dNLDoAgDATQWv4gKve/rEajJOJiWLgg6WzpSyB0aHqHiNj6nL1lovb4C+hYzkSNAT7mryQFAVOeGAj4CjwEtgrWXpD/uZKtwEJApXt+Vn0flzRhgNiFZQkOXY0aADQZCOCPlsZJ46Rx0jhp3IiN2wGDHhxtldrlwQAAAABJRU5ErkJggg==);\n  -webkit-background-size: 100% auto;\n  background-size: 100% auto; }\n\n.ath-container p {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 2147483642;\n  text-shadow: 0 .1em 0 #fff;\n  font-size: 1.1em; }\n\n.ath-ios.ath-phone:after, .ath-ios.ath-tablet:after {\n  content: '';\n  background: #eee;\n  position: absolute;\n  width: 2em;\n  height: 2em;\n  left: 50%;\n  margin-left: -1em; }\n\n.ath-ios.ath-phone:after {\n  bottom: -.9em;\n  -webkit-transform: scaleX(0.9) rotate(45deg);\n  -ms-transform: scaleX(0.9) rotate(45deg);\n  transform: scaleX(0.9) rotate(45deg);\n  -webkit-box-shadow: .2em .2em 0 #d1d1d1;\n  box-shadow: .2em .2em 0 #d1d1d1; }\n\n.ath-ios.ath-tablet:after {\n  top: -.9em;\n  -webkit-transform: scaleX(0.9) rotate(45deg);\n  -ms-transform: scaleX(0.9) rotate(45deg);\n  transform: scaleX(0.9) rotate(45deg);\n  z-index: 2147483641; }\n\n.ath-application-icon {\n  position: relative;\n  padding: 0;\n  border: 0;\n  margin: 0 auto .2em;\n  height: 6em;\n  width: 6em;\n  z-index: 2147483642; }\n\n.am-ucheck-checkbox, .am-ucheck-icons, .am-ucheck-radio {\n  height: 20px;\n  width: 20px;\n  top: 0;\n  left: 0;\n  position: absolute; }\n\n.ath-container.ath-ios .ath-application-icon {\n  border-radius: 1em;\n  -webkit-box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.3), inset 0 0.07em 0 rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.3), inset 0 0.07em 0 rgba(255, 255, 255, 0.5);\n  margin: 0 auto .4em; }\n\n@media only screen and (orientation: landscape) {\n  .ath-container.ath-phone {\n    width: 24em; }\n  .ath-android.ath-phone, .ath-ios.ath-phone {\n    margin-left: -12em; }\n  .ath-ios6:after {\n    left: 39%; }\n  .ath-ios8.ath-phone {\n    left: auto;\n    bottom: auto;\n    right: .4em;\n    top: 1.8em; }\n  .ath-ios8.ath-phone:after {\n    bottom: auto;\n    top: -.9em;\n    left: 68%;\n    z-index: 2147483641;\n    -webkit-box-shadow: none;\n    box-shadow: none; } }\n\n.am-checkbox, .am-checkbox-inline, .am-radio, .am-radio-inline {\n  padding-left: 22px;\n  position: relative;\n  -webkit-transition: color .25s linear;\n  transition: color .25s linear;\n  font-size: 14px;\n  line-height: 1.5; }\n\nlabel.am-checkbox, label.am-radio {\n  font-weight: 400; }\n\n.am-ucheck-icons {\n  color: #999;\n  display: block;\n  text-align: center;\n  line-height: 21px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.am-checkbox .am-icon-checked, .am-checkbox .am-icon-unchecked, .am-checkbox-inline .am-icon-checked, .am-checkbox-inline .am-icon-unchecked, .am-radio .am-icon-checked, .am-radio .am-icon-unchecked, .am-radio-inline .am-icon-checked, .am-radio-inline .am-icon-unchecked {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-table;\n  margin: 0;\n  background-color: transparent;\n  -webkit-transition: color .25s linear;\n  transition: color .25s linear; }\n\n.am-checkbox .am-icon-checked:before, .am-checkbox .am-icon-unchecked:before, .am-checkbox-inline .am-icon-checked:before, .am-checkbox-inline .am-icon-unchecked:before, .am-radio .am-icon-checked:before, .am-radio .am-icon-unchecked:before, .am-radio-inline .am-icon-checked:before, .am-radio-inline .am-icon-unchecked:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.am-checkbox .am-icon-checked:before, .am-checkbox-inline .am-icon-checked:before {\n  content: \"\\F046\"; }\n\n.am-checkbox .am-icon-unchecked:before, .am-checkbox-inline .am-icon-unchecked:before {\n  content: \"\\F096\"; }\n\n.am-radio .am-icon-checked:before, .am-radio-inline .am-icon-checked:before {\n  content: \"\\F192\"; }\n\n.am-radio .am-icon-unchecked:before, .am-radio-inline .am-icon-unchecked:before {\n  content: \"\\F10C\"; }\n\n.am-ucheck-checkbox, .am-ucheck-radio {\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  outline: 0 !important; }\n\n.am-ucheck-checkbox:checked + .am-ucheck-icons, .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-ucheck-radio:checked + .am-ucheck-icons, .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #0e90d2; }\n\n.am-ucheck-checkbox:checked + .am-ucheck-icons .am-icon-checked, .am-ucheck-radio:checked + .am-ucheck-icons .am-icon-checked {\n  opacity: 1; }\n\n.am-ucheck-checkbox:disabled + .am-ucheck-icons, .am-ucheck-radio:disabled + .am-ucheck-icons {\n  cursor: default;\n  color: #d8d8d8; }\n\n.am-ucheck-checkbox:disabled:checked + .am-ucheck-icons .am-icon-unchecked, .am-ucheck-radio:disabled:checked + .am-ucheck-icons .am-icon-unchecked {\n  opacity: 0; }\n\n.am-ucheck-checkbox:disabled:checked + .am-ucheck-icons .am-icon-checked, .am-ucheck-radio:disabled:checked + .am-ucheck-icons .am-icon-checked {\n  opacity: 1;\n  color: #d8d8d8; }\n\n.am-checkbox-inline.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox-inline.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox-inline.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox-inline.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio-inline.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio-inline.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-secondary .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio.am-secondary .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-secondary .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio.am-secondary .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #3bb4f2; }\n\n.am-checkbox-inline.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox-inline.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox-inline.am-success .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox-inline.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-success .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio-inline.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-success .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio-inline.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-success .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio.am-success .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-success .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio.am-success .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #5eb95e; }\n\n.am-checkbox-inline.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox-inline.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox-inline.am-warning .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox-inline.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-warning .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio-inline.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-warning .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio-inline.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-warning .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio.am-warning .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-warning .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio.am-warning .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #F37B1D; }\n\n.am-checkbox-inline.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox-inline.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox-inline.am-danger .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox-inline.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-checkbox.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-checkbox.am-danger .am-ucheck-radio:checked + .am-ucheck-icons, .am-checkbox.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-field-error + .am-ucheck-icons, .am-radio-inline.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio-inline.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio-inline.am-danger .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio-inline.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-danger .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-radio.am-danger .am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons, .am-radio.am-danger .am-ucheck-radio:checked + .am-ucheck-icons, .am-radio.am-danger .am-ucheck-radio:hover:not(.am-nohover):not(:disabled) + .am-ucheck-icons {\n  color: #dd514c; }\n\n.am-field-valid + .am-ucheck-icons {\n  color: #5eb95e; }\n\n.am-selected {\n  width: 200px; }\n\n.am-selected-btn {\n  width: 100%;\n  padding-left: 10px;\n  text-align: right; }\n\n.am-selected-btn.am-btn-default {\n  background: 0 0; }\n\n.am-invalid .am-selected-btn {\n  border-color: #dd514c; }\n\n.am-selected-header {\n  height: 45px;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #ddd;\n  display: none; }\n\n.am-selected-list .am-selected-text, .am-selected-status {\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-selected-status {\n  text-align: left;\n  width: 100%; }\n\n.am-selected-content {\n  padding: 10px 0; }\n\n.am-selected-search {\n  padding: 0 10px 10px; }\n\n.am-selected-search .am-form-field {\n  padding: .5em; }\n\n.am-selected-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 1.5rem; }\n\n.am-selected-list li {\n  position: relative;\n  cursor: pointer;\n  padding: 5px 10px;\n  -webkit-transition: background-color .15s;\n  transition: background-color .15s; }\n\n.am-selected-list li:hover {\n  background-color: #f8f8f8; }\n\n.am-selected-list li:hover .am-icon-check {\n  opacity: .6; }\n\n.am-selected-list li.am-checked .am-icon-check {\n  opacity: 1;\n  color: #0e90d2; }\n\n.am-selected-list li.am-disabled {\n  opacity: .5;\n  pointer-events: none;\n  cursor: not-allowed; }\n\n.am-selected-list .am-selected-list-header {\n  margin-top: 8px;\n  font-size: 1.3rem;\n  color: #999;\n  border-bottom: 1px solid #e5e5e5;\n  cursor: default; }\n\n.am-selected-list .am-selected-list-header:hover {\n  background: 0 0; }\n\n.am-selected-list .am-selected-list-header:first-child {\n  margin-top: 0; }\n\n.am-selected-list .am-selected-text {\n  margin-right: 30px; }\n\n.am-selected-list .am-icon-check {\n  position: absolute;\n  right: 8px;\n  top: 5px;\n  color: #999;\n  opacity: 0;\n  -webkit-transition: opacity .15s;\n  transition: opacity .15s; }\n\n.am-selected-hint {\n  line-height: 1.2;\n  color: #dd514c; }\n\n.am-selected-hint:not(:empty) {\n  margin-top: 10px;\n  border-top: 1px solid #e5e5e5;\n  padding: 10px 10px 0; }\n\n.am-selected-placeholder {\n  opacity: .65; }\n\n.am-fade {\n  opacity: 0;\n  -webkit-transition: opacity .2s linear;\n  transition: opacity .2s linear; }\n\n.am-fade.am-in {\n  opacity: 1; }\n\n.am-collapse {\n  display: none; }\n\n.am-collapse.am-in {\n  display: block; }\n\ntr.am-collapse.am-in {\n  display: table-row; }\n\ntbody.am-collapse.am-in {\n  display: table-row-group; }\n\n.am-datepicker, .am-dimmer {\n  top: 0;\n  left: 0;\n  display: none; }\n\n.am-collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height .3s ease;\n  transition: height .3s ease; }\n\n.am-sticky {\n  position: fixed !important;\n  z-index: 1010;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0; }\n\n[data-am-sticky][class*=am-animation-] {\n  -webkit-animation-duration: .2s;\n  animation-duration: .2s; }\n\n.am-dimmer-active {\n  overflow: hidden; }\n\n.am-dimmer {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1100;\n  opacity: 0; }\n\n.am-dimmer.am-active {\n  opacity: 1; }\n\n[data-am-collapse] {\n  cursor: pointer; }\n\n.am-datepicker {\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: 0 0 10px #ccc;\n  box-shadow: 0 0 10px #ccc;\n  padding-bottom: 10px;\n  margin-top: 10px;\n  width: 238px;\n  color: #555; }\n\n.am-datepicker table {\n  width: 100%; }\n\n.am-datepicker tr.am-datepicker-header {\n  font-size: 1.6rem;\n  color: #fff;\n  background: #3bb4f2; }\n\n.am-datepicker td, .am-datepicker th {\n  text-align: center;\n  font-weight: 400;\n  cursor: pointer; }\n\n.am-datepicker th {\n  height: 48px; }\n\n.am-datepicker td {\n  font-size: 1.4rem; }\n\n.am-datepicker td.am-datepicker-day {\n  height: 34px;\n  width: 34px; }\n\n.am-datepicker td.am-datepicker-day:hover {\n  background: #F0F0F0;\n  height: 34px;\n  width: 34px; }\n\n.am-datepicker td.am-datepicker-day.am-disabled {\n  cursor: no-drop;\n  color: #999;\n  background: #fafafa; }\n\n.am-datepicker td.am-datepicker-new, .am-datepicker td.am-datepicker-old {\n  color: #89d7ff; }\n\n.am-datepicker td.am-active, .am-datepicker td.am-active:hover {\n  border-radius: 0;\n  color: #0084c7;\n  background: #F0F0F0; }\n\n.am-datepicker td span {\n  display: block;\n  width: 79.33px;\n  height: 40px;\n  line-height: 40px;\n  float: left;\n  cursor: pointer; }\n\n.am-datepicker td span:hover {\n  background: #F0F0F0; }\n\n.am-datepicker td span.am-active {\n  color: #0084c7;\n  background: #F0F0F0; }\n\n.am-datepicker td span.am-disabled {\n  cursor: no-drop;\n  color: #999;\n  background: #fafafa; }\n\n.am-datepicker-next-icon:hover, .am-datepicker-prev-icon:hover, .am-datepicker-select:hover {\n  background: rgba(154, 217, 248, 0.5);\n  color: #0c80ba; }\n\n.am-datepicker td span.am-datepicker-old {\n  color: #89d7ff; }\n\n.am-datepicker .am-datepicker-dow {\n  height: 40px;\n  color: #0c80ba; }\n\n.am-datepicker-caret, .am-datepicker-up .am-datepicker-caret {\n  width: 0;\n  height: 0;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  vertical-align: middle; }\n\n.am-datepicker-caret {\n  display: block !important;\n  display: inline-block;\n  border-bottom: 7px solid #3bb4f2;\n  border-top: 0 dotted;\n  transform: rotate(360deg);\n  position: absolute;\n  top: -7px;\n  left: 6px; }\n\n.am-datepicker-right .am-datepicker-caret {\n  left: auto;\n  right: 7px; }\n\n.am-datepicker-up .am-datepicker-caret {\n  top: auto;\n  bottom: -7px;\n  display: inline-block;\n  border-top: 7px solid #fff;\n  border-bottom: 0 dotted;\n  -webkit-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n  transform: rotate(360deg); }\n\n.am-datepicker-next-icon:before, .am-datepicker-prev-icon:before {\n  display: inline-block;\n  text-rendering: auto;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0); }\n\n.am-datepicker-select {\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  -webkit-transition: background-color .3s ease-out;\n  transition: background-color .3s ease-out; }\n\n.am-datepicker-next, .am-datepicker-prev {\n  width: 34px;\n  height: 34px; }\n\n.am-datepicker-next-icon, .am-datepicker-prev-icon {\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  display: inline-block;\n  -webkit-transition: background-color .3s ease-out;\n  transition: background-color .3s ease-out; }\n\n.am-datepicker-prev-icon:before {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\"; }\n\n.am-accordion-default .am-accordion-title:before, .am-datepicker-next-icon:before {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif; }\n\n.am-datepicker-next-icon:before {\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F054\"; }\n\n.am-datepicker-dropdown {\n  position: absolute;\n  z-index: 1120; }\n\n@media only screen and (max-width: 640px) {\n  .am-datepicker {\n    width: 100%; }\n  .am-datepicker td span {\n    width: 33.33%; }\n  .am-datepicker-caret {\n    display: none !important; }\n  .am-datepicker-next, .am-datepicker-prev {\n    width: 44px;\n    height: 44px; } }\n\n.am-datepicker-date, .am-datepicker > div {\n  display: block; }\n\n.am-datepicker-success tr.am-datepicker-header {\n  background: #5eb95e; }\n\n.am-datepicker-success td.am-datepicker-day.am-disabled {\n  color: #999; }\n\n.am-datepicker-success td.am-datepicker-new, .am-datepicker-success td.am-datepicker-old {\n  color: #94df94; }\n\n.am-datepicker-success td.am-active, .am-datepicker-success td.am-active:hover {\n  color: #1b961b; }\n\n.am-datepicker-success td span.am-datepicker-old {\n  color: #94df94; }\n\n.am-datepicker-success td span.am-active {\n  color: #1b961b; }\n\n.am-datepicker-success .am-datepicker-caret {\n  border-bottom-color: #5eb95e; }\n\n.am-datepicker-success .am-datepicker-dow {\n  color: #367b36; }\n\n.am-datepicker-success .am-datepicker-next-icon:hover, .am-datepicker-success .am-datepicker-prev-icon:hover, .am-datepicker-success .am-datepicker-select:hover {\n  background: rgba(165, 216, 165, 0.5);\n  color: #367b36; }\n\n.am-datepicker-danger tr.am-datepicker-header {\n  background: #dd514c; }\n\n.am-datepicker-danger td.am-datepicker-day.am-disabled {\n  color: #999; }\n\n.am-datepicker-danger td.am-datepicker-new, .am-datepicker-danger td.am-datepicker-old {\n  color: #f59490; }\n\n.am-datepicker-danger td.am-active, .am-datepicker-danger td.am-active:hover {\n  color: #c10802; }\n\n.am-datepicker-danger td span.am-datepicker-old {\n  color: #f59490; }\n\n.am-datepicker-danger td span.am-active {\n  color: #c10802; }\n\n.am-datepicker-danger .am-datepicker-caret {\n  border-bottom-color: #dd514c; }\n\n.am-datepicker-danger .am-datepicker-dow {\n  color: #a4241f; }\n\n.am-datepicker-danger .am-datepicker-next-icon:hover, .am-datepicker-danger .am-datepicker-prev-icon:hover, .am-datepicker-danger .am-datepicker-select:hover {\n  background: rgba(237, 164, 162, 0.5);\n  color: #a4241f; }\n\n.am-datepicker-warning tr.am-datepicker-header {\n  background: #F37B1D; }\n\n.am-datepicker-warning td.am-datepicker-day.am-disabled {\n  color: #999; }\n\n.am-datepicker-warning td.am-datepicker-new, .am-datepicker-warning td.am-datepicker-old {\n  color: #ffad6d; }\n\n.am-datepicker-warning td.am-active, .am-datepicker-warning td.am-active:hover {\n  color: #aa4b00; }\n\n.am-datepicker-warning td span.am-datepicker-old {\n  color: #ffad6d; }\n\n.am-datepicker-warning td span.am-active {\n  color: #aa4b00; }\n\n.am-datepicker-warning .am-datepicker-caret {\n  border-bottom-color: #F37B1D; }\n\n.am-datepicker-warning .am-datepicker-dow {\n  color: #a14c09; }\n\n.am-datepicker-warning .am-datepicker-next-icon:hover, .am-datepicker-warning .am-datepicker-prev-icon:hover, .am-datepicker-warning .am-datepicker-select:hover {\n  background: rgba(248, 180, 126, 0.5);\n  color: #a14c09; }\n\n.am-datepicker > div span.am-datepicker-hour {\n  width: 59.5px; }\n\n.am-datepicker-date.am-input-group {\n  display: table; }\n\n.am-datepicker-time-box em, .am-datepicker-time-box strong {\n  display: inline-block;\n  height: 70px;\n  line-height: 70px;\n  font-size: 5.2rem; }\n\n.am-datepicker-time-box {\n  padding: 30px 0; }\n\n.am-datepicker-time-box strong {\n  width: 70px;\n  font-weight: 400; }\n\n.am-datepicker-time-box strong:hover {\n  border-radius: 4px;\n  background: #ECECEC; }\n\n.am-datepicker-time-box em {\n  width: 20px;\n  font-style: normal; }\n\n.am-datepicker-toggle {\n  text-align: center;\n  cursor: pointer;\n  padding: 10px 0; }\n\n.am-datepicker-toggle:hover {\n  background: #f0f0f0; }\n\n@media print {\n  blockquote, img, pre, tr {\n    page-break-inside: avoid; }\n  *, :after, :before {\n    background: 0 0 !important;\n    color: #000 !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a, a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" [\" attr(title) \"] \"; }\n  a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after {\n    content: \"\"; }\n  blockquote, pre {\n    border: 1px solid #999; }\n  thead {\n    display: table-header-group; }\n  img {\n    max-width: 100% !important; }\n  h2, h3, p {\n    orphans: 3;\n    widows: 3; }\n  h2, h3 {\n    page-break-after: avoid; }\n  @page {\n    margin: .5cm; }\n  select {\n    background: #fff !important; }\n  .am-topbar {\n    display: none; }\n  .am-table td, .am-table th {\n    background-color: #fff !important; }\n  .am-table {\n    border-collapse: collapse !important; }\n  .am-table-bordered td, .am-table-bordered th {\n    border: 1px solid #ddd !important; } }\n\n.am-print-block {\n  display: none !important; }\n\n@media print {\n  .am-print-block {\n    display: block !important; } }\n\n.am-print-inline {\n  display: none !important; }\n\n@media print {\n  .am-print-inline {\n    display: inline !important; } }\n\n.am-print-inline-block {\n  display: none !important; }\n\n@media print {\n  .am-print-inline-block {\n    display: inline-block !important; }\n  .am-print-hide {\n    display: none !important; } }\n\n.lte9 #nprogress .nprogress-spinner {\n  display: none !important; }\n\n.lte8 .am-dimmer {\n  background-color: #000;\n  filter: alpha(opacity=60); }\n\n.lte8 .am-modal-actions {\n  display: none; }\n\n.lte8 .am-modal-actions.am-modal-active {\n  display: block; }\n\n.am-accordion-basic .am-accordion-title:before, .am-accordion-default .am-accordion-title:before {\n  display: inline-block;\n  text-rendering: auto;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\F0DA\"; }\n\n.lte8 .am-offcanvas.am-active {\n  background: #000; }\n\n.lte8 .am-popover .am-popover-caret {\n  border: 8px solid transparent; }\n\n.lte8 .am-popover-top .am-popover-caret {\n  border-top: 8px solid #333;\n  border-bottom: none; }\n\n.lte8 .am-popover-left .am-popover-caret {\n  right: -8px;\n  margin-top: -6px;\n  border-left: 8px solid #333;\n  border-right: none; }\n\n.lte8 .am-popover-right .am-popover-caret {\n  left: -8px;\n  margin-top: -6px;\n  border-right: 8px solid #333;\n  border-left: none; }\n\n.am-accordion-item {\n  margin: 0; }\n\n.am-accordion-title {\n  font-weight: 400;\n  cursor: pointer; }\n\n.am-accordion-item.am-disabled .am-accordion-title {\n  cursor: default;\n  pointer-events: none; }\n\n.am-accordion-bd {\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important; }\n\n.am-accordion-content {\n  margin-top: 0;\n  padding: .8rem 1rem 1.2rem;\n  font-size: 1.4rem; }\n\n.am-accordion-default {\n  margin: 1rem;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); }\n\n.am-accordion-default .am-accordion-item {\n  border-top: 1px solid rgba(0, 0, 0, 0.05); }\n\n.am-accordion-default .am-accordion-item:first-child {\n  border-top: none; }\n\n.am-accordion-default .am-accordion-title {\n  color: rgba(0, 0, 0, 0.6);\n  -webkit-transition: background-color .2s ease-out;\n  transition: background-color .2s ease-out;\n  padding: .8rem 1rem; }\n\n.am-accordion-default .am-accordion-title:before {\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n  -webkit-transition: -webkit-transform .2s ease;\n  transition: -webkit-transform .2s ease;\n  transition: transform .2s ease;\n  transition: transform .2s ease,-webkit-transform .2s ease;\n  -webkit-transform: rotate(0);\n  -ms-transform: rotate(0);\n  transform: rotate(0);\n  margin-right: 5px; }\n\n.am-accordion-default .am-accordion-title:hover {\n  color: #0e90d2; }\n\n.am-accordion-default .am-accordion-content {\n  color: #666; }\n\n.am-accordion-default .am-active .am-accordion-title {\n  background-color: #eee;\n  color: #0e90d2; }\n\n.am-accordion-default .am-active .am-accordion-title:before {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.am-accordion-basic {\n  margin: 1rem; }\n\n.am-accordion-basic .am-accordion-title {\n  color: #333;\n  -webkit-transition: background-color .2s ease-out;\n  transition: background-color .2s ease-out;\n  padding: .8rem 0 0; }\n\n.am-accordion-basic .am-accordion-title:before {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n  -webkit-transition: -webkit-transform .2s ease;\n  transition: -webkit-transform .2s ease;\n  transition: transform .2s ease;\n  transition: transform .2s ease,-webkit-transform .2s ease;\n  -webkit-transform: rotate(0);\n  -ms-transform: rotate(0);\n  transform: rotate(0);\n  margin-right: .5rem; }\n\n.am-accordion-basic .am-accordion-content {\n  color: #666; }\n\n.am-accordion-basic .am-active .am-accordion-title {\n  color: #0e90d2; }\n\n.am-accordion-basic .am-active .am-accordion-title:before {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.am-accordion-gapped .am-accordion-title:after, .am-figure-zoomable:after {\n  display: inline-block;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  text-rendering: auto;\n  -moz-osx-font-smoothing: grayscale; }\n\n.am-accordion-gapped {\n  margin: .5rem 1rem; }\n\n.am-accordion-gapped .am-accordion-item {\n  border: 1px solid #dedede;\n  border-bottom: none;\n  margin: .5rem 0; }\n\n.am-accordion-gapped .am-accordion-item.am-active {\n  border-bottom: 1px solid #dedede; }\n\n.am-accordion-gapped .am-accordion-title {\n  color: rgba(0, 0, 0, 0.6);\n  -webkit-transition: background-color .15s ease-out;\n  transition: background-color .15s ease-out;\n  border-bottom: 1px solid #dedede;\n  padding: .8rem 2rem .8rem 1rem;\n  position: relative; }\n\n.am-accordion-gapped .am-accordion-title:after {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  font-size: inherit;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F105\";\n  -webkit-transition: -webkit-transform .2s linear;\n  transition: -webkit-transform .2s linear;\n  transition: transform .2s linear;\n  transition: transform .2s linear,-webkit-transform .2s linear;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -.8rem; }\n\n.am-accordion-gapped .am-accordion-title:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.am-accordion-gapped .am-accordion-content {\n  color: #666; }\n\n.am-accordion-gapped .am-active .am-accordion-title {\n  background-color: #f5f5f5;\n  color: rgba(0, 0, 0, 0.8); }\n\n.am-accordion-gapped .am-active .am-accordion-title:after {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.am-divider {\n  height: 0;\n  margin: 1.5rem auto;\n  overflow: hidden; }\n\n.am-divider-default {\n  border-top: 1px solid #ddd; }\n\n.am-divider-dotted {\n  border-top: 1px dotted #ccc; }\n\n.am-divider-dashed {\n  border-top: 1px dashed #ccc; }\n\n.am-figure-zoomable {\n  position: relative;\n  cursor: pointer; }\n\n.am-figure-zoomable:after {\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F00E\";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #999;\n  font-size: 1.6rem;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n  pointer-events: none; }\n\n.am-figure-zoomable:hover:after {\n  color: #eee; }\n\n.am-figure-default {\n  margin: 10px; }\n\n.am-figure-default img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  padding: 2px;\n  border: 1px solid #eee;\n  margin: 10px auto; }\n\n.am-figure-default figcaption {\n  text-align: center;\n  font-size: 1.4rem;\n  margin-bottom: 15px;\n  color: #333; }\n\n.am-footer {\n  text-align: center;\n  padding: 1em 0;\n  font-size: 1.6rem; }\n\n.am-footer .am-switch-mode-ysp {\n  cursor: pointer; }\n\n.am-footer .am-footer-text {\n  margin-top: 10px;\n  font-size: 14px; }\n\n.am-footer .am-footer-text-left {\n  text-align: left;\n  padding-left: 10px; }\n\n.am-modal-footer-hd {\n  padding-bottom: 10px; }\n\n.am-footer-default {\n  background-color: #fff; }\n\n.am-footer-default a {\n  color: #555; }\n\n.am-footer-default .am-footer-switch {\n  margin-bottom: 10px;\n  font-weight: 700; }\n\n.am-footer-default .am-footer-ysp {\n  color: #555;\n  cursor: pointer; }\n\n.am-footer-default .am-footer-divider {\n  color: #ccc; }\n\n.am-footer-default .am-footer-desktop {\n  color: #0e90d2; }\n\n.am-footer-default .am-footer-miscs {\n  color: #999;\n  font-size: 13px; }\n\n.am-footer-default .am-footer-miscs p {\n  margin: 5px 0; }\n\n@media only screen and (min-width: 641px) {\n  .am-footer-default .am-footer-miscs p {\n    display: inline-block;\n    margin: 5px; } }\n\n.am-gallery-default .am-gallery-title, .am-gallery-overlay .am-gallery-title {\n  font-weight: 400;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-gallery {\n  padding: 5px 5px 0;\n  list-style: none; }\n\n.am-gallery-bordered > li, .am-gallery-default > li, .am-gallery-imgbordered > li, .am-gallery-overlay > li {\n  padding: 5px; }\n\n.am-gallery h3 {\n  margin: 0; }\n\n[data-am-gallery*=pureview] img {\n  cursor: pointer; }\n\n.am-gallery-default .am-gallery-item img {\n  width: 100%;\n  height: auto; }\n\n.am-gallery-default .am-gallery-title {\n  margin-top: 10px;\n  font-size: 1.4rem;\n  color: #555; }\n\n.am-gallery-default .am-gallery-desc {\n  color: #999;\n  font-size: 1.2rem; }\n\n.am-gallery-overlay .am-gallery-item {\n  position: relative; }\n\n.am-gallery-overlay .am-gallery-item img {\n  width: 100%;\n  height: auto; }\n\n.am-gallery-overlay .am-gallery-title {\n  font-size: 1.4rem;\n  color: #FFF;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  text-indent: 5px;\n  height: 30px;\n  line-height: 30px; }\n\n.am-gallery-overlay .am-gallery-desc {\n  display: none; }\n\n.am-gallery-bordered .am-gallery-title, .am-gallery-imgbordered .am-gallery-title {\n  margin-top: 10px;\n  display: block;\n  font-weight: 400;\n  overflow: hidden;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.am-gallery-bordered .am-gallery-item {\n  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 5px; }\n\n.am-gallery-bordered .am-gallery-item img {\n  width: 100%;\n  height: auto; }\n\n.am-gallery-bordered .am-gallery-title {\n  font-size: 1.4rem;\n  color: #555; }\n\n.am-gallery-bordered .am-gallery-desc {\n  color: #999;\n  font-size: 1.2rem; }\n\n.am-gallery-imgbordered .am-gallery-item img {\n  width: 100%;\n  height: auto;\n  border: 3px solid #FFF;\n  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35); }\n\n.am-gallery-imgbordered .am-gallery-title {\n  font-size: 1.4rem;\n  color: #555; }\n\n.am-gallery-imgbordered .am-gallery-desc {\n  color: #999;\n  font-size: 1.2rem; }\n\n.am-gotop a {\n  display: inline-block;\n  text-decoration: none; }\n\n.am-gotop-default {\n  text-align: center;\n  margin: 10px 0; }\n\n.am-gotop-default a {\n  background-color: #0e90d2;\n  padding: .5em 1.5em;\n  border-radius: 0;\n  color: #fff; }\n\n.am-gotop-default a img {\n  display: none; }\n\n.am-gotop-fixed {\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  z-index: 1010;\n  opacity: 0;\n  width: 32px;\n  min-height: 32px;\n  overflow: hidden;\n  border-radius: 0;\n  text-align: center; }\n\n.am-gotop-fixed.am-active {\n  opacity: .9; }\n\n.am-gotop-fixed.am-active:hover {\n  opacity: 1; }\n\n.am-gotop-fixed a {\n  display: block; }\n\n.am-gotop-fixed .am-gotop-title {\n  display: none; }\n\n.am-gotop-fixed .am-gotop-icon-custom {\n  display: inline-block;\n  max-width: 30px;\n  vertical-align: middle; }\n\n.am-intro img, .am-paragraph img {\n  max-width: 100%; }\n\n.am-gotop-fixed .am-gotop-icon {\n  width: 100%;\n  line-height: 32px;\n  background-color: #555;\n  vertical-align: middle;\n  color: #ddd; }\n\n.am-gotop-fixed .am-gotop-icon:hover, .am-header-default .am-header-title, .am-header-default .am-header-title a {\n  color: #fff; }\n\n.am-with-fixed-navbar .am-gotop-fixed {\n  bottom: 60px; }\n\n.am-header {\n  position: relative;\n  width: 100%;\n  height: 49px;\n  line-height: 49px;\n  padding: 0 10px; }\n\n.am-header h1 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.am-header .am-header-title {\n  margin: 0 30%;\n  font-size: 2rem;\n  font-weight: 400;\n  text-align: center;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-header .am-header-title img {\n  margin-top: 12px;\n  height: 25px;\n  vertical-align: top; }\n\n.am-header .am-header-nav {\n  position: absolute;\n  top: 0; }\n\n.am-header .am-header-nav img {\n  height: 16px;\n  width: auto;\n  vertical-align: middle; }\n\n.am-header .am-header-left {\n  left: 10px; }\n\n.am-header .am-header-right {\n  right: 10px; }\n\n.am-header-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 1010; }\n\n.am-intro, .am-intro-hd {\n  position: relative; }\n\n.am-with-fixed-header {\n  padding-top: 49px; }\n\n.am-header-default {\n  background-color: #0e90d2; }\n\n.am-header-default .am-header-icon {\n  font-size: 20px; }\n\n.am-header-default .am-header-nav {\n  color: #eee; }\n\n.am-header-default .am-header-nav > a {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  color: #eee; }\n\n.am-header-default .am-header-nav > a + a {\n  margin-left: 5px; }\n\n.am-header-default .am-header-nav .am-btn {\n  margin-top: 9px;\n  height: 31px;\n  padding: 0 .5em;\n  line-height: 30px;\n  font-size: 14px;\n  vertical-align: top; }\n\n.am-intro-title, .am-list-news .am-list-item-hd, .am-list-news-hd h3 {\n  margin: 0; }\n\n.am-header-default .am-header-nav .am-btn .am-header-icon {\n  font-size: inherit; }\n\n.am-header-default .am-header-nav .am-btn-default {\n  color: #999; }\n\n.am-header-default .am-header-nav-title, .am-header-default .am-header-nav-title + .am-header-icon {\n  font-size: 14px; }\n\n.am-intro-hd {\n  height: 45px;\n  line-height: 45px; }\n\n.am-intro-title {\n  font-size: 18px;\n  font-weight: 700; }\n\n.am-intro-more-top {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  font-size: 1.4rem; }\n\n.am-intro-bd {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 1.4rem; }\n\n.am-intro-bd p:last-child {\n  margin-bottom: 0; }\n\n.am-intro-more-bottom {\n  text-align: center; }\n\n.am-intro-more-bottom .am-btn {\n  font-size: 14px; }\n\n.am-intro-default .am-intro-hd {\n  background-color: #0e90d2;\n  color: #fff;\n  padding: 0 10px; }\n\n.am-intro-default .am-intro-hd a {\n  color: #eee; }\n\n.am-intro-default .am-intro-right {\n  padding-left: 0; }\n\n.am-list-news-hd {\n  padding-top: 1.2rem;\n  padding-bottom: .8rem; }\n\n.am-list-news-hd a {\n  display: block; }\n\n.am-list-news-hd h2 {\n  font-size: 1.6rem;\n  float: left;\n  margin: 0;\n  height: 2rem;\n  line-height: 2rem; }\n\n.am-list-news-hd .am-list-news-more {\n  font-size: 1.3rem;\n  height: 2rem;\n  line-height: 2rem; }\n\n.am-list .am-list-item-dated a {\n  padding-right: 80px;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-list .am-list-item-dated a::after {\n  display: none; }\n\n.am-list .am-list-item-desced a, .am-list .am-list-item-thumbed a {\n  padding-right: 0; }\n\n.am-list-date {\n  position: absolute;\n  right: 5px;\n  font-size: 1.3rem;\n  top: 1.3rem; }\n\n.am-list-item-desced {\n  padding-bottom: 1rem; }\n\n.am-list-item-desced > a {\n  padding: 1rem 0; }\n\n.am-list-news-default .am-list .am-list-item-thumb-bottom-left .am-list-thumb, .am-list-news-default .am-list .am-list-item-thumb-left .am-list-thumb {\n  padding-left: 0; }\n\n.am-list-news-default .am-list .am-list-item-thumb-bottom-right .am-list-thumb, .am-list-news-default .am-list .am-list-item-thumb-right .am-list-thumb {\n  padding-right: 0; }\n\n.am-list-item-desced .am-list-date {\n  position: static; }\n\n.am-list-item-thumbed {\n  padding-top: 1em; }\n\n.am-list-news-ft {\n  text-align: center; }\n\n.am-list-news .am-titlebar {\n  margin-left: 0;\n  margin-right: 0; }\n\n.am-list-news .am-titlebar ~ .am-list-news-bd .am-list > li:first-child {\n  border-top: none; }\n\n.am-list-news-default {\n  margin: 10px; }\n\n.am-list-news-default .am-g {\n  margin-left: auto;\n  margin-right: auto; }\n\n.am-list-news-default .am-list-item-hd {\n  font-weight: 400; }\n\n.am-list-news-default .am-list-date {\n  color: #999; }\n\n.am-list-news-default .am-list > li {\n  border-color: #dedede; }\n\n.am-list-news-default .am-list .am-list-item-desced {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.am-list-news-default .am-list .am-list-item-desced .am-list-main, .am-list-news-default .am-list .am-list-item-desced > a, .am-list-news-default .am-list .am-list-item-thumb-top .am-list-main {\n  padding: 0; }\n\n.am-list-news-default .am-list .am-list-item-desced .am-list-item-text {\n  margin-top: .5rem;\n  color: #757575; }\n\n.am-list-news-default .am-list .am-list-item-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  line-height: 1.3em;\n  -webkit-line-clamp: 2;\n  max-height: 2.6em; }\n\n.am-list-news-default .am-list .am-list-item-thumb-top .am-list-thumb {\n  padding: 0;\n  margin-bottom: .8rem; }\n\n.am-list-news-default .am-list .am-list-item-thumb-bottom-left .am-list-item-hd, .am-list-news-default .am-list .am-list-item-thumb-bottom-right .am-list-item-hd {\n  clear: both;\n  padding-bottom: .5rem; }\n\n.am-list-news-default .am-list .am-list-thumb img {\n  width: 100%;\n  display: block; }\n\n@media only screen and (max-width: 640px) {\n  .am-list-news-default .am-list-item-thumb-left .am-list-thumb, .am-list-news-default .am-list-item-thumb-right .am-list-thumb {\n    max-height: 80px;\n    overflow: hidden; }\n  .am-list-news-default .am-list-item-thumb-bottom-left .am-list-item-text, .am-list-news-default .am-list-item-thumb-bottom-right .am-list-item-text {\n    -webkit-line-clamp: 3;\n    max-height: 3.9em; }\n  .am-list-news-default .am-list-item-thumb-bottom-left .am-list-thumb, .am-list-news-default .am-list-item-thumb-bottom-right .am-list-thumb {\n    max-height: 60px;\n    overflow: hidden; } }\n\n.am-map {\n  width: 100%;\n  height: 300px; }\n\n.am-map-default #bd-map {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.4 !important; }\n\n.am-map-default .BMap_bubble_title {\n  font-weight: 700; }\n\n.am-map-default #BMap_mask {\n  width: 100%; }\n\n.am-mechat {\n  margin: 1rem; }\n\n.am-menu, .am-menu ul {\n  padding: 0;\n  margin: 0; }\n\n.am-mechat .section-cbox-wap .cbox-post-wap .post-action-wap .action-function-wap .function-list-wap .list-upload-wap .upload-mutual-wap {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.am-menu {\n  position: relative; }\n\n.am-menu li {\n  list-style: none; }\n\n.am-menu a:after, .am-menu a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.am-menu-sub {\n  z-index: 1050; }\n\n.am-menu-toggle {\n  display: none;\n  z-index: 1015; }\n\n.am-menu-toggle img {\n  display: inline-block;\n  height: 16px;\n  width: auto;\n  vertical-align: middle; }\n\n.am-menu-nav a {\n  display: block;\n  padding: .8rem 0;\n  -webkit-transition: all .45s;\n  transition: all .45s; }\n\n.am-menu-default .am-menu-nav {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.am-menu-default .am-menu-nav a {\n  text-align: center;\n  height: 36px;\n  line-height: 36px;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n  color: #0e90d2; }\n\n.am-menu-default .am-menu-nav > .am-parent > a {\n  position: relative;\n  -webkit-transition: .15s;\n  transition: .15s; }\n\n.am-menu-default .am-menu-nav > .am-parent > a:after {\n  content: \"\\F107\";\n  margin-left: 5px;\n  -webkit-transition: .15s;\n  transition: .15s; }\n\n.am-menu-default .am-menu-nav > .am-parent > a:before {\n  position: absolute;\n  top: 100%;\n  margin-top: -16px;\n  left: 50%;\n  margin-left: -12px;\n  content: \"\\F0D8\";\n  display: none;\n  color: #f1f1f1;\n  font-size: 24px; }\n\n.am-menu-default .am-menu-nav > .am-parent.am-open > a {\n  color: #095f8a; }\n\n.am-menu-default .am-menu-nav > .am-parent.am-open > a:before {\n  display: block; }\n\n.am-menu-default .am-menu-nav > .am-parent.am-open > a:after {\n  -webkit-transform: rotate(-180deg);\n  -ms-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n\n.am-menu-default .am-menu-sub {\n  position: absolute;\n  left: 5px;\n  right: 5px;\n  background-color: #f1f1f1;\n  border-radius: 0;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.am-menu-default .am-menu-sub > li > a {\n  color: #555; }\n\n@media only screen and (min-width: 641px) {\n  .am-menu-default .am-menu-nav li {\n    width: auto;\n    float: left;\n    clear: none;\n    display: inline; }\n  .am-menu-default .am-menu-nav a {\n    padding-left: 1.5rem;\n    padding-right: .5rem; } }\n\n.am-menu-dropdown1 {\n  position: relative; }\n\n.am-menu-dropdown1 .am-menu-toggle {\n  position: absolute;\n  right: 5px;\n  top: -47px;\n  display: block;\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  color: #fff; }\n\n.am-menu-dropdown1 a {\n  -webkit-transition: all .4s;\n  transition: all .4s;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-menu-dropdown1 .am-menu-nav {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1050; }\n\n.am-menu-dropdown1 .am-menu-nav a {\n  padding: .8rem; }\n\n.am-menu-dropdown1 .am-menu-nav > li {\n  width: 100%; }\n\n.am-menu-dropdown1 .am-menu-nav > li.am-parent > a {\n  position: relative; }\n\n.am-menu-dropdown1 .am-menu-nav > li.am-parent > a::before {\n  content: \"\\F067\";\n  position: absolute;\n  right: 1rem;\n  top: 1.4rem; }\n\n.am-menu-dropdown1 .am-menu-nav > li.am-parent.am-open > a {\n  background-color: #0c80ba;\n  border-bottom: none;\n  color: #fff; }\n\n.am-menu-dropdown1 .am-menu-nav > li.am-parent.am-open > a:before {\n  content: \"\\F068\"; }\n\n.am-menu-dropdown1 .am-menu-nav > li.am-parent.am-open > a:after {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-top: 8px solid #0c80ba;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n  border-bottom: 0 dotted;\n  -webkit-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n  transform: rotate(360deg);\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -4px; }\n\n.am-menu-dropdown1 .am-menu-nav > li > a {\n  border-bottom: 1px solid #0b76ac;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  background-color: #0e90d2;\n  color: #fff;\n  height: 49px;\n  line-height: 49px;\n  padding: 0;\n  text-indent: 10px; }\n\n.am-menu-dropdown1 .am-menu-sub {\n  background-color: #fff; }\n\n.am-menu-dropdown1 .am-menu-sub a {\n  color: #555;\n  height: 44px;\n  line-height: 44px;\n  text-indent: 5px;\n  padding: 0; }\n\n.am-menu-dropdown1 .am-menu-sub a:before {\n  content: \"\\F105\";\n  color: #aaa;\n  font-size: 16px;\n  margin-right: 5px; }\n\n.am-menu-dropdown2 .am-menu-toggle {\n  position: absolute;\n  right: 5px;\n  top: -47px;\n  display: block;\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  color: #fff; }\n\n.am-menu-dropdown2 .am-menu-nav {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background-color: #f5f5f5;\n  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  z-index: 1050;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.am-menu-dropdown2 .am-menu-nav > li.am-parent.am-open > a, .am-menu-dropdown2 .am-menu-nav > li.am-parent > a {\n  position: relative; }\n\n.am-menu-dropdown2 .am-menu-nav a {\n  height: 38px;\n  line-height: 38px;\n  padding: 0;\n  text-align: center; }\n\n.am-menu-dropdown2 .am-menu-nav > li > a {\n  color: #333; }\n\n.am-menu-dropdown2 .am-menu-nav > li.am-parent > a:after {\n  content: \"\\F107\";\n  margin-left: 5px;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s,-webkit-transform .2s; }\n\n.am-menu-dropdown2 .am-menu-nav > li.am-parent.am-open > a:after {\n  color: #0e90d2;\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.am-menu-dropdown2 .am-menu-nav > li.am-parent.am-open > a:before {\n  position: absolute;\n  top: 100%;\n  margin-top: -16px;\n  left: 50%;\n  margin-left: -12px;\n  font-size: 24px;\n  content: \"\\F0D8\";\n  color: rgba(0, 0, 0, 0.2); }\n\n.am-menu-dropdown2 .am-menu-sub {\n  position: absolute;\n  left: 5px;\n  right: 5px;\n  padding: 8px 0;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);\n  background-color: #fff;\n  z-index: 1055; }\n\n.am-menu-dropdown2 .am-menu-sub a {\n  padding: 0;\n  height: 35px;\n  color: #555;\n  line-height: 35px; }\n\n@media only screen and (min-width: 641px) {\n  .am-menu-dropdown2 .am-menu-toggle {\n    display: none !important; }\n  .am-menu-dropdown2 .am-menu-nav {\n    position: static;\n    display: block; }\n  .am-menu-dropdown2 .am-menu-nav > li {\n    float: none;\n    width: auto;\n    display: inline-block; }\n  .am-menu-dropdown2 .am-menu-nav > li a {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n  .am-menu-dropdown2 .am-menu-sub {\n    left: auto;\n    right: auto; }\n  .am-menu-dropdown2 .am-menu-sub > li {\n    float: none;\n    width: auto; }\n  .am-menu-dropdown2 .am-menu-sub a {\n    padding-left: 2rem;\n    padding-right: 2rem; } }\n\n.am-menu-slide1 .am-menu-toggle {\n  position: absolute;\n  right: 5px;\n  top: -47px;\n  display: block;\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  color: #fff; }\n\n.am-menu-slide1 .am-menu-nav {\n  background-color: #f5f5f5;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.am-menu-slide1 .am-menu-nav.am-in:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n  content: \"\\F0D8\";\n  font-size: 24px;\n  color: #f5f5f5;\n  position: absolute;\n  right: 16px;\n  top: -16px; }\n\n.am-menu-slide1 .am-menu-nav a {\n  line-height: 38px;\n  height: 38px;\n  display: block;\n  padding: 0;\n  text-align: center; }\n\n.am-menu-slide1 .am-menu-nav > li > a {\n  color: #333;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-menu-slide1 .am-menu-nav > .am-parent > a {\n  position: relative;\n  -webkit-transition: .15s;\n  transition: .15s; }\n\n.am-menu-slide1 .am-menu-nav > .am-parent > a:after {\n  content: \"\\F107\";\n  margin-left: 5px;\n  -webkit-transition: .15s;\n  transition: .15s; }\n\n.am-menu-slide1 .am-menu-nav > .am-parent > a:before {\n  position: absolute;\n  top: 100%;\n  margin-top: -16px;\n  left: 50%;\n  margin-left: -12px;\n  content: \"\\F0D8\";\n  display: none;\n  color: #0e90d2;\n  font-size: 24px; }\n\n.am-menu-slide1 .am-menu-nav > .am-parent.am-open > a {\n  color: #0e90d2; }\n\n.am-menu-slide1 .am-menu-nav > .am-parent.am-open > a:before {\n  display: block; }\n\n.am-menu-slide1 .am-menu-nav > .am-parent.am-open > a:after {\n  -webkit-transform: rotate(-180deg);\n  -ms-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n\n.am-menu-slide1 .am-menu-sub {\n  position: absolute;\n  left: 5px;\n  right: 5px;\n  background-color: #0e90d2;\n  border-radius: 0;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.am-menu-slide1 .am-menu-sub > li > a {\n  color: #fff; }\n\n@media only screen and (min-width: 641px) {\n  .am-menu-slide1 .am-menu-toggle {\n    display: none !important; }\n  .am-menu-slide1 .am-menu-nav {\n    background-color: #f5f5f5;\n    display: block; }\n  .am-menu-slide1 .am-menu-nav.am-in:before {\n    display: none; }\n  .am-menu-slide1 .am-menu-nav li {\n    width: auto;\n    clear: none; }\n  .am-menu-slide1 .am-menu-nav li a {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; } }\n\n.am-menu-offcanvas1 .am-menu-toggle, .am-menu-offcanvas2 .am-menu-toggle {\n  width: 44px;\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  text-align: center; }\n\n.am-menu-offcanvas1 .am-menu-toggle {\n  position: absolute;\n  right: 5px;\n  top: -47px;\n  color: #fff; }\n\n.am-menu-offcanvas1 .am-menu-nav {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05); }\n\n.am-menu-offcanvas1 .am-menu-nav > li > a, .am-menu-offcanvas1 .am-menu-sub {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05); }\n\n.am-menu-offcanvas1 .am-menu-nav > li > a {\n  height: 44px;\n  line-height: 44px;\n  text-indent: 15px;\n  padding: 0;\n  position: relative;\n  color: #ccc;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5); }\n\n.am-menu-offcanvas1 .am-menu-nav > .am-open > a, .am-menu-offcanvas1 .am-menu-nav > li > a:focus, .am-menu-offcanvas1 .am-menu-nav > li > a:hover {\n  background-color: #474747;\n  color: #fff;\n  outline: 0; }\n\n.am-menu-offcanvas1 .am-menu-nav > .am-active > a {\n  background-color: #1a1a1a;\n  color: #fff; }\n\n.am-menu-offcanvas1 .am-menu-nav > .am-parent > a {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n.am-menu-offcanvas1 .am-menu-nav > .am-parent > a:after {\n  content: \"\\F104\";\n  position: absolute;\n  right: 1.5rem;\n  top: 1.3rem; }\n\n.am-menu-offcanvas1 .am-menu-nav > .am-parent.am-open > a:after {\n  content: \"\\F107\"; }\n\n.am-menu-offcanvas1 .am-menu-sub {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  padding: 5px 0 5px 15px;\n  background-color: #1a1a1a;\n  font-size: 1.4rem; }\n\n.am-menu-offcanvas1 .am-menu-sub a {\n  color: #eee; }\n\n.am-menu-offcanvas1 .am-menu-sub a:hover {\n  color: #fff; }\n\n.am-menu-offcanvas1 .am-nav-divider {\n  border-top: 1px solid #1a1a1a; }\n\n.am-menu-offcanvas2 .am-menu-toggle {\n  position: absolute;\n  right: 5px;\n  top: -47px;\n  color: #fff; }\n\n.am-menu-offcanvas2 .am-menu-nav {\n  padding: 10px 5px; }\n\n.am-menu-offcanvas2 .am-menu-nav > li {\n  padding: 5px; }\n\n.am-menu-offcanvas2 .am-menu-nav > li > a {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  background-color: #404040;\n  color: #ccc;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  height: 44px;\n  line-height: 44px;\n  padding: 0;\n  text-align: center; }\n\n.am-menu-offcanvas2 .am-menu-nav > li > a:focus, .am-menu-offcanvas2 .am-menu-nav > li > a:hover {\n  background-color: #262626;\n  color: #fff;\n  outline: 0; }\n\n.am-menu-offcanvas2 .am-menu-nav > .am-active > a {\n  background-color: #262626;\n  color: #fff; }\n\n.am-menu-stack .am-menu-nav {\n  border-bottom: 1px solid #dedede;\n  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05); }\n\n.am-menu-stack .am-menu-nav > .am-parent > a {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n.am-menu-stack .am-menu-nav > .am-parent > a:after {\n  content: \"\\F105\";\n  position: absolute;\n  right: 1.5rem;\n  top: 1.3rem;\n  -webkit-transition: all .15s;\n  transition: all .15s; }\n\n.am-menu-stack .am-menu-nav > .am-parent.am-open > a:after {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.am-menu-stack .am-menu-nav > li > a {\n  position: relative;\n  color: #333;\n  background-color: #f5f5f5;\n  border-top: 1px solid #dedede;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  height: 49px;\n  line-height: 49px;\n  text-indent: 10px;\n  padding: 0; }\n\n.am-menu-stack .am-menu-nav > .am-open > a, .am-menu-stack .am-menu-nav > li > a:focus, .am-menu-stack .am-menu-nav > li > a:hover {\n  background-color: #e5e5e5;\n  color: #222;\n  outline: 0; }\n\n.am-menu-stack .am-menu-sub {\n  padding: 0;\n  font-size: 1.4rem;\n  border-top: 1px solid #dedede; }\n\n.am-menu-stack .am-menu-sub a {\n  border-bottom: 1px solid #dedede;\n  padding-left: 2rem;\n  color: #444; }\n\n.am-menu-stack .am-menu-sub a:hover {\n  color: #333; }\n\n.am-menu-stack .am-menu-sub li:last-child a {\n  border-bottom: none; }\n\n.am-menu-stack .am-menu-sub > li > a {\n  height: 44px;\n  line-height: 44px;\n  text-indent: 15px;\n  padding: 0; }\n\n@media only screen and (min-width: 641px) {\n  .am-menu-stack .am-menu-nav {\n    background-color: #f5f5f5; }\n  .am-menu-stack .am-menu-nav > li {\n    float: left;\n    width: auto;\n    clear: none !important;\n    display: inline-block; }\n  .am-menu-stack .am-menu-nav > li a {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n  .am-menu-stack .am-menu-nav > li.am-parent > a:after {\n    position: static;\n    content: \"\\F107\"; }\n  .am-menu-stack .am-menu-nav > li.am-parent.am-open a {\n    border-bottom: none; }\n  .am-menu-stack .am-menu-nav > li.am-parent.am-open a:after {\n    -webkit-transform: rotateX(-180deg);\n    transform: rotateX(-180deg); }\n  .am-menu-stack .am-menu-nav > li.am-parent.am-open .am-menu-sub {\n    background-color: #e5e5e5; }\n  .am-menu-stack .am-menu-sub {\n    position: absolute;\n    left: 0;\n    right: 0;\n    background-color: #ddd;\n    border-top: none; }\n  .am-menu-stack .am-menu-sub li {\n    width: auto;\n    float: left;\n    clear: none; } }\n\n.am-navbar {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 49px;\n  line-height: 49px;\n  z-index: 1010; }\n\n.am-navbar ul {\n  padding-left: 0;\n  margin: 0;\n  list-style: none;\n  width: 100%; }\n\n.am-navbar .am-navbar-nav {\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center;\n  overflow: hidden; }\n\n.am-navbar .am-navbar-nav li {\n  display: table-cell;\n  width: 1%;\n  float: none; }\n\n.am-navbar-nav {\n  position: relative;\n  z-index: 1015; }\n\n.am-navbar-nav a {\n  display: inline-block;\n  width: 100%;\n  height: 49px;\n  line-height: 20px; }\n\n.am-navbar-nav a img {\n  display: block;\n  vertical-align: middle;\n  height: 24px;\n  width: 24px;\n  margin: 4px auto 0; }\n\n.am-navbar-nav a [class*=am-icon] {\n  width: 24px;\n  height: 24px;\n  margin: 4px auto 0;\n  display: block;\n  line-height: 24px; }\n\n.am-navbar-nav a [class*=am-icon]:before {\n  font-size: 22px;\n  vertical-align: middle; }\n\n.am-navbar-nav a .am-navbar-label {\n  padding-top: 2px;\n  line-height: 1;\n  font-size: 12px;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-navbar-more [class*=am-icon-] {\n  -webkit-transition: .15s;\n  transition: .15s; }\n\n.am-navbar-more.am-active [class*=am-icon-] {\n  -webkit-transform: rotateX(-180deg);\n  transform: rotateX(-180deg); }\n\n.am-navbar-actions {\n  position: absolute;\n  bottom: 49px;\n  right: 0;\n  left: 0;\n  z-index: 1009;\n  opacity: 0;\n  -webkit-transition: .3s;\n  transition: .3s;\n  -webkit-transform: translate(0, 100%);\n  -ms-transform: translate(0, 100%);\n  transform: translate(0, 100%); }\n\n.am-navbar-actions.am-active {\n  opacity: 1;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.am-slider-b1 .am-direction-nav a:before, .am-slider-b2 .am-direction-nav a:before {\n  text-rendering: auto;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0); }\n\n.am-navbar-actions li {\n  line-height: 42px;\n  position: relative; }\n\n.am-navbar-actions li a {\n  display: block;\n  width: 100%;\n  height: 40px;\n  -webkit-box-shadow: inset 0 1px rgba(220, 220, 220, 0.25);\n  box-shadow: inset 0 1px rgba(220, 220, 220, 0.25);\n  padding-left: 20px;\n  padding-right: 36px; }\n\n.am-navbar-actions li a :after {\n  font-family: FontAwesome,sans-serif;\n  content: \"\\F105\";\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 20px; }\n\n.am-navbar-actions li a img {\n  vertical-align: middle;\n  height: 20px;\n  width: 20px;\n  display: inline; }\n\n#am-navbar-qrcode {\n  width: 220px;\n  height: 220px;\n  margin-left: -110px; }\n\n.am-pagination-default, .am-pagination-select {\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 1.6rem; }\n\n#am-navbar-qrcode .am-modal-bd {\n  padding: 10px; }\n\n#am-navbar-qrcode canvas {\n  display: block;\n  width: 200px;\n  height: 200px; }\n\n.am-with-fixed-navbar {\n  padding-bottom: 54px; }\n\n.am-navbar-default a {\n  color: #fff; }\n\n.am-navbar-default .am-navbar-nav {\n  background-color: #0e90d2; }\n\n.am-navbar-default .am-navbar-actions {\n  background-color: #0d86c4; }\n\n.am-navbar-default .am-navbar-actions a {\n  border-bottom: 1px solid #0b6fa2; }\n\n.am-pagination {\n  position: relative; }\n\n.am-pagination-default .am-pagination-next, .am-pagination-default .am-pagination-prev {\n  float: none; }\n\n.am-paragraph-default p, .am-paragraph-table-container table td a {\n  font-size: 1.4rem; }\n\n.am-pagination-select > li > a {\n  line-height: 36px;\n  background-color: #eee;\n  padding: 0 15px;\n  border: 0;\n  color: #555; }\n\n.am-pagination-select .am-pagination-select {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -35px;\n  width: 70px;\n  height: 36px;\n  text-align: center;\n  border-radius: 0; }\n\n.am-pagination-select .am-pagination-select select {\n  display: block;\n  border: 0;\n  line-height: 36px;\n  width: 70px;\n  height: 36px;\n  border-radius: 0;\n  color: #555;\n  background-color: #eee;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  padding-left: 18px; }\n\n.am-slider-a1 .am-control-nav, .am-slider-a2 .am-control-nav, .am-slider-a3 .am-control-nav, .am-slider-a4 .am-control-nav, .am-slider-a5 .am-control-nav {\n  line-height: 0;\n  position: absolute;\n  text-align: center; }\n\n.am-paragraph p {\n  margin: 10px 0; }\n\n.am-paragraph h1, .am-paragraph h2, .am-paragraph h3, .am-paragraph h4, .am-paragraph h5, .am-paragraph h6 {\n  color: #222; }\n\n.am-paragraph table {\n  max-width: none; }\n\n.am-paragraph-table-container {\n  overflow: hidden;\n  background: #eee;\n  max-width: none; }\n\n.am-paragraph-table-container table {\n  width: 100%;\n  max-width: none; }\n\n.am-paragraph-table-container table th {\n  background: #bce5fb;\n  height: 40px;\n  border: 1px solid #999;\n  text-align: center; }\n\n.am-paragraph-table-container table td {\n  border: 1px solid #999;\n  text-align: center;\n  vertical-align: middle;\n  background: #fff; }\n\n.am-paragraph-table-container table td p {\n  text-indent: 0;\n  font-size: 1.4rem; }\n\n.am-paragraph-default {\n  margin: 0 10px;\n  color: #333;\n  background-color: transparent; }\n\n.am-paragraph-default img {\n  max-width: 98%;\n  display: block;\n  margin: 5px auto;\n  border: 1px solid #eee;\n  padding: 2px; }\n\n.am-paragraph-default a {\n  color: #0e90d2; }\n\n.am-slider-a1 {\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-a1 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-a1 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-a1 .am-control-nav {\n  width: 100%;\n  bottom: 5px; }\n\n.am-slider-a1 .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block; }\n\n.am-slider-a1 .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3); }\n\n.am-slider-a1 .am-control-nav li a:hover {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.am-slider-a1 .am-control-nav li a.am-active {\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-slider-a1 .am-direction-nav, .am-slider-a1 .am-pauseplay {\n  display: none; }\n\n.am-slider-a2 {\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-a2 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-a2 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-a2 .am-control-nav {\n  width: 100%;\n  bottom: 5px; }\n\n.am-slider-a2 .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block; }\n\n.am-slider-a2 .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3); }\n\n.am-slider-a2 .am-control-nav li a:hover {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.am-slider-a2 .am-control-nav li a.am-active {\n  background: #0e93d7;\n  cursor: default; }\n\n.am-slider-a2 .am-direction-nav, .am-slider-a2 .am-pauseplay {\n  display: none; }\n\n.am-slider-a3 {\n  margin-bottom: 20px;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-a3 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-a3 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-a3 .am-control-nav {\n  width: 100%;\n  bottom: -20px;\n  height: 20px;\n  background-color: #000;\n  padding-top: 5px; }\n\n.am-slider-a3 .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block; }\n\n.am-slider-a3 .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0 0 3px rgba(200, 200, 200, 0.3);\n  box-shadow: inset 0 0 3px rgba(200, 200, 200, 0.3); }\n\n.am-slider-a3 .am-control-nav li a:hover {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.am-slider-a3 .am-control-nav li a.am-active {\n  background: #0e90d2;\n  cursor: default; }\n\n.am-slider-a3 .am-direction-nav, .am-slider-a3 .am-pauseplay {\n  display: none; }\n\n.am-slider-a4 {\n  margin-bottom: 30px;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-a4 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-a4 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-a4 .am-control-nav {\n  width: 100%;\n  bottom: -15px; }\n\n.am-slider-a4 .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block; }\n\n.am-slider-a4 .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3); }\n\n.am-slider-a5, .am-slider-b1 {\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-a4 .am-control-nav li a:hover {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.am-slider-a4 .am-control-nav li a.am-active {\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-slider-a4 .am-direction-nav, .am-slider-a4 .am-pauseplay {\n  display: none; }\n\n.am-slider-a5 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-a5 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-a5 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-a5 .am-control-nav {\n  width: 100%;\n  height: 6px;\n  display: table;\n  bottom: 0;\n  font-size: 0; }\n\n.am-slider-a5 .am-control-nav li {\n  display: table-cell; }\n\n.am-slider-a5 .am-control-nav li a {\n  width: 100%;\n  height: 6px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px; }\n\n.am-slider-a5 .am-control-nav li a:hover {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.am-slider-a5 .am-control-nav li a.am-active {\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-slider-a5 .am-direction-nav, .am-slider-a5 .am-pauseplay {\n  display: none; }\n\n.am-slider-b1 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-b2, .am-slider-b3 {\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-b1 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-b1 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-b1 .am-direction-nav a {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 8px 0;\n  margin: -20px 0 0;\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  overflow: hidden;\n  opacity: .45;\n  cursor: pointer;\n  color: #fff;\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n  background-color: rgba(0, 0, 0, 0.5);\n  font-size: 0;\n  text-align: center;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-b1 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 24px; }\n\n.am-slider-b1 .am-direction-nav a.am-prev {\n  left: 0;\n  padding-right: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.am-slider-b1 .am-direction-nav a.am-next {\n  right: 0;\n  padding-left: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px; }\n\n.am-slider-b2 .am-direction-nav a, .am-slider-b4 .am-direction-nav a {\n  position: absolute;\n  width: 24px;\n  padding: 4px;\n  border-radius: 50%;\n  color: #fff;\n  overflow: hidden;\n  height: 24px;\n  top: 50%;\n  z-index: 10;\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3); }\n\n.am-slider-b1 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-b1 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-b1:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-b1:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-b1:hover .am-next {\n  opacity: .7; }\n\n.am-slider-b1:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-b1 .am-control-nav, .am-slider-b1 .am-pauseplay {\n  display: none; }\n\n.am-slider-b2 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-b2 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-b2 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-b2 .am-direction-nav a {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  display: block;\n  margin: -16px 0 0;\n  opacity: .45;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.5);\n  font-size: 0;\n  text-align: center;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-b2 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 16px;\n  line-height: 24px; }\n\n.am-slider-b3 .am-direction-nav a:before, .am-slider-b4 .am-direction-nav a:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  text-rendering: auto; }\n\n.am-slider-b2 .am-direction-nav a.am-prev {\n  left: 5px; }\n\n.am-slider-b2 .am-direction-nav a.am-next {\n  right: 5px; }\n\n.am-slider-b2 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-b2 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-b2:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-b2:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-b2:hover .am-next {\n  opacity: .7; }\n\n.am-slider-b2:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-b2 .am-control-nav, .am-slider-b2 .am-pauseplay {\n  display: none; }\n\n.am-slider-b3 {\n  margin: 15px 30px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-b4, .am-slider-c1, .am-slider-c2 {\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-b3 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-b3 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-b3 .am-direction-nav a {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  margin: -16px 0 0;\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  overflow: hidden;\n  opacity: .45;\n  cursor: pointer;\n  color: #333;\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n  font-size: 0;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-b3 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 24px; }\n\n.am-slider-b3 .am-direction-nav a.am-prev {\n  left: -25px; }\n\n.am-slider-b3 .am-direction-nav a.am-next {\n  right: -25px;\n  text-align: right; }\n\n.am-slider-b3 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-b3 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-b3:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-b3:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-b3:hover .am-next {\n  opacity: .7; }\n\n.am-slider-b3:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-b3 .am-control-nav, .am-slider-b3 .am-pauseplay {\n  display: none; }\n\n.am-slider-b4 {\n  margin: 15px 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-b4 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-b4 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-b4 .am-direction-nav a {\n  display: block;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  margin: -16px 0 0;\n  opacity: .45;\n  background-color: rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n  font-size: 0;\n  text-align: center;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-b4 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 20px;\n  line-height: 24px; }\n\n.am-slider-c3 .am-direction-nav a:before, .am-slider-c4 .am-direction-nav a:before {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -moz-osx-font-smoothing: grayscale; }\n\n.am-slider-c1 .am-control-nav, .am-slider-c2 .am-control-nav {\n  position: absolute;\n  font-size: 0;\n  line-height: 0;\n  height: 6px;\n  text-align: center; }\n\n.am-slider-b4 .am-direction-nav a.am-prev {\n  left: -15px; }\n\n.am-slider-b4 .am-direction-nav a.am-next {\n  right: -15px; }\n\n.am-slider-b4 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-b4 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-b4:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-b4:hover .am-prev:hover {\n  opacity: .9; }\n\n.am-slider-b4:hover .am-next {\n  opacity: .7; }\n\n.am-slider-b4:hover .am-next:hover {\n  opacity: .9; }\n\n.am-slider-b4 .am-control-nav, .am-slider-b4 .am-pauseplay {\n  display: none; }\n\n.am-slider-c1 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-c1 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-c1 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-c1 .am-control-nav {\n  bottom: 0;\n  display: table;\n  width: 100%; }\n\n.am-slider-c1 .am-control-nav li {\n  display: table-cell;\n  width: 1%; }\n\n.am-slider-c1 .am-control-nav li a {\n  width: 100%;\n  height: 6px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.7);\n  cursor: pointer;\n  text-indent: -9999px; }\n\n.am-slider-c1 .am-control-nav li a:hover {\n  background: rgba(0, 0, 0, 0.8); }\n\n.am-slider-c1 .am-control-nav li a.am-active {\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-slider-c1 .am-slider-desc {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  bottom: 6px;\n  padding: 8px;\n  width: 100%;\n  color: #fff;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-slider-c1 .am-direction-nav, .am-slider-c1 .am-pauseplay {\n  display: none; }\n\n.am-slider-c2 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-c3, .am-slider-c4, .am-slider-d1, .am-slider-d2 {\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-c2 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-c2 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-c2 .am-control-nav {\n  bottom: 15px;\n  right: 0; }\n\n.am-slider-c2 .am-control-nav li {\n  display: inline-block;\n  margin-right: 6px; }\n\n.am-slider-c2 .am-control-nav li a {\n  width: 6px;\n  height: 6px;\n  display: block;\n  background-color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  text-indent: -9999px; }\n\n.am-slider-c2 .am-control-nav li a:hover {\n  background: rgba(230, 230, 230, 0.4); }\n\n.am-slider-c2 .am-control-nav li a.am-active {\n  background-color: #0e90d2;\n  cursor: default; }\n\n.am-slider-c2 .am-slider-desc, .am-slider-c3 .am-slider-desc {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  position: absolute;\n  overflow: hidden;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.am-slider-c2 .am-slider-desc {\n  bottom: 0;\n  padding: 8px 60px 8px 8px;\n  width: 100%;\n  display: block; }\n\n.am-slider-c2 .am-direction-nav, .am-slider-c2 .am-pauseplay {\n  display: none; }\n\n.am-slider-c3 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-c3 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-c3 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-c3 .am-slider-desc {\n  bottom: 10px;\n  right: 60px;\n  height: 30px;\n  left: 0;\n  padding-right: 5px;\n  display: block; }\n\n.am-slider-c3 .am-slider-counter {\n  margin-right: 5px;\n  display: inline-block;\n  height: 30px;\n  background-color: #0e90d2;\n  width: 40px;\n  text-align: center;\n  line-height: 30px;\n  color: #eee;\n  font-size: 1rem; }\n\n.am-slider-c3 .am-slider-counter .am-active {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #fff; }\n\n.am-slider-c3 .am-direction-nav a {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 4px 0;\n  margin: -16px 0 0;\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  overflow: hidden;\n  opacity: .45;\n  cursor: pointer;\n  color: #fff;\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n  background-color: rgba(0, 0, 0, 0.5);\n  font-size: 0;\n  text-align: center;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-c3 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 16px;\n  line-height: 24px; }\n\n.am-slider-c3 .am-direction-nav a.am-prev {\n  left: 0;\n  padding-right: 5px; }\n\n.am-slider-c3 .am-direction-nav a.am-next {\n  right: 0;\n  padding-left: 5px; }\n\n.am-slider-c3 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-c3 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-c4 .am-direction-nav a, .am-slider-d1 .am-direction-nav a {\n  height: 24px;\n  z-index: 10;\n  overflow: hidden;\n  cursor: pointer;\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n  position: absolute;\n  text-align: center; }\n\n.am-slider-c3:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-c3:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-c3:hover .am-next {\n  opacity: .7; }\n\n.am-slider-c3:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-c3 .am-control-nav, .am-slider-c3 .am-pauseplay {\n  display: none; }\n\n.am-slider-c4 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-c4 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-c4 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-c4 .am-slider-desc {\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 8px 40px;\n  color: #fff;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-slider-c4 .am-direction-nav a {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  display: block;\n  width: 24px;\n  padding: 4px 0;\n  margin: 0;\n  bottom: 4px;\n  opacity: .45;\n  font-size: 0;\n  color: rgba(0, 0, 0, 0.7);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.am-slider-c4 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 24px; }\n\n.am-slider-c4 .am-direction-nav a.am-prev {\n  left: 0;\n  padding-right: 5px; }\n\n.am-slider-c4 .am-direction-nav a.am-next {\n  right: 0;\n  padding-left: 5px; }\n\n.am-slider-c4 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-c4 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-c4:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-c4:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-c4:hover .am-next {\n  opacity: .7; }\n\n.am-slider-c4:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-c4 .am-control-nav, .am-slider-c4 .am-pauseplay {\n  display: none; }\n\n.am-slider-d1 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-d1 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-d1 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-d1 .am-slider-desc {\n  padding: 8px 35px;\n  width: 100%;\n  color: #fff;\n  background-color: #0e90d2; }\n\n.am-slider-d1 .am-slider-title {\n  font-weight: 400;\n  margin-bottom: 2px;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-slider-d1 .am-slider-more {\n  color: #eee;\n  font-size: 1.3rem; }\n\n.am-slider-d1 .am-direction-nav a {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  display: block;\n  width: 24px;\n  margin: 0;\n  bottom: 18px;\n  opacity: .45;\n  font-size: 0;\n  border: 1px solid rgba(255, 255, 255, 0.9);\n  color: rgba(255, 255, 255, 0.9);\n  border-radius: 50%;\n  -webkit-transition: all 3s ease;\n  transition: all 3s ease; }\n\n.am-slider-d1 .am-direction-nav a:before {\n  display: inline-block;\n  font: normal normal normal 1.6rem/1 FontAwesome,sans-serif;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  transform: translate(0, 0);\n  content: \"\\F053\";\n  font-size: 16px;\n  line-height: 24px; }\n\n.am-slider-d1 .am-direction-nav a.am-prev {\n  left: 5px; }\n\n.am-slider-d1 .am-direction-nav a.am-next {\n  right: 5px; }\n\n.am-slider-d1 .am-direction-nav a.am-next:before {\n  content: \"\\F054\"; }\n\n.am-slider-d1 .am-direction-nav .am-disabled {\n  opacity: 0 !important;\n  cursor: default; }\n\n.am-slider-d1:hover .am-prev {\n  opacity: .7; }\n\n.am-slider-d1:hover .am-prev:hover {\n  opacity: 1; }\n\n.am-slider-d1:hover .am-next {\n  opacity: .7; }\n\n.am-slider-d1:hover .am-next:hover {\n  opacity: 1; }\n\n.am-slider-d1 .am-control-nav, .am-slider-d1 .am-pauseplay {\n  display: none; }\n\n.am-slider-d2 .am-slider-content p, .am-slider-d2 .am-slider-title {\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-slider-d2 {\n  margin-bottom: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-d2 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-d2 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-d2 .am-slider-desc {\n  position: absolute;\n  left: 10px;\n  bottom: 20px;\n  right: 50px;\n  color: #fff; }\n\n.am-slider-d2 .am-slider-content {\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px 6px;\n  margin-bottom: 10px; }\n\n.am-slider-d2 .am-slider-content p {\n  margin: 0;\n  font-size: 1.4rem; }\n\n.am-slider-d2 .am-slider-title {\n  font-weight: 400;\n  margin-bottom: 5px; }\n\n.am-slider-d2 .am-slider-more {\n  color: #eee;\n  font-size: 1.3rem;\n  background-color: #0e90d2;\n  padding: 2px 10px; }\n\n.am-slider-d2 .am-control-nav {\n  width: 100%;\n  position: absolute;\n  bottom: -15px;\n  text-align: center; }\n\n.am-slider-d2 .am-control-nav li {\n  margin: 0 6px;\n  display: inline-block; }\n\n.am-slider-d2 .am-control-nav li a {\n  width: 8px;\n  height: 8px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  border-radius: 50%;\n  font-size: 0;\n  line-height: 0;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3); }\n\n.am-slider-d2 .am-control-nav li a:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n.am-slider-d2 .am-control-nav li a.am-active {\n  background: #0e90d2;\n  cursor: default; }\n\n.am-slider-d2 .am-direction-nav, .am-slider-d2 .am-pauseplay {\n  display: none; }\n\n.am-slider-d3 {\n  margin-bottom: 10px;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.am-slider-d3 .am-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n.loading .am-slider-d3 .am-viewport {\n  max-height: 300px; }\n\n.am-slider-d3 .am-slider-desc {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 8px 5px; }\n\n.am-slider-d3 .am-slider-desc p {\n  margin: 0;\n  font-size: 1.3rem;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-slider-d3 .am-slider-title {\n  font-weight: 400;\n  margin-bottom: 5px;\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-slider-d3 .am-control-thumbs {\n  position: static;\n  overflow: hidden; }\n\n.am-slider-d3 .am-control-thumbs li {\n  padding: 12px 4px 4px;\n  position: relative; }\n\n.am-slider-d3 .am-control-thumbs img {\n  width: 100%;\n  display: block;\n  opacity: .85;\n  cursor: pointer; }\n\n.am-slider-d3 .am-control-thumbs img:hover {\n  opacity: 1; }\n\n.am-slider-d3 .am-control-thumbs .am-active {\n  opacity: 1;\n  cursor: default; }\n\n.am-slider-d3 .am-control-thumbs .am-active + i {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-top: 8px solid rgba(0, 0, 0, 0.7);\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n  border-bottom: 0 dotted;\n  -webkit-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n  transform: rotate(360deg);\n  margin-left: -4px;\n  -webkit-transition: all .2s;\n  transition: all .2s; }\n\n.am-slider-d3 .am-direction-nav, .am-slider-d3 .am-pauseplay {\n  display: none; }\n\n.am-slider-d3 .am-control-thumbs {\n  display: table; }\n\n.am-slider-d3 .am-control-thumbs li {\n  display: table-cell;\n  width: 1%; }\n\n[data-am-widget=tabs] {\n  margin: 10px; }\n\n[data-am-widget=tabs] .am-tabs-nav {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n[data-am-widget=tabs] .am-tabs-nav li {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n[data-am-widget=tabs] .am-tabs-nav a {\n  display: block;\n  word-wrap: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.am-titlebar-default, .am-titlebar-multi {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox; }\n\n.am-tabs-default .am-tabs-nav {\n  line-height: 40px;\n  background-color: #eee; }\n\n.am-tabs-default .am-tabs-nav a {\n  color: #222;\n  line-height: 42px; }\n\n.am-tabs-default .am-tabs-nav > .am-active a {\n  background-color: #0e90d2;\n  color: #fff; }\n\n.am-tabs-d2 .am-tabs-nav {\n  background-color: #eee; }\n\n.am-tabs-d2 .am-tabs-nav li {\n  height: 42px; }\n\n.am-tabs-d2 .am-tabs-nav a {\n  color: #222;\n  line-height: 42px; }\n\n.am-tabs-d2 .am-tabs-nav > .am-active {\n  position: relative;\n  background-color: #fcfcfc;\n  border-bottom: 2px solid #0e90d2; }\n\n.am-tabs-d2 .am-tabs-nav > .am-active a {\n  line-height: 40px;\n  color: #0e90d2; }\n\n.am-tabs-d2 .am-tabs-nav > .am-active:after {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border: 6px solid transparent;\n  content: \"\";\n  z-index: 1;\n  border-bottom-color: #0e90d2; }\n\n.am-titlebar {\n  margin-top: 20px;\n  height: 45px;\n  font-size: 100%; }\n\n.am-titlebar h2 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 1.6rem; }\n\n.am-titlebar .am-titlebar-title img {\n  height: 24px;\n  width: auto; }\n\n.am-titlebar-default {\n  display: flex;\n  margin-left: 10px;\n  margin-right: 10px;\n  background-color: transparent;\n  border-bottom: 1px solid #dedede;\n  line-height: 44px; }\n\n.am-titlebar-default a {\n  color: #0e90d2; }\n\n.am-titlebar-default .am-titlebar-title {\n  position: relative;\n  padding-left: 12px;\n  color: #0e90d2;\n  font-size: 1.8rem;\n  text-align: left;\n  font-weight: 700; }\n\n.am-titlebar-default .am-titlebar-title:before {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  top: 8px;\n  bottom: 8px;\n  border-left: 3px solid #0e90d2; }\n\n.am-titlebar-default .am-titlebar-nav {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: right; }\n\n.am-titlebar-default .am-titlebar-nav a {\n  margin-right: 10px; }\n\n.am-titlebar-default .am-titlebar-nav a:last-child {\n  margin-right: 5px; }\n\n.am-titlebar-multi {\n  display: flex;\n  background-color: #f5f5f5;\n  border-top: 2px solid #3bb4f2;\n  border-bottom: 1px solid #e8e8e8; }\n\n.am-titlebar-multi a {\n  color: #0e90d2; }\n\n.am-titlebar-multi .am-titlebar-title {\n  padding-left: 10px;\n  color: #0e90d2;\n  font-size: 1.8rem;\n  text-align: left;\n  font-weight: 700;\n  line-height: 42px; }\n\n.am-titlebar-multi .am-titlebar-nav {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: right;\n  line-height: 42px; }\n\n.am-titlebar-multi .am-titlebar-nav a {\n  margin-right: 10px; }\n\n.am-titlebar-cols {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 10px;\n  background-color: #f5f5f5;\n  color: #555;\n  font-size: 18px;\n  border-top: 2px solid #e1e1e1;\n  line-height: 41px; }\n\n.am-titlebar-cols a {\n  color: #555; }\n\n.am-titlebar-cols .am-titlebar-title {\n  color: #0e90d2;\n  margin-right: 15px;\n  border-bottom: 2px solid #0e90d2;\n  font-weight: 700; }\n\n.am-titlebar-cols .am-titlebar-title a {\n  color: #0e90d2; }\n\n.am-titlebar-cols .am-titlebar-nav {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.am-titlebar-cols .am-titlebar-nav a {\n  display: inline-block;\n  margin-right: 15px;\n  line-height: 41px;\n  border-bottom: 2px solid transparent; }\n\n.am-titlebar-cols .am-titlebar-nav a:hover {\n  color: #3c3c3c;\n  border-bottom-color: #0e90d2; }\n\n.am-titlebar-cols .am-titlebar-nav a:last-child {\n  margin-right: 10px; }\n\n.am-wechatpay .am-wechatpay-btn {\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\nbody {\n  margin: 0 auto;\n  font-size: 16px;\n  font-family: microsoft yahei, Helvetica;\n  color: #333333; }\n  @media (min-width: 1280px) {\n    body .container {\n      width: 1280px; } }\n  body .container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto; }\n  body dt {\n    font-weight: normal; }\n  body p {\n    margin: 0; }\n  body a {\n    text-decoration: none;\n    color: #333333; }\n  body a:focus {\n    text-decoration: none;\n    color: #333333; }\n  body a:hover {\n    text-decoration: none;\n    color: #0E9F4E; }\n  body ui, body li {\n    list-style-type: none; }\n  body .popup {\n    position: relative;\n    padding: 0 20px; }\n  body .popup:hover {\n    z-index: 1; }\n    body .popup:hover .title {\n      text-decoration: none;\n      color: #0E9F4E; }\n    body .popup:hover .popup-wrapper {\n      display: inline-block; }\n  body .popup .popup-wrapper {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-top: 40px;\n    padding-bottom: 10px;\n    z-index: -1;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    box-sizing: border-box;\n    background-color: white;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n    body .popup .popup-wrapper .content {\n      font-size: 12px;\n      line-height: 30px;\n      text-align: center; }\n  body .icon {\n    display: inline-block; }\n    body .icon a {\n      display: inline-block;\n      width: 100%;\n      height: 100%; }\n  body .fl {\n    float: left; }\n  body .fr {\n    float: right; }\n\n.float-bar {\n  position: fixed;\n  right: 15px;\n  top: 35%;\n  z-index: 1; }\n  .float-bar img {\n    display: block; }\n  .float-bar .download-directly, .float-bar .back-to-top {\n    position: relative;\n    left: 7px; }\n\n.section {\n  text-align: center; }\n  .section .content {\n    display: inline-block;\n    width: 1280px; }\n\n.section1 {\n  background-color: #7ccbd0; }\n  .section1 .app-header {\n    background-color: white;\n    text-align: center;\n    line-height: 50px;\n    font-size: 24px; }\n    .section1 .app-header .logo {\n      position: relative;\n      left: -20%; }\n    .section1 .app-header .index a {\n      color: #000f22; }\n    .section1 .app-header .login {\n      position: relative;\n      left: 20%; }\n    .section1 .app-header .register {\n      position: relative;\n      left: 21%; }\n  .section1 .content {\n    height: 900px;\n    text-align: center;\n    position: relative; }\n    .section1 .content .slogan1 {\n      margin-top: 50px; }\n    .section1 .content .center-bottom {\n      position: absolute;\n      bottom: -10px;\n      width: 100%;\n      text-align: center; }\n      .section1 .content .center-bottom .right {\n        display: inline-block;\n        position: relative;\n        top: -120px;\n        margin-left: 100px; }\n        .section1 .content .center-bottom .right .slogan2 {\n          margin-bottom: 30px; }\n        .section1 .content .center-bottom .right .qrcode {\n          display: block; }\n        .section1 .content .center-bottom .right .download-pc-link {\n          display: inline-block;\n          background-color: #3eccc3;\n          height: 20px;\n          padding: 5px 10px;\n          border-radius: 15px;\n          -moz-border-radius: 15px;\n          -webkit-border-radius: 15px;\n          margin-top: 50px; }\n          .section1 .content .center-bottom .right .download-pc-link a {\n            color: #e9f3f2;\n            font-size: 16px; }\n        .section1 .content .center-bottom .right .android {\n          margin-right: 50px; }\n        .section1 .content .center-bottom .right .ios {\n          margin-left: 50px; }\n\n.section2 img {\n  display: block; }\n\n.section3 img {\n  display: block; }\n\n.section4 {\n  background-color: #282e33; }\n  .section4 .content .left {\n    display: inline-block;\n    margin-right: 50px; }\n    .section4 .content .left .download {\n      display: inline-block;\n      border: 1px solid #2369b5;\n      margin: 0 10px; }\n      .section4 .content .left .download img {\n        vertical-align: middle; }\n    .section4 .content .left .ios {\n      padding: 29px 35px; }\n    .section4 .content .left .android {\n      padding: 20px 26.5px; }\n    .section4 .content .left .text {\n      color: #2369b5;\n      font-size: 24px;\n      font-family: Microsoft Yahei; }\n      .section4 .content .left .text .text-left {\n        position: relative;\n        left: -25px; }\n      .section4 .content .left .text .text-right {\n        position: relative;\n        right: -58px; }\n  .section4 .content .right {\n    display: inline-block;\n    font-family: hiragino sans gb,microsoft yahei,simsun;\n    font-size: 20px;\n    color: #7e90ae;\n    text-align: left;\n    margin-left: 50px; }\n    .section4 .content .right p {\n      font-size: 14px; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/fontawesome-webfont.32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/fontawesome-webfont.32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/fontawesome-webfont.db812d8a70a4e88e888744c1c9a27e89.woff2";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/fontawesome-webfont.a35720c2fed2c7f043bc7e4ffb45e073.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/fontawesome-webfont.a3de2170e4e9df77161ea5d3f31b2668.ttf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/fontawesome-webfont.f775f9cca88e21d45bebe185b27c0e5b.svg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * fullPage 2.7.9
	 * https://github.com/alvarotrigo/fullPage.js
	 * @license MIT licensed
	 *
	 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
	 */
	(function(global, factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {
	          return factory($, global, global.document, global.Math);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'), global, global.document, global.Math);
	    } else {
	        factory(jQuery, global, global.document, global.Math);
	    }
	})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
	    'use strict';

	    // keeping central set of classnames and selectors
	    var WRAPPER =               'fullpage-wrapper';
	    var WRAPPER_SEL =           '.' + WRAPPER;

	    // slimscroll
	    var SCROLLABLE =            'fp-scrollable';
	    var SCROLLABLE_SEL =        '.' + SCROLLABLE;
	    var SLIMSCROLL_BAR_SEL =    '.slimScrollBar';
	    var SLIMSCROLL_RAIL_SEL =   '.slimScrollRail';

	    // util
	    var RESPONSIVE =            'fp-responsive';
	    var NO_TRANSITION =         'fp-notransition';
	    var DESTROYED =             'fp-destroyed';
	    var ENABLED =               'fp-enabled';
	    var VIEWING_PREFIX =        'fp-viewing';
	    var ACTIVE =                'active';
	    var ACTIVE_SEL =            '.' + ACTIVE;
	    var COMPLETELY =            'fp-completely';
	    var COMPLETELY_SEL =        '.' + COMPLETELY;

	    // section
	    var SECTION_DEFAULT_SEL =   '.section';
	    var SECTION =               'fp-section';
	    var SECTION_SEL =           '.' + SECTION;
	    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
	    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
	    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
	    var TABLE_CELL =            'fp-tableCell';
	    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
	    var AUTO_HEIGHT =           'fp-auto-height';
	    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
	    var NORMAL_SCROLL =         'fp-normal-scroll';
	    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

	    // section nav
	    var SECTION_NAV =           'fp-nav';
	    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
	    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
	    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
	    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

	    // slide
	    var SLIDE_DEFAULT_SEL =     '.slide';
	    var SLIDE =                 'fp-slide';
	    var SLIDE_SEL =             '.' + SLIDE;
	    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
	    var SLIDES_WRAPPER =        'fp-slides';
	    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
	    var SLIDES_CONTAINER =      'fp-slidesContainer';
	    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
	    var TABLE =                 'fp-table';

	    // slide nav
	    var SLIDES_NAV =            'fp-slidesNav';
	    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
	    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
	    var SLIDES_ARROW =          'fp-controlArrow';
	    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
	    var SLIDES_PREV =           'fp-prev';
	    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
	    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
	    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
	    var SLIDES_NEXT =           'fp-next';
	    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
	    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
	    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

	    var $window = $(window);
	    var $document = $(document);

	    var defaultScrollHandler;

	    $.fn.fullpage = function(options) {
	        //only once my friend!
	        if($('html').hasClass(ENABLED)){ displayWarnings(); return };

	        // common jQuery objects
	        var $htmlBody = $('html, body');
	        var $body = $('body');

	        var FP = $.fn.fullpage;
	        // Create some defaults, extending them with any options that were provided
	        options = $.extend({
	            //navigation
	            menu: false,
	            anchors:[],
	            lockAnchors: false,
	            navigation: false,
	            navigationPosition: 'right',
	            navigationTooltips: [],
	            showActiveTooltip: false,
	            slidesNavigation: false,
	            slidesNavPosition: 'bottom',
	            scrollBar: false,
	            hybrid: false,

	            //scrolling
	            css3: true,
	            scrollingSpeed: 700,
	            autoScrolling: true,
	            fitToSection: true,
	            fitToSectionDelay: 1000,
	            easing: 'easeInOutCubic',
	            easingcss3: 'ease',
	            loopBottom: false,
	            loopTop: false,
	            loopHorizontal: true,
	            continuousVertical: false,
	            normalScrollElements: null,
	            scrollOverflow: false,
	            scrollOverflowHandler: defaultScrollHandler,
	            touchSensitivity: 5,
	            normalScrollElementTouchThreshold: 5,

	            //Accessibility
	            keyboardScrolling: true,
	            animateAnchor: true,
	            recordHistory: true,

	            //design
	            controlArrows: true,
	            controlArrowColor: '#fff',
	            verticalCentered: true,
	            resize: false,
	            sectionsColor : [],
	            paddingTop: 0,
	            paddingBottom: 0,
	            fixedElements: null,
	            responsive: 0, //backwards compabitility with responsiveWiddth
	            responsiveWidth: 0,
	            responsiveHeight: 0,

	            //Custom selectors
	            sectionSelector: SECTION_DEFAULT_SEL,
	            slideSelector: SLIDE_DEFAULT_SEL,


	            //events
	            afterLoad: null,
	            onLeave: null,
	            afterRender: null,
	            afterResize: null,
	            afterReBuild: null,
	            afterSlideLoad: null,
	            onSlideLeave: null
	        }, options);

	        displayWarnings();

	        //easeInOutCubic animation included in the plugin
	        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

	        /**
	        * Sets the autoScroll option.
	        * It changes the scroll bar visibility and the history of the site as a result.
	        */
	        FP.setAutoScrolling = function(value, type){
	            setVariableState('autoScrolling', value, type);

	            var element = $(SECTION_ACTIVE_SEL);

	            if(options.autoScrolling && !options.scrollBar){
	                $htmlBody.css({
	                    'overflow' : 'hidden',
	                    'height' : '100%'
	                });

	                FP.setRecordHistory(originals.recordHistory, 'internal');

	                //for IE touch devices
	                container.css({
	                    '-ms-touch-action': 'none',
	                    'touch-action': 'none'
	                });

	                if(element.length){
	                    //moving the container up
	                    silentScroll(element.position().top);
	                }

	            }else{
	                $htmlBody.css({
	                    'overflow' : 'visible',
	                    'height' : 'initial'
	                });

	                FP.setRecordHistory(false, 'internal');

	                //for IE touch devices
	                container.css({
	                    '-ms-touch-action': '',
	                    'touch-action': ''
	                });

	                silentScroll(0);

	                //scrolling the page to the section with no animation
	                if (element.length) {
	                    $htmlBody.scrollTop(element.position().top);
	                }
	            }
	        };

	        /**
	        * Defines wheter to record the history for each hash change in the URL.
	        */
	        FP.setRecordHistory = function(value, type){
	            setVariableState('recordHistory', value, type);
	        };

	        /**
	        * Defines the scrolling speed
	        */
	        FP.setScrollingSpeed = function(value, type){
	            setVariableState('scrollingSpeed', value, type);
	        };

	        /**
	        * Sets fitToSection
	        */
	        FP.setFitToSection = function(value, type){
	            setVariableState('fitToSection', value, type);
	        };

	        /**
	        * Sets lockAnchors
	        */
	        FP.setLockAnchors = function(value){
	            options.lockAnchors = value;
	        };

	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
	        */
	        FP.setMouseWheelScrolling = function (value){
	            if(value){
	                addMouseWheelHandler();
	                addMiddleWheelHandler();
	            }else{
	                removeMouseWheelHandler();
	                removeMiddleWheelHandler();
	            }
	        };

	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
	        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
	        *
	        * @param directions string containing the direction or directions separated by comma.
	        */
	        FP.setAllowScrolling = function (value, directions){
	            if(typeof directions !== 'undefined'){
	                directions = directions.replace(/ /g,'').split(',');

	                $.each(directions, function (index, direction){
	                    setIsScrollAllowed(value, direction, 'm');
	                });
	            }
	            else if(value){
	                FP.setMouseWheelScrolling(true);
	                addTouchHandler();
	            }else{
	                FP.setMouseWheelScrolling(false);
	                removeTouchHandler();
	            }
	        };

	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
	        */
	        FP.setKeyboardScrolling = function (value, directions){
	            if(typeof directions !== 'undefined'){
	                directions = directions.replace(/ /g,'').split(',');

	                $.each(directions, function (index, direction){
	                    setIsScrollAllowed(value, direction, 'k');
	                });
	            }else{
	                options.keyboardScrolling = value;
	            }
	        };

	        /**
	        * Moves the page up one section.
	        */
	        FP.moveSectionUp = function(){
	            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

	            //looping to the bottom if there's no more sections above
	            if (!prev.length && (options.loopTop || options.continuousVertical)) {
	                prev = $(SECTION_SEL).last();
	            }

	            if (prev.length) {
	                scrollPage(prev, null, true);
	            }
	        };

	        /**
	        * Moves the page down one section.
	        */
	        FP.moveSectionDown = function (){
	            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

	            //looping to the top if there's no more sections below
	            if(!next.length &&
	                (options.loopBottom || options.continuousVertical)){
	                next = $(SECTION_SEL).first();
	            }

	            if(next.length){
	                scrollPage(next, null, false);
	            }
	        };

	        /**
	        * Moves the page to the given section and slide with no animation.
	        * Anchors or index positions can be used as params.
	        */
	        FP.silentMoveTo = function(sectionAnchor, slideAnchor){
	            FP.setScrollingSpeed (0, 'internal');
	            FP.moveTo(sectionAnchor, slideAnchor)
	            FP.setScrollingSpeed (originals.scrollingSpeed, 'internal');
	        };

	        /**
	        * Moves the page to the given section and slide.
	        * Anchors or index positions can be used as params.
	        */
	        FP.moveTo = function (sectionAnchor, slideAnchor){
	            var destiny = getSectionByAnchor(sectionAnchor);

	            if (typeof slideAnchor !== 'undefined'){
	                scrollPageAndSlide(sectionAnchor, slideAnchor);
	            }else if(destiny.length > 0){
	                scrollPage(destiny);
	            }
	        };

	        /**
	        * Slides right the slider of the active section.
	        * Optional `section` param.
	        */
	        FP.moveSlideRight = function(section){
	            moveSlide('next', section);
	        };

	        /**
	        * Slides left the slider of the active section.
	        * Optional `section` param.
	        */
	        FP.moveSlideLeft = function(section){
	            moveSlide('prev', section);
	        };

	        /**
	         * When resizing is finished, we adjust the slides sizes and positions
	         */
	        FP.reBuild = function(resizing){
	            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

	            isResizing = true;

	            var windowsWidth = $window.outerWidth();
	            windowsHeight = $window.height();  //updating global var

	            //text resizing
	            if (options.resize) {
	                resizeMe(windowsHeight, windowsWidth);
	            }

	            $(SECTION_SEL).each(function(){
	                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
	                var slides = $(this).find(SLIDE_SEL);

	                //adjusting the height of the table-cell for IE and Firefox
	                if(options.verticalCentered){
	                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
	                }

	                $(this).css('height', windowsHeight + 'px');

	                //resizing the scrolling divs
	                if(options.scrollOverflow){
	                    if(slides.length){
	                        slides.each(function(){
	                            createSlimScrolling($(this));
	                        });
	                    }else{
	                        createSlimScrolling($(this));
	                    }
	                }

	                //adjusting the position fo the FULL WIDTH slides...
	                if (slides.length > 1) {
	                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
	                }
	            });

	            var activeSection = $(SECTION_ACTIVE_SEL);
	            var sectionIndex = activeSection.index(SECTION_SEL);

	            //isn't it the first section?
	            if(sectionIndex){
	                //adjusting the position for the current section
	                FP.silentMoveTo(sectionIndex + 1);
	            }

	            isResizing = false;
	            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
	            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
	        };

	        /**
	        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
	        * are smaller than the set limit values.
	        */
	        FP.setResponsive = function (active){
	            var isResponsive = $body.hasClass(RESPONSIVE);

	            if(active){
	                if(!isResponsive){
	                    FP.setAutoScrolling(false, 'internal');
	                    FP.setFitToSection(false, 'internal');
	                    $(SECTION_NAV_SEL).hide();
	                    $body.addClass(RESPONSIVE);
	                }
	            }
	            else if(isResponsive){
	                FP.setAutoScrolling(originals.autoScrolling, 'internal');
	                FP.setFitToSection(originals.autoScrolling, 'internal');
	                $(SECTION_NAV_SEL).show();
	                $body.removeClass(RESPONSIVE);
	            }
	        }

	        //flag to avoid very fast sliding for landscape sliders
	        var slideMoving = false;

	        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
	        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
	        var container = $(this);
	        var windowsHeight = $window.height();
	        var isResizing = false;
	        var isWindowFocused = true;
	        var lastScrolledDestiny;
	        var lastScrolledSlide;
	        var canScroll = true;
	        var scrollings = [];
	        var nav;
	        var controlPressed;
	        var isScrollAllowed = {};
	        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
	        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
	        var originals = $.extend(true, {}, options); //deep copy

	        //timeouts
	        var resizeId;
	        var afterSectionLoadsId;
	        var afterSlideLoadsId;
	        var scrollId;
	        var scrollId2;
	        var keydownId;

	        if($(this).length){
	            init();
	            bindEvents();
	        }

	        function init(){
	            //if css3 is not supported, it will use jQuery animations
	            if(options.css3){
	                options.css3 = support3d();
	            }

	            options.scrollBar = options.scrollBar || options.hybrid;


	            setOptionsFromDOM();

	            prepareDom();
	            FP.setAllowScrolling(true);

	            FP.setAutoScrolling(options.autoScrolling, 'internal');

	            //the starting point is a slide?
	            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);

	            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
	            if( activeSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0))){
	                silentLandscapeScroll(activeSlide);
	            }

	            responsive();

	            //setting the class for the body element
	            setBodyClass();

	            $window.on('load', function() {
	                scrollToAnchor();
	            });
	        }

	        function bindEvents(){
	            $window
	                //when scrolling...
	                .on('scroll', scrollHandler)

	                //detecting any change on the URL to scroll to the given anchor link
	                //(a way to detect back history button as we play with the hashes on the URL)
	                .on('hashchange', hashChangeHandler)

	                //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
	                .blur(blurHandler)

	                //when resizing the site, we adjust the heights of the sections, slimScroll...
	                .resize(resizeHandler);

	            $document
	                //Sliding with arrow keys, both, vertical and horizontal
	                .keydown(keydownHandler)

	                //to prevent scrolling while zooming
	                .keyup(keyUpHandler)

	                //Scrolls to the section when clicking the navigation bullet
	                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

	                //Scrolls the slider to the given slide destination for the given section
	                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

	                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

	            //Scrolling horizontally when clicking on the slider controls.
	            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

	            /**
	            * Applying normalScroll elements.
	            * Ignoring the scrolls over the specified selectors.
	            */
	            if(options.normalScrollElements){
	                $document.on('mouseenter', options.normalScrollElements, function () {
	                    FP.setMouseWheelScrolling(false);
	                });

	                $document.on('mouseleave', options.normalScrollElements, function(){
	                    FP.setMouseWheelScrolling(true);
	                });
	            }
	        }

	        /**
	        * Setting options from DOM elements if they are not provided.
	        */
	        function setOptionsFromDOM(){
	            //no anchors option? Checking for them in the DOM attributes
	            if(!options.anchors.length){
	                options.anchors = $(options.sectionSelector + '[data-anchor]').map(function(){
	                    return $(this).data('anchor').toString();
	                }).get();
	            }

	            //no tooltipos option? Checking for them in the DOM attributes
	            if(!options.navigationTooltips.length){
	                options.navigationTooltips = $(options.sectionSelector + '[data-tooltip]').map(function(){
	                    return $(this).data('tooltip').toString();
	                }).get();
	            }
	        }

	        /**
	        * Works over the DOM structure to set it up for the current fullpage optionss.
	        */
	        function prepareDom(){
	            container.css({
	                'height': '100%',
	                'position': 'relative'
	            });

	            //adding a class to recognize the container internally in the code
	            container.addClass(WRAPPER);
	            $('html').addClass(ENABLED);

	            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
	            windowsHeight = $window.height();

	            container.removeClass(DESTROYED); //in case it was destroyed before initilizing it again

	            addInternalSelectors();

	             //styling the sections / slides / menu
	            $(SECTION_SEL).each(function(index){
	                var section = $(this);
	                var slides = section.find(SLIDE_SEL);
	                var numSlides = slides.length;

	                styleSection(section, index);
	                styleMenu(section, index);

	                // if there's any slide
	                if (numSlides > 0) {
	                    styleSlides(section, slides, numSlides);
	                }else{
	                    if(options.verticalCentered){
	                        addTableClass(section);
	                    }
	                }
	            });

	            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
	            if(options.fixedElements && options.css3){
	                $(options.fixedElements).appendTo($body);
	            }

	            //vertical centered of the navigation + active bullet
	            if(options.navigation){
	                addVerticalNavigation();
	            }

	            if(options.scrollOverflow){
	                if(document.readyState === 'complete'){
	                    createSlimScrollingHandler();
	                }
	                //after DOM and images are loaded
	                $window.on('load', createSlimScrollingHandler);
	            }else{
	                afterRenderActions();
	            }
	        }

	        /**
	        * Styles the horizontal slides for a section.
	        */
	        function styleSlides(section, slides, numSlides){
	            var sliderWidth = numSlides * 100;
	            var slideWidth = 100 / numSlides;

	            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
	            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

	            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

	            if(numSlides > 1){
	                if(options.controlArrows){
	                    createSlideArrows(section);
	                }

	                if(options.slidesNavigation){
	                    addSlidesNavigation(section, numSlides);
	                }
	            }

	            slides.each(function(index) {
	                $(this).css('width', slideWidth + '%');

	                if(options.verticalCentered){
	                    addTableClass($(this));
	                }
	            });

	            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

	            //if the slide won't be an starting point, the default will be the first one
	            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
	            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
	                silentLandscapeScroll(startingSlide);
	            }else{
	                slides.eq(0).addClass(ACTIVE);
	            }
	        }

	        /**
	        * Styling vertical sections
	        */
	        function styleSection(section, index){
	            //if no active section is defined, the 1st one will be the default one
	            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
	                section.addClass(ACTIVE);
	            }

	            section.css('height', windowsHeight + 'px');

	            if(options.paddingTop){
	                section.css('padding-top', options.paddingTop);
	            }

	            if(options.paddingBottom){
	                section.css('padding-bottom', options.paddingBottom);
	            }

	            if (typeof options.sectionsColor[index] !==  'undefined') {
	                section.css('background-color', options.sectionsColor[index]);
	            }

	            if (typeof options.anchors[index] !== 'undefined') {
	                section.attr('data-anchor', options.anchors[index]);
	            }
	        }

	        /**
	        * Sets the data-anchor attributes to the menu elements and activates the current one.
	        */
	        function styleMenu(section, index){
	            if (typeof options.anchors[index] !== 'undefined') {
	                //activating the menu / nav element on load
	                if(section.hasClass(ACTIVE)){
	                    activateMenuAndNav(options.anchors[index], index);
	                }
	            }

	            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
	            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
	                $(options.menu).appendTo($body);
	            }
	        }

	        /**
	        * Adds internal classes to be able to provide customizable selectors
	        * keeping the link with the style sheet.
	        */
	        function addInternalSelectors(){
	            //adding internal class names to void problem with common ones
	            $(options.sectionSelector).each(function(){
	                $(this).addClass(SECTION);
	            });
	            $(options.slideSelector).each(function(){
	                $(this).addClass(SLIDE);
	            });
	        }

	        /**
	        * Creates the control arrows for the given section
	        */
	        function createSlideArrows(section){
	            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

	            if(options.controlArrowColor!='#fff'){
	                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
	                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
	            }

	            if(!options.loopHorizontal){
	                section.find(SLIDES_ARROW_PREV_SEL).hide();
	            }
	        }

	        /**
	        * Creates a vertical navigation bar.
	        */
	        function addVerticalNavigation(){
	            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
	            var nav = $(SECTION_NAV_SEL);

	            nav.addClass(function() {
	                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
	            });

	            for (var i = 0; i < $(SECTION_SEL).length; i++) {
	                var link = '';
	                if (options.anchors.length) {
	                    link = options.anchors[i];
	                }

	                var li = '<li><a href="#' + link + '"><span></span></a>';

	                // Only add tooltip if needed (defined by user)
	                var tooltip = options.navigationTooltips[i];

	                if (typeof tooltip !== 'undefined' && tooltip !== '') {
	                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
	                }

	                li += '</li>';

	                nav.find('ul').append(li);
	            }

	            //centering it vertically
	            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

	            //activating the current active section
	            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
	        }

	        /**
	        * Creates the slim scroll scrollbar for the sections and slides inside them.
	        */
	        function createSlimScrollingHandler(){
	            $(SECTION_SEL).each(function(){
	                var slides = $(this).find(SLIDE_SEL);

	                if(slides.length){
	                    slides.each(function(){
	                        createSlimScrolling($(this));
	                    });
	                }else{
	                    createSlimScrolling($(this));
	                }

	            });
	            afterRenderActions();
	        }

	        /**
	        * Actions and callbacks to fire afterRender
	        */
	        function afterRenderActions(){
	            var section = $(SECTION_ACTIVE_SEL);

	            section.addClass(COMPLETELY);

	            if(options.scrollOverflowHandler.afterRender){
	                options.scrollOverflowHandler.afterRender(section);
	            }
	            lazyLoad(section);
	            playMedia(section);

	            $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
	            $.isFunction( options.afterRender ) && options.afterRender.call(container);
	        }


	        var isScrolling = false;
	        var lastScroll = 0;

	        //when scrolling...
	        function scrollHandler(){
	            var currentSection;

	            if(!options.autoScrolling || options.scrollBar){
	                var currentScroll = $window.scrollTop();
	                var scrollDirection = getScrollDirection(currentScroll);
	                var visibleSectionIndex = 0;
	                var screen_mid = currentScroll + ($window.height() / 2.0);

	                //taking the section which is showing more content in the viewport
	                var sections =  document.querySelectorAll(SECTION_SEL);
	                for (var i = 0; i < sections.length; ++i) {
	                    var section = sections[i];

	                    // Pick the the last section which passes the middle line of the screen.
	                    if (section.offsetTop <= screen_mid)
	                    {
	                        visibleSectionIndex = i;
	                    }
	                }

	                if(isCompletelyInViewPort(scrollDirection)){
	                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
	                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
	                    }
	                }

	                //geting the last one, the current one on the screen
	                currentSection = $(sections).eq(visibleSectionIndex);

	                //setting the visible section as active when manually scrolling
	                //executing only once the first time we reach the section
	                if(!currentSection.hasClass(ACTIVE)){
	                    isScrolling = true;
	                    var leavingSection = $(SECTION_ACTIVE_SEL);
	                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
	                    var yMovement = getYmovement(currentSection);
	                    var anchorLink  = currentSection.data('anchor');
	                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
	                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);

	                    if(activeSlide.length){
	                        var slideAnchorLink = activeSlide.data('anchor');
	                        var slideIndex = activeSlide.index();
	                    }

	                    if(canScroll){
	                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

	                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);

	                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);
	                        lazyLoad(currentSection);

	                        activateMenuAndNav(anchorLink, sectionIndex - 1);

	                        if(options.anchors.length){
	                            //needed to enter in hashChange event when using the menu with anchor links
	                            lastScrolledDestiny = anchorLink;

	                            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
	                        }
	                    }

	                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
	                    clearTimeout(scrollId);
	                    scrollId = setTimeout(function(){
	                        isScrolling = false;
	                    }, 100);
	                }

	                if(options.fitToSection){
	                    //for the auto adjust of the viewport to fit a whole section
	                    clearTimeout(scrollId2);

	                    scrollId2 = setTimeout(function(){
	                        //checking fitToSection again in case it was set to false before the timeout delay
	                        if(canScroll && options.fitToSection){
	                            //allows to scroll to an active section and
	                            //if the section is already active, we prevent firing callbacks
	                            if($(SECTION_ACTIVE_SEL).is(currentSection)){
	                                isResizing = true;
	                            }
	                            scrollPage($(SECTION_ACTIVE_SEL));

	                            isResizing = false;
	                        }
	                    }, options.fitToSectionDelay);
	                }
	            }
	        }

	        /**
	        * Determines whether the active section has seen in its whole or not.
	        */
	        function isCompletelyInViewPort(movement){
	            var top = $(SECTION_ACTIVE_SEL).position().top;
	            var bottom = top + $window.height();

	            if(movement == 'up'){
	                return bottom >= ($window.scrollTop() + $window.height());
	            }
	            return top <= $window.scrollTop();
	        }

	        /**
	        * Gets the directon of the the scrolling fired by the scroll event.
	        */
	        function getScrollDirection(currentScroll){
	            var direction = currentScroll > lastScroll ? 'down' : 'up';

	            lastScroll = currentScroll;

	            return direction;
	        }

	        /**
	        * Determines the way of scrolling up or down:
	        * by 'automatically' scrolling a section or by using the default and normal scrolling.
	        */
	        function scrolling(type, scrollable){
	            if (!isScrollAllowed.m[type]){
	                return;
	            }
	            var check, scrollSection;

	            if(type == 'down'){
	                check = 'bottom';
	                scrollSection = FP.moveSectionDown;
	            }else{
	                check = 'top';
	                scrollSection = FP.moveSectionUp;
	            }

	            if(scrollable.length > 0 ){
	                //is the scrollbar at the start/end of the scroll?
	                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
	                    scrollSection();
	                }else{
	                    return true;
	                }
	            }else{
	                // moved up/down
	                scrollSection();
	            }
	        }


	        var touchStartY = 0;
	        var touchStartX = 0;
	        var touchEndY = 0;
	        var touchEndX = 0;

	        /* Detecting touch events

	        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
	        * This way, the touchstart and the touch moves shows an small difference between them which is the
	        * used one to determine the direction.
	        */
	        function touchMoveHandler(event){
	            var e = event.originalEvent;

	            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
	            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

	                if(options.autoScrolling){
	                    //preventing the easing on iOS devices
	                    event.preventDefault();
	                }

	                var activeSection = $(SECTION_ACTIVE_SEL);
	                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

	                if (canScroll && !slideMoving) { //if theres any #
	                    var touchEvents = getEventsPage(e);

	                    touchEndY = touchEvents.y;
	                    touchEndX = touchEvents.x;

	                    //if movement in the X axys is greater than in the Y and the currect section has slides...
	                    if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

	                        //is the movement greater than the minimum resistance to scroll?
	                        if (Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
	                            if (touchStartX > touchEndX) {
	                                if(isScrollAllowed.m.right){
	                                    FP.moveSlideRight(); //next
	                                }
	                            } else {
	                                if(isScrollAllowed.m.left){
	                                    FP.moveSlideLeft(); //prev
	                                }
	                            }
	                        }
	                    }

	                    //vertical scrolling (only when autoScrolling is enabled)
	                    else if(options.autoScrolling){

	                        //is the movement greater than the minimum resistance to scroll?
	                        if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
	                            if (touchStartY > touchEndY) {
	                                scrolling('down', scrollable);
	                            } else if (touchEndY > touchStartY) {
	                                scrolling('up', scrollable);
	                            }
	                        }
	                    }
	                }
	            }

	        }

	        /**
	         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
	         * Currently works well for iOS - Android might need some testing
	         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
	         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
	         * @return {boolean} true if there is a match to options.normalScrollElements
	         */
	        function checkParentForNormalScrollElement (el, hop) {
	            hop = hop || 0;
	            var parent = $(el).parent();

	            if (hop < options.normalScrollElementTouchThreshold &&
	                parent.is(options.normalScrollElements) ) {
	                return true;
	            } else if (hop == options.normalScrollElementTouchThreshold) {
	                return false;
	            } else {
	                return checkParentForNormalScrollElement(parent, ++hop);
	            }
	        }

	        /**
	        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
	        * this way we make sure that is really a touch event what IE is detecting.
	        */
	        function isReallyTouch(e){
	            //if is not IE   ||  IE is detecting `touch` or `pen`
	            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
	        }

	        /**
	        * Handler for the touch start event.
	        */
	        function touchStartHandler(event){
	            var e = event.originalEvent;

	            //stopping the auto scroll to adjust to a section
	            if(options.fitToSection){
	                $htmlBody.stop();
	            }

	            if(isReallyTouch(e)){
	                var touchEvents = getEventsPage(e);
	                touchStartY = touchEvents.y;
	                touchStartX = touchEvents.x;
	            }
	        }

	        /**
	        * Gets the average of the last `number` elements of the given array.
	        */
	        function getAverage(elements, number){
	            var sum = 0;

	            //taking `number` elements from the end to make the average, if there are not enought, 1
	            var lastElements = elements.slice(Math.max(elements.length - number, 1));

	            for(var i = 0; i < lastElements.length; i++){
	                sum = sum + lastElements[i];
	            }

	            return Math.ceil(sum/number);
	        }

	        /**
	         * Detecting mousewheel scrolling
	         *
	         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
	         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
	         */
	        var prevTime = new Date().getTime();

	        function MouseWheelHandler(e) {
	            var curTime = new Date().getTime();
	            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

	            //autoscrolling and not zooming?
	            if(options.autoScrolling && !controlPressed && !isNormalScroll){
	                // cross-browser wheel delta
	                e = e || window.event;
	                var value = e.wheelDelta || -e.deltaY || -e.detail;
	                var delta = Math.max(-1, Math.min(1, value));

	                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
	                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

	                //Limiting the array to 150 (lets not waste memory!)
	                if(scrollings.length > 149){
	                    scrollings.shift();
	                }

	                //keeping record of the previous scrollings
	                scrollings.push(Math.abs(value));

	                //preventing to scroll the site on mouse wheel when scrollbar is present
	                if(options.scrollBar){
	                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	                }

	                var activeSection = $(SECTION_ACTIVE_SEL);
	                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

	                //time difference between the last scroll and the current one
	                var timeDiff = curTime-prevTime;
	                prevTime = curTime;

	                //haven't they scrolled in a while?
	                //(enough to be consider a different scrolling action to scroll another section)
	                if(timeDiff > 200){
	                    //emptying the array, we dont care about old scrollings for our averages
	                    scrollings = [];
	                }

	                if(canScroll){
	                    var averageEnd = getAverage(scrollings, 10);
	                    var averageMiddle = getAverage(scrollings, 70);
	                    var isAccelerating = averageEnd >= averageMiddle;

	                    //to avoid double swipes...
	                    if(isAccelerating && isScrollingVertically){
	                        //scrolling down?
	                        if (delta < 0) {
	                            scrolling('down', scrollable);

	                        //scrolling up?
	                        }else {
	                            scrolling('up', scrollable);
	                        }
	                    }
	                }

	                return false;
	            }

	            if(options.fitToSection){
	                //stopping the auto scroll to adjust to a section
	                $htmlBody.stop();
	            }
	        }

	        /**
	        * Slides a slider to the given direction.
	        * Optional `section` param.
	        */
	        function moveSlide(direction, section){
	            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
	            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
	            var numSlides = slides.find(SLIDE_SEL).length;

	            // more than one slide needed and nothing should be sliding
	            if (!slides.length || slideMoving || numSlides < 2) {
	                return;
	            }

	            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
	            var destiny = null;

	            if(direction === 'prev'){
	                destiny = currentSlide.prev(SLIDE_SEL);
	            }else{
	                destiny = currentSlide.next(SLIDE_SEL);
	            }

	            //isn't there a next slide in the secuence?
	            if(!destiny.length){
	                //respect loopHorizontal settin
	                if (!options.loopHorizontal) return;

	                if(direction === 'prev'){
	                    destiny = currentSlide.siblings(':last');
	                }else{
	                    destiny = currentSlide.siblings(':first');
	                }
	            }

	            slideMoving = true;

	            landscapeScroll(slides, destiny);
	        }

	        /**
	        * Maintains the active slides in the viewport
	        * (Because he `scroll` animation might get lost with some actions, such as when using continuousVertical)
	        */
	        function keepSlidesPosition(){
	            $(SLIDE_ACTIVE_SEL).each(function(){
	                silentLandscapeScroll($(this), 'internal');
	            });
	        }

	        var previousDestTop = 0;
	        /**
	        * Returns the destination Y position based on the scrolling direction and
	        * the height of the section.
	        */
	        function getDestinationPosition(element){
	            var elemPosition = element.position();

	            //top of the desination will be at the top of the viewport
	            var position = elemPosition.top;
	            var isScrollingDown =  elemPosition.top > previousDestTop;
	            var sectionBottom = position - windowsHeight + element.outerHeight();

	            //is the destination element bigger than the viewport?
	            if(element.outerHeight() > windowsHeight){
	                //scrolling up?
	                if(!isScrollingDown){
	                    position = sectionBottom;
	                }
	            }

	            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
	            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
	                //The bottom of the destination will be at the bottom of the viewport
	                position = sectionBottom;
	            }

	            /*
	            Keeping record of the last scrolled position to determine the scrolling direction.
	            No conventional methods can be used as the scroll bar might not be present
	            AND the section might not be active if it is auto-height and didnt reach the middle
	            of the viewport.
	            */
	            previousDestTop = position;
	            return position;
	        }

	        /**
	        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
	        */
	        function scrollPage(element, callback, isMovementUp){
	            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

	            var dtop = getDestinationPosition(element);

	            //local variables
	            var v = {
	                element: element,
	                callback: callback,
	                isMovementUp: isMovementUp,
	                dtop: dtop,
	                yMovement: getYmovement(element),
	                anchorLink: element.data('anchor'),
	                sectionIndex: element.index(SECTION_SEL),
	                activeSlide: element.find(SLIDE_ACTIVE_SEL),
	                activeSection: $(SECTION_ACTIVE_SEL),
	                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

	                //caching the value of isResizing at the momment the function is called
	                //because it will be checked later inside a setTimeout and the value might change
	                localIsResizing: isResizing
	            };

	            //quiting when destination scroll is the same as the current one
	            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

	            if(v.activeSlide.length){
	                var slideAnchorLink = v.activeSlide.data('anchor');
	                var slideIndex = v.activeSlide.index();
	            }

	            // If continuousVertical && we need to wrap around
	            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
	                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
	                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

	                v = createInfiniteSections(v);
	            }

	            //callback (onLeave) if the site is not just resizing and readjusting the slides
	            if($.isFunction(options.onLeave) && !v.localIsResizing){
	                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
	                    return;
	                }
	            }
	            stopMedia(v.activeSection);

	            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	            lazyLoad(element);

	            //preventing from activating the MouseWheelHandler event
	            //more than once if the page is scrolling
	            canScroll = false;

	            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

	            performMovement(v);

	            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
	            lastScrolledDestiny = v.anchorLink;

	            //avoid firing it twice (as it does also on scroll)
	            activateMenuAndNav(v.anchorLink, v.sectionIndex);
	        }

	        /**
	        * Performs the movement (by CSS3 or by jQuery)
	        */
	        function performMovement(v){
	            // using CSS3 translate functionality
	            if (options.css3 && options.autoScrolling && !options.scrollBar) {
	                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
	                transformContainer(translate3d, true);

	                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
	                //scrollingSpeed to change in case of using silentMoveTo();
	                if(options.scrollingSpeed){
	                    afterSectionLoadsId = setTimeout(function () {
	                        afterSectionLoads(v);
	                    }, options.scrollingSpeed);
	                }else{
	                    afterSectionLoads(v);
	                }
	            }

	            // using jQuery animate
	            else{
	                var scrollSettings = getScrollSettings(v);

	                $(scrollSettings.element).animate(
	                    scrollSettings.options,
	                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
	                    if(options.scrollBar){

	                        /* Hack!
	                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
	                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

	                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
	                        */
	                        setTimeout(function(){
	                            afterSectionLoads(v);
	                        },30);
	                    }else{
	                        afterSectionLoads(v);
	                    }
	                });
	            }
	        }

	        /**
	        * Gets the scrolling settings depending on the plugin autoScrolling option
	        */
	        function getScrollSettings(v){
	            var scroll = {};

	            if(options.autoScrolling && !options.scrollBar){
	                scroll.options = { 'top': -v.dtop};
	                scroll.element = WRAPPER_SEL;
	            }else{
	                scroll.options = { 'scrollTop': v.dtop};
	                scroll.element = 'html, body';
	            }

	            return scroll;
	        }

	        /**
	        * Adds sections before or after the current one to create the infinite effect.
	        */
	        function createInfiniteSections(v){
	            // Scrolling down
	            if (!v.isMovementUp) {
	                // Move all previous sections to after the active section
	                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
	            }
	            else { // Scrolling up
	                // Move all next sections to before the active section
	                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
	            }

	            // Maintain the displayed position (now that we changed the element order)
	            silentScroll($(SECTION_ACTIVE_SEL).position().top);

	            // Maintain the active slides visible in the viewport
	            keepSlidesPosition();

	            // save for later the elements that still need to be reordered
	            v.wrapAroundElements = v.activeSection;

	            // Recalculate animation variables
	            v.dtop = v.element.position().top;
	            v.yMovement = getYmovement(v.element);

	            return v;
	        }

	        /**
	        * Fix section order after continuousVertical changes have been animated
	        */
	        function continuousVerticalFixSectionOrder (v) {
	            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
	            // finish moving the elements around so the direct navigation will function more simply
	            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
	                return;
	            }

	            if (v.isMovementUp) {
	                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
	            }
	            else {
	                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
	            }

	            silentScroll($(SECTION_ACTIVE_SEL).position().top);

	            // Maintain the active slides visible in the viewport
	            keepSlidesPosition();
	        }


	        /**
	        * Actions to do once the section is loaded.
	        */
	        function afterSectionLoads (v){
	            continuousVerticalFixSectionOrder(v);

	            v.element.find('.fp-scrollable').mouseover();

	            //callback (afterLoad) if the site is not just resizing and readjusting the slides
	            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));

	            playMedia(v.element);
	            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

	            canScroll = true;

	            $.isFunction(v.callback) && v.callback.call(this);
	        }

	        /**
	        * Lazy loads image, video and audio elements.
	        */
	        function lazyLoad(destiny){
	            var destiny = getSlideOrSection(destiny);

	            destiny.find('img[data-src], source[data-src], audio[data-src]').each(function(){
	                $(this).attr('src', $(this).data('src'));
	                $(this).removeAttr('data-src');

	                if($(this).is('source')){
	                    $(this).closest('video').get(0).load();
	                }
	            });
	        }

	        /**
	        * Plays video and audio elements.
	        */
	        function playMedia(destiny){
	            var destiny = getSlideOrSection(destiny);

	            //playing HTML5 media elements
	            destiny.find('video, audio').each(function(){
	                var element = $(this).get(0);

	                if( element.hasAttribute('autoplay') && typeof element.play === 'function' ) {
	                    element.play();
	                }
	            });
	        }

	        /**
	        * Stops video and audio elements.
	        */
	        function stopMedia(destiny){
	            var destiny = getSlideOrSection(destiny);

	            //stopping HTML5 media elements
	            destiny.find('video, audio').each(function(){
	                var element = $(this).get(0);

	                if( !element.hasAttribute('data-ignore') && typeof element.pause === 'function' ) {
	                    element.pause();
	                }
	            });
	        }

	        /**
	        * Gets the active slide (or section) for the given section
	        */
	        function getSlideOrSection(destiny){
	            var slide = destiny.find(SLIDE_ACTIVE_SEL);
	            if( slide.length ) {
	                destiny = $(slide);
	            }

	            return destiny;
	        }

	        /**
	        * Scrolls to the anchor in the URL when loading the site
	        */
	        function scrollToAnchor(){
	            //getting the anchor link in the URL and deleting the `#`
	            var value =  window.location.hash.replace('#', '').split('/');
	            var section = value[0];
	            var slide = value[1];

	            if(section){  //if theres any #
	                if(options.animateAnchor){
	                    scrollPageAndSlide(section, slide);
	                }else{
	                    FP.silentMoveTo(section, slide);
	                }
	            }
	        }

	        /**
	        * Detecting any change on the URL to scroll to the given anchor link
	        * (a way to detect back history button as we play with the hashes on the URL)
	        */
	        function hashChangeHandler(){
	            if(!isScrolling && !options.lockAnchors){
	                var value =  window.location.hash.replace('#', '').split('/');
	                var section = value[0];
	                var slide = value[1];

	                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
	                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
	                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);


	                if(section.length){
	                    /*in order to call scrollpage() only once for each destination at a time
	                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
	                    event is fired on every scroll too.*/
	                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
	                        scrollPageAndSlide(section, slide);
	                    }
	                }
	            }
	        }

	        //Sliding with arrow keys, both, vertical and horizontal
	        function keydownHandler(e) {

	            clearTimeout(keydownId);

	            var activeElement = $(':focus');

	            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
	                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
	                options.keyboardScrolling && options.autoScrolling){
	                var keyCode = e.which;

	                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
	                var keyControls = [40, 38, 32, 33, 34];
	                if($.inArray(keyCode, keyControls) > -1){
	                    e.preventDefault();
	                }

	                controlPressed = e.ctrlKey;

	                keydownId = setTimeout(function(){
	                    onkeydown(e);
	                },150);
	            }
	        }

	        function tooltipTextHandler(){
	            $(this).prev().trigger('click');
	        }

	        //to prevent scrolling while zooming
	        function keyUpHandler(e){
	            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
	                controlPressed = e.ctrlKey;
	            }
	        }

	        //binding the mousemove when the mouse's middle button is released
	        function mouseDownHandler(e){
	            //middle button
	            if (e.which == 2){
	                oldPageY = e.pageY;
	                container.on('mousemove', mouseMoveHandler);
	            }
	        }

	        //unbinding the mousemove when the mouse's middle button is released
	        function mouseUpHandler(e){
	            //middle button
	            if (e.which == 2){
	                container.off('mousemove');
	            }
	        }

	        //Scrolling horizontally when clicking on the slider controls.
	        function slideArrowHandler(){
	            var section = $(this).closest(SECTION_SEL);

	            if ($(this).hasClass(SLIDES_PREV)) {
	                if(isScrollAllowed.m.left){
	                    FP.moveSlideLeft(section);
	                }
	            } else {
	                if(isScrollAllowed.m.right){
	                    FP.moveSlideRight(section);
	                }
	            }
	        }

	        //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
	        function blurHandler(){
	            isWindowFocused = false;
	            controlPressed = false;
	        }

	        //Scrolls to the section when clicking the navigation bullet
	        function sectionBulletHandler(e){
	            e.preventDefault();
	            var index = $(this).parent().index();
	            scrollPage($(SECTION_SEL).eq(index));
	        }

	        //Scrolls the slider to the given slide destination for the given section
	        function slideBulletHandler(e){
	            e.preventDefault();
	            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
	            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

	            landscapeScroll(slides, destiny);
	        }

	        /**
	        * Keydown event
	        */
	        function onkeydown(e){
	            var shiftPressed = e.shiftKey;

	            switch (e.which) {
	                //up
	                case 38:
	                case 33:
	                    if(isScrollAllowed.k.up){
	                        FP.moveSectionUp();
	                    }
	                    break;

	                //down
	                case 32: //spacebar
	                    if(shiftPressed && isScrollAllowed.k.up){
	                        FP.moveSectionUp();
	                        break;
	                    }
	                case 40:
	                case 34:
	                    if(isScrollAllowed.k.down){
	                        FP.moveSectionDown();
	                    }
	                    break;

	                //Home
	                case 36:
	                    if(isScrollAllowed.k.up){
	                        FP.moveTo(1);
	                    }
	                    break;

	                //End
	                case 35:
	                     if(isScrollAllowed.k.down){
	                        FP.moveTo( $(SECTION_SEL).length );
	                    }
	                    break;

	                //left
	                case 37:
	                    if(isScrollAllowed.k.left){
	                        FP.moveSlideLeft();
	                    }
	                    break;

	                //right
	                case 39:
	                    if(isScrollAllowed.k.right){
	                        FP.moveSlideRight();
	                    }
	                    break;

	                default:
	                    return; // exit this handler for other keys
	            }
	        }

	        /**
	        * Detecting the direction of the mouse movement.
	        * Used only for the middle button of the mouse.
	        */
	        var oldPageY = 0;
	        function mouseMoveHandler(e){
	            if(canScroll){
	                // moving up
	                if (e.pageY < oldPageY && isScrollAllowed.m.up){
	                    FP.moveSectionUp();
	                }

	                // moving down
	                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
	                    FP.moveSectionDown();
	                }
	            }
	            oldPageY = e.pageY;
	        }

	        /**
	        * Scrolls horizontal sliders.
	        */
	        function landscapeScroll(slides, destiny){
	            var destinyPos = destiny.position();
	            var slideIndex = destiny.index();
	            var section = slides.closest(SECTION_SEL);
	            var sectionIndex = section.index(SECTION_SEL);
	            var anchorLink = section.data('anchor');
	            var slidesNav = section.find(SLIDES_NAV_SEL);
	            var slideAnchor = getAnchor(destiny);
	            var prevSlide = section.find(SLIDE_ACTIVE_SEL);

	            //caching the value of isResizing at the momment the function is called
	            //because it will be checked later inside a setTimeout and the value might change
	            var localIsResizing = isResizing;

	            if(options.onSlideLeave){
	                var prevSlideIndex = prevSlide.index();
	                var xMovement = getXmovement(prevSlideIndex, slideIndex);

	                //if the site is not just resizing and readjusting the slides
	                if(!localIsResizing && xMovement!=='none'){
	                    if($.isFunction( options.onSlideLeave )){
	                        if(options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement, slideIndex ) === false){
	                            slideMoving = false;
	                            return;
	                        }
	                    }
	                }
	            }
	            stopMedia(prevSlide);

	            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	            if(!localIsResizing){
	                lazyLoad(destiny);
	            }

	            if(!options.loopHorizontal && options.controlArrows){
	                //hidding it for the fist slide, showing for the rest
	                section.find(SLIDES_ARROW_PREV_SEL).toggle(slideIndex!==0);

	                //hidding it for the last slide, showing for the rest
	                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
	            }

	            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
	            if(section.hasClass(ACTIVE)){
	                setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
	            }

	            var afterSlideLoads = function(){
	                //if the site is not just resizing and readjusting the slides
	                if(!localIsResizing){
	                    $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
	                }
	                playMedia(destiny);

	                //letting them slide again
	                slideMoving = false;
	            };

	            if(options.css3){
	                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

	                addAnimation(slides.find(SLIDES_CONTAINER_SEL), options.scrollingSpeed>0).css(getTransforms(translate3d));

	                afterSlideLoadsId = setTimeout(function(){
	                    afterSlideLoads();
	                }, options.scrollingSpeed, options.easing);
	            }else{
	                slides.animate({
	                    scrollLeft : Math.round(destinyPos.left)
	                }, options.scrollingSpeed, options.easing, function() {

	                    afterSlideLoads();
	                });
	            }

	            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
	            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
	        }

	        var previousHeight = windowsHeight;

	        //when resizing the site, we adjust the heights of the sections, slimScroll...
	        function resizeHandler(){
	            //checking if it needs to get responsive
	            responsive();

	            // rebuild immediately on touch devices
	            if (isTouchDevice) {
	                var activeElement = $(document.activeElement);

	                //if the keyboard is NOT visible
	                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
	                    var currentHeight = $window.height();

	                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
	                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
	                        FP.reBuild(true);
	                        previousHeight = currentHeight;
	                    }
	                }
	            }else{
	                //in order to call the functions only when the resize is finished
	                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
	                clearTimeout(resizeId);

	                resizeId = setTimeout(function(){
	                    FP.reBuild(true);
	                }, 350);
	            }
	        }

	        /**
	        * Checks if the site needs to get responsive and disables autoScrolling if so.
	        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
	        */
	        function responsive(){
	            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
	            var heightLimit = options.responsiveHeight;

	            //only calculating what we need. Remember its called on the resize event.
	            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
	            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

	            if(widthLimit && heightLimit){
	                FP.setResponsive(isBreakingPointWidth || isBreakingPointHeight);
	            }
	            else if(widthLimit){
	                FP.setResponsive(isBreakingPointWidth);
	            }
	            else if(heightLimit){
	                FP.setResponsive(isBreakingPointHeight);
	            }
	        }

	        /**
	        * Adds transition animations for the given element
	        */
	        function addAnimation(element){
	            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

	            element.removeClass(NO_TRANSITION);
	            return element.css({
	                '-webkit-transition': transition,
	                'transition': transition
	            });
	        }

	        /**
	        * Remove transition animations for the given element
	        */
	        function removeAnimation(element){
	            return element.addClass(NO_TRANSITION);
	        }

	        /**
	         * Resizing of the font size depending on the window size as well as some of the images on the site.
	         */
	        function resizeMe(displayHeight, displayWidth) {
	            //Standard dimensions, for which the body font size is correct
	            var preferredHeight = 825;
	            var preferredWidth = 900;

	            if (displayHeight < preferredHeight || displayWidth < preferredWidth) {
	                var heightPercentage = (displayHeight * 100) / preferredHeight;
	                var widthPercentage = (displayWidth * 100) / preferredWidth;
	                var percentage = Math.min(heightPercentage, widthPercentage);
	                var newFontSize = percentage.toFixed(2);

	                $body.css('font-size', newFontSize + '%');
	            } else {
	                $body.css('font-size', '100%');
	            }
	        }

	        /**
	         * Activating the website navigation dots according to the given slide name.
	         */
	        function activateNavDots(name, sectionIndex){
	            if(options.navigation){
	                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
	                if(name){
	                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
	                }else{
	                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
	                }
	            }
	        }

	        /**
	         * Activating the website main menu elements according to the given slide name.
	         */
	        function activateMenuElement(name){
	            if(options.menu){
	                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
	                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
	            }
	        }

	        /**
	        * Sets to active the current menu and vertical nav items.
	        */
	        function activateMenuAndNav(anchor, index){
	            activateMenuElement(anchor);
	            activateNavDots(anchor, index);
	        }

	        /**
	        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
	        * from the current section.
	        */
	        function getYmovement(destiny){
	            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
	            var toIndex = destiny.index(SECTION_SEL);
	            if( fromIndex == toIndex){
	                return 'none';
	            }
	            if(fromIndex > toIndex){
	                return 'up';
	            }
	            return 'down';
	        }

	        /**
	        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
	        * from the current slide.
	        */
	        function getXmovement(fromIndex, toIndex){
	            if( fromIndex == toIndex){
	                return 'none';
	            }
	            if(fromIndex > toIndex){
	                return 'left';
	            }
	            return 'right';
	        }


	        function createSlimScrolling(element){
	            //needed to make `scrollHeight` work under Opera 12
	            element.css('overflow', 'hidden');

	            var scrollOverflowHandler = options.scrollOverflowHandler;
	            var wrap = scrollOverflowHandler.wrapContent();
	            //in case element is a slide
	            var section = element.closest(SECTION_SEL);
	            var scrollable = scrollOverflowHandler.scrollable(element);
	            var contentHeight;

	            //if there was scroll, the contentHeight will be the one in the scrollable section
	            if(scrollable.length){
	                contentHeight = scrollOverflowHandler.scrollHeight(element);
	            }else{
	                contentHeight = element.get(0).scrollHeight;
	                if(options.verticalCentered){
	                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
	                }
	            }

	            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

	            //needs scroll?
	            if ( contentHeight > scrollHeight) {
	                //was there already an scroll ? Updating it
	                if(scrollable.length){
	                    scrollOverflowHandler.update(element, scrollHeight);
	                }
	                //creating the scrolling
	                else{
	                    if(options.verticalCentered){
	                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
	                    }else{
	                        element.wrapInner(wrap);
	                    }
	                    scrollOverflowHandler.create(element, scrollHeight);
	                }
	            }
	            //removing the scrolling when it is not necessary anymore
	            else{
	                scrollOverflowHandler.remove(element);
	            }

	            //undo
	            element.css('overflow', '');
	        }

	        function addTableClass(element){
	            element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
	        }

	        function getTableHeight(element){
	            var sectionHeight = windowsHeight;

	            if(options.paddingTop || options.paddingBottom){
	                var section = element;
	                if(!section.hasClass(SECTION)){
	                    section = element.closest(SECTION_SEL);
	                }

	                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
	                sectionHeight = (windowsHeight - paddings);
	            }

	            return sectionHeight;
	        }

	        /**
	        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
	        */
	        function transformContainer(translate3d, animated){
	            if(animated){
	                addAnimation(container);
	            }else{
	                removeAnimation(container);
	            }

	            container.css(getTransforms(translate3d));

	            //syncronously removing the class after the animation has been applied.
	            setTimeout(function(){
	                container.removeClass(NO_TRANSITION);
	            },10);
	        }

	        /**
	        * Gets a section by its anchor / index
	        */
	        function getSectionByAnchor(sectionAnchor){
	            //section
	            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
	            if(!section.length){
	                section = $(SECTION_SEL).eq( (sectionAnchor -1) );
	            }

	            return section;
	        }

	        /**
	        * Gets a slide inside a given section by its anchor / index
	        */
	        function getSlideByAnchor(slideAnchor, section){
	            var slides = section.find(SLIDES_WRAPPER_SEL);
	            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

	            if(!slide.length){
	                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
	            }

	            return slide;
	        }

	        /**
	        * Scrolls to the given section and slide anchors
	        */
	        function scrollPageAndSlide(destiny, slide){
	            var section = getSectionByAnchor(destiny);

	            //default slide
	            if (typeof slide === 'undefined') {
	                slide = 0;
	            }

	            //we need to scroll to the section and then to the slide
	            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
	                scrollPage(section, function(){
	                    scrollSlider(section, slide);
	                });
	            }
	            //if we were already in the section
	            else{
	                scrollSlider(section, slide);
	            }
	        }

	        /**
	        * Scrolls the slider to the given slide destination for the given section
	        */
	        function scrollSlider(section, slideAnchor){
	            if(typeof slideAnchor !== 'undefined'){
	                var slides = section.find(SLIDES_WRAPPER_SEL);
	                var destiny =  getSlideByAnchor(slideAnchor, section);

	                if(destiny.length){
	                    landscapeScroll(slides, destiny);
	                }
	            }
	        }

	        /**
	        * Creates a landscape navigation bar with dots for horizontal sliders.
	        */
	        function addSlidesNavigation(section, numSlides){
	            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
	            var nav = section.find(SLIDES_NAV_SEL);

	            //top or bottom
	            nav.addClass(options.slidesNavPosition);

	            for(var i=0; i< numSlides; i++){
	                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
	            }

	            //centering it
	            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

	            nav.find('li').first().find('a').addClass(ACTIVE);
	        }


	        /**
	        * Sets the state of the website depending on the active section/slide.
	        * It changes the URL hash when needed and updates the body class.
	        */
	        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
	            var sectionHash = '';

	            if(options.anchors.length && !options.lockAnchors){

	                //isn't it the first slide?
	                if(slideIndex){
	                    if(typeof anchorLink !== 'undefined'){
	                        sectionHash = anchorLink;
	                    }

	                    //slide without anchor link? We take the index instead.
	                    if(typeof slideAnchor === 'undefined'){
	                        slideAnchor = slideIndex;
	                    }

	                    lastScrolledSlide = slideAnchor;
	                    setUrlHash(sectionHash + '/' + slideAnchor);

	                //first slide won't have slide anchor, just the section one
	                }else if(typeof slideIndex !== 'undefined'){
	                    lastScrolledSlide = slideAnchor;
	                    setUrlHash(anchorLink);
	                }

	                //section without slides
	                else{
	                    setUrlHash(anchorLink);
	                }
	            }

	            setBodyClass();
	        }

	        /**
	        * Sets the URL hash.
	        */
	        function setUrlHash(url){
	            if(options.recordHistory){
	                location.hash = url;
	            }else{
	                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
	                if(isTouchDevice || isTouch){
	                    window.history.replaceState(undefined, undefined, '#' + url);
	                }else{
	                    var baseUrl = window.location.href.split('#')[0];
	                    window.location.replace( baseUrl + '#' + url );
	                }
	            }
	        }

	        /**
	        * Gets the anchor for the given slide / section. Its index will be used if there's none.
	        */
	        function getAnchor(element){
	            var anchor = element.data('anchor');
	            var index = element.index();

	            //Slide without anchor link? We take the index instead.
	            if(typeof anchor === 'undefined'){
	                anchor = index;
	            }

	            return anchor;
	        }

	        /**
	        * Sets a class for the body of the page depending on the active section / slide
	        */
	        function setBodyClass(){
	            var section = $(SECTION_ACTIVE_SEL);
	            var slide = section.find(SLIDE_ACTIVE_SEL);

	            var sectionAnchor = getAnchor(section);
	            var slideAnchor = getAnchor(slide);

	            var sectionIndex = section.index(SECTION_SEL);

	            var text = String(sectionAnchor);

	            if(slide.length){
	                text = text + '-' + slideAnchor;
	            }

	            //changing slash for dash to make it a valid CSS style
	            text = text.replace('/', '-').replace('#','');

	            //removing previous anchor classes
	            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
	            $body[0].className = $body[0].className.replace(classRe, '');

	            //adding the current anchor
	            $body.addClass(VIEWING_PREFIX + '-' + text);
	        }

	        /**
	        * Checks for translate3d support
	        * @return boolean
	        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	        */
	        function support3d() {
	            var el = document.createElement('p'),
	                has3d,
	                transforms = {
	                    'webkitTransform':'-webkit-transform',
	                    'OTransform':'-o-transform',
	                    'msTransform':'-ms-transform',
	                    'MozTransform':'-moz-transform',
	                    'transform':'transform'
	                };

	            // Add it to the body to get the computed style.
	            document.body.insertBefore(el, null);

	            for (var t in transforms) {
	                if (el.style[t] !== undefined) {
	                    el.style[t] = 'translate3d(1px,1px,1px)';
	                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	                }
	            }

	            document.body.removeChild(el);

	            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
	        }

	        /**
	        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
	        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
	        */
	        function removeMouseWheelHandler(){
	            if (document.addEventListener) {
	                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
	                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
	                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
	            } else {
	                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
	            }
	        }

	        /**
	        * Adds the auto scrolling action for the mouse wheel and trackpad.
	        * After this function is called, the mousewheel and trackpad movements will scroll through sections
	        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	        */
	        function addMouseWheelHandler(){
	            var prefix = '';
	            var _addEventListener;

	            if (window.addEventListener){
	                _addEventListener = "addEventListener";
	            }else{
	                _addEventListener = "attachEvent";
	                prefix = 'on';
	            }

	             // detect available wheel event
	            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
	                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
	                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


	            if(support == 'DOMMouseScroll'){
	                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
	            }

	            //handle MozMousePixelScroll in older Firefox
	            else{
	                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
	            }
	        }

	        /**
	        * Binding the mousemove when the mouse's middle button is pressed
	        */
	        function addMiddleWheelHandler(){
	            container
	                .on('mousedown', mouseDownHandler)
	                .on('mouseup', mouseUpHandler);
	        }

	        /**
	        * Unbinding the mousemove when the mouse's middle button is released
	        */
	        function removeMiddleWheelHandler(){
	            container
	                .off('mousedown', mouseDownHandler)
	                .off('mouseup', mouseUpHandler);
	        }

	        /**
	        * Adds the possibility to auto scroll through sections on touch devices.
	        */
	        function addTouchHandler(){
	            if(isTouchDevice || isTouch){
	                //Microsoft pointers
	                var MSPointer = getMSPointer();

	                $(WRAPPER_SEL).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
	                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
	            }
	        }

	        /**
	        * Removes the auto scrolling for touch devices.
	        */
	        function removeTouchHandler(){
	            if(isTouchDevice || isTouch){
	                //Microsoft pointers
	                var MSPointer = getMSPointer();

	                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down);
	                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move);
	            }
	        }

	        /*
	        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
	        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
	        */
	        function getMSPointer(){
	            var pointer;

	            //IE >= 11 & rest of browsers
	            if(window.PointerEvent){
	                pointer = { down: 'pointerdown', move: 'pointermove'};
	            }

	            //IE < 11
	            else{
	                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
	            }

	            return pointer;
	        }

	        /**
	        * Gets the pageX and pageY properties depending on the browser.
	        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
	        */
	        function getEventsPage(e){
	            var events = [];

	            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
	            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

	            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
	            if(isTouch && isReallyTouch(e) && options.scrollBar){
	                events.y = e.touches[0].pageY;
	                events.x = e.touches[0].pageX;
	            }

	            return events;
	        }

	        /**
	        * Slides silently (with no animation) the active slider to the given slide.
	        */
	        function silentLandscapeScroll(activeSlide, noCallbacks){
	            FP.setScrollingSpeed (0, 'internal');

	            if(typeof noCallbacks !== 'undefined'){
	                //preventing firing callbacks afterSlideLoad etc.
	                isResizing = true;
	            }

	            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

	            if(typeof noCallbacks !== 'undefined'){
	                isResizing = false;
	            }

	            FP.setScrollingSpeed(originals.scrollingSpeed, 'internal');
	        }

	        /**
	        * Scrolls silently (with no animation) the page to the given Y position.
	        */
	        function silentScroll(top){
	            if(options.scrollBar){
	                container.scrollTop(top);
	            }
	            else if (options.css3) {
	                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
	                transformContainer(translate3d, false);
	            }
	            else {
	                container.css('top', -top);
	            }
	        }

	        /**
	        * Returns the cross-browser transform string.
	        */
	        function getTransforms(translate3d){
	            return {
	                '-webkit-transform': translate3d,
	                '-moz-transform': translate3d,
	                '-ms-transform':translate3d,
	                'transform': translate3d
	            };
	        }

	        /**
	        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
	        * @type  m (mouse) or k (keyboard)
	        */
	        function setIsScrollAllowed(value, direction, type){
	            switch (direction){
	                case 'up': isScrollAllowed[type].up = value; break;
	                case 'down': isScrollAllowed[type].down = value; break;
	                case 'left': isScrollAllowed[type].left = value; break;
	                case 'right': isScrollAllowed[type].right = value; break;
	                case 'all':
	                    if(type == 'm'){
	                        FP.setAllowScrolling(value);
	                    }else{
	                        FP.setKeyboardScrolling(value);
	                    }
	            }
	        }

	        /*
	        * Destroys fullpage.js plugin events and optinally its html markup and styles
	        */
	        FP.destroy = function(all){
	            FP.setAutoScrolling(false, 'internal');
	            FP.setAllowScrolling(false);
	            FP.setKeyboardScrolling(false);
	            container.addClass(DESTROYED);

	            clearTimeout(afterSlideLoadsId);
	            clearTimeout(afterSectionLoadsId);
	            clearTimeout(resizeId);
	            clearTimeout(scrollId);
	            clearTimeout(scrollId2);

	            $window
	                .off('scroll', scrollHandler)
	                .off('hashchange', hashChangeHandler)
	                .off('resize', resizeHandler);

	            $document
	                .off('click', SECTION_NAV_SEL + ' a')
	                .off('mouseenter', SECTION_NAV_SEL + ' li')
	                .off('mouseleave', SECTION_NAV_SEL + ' li')
	                .off('click', SLIDES_NAV_LINK_SEL)
	                .off('mouseover', options.normalScrollElements)
	                .off('mouseout', options.normalScrollElements);

	            $(SECTION_SEL)
	                .off('click', SLIDES_ARROW_SEL);

	            clearTimeout(afterSlideLoadsId);
	            clearTimeout(afterSectionLoadsId);

	            //lets make a mess!
	            if(all){
	                destroyStructure();
	            }
	        };

	        /*
	        * Removes inline styles added by fullpage.js
	        */
	        function destroyStructure(){
	            //reseting the `top` or `translate` properties to 0
	            silentScroll(0);

	            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

	            //removing inline styles
	            $(SECTION_SEL).css( {
	                'height': '',
	                'background-color' : '',
	                'padding': ''
	            });

	            $(SLIDE_SEL).css( {
	                'width': ''
	            });

	            container.css({
	                'height': '',
	                'position': '',
	                '-ms-touch-action': '',
	                'touch-action': ''
	            });

	            $htmlBody.css({
	                'overflow': '',
	                'height': ''
	            });

	            // remove .fp-enabled class
	            $('html').removeClass(ENABLED);

	            // remove all of the .fp-viewing- classes
	            $.each($body.get(0).className.split(/\s+/), function (index, className) {
	                if (className.indexOf(VIEWING_PREFIX) === 0) {
	                    $body.removeClass(className);
	                }
	            });

	            //removing added classes
	            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
	                options.scrollOverflowHandler.remove($(this));
	                $(this).removeClass(TABLE + ' ' + ACTIVE);
	            });

	            removeAnimation(container);

	            //Unwrapping content
	            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
	                //unwrap not being use in case there's no child element inside and its just text
	                $(this).replaceWith(this.childNodes);
	            });

	            //scrolling the page to the top with no animation
	            $htmlBody.scrollTop(0);

	            //removing selectors
	            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
	            $.each(usedSelectors, function(index, value){
	                $('.' + value).removeClass(value);
	            });
	        }

	        /*
	        * Sets the state for a variable with multiple states (original, and temporal)
	        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
	        * This function is used to keep track of both states, the original and the temporal one.
	        * If type is not 'internal', then we assume the user is globally changing the variable.
	        */
	        function setVariableState(variable, value, type){
	            options[variable] = value;
	            if(type !== 'internal'){
	                originals[variable] = value;
	            }
	        }

	        /**
	        * Displays warnings
	        */
	        function displayWarnings(){
	            if($('html').hasClass(ENABLED)){
	                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
	                return;
	            }

	            // Disable mutually exclusive settings
	            if (options.continuousVertical &&
	                (options.loopTop || options.loopBottom)) {
	                options.continuousVertical = false;
	                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
	            }

	            if(options.scrollBar && options.scrollOverflow){
	                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
	            }

	            if(options.continuousVertical && options.scrollBar){
	                options.continuousVertical = false;
	                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
	            }

	            //anchors can not have the same value as any element ID or NAME
	            $.each(options.anchors, function(index, name){

	                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
	                var nameAttr = $document.find('[name]').filter(function() {
	                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
	                });

	                var idAttr = $document.find('[id]').filter(function() {
	                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
	                });

	                if(idAttr.length || nameAttr.length ){
	                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
	                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
	                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
	                }
	            });
	        }

	        /**
	        * Shows a message in the console of the given type.
	        */
	        function showError(type, text){
	            console && console[type] && console[type]('fullPage: ' + text);
	        }
	    };

	    /**
	     * An object to handle overflow scrolling.
	     * This uses jquery.slimScroll to accomplish overflow scrolling.
	     * It is possible to pass in an alternate scrollOverflowHandler
	     * to the fullpage.js option that implements the same functions
	     * as this handler.
	     *
	     * @type {Object}
	     */
	    var slimScrollHandler = {
	        /**
	         * Optional function called after each render.
	         *
	         * Solves a bug with slimScroll vendor library #1037, #553
	         *
	         * @param  {object} section jQuery object containing rendered section
	         */
	        afterRender: function(section){
	            var slides = section.find(SLIDES_WRAPPER);
	            var scrollableWrap = section.find(SCROLLABLE_SEL);

	            if(slides.length){
	                scrollableWrap = slides.find(SLIDE_ACTIVE_SEL);
	            }

	            scrollableWrap.mouseover();
	        },

	        /**
	         * Called when overflow scrolling is needed for a section.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         * @param  {Number} scrollHeight Current window height in pixels
	         */
	        create: function(element, scrollHeight){
	            element.find(SCROLLABLE_SEL).slimScroll({
	                allowPageScroll: true,
	                height: scrollHeight + 'px',
	                size: '10px',
	                alwaysVisible: true
	            });
	        },

	        /**
	         * Return a boolean depending on whether the scrollable element is a
	         * the end or at the start of the scrolling depending on the given type.
	         *
	         * @param  {String}  type       Either 'top' or 'bottom'
	         * @param  {Object}  scrollable jQuery object for the scrollable element
	         * @return {Boolean}
	         */
	        isScrolled: function(type, scrollable){
	            if(type === 'top'){
	                return !scrollable.scrollTop();
	            }else if(type === 'bottom'){
	                return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
	            }
	        },

	        /**
	         * Returns the scrollable element for the given section.
	         * If there are landscape slides, will only return a scrollable element
	         * if it is in the active slide.
	         *
	         * @param  {Object}  activeSection jQuery object containing current section
	         * @return {Boolean}
	         */
	        scrollable: function(activeSection){
	            // if there are landscape slides, we check if the scrolling bar is in the current one or not
	            if(activeSection.find(SLIDES_WRAPPER_SEL).length){
	                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
	            }
	            return activeSection.find(SCROLLABLE_SEL);
	        },

	        /**
	         * Returns the scroll height of the wrapped content.
	         * If this is larger than the window height minus section padding,
	         * overflow scrolling is needed.
	         *
	         * @param  {Object} element jQuery object containing current section
	         * @return {Number}
	         */
	        scrollHeight: function(element){
	            return element.find(SCROLLABLE_SEL).get(0).scrollHeight;
	        },

	        /**
	         * Called when overflow scrolling is no longer needed for a section.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         */
	        remove: function(element){
	            element.find(SCROLLABLE_SEL).children().first().unwrap().unwrap();
	            element.find(SLIMSCROLL_BAR_SEL).remove();
	            element.find(SLIMSCROLL_RAIL_SEL).remove();
	        },

	        /**
	         * Called when overflow scrolling has already been setup but the
	         * window height has potentially changed.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         * @param  {Number} scrollHeight Current window height in pixels
	         */
	        update: function(element, scrollHeight){
	            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
	        },

	        /**
	         * Called to get any additional elements needed to wrap the section
	         * content in order to facilitate overflow scrolling.
	         *
	         * @return {String|Object} Can be a string containing HTML,
	         *                         a DOM element, or jQuery object.
	         */
	        wrapContent: function(){
	            return '<div class="' + SCROLLABLE + '"></div>';
	        }
	    };

	    defaultScrollHandler = slimScrollHandler;

	});


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./jquery.fullPage.css", function() {
				var newContent = require("!!./../css-loader/index.js!./jquery.fullPage.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n * fullPage 2.7.9\n * https://github.com/alvarotrigo/fullPage.js\n * MIT licensed\n *\n * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo\n */\nhtml.fp-enabled,\n.fp-enabled body {\n    margin: 0;\n    padding: 0;\n    overflow:hidden;\n\n    /*Avoid flicker on slides transitions for mobile phones #336 */\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n#superContainer {\n    height: 100%;\n    position: relative;\n\n    /* Touch detection for Windows 8 */\n    -ms-touch-action: none;\n\n    /* IE 11 on Windows Phone 8.1*/\n    touch-action: none;\n}\n.fp-section {\n    position: relative;\n    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */\n    -moz-box-sizing: border-box; /* <=28 */\n    box-sizing: border-box;\n}\n.fp-slide {\n    float: left;\n}\n.fp-slide, .fp-slidesContainer {\n    height: 100%;\n    display: block;\n}\n.fp-slides {\n    z-index:1;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n    -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */\n    transition: all 0.3s ease-out;\n}\n.fp-section.fp-table, .fp-slide.fp-table {\n    display: table;\n    table-layout:fixed;\n    width: 100%;\n}\n.fp-tableCell {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%;\n    height: 100%;\n}\n.fp-slidesContainer {\n    float: left;\n    position: relative;\n}\n.fp-controlArrow {\n    -webkit-user-select: none; /* webkit (safari, chrome) browsers */\n    -moz-user-select: none; /* mozilla browsers */\n    -khtml-user-select: none; /* webkit (konqueror) browsers */\n    -ms-user-select: none; /* IE10+ */\n    position: absolute;\n    z-index: 4;\n    top: 50%;\n    cursor: pointer;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    margin-top: -38px;\n    -webkit-transform: translate3d(0,0,0);\n    -ms-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n}\n.fp-controlArrow.fp-prev {\n    left: 15px;\n    width: 0;\n    border-width: 38.5px 34px 38.5px 0;\n    border-color: transparent #fff transparent transparent;\n}\n.fp-controlArrow.fp-next {\n    right: 15px;\n    border-width: 38.5px 0 38.5px 34px;\n    border-color: transparent transparent transparent #fff;\n}\n.fp-scrollable {\n    overflow: scroll;\n}\n.fp-notransition {\n    -webkit-transition: none !important;\n    transition: none !important;\n}\n#fp-nav {\n    position: fixed;\n    z-index: 100;\n    margin-top: -32px;\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate3d(0,0,0);\n}\n#fp-nav.right {\n    right: 17px;\n}\n#fp-nav.left {\n    left: 17px;\n}\n.fp-slidesNav{\n    position: absolute;\n    z-index: 4;\n    left: 50%;\n    opacity: 1;\n}\n.fp-slidesNav.bottom {\n    bottom: 17px;\n}\n.fp-slidesNav.top {\n    top: 17px;\n}\n#fp-nav ul,\n.fp-slidesNav ul {\n  margin: 0;\n  padding: 0;\n}\n#fp-nav ul li,\n.fp-slidesNav ul li {\n    display: block;\n    width: 14px;\n    height: 13px;\n    margin: 7px;\n    position:relative;\n}\n.fp-slidesNav ul li {\n    display: inline-block;\n}\n#fp-nav ul li a,\n.fp-slidesNav ul li a {\n    display: block;\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    text-decoration: none;\n}\n#fp-nav ul li a.active span,\n.fp-slidesNav ul li a.active span,\n#fp-nav ul li:hover a.active span,\n.fp-slidesNav ul li:hover a.active span{\n    height: 12px;\n    width: 12px;\n    margin: -6px 0 0 -6px;\n    border-radius: 100%;\n }\n#fp-nav ul li a span,\n.fp-slidesNav ul li a span {\n    border-radius: 50%;\n    position: absolute;\n    z-index: 1;\n    height: 4px;\n    width: 4px;\n    border: 0;\n    background: #333;\n    left: 50%;\n    top: 50%;\n    margin: -2px 0 0 -2px;\n    -webkit-transition: all 0.1s ease-in-out;\n    -moz-transition: all 0.1s ease-in-out;\n    -o-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n}\n#fp-nav ul li:hover a span,\n.fp-slidesNav ul li:hover a span{\n    width: 10px;\n    height: 10px;\n    margin: -5px 0px 0px -5px;\n}\n#fp-nav ul li .fp-tooltip {\n    position: absolute;\n    top: -2px;\n    color: #fff;\n    font-size: 14px;\n    font-family: arial, helvetica, sans-serif;\n    white-space: nowrap;\n    max-width: 220px;\n    overflow: hidden;\n    display: block;\n    opacity: 0;\n    width: 0;\n    cursor: pointer;\n}\n#fp-nav ul li:hover .fp-tooltip,\n#fp-nav.fp-show-active a.active + .fp-tooltip {\n    -webkit-transition: opacity 0.2s ease-in;\n    transition: opacity 0.2s ease-in;\n    width: auto;\n    opacity: 1;\n}\n#fp-nav ul li .fp-tooltip.right {\n    right: 20px;\n}\n#fp-nav ul li .fp-tooltip.left {\n    left: 20px;\n}\n.fp-auto-height.fp-section,\n.fp-auto-height .fp-slide,\n.fp-auto-height .fp-tableCell{\n    height: auto !important;\n}", ""]);

	// exports


/***/ }
/******/ ]);