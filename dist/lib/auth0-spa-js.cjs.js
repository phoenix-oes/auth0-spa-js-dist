"use strict";

require("fast-text-encoding");

var Lock = require("browser-tabs-lock");

var fetch = require("unfetch");

var Cookies = require("es-cookie");

function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach((function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        }));
    }
    n["default"] = e;
    return Object.freeze(n);
}

var Lock__default = _interopDefaultLegacy(Lock);

var fetch__default = _interopDefaultLegacy(fetch);

var Cookies__namespace = _interopNamespace(Cookies);

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P((function(resolve) {
            resolve(value);
        }));
    }
    return new (P || (P = Promise))((function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    }));
}

function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([ n, v ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
            0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [ op[0] & 2, t.value ];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                    value: op[1],
                    done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [ 0 ];
                continue;

              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                }
                if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [ 6, e ];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}

var check = function(it) {
    return it && it.Math == Math && it;
};

var global_1 = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
    return this;
}() || Function("return this")();

var fails = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

var descriptors = !fails((function() {
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
}));

var functionBindNative = !fails((function() {
    var test = function() {}.bind();
    return typeof test != "function" || test.hasOwnProperty("prototype");
}));

var call$2 = Function.prototype.call;

var functionCall = functionBindNative ? call$2.bind(call$2) : function() {
    return call$2.apply(call$2, arguments);
};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;

var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({
    1: 2
}, 1);

var f$7 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var objectPropertyIsEnumerable = {
    f: f$7
};

var createPropertyDescriptor = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

var $Function = Function;

var FunctionPrototype$2 = $Function.prototype;

var bind$2 = FunctionPrototype$2.bind;

var call$1 = FunctionPrototype$2.call;

var uncurryThis = functionBindNative && bind$2.bind(call$1, call$1);

var functionUncurryThis = function(fn) {
    return fn instanceof $Function ? functionBindNative ? uncurryThis(fn) : function() {
        return call$1.apply(fn, arguments);
    } : undefined;
};

var toString$1 = functionUncurryThis({}.toString);

var stringSlice$3 = functionUncurryThis("".slice);

var classofRaw = function(it) {
    return stringSlice$3(toString$1(it), 8, -1);
};

var $Object$4 = Object;

var split = functionUncurryThis("".split);

var indexedObject = fails((function() {
    return !$Object$4("z").propertyIsEnumerable(0);
})) ? function(it) {
    return classofRaw(it) == "String" ? split(it, "") : $Object$4(it);
} : $Object$4;

var isNullOrUndefined = function(it) {
    return it === null || it === undefined;
};

var $TypeError$c = TypeError;

var requireObjectCoercible = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError$c("Can't call method on " + it);
    return it;
};

var toIndexedObject = function(it) {
    return indexedObject(requireObjectCoercible(it));
};

var documentAll$2 = typeof document == "object" && document.all;

var IS_HTMLDDA = typeof documentAll$2 == "undefined" && documentAll$2 !== undefined;

var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
};

var documentAll$1 = documentAll_1.all;

var isCallable = documentAll_1.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll$1;
} : function(argument) {
    return typeof argument == "function";
};

var documentAll = documentAll_1.all;

var isObject = documentAll_1.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};

var getBuiltIn = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
};

var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

var engineUserAgent = getBuiltIn("navigator", "userAgent") || "";

var process = global_1.process;

var Deno = global_1.Deno;

var versions = process && process.versions || Deno && Deno.version;

var v8 = versions && versions.v8;

var match, version$1;

if (v8) {
    match = v8.split(".");
    version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

if (!version$1 && engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = engineUserAgent.match(/Chrome\/(\d+)/);
        if (match) version$1 = +match[1];
    }
}

var engineV8Version = version$1;

var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails((function() {
    var symbol = Symbol();
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && engineV8Version && engineV8Version < 41;
}));

var useSymbolAsUid = symbolConstructorDetection && !Symbol.sham && typeof Symbol.iterator == "symbol";

var $Object$3 = Object;

var isSymbol = useSymbolAsUid ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString = function(argument) {
    try {
        return $String$3(argument);
    } catch (error) {
        return "Object";
    }
};

var $TypeError$b = TypeError;

var aCallable = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError$b(tryToString(argument) + " is not a function");
};

var getMethod = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

var $TypeError$a = TypeError;

var ordinaryToPrimitive = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    throw $TypeError$a("Can't convert object to primitive value");
};

var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty = function(key, value) {
    try {
        defineProperty$7(global_1, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global_1[key] = value;
    }
    return value;
};

var SHARED = "__core-js_shared__";

var store$1 = global_1[SHARED] || defineGlobalProperty(SHARED, {});

var sharedStore = store$1;

var shared = createCommonjsModule((function(module) {
    (module.exports = function(key, value) {
        return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })("versions", []).push({
        version: "3.25.4",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.25.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
}));

var $Object$2 = Object;

var toObject = function(argument) {
    return $Object$2(requireObjectCoercible(argument));
};

var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

var id = 0;

var postfix = Math.random();

var toString = functionUncurryThis(1..toString);

var uid = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

var WellKnownSymbolsStore$1 = shared("wks");

var Symbol$1 = global_1.Symbol;

var symbolFor = Symbol$1 && Symbol$1["for"];

var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function(name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore$1, name) || !(symbolConstructorDetection || typeof WellKnownSymbolsStore$1[name] == "string")) {
        var description = "Symbol." + name;
        if (symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name)) {
            WellKnownSymbolsStore$1[name] = Symbol$1[name];
        } else if (useSymbolAsUid && symbolFor) {
            WellKnownSymbolsStore$1[name] = symbolFor(description);
        } else {
            WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
        }
    }
    return WellKnownSymbolsStore$1[name];
};

var $TypeError$9 = TypeError;

var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");

var toPrimitive = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = functionCall(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError$9("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

var toPropertyKey = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

var document$1 = global_1.document;

var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function(it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
};

var ie8DomDefine = !descriptors && !fails((function() {
    return Object.defineProperty(documentCreateElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
}));

var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

var f$6 = descriptors ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
        return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {}
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
    f: f$6
};

var v8PrototypeDefineBug = descriptors && fails((function() {
    return Object.defineProperty((function() {}), "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
}));

var $String$2 = String;

var $TypeError$8 = TypeError;

var anObject = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError$8($String$2(argument) + " is not an object");
};

var $TypeError$7 = TypeError;

var $defineProperty$1 = Object.defineProperty;

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

var ENUMERABLE = "enumerable";

var CONFIGURABLE$1 = "configurable";

var WRITABLE = "writable";

var f$5 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor$1(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
        return $defineProperty$1(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError$7("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

var objectDefineProperty = {
    f: f$5
};

var createNonEnumerableProperty = descriptors ? function(object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

var FunctionPrototype$1 = Function.prototype;

var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwnProperty_1(FunctionPrototype$1, "name");

var PROPER = EXISTS && function something() {}.name === "something";

var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$1, "name").configurable);

var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

var functionToString = functionUncurryThis(Function.toString);

if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function(it) {
        return functionToString(it);
    };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var weakMapBasicDetection = isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

var keys = shared("keys");

var sharedKey = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = "Object already initialized";

var TypeError$3 = global_1.TypeError;

var WeakMap = global_1.WeakMap;

var set, get, has;

var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};

var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError$3("Incompatible receiver, " + TYPE + " required");
        }
        return state;
    };
};

if (weakMapBasicDetection || sharedStore.state) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap);
    var wmget = functionUncurryThis(store.get);
    var wmhas = functionUncurryThis(store.has);
    var wmset = functionUncurryThis(store.set);
    set = function(it, metadata) {
        if (wmhas(store, it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget(store, it) || {};
    };
    has = function(it) {
        return wmhas(store, it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys$1[STATE] = true;
    set = function(it, metadata) {
        if (hasOwnProperty_1(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwnProperty_1(it, STATE);
    };
}

var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

var makeBuiltIn_1 = createCommonjsModule((function(module) {
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var enforceInternalState = internalState.enforce;
    var getInternalState = internalState.get;
    var defineProperty = Object.defineProperty;
    var CONFIGURABLE_LENGTH = descriptors && !fails((function() {
        return defineProperty((function() {}), "length", {
            value: 8
        }).length !== 8;
    }));
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
        if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
        }
        if (options && options.getter) name = "get " + name;
        if (options && options.setter) name = "set " + name;
        if (!hasOwnProperty_1(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            if (descriptors) defineProperty(value, "name", {
                value: name,
                configurable: true
            }); else value.name = name;
        }
        if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, "arity") && value.length !== options.arity) {
            defineProperty(value, "length", {
                value: options.arity
            });
        }
        try {
            if (options && hasOwnProperty_1(options, "constructor") && options.constructor) {
                if (descriptors) defineProperty(value, "prototype", {
                    writable: false
                });
            } else if (value.prototype) value.prototype = undefined;
        } catch (error) {}
        var state = enforceInternalState(value);
        if (!hasOwnProperty_1(state, "source")) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
        }
        return value;
    };
    Function.prototype.toString = makeBuiltIn((function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }), "toString");
}));

var defineBuiltIn = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn_1(value, name, options);
    if (options.global) {
        if (simple) O[key] = value; else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key]; else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value; else objectDefineProperty.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

var ceil = Math.ceil;

var floor = Math.floor;

var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

var toIntegerOrInfinity = function(argument) {
    var number = +argument;
    return number !== number || number === 0 ? 0 : mathTrunc(number);
};

var max$1 = Math.max;

var min$2 = Math.min;

var toAbsoluteIndex = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var min$1 = Math.min;

var toLength = function(argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity(argument), 9007199254740991) : 0;
};

var lengthOfArrayLike = function(obj) {
    return toLength(obj.length);
};

var createMethod$2 = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            if (value != value) return true;
        } else for (;length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};

var arrayIncludes = {
    includes: createMethod$2(true),
    indexOf: createMethod$2(false)
};

var indexOf = arrayIncludes.indexOf;

var push$2 = functionUncurryThis([].push);

var objectKeysInternal = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$2(result, key);
    while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
        ~indexOf(result, key) || push$2(result, key);
    }
    return result;
};

var enumBugKeys = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];

var hiddenKeys = enumBugKeys.concat("length", "prototype");

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
    f: f$4
};

var f$3 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
    f: f$3
};

var concat = functionUncurryThis([].concat);

var ownKeys = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
    }
};

var replacement = /#|\.prototype\./;

var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};

var data = isForced.data = {};

var NATIVE = isForced.NATIVE = "N";

var POLYFILL = isForced.POLYFILL = "P";

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

var _export = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
        target = global_1;
    } else if (STATIC) {
        target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
        target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor$1(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

var TO_STRING_TAG$3 = wellKnownSymbol("toStringTag");

var test = {};

test[TO_STRING_TAG$3] = "z";

var toStringTagSupport = String(test) === "[object z]";

var TO_STRING_TAG$2 = wellKnownSymbol("toStringTag");

var $Object$1 = Object;

var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == "Arguments";

var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};

var classof = toStringTagSupport ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
};

var $String$1 = String;

var toString_1 = function(argument) {
    if (classof(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
    return $String$1(argument);
};

var MATCH$1 = wellKnownSymbol("match");

var isRegexp = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == "RegExp");
};

var $TypeError$6 = TypeError;

var notARegexp = function(it) {
    if (isRegexp(it)) {
        throw $TypeError$6("The method doesn't accept regular expressions");
    }
    return it;
};

var MATCH = wellKnownSymbol("match");

var correctIsRegexpLogic = function(METHOD_NAME) {
    var regexp = /./;
    try {
        "/./"[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return "/./"[METHOD_NAME](regexp);
        } catch (error2) {}
    }
    return false;
};

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

var nativeStartsWith = functionUncurryThis("".startsWith);

var stringSlice$2 = functionUncurryThis("".slice);

var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic("startsWith");

var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
    return descriptor && !descriptor.writable;
}();

_export({
    target: "String",
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString) {
        var that = toString_1(requireObjectCoercible(this));
        notARegexp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = toString_1(searchString);
        return nativeStartsWith ? nativeStartsWith(that, search, index) : stringSlice$2(that, index, index + search.length) === search;
    }
});

var entryUnbind = function(CONSTRUCTOR, METHOD) {
    return functionUncurryThis(global_1[CONSTRUCTOR].prototype[METHOD]);
};

entryUnbind("String", "startsWith");

var isArray$1 = Array.isArray || function isArray(argument) {
    return classofRaw(argument) == "Array";
};

var $TypeError$5 = TypeError;

var MAX_SAFE_INTEGER = 9007199254740991;

var doesNotExceedSafeInteger = function(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$5("Maximum allowed index exceeded");
    return it;
};

var createProperty = function(object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value)); else object[propertyKey] = value;
};

var noop$1 = function() {};

var empty = [];

var construct = getBuiltIn("Reflect", "construct");

var constructorRegExp = /^\s*(?:class|function)\b/;

var exec$1 = functionUncurryThis(constructorRegExp.exec);

var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);

var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop$1, empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};

var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch (classof(argument)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
        return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};

isConstructorLegacy.sham = true;

var isConstructor = !construct || fails((function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern((function() {
        called = true;
    })) || called;
})) ? isConstructorLegacy : isConstructorModern;

var SPECIES$3 = wellKnownSymbol("species");

var $Array$2 = Array;

var arraySpeciesConstructor = function(originalArray) {
    var C;
    if (isArray$1(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array$2 || isArray$1(C.prototype))) C = undefined; else if (isObject(C)) {
            C = C[SPECIES$3];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? $Array$2 : C;
};

var arraySpeciesCreate = function(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var SPECIES$2 = wellKnownSymbol("species");

var arrayMethodHasSpeciesSupport = function(METHOD_NAME) {
    return engineV8Version >= 51 || !fails((function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES$2] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    }));
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");

var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails((function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
}));

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");

var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

_export({
    target: "Array",
    proto: true,
    arity: 1,
    forced: FORCED$2
}, {
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = lengthOfArrayLike(E);
                doesNotExceedSafeInteger(n + len);
                for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
            } else {
                doesNotExceedSafeInteger(n + 1);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});

var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return "[object " + classof(this) + "]";
};

if (!toStringTagSupport) {
    defineBuiltIn(Object.prototype, "toString", objectToString, {
        unsafe: true
    });
}

var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
};

var f$2 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
    return O;
};

var objectDefineProperties = {
    f: f$2
};

var html = getBuiltIn("document", "documentElement");

var GT = ">";

var LT = "<";

var PROTOTYPE$1 = "prototype";

var SCRIPT = "script";

var IE_PROTO$1 = sharedKey("IE_PROTO");

var EmptyConstructor = function() {};

var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};

var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(""));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null;
    return temp;
};

var NullProtoObjectViaIFrame = function() {
    var iframe = documentCreateElement("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};

var activeXDocument;

var NullProtoObject = function() {
    try {
        activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
    return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true;

var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE$1] = anObject(O);
        result = new EmptyConstructor;
        EmptyConstructor[PROTOTYPE$1] = null;
        result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
};

var $Array$1 = Array;

var max = Math.max;

var arraySliceSimple = function(O, start, end) {
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array$1(max(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
    result.length = n;
    return result;
};

var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;

var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it) {
    try {
        return $getOwnPropertyNames$1(it);
    } catch (error) {
        return arraySliceSimple(windowNames);
    }
};

var f$1 = function getOwnPropertyNames(it) {
    return windowNames && classofRaw(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
    f: f$1
};

var f = wellKnownSymbol;

var wellKnownSymbolWrapped = {
    f: f
};

var path = global_1;

var defineProperty$6 = objectDefineProperty.f;

var wellKnownSymbolDefine = function(NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwnProperty_1(Symbol, NAME)) defineProperty$6(Symbol, NAME, {
        value: wellKnownSymbolWrapped.f(NAME)
    });
};

var symbolDefineToPrimitive = function() {
    var Symbol = getBuiltIn("Symbol");
    var SymbolPrototype = Symbol && Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
        defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, (function(hint) {
            return functionCall(valueOf, this);
        }), {
            arity: 1
        });
    }
};

var defineProperty$5 = objectDefineProperty.f;

var TO_STRING_TAG$1 = wellKnownSymbol("toStringTag");

var setToStringTag = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwnProperty_1(target, TO_STRING_TAG$1)) {
        defineProperty$5(target, TO_STRING_TAG$1, {
            configurable: true,
            value: TAG
        });
    }
};

var bind$1 = functionUncurryThis(functionUncurryThis.bind);

var functionBindContext = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : functionBindNative ? bind$1(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

var push$1 = functionUncurryThis([].push);

var createMethod$1 = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that);
        var length = lengthOfArrayLike(self);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;
        for (;length > index; index++) if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; else if (result) switch (TYPE) {
                  case 3:
                    return true;

                  case 5:
                    return value;

                  case 6:
                    return index;

                  case 2:
                    push$1(target, value);
                } else switch (TYPE) {
                  case 4:
                    return false;

                  case 7:
                    push$1(target, value);
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};

var arrayIteration = {
    forEach: createMethod$1(0),
    map: createMethod$1(1),
    filter: createMethod$1(2),
    some: createMethod$1(3),
    every: createMethod$1(4),
    find: createMethod$1(5),
    findIndex: createMethod$1(6),
    filterReject: createMethod$1(7)
};

var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey("hidden");

var SYMBOL = "Symbol";

var PROTOTYPE = "prototype";

var setInternalState$3 = internalState.set;

var getInternalState$3 = internalState.getterFor(SYMBOL);

var ObjectPrototype$2 = Object[PROTOTYPE];

var $Symbol = global_1.Symbol;

var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];

var TypeError$2 = global_1.TypeError;

var QObject = global_1.QObject;

var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

var nativeDefineProperty = objectDefineProperty.f;

var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;

var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;

var push = functionUncurryThis([].push);

var AllSymbols = shared("symbols");

