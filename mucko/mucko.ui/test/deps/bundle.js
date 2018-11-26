require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// mucko Base.js


function get_base() {
    var coreio = require("./coreio.js")
    var strings = require("./strings.js")
    var ranges = require("./range.js")
    var floats = require("./float.js")
    var abstractarrays = require("./abstractarray.js")
    var abstractdicts = require("./abstractdict.js")
    var arrays = require("./array.js")
    var parsing = require("./parse.js")
    var Base = {
        // -- coreio
        println: coreio.println,           // JL Base.println
        IOBuffer: coreio.IOBuffer,         // JL Base.IOBuffer
        seekstart: coreio.seekstart,       // JL Base.seekstart
        read: coreio.read,                 // JL Base.read
        stdout: coreio.stdout,             // JL Base.stdout

        // -- strings
        string: strings.string,            // JL Base.string
        split: strings.split,              // JL Base.split
        join: strings.join,                // JL Base.join
        repr: strings.repr,                // JL Base.repr

        // -- range
        range: ranges.range,               // JL Base.range

        // -- float
        Inf: floats.Inf,                   // JL Base.Inf
        round: floats.round,               // JL Base.round

        // -- abstractarray
        isempty: abstractarrays.isempty,   // JL Base.isempty
        getindex: abstractarrays.getindex, // JL Base.getindex
        first: abstractarrays.first,       // JL Base.first

        // -- abstractdict
        mergeI: abstractdicts.mergeI,      // JL Base.merge!

        // -- array
        pushI: arrays.pushI,               // JL Base.push!
        pushfirstI: arrays.pushfirstI,     // JL Base.pushfirst!
        spliceI: arrays.spliceI,           // JL Base.splice!
        map: arrays.map,                   // JL Base.map

        // -- parse
        parse: parsing.parse,              // JL Base.parse
    }
    var Core = require("./Core.js")
    var Meta = require("./Meta.js")
    var Sys = require("./Sys.js")
    Base.mergeI(Base, Core)
    Base.Core = Core
    Base.Meta = Meta
    Base.Sys = Sys
    return Base
}


