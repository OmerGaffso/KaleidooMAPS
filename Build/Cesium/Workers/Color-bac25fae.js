define([
  "exports",
  "./when-54c2dc71",
  "./Check-6c0211bc",
  "./Math-fc8cecf5",
  "./Transforms-d07bb42c",
], function (e, C, r, a, o) {
  "use strict";
  function i(e, r, o) {
    return (
      o < 0 && (o += 1),
      1 < o && --o,
      6 * o < 1
        ? e + 6 * (r - e) * o
        : 2 * o < 1
        ? r
        : 3 * o < 2
        ? e + (r - e) * (2 / 3 - o) * 6
        : e
    );
  }
  function E(e, r, o, t) {
    (this.red = C.defaultValue(e, 1)),
      (this.green = C.defaultValue(r, 1)),
      (this.blue = C.defaultValue(o, 1)),
      (this.alpha = C.defaultValue(t, 1));
  }
  var t, f;
  (E.fromCartesian4 = function (e, r) {
    return C.defined(r)
      ? ((r.red = e.x), (r.green = e.y), (r.blue = e.z), (r.alpha = e.w), r)
      : new E(e.x, e.y, e.z, e.w);
  }),
    (E.fromBytes = function (e, r, o, t, f) {
      return (
        (e = E.byteToFloat(C.defaultValue(e, 255))),
        (r = E.byteToFloat(C.defaultValue(r, 255))),
        (o = E.byteToFloat(C.defaultValue(o, 255))),
        (t = E.byteToFloat(C.defaultValue(t, 255))),
        C.defined(f)
          ? ((f.red = e), (f.green = r), (f.blue = o), (f.alpha = t), f)
          : new E(e, r, o, t)
      );
    }),
    (E.fromAlpha = function (e, r, o) {
      return C.defined(o)
        ? ((o.red = e.red),
          (o.green = e.green),
          (o.blue = e.blue),
          (o.alpha = r),
          o)
        : new E(e.red, e.green, e.blue, r);
    }),
    o.FeatureDetection.supportsTypedArrays() &&
      ((o = new ArrayBuffer(4)),
      (t = new Uint32Array(o)),
      (f = new Uint8Array(o))),
    (E.fromRgba = function (e, r) {
      return (t[0] = e), E.fromBytes(f[0], f[1], f[2], f[3], r);
    }),
    (E.fromHsl = function (e, r, o, t, f) {
      (e = C.defaultValue(e, 0) % 1),
        (r = C.defaultValue(r, 0)),
        (o = C.defaultValue(o, 0)),
        (t = C.defaultValue(t, 1));
      var s = o,
        n = o,
        l = o;
      return (
        0 !== r &&
          ((s = i(
            (r = 2 * o - (o = o < 0.5 ? o * (1 + r) : o + r - o * r)),
            o,
            e + 1 / 3
          )),
          (n = i(r, o, e)),
          (l = i(r, o, e - 1 / 3))),
        C.defined(f)
          ? ((f.red = s), (f.green = n), (f.blue = l), (f.alpha = t), f)
          : new E(s, n, l, t)
      );
    }),
    (E.fromRandom = function (e, r) {
      var o = (e = C.defaultValue(e, C.defaultValue.EMPTY_OBJECT)).red;
      C.defined(o) ||
        ((t = C.defaultValue(e.minimumRed, 0)),
        (f = C.defaultValue(e.maximumRed, 1)),
        (o = t + a.CesiumMath.nextRandomNumber() * (f - t)));
      var t,
        f = e.green;
      C.defined(f) ||
        ((s = C.defaultValue(e.minimumGreen, 0)),
        (t = C.defaultValue(e.maximumGreen, 1)),
        (f = s + a.CesiumMath.nextRandomNumber() * (t - s)));
      var s = e.blue;
      C.defined(s) ||
        ((n = C.defaultValue(e.minimumBlue, 0)),
        (l = C.defaultValue(e.maximumBlue, 1)),
        (s = n + a.CesiumMath.nextRandomNumber() * (l - n)));
      var n,
        l = e.alpha;
      return (
        C.defined(l) ||
          ((n = C.defaultValue(e.minimumAlpha, 0)),
          (e = C.defaultValue(e.maximumAlpha, 1)),
          (l = n + a.CesiumMath.nextRandomNumber() * (e - n))),
        C.defined(r)
          ? ((r.red = o), (r.green = f), (r.blue = s), (r.alpha = l), r)
          : new E(o, f, s, l)
      );
    });
  var s = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    n = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    l = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
    u = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
  (E.fromCssColorString = function (e, r) {
    C.defined(r) || (r = new E());
    var o = E[(e = e.replace(/\s/g, "")).toUpperCase()];
    if (C.defined(o)) return E.clone(o, r), r;
    o = s.exec(e);
    return null !== o
      ? ((r.red = parseInt(o[1], 16) / 15),
        (r.green = parseInt(o[2], 16) / 15),
        (r.blue = parseInt(o[3], 16) / 15),
        (r.alpha = parseInt(C.defaultValue(o[4], "f"), 16) / 15),
        r)
      : null !== (o = n.exec(e))
      ? ((r.red = parseInt(o[1], 16) / 255),
        (r.green = parseInt(o[2], 16) / 255),
        (r.blue = parseInt(o[3], 16) / 255),
        (r.alpha = parseInt(C.defaultValue(o[4], "ff"), 16) / 255),
        r)
      : null !== (o = l.exec(e))
      ? ((r.red = parseFloat(o[1]) / ("%" === o[1].substr(-1) ? 100 : 255)),
        (r.green = parseFloat(o[2]) / ("%" === o[2].substr(-1) ? 100 : 255)),
        (r.blue = parseFloat(o[3]) / ("%" === o[3].substr(-1) ? 100 : 255)),
        (r.alpha = parseFloat(C.defaultValue(o[4], "1.0"))),
        r)
      : null !== (o = u.exec(e))
      ? E.fromHsl(
          parseFloat(o[1]) / 360,
          parseFloat(o[2]) / 100,
          parseFloat(o[3]) / 100,
          parseFloat(C.defaultValue(o[4], "1.0")),
          r
        )
      : (r = void 0);
  }),
    (E.packedLength = 4),
    (E.pack = function (e, r, o) {
      return (
        (o = C.defaultValue(o, 0)),
        (r[o++] = e.red),
        (r[o++] = e.green),
        (r[o++] = e.blue),
        (r[o] = e.alpha),
        r
      );
    }),
    (E.unpack = function (e, r, o) {
      return (
        (r = C.defaultValue(r, 0)),
        C.defined(o) || (o = new E()),
        (o.red = e[r++]),
        (o.green = e[r++]),
        (o.blue = e[r++]),
        (o.alpha = e[r]),
        o
      );
    }),
    (E.byteToFloat = function (e) {
      return e / 255;
    }),
    (E.floatToByte = function (e) {
      return 1 === e ? 255 : (256 * e) | 0;
    }),
    (E.clone = function (e, r) {
      if (C.defined(e))
        return C.defined(r)
          ? ((r.red = e.red),
            (r.green = e.green),
            (r.blue = e.blue),
            (r.alpha = e.alpha),
            r)
          : new E(e.red, e.green, e.blue, e.alpha);
    }),
    (E.equals = function (e, r) {
      return (
        e === r ||
        (C.defined(e) &&
          C.defined(r) &&
          e.red === r.red &&
          e.green === r.green &&
          e.blue === r.blue &&
          e.alpha === r.alpha)
      );
    }),
    (E.equalsArray = function (e, r, o) {
      return (
        e.red === r[o] &&
        e.green === r[o + 1] &&
        e.blue === r[o + 2] &&
        e.alpha === r[o + 3]
      );
    }),
    (E.prototype.clone = function (e) {
      return E.clone(this, e);
    }),
    (E.prototype.equals = function (e) {
      return E.equals(this, e);
    }),
    (E.prototype.equalsEpsilon = function (e, r) {
      return (
        this === e ||
        (C.defined(e) &&
          Math.abs(this.red - e.red) <= r &&
          Math.abs(this.green - e.green) <= r &&
          Math.abs(this.blue - e.blue) <= r &&
          Math.abs(this.alpha - e.alpha) <= r)
      );
    }),
    (E.prototype.toString = function () {
      return (
        "(" +
        this.red +
        ", " +
        this.green +
        ", " +
        this.blue +
        ", " +
        this.alpha +
        ")"
      );
    }),
    (E.prototype.toCssColorString = function () {
      var e = E.floatToByte(this.red),
        r = E.floatToByte(this.green),
        o = E.floatToByte(this.blue);
      return 1 === this.alpha
        ? "rgb(" + e + "," + r + "," + o + ")"
        : "rgba(" + e + "," + r + "," + o + "," + this.alpha + ")";
    }),
    (E.prototype.toCssHexString = function () {
      var e = E.floatToByte(this.red).toString(16);
      e.length < 2 && (e = "0" + e);
      var r = E.floatToByte(this.green).toString(16);
      r.length < 2 && (r = "0" + r);
      var o = E.floatToByte(this.blue).toString(16);
      if ((o.length < 2 && (o = "0" + o), this.alpha < 1)) {
        var t = E.floatToByte(this.alpha).toString(16);
        return t.length < 2 && (t = "0" + t), "#" + e + r + o + t;
      }
      return "#" + e + r + o;
    }),
    (E.prototype.toBytes = function (e) {
      var r = E.floatToByte(this.red),
        o = E.floatToByte(this.green),
        t = E.floatToByte(this.blue),
        f = E.floatToByte(this.alpha);
      return C.defined(e)
        ? ((e[0] = r), (e[1] = o), (e[2] = t), (e[3] = f), e)
        : [r, o, t, f];
    }),
    (E.prototype.toRgba = function () {
      return (
        (f[0] = E.floatToByte(this.red)),
        (f[1] = E.floatToByte(this.green)),
        (f[2] = E.floatToByte(this.blue)),
        (f[3] = E.floatToByte(this.alpha)),
        t[0]
      );
    }),
    (E.prototype.brighten = function (e, r) {
      return (
        (e = 1 - e),
        (r.red = 1 - (1 - this.red) * e),
        (r.green = 1 - (1 - this.green) * e),
        (r.blue = 1 - (1 - this.blue) * e),
        (r.alpha = this.alpha),
        r
      );
    }),
    (E.prototype.darken = function (e, r) {
      return (
        (e = 1 - e),
        (r.red = this.red * e),
        (r.green = this.green * e),
        (r.blue = this.blue * e),
        (r.alpha = this.alpha),
        r
      );
    }),
    (E.prototype.withAlpha = function (e, r) {
      return E.fromAlpha(this, e, r);
    }),
    (E.add = function (e, r, o) {
      return (
        (o.red = e.red + r.red),
        (o.green = e.green + r.green),
        (o.blue = e.blue + r.blue),
        (o.alpha = e.alpha + r.alpha),
        o
      );
    }),
    (E.subtract = function (e, r, o) {
      return (
        (o.red = e.red - r.red),
        (o.green = e.green - r.green),
        (o.blue = e.blue - r.blue),
        (o.alpha = e.alpha - r.alpha),
        o
      );
    }),
    (E.multiply = function (e, r, o) {
      return (
        (o.red = e.red * r.red),
        (o.green = e.green * r.green),
        (o.blue = e.blue * r.blue),
        (o.alpha = e.alpha * r.alpha),
        o
      );
    }),
    (E.divide = function (e, r, o) {
      return (
        (o.red = e.red / r.red),
        (o.green = e.green / r.green),
        (o.blue = e.blue / r.blue),
        (o.alpha = e.alpha / r.alpha),
        o
      );
    }),
    (E.mod = function (e, r, o) {
      return (
        (o.red = e.red % r.red),
        (o.green = e.green % r.green),
        (o.blue = e.blue % r.blue),
        (o.alpha = e.alpha % r.alpha),
        o
      );
    }),
    (E.lerp = function (e, r, o, t) {
      return (
        (t.red = a.CesiumMath.lerp(e.red, r.red, o)),
        (t.green = a.CesiumMath.lerp(e.green, r.green, o)),
        (t.blue = a.CesiumMath.lerp(e.blue, r.blue, o)),
        (t.alpha = a.CesiumMath.lerp(e.alpha, r.alpha, o)),
        t
      );
    }),
    (E.multiplyByScalar = function (e, r, o) {
      return (
        (o.red = e.red * r),
        (o.green = e.green * r),
        (o.blue = e.blue * r),
        (o.alpha = e.alpha * r),
        o
      );
    }),
    (E.divideByScalar = function (e, r, o) {
      return (
        (o.red = e.red / r),
        (o.green = e.green / r),
        (o.blue = e.blue / r),
        (o.alpha = e.alpha / r),
        o
      );
    }),
    (E.ALICEBLUE = Object.freeze(E.fromCssColorString("#F0F8FF"))),
    (E.ANTIQUEWHITE = Object.freeze(E.fromCssColorString("#FAEBD7"))),
    (E.AQUA = Object.freeze(E.fromCssColorString("#00FFFF"))),
    (E.AQUAMARINE = Object.freeze(E.fromCssColorString("#7FFFD4"))),
    (E.AZURE = Object.freeze(E.fromCssColorString("#F0FFFF"))),
    (E.BEIGE = Object.freeze(E.fromCssColorString("#F5F5DC"))),
    (E.BISQUE = Object.freeze(E.fromCssColorString("#FFE4C4"))),
    (E.BLACK = Object.freeze(E.fromCssColorString("#000000"))),
    (E.BLANCHEDALMOND = Object.freeze(E.fromCssColorString("#FFEBCD"))),
    (E.BLUE = Object.freeze(E.fromCssColorString("#0000FF"))),
    (E.BLUEVIOLET = Object.freeze(E.fromCssColorString("#8A2BE2"))),
    (E.BROWN = Object.freeze(E.fromCssColorString("#A52A2A"))),
    (E.BURLYWOOD = Object.freeze(E.fromCssColorString("#DEB887"))),
    (E.CADETBLUE = Object.freeze(E.fromCssColorString("#5F9EA0"))),
    (E.CHARTREUSE = Object.freeze(E.fromCssColorString("#7FFF00"))),
    (E.CHOCOLATE = Object.freeze(E.fromCssColorString("#D2691E"))),
    (E.CORAL = Object.freeze(E.fromCssColorString("#FF7F50"))),
    (E.CORNFLOWERBLUE = Object.freeze(E.fromCssColorString("#6495ED"))),
    (E.CORNSILK = Object.freeze(E.fromCssColorString("#FFF8DC"))),
    (E.CRIMSON = Object.freeze(E.fromCssColorString("#DC143C"))),
    (E.CYAN = Object.freeze(E.fromCssColorString("#00FFFF"))),
    (E.DARKBLUE = Object.freeze(E.fromCssColorString("#00008B"))),
    (E.DARKCYAN = Object.freeze(E.fromCssColorString("#008B8B"))),
    (E.DARKGOLDENROD = Object.freeze(E.fromCssColorString("#B8860B"))),
    (E.DARKGRAY = Object.freeze(E.fromCssColorString("#A9A9A9"))),
    (E.DARKGREEN = Object.freeze(E.fromCssColorString("#006400"))),
    (E.DARKGREY = E.DARKGRAY),
    (E.DARKKHAKI = Object.freeze(E.fromCssColorString("#BDB76B"))),
    (E.DARKMAGENTA = Object.freeze(E.fromCssColorString("#8B008B"))),
    (E.DARKOLIVEGREEN = Object.freeze(E.fromCssColorString("#556B2F"))),
    (E.DARKORANGE = Object.freeze(E.fromCssColorString("#FF8C00"))),
    (E.DARKORCHID = Object.freeze(E.fromCssColorString("#9932CC"))),
    (E.DARKRED = Object.freeze(E.fromCssColorString("#8B0000"))),
    (E.DARKSALMON = Object.freeze(E.fromCssColorString("#E9967A"))),
    (E.DARKSEAGREEN = Object.freeze(E.fromCssColorString("#8FBC8F"))),
    (E.DARKSLATEBLUE = Object.freeze(E.fromCssColorString("#483D8B"))),
    (E.DARKSLATEGRAY = Object.freeze(E.fromCssColorString("#2F4F4F"))),
    (E.DARKSLATEGREY = E.DARKSLATEGRAY),
    (E.DARKTURQUOISE = Object.freeze(E.fromCssColorString("#00CED1"))),
    (E.DARKVIOLET = Object.freeze(E.fromCssColorString("#9400D3"))),
    (E.DEEPPINK = Object.freeze(E.fromCssColorString("#FF1493"))),
    (E.DEEPSKYBLUE = Object.freeze(E.fromCssColorString("#00BFFF"))),
    (E.DIMGRAY = Object.freeze(E.fromCssColorString("#696969"))),
    (E.DIMGREY = E.DIMGRAY),
    (E.DODGERBLUE = Object.freeze(E.fromCssColorString("#1E90FF"))),
    (E.FIREBRICK = Object.freeze(E.fromCssColorString("#B22222"))),
    (E.FLORALWHITE = Object.freeze(E.fromCssColorString("#FFFAF0"))),
    (E.FORESTGREEN = Object.freeze(E.fromCssColorString("#228B22"))),
    (E.FUCHSIA = Object.freeze(E.fromCssColorString("#FF00FF"))),
    (E.GAINSBORO = Object.freeze(E.fromCssColorString("#DCDCDC"))),
    (E.GHOSTWHITE = Object.freeze(E.fromCssColorString("#F8F8FF"))),
    (E.GOLD = Object.freeze(E.fromCssColorString("#FFD700"))),
    (E.GOLDENROD = Object.freeze(E.fromCssColorString("#DAA520"))),
    (E.GRAY = Object.freeze(E.fromCssColorString("#808080"))),
    (E.GREEN = Object.freeze(E.fromCssColorString("#008000"))),
    (E.GREENYELLOW = Object.freeze(E.fromCssColorString("#ADFF2F"))),
    (E.GREY = E.GRAY),
    (E.HONEYDEW = Object.freeze(E.fromCssColorString("#F0FFF0"))),
    (E.HOTPINK = Object.freeze(E.fromCssColorString("#FF69B4"))),
    (E.INDIANRED = Object.freeze(E.fromCssColorString("#CD5C5C"))),
    (E.INDIGO = Object.freeze(E.fromCssColorString("#4B0082"))),
    (E.IVORY = Object.freeze(E.fromCssColorString("#FFFFF0"))),
    (E.KHAKI = Object.freeze(E.fromCssColorString("#F0E68C"))),
    (E.LAVENDER = Object.freeze(E.fromCssColorString("#E6E6FA"))),
    (E.LAVENDAR_BLUSH = Object.freeze(E.fromCssColorString("#FFF0F5"))),
    (E.LAWNGREEN = Object.freeze(E.fromCssColorString("#7CFC00"))),
    (E.LEMONCHIFFON = Object.freeze(E.fromCssColorString("#FFFACD"))),
    (E.LIGHTBLUE = Object.freeze(E.fromCssColorString("#ADD8E6"))),
    (E.LIGHTCORAL = Object.freeze(E.fromCssColorString("#F08080"))),
    (E.LIGHTCYAN = Object.freeze(E.fromCssColorString("#E0FFFF"))),
    (E.LIGHTGOLDENRODYELLOW = Object.freeze(E.fromCssColorString("#FAFAD2"))),
    (E.LIGHTGRAY = Object.freeze(E.fromCssColorString("#D3D3D3"))),
    (E.LIGHTGREEN = Object.freeze(E.fromCssColorString("#90EE90"))),
    (E.LIGHTGREY = E.LIGHTGRAY),
    (E.LIGHTPINK = Object.freeze(E.fromCssColorString("#FFB6C1"))),
    (E.LIGHTSEAGREEN = Object.freeze(E.fromCssColorString("#20B2AA"))),
    (E.LIGHTSKYBLUE = Object.freeze(E.fromCssColorString("#87CEFA"))),
    (E.LIGHTSLATEGRAY = Object.freeze(E.fromCssColorString("#778899"))),
    (E.LIGHTSLATEGREY = E.LIGHTSLATEGRAY),
    (E.LIGHTSTEELBLUE = Object.freeze(E.fromCssColorString("#B0C4DE"))),
    (E.LIGHTYELLOW = Object.freeze(E.fromCssColorString("#FFFFE0"))),
    (E.LIME = Object.freeze(E.fromCssColorString("#00FF00"))),
    (E.LIMEGREEN = Object.freeze(E.fromCssColorString("#32CD32"))),
    (E.LINEN = Object.freeze(E.fromCssColorString("#FAF0E6"))),
    (E.MAGENTA = Object.freeze(E.fromCssColorString("#FF00FF"))),
    (E.MAROON = Object.freeze(E.fromCssColorString("#800000"))),
    (E.MEDIUMAQUAMARINE = Object.freeze(E.fromCssColorString("#66CDAA"))),
    (E.MEDIUMBLUE = Object.freeze(E.fromCssColorString("#0000CD"))),
    (E.MEDIUMORCHID = Object.freeze(E.fromCssColorString("#BA55D3"))),
    (E.MEDIUMPURPLE = Object.freeze(E.fromCssColorString("#9370DB"))),
    (E.MEDIUMSEAGREEN = Object.freeze(E.fromCssColorString("#3CB371"))),
    (E.MEDIUMSLATEBLUE = Object.freeze(E.fromCssColorString("#7B68EE"))),
    (E.MEDIUMSPRINGGREEN = Object.freeze(E.fromCssColorString("#00FA9A"))),
    (E.MEDIUMTURQUOISE = Object.freeze(E.fromCssColorString("#48D1CC"))),
    (E.MEDIUMVIOLETRED = Object.freeze(E.fromCssColorString("#C71585"))),
    (E.MIDNIGHTBLUE = Object.freeze(E.fromCssColorString("#191970"))),
    (E.MINTCREAM = Object.freeze(E.fromCssColorString("#F5FFFA"))),
    (E.MISTYROSE = Object.freeze(E.fromCssColorString("#FFE4E1"))),
    (E.MOCCASIN = Object.freeze(E.fromCssColorString("#FFE4B5"))),
    (E.NAVAJOWHITE = Object.freeze(E.fromCssColorString("#FFDEAD"))),
    (E.NAVY = Object.freeze(E.fromCssColorString("#000080"))),
    (E.OLDLACE = Object.freeze(E.fromCssColorString("#FDF5E6"))),
    (E.OLIVE = Object.freeze(E.fromCssColorString("#808000"))),
    (E.OLIVEDRAB = Object.freeze(E.fromCssColorString("#6B8E23"))),
    (E.ORANGE = Object.freeze(E.fromCssColorString("#FFA500"))),
    (E.ORANGERED = Object.freeze(E.fromCssColorString("#FF4500"))),
    (E.ORCHID = Object.freeze(E.fromCssColorString("#DA70D6"))),
    (E.PALEGOLDENROD = Object.freeze(E.fromCssColorString("#EEE8AA"))),
    (E.PALEGREEN = Object.freeze(E.fromCssColorString("#98FB98"))),
    (E.PALETURQUOISE = Object.freeze(E.fromCssColorString("#AFEEEE"))),
    (E.PALEVIOLETRED = Object.freeze(E.fromCssColorString("#DB7093"))),
    (E.PAPAYAWHIP = Object.freeze(E.fromCssColorString("#FFEFD5"))),
    (E.PEACHPUFF = Object.freeze(E.fromCssColorString("#FFDAB9"))),
    (E.PERU = Object.freeze(E.fromCssColorString("#CD853F"))),
    (E.PINK = Object.freeze(E.fromCssColorString("#FFC0CB"))),
    (E.PLUM = Object.freeze(E.fromCssColorString("#DDA0DD"))),
    (E.POWDERBLUE = Object.freeze(E.fromCssColorString("#B0E0E6"))),
    (E.PURPLE = Object.freeze(E.fromCssColorString("#800080"))),
    (E.RED = Object.freeze(E.fromCssColorString("#FF0000"))),
    (E.ROSYBROWN = Object.freeze(E.fromCssColorString("#BC8F8F"))),
    (E.ROYALBLUE = Object.freeze(E.fromCssColorString("#4169E1"))),
    (E.SADDLEBROWN = Object.freeze(E.fromCssColorString("#8B4513"))),
    (E.SALMON = Object.freeze(E.fromCssColorString("#FA8072"))),
    (E.SANDYBROWN = Object.freeze(E.fromCssColorString("#F4A460"))),
    (E.SEAGREEN = Object.freeze(E.fromCssColorString("#2E8B57"))),
    (E.SEASHELL = Object.freeze(E.fromCssColorString("#FFF5EE"))),
    (E.SIENNA = Object.freeze(E.fromCssColorString("#A0522D"))),
    (E.SILVER = Object.freeze(E.fromCssColorString("#C0C0C0"))),
    (E.SKYBLUE = Object.freeze(E.fromCssColorString("#87CEEB"))),
    (E.SLATEBLUE = Object.freeze(E.fromCssColorString("#6A5ACD"))),
    (E.SLATEGRAY = Object.freeze(E.fromCssColorString("#708090"))),
    (E.SLATEGREY = E.SLATEGRAY),
    (E.SNOW = Object.freeze(E.fromCssColorString("#FFFAFA"))),
    (E.SPRINGGREEN = Object.freeze(E.fromCssColorString("#00FF7F"))),
    (E.STEELBLUE = Object.freeze(E.fromCssColorString("#4682B4"))),
    (E.TAN = Object.freeze(E.fromCssColorString("#D2B48C"))),
    (E.TEAL = Object.freeze(E.fromCssColorString("#008080"))),
    (E.THISTLE = Object.freeze(E.fromCssColorString("#D8BFD8"))),
    (E.TOMATO = Object.freeze(E.fromCssColorString("#FF6347"))),
    (E.TURQUOISE = Object.freeze(E.fromCssColorString("#40E0D0"))),
    (E.VIOLET = Object.freeze(E.fromCssColorString("#EE82EE"))),
    (E.WHEAT = Object.freeze(E.fromCssColorString("#F5DEB3"))),
    (E.WHITE = Object.freeze(E.fromCssColorString("#FFFFFF"))),
    (E.WHITESMOKE = Object.freeze(E.fromCssColorString("#F5F5F5"))),
    (E.YELLOW = Object.freeze(E.fromCssColorString("#FFFF00"))),
    (E.YELLOWGREEN = Object.freeze(E.fromCssColorString("#9ACD32"))),
    (E.TRANSPARENT = Object.freeze(new E(0, 0, 0, 0))),
    (e.Color = E);
});