var ObjectPrototypeSymbols = shared("op-symbols");

var WellKnownSymbolsStore = shared("wks");

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

var setSymbolDescriptor = descriptors && fails((function() {
    return objectCreate(nativeDefineProperty({}, "a", {
        get: function() {
            return nativeDefineProperty(this, "a", {
                value: 7
            }).a;
        }
    })).a != 7;
})) ? function(O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$2, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$2[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
        nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
    }
} : nativeDefineProperty;

var wrap = function(tag, description) {
    var symbol = AllSymbols[tag] = objectCreate(SymbolPrototype$1);
    setInternalState$3(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
    });
    if (!descriptors) symbol.description = description;
    return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$2) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPropertyKey(P);
    anObject(Attributes);
    if (hasOwnProperty_1(AllSymbols, key)) {
        if (!Attributes.enumerable) {
            if (!hasOwnProperty_1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
        } else {
            if (hasOwnProperty_1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = objectCreate(Attributes, {
                enumerable: createPropertyDescriptor(0, false)
            });
        }
        return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, (function(key) {
        if (!descriptors || functionCall($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    }));
    return O;
};

var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = functionCall(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$2 && hasOwnProperty_1(AllSymbols, P) && !hasOwnProperty_1(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwnProperty_1(this, P) || !hasOwnProperty_1(AllSymbols, P) || hasOwnProperty_1(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$2 && hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwnProperty_1(AllSymbols, key) && !(hasOwnProperty_1(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
    }
    return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, (function(key) {
        if (!hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(hiddenKeys$1, key)) push(result, key);
    }));
    return result;
};

var $getOwnPropertySymbols = function(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, (function(key) {
        if (hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1(ObjectPrototype$2, key))) {
            push(result, AllSymbols[key]);
        }
    }));
    return result;
};

if (!symbolConstructorDetection) {
    $Symbol = function Symbol() {
        if (objectIsPrototypeOf(SymbolPrototype$1, this)) throw TypeError$2("Symbol is not a constructor");
        var description = !arguments.length || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
            if (this === ObjectPrototype$2) functionCall(setter, ObjectPrototypeSymbols, value);
            if (hasOwnProperty_1(this, HIDDEN) && hasOwnProperty_1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, {
            configurable: true,
            set: setter
        });
        return wrap(tag, description);
    };
    SymbolPrototype$1 = $Symbol[PROTOTYPE];
    defineBuiltIn(SymbolPrototype$1, "toString", (function toString() {
        return getInternalState$3(this).tag;
    }));
    defineBuiltIn($Symbol, "withoutSetter", (function(description) {
        return wrap(uid(description), description);
    }));
    objectPropertyIsEnumerable.f = $propertyIsEnumerable;
    objectDefineProperty.f = $defineProperty;
    objectDefineProperties.f = $defineProperties;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;
    wellKnownSymbolWrapped.f = function(name) {
        return wrap(wellKnownSymbol(name), name);
    };
    if (descriptors) {
        nativeDefineProperty(SymbolPrototype$1, "description", {
            configurable: true,
            get: function description() {
                return getInternalState$3(this).description;
            }
        });
        {
            defineBuiltIn(ObjectPrototype$2, "propertyIsEnumerable", $propertyIsEnumerable, {
                unsafe: true
            });
        }
    }
}

_export({
    global: true,
    constructor: true,
    wrap: true,
    forced: !symbolConstructorDetection,
    sham: !symbolConstructorDetection
}, {
    Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), (function(name) {
    wellKnownSymbolDefine(name);
}));

_export({
    target: SYMBOL,
    stat: true,
    forced: !symbolConstructorDetection
}, {
    useSetter: function() {
        USE_SETTER = true;
    },
    useSimple: function() {
        USE_SETTER = false;
    }
});

_export({
    target: "Object",
    stat: true,
    forced: !symbolConstructorDetection,
    sham: !descriptors
}, {
    create: $create,
    defineProperty: $defineProperty,
    defineProperties: $defineProperties,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

_export({
    target: "Object",
    stat: true,
    forced: !symbolConstructorDetection
}, {
    getOwnPropertyNames: $getOwnPropertyNames
});

symbolDefineToPrimitive();

setToStringTag($Symbol, SYMBOL);

hiddenKeys$1[HIDDEN] = true;

var symbolRegistryDetection = symbolConstructorDetection && !!Symbol["for"] && !!Symbol.keyFor;

var StringToSymbolRegistry = shared("string-to-symbol-registry");

var SymbolToStringRegistry$1 = shared("symbol-to-string-registry");

_export({
    target: "Symbol",
    stat: true,
    forced: !symbolRegistryDetection
}, {
    for: function(key) {
        var string = toString_1(key);
        if (hasOwnProperty_1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = getBuiltIn("Symbol")(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry$1[symbol] = string;
        return symbol;
    }
});

var SymbolToStringRegistry = shared("symbol-to-string-registry");

_export({
    target: "Symbol",
    stat: true,
    forced: !symbolRegistryDetection
}, {
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(tryToString(sym) + " is not a symbol");
        if (hasOwnProperty_1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
});

var FunctionPrototype = Function.prototype;

var apply = FunctionPrototype.apply;

var call = FunctionPrototype.call;

var functionApply = typeof Reflect == "object" && Reflect.apply || (functionBindNative ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

var arraySlice = functionUncurryThis([].slice);

var $stringify = getBuiltIn("JSON", "stringify");

var exec = functionUncurryThis(/./.exec);

var charAt$2 = functionUncurryThis("".charAt);

var charCodeAt$1 = functionUncurryThis("".charCodeAt);

var replace$1 = functionUncurryThis("".replace);

var numberToString = functionUncurryThis(1..toString);

var tester = /[\uD800-\uDFFF]/g;

var low = /^[\uD800-\uDBFF]$/;

var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !symbolConstructorDetection || fails((function() {
    var symbol = getBuiltIn("Symbol")();
    return $stringify([ symbol ]) != "[null]" || $stringify({
        a: symbol
    }) != "{}" || $stringify(Object(symbol)) != "{}";
}));

var ILL_FORMED_UNICODE = fails((function() {
    return $stringify("\udf06\ud834") !== '"\\udf06\\ud834"' || $stringify("\udead") !== '"\\udead"';
}));

var stringifyWithSymbolsFix = function(it, replacer) {
    var args = arraySlice(arguments);
    var $replacer = replacer;
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return;
    if (!isArray$1(replacer)) replacer = function(key, value) {
        if (isCallable($replacer)) value = functionCall($replacer, this, key, value);
        if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return functionApply($stringify, null, args);
};

var fixIllFormed = function(match, offset, string) {
    var prev = charAt$2(string, offset - 1);
    var next = charAt$2(string, offset + 1);
    if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
        return "\\u" + numberToString(charCodeAt$1(match, 0), 16);
    }
    return match;
};

if ($stringify) {
    _export({
        target: "JSON",
        stat: true,
        arity: 3,
        forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
    }, {
        stringify: function stringify(it, replacer, space) {
            var args = arraySlice(arguments);
            var result = functionApply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
            return ILL_FORMED_UNICODE && typeof result == "string" ? replace$1(result, tester, fixIllFormed) : result;
        }
    });
}

var FORCED$1 = !symbolConstructorDetection || fails((function() {
    objectGetOwnPropertySymbols.f(1);
}));

_export({
    target: "Object",
    stat: true,
    forced: FORCED$1
}, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        var $getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
    }
});

wellKnownSymbolDefine("asyncIterator");

var defineProperty$4 = objectDefineProperty.f;

var NativeSymbol = global_1.Symbol;

var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (descriptors && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {};
    var SymbolWrapper = function Symbol() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
        var result = objectIsPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === "") EmptyStringDescriptionStore[result] = true;
        return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    var NATIVE_SYMBOL = String(NativeSymbol("test")) == "Symbol(test)";
    var thisSymbolValue = functionUncurryThis(SymbolPrototype.valueOf);
    var symbolDescriptiveString = functionUncurryThis(SymbolPrototype.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace = functionUncurryThis("".replace);
    var stringSlice$1 = functionUncurryThis("".slice);
    defineProperty$4(SymbolPrototype, "description", {
        configurable: true,
        get: function description() {
            var symbol = thisSymbolValue(this);
            if (hasOwnProperty_1(EmptyStringDescriptionStore, symbol)) return "";
            var string = symbolDescriptiveString(symbol);
            var desc = NATIVE_SYMBOL ? stringSlice$1(string, 7, -1) : replace(string, regexp, "$1");
            return desc === "" ? undefined : desc;
        }
    });
    _export({
        global: true,
        constructor: true,
        forced: true
    }, {
        Symbol: SymbolWrapper
    });
}

wellKnownSymbolDefine("hasInstance");

wellKnownSymbolDefine("isConcatSpreadable");

wellKnownSymbolDefine("iterator");

wellKnownSymbolDefine("match");

wellKnownSymbolDefine("matchAll");

wellKnownSymbolDefine("replace");

wellKnownSymbolDefine("search");

wellKnownSymbolDefine("species");

wellKnownSymbolDefine("split");

wellKnownSymbolDefine("toPrimitive");

symbolDefineToPrimitive();

wellKnownSymbolDefine("toStringTag");

setToStringTag(getBuiltIn("Symbol"), "Symbol");

wellKnownSymbolDefine("unscopables");

setToStringTag(global_1.JSON, "JSON", true);

setToStringTag(Math, "Math", true);

_export({
    global: true
}, {
    Reflect: {}
});

setToStringTag(global_1.Reflect, "Reflect", true);

path.Symbol;

var charAt$1 = functionUncurryThis("".charAt);

var charCodeAt = functionUncurryThis("".charCodeAt);

var stringSlice = functionUncurryThis("".slice);

var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = toString_1(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
};

var stringMultibyte = {
    codeAt: createMethod(false),
    charAt: createMethod(true)
};

var correctPrototypeGetter = !fails((function() {
    function F() {}
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F) !== F.prototype;
}));

var IE_PROTO = sharedKey("IE_PROTO");

var $Object = Object;

var ObjectPrototype$1 = $Object.prototype;

var objectGetPrototypeOf = correctPrototypeGetter ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
    }
    return object instanceof $Object ? ObjectPrototype$1 : null;
};

var ITERATOR$4 = wellKnownSymbol("iterator");

var BUGGY_SAFARI_ITERATORS$1 = false;

var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
    arrayIterator = [].keys();
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true; else {
        PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$2) || fails((function() {
    var test = {};
    return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
}));

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

if (!isCallable(IteratorPrototype$2[ITERATOR$4])) {
    defineBuiltIn(IteratorPrototype$2, ITERATOR$4, (function() {
        return this;
    }));
}

var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var iterators = {};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var returnThis$1 = function() {
    return this;
};

var iteratorCreateConstructor = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
};

var $String = String;

var $TypeError$4 = TypeError;

var aPossiblePrototype = function(argument) {
    if (typeof argument == "object" || isCallable(argument)) return argument;
    throw $TypeError$4("Can't set " + $String(argument) + " as a prototype");
};

var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter(O, proto); else O.__proto__ = proto;
        return O;
    };
}() : undefined);

var PROPER_FUNCTION_NAME = functionName.PROPER;

var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

var IteratorPrototype = iteratorsCore.IteratorPrototype;

var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;

var ITERATOR$3 = wellKnownSymbol("iterator");

var KEYS = "keys";

var VALUES = "values";

var ENTRIES = "entries";

var returnThis = function() {
    return this;
};

var iteratorDefine = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    iteratorCreateConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys() {
                return new IteratorConstructor(this, KIND);
            };

          case VALUES:
            return function values() {
                return new IteratorConstructor(this, KIND);
            };

          case ENTRIES:
            return function entries() {
                return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    if (anyNativeIterator) {
        CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (objectSetPrototypeOf) {
                    objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$3])) {
                    defineBuiltIn(CurrentIteratorPrototype, ITERATOR$3, returnThis);
                }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
        }
    }
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return functionCall(nativeIterator, this);
            };
        }
    }
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
            }
        } else _export({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR$3, defaultIterator, {
            name: DEFAULT
        });
    }
    iterators[NAME] = defaultIterator;
    return methods;
};

var createIterResultObject = function(value, done) {
    return {
        value: value,
        done: done
    };
};

var charAt = stringMultibyte.charAt;

var STRING_ITERATOR = "String Iterator";

var setInternalState$2 = internalState.set;

var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

iteratorDefine(String, "String", (function(iterated) {
    setInternalState$2(this, {
        type: STRING_ITERATOR,
        string: toString_1(iterated),
        index: 0
    });
}), (function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject(undefined, true);
    point = charAt(string, index);
    state.index += point.length;
    return createIterResultObject(point, false);
}));

var iteratorClose = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
        }
        innerResult = functionCall(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

var callWithSafeIterationClosing = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator, "throw", error);
    }
};

var ITERATOR$2 = wellKnownSymbol("iterator");

var ArrayPrototype$1 = Array.prototype;

var isArrayIteratorMethod = function(it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
};

var ITERATOR$1 = wellKnownSymbol("iterator");

var getIteratorMethod = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$1) || getMethod(it, "@@iterator") || iterators[classof(it)];
};

var $TypeError$3 = TypeError;

var getIterator = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
    throw $TypeError$3(tryToString(argument) + " is not iterable");
};

var $Array = Array;

var arrayFrom = function from(arrayLike) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        result = IS_CONSTRUCTOR ? new this : [];
        for (;!(step = functionCall(next, iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [ step.value, index ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for (;length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

var ITERATOR = wellKnownSymbol("iterator");

var SAFE_CLOSING = false;

try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        return: function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    Array.from(iteratorWithReturn, (function() {
        throw 2;
    }));
} catch (error) {}

var checkCorrectnessOfIteration = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {};
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {}
    return ITERATION_SUPPORT;
};

var INCORRECT_ITERATION = !checkCorrectnessOfIteration((function(iterable) {
    Array.from(iterable);
}));

_export({
    target: "Array",
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: arrayFrom
});

path.Array.from;

var arrayBufferBasicDetection = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";

var defineProperty$3 = objectDefineProperty.f;

var enforceInternalState = internalState.enforce;

var getInternalState$1 = internalState.get;

var Int8Array$1 = global_1.Int8Array;

var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;

var Uint8ClampedArray = global_1.Uint8ClampedArray;

var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;

var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);

var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);

var ObjectPrototype = Object.prototype;

var TypeError$1 = global_1.TypeError;

var TO_STRING_TAG = wellKnownSymbol("toStringTag");

var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");

var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";

var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferBasicDetection && !!objectSetPrototypeOf && classof(global_1.opera) !== "Opera";

var TYPED_ARRAY_TAG_REQUIRED = false;

var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
};

var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
};

var isView = function isView(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === "DataView" || hasOwnProperty_1(TypedArrayConstructorsList, klass) || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor$1 = function(it) {
    var proto = objectGetPrototypeOf(it);
    if (!isObject(proto)) return;
    var state = getInternalState$1(proto);
    return state && hasOwnProperty_1(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$1(proto);
};

var isTypedArray = function(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return hasOwnProperty_1(TypedArrayConstructorsList, klass) || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
};

var aTypedArray$1 = function(it) {
    if (isTypedArray(it)) return it;
    throw TypeError$1("Target is not a typed array");
};

var aTypedArrayConstructor$1 = function(C) {
    if (isCallable(C) && (!objectSetPrototypeOf || objectIsPrototypeOf(TypedArray, C))) return C;
    throw TypeError$1(tryToString(C) + " is not a typed array constructor");
};

var exportTypedArrayMethod$1 = function(KEY, property, forced, options) {
    if (!descriptors) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
        var TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor.prototype, KEY)) try {
            delete TypedArrayConstructor.prototype[KEY];
        } catch (error) {
            try {
                TypedArrayConstructor.prototype[KEY] = property;
            } catch (error2) {}
        }
    }
    if (!TypedArrayPrototype[KEY] || forced) {
        defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
    }
};

var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!descriptors) return;
    if (objectSetPrototypeOf) {
        if (forced) for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = global_1[ARRAY];
            if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor, KEY)) try {
                delete TypedArrayConstructor[KEY];
            } catch (error) {}
        }
        if (!TypedArray[KEY] || forced) {
            try {
                return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
            } catch (error) {}
        } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
            defineBuiltIn(TypedArrayConstructor, KEY, property);
        }
    }
};

for (NAME in TypedArrayConstructorsList) {
    Constructor = global_1[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor; else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
    Constructor = global_1[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    TypedArray = function TypedArray() {
        throw TypeError$1("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
    }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
    }
}

if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (descriptors && !hasOwnProperty_1(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineProperty$3(TypedArrayPrototype, TO_STRING_TAG, {
        get: function() {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
        }
    });
    for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
        createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
    }
}

var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray$1,
    aTypedArrayConstructor: aTypedArrayConstructor$1,
    exportTypedArrayMethod: exportTypedArrayMethod$1,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    getTypedArrayConstructor: getTypedArrayConstructor$1,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
};

var $TypeError$2 = TypeError;

var aConstructor = function(argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError$2(tryToString(argument) + " is not a constructor");
};

var SPECIES$1 = wellKnownSymbol("species");

var speciesConstructor = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;

var getTypedArrayConstructor = arrayBufferViewCore.getTypedArrayConstructor;

var typedArraySpeciesConstructor = function(originalArray) {
    return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
};

var aTypedArray = arrayBufferViewCore.aTypedArray;

var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails((function() {
    new Int8Array(1).slice();
}));

exportTypedArrayMethod("slice", (function slice(start, end) {
    var list = arraySlice(aTypedArray(this), start, end);
    var C = typedArraySpeciesConstructor(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while (length > index) result[index] = list[index++];
    return result;
}), FORCED);

var defineProperty$2 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol("unscopables");

var ArrayPrototype = Array.prototype;

if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$2(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
    });
}

var addToUnscopables = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;

