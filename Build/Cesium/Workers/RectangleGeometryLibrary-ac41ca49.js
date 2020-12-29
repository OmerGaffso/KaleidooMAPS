define([
  "exports",
  "./when-54c2dc71",
  "./Check-6c0211bc",
  "./Math-fc8cecf5",
  "./Cartesian2-bddc1162",
  "./Transforms-d07bb42c",
  "./GeometryAttribute-be1a3386",
], function (t, S, n, X, Y, a, l) {
  "use strict";
  var w = Math.cos,
    M = Math.sin,
    m = Math.sqrt,
    r = {
      computePosition: function (t, n, a, r, e, o, s) {
        var i = n.radiiSquared,
          c = t.nwCorner,
          g = t.boundingRectangle,
          h = c.latitude - t.granYCos * r + e * t.granXSin,
          u = w(h),
          C = M(h),
          l = i.z * C,
          d = c.longitude + r * t.granYSin + e * t.granXCos,
          n = u * w(d),
          c = u * M(d),
          u = i.x * n,
          i = i.y * c,
          C = m(u * n + i * c + l * C);
        (o.x = u / C),
          (o.y = i / C),
          (o.z = l / C),
          a &&
            ((a = t.stNwCorner),
            S.defined(a)
              ? ((h = a.latitude - t.stGranYCos * r + e * t.stGranXSin),
                (d = a.longitude + r * t.stGranYSin + e * t.stGranXCos),
                (s.x = (d - t.stWest) * t.lonScalar),
                (s.y = (h - t.stSouth) * t.latScalar))
              : ((s.x = (d - g.west) * t.lonScalar),
                (s.y = (h - g.south) * t.latScalar)));
      },
    },
    d = new l.Matrix2(),
    p = new Y.Cartesian3(),
    G = new Y.Cartographic(),
    b = new Y.Cartesian3(),
    f = new a.GeographicProjection();
  function x(t, n, a, r, e, o, s) {
    var i = Math.cos(n),
      c = r * i,
      g = a * i,
      h = Math.sin(n),
      u = r * h,
      C = a * h;
    (p = f.project(t, p)), (p = Y.Cartesian3.subtract(p, b, p));
    i = l.Matrix2.fromRotation(n, d);
    (p = l.Matrix2.multiplyByVector(i, p, p)),
      (p = Y.Cartesian3.add(p, b, p)),
      --o,
      --s;
    (r = (t = f.unproject(p, t)).latitude),
      (a = r + o * C),
      (h = r - c * s),
      (n = r - c * s + o * C),
      (i = Math.max(r, a, h, n)),
      (r = Math.min(r, a, h, n)),
      (a = t.longitude),
      (h = a + o * g),
      (n = a + s * u),
      (o = a + s * u + o * g);
    return {
      north: i,
      south: r,
      east: Math.max(a, h, n, o),
      west: Math.min(a, h, n, o),
      granYCos: c,
      granYSin: u,
      granXCos: g,
      granXSin: C,
      nwCorner: t,
    };
  }
  (r.computeOptions = function (t, n, a, r, e, o, s) {
    var i = t.east,
      c = t.west,
      g = t.north,
      h = t.south,
      u = !1,
      C = !1;
    g === X.CesiumMath.PI_OVER_TWO && (u = !0),
      h === -X.CesiumMath.PI_OVER_TWO && (C = !0);
    var l,
      d = g - h,
      S =
        (w = i < c ? X.CesiumMath.TWO_PI - c + i : i - c) /
        ((l = Math.ceil(w / n) + 1) - 1),
      w = d / ((M = Math.ceil(d / n) + 1) - 1),
      d = Y.Rectangle.northwest(t, o),
      n = Y.Rectangle.center(t, G);
    (0 === a && 0 === r) ||
      (n.longitude < d.longitude && (n.longitude += X.CesiumMath.TWO_PI),
      (b = f.project(n, b)));
    var M,
      o = w,
      n = S,
      e = Y.Rectangle.clone(t, e),
      C = {
        granYCos: o,
        granYSin: 0,
        granXCos: n,
        granXSin: 0,
        nwCorner: d,
        boundingRectangle: e,
        width: l,
        height: M,
        northCap: u,
        southCap: C,
      };
    return (
      0 !== a &&
        ((g = (d = x(d, a, S, w, 0, l, M)).north),
        (h = d.south),
        (i = d.east),
        (c = d.west),
        (C.granYCos = d.granYCos),
        (C.granYSin = d.granYSin),
        (C.granXCos = d.granXCos),
        (C.granXSin = d.granXSin),
        (e.north = g),
        (e.south = h),
        (e.east = i),
        (e.west = c)),
      0 !== r &&
        ((a -= r),
        (M = x((s = Y.Rectangle.northwest(e, s)), a, S, w, 0, l, M)),
        (C.stGranYCos = M.granYCos),
        (C.stGranXCos = M.granXCos),
        (C.stGranYSin = M.granYSin),
        (C.stGranXSin = M.granXSin),
        (C.stNwCorner = s),
        (C.stWest = M.west),
        (C.stSouth = M.south)),
      C
    );
  }),
    (t.RectangleGeometryLibrary = r);
});