module.exports = get_base()

},{"./Core.js":2,"./Meta.js":3,"./Sys.js":4,"./abstractarray.js":6,"./abstractdict.js":7,"./array.js":8,"./coreio.js":10,"./float.js":11,"./parse.js":13,"./range.js":14,"./strings.js":15}],2:[function(require,module,exports){
// mucko Core.js

function get_core() {
    var boot = require("./boot.js")
    var strings = require("./strings.js")
    var metas = require("./metas.js")
    var Core = {
        // -- boot
        DataType: boot.DataType,           // JL Core.DataType
        Undefined: boot.Undefined,         // Core.Undefined
        Null: boot.Null,                   // Core.Null
        Nothing: boot.Nothing,             // JL Core.Nothing
        nothing: boot.nothing,             // JL Core.nothing
        Bool: boot.Bool,                   // JL Core.Bool
        Int: boot.Int,                     // JL Core.Int
        Float64: boot.Float64,             // JL Core.Float64
        Exception: boot.Exception,         // JL Core.Exception
        BoundsError: boot.BoundsError,     // JL Core.BoundsError

        // -- strings
        String: strings.String,            // JL Core.String

        // -- metas
        isa: metas.isa,                    // JL Core.isa
        typeof: metas.typeof,              // JL Core.typeof
    }
    return Core
}


module.exports = get_core()

},{"./boot.js":9,"./metas.js":12,"./strings.js":15}],3:[function(require,module,exports){
// mucko Meta.js

function get_meta() {
    var metas = require("./metas.js")
    var Meta = {
    isundef: metas.isundef, 
    body: metas.body,
    }
    var abstractdicts = require("./abstractdict.js")
    var Core = require("./Core.js")
    abstractdicts.mergeI(Meta, Core)
    return Meta
}


module.exports = get_meta()

},{"./Core.js":2,"./abstractdict.js":7,"./metas.js":12}],4:[function(require,module,exports){
// mucko Sys.js

function get_sys() {
    Sys = {
        // Sys.isbrowser
        isbrowser: function() {
            return typeof window !== "undefined"
        },
    }
    return Sys
}


module.exports = get_sys()

},{}],5:[function(require,module,exports){
(function (process){
// mucko UnitTest.js

Test = {}
DOT = "."
LF = "\n"

function print(str) {
  if ('undefined' == typeof(window)) {
    process.stdout.write(str)
  } else {
    document.getElementById('stdout').innerHTML += str
  }
}
function puts(str) {
  print(str + LF)
}

function inspect(value) {
  if ('function' == typeof(value)) {
    return value.toString()
  } else {
    return JSON.stringify(value)
  }
}

function deep_equal(a,b) {
  if (a == b) {
    return true
  } else if ('object' == typeof(a) && 'object' == typeof(b)) {
    return inspect(a) == inspect(b)
  } else {
    return false
  }
}

assert_equal = function(expected, got) {
  _assert_equal(expected, got, deep_equal(expected, got))
}

var _assert_equal = function(expected, got, is_true) {
  if (is_true) {
    UnitTest.passed += 1
    if (UnitTest.dot_if_passed) {
      print(DOT)
    } else {
      puts('passed: ' + inspect(expected))
    }
  } else {
    puts('\nAssertion failed in ' +
         extract_filename_line_from_stack_trace())
    puts('Expected: ' + inspect(expected))
    puts('Got: ' + inspect(got))
    UnitTest.failed += 1
  }
}

assert_true = function(expected) {
  _assert_true(expected)
}

test_throws = function(errmsg, f) {
    got_the_error = false
    try {
        f()
    } catch (err) {
        var boot = require("./boot.js")
        let Exception = boot.Exception
        if (err instanceof Exception) {
            if (errmsg.message !== undefined) {
                got_the_error = errmsg.message == err.message
            } else {
                got_the_error = true
            }
        } else if (err.prototype instanceof Exception) {
            got_the_error = true
        } else {
        }
    }
    if (!got_the_error) {
        puts('\nAssertion failed in ' + f)
        puts('Expected: ' + errmsg)
        UnitTest.failed += 1
    }
}

var _assert_true = function(is_true) {
  if (is_true == true) {
    UnitTest.passed += 1
    if (UnitTest.dot_if_passed) {
      print(DOT)
    } else {
      puts('passed: ' + true)
    }
  } else {
    puts('\nAssertion failed in ' +
         extract_filename_line_from_stack_trace())
    puts('Expected: ' + true)
    puts('Got: ' + is_true)
    UnitTest.failed += 1
  }
}

var extract_filename_line_from_stack_trace = function() {
  if ('undefined' == typeof(window)) {
    Error.captureStackTrace(Test,
      extract_filename_line_from_stack_trace)
    var line = Test.stack.split(LF).slice(3,4).toString()
    return line.match(/\(.*\/(.*):\d+:*\)/)[1]
  } else {
    return arguments.callee.caller.caller.caller
  }
}


UnitTest = {
  dot_if_passed: true,
  tests: 0,
  passed: 0,
  failed: 0,
  errors: 0,

  run: function(test_target) {
    var startedAt = new Date()
    puts('Started')
    for (var test_name in test_target) {
      if (test_name.match(/^test_/)) {
        this.tests += 1
        test_target[test_name]()
      }
    }
    var finishedAt = new Date()
    var elapsed = (finishedAt - startedAt) / 1000
    puts('\nFinished in ' + elapsed + ' seconds.')
    this.report()
  },

  report: function() {
    puts(this.tests + ' tests, ' +
         this.passed + ' assertions, ' +
         this.failed + ' failures, ' +
         this.errors + ' errors')
  },
}


module.exports = {
    UnitTest,
    Test,
}

}).call(this,require('_process'))
},{"./boot.js":9,"_process":22}],6:[function(require,module,exports){
// mucko Base abstractarray.js

var boot = require("./boot.js")
var strings = require("./strings.js")


function isempty(A) {
    return A.length == 0
}

function getindex(A, I) {
    let BoundsError = boot.BoundsError
    let string = strings.string
    if (isempty(A)) {
        throw new BoundsError(string("BoundsError", ": attempt to access 0-element at index [", I, "]"))
    }
    return A[I-1]
}

function first(a) {
    return getindex(a, 1)
}


module.exports = {
    isempty,
    getindex,
    first,
}

},{"./boot.js":9,"./strings.js":15}],7:[function(require,module,exports){
// mucko base/abstractdict.js


function mergeI(d, others) {
    Object.keys(others).forEach(function(key) {
        d[key] = others[key]
    })
    return d
}


module.exports = {
    mergeI: mergeI,
}

},{}],8:[function(require,module,exports){
// mucko Base array.js

function get_arrays() {
    var metas = require("./metas.js")
    arrays = {
    pushI: function (a, item) {
        a.push(item)
    },
    
    pushfirstI: function (a, item) {
        a.unshift(item)
    },
    
    spliceI: function (a, i, replacement=[]) {
        if (metas.typeof(replacement) === Array) {
           return Array.prototype.splice.apply(a, [i, 1].concat(replacement))
        } else {
           return a.splice(i, 1, replacement)
        }
    },
    
    map: function (f, a) {
        return a.map(f)
    },
    }

    return arrays
}


module.exports = get_arrays()

},{"./metas.js":12}],9:[function(require,module,exports){
// mucko Base boot.js

class DataType {
}

class Undefined {
}

class Null {
}

class Nothing {
}

function Int() {
}

function Float64() {
}

class Exception extends Error {

}

class BoundsError extends Exception {
}


module.exports = {
    DataType,
    Undefined,
    Null,
    Nothing,
    nothing: new Nothing(),
    Bool: Boolean,
    Int,
    Float64,
    Exception,
    BoundsError,
}

},{}],10:[function(require,module,exports){
// mucko base/coreio.js

var strings = require("./strings.js")
var metas = require("./metas.js")


function IOBuffer() {
    this.data = new Uint8Array([])
    this.ptr = 0
}
IOBuffer.prototype.constructor = IOBuffer

function TTY() {
}

function println(io, ...args) {
    if (metas.isa(io, IOBuffer)) {
        function concatBuffer(a, b) {
            var tmp = new Uint8Array(a.byteLength + b.byteLength)
            tmp.set(new Uint8Array(a), 0)
            tmp.set(new Uint8Array(b), a.byteLength)
            return tmp.buffer
        }
        arr = new TextEncoder().encode(strings.string(args, '\n'))
        io.data = concatBuffer(io.data, arr)
        io.ptr += arr.length
    } else {
        console.log.apply(console, [io].concat(args))
    }
}

function seekstart(io) {
    io.ptr = 0
}

function read(io) {
    len = io.data.byteLength
    arr = io.data.slice(io.ptr, len)
    io.ptr = len
    return arr
}


module.exports = {
    println,
    IOBuffer,
    seekstart,
    read,
    stdout: new TTY(),
}

},{"./metas.js":12,"./strings.js":15}],11:[function(require,module,exports){
// mucko Base float.js

var boot = require("./boot.js")


Inf = Infinity

function round(typ, x) {
    let Int = boot.Int
    let Float64 = boot.Float64
    switch (typ) {
    case Int:
        return Math.round(x)
    }
}


module.exports = {
    Inf,
    round,
}

},{"./boot.js":9}],12:[function(require,module,exports){
// mucko metas.js

function get_metas() {
    var boot = require("./boot.js")
    metas = {

    isa: function (x, typ) {
        return this.typeof(x) === typ || x instanceof typ
    }, // isa

    typeof: function (x) {
        let DataType = boot.DataType
        let Undefined = boot.Undefined
        let Null = boot.Null

        let typ = typeof(x)
        switch (typ) {
        case "string": return String
        case "number": return Number
        case "boolean": return Boolean
        case "undefined": return Undefined
        default: break
        }

        switch (x) {
        case String: return DataType
        case Number: return DataType
        case Boolean: return DataType
        case Object: return DataType
        case Function: return DataType
        case Array: return DataType
        case Undefined: return DataType
        default: break
        }

        switch (typ) {
        case "function": return Function
        default: break
        }

        if ("object" === typ) {
        switch (x) {
        case null: return Null
        default: return x.constructor
        }
        } // if "object" === typ

        return typ
    }, // typeof

    isundef: function(x) {
        return x === undefined
    }, // isundef

    body: function (f) {
        if (this.typeof(f) === Function) {
            str = f.toString()
            return str.substring(str.indexOf('{')+1, str.lastIndexOf('}')).trim()
        } else {
            throw new boot.Exception("Not a Function")
        }
    }, // body

    }
    return metas
}


module.exports = get_metas()

},{"./boot.js":9}],13:[function(require,module,exports){
// mucko Base parse.js

var boot = require("./boot.js")


function parse(typ, str) {
    let Int = boot.Int
    let Float64 = boot.Float64
    switch (typ) {
    case Int:
        return parseInt(str)
    case Float64:
        return parseFloat(str)
    }
}


module.exports = {
    parse,
}

},{"./boot.js":9}],14:[function(require,module,exports){
// mucko Base range.js

var boot = require("./boot.js")
let nothing = boot.nothing


function _range(start, {step=1, stop=nothing}) {
  // https://github.com/d3/d3-array/blob/master/src/range.js
  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }
  return range
}


module.exports = {
    range: _range,
}

},{"./boot.js":9}],15:[function(require,module,exports){
(function (Buffer){
// mucko base/strings.js

function get_strings() {
    var boot = require("./boot.js")
    var metas = require("./metas.js")
    
    strings = {
    String: function (buf) {
        if (typeof Buffer === "undefined") {
            return new TextDecoder('utf8').decode(buf)
        } else {
            return Buffer.from(buf).toString('utf8')
        }
    },
    
    string: function () {
        let DataType = boot.DataType
        var out = '';
        for (var i=0; i < arguments.length; i++) {
            let x = arguments[i];
            if (metas.typeof(x) == DataType) {
                out += x.name;
            } else {
                out += x;
            }
        }
        return out;
    },
    
    split: function (str, dlm) {
        return str.split(dlm)
    },
    
    join: function (strings, delim) {
        if (metas.isundef(delim)) {
            return strings.join("")
        } else {
            return strings.join(delim)
        }
    },
    
    repr: function (x) {
        let typ = typeof(x);
        let quot = '"';
        switch (typ) {
        case "string": return string(quot, x, quot);
        default: return string(x);
        }
    },
    }
    return strings
}


module.exports = get_strings()

}).call(this,require("buffer").Buffer)
},{"./boot.js":9,"./metas.js":12,"buffer":20}],16:[function(require,module,exports){
// mucko util.js

function get_util() {
    util = {
    // util.require
    require: function(path) {
        return require(path)
    } // require
    }
    return util
}


module.exports = get_util()

},{}],17:[function(require,module,exports){
// mucko.ui UI.js

function get_ui() {
    var KnobControl = require("./knob_control.js")
    UI = {
        KnobControl: KnobControl,
    }
    return UI
}


module.exports = get_ui()

},{"./knob_control.js":18}],18:[function(require,module,exports){
// mucko.ui knob_control.js

var mucko = require("mucko")
var Base = mucko.Base


function get_knob_control() {
    if (typeof window == "undefined") {
        var svgknob = require("../deps/svg-knob.js")
    } else {
        var svgknob = require("svg-knob")
    }
    Knob = function (knob_el, value, options) {
        cursor_color = '#1e969a'
        opt = {
        value_min: 0,
        value_max: 100,
        value_resolution: 1,
        mouse_wheel_acceleration: 1,
        bg_radius: 40,
        bg_border_width: 1.5,
        track_bg_radius: 0,
        track_bg_width: 0,
        track_radius: 0,
        track_width: 0,
        cursor_radius: 26,
        cursor_length: 6,
        cursor_width: 10,
        cursor_color: cursor_color,
        cursor_color_init: cursor_color,
        linecap: "round",
        font_size: 18,
        bg: true,
        track_bg: false,
        track: true,
        cursor: true,
        value_text: true,
        value_position: 50,
        initial_value: 0,
        onchange: undefined,
        }
        Base.mergeI(opt, options || {})
        knob = svgknob.Knob(knob_el, opt)
        knob.value = value
        if (!Base.Meta.isundef(opt.onchange)) {
            opt.onchange(value)
        }
        return knob
    }
    var KnobControl = {
        Knob: Knob,
    }
    return KnobControl
}


module.exports = get_knob_control()

},{"../deps/svg-knob.js":"svg-knob","mucko":"mucko","svg-knob":"svg-knob"}],19:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],20:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

},{"base64-js":19,"ieee754":21}],21:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],22:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"mucko.ui":[function(require,module,exports){
// mucko.ui index.js

var UI = require("./src/UI.js")


module.exports = UI

},{"./src/UI.js":17}],"mucko":[function(require,module,exports){
// mucko index.js

var Core = require("./src/Core.js")
var Meta = require("./src/Meta.js")
var { UnitTest, Test } = require("./src/UnitTest.js")
var Base = require("./src/Base.js")
var Sys = require("./src/Sys.js")
var util = require("./src/util.js")


module.exports = {
    Core,
    Meta,
    UnitTest,
    Test,
    Base,
    Sys,
    util,
}

},{"./src/Base.js":1,"./src/Core.js":2,"./src/Meta.js":3,"./src/Sys.js":4,"./src/UnitTest.js":5,"./src/util.js":16}],"svg-knob":[function(require,module,exports){
"use strict";

// code from https://github.com/francoisgeorgy/svg-knob

// FIXME: remove console usage for IE compatibility

/**
 *
 * @param elem DIV or SVN element
 * @param conf optional config
 * @returns {{value, config}}
 */
var Knob = function (elem, conf = {}) {

    // Like a real knob, it's the knob's position that determines the knob's value.
    // Therefore, the value is computed from the knob's position (angle).
    // However, the user has the possibility to directly set the value and in that case
    // the knob's position (angle) will be computed from the value and the knob redrawn
    // accordingly.

    //
    // All angles in method parameters are in [degrees] (except for polarToKnobAngle() and getViewboxCoord()).
    //
    // By default:
    // - knob direction is CLOCKWISE
    // - start position is 6 o'clock (bottom)
    // - knob angle is:
    //       0 [deg] angle is a   6 o'clock (bottom)
    //      90 [deg] angle is at  9 o'clock (left)
    //     180 [deg] angle is at 12 o'clock (top)
    //     270 [deg] angle is at  3 o'clock (right)
    //
    // Trigonometric functions (sin, cos, ...) operate in polar coordinates,
    // with 0 angle at 3 o'clock and a counter-clockwise direction.
    // To convert from "knob angle" to "polar angle":
    //
    //     knob    polar
    // --------------------
    //        0      270
    //       30      240
    //       90      180
    //      180       90
    //      270        0
    //      330      -60 (add 360 to get a positive equivalent value: -60 + 360 = 300)
    //
    // Formula: polar-angle = 270 - knob-angle
    //

    if (!elem) {
        throw "You must pass a DOM node reference to the Knob constructor";
    }

    let trace = false;    // when true, will log more details in the console; use enableDebug(), disableDebug() to change

    // It is faster to access a property than to access a variable...
    // See https://jsperf.com/vars-vs-props-speed-comparison/1

    const NS = "http://www.w3.org/2000/svg";
    const CW = true;    // clock-wise
    const CCW = !CW;    // counter clock-wise

    //---------------------------------------------------------------------
    // To simplify the internal coordinates transformations, we set the view box as a 100 by 100 square.
    // But, if a label is present, then we add 20 to the height (at the bottom) as a placeholder for the label.
    // In summary:
    // - 0,0..99,99: the knob itself
    // - 0,100..99,119: the label, if any
    const VIEWBOX_WIDTH = 100;
    // const VIEWBOX_HEIGHT = config.with_label ? 120 : 100;
    const HALF_WIDTH = 50;      // viewBox/2
    const HALF_HEIGHT = 50;     // viewBox/2

    let svg_element;

    if (typeof elem === "string" || elem instanceof String) {
        elem = document.querySelector(elem);
    }

    if (elem.nodeName.toLowerCase() === "svg") {
        svg_element = elem;
    } else {
        svg_element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        elem.appendChild(svg_element);
    }

    // For the user convenience, the label can be set with the "data-label" attribute.
    // If another label is set in data-config then this later definition will override data-label.
    // let default_label = svg_element.dataset.label !== undefined ? svg_element.dataset.label : "";
    let label = elem.dataset.label !== undefined ? elem.dataset.label : false;

    let palettes = {
        light : {
            bg_color: "#E0E0E0",
            bg_border_color: "#BDBDBD",
            track_bg_color: "#CFD8DC",
            track_color_init: "#64B5F6",
            track_color: "#42A5F5",
            cursor_color_init: "#64B5F6",
            cursor_color: "#42A5F5",
            markers_color: "#9E9E9E",
            font_color: "#424242",
        },
        light2 : {
            bg_color: "#B1DAEE",
            bg_border_color: "#569DC0",
            track_bg_color: "#B1DAEE",
            track_color_init: "#569DC0",
            track_color: "#1D6D93",
            cursor_color_init: "#569DC0",
            cursor_color: "#1D6D93",
            markers_color: "#3680A4",
            font_color: "#1D6D93",
        },
        dark: {
            bg_color: "#000000",
            bg_border_color: "#569DC0",
            track_bg_color: "#424242",
            track_color_init: "#FDD835",
            track_color: "#FFEC00",
            cursor_color_init: "#569DC0",
            cursor_color: "#FDD835",
            markers_color: "#3680A4",
            font_color: "#FFEA00",
        }
    }

    let defaults = {

        // User configurable properties. The colors are defined in the 'palettes', later on.

        // No camelCase because we want to be able to have the same name in data- attributes.

        label: false,

        rotation: CW,

        default_value: 0,
        initial_value: 0,
        value_min: 0.0,
        value_max: 100.0,
        value_resolution: 1,        // null means ignore

        // split knob:
        center_zero: false,
        center_value: null,         // if null, the value will be computed from the min and max in the init() method
        center_gap: 4,              // only used when center_zero=true; is the width of the gap between the left and right track around the zero value.

        // position:
        zero_at: 270.0,             // [deg] (polar) the 0 degree will be at 270 polar degrees (6 o'clock).
        angle_min: 30.0,            // [deg] Angle in knob coordinates (0 at 6 0'clock)
        angle_max: 330.0,           // [deg] Angle in knob coordinates (0 at 6 0'clock)

        // background disk:
        bg_radius: 32,
        bg_border_width: 1,

        // track background:
        track_bg_radius: 40,
        track_bg_width: 8,

        // track:
        track_radius: 40,
        track_width: 8,

        // cursor
        cursor_radius: 18,          // same unit as radius
        cursor_length: 10,
        cursor_width: 4,

        // appearance:
        palette: "light",
        bg: false,
        track_bg: true,
        track: true,
        cursor: false,
        // CSS class names
        linecap: "butt",                   // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
        value_text: true,
        value_position: HALF_HEIGHT + 8,    // empirical value: HALF_HEIGHT + config.font_size / 3
        // value_formatting: null,          // TODO; callback function
        format: v => v,                     // formatting of the displayed value
        font_family: "sans-serif",
        font_size: 25,

        font_weight: "bold",
        markers: 0,                         // number of markers; 0 or false to disable
        markers_radius: 40,
        markers_length: 8,
        markers_width: 2,

        class_bg: "knob-bg",
        class_track_bg : "knob-track-bg",
        class_track : "knob-track",
        class_value : "knob-value",
        class_cursor : "knob-cursor",
        class_markers: "knob-markers",

        snap_to_steps: false,       // TODO

        // mouse wheel support:
        mouse_wheel_acceleration: 1,

        onchange: null              // callback function
    };

    //---------------------------------------------------------------------
    // Consolidate all configs:

    let data_config = JSON.parse(elem.dataset.config || "{}");
    let c = Object.assign({}, defaults, palettes[defaults.palette], conf, data_config);
    // we re-assign conf and data_config for the case they override some of the palette colors.
    let config = Object.assign(c, palettes[c.palette], conf, data_config);

    //---------------------------------------------------------------------
    // Terminates the SVG element setup:

    let viewbox_height;
    if (config.label || (config.value_position >= (100 - (config.font_size / 2)))) {
        // make some room for the label or the value that we want to display below the knob
        viewbox_height = 120;
    } else {
        viewbox_height = 100;
    }

    // For the use of null argument with setAttributeNS, see https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course#Scripting_in_namespaced_XML
    svg_element.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg_element.setAttributeNS(null, "viewBox", `0 0 ${VIEWBOX_WIDTH} ${viewbox_height}`);

    // Center of arc in knob coordinates and in ViewPort"s pixels relative to the <svg> ClientBoundingRect.
    let arcCenterXPixels = 0;
    let arcCenterYPixels = 0; // equal to arcCenterXPixels because the knob is a circle

    //---------------------------------------------------------------------
    // Pre-computed values to speed-up operations:

    // At the top of the knob, we leave a gap between the left and right tracks.
    // These are angles that delimit this gap:
    let left_track_end_angle = 0;     // angle in [degrees]
    let right_track_start_angle = 0;  // angle in [degrees]

    //---------------------------------------------------------------------
    // internals

    let value = 0.0;                    // current knob's value [value_min..value_max]
    let angle = config.angle_min;       // current knob's angle in [deg] and in knob's coordinate (not polar)

    let distance = 0.0;                 // distance from arc center to mouse position
    let mouse_wheel_direction = 1;      // dependant of the OS

    //---------------------------------------------------------------------
    // SVG elements, from back to front:
    let svg_bg = null;           // background disk:
    let svg_track_bg = null;            // track background; for non zero-centered knobs
    let svg_track_bg_left = null;       // track background; for zero-centered knobs
    let svg_track_bg_right = null;      // track background; for zero-centered knobs
    let svg_track = null;
    let svg_cursor = null;
    let svg_divisions = null;
    let svg_value_text = null;

    //---------------------------------------------------------------------
    // mouse support
    let targetRect;
    let minDeltaY;

    //---------------------------------------------------------------------
    // true if the current knob value is different from the default value
    let has_changed = false;    // to spare some getValue() calls when testing if value has changed from default_value

    //---------------------------------------------------------------------
    // Create the knob:

    init();
    draw();
    attachEventHandlers();


    /**
     * Having a init function allow the knob to be re-configured.
     */
    function init() {

        if (config.center_zero) {
            if (!config.center_value) {
                config.center_value = getRoundedValue((config.value_max - config.value_min) / 2 + config.value_min);
            }
        }

        // set initial value and angle:
        setValue(config.initial_value ? config.initial_value : config.default_value);

        // At the top of the knob, we leave a gap between the left and right tracks.
        // 'left_track_end_angle' and 'right_track_start_angle' are the angles that delimit this gap.
        // Only used if center_zero=true.
        if (config.linecap === "butt") {
            left_track_end_angle = polarToKnobAngle(Math.acos(-config.center_gap/100.0) * 180.0 / Math.PI);
            right_track_start_angle = polarToKnobAngle(Math.acos(config.center_gap/100.0) * 180.0 / Math.PI);
        } else {
            left_track_end_angle = polarToKnobAngle(Math.acos(-(config.track_width*1.3 + config.center_gap)/100.0) * 180.0 / Math.PI);
            right_track_start_angle = polarToKnobAngle(Math.acos((config.track_width*1.3 + config.center_gap)/100.0) * 180.0 / Math.PI);
        }

        // mouse_wheel_direction = _isMacOS() ? -1 : 1; //TODO: really necessary?
    }

    /**
     * Return the value "rounded" according to config.value_resolution
     * @param v value
     */
    function getRoundedValue(v) {
        return config.value_resolution === null ? v : Math.round(v / config.value_resolution) * config.value_resolution;
    }

    /**
     *
     * @param angle [deg] in knob's coordinates
     * @returns {*}
     */
    function getDisplayValue(angle) {
        let v = getValue(angle);
        return config.format(v);
    }



    /**
     * Trick to adjust the cursor position when the range is odd.
     */
    function getCursorCorrection() {
        let isOdd = n => Math.abs(n % 2) === 1;
        return isOdd(Math.abs(config.value_max - config.value_min)) ? 0.5 : 0;
    }

    /**
     * Get the knob's value determined by the knob's position (angle)
     * @param a [deg] in knob's coordinates
     * @returns {number}
     */
    function getValue(a) {
        let p = a === undefined ? angle : a;
        let v = ((p - config.angle_min) / (config.angle_max - config.angle_min)) * (config.value_max - config.value_min) + config.value_min;
        return getRoundedValue(v - getCursorCorrection());
    }

    /**
     * Set knob's value
     * @param v
     */
    function setValue(v) {
        if (v < config.value_min) {
            value = config.value_min;
        } else if (v > config.value_max) {
            value = config.value_max;
        } else {
            value = v;
        }
        setAngle(((v + getCursorCorrection() - config.value_min) / (config.value_max - config.value_min)) * (config.angle_max - config.angle_min) + config.angle_min);
        if (trace) console.log(`setValue(${v}) angle=` + ((v - config.value_min) / (config.value_max - config.value_min)) * (config.angle_max - config.angle_min) + config.angle_min);
        return true;
    }

    /**
     * Set knob's angle
     * @param new_angle in [deg]
     * @param fire_event
     */
    function setAngle(new_angle, fire_event) {
        let prev = angle;
        let notify = fire_event && (new_angle !== angle);
        angle = Math.min(Math.max(new_angle, config.angle_min), config.angle_max);
        if (notify) {
            // fire the event if the change of angle affect the value:
            if (getValue(prev) !== getValue()) {
                notifyChange();
            }
        }
    }

    /**
     * Increment (or decrement if the increment is negative) the knob's angle.
     * @param increment
     */
    function incAngle(increment) {
        setAngle(Math.min(Math.max(angle + increment, config.angle_min), config.angle_max), true);
    }

    /**
     * Return polar coordinates angle from our "knob coordinates" angle
     */
    function knobToPolarAngle(angle) {
        let a = config.zero_at - angle;
        if (a < 0) a = a + 360.0;
        if (trace) console.log(`knobToPolarAngle ${angle} -> ${a}`);
        return a;
    }

    /**
     *
     * @param angle [deg] with 0 at 3 o'clock
     * @returns {number}
     */
    function polarToKnobAngle(angle) {
        // "-" for changing CCW to CW
        if (trace) console.log(`polarToKnobAngle ${angle} -> ${(config.zero_at - angle + 360.0) % 360.0}`);
        return (config.zero_at - angle + 360.0) % 360.0;    // we add 360 to handle negative values down to -360
    }

    /**
     * startDrag() must have been called before to init the targetRect variable.
     */
    function mouseUpdate(e) {

        // MouseEvent.clientX (standard property: YES)
        // The clientX read-only property of the MouseEvent interface provides
        // the horizontal coordinate within the application's client area at which
        // the event occurred (as opposed to the coordinates within the page).
        // For example, clicking in the top-left corner of the client area will always
        // result in a mouse event with a clientX value of 0, regardless of whether
        // the page is scrolled horizontally. Originally, this property was defined
        // as a long integer. The CSSOM View Module redefined it as a double float.

        let dxPixels = e.clientX - targetRect.left;
        let dyPixels = e.clientY - targetRect.top;

        // mouse delta in cartesian coordinate with path center=0,0 and scaled (-1..0..1) relative to path:
        // <svg> center:       (dx, dy) == ( 0,  0)
        // <svg> top-left:     (dx, dy) == (-1,  1)
        // <svg> bottom-right: (dx, dy) == ( 1, -1) (bottom right of the 100x100 viewBox, ignoring the bottom 100x20 for the label)
        let dx = (dxPixels - arcCenterXPixels) / (targetRect.width / 2);
        let dy = - (dyPixels - arcCenterYPixels) / (targetRect.width / 2);  // targetRect.width car on a 20px de plus en hauteur pour le label

        if (config.rotation === CCW) dx = - dx;

        // convert to polar coordinates
        let angle_rad = Math.atan2(dy, dx);
        if (angle_rad < 0) angle_rad = 2.0*Math.PI + angle_rad;

        if (trace) console.log(`mouseUpdate: position in svg = ${dxPixels}, ${dyPixels} pixels; ${dx.toFixed(3)}, ${dy.toFixed(3)} rel.; angle ${angle_rad.toFixed(3)} rad`);

        setAngle(polarToKnobAngle(angle_rad * 180.0 / Math.PI), true);

        // distance from arc center to mouse position:
        // distance = Math.sqrt(dx*(HALF_WIDTH/config.track_radius)*dx*(HALF_WIDTH/config.track_radius) + dy*(HALF_HEIGHT/config.track_radius)*dy*(HALF_HEIGHT/config.track_radius));
    }

    /**
     *
     * @param e
     */
    function startDrag(e) {

        if (trace) console.log("startDrag");

        e.preventDefault();

        // API: Event.currentTarget
        //      Identifies the current target for the event, as the event traverses the DOM. It always REFERS TO THE ELEMENT
        //      TO WHICH THE EVENT HANDLER HAS BEEN ATTACHED, as opposed to event.target which identifies the element on
        //      which the event occurred.
        //      https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

        // currentTarget = e.currentTarget;

        // API: Element.getBoundingClientRect() (standard: YES)
        //      The Element.getBoundingClientRect() method returns the size of an element
        //      and its POSITION RELATIVE TO THE VIEWPORT.
        //      The amount of scrolling that has been done of the viewport area (or any other
        //      scrollable element) is taken into account when computing the bounding rectangle.
        //      This means that the rectangle's boundary edges (top, left, bottom, and right)
        //      change their values every time the scrolling position changes (because their
        //      values are relative to the viewport and not absolute).
        //      https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect

        // targetRect = currentTarget.getBoundingClientRect(); // currentTarget must be the <svg...> object
        targetRect = svg_element.getBoundingClientRect();

        // Note: we must take the boundingClientRect of the <svg> and not the <path> because the <path> bounding rect
        //       is not constant because it encloses the current arc.

        // By design, the arc center is at equal distance from top and left.
        arcCenterXPixels = targetRect.width / 2;
        //noinspection JSSuspiciousNameCombination
        arcCenterYPixels = arcCenterXPixels;

        document.addEventListener("mousemove", handleDrag, false);
        document.addEventListener("mouseup", endDrag, false);

        mouseUpdate(e);
        redraw();
    }

    /**
     *
     * @param e
     */
    function handleDrag(e) {
        e.preventDefault();
        mouseUpdate(e);
        redraw();
    }

    /**
     *
     */
    function endDrag() {
        if (trace) console.log("endDrag");
        document.removeEventListener("mousemove", handleDrag, false);
        document.removeEventListener("mouseup", endDrag, false);
    }

    /**
     *
     * @param e
     * @returns {boolean}
     */
    function mouseWheelHandler(e) {

        // WheelEvent
        // This is the standard wheel event interface to use. Old versions of browsers implemented the two non-standard
        // and non-cross-browser-compatible MouseWheelEvent and MouseScrollEvent interfaces. Use this interface and avoid
        // the latter two.
        // The WheelEvent interface represents events that occur due to the user moving a mouse wheel or similar input device.

        // https://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers
        // https://github.com/facebook/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js

        e.preventDefault();

        let dy = e.deltaY;

        if (dy !== 0) {
            // normalize Y delta
            if (minDeltaY > Math.abs(dy) || !minDeltaY) {
                minDeltaY = Math.abs(dy);
            }
        }

        incAngle(dy / minDeltaY * mouse_wheel_direction * config.mouse_wheel_acceleration);

        // TODO: mouse speed detection (https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed)

        redraw();

        return false;
    }

    /**
     *
     * @param e
     */
    function startTouch(e) {

        if (trace) console.log("startTouch");

        e.preventDefault(); // necessary to avoid moving all the page

        targetRect = svg_element.getBoundingClientRect();

        // By design, the arc center is at equal distance from top and left.
        arcCenterXPixels = targetRect.width / 2;
        //noinspection JSSuspiciousNameCombination
        arcCenterYPixels = arcCenterXPixels;

        document.addEventListener("touchmove", handleTouch, {passive: false});
        document.addEventListener("touchend", endTouch);

    }

    /**
     *
     * @param e
     */
    function handleTouch(e) {

        if (trace) console.log("handleTouch", e.touches);

        e.preventDefault();

        let touchesIndex = e.touches.length - 1;

        let dxPixels = e.touches[touchesIndex].clientX - targetRect.left;
        let dyPixels = e.touches[touchesIndex].clientY - targetRect.top;

        let dx = (dxPixels - arcCenterXPixels) / (targetRect.width / 2);
        let dy = - (dyPixels - arcCenterYPixels) / (targetRect.width / 2);  // targetRect.width car on a 20px de plus en hauteur pour le label

        if (config.rotation === CCW) dx = - dx;

        // convert to polar coordinates
        let angle_rad = Math.atan2(dy, dx);
        if (angle_rad < 0) angle_rad = 2.0*Math.PI + angle_rad;

        if (trace) console.log(`handleTouch: position in svg = ${dxPixels}, ${dyPixels} pixels; ${dx.toFixed(3)}, ${dy.toFixed(3)} rel.; angle ${angle_rad.toFixed(3)} rad`);

        setAngle(polarToKnobAngle(angle_rad * 180.0 / Math.PI), true);

        redraw();

    }

    /**
     *
     */
    function endTouch() {
        if (trace) console.log("endTouch");
        document.removeEventListener("touchmove", handleTouch);
        document.removeEventListener("touchend", endTouch);
    }

    /**
     *
     */
    function attachEventHandlers() {
        if (trace) console.log("attach attachEventHandlers");
        svg_element.addEventListener("mousedown", function(e) {
            startDrag(e);
        });
        svg_element.addEventListener("wheel", function(e) {
            mouseWheelHandler(e);
        });
        svg_element.addEventListener("touchstart", startTouch, {passive: false});
    }

    /**
     *
     */
    function notifyChange() {
        if (trace) console.log("knob value has changed");
        let value = getValue();     // TODO: cache the value
        let event = new CustomEvent("change", {"detail": value});
        //svg_element.dispatchEvent(event);
        elem.dispatchEvent(event);
        if (config.onchange) {
            config.onchange(value);
        }
    }

    /**
     * Utility function to configure the mousewheel direction.
     * @returns {*}
     * @private
     */
    function _isMacOS() {
        return ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(window.navigator.platform) !== -1;
    }

    /**
     * Return viewBox X,Y coordinates
     * @param angle in [degree] (polar, 0 at 3 o'clock)
     * @param radius; defaults to config.radius
     * @returns {{x: number, y: number}}
     */
    function getViewboxCoord(angle, radius) {
        let a = angle * Math.PI / 180.0;
        let r = radius === undefined ? config.track_radius : radius;
        let x = Math.cos(a) * r;
        let y = Math.sin(a) * r;
        return {
            x: config.rotation === CW ? (HALF_WIDTH + x) : (HALF_WIDTH - x),
            y: HALF_HEIGHT - y
        }
    }

    /**
     *
     * @param from_angle in [degree] in knob's coordinates
     * @param to_angle in [degree] in knob's coordinates
     * @param radius
     */
    function getArc(from_angle, to_angle, radius) {

        if (trace) console.group(`getArc(${from_angle}, ${to_angle}, ${radius})`);

        // SVG d: "A rx,ry xAxisRotate LargeArcFlag,SweepFlag x,y".
        // SweepFlag is either 0 or 1, and determines if the arc should be swept in a clockwise (1), or anti-clockwise (0) direction
        // ref: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d

        let a0 = knobToPolarAngle(from_angle);
        let a1 = knobToPolarAngle(to_angle);

        // little trick to force a full arc (360deg) when from=0 and to=360
        if (from_angle !== to_angle) {
            // with this we make sure that x1 will be different than x0 within the path definition
            a0 -= 0.0001;
            a1 += 0.0001;
        }

        let {x: x0, y: y0} = getViewboxCoord(a0, radius);
        let {x: x1, y: y1} = getViewboxCoord(a1, radius);

        let delta_angle = (a0 - a1 + 360.0) % 360.0;

        let large_arc = delta_angle < 180.0 ? 0 : 1;
        let arc_direction = config.rotation === CW ? 1 : 0;

        let p = `M ${x0},${y0} A ${radius},${radius} 0 ${large_arc},${arc_direction} ${x1},${y1}`;

        if (trace) console.groupEnd();
        if (trace) console.log("arc: " + p);

        return p;
    }

    /**
     *
     * @returns {*}
     */
    function getTrackPath() {

        let p = null;

        if (config.center_zero) {

            if (Array.isArray(config.center_value)) {
                // let v = getValue();
                // console.log('center value is an array; getValue=', getValue(), typeof v);
                if (config.center_value.includes(getValue())) {
                    if (trace) console.log("getTrackPath: center position, track not drawn");
                    // track is not drawn when the value is at center
                    return p;
                }
            } else {
                if (getValue() === config.center_value) {
                    if (trace) console.log("getTrackPath: center position, track not drawn");
                    // track is not drawn when the value is at center
                    return p;
                }
            }

            // we assume the split is at 180 [deg] (knob"s angle)
            if (angle < 180) {
                p = getArc(Math.min(angle, left_track_end_angle), left_track_end_angle, config.track_radius);
            } else if (angle > 180) {
                p = getArc(right_track_start_angle, Math.max(angle, right_track_start_angle), config.track_radius);
            }

        } else {
            p = getArc(config.angle_min, angle, config.track_radius);
        }

        return p;
    }

    /**
     *
     */
    function draw_background() {

        if (!config.bg) return;

        // For the use of null argument with setAttributeNS, see https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course#Scripting_in_namespaced_XML

        //
        // back disk:
        //
        svg_bg = document.createElementNS(NS, "circle");
        svg_bg.setAttributeNS(null, "cx", `${HALF_WIDTH}`);
        svg_bg.setAttributeNS(null, "cy", `${HALF_HEIGHT}`);
        svg_bg.setAttributeNS(null, "r", `${config.bg_radius}`);
        svg_bg.setAttribute("fill", `${config.bg_color}`);
        svg_bg.setAttribute("stroke", `${config.bg_border_color}`);
        svg_bg.setAttribute("stroke-width", `${config.bg_border_width}`);
        svg_bg.setAttribute("class", config.class_bg);
        svg_element.appendChild(svg_bg);
    }

    /**
     *
     */
    function draw_markers() {

        if (!config.markers) return;

        let p = "";
        let step = (config.angle_max - config.angle_min) / config.markers;
        for (let a = config.angle_min; a <= config.angle_max; a += step) {
            let from = getViewboxCoord(knobToPolarAngle(a), config.markers_radius);    // getViewboxCoord(angle, radius)
            let to = getViewboxCoord(knobToPolarAngle(a), config.markers_radius + config.markers_length);
            p += `M ${from.x},${from.y} L ${to.x},${to.y} `;
        }

        svg_divisions = document.createElementNS(NS, "path");
        svg_divisions.setAttributeNS(null, "d", p);
        svg_divisions.setAttribute("stroke", `${config.markers_color}`);
        svg_divisions.setAttribute("stroke-width", `${config.markers_width}`);
        svg_divisions.setAttribute("stroke-linecap", config.linecap);
        svg_divisions.setAttribute("class", config.class_markers);
        svg_element.appendChild(svg_divisions);
    }


    function draw_units() {
        let pos = getViewboxCoord(angle_min_polar, config.divisions_radius);    // getViewboxCoord(angle, radius)
        svg_value_text = document.createElementNS(NS, "text");
        svg_value_text.setAttributeNS(null, "x", `${pos.x}`);
        svg_value_text.setAttributeNS(null, "y", `${pos.y}`);
        // svg_value_text.setAttribute("text-anchor", "middle");
        svg_value_text.setAttribute("cursor", "default");
        svg_value_text.setAttribute("font-family", config.font_family);
        svg_value_text.setAttribute("font-size", `10`);
        // svg_value_text.setAttribute("font-weight", `${config.font_weight}`);
        svg_value_text.setAttribute("fill", config.font_color);
        // svg_value_text.setAttribute("class", config.class_value);
        // svg_value_text.textContent = getDisplayValue();
        svg_value_text.textContent = config.value_min.toString();
        svg_element.appendChild(svg_value_text);
    }


    /**
     *
     */
    function draw_track_background() {

        // For the use of null argument with setAttributeNS, see https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course#Scripting_in_namespaced_XML

        if (!config.track_bg) return;

        //
        // track background:
        //
        if (config.center_zero) {

            // left track background
            svg_track_bg_left = document.createElementNS(NS, "path");
            svg_track_bg_left.setAttributeNS(null, "d", getArc(config.angle_min, left_track_end_angle, config.track_bg_radius));
            svg_track_bg_left.setAttribute("stroke", `${config.track_bg_color}`);
            svg_track_bg_left.setAttribute("stroke-width", `${config.track_bg_width}`);
            svg_track_bg_left.setAttribute("stroke-linecap", config.linecap);
            svg_track_bg_left.setAttribute("fill", "transparent");
            svg_track_bg_left.setAttribute("class", config.class_track_bg);
            svg_element.appendChild(svg_track_bg_left);

            // right track background
            svg_track_bg_right = document.createElementNS(NS, "path");
            svg_track_bg_right.setAttributeNS(null, "d", getArc(right_track_start_angle, config.angle_max, config.track_bg_radius));
            svg_track_bg_right.setAttribute("stroke", `${config.track_bg_color}`);
            svg_track_bg_right.setAttribute("stroke-width", `${config.track_bg_width}`);
            svg_track_bg_right.setAttribute("stroke-linecap", config.linecap);
            svg_track_bg_right.setAttribute("fill", "transparent");
            svg_track_bg_right.setAttribute("class", config.class_track_bg);
            svg_element.appendChild(svg_track_bg_right);

        } else {

            svg_track_bg = document.createElementNS(NS, "path");
            svg_track_bg.setAttributeNS(null, "d", getArc(config.angle_min, config.angle_max, config.track_bg_radius));
            svg_track_bg.setAttribute("stroke", `${config.track_bg_color}`);
            svg_track_bg.setAttribute("stroke-width", `${config.track_bg_width}`);
            svg_track_bg.setAttribute("fill", "transparent");
            svg_track_bg.setAttribute("stroke-linecap", config.linecap);
            svg_track_bg.setAttribute("class", config.class_track_bg);
            svg_element.appendChild(svg_track_bg);

        }
    }

    /**
     *
     */
    function draw_track() {
        if (!config.track) return;
        let p = getTrackPath();
        if (p) {
            svg_track = document.createElementNS(NS, "path");
            svg_track.setAttributeNS(null, "d", p);
            svg_track.setAttribute("stroke", `${config.track_color_init}`);
            svg_track.setAttribute("stroke-width", `${config.track_width}`);
            svg_track.setAttribute("fill", "transparent");
            svg_track.setAttribute("stroke-linecap", config.linecap);
            svg_track.setAttribute("class", config.class_track);
            svg_element.appendChild(svg_track);
        }
    }

    /**
     *
     * @returns {string}
     */
    function getTrackCursor() {
        let a = knobToPolarAngle(angle);
        let from = getViewboxCoord(a, config.cursor_radius);
        let to = getViewboxCoord(a, config.cursor_radius + config.cursor_length);
        return `M ${from.x},${from.y} L ${to.x},${to.y}`;
    }

    /**
     *
     */
    function draw_cursor() {

        if (!config.cursor) return;

        let p = getTrackCursor();
        if (p) {
            svg_cursor = document.createElementNS(NS, "path");
            svg_cursor.setAttributeNS(null, "d", p);
            svg_cursor.setAttribute("stroke", `${config.cursor_color_init}`);
            svg_cursor.setAttribute("stroke-width", `${config.cursor_width}`);
            svg_cursor.setAttribute("fill", "transparent");
            svg_cursor.setAttribute("stroke-linecap", config.linecap);
            svg_cursor.setAttribute("class", config.class_cursor);
            svg_element.appendChild(svg_cursor);
        }
    }

    /**
     *
     */
    function draw_value() {

        if (!config.value_text) return;

        svg_value_text = document.createElementNS(NS, "text");
        svg_value_text.setAttributeNS(null, "x", `${HALF_WIDTH}`);
        svg_value_text.setAttributeNS(null, "y", `${config.value_position}`);
        svg_value_text.setAttribute("text-anchor", "middle");
        svg_value_text.setAttribute("cursor", "default");
        svg_value_text.setAttribute("font-family", config.font_family);
        svg_value_text.setAttribute("font-size", `${config.font_size}`);
        svg_value_text.setAttribute("font-weight", `${config.font_weight}`);
        svg_value_text.setAttribute("fill", config.font_color);
        svg_value_text.setAttribute("class", config.class_value);
        svg_value_text.textContent = getDisplayValue();
        svg_element.appendChild(svg_value_text);
    }

    /**
     *
     */
    function draw() {
        draw_background();
        draw_track_background();
        draw_markers();
        // draw_units();
        draw_track();
        draw_cursor();
        draw_value();
    }

    /**
     *
     */
    function redraw() {

        let p = getTrackPath();
        if (p) {
            if (svg_track) {
                svg_track.setAttributeNS(null, "d", p);
            } else {
                draw_track();
            }
        } else {
            if (svg_track) {
                svg_track.setAttributeNS(null, "d", "");    // we hide the track
            }
        }

        if (!has_changed) {
            has_changed = getValue() !== config.default_value;
            if (has_changed) {
                if (svg_track) {
                    svg_track.setAttribute("stroke", `${config.track_color}`);
                }
            }
        }

        if (svg_cursor) {
            p = getTrackCursor();
            if (p) {
                svg_cursor.setAttributeNS(null, "d", p);
                if (has_changed) {
                    svg_cursor.setAttribute("stroke", `${config.cursor_color}`);
                }
            }
        }

        if (svg_value_text) {
            svg_value_text.textContent = getDisplayValue();
        }
    }

    /**
     *
     */
    return {
        get value() {
            return getValue();
        },
        set value(v) {
            setValue(v);
            redraw();
        },
        set config(new_config) {
            config = Object.assign({}, defaults, conf, new_config);
            init();
            draw();
        },
        enableDebug: function() {
            trace = true;
        },
        disableDebug: function() {
            trace = false;
        }
    };

}

module.exports = { Knob }

},{}]},{},[]);