var BROKEN_ON_SPARSE = fails((function() {
    return !Array(1).includes();
}));

_export({
    target: "Array",
    proto: true,
    forced: BROKEN_ON_SPARSE
}, {
    includes: function includes(el) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});

addToUnscopables("includes");

entryUnbind("Array", "includes");

var stringIndexOf = functionUncurryThis("".indexOf);

_export({
    target: "String",
    proto: true,
    forced: !correctIsRegexpLogic("includes")
}, {
    includes: function includes(searchString) {
        return !!~stringIndexOf(toString_1(requireObjectCoercible(this)), toString_1(notARegexp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
});

entryUnbind("String", "includes");

var defineProperty$1 = objectDefineProperty.f;

var ARRAY_ITERATOR = "Array Iterator";

var setInternalState$1 = internalState.set;

var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

iteratorDefine(Array, "Array", (function(iterated, kind) {
    setInternalState$1(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind
    });
}), (function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return createIterResultObject(undefined, true);
    }
    if (kind == "keys") return createIterResultObject(index, false);
    if (kind == "values") return createIterResultObject(target[index], false);
    return createIterResultObject([ index, target[index] ], false);
}), "values");

var values = iterators.Arguments = iterators.Array;

addToUnscopables("keys");

addToUnscopables("values");

addToUnscopables("entries");

if (descriptors && values.name !== "values") try {
    defineProperty$1(values, "name", {
        value: "values"
    });
} catch (error) {}

var arrayBufferNonExtensible = fails((function() {
    if (typeof ArrayBuffer == "function") {
        var buffer = new ArrayBuffer(8);
        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", {
            value: 8
        });
    }
}));

var $isExtensible = Object.isExtensible;

var FAILS_ON_PRIMITIVES = fails((function() {
    $isExtensible(1);
}));

var objectIsExtensible = FAILS_ON_PRIMITIVES || arrayBufferNonExtensible ? function isExtensible(it) {
    if (!isObject(it)) return false;
    if (arrayBufferNonExtensible && classofRaw(it) == "ArrayBuffer") return false;
    return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var freezing = !fails((function() {
    return Object.isExtensible(Object.preventExtensions({}));
}));

var internalMetadata = createCommonjsModule((function(module) {
    var defineProperty = objectDefineProperty.f;
    var REQUIRED = false;
    var METADATA = uid("meta");
    var id = 0;
    var setMetadata = function(it) {
        defineProperty(it, METADATA, {
            value: {
                objectID: "O" + id++,
                weakData: {}
            }
        });
    };
    var fastKey = function(it, create) {
        if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!hasOwnProperty_1(it, METADATA)) {
            if (!objectIsExtensible(it)) return "F";
            if (!create) return "E";
            setMetadata(it);
        }
        return it[METADATA].objectID;
    };
    var getWeakData = function(it, create) {
        if (!hasOwnProperty_1(it, METADATA)) {
            if (!objectIsExtensible(it)) return true;
            if (!create) return false;
            setMetadata(it);
        }
        return it[METADATA].weakData;
    };
    var onFreeze = function(it) {
        if (freezing && REQUIRED && objectIsExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
        return it;
    };
    var enable = function() {
        meta.enable = function() {};
        REQUIRED = true;
        var getOwnPropertyNames = objectGetOwnPropertyNames.f;
        var splice = functionUncurryThis([].splice);
        var test = {};
        test[METADATA] = 1;
        if (getOwnPropertyNames(test).length) {
            objectGetOwnPropertyNames.f = function(it) {
                var result = getOwnPropertyNames(it);
                for (var i = 0, length = result.length; i < length; i++) {
                    if (result[i] === METADATA) {
                        splice(result, i, 1);
                        break;
                    }
                }
                return result;
            };
            _export({
                target: "Object",
                stat: true,
                forced: true
            }, {
                getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
            });
        }
    };
    var meta = module.exports = {
        enable: enable,
        fastKey: fastKey,
        getWeakData: getWeakData,
        onFreeze: onFreeze
    };
    hiddenKeys$1[METADATA] = true;
}));

internalMetadata.enable;

internalMetadata.fastKey;

internalMetadata.getWeakData;

internalMetadata.onFreeze;

var $TypeError$1 = TypeError;

var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) {
        iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
        iterator = iterable;
    } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw $TypeError$1(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                result = callFn(iterable[index]);
                if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = functionCall(next, iterator)).done) {
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

var $TypeError = TypeError;

var anInstance = function(it, Prototype) {
    if (objectIsPrototypeOf(Prototype, it)) return it;
    throw $TypeError("Incorrect invocation");
};

var inheritIfRequired = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (objectSetPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
};

var collection = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
    var ADDER = IS_MAP ? "set" : "add";
    var NativeConstructor = global_1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function(KEY) {
        var uncurriedNativeMethod = functionUncurryThis(NativePrototype[KEY]);
        defineBuiltIn(NativePrototype, KEY, KEY == "add" ? function add(value) {
            uncurriedNativeMethod(this, value === 0 ? 0 : value);
            return this;
        } : KEY == "delete" ? function(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == "get" ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == "has" ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
            uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
            return this;
        });
    };
    var REPLACE = isForced_1(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails((function() {
        (new NativeConstructor).entries().next();
    }))));
    if (REPLACE) {
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        internalMetadata.enable();
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor;
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        var THROWS_ON_PRIMITIVES = fails((function() {
            instance.has(1);
        }));
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration((function(iterable) {
            new NativeConstructor(iterable);
        }));
        var BUGGY_ZERO = !IS_WEAK && fails((function() {
            var $instance = new NativeConstructor;
            var index = 5;
            while (index--) $instance[ADDER](index, index);
            return !$instance.has(-0);
        }));
        if (!ACCEPT_ITERABLES) {
            Constructor = wrapper((function(dummy, iterable) {
                anInstance(dummy, NativePrototype);
                var that = inheritIfRequired(new NativeConstructor, dummy, Constructor);
                if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                    that: that,
                    AS_ENTRIES: IS_MAP
                });
                return that;
            }));
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    _export({
        global: true,
        constructor: true,
        forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
};

var defineBuiltIns = function(target, src, options) {
    for (var key in src) defineBuiltIn(target, key, src[key], options);
    return target;
};

var SPECIES = wellKnownSymbol("species");

var setSpecies = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;
    if (descriptors && Constructor && !Constructor[SPECIES]) {
        defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function() {
                return this;
            }
        });
    }
};

var defineProperty = objectDefineProperty.f;

var fastKey = internalMetadata.fastKey;

var setInternalState = internalState.set;

var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper((function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: objectCreate(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!descriptors) that.size = 0;
            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        }));
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            if (entry) {
                entry.value = value;
            } else {
                state.last = entry = {
                    index: index = fastKey(key, true),
                    key: key,
                    value: value,
                    previous: previous = state.last,
                    next: undefined,
                    removed: false
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (descriptors) state.size++; else that.size++;
                if (index !== "F") state.index[index] = entry;
            }
            return that;
        };
        var getEntry = function(that, key) {
            var state = getInternalState(that);
            var index = fastKey(key);
            var entry;
            if (index !== "F") return state.index[index];
            for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key) return entry;
            }
        };
        defineBuiltIns(Prototype, {
            clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while (entry) {
                    entry.removed = true;
                    if (entry.previous) entry.previous = entry.previous.next = undefined;
                    delete data[entry.index];
                    entry = entry.next;
                }
                state.first = state.last = undefined;
                if (descriptors) state.size = 0; else that.size = 0;
            },
            delete: function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.next;
                    var prev = entry.previous;
                    delete state.index[entry.index];
                    entry.removed = true;
                    if (prev) prev.next = next;
                    if (next) next.previous = prev;
                    if (state.first == entry) state.first = next;
                    if (state.last == entry) state.last = prev;
                    if (descriptors) state.size--; else that.size--;
                }
                return !!entry;
            },
            forEach: function forEach(callbackfn) {
                var state = getInternalState(this);
                var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                var entry;
                while (entry = entry ? entry.next : state.first) {
                    boundFunction(entry.value, entry.key, this);
                    while (entry && entry.removed) entry = entry.previous;
                }
            },
            has: function has(key) {
                return !!getEntry(this, key);
            }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
            get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
            },
            set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
            }
        } : {
            add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
            }
        });
        if (descriptors) defineProperty(Prototype, "size", {
            get: function() {
                return getInternalState(this).size;
            }
        });
        return Constructor;
    },
    setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        iteratorDefine(Constructor, CONSTRUCTOR_NAME, (function(iterated, kind) {
            setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind: kind,
                last: undefined
            });
        }), (function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            while (entry && entry.removed) entry = entry.previous;
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                state.target = undefined;
                return createIterResultObject(undefined, true);
            }
            if (kind == "keys") return createIterResultObject(entry.key, false);
            if (kind == "values") return createIterResultObject(entry.value, false);
            return createIterResultObject([ entry.key, entry.value ], false);
        }), IS_MAP ? "entries" : "values", !IS_MAP, true);
        setSpecies(CONSTRUCTOR_NAME);
    }
};

collectionStrong.getConstructor;

collectionStrong.setStrong;

collection("Set", (function(init) {
    return function Set() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}), collectionStrong);

path.Set;

function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then((function(value) {
        return constructor.resolve(callback()).then((function() {
            return value;
        }));
    }), (function(reason) {
        return constructor.resolve(callback()).then((function() {
            return constructor.reject(reason);
        }));
    }));
}

function allSettled(arr) {
    var P = this;
    return new P((function(resolve, reject) {
        if (!(arr && typeof arr.length !== "undefined")) {
            return reject(new TypeError(typeof arr + " " + arr + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;
        function res(i, val) {
            if (val && (typeof val === "object" || typeof val === "function")) {
                var then = val.then;
                if (typeof then === "function") {
                    then.call(val, (function(val) {
                        res(i, val);
                    }), (function(e) {
                        args[i] = {
                            status: "rejected",
                            reason: e
                        };
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    }));
                    return;
                }
            }
            args[i] = {
                status: "fulfilled",
                value: val
            };
            if (--remaining === 0) {
                resolve(args);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    }));
}

var setTimeoutFunc = setTimeout;

function isArray(x) {
    return Boolean(x && typeof x.length !== "undefined");
}

function noop() {}

function bind(fn, thisArg) {
    return function() {
        fn.apply(thisArg, arguments);
    };
}

function Promise$1(fn) {
    if (!(this instanceof Promise$1)) throw new TypeError("Promises must be constructed via new");
    if (typeof fn !== "function") throw new TypeError("not a function");
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    doResolve(fn, this);
}

function handle(self, deferred) {
    while (self._state === 3) {
        self = self._value;
    }
    if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
    }
    self._handled = true;
    Promise$1._immediateFn((function() {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
            (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
            return;
        }
        var ret;
        try {
            ret = cb(self._value);
        } catch (e) {
            reject(deferred.promise, e);
            return;
        }
        resolve(deferred.promise, ret);
    }));
}

function resolve(self, newValue) {
    try {
        if (newValue === self) throw new TypeError("A promise cannot be resolved with itself.");
        if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
            var then = newValue.then;
            if (newValue instanceof Promise$1) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
            } else if (typeof then === "function") {
                doResolve(bind(then, newValue), self);
                return;
            }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
    } catch (e) {
        reject(self, e);
    }
}

function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
}

function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
        Promise$1._immediateFn((function() {
            if (!self._handled) {
                Promise$1._unhandledRejectionFn(self._value);
            }
        }));
    }
    for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
    this.onRejected = typeof onRejected === "function" ? onRejected : null;
    this.promise = promise;
}

function doResolve(fn, self) {
    var done = false;
    try {
        fn((function(value) {
            if (done) return;
            done = true;
            resolve(self, value);
        }), (function(reason) {
            if (done) return;
            done = true;
            reject(self, reason);
        }));
    } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
    }
}

Promise$1.prototype["catch"] = function(onRejected) {
    return this.then(null, onRejected);
};

Promise$1.prototype.then = function(onFulfilled, onRejected) {
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
};

Promise$1.prototype["finally"] = finallyConstructor;

Promise$1.all = function(arr) {
    return new Promise$1((function(resolve, reject) {
        if (!isArray(arr)) {
            return reject(new TypeError("Promise.all accepts an array"));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;
        function res(i, val) {
            try {
                if (val && (typeof val === "object" || typeof val === "function")) {
                    var then = val.then;
                    if (typeof then === "function") {
                        then.call(val, (function(val) {
                            res(i, val);
                        }), reject);
                        return;
                    }
                }
                args[i] = val;
                if (--remaining === 0) {
                    resolve(args);
                }
            } catch (ex) {
                reject(ex);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    }));
};

Promise$1.allSettled = allSettled;

Promise$1.resolve = function(value) {
    if (value && typeof value === "object" && value.constructor === Promise$1) {
        return value;
    }
    return new Promise$1((function(resolve) {
        resolve(value);
    }));
};

Promise$1.reject = function(value) {
    return new Promise$1((function(resolve, reject) {
        reject(value);
    }));
};

Promise$1.race = function(arr) {
    return new Promise$1((function(resolve, reject) {
        if (!isArray(arr)) {
            return reject(new TypeError("Promise.race accepts an array"));
        }
        for (var i = 0, len = arr.length; i < len; i++) {
            Promise$1.resolve(arr[i]).then(resolve, reject);
        }
    }));
};

Promise$1._immediateFn = typeof setImmediate === "function" && function(fn) {
    setImmediate(fn);
} || function(fn) {
    setTimeoutFunc(fn, 0);
};

Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== "undefined" && console) {
        console.warn("Possible Unhandled Promise Rejection:", err);
    }
};

var globalNS = function() {
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw new Error("unable to locate global object");
}();

if (typeof globalNS["Promise"] !== "function") {
    globalNS["Promise"] = Promise$1;
} else {
    if (!globalNS.Promise.prototype["finally"]) {
        globalNS.Promise.prototype["finally"] = finallyConstructor;
    }
    if (!globalNS.Promise.allSettled) {
        globalNS.Promise.allSettled = allSettled;
    }
}

(function(factory) {
    factory();
})((function() {
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
    }
    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        }
        return _assertThisInitialized(self);
    }
    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
        };
    }
    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);
                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.get) {
                    return desc.get.call(receiver);
                }
                return desc.value;
            };
        }
        return _get(target, property, receiver || target);
    }
    var Emitter = function() {
        function Emitter() {
            _classCallCheck(this, Emitter);
            Object.defineProperty(this, "listeners", {
                value: {},
                writable: true,
                configurable: true
            });
        }
        _createClass(Emitter, [ {
            key: "addEventListener",
            value: function addEventListener(type, callback, options) {
                if (!(type in this.listeners)) {
                    this.listeners[type] = [];
                }
                this.listeners[type].push({
                    callback: callback,
                    options: options
                });
            }
        }, {
            key: "removeEventListener",
            value: function removeEventListener(type, callback) {
                if (!(type in this.listeners)) {
                    return;
                }
                var stack = this.listeners[type];
                for (var i = 0, l = stack.length; i < l; i++) {
                    if (stack[i].callback === callback) {
                        stack.splice(i, 1);
                        return;
                    }
                }
            }
        }, {
            key: "dispatchEvent",
            value: function dispatchEvent(event) {
                if (!(event.type in this.listeners)) {
                    return;
                }
                var stack = this.listeners[event.type];
                var stackToCall = stack.slice();
                for (var i = 0, l = stackToCall.length; i < l; i++) {
                    var listener = stackToCall[i];
                    try {
                        listener.callback.call(this, event);
                    } catch (e) {
                        Promise.resolve().then((function() {
                            throw e;
                        }));
                    }
                    if (listener.options && listener.options.once) {
                        this.removeEventListener(event.type, listener.callback);
                    }
                }
                return !event.defaultPrevented;
            }
        } ]);
        return Emitter;
    }();
    var AbortSignal = function(_Emitter) {
        _inherits(AbortSignal, _Emitter);
        var _super = _createSuper(AbortSignal);
        function AbortSignal() {
            var _this;
            _classCallCheck(this, AbortSignal);
            _this = _super.call(this);
            if (!_this.listeners) {
                Emitter.call(_assertThisInitialized(_this));
            }
            Object.defineProperty(_assertThisInitialized(_this), "aborted", {
                value: false,
                writable: true,
                configurable: true
            });
            Object.defineProperty(_assertThisInitialized(_this), "onabort", {
                value: null,
                writable: true,
                configurable: true
            });
            return _this;
        }
        _createClass(AbortSignal, [ {
            key: "toString",
            value: function toString() {
                return "[object AbortSignal]";
            }
        }, {
            key: "dispatchEvent",
            value: function dispatchEvent(event) {
                if (event.type === "abort") {
                    this.aborted = true;
                    if (typeof this.onabort === "function") {
                        this.onabort.call(this, event);
                    }
                }
                _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
            }
        } ]);
        return AbortSignal;
    }(Emitter);
    var AbortController = function() {
        function AbortController() {
            _classCallCheck(this, AbortController);
            Object.defineProperty(this, "signal", {
                value: new AbortSignal,
                writable: true,
                configurable: true
            });
        }
        _createClass(AbortController, [ {
            key: "abort",
            value: function abort() {
                var event;
                try {
                    event = new Event("abort");
                } catch (e) {
                    if (typeof document !== "undefined") {
                        if (!document.createEvent) {
                            event = document.createEventObject();
                            event.type = "abort";
                        } else {
                            event = document.createEvent("Event");
                            event.initEvent("abort", false, false);
                        }
                    } else {
                        event = {
                            type: "abort",
                            bubbles: false,
                            cancelable: false
                        };
                    }
                }
                this.signal.dispatchEvent(event);
            }
        }, {
            key: "toString",
            value: function toString() {
                return "[object AbortController]";
            }
        } ]);
        return AbortController;
    }();
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        AbortController.prototype[Symbol.toStringTag] = "AbortController";
        AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
    }
    function polyfillNeeded(self) {
        if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
            console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
            return true;
        }
        return typeof self.Request === "function" && !self.Request.prototype.hasOwnProperty("signal") || !self.AbortController;
    }
    (function(self) {
        if (!polyfillNeeded(self)) {
            return;
        }
        self.AbortController = AbortController;
        self.AbortSignal = AbortSignal;
    })(typeof self !== "undefined" ? self : commonjsGlobal);
}));

