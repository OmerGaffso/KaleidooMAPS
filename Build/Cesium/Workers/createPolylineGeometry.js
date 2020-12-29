define([
  "./when-54c2dc71",
  "./Check-6c0211bc",
  "./Math-fc8cecf5",
  "./Cartesian2-bddc1162",
  "./Transforms-d07bb42c",
  "./RuntimeError-2109023a",
  "./WebGLConstants-76bb35d1",
  "./ComponentDatatype-6d99a1ee",
  "./GeometryAttribute-be1a3386",
  "./GeometryAttributes-4fcfcf40",
  "./IndexDatatype-53503fee",
  "./IntersectionTests-8abf6dba",
  "./Plane-c8971487",
  "./VertexFormat-7572c785",
  "./arrayRemoveDuplicates-ebc732b0",
  "./ArcType-dc1c5aee",
  "./EllipsoidRhumbLine-c704bf4c",
  "./EllipsoidGeodesic-30fae80b",
  "./PolylinePipeline-fa11d71d",
  "./Color-bac25fae",
], function (Y, e, q, z, J, t, r, j, K, Q, X, a, o, y, Z, $, n, i, ee, te) {
  "use strict";
  var re = [];
  function m(e) {
    var t = (e = Y.defaultValue(e, Y.defaultValue.EMPTY_OBJECT)).positions,
      r = e.colors,
      a = Y.defaultValue(e.width, 1),
      o = Y.defaultValue(e.colorsPerVertex, !1);
    (this._positions = t),
      (this._colors = r),
      (this._width = a),
      (this._colorsPerVertex = o),
      (this._vertexFormat = y.VertexFormat.clone(
        Y.defaultValue(e.vertexFormat, y.VertexFormat.DEFAULT)
      )),
      (this._arcType = Y.defaultValue(e.arcType, $.ArcType.GEODESIC)),
      (this._granularity = Y.defaultValue(
        e.granularity,
        q.CesiumMath.RADIANS_PER_DEGREE
      )),
      (this._ellipsoid = z.Ellipsoid.clone(
        Y.defaultValue(e.ellipsoid, z.Ellipsoid.WGS84)
      )),
      (this._workerName = "createPolylineGeometry");
    t = 1 + t.length * z.Cartesian3.packedLength;
    (t += Y.defined(r) ? 1 + r.length * te.Color.packedLength : 1),
      (this.packedLength =
        t + z.Ellipsoid.packedLength + y.VertexFormat.packedLength + 4);
  }
  m.pack = function (e, t, r) {
    var a;
    r = Y.defaultValue(r, 0);
    var o = e._positions,
      n = o.length;
    for (t[r++] = n, a = 0; a < n; ++a, r += z.Cartesian3.packedLength)
      z.Cartesian3.pack(o[a], t, r);
    var i = e._colors,
      n = Y.defined(i) ? i.length : 0;
    for (t[r++] = n, a = 0; a < n; ++a, r += te.Color.packedLength)
      te.Color.pack(i[a], t, r);
    return (
      z.Ellipsoid.pack(e._ellipsoid, t, r),
      (r += z.Ellipsoid.packedLength),
      y.VertexFormat.pack(e._vertexFormat, t, r),
      (r += y.VertexFormat.packedLength),
      (t[r++] = e._width),
      (t[r++] = e._colorsPerVertex ? 1 : 0),
      (t[r++] = e._arcType),
      (t[r] = e._granularity),
      t
    );
  };
  var f = z.Ellipsoid.clone(z.Ellipsoid.UNIT_SPHERE),
    h = new y.VertexFormat(),
    C = {
      positions: void 0,
      colors: void 0,
      ellipsoid: f,
      vertexFormat: h,
      width: void 0,
      colorsPerVertex: void 0,
      arcType: void 0,
      granularity: void 0,
    };
  m.unpack = function (e, t, r) {
    t = Y.defaultValue(t, 0);
    for (
      var a = e[t++], o = new Array(a), n = 0;
      n < a;
      ++n, t += z.Cartesian3.packedLength
    )
      o[n] = z.Cartesian3.unpack(e, t);
    var i = 0 < (a = e[t++]) ? new Array(a) : void 0;
    for (n = 0; n < a; ++n, t += te.Color.packedLength)
      i[n] = te.Color.unpack(e, t);
    var l = z.Ellipsoid.unpack(e, t, f);
    t += z.Ellipsoid.packedLength;
    var s = y.VertexFormat.unpack(e, t, h);
    t += y.VertexFormat.packedLength;
    var p = e[t++],
      c = 1 === e[t++],
      d = e[t++],
      u = e[t];
    return Y.defined(r)
      ? ((r._positions = o),
        (r._colors = i),
        (r._ellipsoid = z.Ellipsoid.clone(l, r._ellipsoid)),
        (r._vertexFormat = y.VertexFormat.clone(s, r._vertexFormat)),
        (r._width = p),
        (r._colorsPerVertex = c),
        (r._arcType = d),
        (r._granularity = u),
        r)
      : ((C.positions = o),
        (C.colors = i),
        (C.width = p),
        (C.colorsPerVertex = c),
        (C.arcType = d),
        (C.granularity = u),
        new m(C));
  };
  var ae = new z.Cartesian3(),
    oe = new z.Cartesian3(),
    ne = new z.Cartesian3(),
    ie = new z.Cartesian3();
  return (
    (m.createGeometry = function (e) {
      var t = e._width,
        r = e._vertexFormat,
        a = e._colors,
        o = e._colorsPerVertex,
        n = e._arcType,
        i = e._granularity,
        l = e._ellipsoid,
        s = Z.arrayRemoveDuplicates(e._positions, z.Cartesian3.equalsEpsilon),
        p = s.length;
      if (!(p < 2 || t <= 0)) {
        if (n === $.ArcType.GEODESIC || n === $.ArcType.RHUMB) {
          var c,
            d =
              n === $.ArcType.GEODESIC
                ? ((c = q.CesiumMath.chordLength(i, l.maximumRadius)),
                  ee.PolylinePipeline.numberOfPoints)
                : ((c = i), ee.PolylinePipeline.numberOfPointsRhumbLine),
            u = ee.PolylinePipeline.extractHeights(s, l);
          if (Y.defined(a)) {
            for (var y = 1, m = 0; m < p - 1; ++m) y += d(s[m], s[m + 1], c);
            var f = new Array(y),
              h = 0;
            for (m = 0; m < p - 1; ++m) {
              var C = s[m],
                v = s[m + 1],
                g = a[m],
                b = d(C, v, c);
              if (o && m < y)
                for (
                  var _ = (function (e, t, r) {
                      var a = re;
                      a.length = r;
                      var o = e.red,
                        n = e.green,
                        i = e.blue,
                        l = e.alpha,
                        s = t.red,
                        p = t.green,
                        c = t.blue,
                        d = t.alpha;
                      if (te.Color.equals(e, t)) {
                        for (h = 0; h < r; h++) a[h] = te.Color.clone(e);
                        return a;
                      }
                      for (
                        var u = (s - o) / r,
                          y = (p - n) / r,
                          m = (c - i) / r,
                          f = (d - l) / r,
                          h = 0;
                        h < r;
                        h++
                      )
                        a[h] = new te.Color(
                          o + h * u,
                          n + h * y,
                          i + h * m,
                          l + h * f
                        );
                      return a;
                    })(g, a[m + 1], b),
                    A = _.length,
                    E = 0;
                  E < A;
                  ++E
                )
                  f[h++] = _[E];
              else for (E = 0; E < b; ++E) f[h++] = te.Color.clone(g);
            }
            (f[h] = te.Color.clone(a[a.length - 1])), (a = f), (re.length = 0);
          }
          s =
            n === $.ArcType.GEODESIC
              ? ee.PolylinePipeline.generateCartesianArc({
                  positions: s,
                  minDistance: c,
                  ellipsoid: l,
                  height: u,
                })
              : ee.PolylinePipeline.generateCartesianRhumbArc({
                  positions: s,
                  granularity: c,
                  ellipsoid: l,
                  height: u,
                });
        }
        var P,
          w,
          T,
          l = 4 * (p = s.length) - 4,
          x = new Float64Array(3 * l),
          k = new Float64Array(3 * l),
          D = new Float64Array(3 * l),
          V = new Float32Array(2 * l),
          L = r.st ? new Float32Array(2 * l) : void 0,
          F = Y.defined(a) ? new Uint8Array(4 * l) : void 0,
          G = 0,
          O = 0,
          R = 0,
          I = 0;
        for (E = 0; E < p; ++E) {
          0 === E
            ? ((P = ae),
              z.Cartesian3.subtract(s[0], s[1], P),
              z.Cartesian3.add(s[0], P, P))
            : (P = s[E - 1]),
            z.Cartesian3.clone(P, ne),
            z.Cartesian3.clone(s[E], oe),
            E === p - 1
              ? ((P = ae),
                z.Cartesian3.subtract(s[p - 1], s[p - 2], P),
                z.Cartesian3.add(s[p - 1], P, P))
              : (P = s[E + 1]),
            z.Cartesian3.clone(P, ie),
            Y.defined(F) &&
              ((w = 0 === E || o ? a[E] : a[E - 1]), E !== p - 1 && (T = a[E]));
          for (var S = E === p - 1 ? 2 : 4, B = 0 === E ? 2 : 0; B < S; ++B) {
            z.Cartesian3.pack(oe, x, G),
              z.Cartesian3.pack(ne, k, G),
              z.Cartesian3.pack(ie, D, G),
              (G += 3);
            var U = B - 2 < 0 ? -1 : 1;
            (V[O++] = (B % 2) * 2 - 1),
              (V[O++] = U * t),
              r.st &&
                ((L[R++] = E / (p - 1)), (L[R++] = Math.max(V[O - 2], 0))),
              Y.defined(F) &&
                ((U = B < 2 ? w : T),
                (F[I++] = te.Color.floatToByte(U.red)),
                (F[I++] = te.Color.floatToByte(U.green)),
                (F[I++] = te.Color.floatToByte(U.blue)),
                (F[I++] = te.Color.floatToByte(U.alpha)));
          }
        }
        u = new Q.GeometryAttributes();
        (u.position = new K.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: x,
        })),
          (u.prevPosition = new K.GeometryAttribute({
            componentDatatype: j.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            values: k,
          })),
          (u.nextPosition = new K.GeometryAttribute({
            componentDatatype: j.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            values: D,
          })),
          (u.expandAndWidth = new K.GeometryAttribute({
            componentDatatype: j.ComponentDatatype.FLOAT,
            componentsPerAttribute: 2,
            values: V,
          })),
          r.st &&
            (u.st = new K.GeometryAttribute({
              componentDatatype: j.ComponentDatatype.FLOAT,
              componentsPerAttribute: 2,
              values: L,
            })),
          Y.defined(F) &&
            (u.color = new K.GeometryAttribute({
              componentDatatype: j.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 4,
              values: F,
              normalize: !0,
            }));
        var N = X.IndexDatatype.createTypedArray(l, 6 * p - 6),
          M = 0,
          H = 0,
          W = p - 1;
        for (E = 0; E < W; ++E)
          (N[H++] = M),
            (N[H++] = M + 2),
            (N[H++] = M + 1),
            (N[H++] = M + 1),
            (N[H++] = M + 2),
            (N[H++] = M + 3),
            (M += 4);
        return new K.Geometry({
          attributes: u,
          indices: N,
          primitiveType: K.PrimitiveType.TRIANGLES,
          boundingSphere: J.BoundingSphere.fromPoints(s),
          geometryType: K.GeometryType.POLYLINES,
        });
      }
    }),
    function (e, t) {
      return (
        Y.defined(t) && (e = m.unpack(e, t)),
        (e._ellipsoid = z.Ellipsoid.clone(e._ellipsoid)),
        m.createGeometry(e)
      );
    }
  );
});