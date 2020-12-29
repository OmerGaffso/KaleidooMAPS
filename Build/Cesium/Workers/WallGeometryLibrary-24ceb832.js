define([
  "exports",
  "./when-54c2dc71",
  "./Math-fc8cecf5",
  "./Cartesian2-bddc1162",
  "./arrayRemoveDuplicates-ebc732b0",
  "./PolylinePipeline-fa11d71d",
], function (e, P, A, C, w, m) {
  "use strict";
  var i = {};
  var b = new C.Cartographic(),
    M = new C.Cartographic();
  function E(e, i, t, r) {
    var a = (i = w.arrayRemoveDuplicates(i, C.Cartesian3.equalsEpsilon)).length;
    if (!(a < 2)) {
      var n = P.defined(r),
        o = P.defined(t),
        l = new Array(a),
        s = new Array(a),
        h = new Array(a),
        g = i[0];
      l[0] = g;
      var c = e.cartesianToCartographic(g, b);
      o && (c.height = t[0]), (s[0] = c.height), (h[0] = n ? r[0] : 0);
      for (var p, u, d = s[0] === h[0], v = 1, y = 1; y < a; ++y) {
        var f = i[y],
          m = e.cartesianToCartographic(f, M);
        o && (m.height = t[y]),
          (d = d && 0 === m.height),
          (p = c),
          (u = m),
          A.CesiumMath.equalsEpsilon(
            p.latitude,
            u.latitude,
            A.CesiumMath.EPSILON10
          ) &&
          A.CesiumMath.equalsEpsilon(
            p.longitude,
            u.longitude,
            A.CesiumMath.EPSILON10
          )
            ? c.height < m.height && (s[v - 1] = m.height)
            : ((l[v] = f),
              (s[v] = m.height),
              (h[v] = n ? r[y] : 0),
              (d = d && s[v] === h[v]),
              C.Cartographic.clone(m, c),
              ++v);
      }
      if (!(d || v < 2))
        return (
          (l.length = v),
          (s.length = v),
          (h.length = v),
          { positions: l, topHeights: s, bottomHeights: h }
        );
    }
  }
  var F = new Array(2),
    H = new Array(2),
    L = {
      positions: void 0,
      height: void 0,
      granularity: void 0,
      ellipsoid: void 0,
    };
  (i.computePositions = function (e, i, t, r, a, n) {
    var o = E(e, i, t, r);
    if (P.defined(o)) {
      (i = o.positions), (t = o.topHeights), (r = o.bottomHeights);
      var l,
        s,
        h = i.length,
        o = h - 2,
        g = A.CesiumMath.chordLength(a, e.maximumRadius),
        c = L;
      if (((c.minDistance = g), (c.ellipsoid = e), n)) {
        for (var p = 0, u = 0; u < h - 1; u++)
          p += m.PolylinePipeline.numberOfPoints(i[u], i[u + 1], g) + 1;
        (l = new Float64Array(3 * p)), (s = new Float64Array(3 * p));
        var d = F,
          v = H;
        (c.positions = d), (c.height = v);
        var y = 0;
        for (u = 0; u < h - 1; u++) {
          (d[0] = i[u]), (d[1] = i[u + 1]), (v[0] = t[u]), (v[1] = t[u + 1]);
          var f = m.PolylinePipeline.generateArc(c);
          l.set(f, y),
            (v[0] = r[u]),
            (v[1] = r[u + 1]),
            s.set(m.PolylinePipeline.generateArc(c), y),
            (y += f.length);
        }
      } else
        (c.positions = i),
          (c.height = t),
          (l = new Float64Array(m.PolylinePipeline.generateArc(c))),
          (c.height = r),
          (s = new Float64Array(m.PolylinePipeline.generateArc(c)));
      return { bottomPositions: s, topPositions: l, numCorners: o };
    }
  }),
    (e.WallGeometryLibrary = i);
});