var version = "1.22.6";

var DEFAULT_AUTHORIZE_PATH = "authorize";

var DEFAULT_TOKEN_PATH = "oauth/token";

var DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;

var DEFAULT_POPUP_CONFIG_OPTIONS = {
    timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
};

var DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;

var CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;

var DEFAULT_FETCH_TIMEOUT_MS = 1e4;

var CACHE_LOCATION_MEMORY = "memory";

var MISSING_REFRESH_TOKEN_ERROR_MESSAGE = "Missing Refresh Token";

var INVALID_REFRESH_TOKEN_ERROR_MESSAGE = "invalid refresh token";

var DEFAULT_SCOPE = "openid profile email";

var RECOVERABLE_ERRORS = [ "login_required", "consent_required", "interaction_required", "account_selection_required", "access_denied" ];

var DEFAULT_SESSION_CHECK_EXPIRY_DAYS = 1;

var DEFAULT_AUTH0_CLIENT = {
    name: "auth0-spa-js",
    version: version
};

var DEFAULT_NOW_PROVIDER = function() {
    return Date.now();
};

var GenericError = function(_super) {
    __extends(GenericError, _super);
    function GenericError(error, error_description) {
        var _this = _super.call(this, error_description) || this;
        _this.error = error;
        _this.error_description = error_description;
        Object.setPrototypeOf(_this, GenericError.prototype);
        return _this;
    }
    GenericError.fromPayload = function(_a) {
        var error = _a.error, error_description = _a.error_description;
        return new GenericError(error, error_description);
    };
    return GenericError;
}(Error);

var AuthenticationError = function(_super) {
    __extends(AuthenticationError, _super);
    function AuthenticationError(error, error_description, state, appState) {
        if (appState === void 0) {
            appState = null;
        }
        var _this = _super.call(this, error, error_description) || this;
        _this.state = state;
        _this.appState = appState;
        Object.setPrototypeOf(_this, AuthenticationError.prototype);
        return _this;
    }
    return AuthenticationError;
}(GenericError);

var TimeoutError = function(_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var _this = _super.call(this, "timeout", "Timeout") || this;
        Object.setPrototypeOf(_this, TimeoutError.prototype);
        return _this;
    }
    return TimeoutError;
}(GenericError);

var PopupTimeoutError = function(_super) {
    __extends(PopupTimeoutError, _super);
    function PopupTimeoutError(popup) {
        var _this = _super.call(this) || this;
        _this.popup = popup;
        Object.setPrototypeOf(_this, PopupTimeoutError.prototype);
        return _this;
    }
    return PopupTimeoutError;
}(TimeoutError);

var PopupCancelledError = function(_super) {
    __extends(PopupCancelledError, _super);
    function PopupCancelledError(popup) {
        var _this = _super.call(this, "cancelled", "Popup closed") || this;
        _this.popup = popup;
        Object.setPrototypeOf(_this, PopupCancelledError.prototype);
        return _this;
    }
    return PopupCancelledError;
}(GenericError);

var MfaRequiredError = function(_super) {
    __extends(MfaRequiredError, _super);
    function MfaRequiredError(error, error_description, mfa_token) {
        var _this = _super.call(this, error, error_description) || this;
        _this.mfa_token = mfa_token;
        Object.setPrototypeOf(_this, MfaRequiredError.prototype);
        return _this;
    }
    return MfaRequiredError;
}(GenericError);

var MissingRefreshTokenError = function(_super) {
    __extends(MissingRefreshTokenError, _super);
    function MissingRefreshTokenError(audience, scope) {
        var _this = _super.call(this, "missing_refresh_token", "Missing Refresh Token (audience: '".concat(valueOrEmptyString(audience, [ "default" ]), "', scope: '").concat(valueOrEmptyString(scope), "')")) || this;
        _this.audience = audience;
        _this.scope = scope;
        Object.setPrototypeOf(_this, MissingRefreshTokenError.prototype);
        return _this;
    }
    return MissingRefreshTokenError;
}(GenericError);

var parseQueryResult = function(queryString) {
    if (queryString.indexOf("#") > -1) {
        queryString = queryString.substr(0, queryString.indexOf("#"));
    }
    var queryParams = queryString.split("&");
    var parsedQuery = {};
    queryParams.forEach((function(qp) {
        var _a = __read(qp.split("="), 2), key = _a[0], val = _a[1];
        parsedQuery[key] = decodeURIComponent(val);
    }));
    if (parsedQuery.expires_in) {
        parsedQuery.expires_in = parseInt(parsedQuery.expires_in);
    }
    return parsedQuery;
};

var runIframe = function(authorizeUrl, eventOrigin, timeoutInSeconds) {
    if (timeoutInSeconds === void 0) {
        timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS;
    }
    return new Promise((function(res, rej) {
        var iframe = window.document.createElement("iframe");
        iframe.setAttribute("width", "0");
        iframe.setAttribute("height", "0");
        iframe.style.display = "none";
        var removeIframe = function() {
            if (window.document.body.contains(iframe)) {
                window.document.body.removeChild(iframe);
                window.removeEventListener("message", iframeEventHandler, false);
            }
        };
        var iframeEventHandler;
        var timeoutSetTimeoutId = setTimeout((function() {
            rej(new TimeoutError);
            removeIframe();
        }), timeoutInSeconds * 1e3);
        iframeEventHandler = function(e) {
            if (e.origin != eventOrigin) return;
            if (!e.data || e.data.type !== "authorization_response") return;
            var eventSource = e.source;
            if (eventSource) {
                eventSource.close();
            }
            e.data.response.error ? rej(GenericError.fromPayload(e.data.response)) : res(e.data.response);
            clearTimeout(timeoutSetTimeoutId);
            window.removeEventListener("message", iframeEventHandler, false);
            setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1e3);
        };
        window.addEventListener("message", iframeEventHandler, false);
        window.document.body.appendChild(iframe);
        iframe.setAttribute("src", authorizeUrl);
    }));
};

var openPopup = function(url) {
    var width = 400;
    var height = 600;
    var left = window.screenX + (window.innerWidth - width) / 2;
    var top = window.screenY + (window.innerHeight - height) / 2;
    return window.open(url, "auth0:authorize:popup", "left=".concat(left, ",top=").concat(top, ",width=").concat(width, ",height=").concat(height, ",resizable,scrollbars=yes,status=1"));
};

var runPopup = function(config) {
    return new Promise((function(resolve, reject) {
        var popupEventListener;
        var popupTimer = setInterval((function() {
            if (config.popup && config.popup.closed) {
                clearInterval(popupTimer);
                clearTimeout(timeoutId);
                window.removeEventListener("message", popupEventListener, false);
                reject(new PopupCancelledError(config.popup));
            }
        }), 1e3);
        var timeoutId = setTimeout((function() {
            clearInterval(popupTimer);
            reject(new PopupTimeoutError(config.popup));
            window.removeEventListener("message", popupEventListener, false);
        }), (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) * 1e3);
        popupEventListener = function(e) {
            if (!e.data || e.data.type !== "authorization_response") {
                return;
            }
            clearTimeout(timeoutId);
            clearInterval(popupTimer);
            window.removeEventListener("message", popupEventListener, false);
            config.popup.close();
            if (e.data.response.error) {
                return reject(GenericError.fromPayload(e.data.response));
            }
            resolve(e.data.response);
        };
        window.addEventListener("message", popupEventListener);
    }));
};

var getCrypto = function() {
    return window.crypto || window.msCrypto;
};

var getCryptoSubtle = function() {
    var crypto = getCrypto();
    return crypto.subtle || crypto.webkitSubtle;
};

var createRandomString = function() {
    var charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    var random = "";
    var randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
    randomValues.forEach((function(v) {
        return random += charset[v % charset.length];
    }));
    return random;
};

var encode = function(value) {
    return btoa(value);
};

var createQueryParams = function(params) {
    return Object.keys(params).filter((function(k) {
        return typeof params[k] !== "undefined" && encodeURIComponent(params[k]) !== "";
    })).map((function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    })).join("&");
};

var sha256 = function(s) {
    return __awaiter(void 0, void 0, void 0, (function() {
        var digestOp;
        return __generator(this, (function(_a) {
            switch (_a.label) {
              case 0:
                digestOp = getCryptoSubtle().digest({
                    name: "SHA-256"
                }, (new TextEncoder).encode(s));
                if (window.msCrypto) {
                    return [ 2, new Promise((function(res, rej) {
                        digestOp.oncomplete = function(e) {
                            res(e.target.result);
                        };
                        digestOp.onerror = function(e) {
                            rej(e.error);
                        };
                        digestOp.onabort = function() {
                            rej("The digest operation was aborted");
                        };
                    })) ];
                }
                return [ 4, digestOp ];

              case 1:
                return [ 2, _a.sent() ];
            }
        }));
    }));
};

var urlEncodeB64 = function(input) {
    var b64Chars = {
        "+": "-",
        "/": "_",
        "=": ""
    };
    return input.replace(/[+/=]/g, (function(m) {
        return b64Chars[m];
    }));
};

var decodeB64 = function(input) {
    return decodeURIComponent(atob(input).split("").map((function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    })).join(""));
};

var urlDecodeB64 = function(input) {
    return decodeB64(input.replace(/_/g, "/").replace(/-/g, "+"));
};

var bufferToBase64UrlEncoded = function(input) {
    var ie11SafeInput = new Uint8Array(input);
    return urlEncodeB64(window.btoa(String.fromCharCode.apply(String, __spreadArray([], __read(Array.from(ie11SafeInput)), false))));
};

var validateCrypto = function() {
    if (!getCrypto()) {
        throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
    }
    if (typeof getCryptoSubtle() === "undefined") {
        throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
    }
};

function valueOrEmptyString(value, exclude) {
    if (exclude === void 0) {
        exclude = [];
    }
    return value && !exclude.includes(value) ? value : "";
}

var sendMessage = function(message, to) {
    return new Promise((function(resolve, reject) {
        var messageChannel = new MessageChannel;
        messageChannel.port1.onmessage = function(event) {
            if (event.data.error) {
                reject(new Error(event.data.error));
            } else {
                resolve(event.data);
            }
            messageChannel.port1.close();
        };
        to.postMessage(message, [ messageChannel.port2 ]);
    }));
};

var createAbortController = function() {
    return new AbortController;
};

var dofetch = function(fetchUrl, fetchOptions) {
    return __awaiter(void 0, void 0, void 0, (function() {
        var response;
        var _a;
        return __generator(this, (function(_b) {
            switch (_b.label) {
              case 0:
                return [ 4, fetch__default["default"](fetchUrl, fetchOptions) ];

              case 1:
                response = _b.sent();
                _a = {
                    ok: response.ok
                };
                return [ 4, response.json() ];

              case 2:
                return [ 2, (_a.json = _b.sent(), _a) ];
            }
        }));
    }));
};

var fetchWithoutWorker = function(fetchUrl, fetchOptions, timeout) {
    return __awaiter(void 0, void 0, void 0, (function() {
        var controller, timeoutId;
        return __generator(this, (function(_a) {
            controller = createAbortController();
            fetchOptions.signal = controller.signal;
            return [ 2, Promise.race([ dofetch(fetchUrl, fetchOptions), new Promise((function(_, reject) {
                timeoutId = setTimeout((function() {
                    controller.abort();
                    reject(new Error("Timeout when executing 'fetch'"));
                }), timeout);
            })) ]).finally((function() {
                clearTimeout(timeoutId);
            })) ];
        }));
    }));
};

var fetchWithWorker = function(fetchUrl, audience, scope, fetchOptions, timeout, worker, useFormData, disableAuth0Client) {
    return __awaiter(void 0, void 0, void 0, (function() {
        return __generator(this, (function(_a) {
            return [ 2, sendMessage({
                auth: {
                    audience: audience,
                    scope: scope
                },
                timeout: timeout,
                fetchUrl: fetchUrl,
                fetchOptions: fetchOptions,
                useFormData: useFormData,
                disableAuth0Client: disableAuth0Client
            }, worker) ];
        }));
    }));
};

var switchFetch = function(fetchUrl, audience, scope, fetchOptions, worker, useFormData, disableAuth0Client, timeout) {
    if (timeout === void 0) {
        timeout = DEFAULT_FETCH_TIMEOUT_MS;
    }
    return __awaiter(void 0, void 0, void 0, (function() {
        return __generator(this, (function(_a) {
            if (worker) {
                return [ 2, fetchWithWorker(fetchUrl, audience, scope, fetchOptions, timeout, worker, useFormData, disableAuth0Client) ];
            } else {
                return [ 2, fetchWithoutWorker(fetchUrl, fetchOptions, timeout) ];
            }
        }));
    }));
};

function getJSON(url, timeout, audience, scope, options, worker, useFormData, disableAuth0Client) {
    return __awaiter(this, void 0, void 0, (function() {
        var fetchError, response, i, e_1, _a, error, error_description, data, ok, errorMessage;
        return __generator(this, (function(_b) {
            switch (_b.label) {
              case 0:
                fetchError = null;
                i = 0;
                _b.label = 1;

              case 1:
                if (!(i < DEFAULT_SILENT_TOKEN_RETRY_COUNT)) return [ 3, 6 ];
                _b.label = 2;

              case 2:
                _b.trys.push([ 2, 4, , 5 ]);
                return [ 4, switchFetch(url, audience, scope, options, worker, useFormData, disableAuth0Client, timeout) ];

              case 3:
                response = _b.sent();
                fetchError = null;
                return [ 3, 6 ];

              case 4:
                e_1 = _b.sent();
                fetchError = e_1;
                return [ 3, 5 ];

              case 5:
                i++;
                return [ 3, 1 ];

              case 6:
                if (fetchError) {
                    fetchError.message = fetchError.message || "Failed to fetch";
                    throw fetchError;
                }
                _a = response.json, error = _a.error, error_description = _a.error_description, 
                data = __rest(_a, [ "error", "error_description" ]), ok = response.ok;
                if (!ok) {
                    errorMessage = error_description || "HTTP error. Unable to fetch ".concat(url);
                    if (error === "mfa_required") {
                        throw new MfaRequiredError(error, errorMessage, data.mfa_token);
                    }
                    throw new GenericError(error || "request_error", errorMessage);
                }
                return [ 2, data ];
            }
        }));
    }));
}

function oauthToken(_a, worker) {
    var baseUrl = _a.baseUrl, timeout = _a.timeout, audience = _a.audience, scope = _a.scope, auth0Client = _a.auth0Client, useFormData = _a.useFormData, disableAuth0Client = _a.disableAuth0Client, _b = _a.tokenPath, tokenPath = _b === void 0 ? DEFAULT_TOKEN_PATH : _b, options = __rest(_a, [ "baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData", "disableAuth0Client", "tokenPath" ]);
    return __awaiter(this, void 0, void 0, (function() {
        var body, headers;
        return __generator(this, (function(_c) {
            switch (_c.label) {
              case 0:
                console.log("oauthToken, tokenPath: ", tokenPath);
                body = useFormData ? createQueryParams(options) : JSON.stringify(options);
                console.log("oauthToken, body: ", body);
                console.log("oauthToken, options: ", options);
                console.log("oauthToken, baseUrl: ", baseUrl);
                console.log("oauthToken, disableAuth0Client: ", disableAuth0Client);
                headers = {
                    "Content-Type": useFormData ? "application/x-www-form-urlencoded" : "application/json"
                };
                if (!disableAuth0Client) {
                    headers["Auth0-Client"] = btoa(JSON.stringify(auth0Client || DEFAULT_AUTH0_CLIENT));
                }
                console.log("oauthToken, headers: ", headers);
                return [ 4, getJSON("".concat(baseUrl, "/").concat(tokenPath), timeout, audience || "default", scope, {
                    method: "POST",
                    body: body,
                    headers: headers
                }, worker, useFormData) ];

              case 1:
                return [ 2, _c.sent() ];
            }
        }));
    }));
}

var dedupe = function(arr) {
    return Array.from(new Set(arr));
};

var getUniqueScopes = function() {
    var scopes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scopes[_i] = arguments[_i];
    }
    return dedupe(scopes.join(" ").trim().split(/\s+/)).join(" ");
};

var CACHE_KEY_PREFIX = "@@auth0spajs@@";

var CacheKey = function() {
    function CacheKey(data, prefix) {
        if (prefix === void 0) {
            prefix = CACHE_KEY_PREFIX;
        }
        this.prefix = prefix;
        this.client_id = data.client_id;
        this.scope = data.scope;
        this.audience = data.audience;
    }
    CacheKey.prototype.toKey = function() {
        return "".concat(this.prefix, "::").concat(this.client_id, "::").concat(this.audience, "::").concat(this.scope);
    };
    CacheKey.fromKey = function(key) {
        var _a = __read(key.split("::"), 4), prefix = _a[0], client_id = _a[1], audience = _a[2], scope = _a[3];
        return new CacheKey({
            client_id: client_id,
            scope: scope,
            audience: audience
        }, prefix);
    };
    CacheKey.fromCacheEntry = function(entry) {
        var scope = entry.scope, audience = entry.audience, client_id = entry.client_id;
        return new CacheKey({
            scope: scope,
            audience: audience,
            client_id: client_id
        });
    };
    return CacheKey;
}();

