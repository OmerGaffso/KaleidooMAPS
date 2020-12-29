define(["exports", "./Math-fc8cecf5"], function (r, l) {
  "use strict";
  var t = {
    computePositions: function (r, t, e, a, i) {
      for (
        var n = 0.5 * r,
          o = -n,
          r = a + a,
          c = new Float64Array(3 * (i ? 2 * r : r)),
          s = 0,
          f = 0,
          u = i ? 3 * r : 0,
          h = i ? 3 * (r + a) : 3 * a,
          y = 0;
        y < a;
        y++
      ) {
        var M = (y / a) * l.CesiumMath.TWO_PI,
          m = Math.cos(M),
          v = Math.sin(M),
          d = m * e,
          M = v * e,
          m = m * t,
          v = v * t;
        (c[f + u] = d),
          (c[f + u + 1] = M),
          (c[f + u + 2] = o),
          (c[f + h] = m),
          (c[f + h + 1] = v),
          (c[f + h + 2] = n),
          (f += 3),
          i &&
            ((c[s++] = d),
            (c[s++] = M),
            (c[s++] = o),
            (c[s++] = m),
            (c[s++] = v),
            (c[s++] = n));
      }
      return c;
    },
  };
  r.CylinderGeometryLibrary = t;
});