var LocalStorageCache = function() {
    function LocalStorageCache() {}
    LocalStorageCache.prototype.set = function(key, entry) {
        localStorage.setItem(key, JSON.stringify(entry));
    };
    LocalStorageCache.prototype.get = function(key) {
        var json = window.localStorage.getItem(key);
        if (!json) return;
        try {
            var payload = JSON.parse(json);
            return payload;
        } catch (e) {
            return;
        }
    };
    LocalStorageCache.prototype.remove = function(key) {
        localStorage.removeItem(key);
    };
    LocalStorageCache.prototype.allKeys = function() {
        return Object.keys(window.localStorage).filter((function(key) {
            return key.startsWith(CACHE_KEY_PREFIX);
        }));
    };
    return LocalStorageCache;
}();

var InMemoryCache = function() {
    function InMemoryCache() {
        this.enclosedCache = function() {
            var cache = {};
            return {
                set: function(key, entry) {
                    cache[key] = entry;
                },
                get: function(key) {
                    var cacheEntry = cache[key];
                    if (!cacheEntry) {
                        return;
                    }
                    return cacheEntry;
                },
                remove: function(key) {
                    delete cache[key];
                },
                allKeys: function() {
                    return Object.keys(cache);
                }
            };
        }();
    }
    return InMemoryCache;
}();

var DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;

var CacheManager = function() {
    function CacheManager(cache, keyManifest, nowProvider) {
        this.cache = cache;
        this.keyManifest = keyManifest;
        this.nowProvider = nowProvider;
        this.nowProvider = this.nowProvider || DEFAULT_NOW_PROVIDER;
    }
    CacheManager.prototype.get = function(cacheKey, expiryAdjustmentSeconds) {
        var _a;
        if (expiryAdjustmentSeconds === void 0) {
            expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS;
        }
        return __awaiter(this, void 0, void 0, (function() {
            var wrappedEntry, keys, matchedKey, now, nowSeconds;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, this.cache.get(cacheKey.toKey()) ];

                  case 1:
                    wrappedEntry = _b.sent();
                    if (!!wrappedEntry) return [ 3, 4 ];
                    return [ 4, this.getCacheKeys() ];

                  case 2:
                    keys = _b.sent();
                    if (!keys) return [ 2 ];
                    matchedKey = this.matchExistingCacheKey(cacheKey, keys);
                    if (!matchedKey) return [ 3, 4 ];
                    return [ 4, this.cache.get(matchedKey) ];

                  case 3:
                    wrappedEntry = _b.sent();
                    _b.label = 4;

                  case 4:
                    if (!wrappedEntry) {
                        return [ 2 ];
                    }
                    return [ 4, this.nowProvider() ];

                  case 5:
                    now = _b.sent();
                    nowSeconds = Math.floor(now / 1e3);
                    if (!(wrappedEntry.expiresAt - expiryAdjustmentSeconds < nowSeconds)) return [ 3, 10 ];
                    if (!wrappedEntry.body.refresh_token) return [ 3, 7 ];
                    wrappedEntry.body = {
                        refresh_token: wrappedEntry.body.refresh_token
                    };
                    return [ 4, this.cache.set(cacheKey.toKey(), wrappedEntry) ];

                  case 6:
                    _b.sent();
                    return [ 2, wrappedEntry.body ];

                  case 7:
                    return [ 4, this.cache.remove(cacheKey.toKey()) ];

                  case 8:
                    _b.sent();
                    return [ 4, (_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.remove(cacheKey.toKey()) ];

                  case 9:
                    _b.sent();
                    return [ 2 ];

                  case 10:
                    return [ 2, wrappedEntry.body ];
                }
            }));
        }));
    };
    CacheManager.prototype.set = function(entry) {
        var _a;
        return __awaiter(this, void 0, void 0, (function() {
            var cacheKey, wrappedEntry;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    cacheKey = new CacheKey({
                        client_id: entry.client_id,
                        scope: entry.scope,
                        audience: entry.audience
                    });
                    return [ 4, this.wrapCacheEntry(entry) ];

                  case 1:
                    wrappedEntry = _b.sent();
                    return [ 4, this.cache.set(cacheKey.toKey(), wrappedEntry) ];

                  case 2:
                    _b.sent();
                    return [ 4, (_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.add(cacheKey.toKey()) ];

                  case 3:
                    _b.sent();
                    return [ 2 ];
                }
            }));
        }));
    };
    CacheManager.prototype.clear = function(clientId) {
        var _a;
        return __awaiter(this, void 0, void 0, (function() {
            var keys;
            var _this = this;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, this.getCacheKeys() ];

                  case 1:
                    keys = _b.sent();
                    if (!keys) return [ 2 ];
                    return [ 4, keys.filter((function(key) {
                        return clientId ? key.includes(clientId) : true;
                    })).reduce((function(memo, key) {
                        return __awaiter(_this, void 0, void 0, (function() {
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    return [ 4, memo ];

                                  case 1:
                                    _a.sent();
                                    return [ 4, this.cache.remove(key) ];

                                  case 2:
                                    _a.sent();
                                    return [ 2 ];
                                }
                            }));
                        }));
                    }), Promise.resolve()) ];

                  case 2:
                    _b.sent();
                    return [ 4, (_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.clear() ];

                  case 3:
                    _b.sent();
                    return [ 2 ];
                }
            }));
        }));
    };
    CacheManager.prototype.clearSync = function(clientId) {
        var _this = this;
        var keys = this.cache.allKeys();
        if (!keys) return;
        keys.filter((function(key) {
            return clientId ? key.includes(clientId) : true;
        })).forEach((function(key) {
            _this.cache.remove(key);
        }));
    };
    CacheManager.prototype.wrapCacheEntry = function(entry) {
        return __awaiter(this, void 0, void 0, (function() {
            var now, expiresInTime, expirySeconds;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, this.nowProvider() ];

                  case 1:
                    now = _a.sent();
                    expiresInTime = Math.floor(now / 1e3) + entry.expires_in;
                    expirySeconds = Math.min(expiresInTime, entry.decodedToken.claims.exp);
                    return [ 2, {
                        body: entry,
                        expiresAt: expirySeconds
                    } ];
                }
            }));
        }));
    };
    CacheManager.prototype.getCacheKeys = function() {
        var _a;
        return __awaiter(this, void 0, void 0, (function() {
            var _b;
            return __generator(this, (function(_c) {
                switch (_c.label) {
                  case 0:
                    if (!this.keyManifest) return [ 3, 2 ];
                    return [ 4, this.keyManifest.get() ];

                  case 1:
                    _b = (_a = _c.sent()) === null || _a === void 0 ? void 0 : _a.keys;
                    return [ 3, 4 ];

                  case 2:
                    return [ 4, this.cache.allKeys() ];

                  case 3:
                    _b = _c.sent();
                    _c.label = 4;

                  case 4:
                    return [ 2, _b ];
                }
            }));
        }));
    };
    CacheManager.prototype.matchExistingCacheKey = function(keyToMatch, allKeys) {
        return allKeys.filter((function(key) {
            var cacheKey = CacheKey.fromKey(key);
            var scopeSet = new Set(cacheKey.scope && cacheKey.scope.split(" "));
            var scopesToMatch = keyToMatch.scope.split(" ");
            var hasAllScopes = cacheKey.scope && scopesToMatch.reduce((function(acc, current) {
                return acc && scopeSet.has(current);
            }), true);
            return cacheKey.prefix === CACHE_KEY_PREFIX && cacheKey.client_id === keyToMatch.client_id && cacheKey.audience === keyToMatch.audience && hasAllScopes;
        }))[0];
    };
    return CacheManager;
}();

var TRANSACTION_STORAGE_KEY_PREFIX = "a0.spajs.txs";

var TransactionManager = function() {
    function TransactionManager(storage, clientId) {
        this.storage = storage;
        this.clientId = clientId;
        this.storageKey = "".concat(TRANSACTION_STORAGE_KEY_PREFIX, ".").concat(this.clientId);
        this.transaction = this.storage.get(this.storageKey);
    }
    TransactionManager.prototype.create = function(transaction) {
        this.transaction = transaction;
        this.storage.save(this.storageKey, transaction, {
            daysUntilExpire: 1
        });
    };
    TransactionManager.prototype.get = function() {
        return this.transaction;
    };
    TransactionManager.prototype.remove = function() {
        delete this.transaction;
        this.storage.remove(this.storageKey);
    };
    return TransactionManager;
}();

var isNumber = function(n) {
    return typeof n === "number";
};

var idTokendecoded = [ "iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm" ];

var decode = function(token) {
    var parts = token.split(".");
    var _a = __read(parts, 3), header = _a[0], payload = _a[1], signature = _a[2];
    if (parts.length !== 3 || !header || !payload || !signature) {
        throw new Error("ID token could not be decoded");
    }
    var payloadJSON = JSON.parse(urlDecodeB64(payload));
    var claims = {
        __raw: token
    };
    var user = {};
    Object.keys(payloadJSON).forEach((function(k) {
        claims[k] = payloadJSON[k];
        if (!idTokendecoded.includes(k)) {
            user[k] = payloadJSON[k];
        }
    }));
    if (claims.iss && !claims.iss.endsWith("/")) {
        claims.iss += "/";
    }
    return {
        encoded: {
            header: header,
            payload: payload,
            signature: signature
        },
        header: JSON.parse(urlDecodeB64(header)),
        claims: claims,
        user: user
    };
};

var verify = function(options) {
    if (!options.id_token) {
        throw new Error("ID token is required but missing");
    }
    var decoded = decode(options.id_token);
    if (!decoded.claims.iss) {
        throw new Error("Issuer (iss) claim must be a string present in the ID token");
    }
    if (decoded.claims.iss !== options.iss) {
        throw new Error('Issuer (iss) claim mismatch in the ID token; expected "'.concat(options.iss, '", found "').concat(decoded.claims.iss, '"'));
    }
    if (!decoded.user.sub) {
        throw new Error("Subject (sub) claim must be a string present in the ID token");
    }
    if (decoded.header.alg !== "RS256") {
        throw new Error('Signature algorithm of "'.concat(decoded.header.alg, '" is not supported. Expected the ID token to be signed with "RS256".'));
    }
    if (!decoded.claims.aud || !(typeof decoded.claims.aud === "string" || Array.isArray(decoded.claims.aud))) {
        throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
    }
    if (Array.isArray(decoded.claims.aud)) {
        if (!decoded.claims.aud.includes(options.aud)) {
            throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(options.aud, '" but was not one of "').concat(decoded.claims.aud.join(", "), '"'));
        }
        if (decoded.claims.aud.length > 1) {
            if (!decoded.claims.azp) {
                throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
            }
            if (decoded.claims.azp !== options.aud) {
                throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'.concat(options.aud, '", found "').concat(decoded.claims.azp, '"'));
            }
        }
    } else if (decoded.claims.aud !== options.aud) {
        throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(options.aud, '" but found "').concat(decoded.claims.aud, '"'));
    }
    if (options.nonce) {
        if (!decoded.claims.nonce) {
            throw new Error("Nonce (nonce) claim must be a string present in the ID token");
        }
        if (decoded.claims.nonce !== options.nonce) {
            throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'.concat(options.nonce, '", found "').concat(decoded.claims.nonce, '"'));
        }
    }
    if (options.max_age && !isNumber(decoded.claims.auth_time)) {
        throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
    }
    if (!isNumber(decoded.claims.exp)) {
        throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
    }
    if (!isNumber(decoded.claims.iat)) {
        throw new Error("Issued At (iat) claim must be a number present in the ID token");
    }
    var leeway = options.leeway || 60;
    var now = new Date(options.now || Date.now());
    var expDate = new Date(0);
    var nbfDate = new Date(0);
    var authTimeDate = new Date(0);
    authTimeDate.setUTCSeconds(parseInt(decoded.claims.auth_time) + options.max_age + leeway);
    expDate.setUTCSeconds(decoded.claims.exp + leeway);
    nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
    if (now > expDate) {
        throw new Error("Expiration Time (exp) claim error in the ID token; current time (".concat(now, ") is after expiration time (").concat(expDate, ")"));
    }
    if (isNumber(decoded.claims.nbf) && now < nbfDate) {
        throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (".concat(now, ") is before ").concat(nbfDate));
    }
    if (isNumber(decoded.claims.auth_time) && now > authTimeDate) {
        throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (".concat(now, ") is after last auth at ").concat(authTimeDate));
    }
    if (options.organizationId) {
        if (!decoded.claims.org_id) {
            throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
        } else if (options.organizationId !== decoded.claims.org_id) {
            throw new Error('Organization ID (org_id) claim mismatch in the ID token; expected "'.concat(options.organizationId, '", found "').concat(decoded.claims.org_id, '"'));
        }
    }
    return decoded;
};

var CookieStorage = {
    get: function(key) {
        var value = Cookies__namespace.get(key);
        if (typeof value === "undefined") {
            return;
        }
        return JSON.parse(value);
    },
    save: function(key, value, options) {
        var cookieAttributes = {};
        if ("https:" === window.location.protocol) {
            cookieAttributes = {
                secure: true,
                sameSite: "none"
            };
        }
        if (options === null || options === void 0 ? void 0 : options.daysUntilExpire) {
            cookieAttributes.expires = options.daysUntilExpire;
        }
        if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
            cookieAttributes.domain = options.cookieDomain;
        }
        Cookies__namespace.set(key, JSON.stringify(value), cookieAttributes);
    },
    remove: function(key, options) {
        var cookieAttributes = {};
        if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
            cookieAttributes.domain = options.cookieDomain;
        }
        Cookies__namespace.remove(key, cookieAttributes);
    }
};

var LEGACY_PREFIX = "_legacy_";

var CookieStorageWithLegacySameSite = {
    get: function(key) {
        var value = CookieStorage.get(key);
        if (value) {
            return value;
        }
        return CookieStorage.get("".concat(LEGACY_PREFIX).concat(key));
    },
    save: function(key, value, options) {
        var cookieAttributes = {};
        if ("https:" === window.location.protocol) {
            cookieAttributes = {
                secure: true
            };
        }
        if (options === null || options === void 0 ? void 0 : options.daysUntilExpire) {
            cookieAttributes.expires = options.daysUntilExpire;
        }
        Cookies__namespace.set("".concat(LEGACY_PREFIX).concat(key), JSON.stringify(value), cookieAttributes);
        CookieStorage.save(key, value, options);
    },
    remove: function(key, options) {
        var cookieAttributes = {};
        if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
            cookieAttributes.domain = options.cookieDomain;
        }
        Cookies__namespace.remove(key, cookieAttributes);
        CookieStorage.remove(key, options);
        CookieStorage.remove("".concat(LEGACY_PREFIX).concat(key), options);
    }
};

var SessionStorage = {
    get: function(key) {
        if (typeof sessionStorage === "undefined") {
            return;
        }
        var value = sessionStorage.getItem(key);
        if (typeof value === "undefined") {
            return;
        }
        return JSON.parse(value);
    },
    save: function(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    remove: function(key) {
        sessionStorage.removeItem(key);
    }
};

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf("\n", 10) + 1;
    var body = source.substring(start) + (sourcemap ? "//# sourceMappingURL=" + sourcemap : "");
    var blob = new Blob([ body ], {
        type: "application/javascript"
    });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var WorkerFactory = createBase64WorkerFactory("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24oKSB7CiAgICAidXNlIHN0cmljdCI7CiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHsKICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IHsKICAgICAgICAgICAgX19wcm90b19fOiBbXQogICAgICAgIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbihkLCBiKSB7CiAgICAgICAgICAgIGQuX19wcm90b19fID0gYjsKICAgICAgICB9IHx8IGZ1bmN0aW9uKGQsIGIpIHsKICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsKICAgICAgICB9OwogICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwogICAgfTsKICAgIGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7CiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSAiZnVuY3Rpb24iICYmIGIgIT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoIkNsYXNzIGV4dGVuZHMgdmFsdWUgIiArIFN0cmluZyhiKSArICIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbCIpOwogICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CiAgICAgICAgZnVuY3Rpb24gX18oKSB7CiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkOwogICAgICAgIH0KICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18pOwogICAgfQogICAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7CiAgICAgICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHsKICAgICAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldOwogICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gdDsKICAgICAgICB9OwogICAgICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHsKICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgewogICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUCgoZnVuY3Rpb24ocmVzb2x2ZSkgewogICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7CiAgICAgICAgICAgIH0pKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKSgoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgewogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7CiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7CiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yWyJ0aHJvdyJdKHZhbHVlKSk7CiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7CiAgICAgICAgICAgICAgICByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7CiAgICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkgewogICAgICAgIHZhciBfID0gewogICAgICAgICAgICBsYWJlbDogMCwKICAgICAgICAgICAgc2VudDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICBpZiAodFswXSAmIDEpIHRocm93IHRbMV07CiAgICAgICAgICAgICAgICByZXR1cm4gdFsxXTsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgdHJ5czogW10sCiAgICAgICAgICAgIG9wczogW10KICAgICAgICB9LCBmLCB5LCB0LCBnOwogICAgICAgIHJldHVybiBnID0gewogICAgICAgICAgICBuZXh0OiB2ZXJiKDApLAogICAgICAgICAgICB0aHJvdzogdmVyYigxKSwKICAgICAgICAgICAgcmV0dXJuOiB2ZXJiKDIpCiAgICAgICAgfSwgdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzOwogICAgICAgIH0pLCBnOwogICAgICAgIGZ1bmN0aW9uIHZlcmIobikgewogICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odikgewogICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXAoWyBuLCB2IF0pOwogICAgICAgICAgICB9OwogICAgICAgIH0KICAgICAgICBmdW5jdGlvbiBzdGVwKG9wKSB7CiAgICAgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7CiAgICAgICAgICAgIHdoaWxlIChfKSB0cnkgewogICAgICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVsicmV0dXJuIl0gOiBvcFswXSA/IHlbInRocm93Il0gfHwgKCh0ID0geVsicmV0dXJuIl0pICYmIHQuY2FsbCh5KSwgCiAgICAgICAgICAgICAgICAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7CiAgICAgICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWyBvcFswXSAmIDIsIHQudmFsdWUgXTsKICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHsKICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgICAgICAgICAgdCA9IG9wOwogICAgICAgICAgICAgICAgICAgIGJyZWFrOwoKICAgICAgICAgICAgICAgICAgY2FzZSA0OgogICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKzsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0sCiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlCiAgICAgICAgICAgICAgICAgICAgfTsKCiAgICAgICAgICAgICAgICAgIGNhc2UgNToKICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7CiAgICAgICAgICAgICAgICAgICAgeSA9IG9wWzFdOwogICAgICAgICAgICAgICAgICAgIG9wID0gWyAwIF07CiAgICAgICAgICAgICAgICAgICAgY29udGludWU7CgogICAgICAgICAgICAgICAgICBjYXNlIDc6CiAgICAgICAgICAgICAgICAgICAgb3AgPSBfLm9wcy5wb3AoKTsKICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7CiAgICAgICAgICAgICAgICAgICAgY29udGludWU7CgogICAgICAgICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIF8gPSAwOwogICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCBvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkgewogICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gb3BbMV07CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsKICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMV07CiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBvcDsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzJdOwogICAgICAgICAgICAgICAgICAgICAgICBfLm9wcy5wdXNoKG9wKTsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTsKICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7CiAgICAgICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTsKICAgICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICAgICAgb3AgPSBbIDYsIGUgXTsKICAgICAgICAgICAgICAgIHkgPSAwOwogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgICAgZiA9IHQgPSAwOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOwogICAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICAgICAgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsCiAgICAgICAgICAgICAgICBkb25lOiB0cnVlCiAgICAgICAgICAgIH07CiAgICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHsKICAgICAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdOwogICAgICAgIGlmICghbSkgcmV0dXJuIG87CiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7CiAgICAgICAgdHJ5IHsKICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7CiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgICAgZSA9IHsKICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcgogICAgICAgICAgICB9OwogICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVsicmV0dXJuIl0pKSBtLmNhbGwoaSk7CiAgICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXR1cm4gYXI7CiAgICB9CiAgICBmdW5jdGlvbiB2YWx1ZU9yRW1wdHlTdHJpbmcodmFsdWUsIGV4Y2x1ZGUpIHsKICAgICAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIGV4Y2x1ZGUgPSBbXTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHZhbHVlICYmICFleGNsdWRlLmluY2x1ZGVzKHZhbHVlKSA/IHZhbHVlIDogIiI7CiAgICB9CiAgICB2YXIgR2VuZXJpY0Vycm9yID0gZnVuY3Rpb24oX3N1cGVyKSB7CiAgICAgICAgX19leHRlbmRzKEdlbmVyaWNFcnJvciwgX3N1cGVyKTsKICAgICAgICBmdW5jdGlvbiBHZW5lcmljRXJyb3IoZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uKSB7CiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yX2Rlc2NyaXB0aW9uKSB8fCB0aGlzOwogICAgICAgICAgICBfdGhpcy5lcnJvciA9IGVycm9yOwogICAgICAgICAgICBfdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IGVycm9yX2Rlc2NyaXB0aW9uOwogICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIEdlbmVyaWNFcnJvci5wcm90b3R5cGUpOwogICAgICAgICAgICByZXR1cm4gX3RoaXM7CiAgICAgICAgfQogICAgICAgIEdlbmVyaWNFcnJvci5mcm9tUGF5bG9hZCA9IGZ1bmN0aW9uKF9hKSB7CiAgICAgICAgICAgIHZhciBlcnJvciA9IF9hLmVycm9yLCBlcnJvcl9kZXNjcmlwdGlvbiA9IF9hLmVycm9yX2Rlc2NyaXB0aW9uOwogICAgICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNFcnJvcihlcnJvciwgZXJyb3JfZGVzY3JpcHRpb24pOwogICAgICAgIH07CiAgICAgICAgcmV0dXJuIEdlbmVyaWNFcnJvcjsKICAgIH0oRXJyb3IpOwogICAgKGZ1bmN0aW9uKF9zdXBlcikgewogICAgICAgIF9fZXh0ZW5kcyhBdXRoZW50aWNhdGlvbkVycm9yLCBfc3VwZXIpOwogICAgICAgIGZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uRXJyb3IoZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uLCBzdGF0ZSwgYXBwU3RhdGUpIHsKICAgICAgICAgICAgaWYgKGFwcFN0YXRlID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICAgIGFwcFN0YXRlID0gbnVsbDsKICAgICAgICAgICAgfQogICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnJvciwgZXJyb3JfZGVzY3JpcHRpb24pIHx8IHRoaXM7CiAgICAgICAgICAgIF90aGlzLnN0YXRlID0gc3RhdGU7CiAgICAgICAgICAgIF90aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7CiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgQXV0aGVudGljYXRpb25FcnJvci5wcm90b3R5cGUpOwogICAgICAgICAgICByZXR1cm4gX3RoaXM7CiAgICAgICAgfQogICAgICAgIHJldHVybiBBdXRoZW50aWNhdGlvbkVycm9yOwogICAgfSkoR2VuZXJpY0Vycm9yKTsKICAgIHZhciBUaW1lb3V0RXJyb3IgPSBmdW5jdGlvbihfc3VwZXIpIHsKICAgICAgICBfX2V4dGVuZHMoVGltZW91dEVycm9yLCBfc3VwZXIpOwogICAgICAgIGZ1bmN0aW9uIFRpbWVvdXRFcnJvcigpIHsKICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgInRpbWVvdXQiLCAiVGltZW91dCIpIHx8IHRoaXM7CiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgVGltZW91dEVycm9yLnByb3RvdHlwZSk7CiAgICAgICAgICAgIHJldHVybiBfdGhpczsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIFRpbWVvdXRFcnJvcjsKICAgIH0oR2VuZXJpY0Vycm9yKTsKICAgIChmdW5jdGlvbihfc3VwZXIpIHsKICAgICAgICBfX2V4dGVuZHMoUG9wdXBUaW1lb3V0RXJyb3IsIF9zdXBlcik7CiAgICAgICAgZnVuY3Rpb24gUG9wdXBUaW1lb3V0RXJyb3IocG9wdXApIHsKICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpczsKICAgICAgICAgICAgX3RoaXMucG9wdXAgPSBwb3B1cDsKICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBQb3B1cFRpbWVvdXRFcnJvci5wcm90b3R5cGUpOwogICAgICAgICAgICByZXR1cm4gX3RoaXM7CiAgICAgICAgfQogICAgICAgIHJldHVybiBQb3B1cFRpbWVvdXRFcnJvcjsKICAgIH0pKFRpbWVvdXRFcnJvcik7CiAgICAoZnVuY3Rpb24oX3N1cGVyKSB7CiAgICAgICAgX19leHRlbmRzKFBvcHVwQ2FuY2VsbGVkRXJyb3IsIF9zdXBlcik7CiAgICAgICAgZnVuY3Rpb24gUG9wdXBDYW5jZWxsZWRFcnJvcihwb3B1cCkgewogICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAiY2FuY2VsbGVkIiwgIlBvcHVwIGNsb3NlZCIpIHx8IHRoaXM7CiAgICAgICAgICAgIF90aGlzLnBvcHVwID0gcG9wdXA7CiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgUG9wdXBDYW5jZWxsZWRFcnJvci5wcm90b3R5cGUpOwogICAgICAgICAgICByZXR1cm4gX3RoaXM7CiAgICAgICAgfQogICAgICAgIHJldHVybiBQb3B1cENhbmNlbGxlZEVycm9yOwogICAgfSkoR2VuZXJpY0Vycm9yKTsKICAgIChmdW5jdGlvbihfc3VwZXIpIHsKICAgICAgICBfX2V4dGVuZHMoTWZhUmVxdWlyZWRFcnJvciwgX3N1cGVyKTsKICAgICAgICBmdW5jdGlvbiBNZmFSZXF1aXJlZEVycm9yKGVycm9yLCBlcnJvcl9kZXNjcmlwdGlvbiwgbWZhX3Rva2VuKSB7CiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yLCBlcnJvcl9kZXNjcmlwdGlvbikgfHwgdGhpczsKICAgICAgICAgICAgX3RoaXMubWZhX3Rva2VuID0gbWZhX3Rva2VuOwogICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIE1mYVJlcXVpcmVkRXJyb3IucHJvdG90eXBlKTsKICAgICAgICAgICAgcmV0dXJuIF90aGlzOwogICAgICAgIH0KICAgICAgICByZXR1cm4gTWZhUmVxdWlyZWRFcnJvcjsKICAgIH0pKEdlbmVyaWNFcnJvcik7CiAgICB2YXIgTWlzc2luZ1JlZnJlc2hUb2tlbkVycm9yID0gZnVuY3Rpb24oX3N1cGVyKSB7CiAgICAgICAgX19leHRlbmRzKE1pc3NpbmdSZWZyZXNoVG9rZW5FcnJvciwgX3N1cGVyKTsKICAgICAgICBmdW5jdGlvbiBNaXNzaW5nUmVmcmVzaFRva2VuRXJyb3IoYXVkaWVuY2UsIHNjb3BlKSB7CiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICJtaXNzaW5nX3JlZnJlc2hfdG9rZW4iLCAiTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyIuY29uY2F0KHZhbHVlT3JFbXB0eVN0cmluZyhhdWRpZW5jZSwgWyAiZGVmYXVsdCIgXSksICInLCBzY29wZTogJyIpLmNvbmNhdCh2YWx1ZU9yRW1wdHlTdHJpbmcoc2NvcGUpLCAiJykiKSkgfHwgdGhpczsKICAgICAgICAgICAgX3RoaXMuYXVkaWVuY2UgPSBhdWRpZW5jZTsKICAgICAgICAgICAgX3RoaXMuc2NvcGUgPSBzY29wZTsKICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBNaXNzaW5nUmVmcmVzaFRva2VuRXJyb3IucHJvdG90eXBlKTsKICAgICAgICAgICAgcmV0dXJuIF90aGlzOwogICAgICAgIH0KICAgICAgICByZXR1cm4gTWlzc2luZ1JlZnJlc2hUb2tlbkVycm9yOwogICAgfShHZW5lcmljRXJyb3IpOwogICAgdmFyIHJlZnJlc2hUb2tlbnMgPSB7fTsKICAgIHZhciBjYWNoZUtleSA9IGZ1bmN0aW9uKGF1ZGllbmNlLCBzY29wZSkgewogICAgICAgIHJldHVybiAiIi5jb25jYXQoYXVkaWVuY2UsICJ8IikuY29uY2F0KHNjb3BlKTsKICAgIH07CiAgICB2YXIgZ2V0UmVmcmVzaFRva2VuID0gZnVuY3Rpb24oYXVkaWVuY2UsIHNjb3BlKSB7CiAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07CiAgICB9OwogICAgdmFyIHNldFJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uKHJlZnJlc2hUb2tlbiwgYXVkaWVuY2UsIHNjb3BlKSB7CiAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV0gPSByZWZyZXNoVG9rZW47CiAgICB9OwogICAgdmFyIGRlbGV0ZVJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uKGF1ZGllbmNlLCBzY29wZSkgewogICAgICAgIHJldHVybiBkZWxldGUgcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTsKICAgIH07CiAgICB2YXIgd2FpdCA9IGZ1bmN0aW9uKHRpbWUpIHsKICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHJlc29sdmUpIHsKICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7CiAgICAgICAgfSkpOwogICAgfTsKICAgIHZhciBmb3JtRGF0YVRvT2JqZWN0ID0gZnVuY3Rpb24oZm9ybURhdGEpIHsKICAgICAgICB2YXIgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKTsKICAgICAgICB2YXIgcGFyc2VkUXVlcnkgPSB7fTsKICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKChmdW5jdGlvbih2YWwsIGtleSkgewogICAgICAgICAgICBwYXJzZWRRdWVyeVtrZXldID0gdmFsOwogICAgICAgIH0pKTsKICAgICAgICByZXR1cm4gcGFyc2VkUXVlcnk7CiAgICB9OwogICAgdmFyIG1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24oX2EpIHsKICAgICAgICB2YXIgX2IgPSBfYS5kYXRhLCB0aW1lb3V0ID0gX2IudGltZW91dCwgYXV0aCA9IF9iLmF1dGgsIGZldGNoVXJsID0gX2IuZmV0Y2hVcmwsIGZldGNoT3B0aW9ucyA9IF9iLmZldGNoT3B0aW9ucywgdXNlRm9ybURhdGEgPSBfYi51c2VGb3JtRGF0YSwgX2MgPSBfX3JlYWQoX2EucG9ydHMsIDEpLCBwb3J0ID0gX2NbMF07CiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCAoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHZhciBqc29uLCBfZCwgYXVkaWVuY2UsIHNjb3BlLCBib2R5LCByZWZyZXNoVG9rZW4sIGFib3J0Q29udHJvbGxlciwgcmVzcG9uc2UsIGVycm9yXzEsIGVycm9yXzI7CiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCAoZnVuY3Rpb24oX2UpIHsKICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHsKICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICAgIF9kID0gYXV0aCB8fCB7fSwgYXVkaWVuY2UgPSBfZC5hdWRpZW5jZSwgc2NvcGUgPSBfZC5zY29wZTsKICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDE7CgogICAgICAgICAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFsgMSwgNywgLCA4IF0pOwogICAgICAgICAgICAgICAgICAgIGJvZHkgPSB1c2VGb3JtRGF0YSA/IGZvcm1EYXRhVG9PYmplY3QoZmV0Y2hPcHRpb25zLmJvZHkpIDogSlNPTi5wYXJzZShmZXRjaE9wdGlvbnMuYm9keSk7CiAgICAgICAgICAgICAgICAgICAgaWYgKCFib2R5LnJlZnJlc2hfdG9rZW4gJiYgYm9keS5ncmFudF90eXBlID09PSAicmVmcmVzaF90b2tlbiIpIHsKICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuID0gZ2V0UmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTWlzc2luZ1JlZnJlc2hUb2tlbkVycm9yKGF1ZGllbmNlLCBzY29wZSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSB1c2VGb3JtRGF0YSA/IG5ldyBVUkxTZWFyY2hQYXJhbXMoX19hc3NpZ24oX19hc3NpZ24oe30sIGJvZHkpLCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4KICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRvU3RyaW5nKCkgOiBKU09OLnN0cmluZ2lmeShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYm9keSksIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbgogICAgICAgICAgICAgICAgICAgICAgICB9KSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlciA9IHZvaWQgMDsKICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gImZ1bmN0aW9uIikgewogICAgICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyOwogICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB2b2lkIDA7CiAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyOwoKICAgICAgICAgICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICAgICAgICAgIF9lLnRyeXMucHVzaChbIDIsIDQsICwgNSBdKTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyA0LCBQcm9taXNlLnJhY2UoWyB3YWl0KHRpbWVvdXQpLCBmZXRjaChmZXRjaFVybCwgX19hc3NpZ24oe30sIGZldGNoT3B0aW9ucykpIF0pIF07CgogICAgICAgICAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfZS5zZW50KCk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgMywgNSBdOwoKICAgICAgICAgICAgICAgICAgY2FzZSA0OgogICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfZS5zZW50KCk7CiAgICAgICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xLm1lc3NhZ2UKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAyIF07CgogICAgICAgICAgICAgICAgICBjYXNlIDU6CiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkgewogICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWJvcnRDb250cm9sbGVyKSBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTsKICAgICAgICAgICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogIlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyIKICAgICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbIDIgXTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgNCwgcmVzcG9uc2UuanNvbigpIF07CgogICAgICAgICAgICAgICAgICBjYXNlIDY6CiAgICAgICAgICAgICAgICAgICAganNvbiA9IF9lLnNlbnQoKTsKICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZnJlc2hUb2tlbihqc29uLnJlZnJlc2hfdG9rZW4sIGF1ZGllbmNlLCBzY29wZSk7CiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBqc29uLnJlZnJlc2hfdG9rZW47CiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgICAgICAgICBvazogcmVzcG9uc2Uub2ssCiAgICAgICAgICAgICAgICAgICAgICAgIGpzb246IGpzb24KICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAzLCA4IF07CgogICAgICAgICAgICAgICAgICBjYXNlIDc6CiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9lLnNlbnQoKTsKICAgICAgICAgICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgICAgICAgICAgb2s6IGZhbHNlLAogICAgICAgICAgICAgICAgICAgICAgICBqc29uOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbjogZXJyb3JfMi5tZXNzYWdlCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAzLCA4IF07CgogICAgICAgICAgICAgICAgICBjYXNlIDg6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgMiBdOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9KSk7CiAgICAgICAgfSkpOwogICAgfTsKICAgIHsKICAgICAgICBhZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbWVzc2FnZUhhbmRsZXIpOwogICAgfQp9KSgpOwoK", null, false);

var isIE11 = function() {
    return /Trident.*rv:11\.0/.test(navigator.userAgent);
};

var singlePromiseMap = {};

var singlePromise = function(cb, key) {
    var promise = singlePromiseMap[key];
    if (!promise) {
        promise = cb().finally((function() {
            delete singlePromiseMap[key];
            promise = null;
        }));
        singlePromiseMap[key] = promise;
    }
    return promise;
};

var retryPromise = function(cb, maxNumberOfRetries) {
    if (maxNumberOfRetries === void 0) {
        maxNumberOfRetries = 3;
    }
    return __awaiter(void 0, void 0, void 0, (function() {
        var i;
        return __generator(this, (function(_a) {
            switch (_a.label) {
              case 0:
                i = 0;
                _a.label = 1;

              case 1:
                if (!(i < maxNumberOfRetries)) return [ 3, 4 ];
                return [ 4, cb() ];

              case 2:
                if (_a.sent()) {
                    return [ 2, true ];
                }
                _a.label = 3;

              case 3:
                i++;
                return [ 3, 1 ];

              case 4:
                return [ 2, false ];
            }
        }));
    }));
};

var CacheKeyManifest = function() {
    function CacheKeyManifest(cache, clientId) {
        this.cache = cache;
        this.clientId = clientId;
        this.manifestKey = this.createManifestKeyFrom(this.clientId);
    }
    CacheKeyManifest.prototype.add = function(key) {
        var _a;
        return __awaiter(this, void 0, void 0, (function() {
            var keys, _b;
            return __generator(this, (function(_c) {
                switch (_c.label) {
                  case 0:
                    _b = Set.bind;
                    return [ 4, this.cache.get(this.manifestKey) ];

                  case 1:
                    keys = new (_b.apply(Set, [ void 0, ((_a = _c.sent()) === null || _a === void 0 ? void 0 : _a.keys) || [] ]));
                    keys.add(key);
                    return [ 4, this.cache.set(this.manifestKey, {
                        keys: __spreadArray([], __read(keys), false)
                    }) ];

                  case 2:
                    _c.sent();
                    return [ 2 ];
                }
            }));
        }));
    };
    CacheKeyManifest.prototype.remove = function(key) {
        return __awaiter(this, void 0, void 0, (function() {
            var entry, keys;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, this.cache.get(this.manifestKey) ];

                  case 1:
                    entry = _a.sent();
                    if (!entry) return [ 3, 5 ];
                    keys = new Set(entry.keys);
                    keys.delete(key);
                    if (!(keys.size > 0)) return [ 3, 3 ];
                    return [ 4, this.cache.set(this.manifestKey, {
                        keys: __spreadArray([], __read(keys), false)
                    }) ];

                  case 2:
                    return [ 2, _a.sent() ];

                  case 3:
                    return [ 4, this.cache.remove(this.manifestKey) ];

                  case 4:
                    return [ 2, _a.sent() ];

                  case 5:
                    return [ 2 ];
                }
            }));
        }));
    };
    CacheKeyManifest.prototype.get = function() {
        return this.cache.get(this.manifestKey);
    };
    CacheKeyManifest.prototype.clear = function() {
        return this.cache.remove(this.manifestKey);
    };
    CacheKeyManifest.prototype.createManifestKeyFrom = function(clientId) {
        return "".concat(CACHE_KEY_PREFIX, "::").concat(clientId);
    };
    return CacheKeyManifest;
}();

var lock = new Lock__default["default"];

var GET_TOKEN_SILENTLY_LOCK_KEY = "auth0.lock.getTokenSilently";

var buildOrganizationHintCookieName = function(clientId) {
    return "auth0.".concat(clientId, ".organization_hint");
};

var OLD_IS_AUTHENTICATED_COOKIE_NAME = "auth0.is.authenticated";

var buildIsAuthenticatedCookieName = function(clientId) {
    return "auth0.".concat(clientId, ".is.authenticated");
};

var cacheLocationBuilders = {
    memory: function() {
        return (new InMemoryCache).enclosedCache;
    },
    localstorage: function() {
        return new LocalStorageCache;
    }
};

var cacheFactory = function(location) {
    return cacheLocationBuilders[location];
};

var supportWebWorker = function() {
    return !isIE11();
};

var getTokenIssuer = function(issuer, domainUrl) {
    if (issuer) {
        return issuer.startsWith("https://") ? issuer : "https://".concat(issuer, "/");
    }
    return "".concat(domainUrl, "/");
};

var getDomain = function(domainUrl) {
    if (!/^https?:\/\//.test(domainUrl)) {
        return "https://".concat(domainUrl);
    }
    return domainUrl;
};

var getCustomInitialOptions = function(options) {
    options.advancedOptions;
    options.audience;
    options.auth0Client;
    options.authorizeTimeoutInSeconds;
    options.cacheLocation;
    options.cache;
    options.client_id;
    options.domain;
    options.issuer;
    options.leeway;
    options.max_age;
    options.nowProvider;
    options.redirect_uri;
    options.scope;
    options.useRefreshTokens;
    options.useRefreshTokensFallback;
    options.useCookiesForTransactions;
    options.useFormData;
    var customParams = __rest(options, [ "advancedOptions", "audience", "auth0Client", "authorizeTimeoutInSeconds", "cacheLocation", "cache", "client_id", "domain", "issuer", "leeway", "max_age", "nowProvider", "redirect_uri", "scope", "useRefreshTokens", "useRefreshTokensFallback", "useCookiesForTransactions", "useFormData" ]);
    return customParams;
};

var Auth0Client = function() {
    function Auth0Client(options) {
        var _this = this;
        var _a, _b;
        this.options = options;
        this._releaseLockOnPageHide = function() {
            return __awaiter(_this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY) ];

                      case 1:
                        _a.sent();
                        window.removeEventListener("pagehide", this._releaseLockOnPageHide);
                        return [ 2 ];
                    }
                }));
            }));
        };
        typeof window !== "undefined" && validateCrypto();
        if (options.cache && options.cacheLocation) {
            console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.");
        }
        var cache;
        if (options.cache) {
            cache = options.cache;
        } else {
            this.cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
            if (!cacheFactory(this.cacheLocation)) {
                throw new Error('Invalid cache location "'.concat(this.cacheLocation, '"'));
            }
            cache = cacheFactory(this.cacheLocation)();
        }
        this.httpTimeoutMs = options.httpTimeoutInSeconds ? options.httpTimeoutInSeconds * 1e3 : DEFAULT_FETCH_TIMEOUT_MS;
        this.cookieStorage = options.legacySameSiteCookie === false ? CookieStorage : CookieStorageWithLegacySameSite;
        this.orgHintCookieName = buildOrganizationHintCookieName(this.options.client_id);
        this.isAuthenticatedCookieName = buildIsAuthenticatedCookieName(this.options.client_id);
        this.sessionCheckExpiryDays = options.sessionCheckExpiryDays || DEFAULT_SESSION_CHECK_EXPIRY_DAYS;
        var transactionStorage = options.useCookiesForTransactions ? this.cookieStorage : SessionStorage;
        this.scope = this.options.scope;
        this.transactionManager = new TransactionManager(transactionStorage, this.options.client_id);
        this.nowProvider = this.options.nowProvider || DEFAULT_NOW_PROVIDER;
        this.cacheManager = new CacheManager(cache, !cache.allKeys ? new CacheKeyManifest(cache, this.options.client_id) : null, this.nowProvider);
        this.domainUrl = getDomain(this.options.domain);
        this.tokenIssuer = getTokenIssuer(this.options.issuer, this.domainUrl);
        this.defaultScope = getUniqueScopes("openid", ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedOptions) === null || _b === void 0 ? void 0 : _b.defaultScope) !== undefined ? this.options.advancedOptions.defaultScope : DEFAULT_SCOPE);
        if (this.options.useRefreshTokens) {
            this.scope = getUniqueScopes(this.scope, "offline_access");
        }
        if (typeof window !== "undefined" && window.Worker && this.options.useRefreshTokens && this.cacheLocation === CACHE_LOCATION_MEMORY && supportWebWorker()) {
            this.worker = new WorkerFactory;
        }
        this.customOptions = getCustomInitialOptions(options);
        this.useRefreshTokensFallback = this.options.useRefreshTokensFallback !== false;
    }
    Auth0Client.prototype._url = function(path) {
        var auth0Client = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || DEFAULT_AUTH0_CLIENT)));
        return "".concat(this.domainUrl).concat(path, "&auth0Client=").concat(auth0Client);
    };
    Auth0Client.prototype._getParams = function(authorizeOptions, state, nonce, code_challenge, redirect_uri) {
        var _a = this.options;
        _a.authorizePath;
        _a.tokenPath;
        _a.useRefreshTokens;
        _a.useCookiesForTransactions;
        _a.useFormData;
        _a.disableAuth0Client;
        _a.auth0Client;
        _a.cacheLocation;
        _a.advancedOptions;
        _a.detailedResponse;
        _a.nowProvider;
        _a.authorizeTimeoutInSeconds;
        _a.legacySameSiteCookie;
        _a.sessionCheckExpiryDays;
        _a.domain;
        _a.leeway;
        _a.httpTimeoutInSeconds;
        var loginOptions = __rest(_a, [ "authorizePath", "tokenPath", "useRefreshTokens", "useCookiesForTransactions", "useFormData", "disableAuth0Client", "auth0Client", "cacheLocation", "advancedOptions", "detailedResponse", "nowProvider", "authorizeTimeoutInSeconds", "legacySameSiteCookie", "sessionCheckExpiryDays", "domain", "leeway", "httpTimeoutInSeconds" ]);
        return __assign(__assign(__assign({}, loginOptions), authorizeOptions), {
            scope: getUniqueScopes(this.defaultScope, this.scope, authorizeOptions.scope),
            response_type: "code",
            response_mode: "query",
            state: state,
            nonce: nonce,
            redirect_uri: redirect_uri || this.options.redirect_uri,
            code_challenge: code_challenge,
            code_challenge_method: "S256"
        });
    };
    Auth0Client.prototype._authorizeUrl = function(authorizeOptions, authorizePath) {
        return this._url("/".concat(authorizePath, "?").concat(createQueryParams(authorizeOptions)));
    };
    Auth0Client.prototype._verifyIdToken = function(id_token, nonce, organizationId) {
        return __awaiter(this, void 0, void 0, (function() {
            var now;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, this.nowProvider() ];

                  case 1:
                    now = _a.sent();
                    return [ 2, verify({
                        iss: this.tokenIssuer,
                        aud: this.options.client_id,
                        id_token: id_token,
                        nonce: nonce,
                        organizationId: organizationId,
                        leeway: this.options.leeway,
                        max_age: this._parseNumber(this.options.max_age),
                        now: now
                    }) ];
                }
            }));
        }));
    };
    Auth0Client.prototype._parseNumber = function(value) {
        if (typeof value !== "string") {
            return value;
        }
        return parseInt(value, 10) || undefined;
    };
    Auth0Client.prototype._processOrgIdHint = function(organizationId) {
        if (organizationId) {
            this.cookieStorage.save(this.orgHintCookieName, organizationId, {
                daysUntilExpire: this.sessionCheckExpiryDays,
                cookieDomain: this.options.cookieDomain
            });
        } else {
            this.cookieStorage.remove(this.orgHintCookieName, {
                cookieDomain: this.options.cookieDomain
            });
        }
    };
    Auth0Client.prototype.buildAuthorizeUrl = function(options) {
        if (options === void 0) {
            options = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var _a, authorizePath, redirect_uri, appState, authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, fragment, params, url, organizationId;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    _a = options.authorizePath, authorizePath = _a === void 0 ? this.options.authorizePath || DEFAULT_AUTHORIZE_PATH : _a, 
                    redirect_uri = options.redirect_uri, appState = options.appState, authorizeOptions = __rest(options, [ "authorizePath", "redirect_uri", "appState" ]);
                    stateIn = encode(createRandomString());
                    nonceIn = encode(createRandomString());
                    code_verifier = createRandomString();
                    return [ 4, sha256(code_verifier) ];

                  case 1:
                    code_challengeBuffer = _b.sent();
                    code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                    fragment = options.fragment ? "#".concat(options.fragment) : "";
                    params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, redirect_uri);
                    url = this._authorizeUrl(params, authorizePath);
                    organizationId = options.organization || this.options.organization;
                    this.transactionManager.create(__assign({
                        nonce: nonceIn,
                        code_verifier: code_verifier,
                        appState: appState,
                        scope: params.scope,
                        audience: params.audience || "default",
                        redirect_uri: params.redirect_uri,
                        state: stateIn
                    }, organizationId && {
                        organizationId: organizationId
                    }));
                    return [ 2, url + fragment ];
                }
            }));
        }));
    };
    Auth0Client.prototype.loginWithPopup = function(options, config) {
        return __awaiter(this, void 0, void 0, (function() {
            var _a, authorizePath, _b, tokenPath, _c, disableAuth0Client, authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, codeResult, authResult, organizationId, decodedToken, cacheEntry;
            return __generator(this, (function(_d) {
                switch (_d.label) {
                  case 0:
                    options = options || {};
                    config = config || {};
                    if (!config.popup) {
                        config.popup = openPopup("");
                        if (!config.popup) {
                            throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
                        }
                    }
                    _a = options.authorizePath, authorizePath = _a === void 0 ? this.options.authorizePath || DEFAULT_AUTHORIZE_PATH : _a, 
                    _b = options.tokenPath, tokenPath = _b === void 0 ? this.options.tokenPath || DEFAULT_TOKEN_PATH : _b, 
                    _c = options.disableAuth0Client, disableAuth0Client = _c === void 0 ? this.options.disableAuth0Client : _c, 
                    authorizeOptions = __rest(options, [ "authorizePath", "tokenPath", "disableAuth0Client" ]);
                    console.log("loginWithPopup, disableAuth0Client: ", disableAuth0Client);
                    stateIn = encode(createRandomString());
                    nonceIn = encode(createRandomString());
                    code_verifier = createRandomString();
                    return [ 4, sha256(code_verifier) ];

                  case 1:
                    code_challengeBuffer = _d.sent();
                    code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                    params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, this.options.redirect_uri || window.location.origin);
                    url = this._authorizeUrl(__assign(__assign({}, params), {
                        response_mode: "web_message"
                    }), authorizePath);
                    config.popup.location.href = url;
                    return [ 4, runPopup(__assign(__assign({}, config), {
                        timeoutInSeconds: config.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
                    })) ];

                  case 2:
                    codeResult = _d.sent();
                    if (stateIn !== codeResult.state) {
                        throw new Error("Invalid state");
                    }
                    return [ 4, oauthToken({
                        audience: params.audience,
                        scope: params.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: code_verifier,
                        code: codeResult.code,
                        grant_type: "authorization_code",
                        redirect_uri: params.redirect_uri,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        disableAuth0Client: disableAuth0Client,
                        timeout: this.httpTimeoutMs,
                        tokenPath: tokenPath
                    }, this.worker) ];

                  case 3:
                    authResult = _d.sent();
                    organizationId = options.organization || this.options.organization;
                    return [ 4, this._verifyIdToken(authResult.id_token, nonceIn, organizationId) ];

                  case 4:
                    decodedToken = _d.sent();
                    cacheEntry = __assign(__assign({}, authResult), {
                        decodedToken: decodedToken,
                        scope: params.scope,
                        audience: params.audience || "default",
                        client_id: this.options.client_id
                    });
                    return [ 4, this.cacheManager.set(cacheEntry) ];

                  case 5:
                    _d.sent();
                    this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain
                    });
                    this._processOrgIdHint(decodedToken.claims.org_id);
                    return [ 2 ];
                }
            }));
        }));
    };
    Auth0Client.prototype.getUser = function(options) {
        if (options === void 0) {
            options = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var audience, scope, cache;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    audience = options.audience || this.options.audience || "default";
                    scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                    return [ 4, this.cacheManager.get(new CacheKey({
                        client_id: this.options.client_id,
                        audience: audience,
                        scope: scope
                    })) ];

                  case 1:
                    cache = _a.sent();
                    return [ 2, cache && cache.decodedToken && cache.decodedToken.user ];
                }
            }));
        }));
    };
    Auth0Client.prototype.getIdTokenClaims = function(options) {
        if (options === void 0) {
            options = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var audience, scope, cache;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    audience = options.audience || this.options.audience || "default";
                    scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                    return [ 4, this.cacheManager.get(new CacheKey({
                        client_id: this.options.client_id,
                        audience: audience,
                        scope: scope
                    })) ];

                  case 1:
                    cache = _a.sent();
                    return [ 2, cache && cache.decodedToken && cache.decodedToken.claims ];
                }
            }));
        }));
    };
    Auth0Client.prototype.loginWithRedirect = function(options) {
        if (options === void 0) {
            options = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var redirectMethod, urlOptions, url;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    redirectMethod = options.redirectMethod, urlOptions = __rest(options, [ "redirectMethod" ]);
                    return [ 4, this.buildAuthorizeUrl(urlOptions) ];

                  case 1:
                    url = _a.sent();
                    window.location[redirectMethod || "assign"](url);
                    return [ 2 ];
                }
            }));
        }));
    };
    Auth0Client.prototype.handleRedirectCallback = function(url) {
        if (url === void 0) {
            url = window.location.href;
        }
        return __awaiter(this, void 0, void 0, (function() {
            var queryStringFragments, _a, state, code, error, error_description, transaction, tokenPath, tokenOptions, authResult, decodedToken;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    queryStringFragments = url.split("?").slice(1);
                    console.log("handleRedirectCallback, queryStringFragments:", queryStringFragments);
                    if (queryStringFragments.length === 0) {
                        throw new Error("There are no query params available for parsing.");
                    }
                    _a = parseQueryResult(queryStringFragments.join("")), state = _a.state, code = _a.code, 
                    error = _a.error, error_description = _a.error_description;
                    console.log("handleRedirectCallback, state:", state);
                    console.log("handleRedirectCallback, code:", code);
                    console.log("handleRedirectCallback, error:", error);
                    console.log("handleRedirectCallback, error_description:", error_description);
                    transaction = this.transactionManager.get();
                    if (!transaction) {
                        throw new Error("Invalid state");
                    }
                    this.transactionManager.remove();
                    if (error) {
                        throw new AuthenticationError(error, error_description, state, transaction.appState);
                    }
                    if (!transaction.code_verifier || transaction.state && transaction.state !== state) {
                        throw new Error("Invalid state");
                    }
                    tokenPath = this.options.tokenPath || DEFAULT_TOKEN_PATH;
                    console.log("handleRedirectCallback, disableAuth0Client:", this.options.disableAuth0Client);
                    tokenOptions = {
                        audience: transaction.audience,
                        scope: transaction.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: transaction.code_verifier,
                        grant_type: "authorization_code",
                        code: code,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        disableAuth0Client: this.options.disableAuth0Client,
                        timeout: this.httpTimeoutMs,
                        tokenPath: tokenPath
                    };
                    if (undefined !== transaction.redirect_uri) {
                        tokenOptions.redirect_uri = transaction.redirect_uri;
                    }
                    return [ 4, oauthToken(tokenOptions, this.worker) ];

                  case 1:
                    authResult = _b.sent();
                    console.log("handleRedirectCallback, authResult:", authResult);
                    return [ 4, this._verifyIdToken(authResult.id_token, transaction.nonce, transaction.organizationId) ];

                  case 2:
                    decodedToken = _b.sent();
                    console.log("handleRedirectCallback, decodedToken:", decodedToken);
                    return [ 4, this.cacheManager.set(__assign(__assign(__assign(__assign({}, authResult), {
                        decodedToken: decodedToken,
                        audience: transaction.audience,
                        scope: transaction.scope
                    }), authResult.scope ? {
                        oauthTokenScope: authResult.scope
                    } : null), {
                        client_id: this.options.client_id
                    })) ];

                  case 3:
                    _b.sent();
                    this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain
                    });
                    this._processOrgIdHint(decodedToken.claims.org_id);
                    return [ 2, {
                        appState: transaction.appState
                    } ];
                }
            }));
        }));
    };
    Auth0Client.prototype.checkSession = function(options) {
        return __awaiter(this, void 0, void 0, (function() {
            var error_1;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    console.log("Auth0Client, checkSession, options:", options);
                    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                        if (!this.cookieStorage.get(OLD_IS_AUTHENTICATED_COOKIE_NAME)) {
                            return [ 2 ];
                        } else {
                            this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                                daysUntilExpire: this.sessionCheckExpiryDays,
                                cookieDomain: this.options.cookieDomain
                            });
                            this.cookieStorage.remove(OLD_IS_AUTHENTICATED_COOKIE_NAME);
                        }
                    }
                    _a.label = 1;

                  case 1:
                    _a.trys.push([ 1, 3, , 4 ]);
                    return [ 4, this.getTokenSilently(options) ];

                  case 2:
                    _a.sent();
                    return [ 3, 4 ];

                  case 3:
                    error_1 = _a.sent();
                    if (!RECOVERABLE_ERRORS.includes(error_1.error)) {
                        throw error_1;
                    }
                    return [ 3, 4 ];

                  case 4:
                    return [ 2 ];
                }
            }));
        }));
    };
    Auth0Client.prototype.getTokenSilently = function(options) {
        if (options === void 0) {
            options = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var _a, ignoreCache, getTokenOptions, result;
            var _this = this;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    _a = __assign(__assign({
                        audience: this.options.audience,
                        ignoreCache: false
                    }, options), {
                        scope: getUniqueScopes(this.defaultScope, this.scope, options.scope)
                    }), ignoreCache = _a.ignoreCache, getTokenOptions = __rest(_a, [ "ignoreCache" ]);
                    console.log("Auth0Client, getTokenSilently, ignoreCache:", ignoreCache);
                    console.log("Auth0Client, getTokenSilently, options:", getTokenOptions);
                    return [ 4, singlePromise((function() {
                        return _this._getTokenSilently(__assign({
                            ignoreCache: ignoreCache
                        }, getTokenOptions));
                    }), "".concat(this.options.client_id, "::").concat(getTokenOptions.audience, "::").concat(getTokenOptions.scope)) ];

                  case 1:
                    result = _b.sent();
                    return [ 2, options.detailedResponse ? result : result.access_token ];
                }
            }));
        }));
    };
    Auth0Client.prototype._getTokenSilently = function(options) {
        if (options === void 0) {
            options = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var ignoreCache, getTokenOptions, entry, entry, authResult, _a, id_token, access_token, oauthTokenScope, expires_in;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    ignoreCache = options.ignoreCache, getTokenOptions = __rest(options, [ "ignoreCache" ]);
                    console.log("Auth0Client, _getTokenSilently, ignoreCache:", ignoreCache);
                    console.log("Auth0Client, _getTokenSilently, getTokenOptions:", getTokenOptions);
                    if (!!ignoreCache) return [ 3, 2 ];
                    return [ 4, this._getEntryFromCache({
                        scope: getTokenOptions.scope,
                        audience: getTokenOptions.audience || "default",
                        client_id: this.options.client_id
                    }) ];

                  case 1:
                    entry = _b.sent();
                    if (entry) {
                        return [ 2, entry ];
                    }
                    _b.label = 2;

                  case 2:
                    return [ 4, retryPromise((function() {
                        return lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5e3);
                    }), 10) ];

                  case 3:
                    if (!_b.sent()) return [ 3, 15 ];
                    _b.label = 4;

                  case 4:
                    _b.trys.push([ 4, , 12, 14 ]);
                    window.addEventListener("pagehide", this._releaseLockOnPageHide);
                    if (!!ignoreCache) return [ 3, 6 ];
                    return [ 4, this._getEntryFromCache({
                        scope: getTokenOptions.scope,
                        audience: getTokenOptions.audience || "default",
                        client_id: this.options.client_id
                    }) ];

                  case 5:
                    entry = _b.sent();
                    if (entry) {
                        return [ 2, entry ];
                    }
                    _b.label = 6;

                  case 6:
                    if (!this.options.useRefreshTokens) return [ 3, 8 ];
                    return [ 4, this._getTokenUsingRefreshToken(getTokenOptions) ];

                  case 7:
                    _a = _b.sent();
                    return [ 3, 10 ];

                  case 8:
                    return [ 4, this._getTokenFromIFrame(getTokenOptions) ];

                  case 9:
                    _a = _b.sent();
                    _b.label = 10;

                  case 10:
                    authResult = _a;
                    return [ 4, this.cacheManager.set(__assign({
                        client_id: this.options.client_id
                    }, authResult)) ];

                  case 11:
                    _b.sent();
                    this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain
                    });
                    id_token = authResult.id_token, access_token = authResult.access_token, oauthTokenScope = authResult.oauthTokenScope, 
                    expires_in = authResult.expires_in;
                    return [ 2, __assign(__assign({
                        id_token: id_token,
                        access_token: access_token
                    }, oauthTokenScope ? {
                        scope: oauthTokenScope
                    } : null), {
                        expires_in: expires_in
                    }) ];

                  case 12:
                    return [ 4, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY) ];

                  case 13:
                    _b.sent();
                    window.removeEventListener("pagehide", this._releaseLockOnPageHide);
                    return [ 7 ];

                  case 14:
                    return [ 3, 16 ];

                  case 15:
                    throw new TimeoutError;

                  case 16:
                    return [ 2 ];
                }
            }));
        }));
    };
    Auth0Client.prototype.getTokenWithPopup = function(options, config) {
        if (options === void 0) {
            options = {};
        }
        if (config === void 0) {
            config = {};
        }
        return __awaiter(this, void 0, void 0, (function() {
            var cache;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    options.audience = options.audience || this.options.audience;
                    options.scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                    config = __assign(__assign({}, DEFAULT_POPUP_CONFIG_OPTIONS), config);
                    return [ 4, this.loginWithPopup(options, config) ];

                  case 1:
                    _a.sent();
                    return [ 4, this.cacheManager.get(new CacheKey({
                        scope: options.scope,
                        audience: options.audience || "default",
                        client_id: this.options.client_id
                    })) ];

                  case 2:
                    cache = _a.sent();
                    return [ 2, cache.access_token ];
                }
            }));
        }));
    };
    Auth0Client.prototype.isAuthenticated = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var user;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    return [ 4, this.getUser() ];

                  case 1:
                    user = _a.sent();
                    return [ 2, !!user ];
                }
            }));
        }));
    };
    Auth0Client.prototype.buildLogoutUrl = function(options) {
        if (options === void 0) {
            options = {};
        }
        if (options.client_id !== null) {
            options.client_id = options.client_id || this.options.client_id;
        } else {
            delete options.client_id;
        }
        var federated = options.federated, logoutOptions = __rest(options, [ "federated" ]);
        var federatedQuery = federated ? "&federated" : "";
        var url = this._url("/v2/logout?".concat(createQueryParams(logoutOptions)));
        return url + federatedQuery;
    };
    Auth0Client.prototype.logout = function(options) {
        var _this = this;
        if (options === void 0) {
            options = {};
        }
        var localOnly = options.localOnly, logoutOptions = __rest(options, [ "localOnly" ]);
        if (localOnly && logoutOptions.federated) {
            throw new Error("It is invalid to set both the `federated` and `localOnly` options to `true`");
        }
        var postCacheClear = function() {
            _this.cookieStorage.remove(_this.orgHintCookieName, {
                cookieDomain: _this.options.cookieDomain
            });
            _this.cookieStorage.remove(_this.isAuthenticatedCookieName, {
                cookieDomain: _this.options.cookieDomain
            });
            if (localOnly) {
                return;
            }
            var url = _this.buildLogoutUrl(logoutOptions);
            window.location.assign(url);
        };
        if (this.options.cache) {
            return this.cacheManager.clear().then((function() {
                return postCacheClear();
            }));
        } else {
            this.cacheManager.clearSync();
            postCacheClear();
        }
    };
    Auth0Client.prototype._getTokenFromIFrame = function(options) {
        return __awaiter(this, void 0, void 0, (function() {
            var stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, _a, authorizePath, _b, tokenPath, _c, disableAuth0Client, withoutClientOptions, params, orgIdHint, url, authorizeTimeout, codeResult, scope, audience, customOptions, tokenResult, decodedToken, e_1;
            return __generator(this, (function(_d) {
                switch (_d.label) {
                  case 0:
                    stateIn = encode(createRandomString());
                    nonceIn = encode(createRandomString());
                    code_verifier = createRandomString();
                    return [ 4, sha256(code_verifier) ];

                  case 1:
                    code_challengeBuffer = _d.sent();
                    code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                    _a = options.authorizePath, authorizePath = _a === void 0 ? this.options.authorizePath || DEFAULT_AUTHORIZE_PATH : _a, 
                    _b = options.tokenPath, tokenPath = _b === void 0 ? this.options.tokenPath || DEFAULT_TOKEN_PATH : _b, 
                    _c = options.disableAuth0Client, disableAuth0Client = _c === void 0 ? this.options.disableAuth0Client : _c, 
                    withoutClientOptions = __rest(options, [ "authorizePath", "tokenPath", "disableAuth0Client", "detailedResponse" ]);
                    console.log("_getTokenFromIFrame, disableAuth0Client: ", disableAuth0Client);
                    params = this._getParams(withoutClientOptions, stateIn, nonceIn, code_challenge, options.redirect_uri || this.options.redirect_uri || window.location.origin);
                    orgIdHint = this.cookieStorage.get(this.orgHintCookieName);
                    if (orgIdHint && !params.organization) {
                        params.organization = orgIdHint;
                    }
                    url = this._authorizeUrl(__assign(__assign({}, params), {
                        prompt: "none",
                        response_mode: "web_message"
                    }), authorizePath);
                    _d.label = 2;

                  case 2:
                    _d.trys.push([ 2, 6, , 7 ]);
                    if (window.crossOriginIsolated) {
                        throw new GenericError("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
                    }
                    authorizeTimeout = options.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
                    return [ 4, runIframe(url, this.domainUrl, authorizeTimeout) ];

                  case 3:
                    codeResult = _d.sent();
                    if (stateIn !== codeResult.state) {
                        throw new Error("Invalid state");
                    }
                    scope = options.scope, audience = options.audience, customOptions = __rest(options, [ "scope", "audience", "redirect_uri", "ignoreCache", "timeoutInSeconds", "detailedResponse" ]);
                    return [ 4, oauthToken(__assign(__assign(__assign({}, this.customOptions), customOptions), {
                        scope: scope,
                        audience: audience,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: code_verifier,
                        code: codeResult.code,
                        grant_type: "authorization_code",
                        redirect_uri: params.redirect_uri,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        disableAuth0Client: disableAuth0Client,
                        timeout: customOptions.timeout || this.httpTimeoutMs,
                        tokenPath: tokenPath
                    }), this.worker) ];

                  case 4:
                    tokenResult = _d.sent();
                    return [ 4, this._verifyIdToken(tokenResult.id_token, nonceIn) ];

                  case 5:
                    decodedToken = _d.sent();
                    this._processOrgIdHint(decodedToken.claims.org_id);
                    return [ 2, __assign(__assign({}, tokenResult), {
                        decodedToken: decodedToken,
                        scope: params.scope,
                        oauthTokenScope: tokenResult.scope,
                        audience: params.audience || "default"
                    }) ];

                  case 6:
                    e_1 = _d.sent();
                    if (e_1.error === "login_required") {
                        this.logout({
                            localOnly: true
                        });
                    }
                    throw e_1;

                  case 7:
                    return [ 2 ];
                }
            }));
        }));
    };
    Auth0Client.prototype._getTokenUsingRefreshToken = function(options) {
        return __awaiter(this, void 0, void 0, (function() {
            var cache, redirect_uri, tokenResult, scope, audience, _a, disableAuth0Client, customOptions, timeout, e_2, decodedToken;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    options.scope = getUniqueScopes(this.defaultScope, this.options.scope, options.scope);
                    return [ 4, this.cacheManager.get(new CacheKey({
                        scope: options.scope,
                        audience: options.audience || "default",
                        client_id: this.options.client_id
                    })) ];

                  case 1:
                    cache = _b.sent();
                    if (!((!cache || !cache.refresh_token) && !this.worker)) return [ 3, 4 ];
                    if (!this.useRefreshTokensFallback) return [ 3, 3 ];
                    return [ 4, this._getTokenFromIFrame(options) ];

                  case 2:
                    return [ 2, _b.sent() ];

                  case 3:
                    throw new MissingRefreshTokenError(options.audience || "default", options.scope);

                  case 4:
                    redirect_uri = options.redirect_uri || this.options.redirect_uri || window.location.origin;
                    scope = options.scope, audience = options.audience, _a = options.disableAuth0Client, 
                    disableAuth0Client = _a === void 0 ? this.options.disableAuth0Client : _a, customOptions = __rest(options, [ "scope", "audience", "ignoreCache", "timeoutInSeconds", "detailedResponse", "disableAuth0Client" ]);
                    console.log("_getTokenUsingRefreshToken, disableAuth0Client: ", disableAuth0Client);
                    timeout = typeof options.timeoutInSeconds === "number" ? options.timeoutInSeconds * 1e3 : null;
                    _b.label = 5;

                  case 5:
                    _b.trys.push([ 5, 7, , 10 ]);
                    return [ 4, oauthToken(__assign(__assign(__assign(__assign(__assign({}, this.customOptions), customOptions), {
                        audience: audience,
                        scope: scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        grant_type: "refresh_token",
                        refresh_token: cache && cache.refresh_token,
                        redirect_uri: redirect_uri
                    }), timeout && {
                        timeout: timeout
                    }), {
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        disableAuth0Client: disableAuth0Client,
                        timeout: this.httpTimeoutMs
                    }), this.worker) ];

                  case 6:
                    tokenResult = _b.sent();
                    return [ 3, 10 ];

                  case 7:
                    e_2 = _b.sent();
                    if (!((e_2.message.indexOf(MISSING_REFRESH_TOKEN_ERROR_MESSAGE) > -1 || e_2.message && e_2.message.indexOf(INVALID_REFRESH_TOKEN_ERROR_MESSAGE) > -1) && this.useRefreshTokensFallback)) return [ 3, 9 ];
                    return [ 4, this._getTokenFromIFrame(options) ];

                  case 8:
                    return [ 2, _b.sent() ];

                  case 9:
                    throw e_2;

                  case 10:
                    return [ 4, this._verifyIdToken(tokenResult.id_token) ];

                  case 11:
                    decodedToken = _b.sent();
                    return [ 2, __assign(__assign({}, tokenResult), {
                        decodedToken: decodedToken,
                        scope: options.scope,
                        oauthTokenScope: tokenResult.scope,
                        audience: options.audience || "default"
                    }) ];
                }
            }));
        }));
    };
    Auth0Client.prototype._getEntryFromCache = function(_a) {
        var scope = _a.scope, audience = _a.audience, client_id = _a.client_id;
        return __awaiter(this, void 0, void 0, (function() {
            var entry, id_token, access_token, oauthTokenScope, expires_in;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, this.cacheManager.get(new CacheKey({
                        scope: scope,
                        audience: audience,
                        client_id: client_id
                    }), 60) ];

                  case 1:
                    entry = _b.sent();
                    if (entry && entry.access_token) {
                        id_token = entry.id_token, access_token = entry.access_token, oauthTokenScope = entry.oauthTokenScope, 
                        expires_in = entry.expires_in;
                        return [ 2, __assign(__assign({
                            id_token: id_token,
                            access_token: access_token
                        }, oauthTokenScope ? {
                            scope: oauthTokenScope
                        } : null), {
                            expires_in: expires_in
                        }) ];
                    }
                    return [ 2 ];
                }
            }));
        }));
    };
    return Auth0Client;
}();

function createAuth0Client(options) {
    return __awaiter(this, void 0, void 0, (function() {
        var auth0;
        return __generator(this, (function(_a) {
            switch (_a.label) {
              case 0:
                auth0 = new Auth0Client(options);
                return [ 4, auth0.checkSession() ];

              case 1:
                _a.sent();
                return [ 2, auth0 ];
            }
        }));
    }));
}

var wrapper = createAuth0Client;

wrapper.Auth0Client = Auth0Client;

wrapper.createAuth0Client = createAuth0Client;

wrapper.GenericError = GenericError;

wrapper.AuthenticationError = AuthenticationError;

wrapper.TimeoutError = TimeoutError;

wrapper.PopupTimeoutError = PopupTimeoutError;

wrapper.MfaRequiredError = MfaRequiredError;

module.exports = wrapper;
//# sourceMappingURL=auth0-spa-js.cjs.js.map
