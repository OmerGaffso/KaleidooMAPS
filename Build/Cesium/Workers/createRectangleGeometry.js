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
  "./AttributeCompression-9fc99391",
  "./GeometryPipeline-c2d75081",
  "./EncodedCartesian3-4df2eabb",
  "./IndexDatatype-53503fee",
  "./IntersectionTests-8abf6dba",
  "./Plane-c8971487",
  "./GeometryOffsetAttribute-7350d9af",
  "./VertexFormat-7572c785",
  "./GeometryInstance-161eaba2",
  "./EllipsoidRhumbLine-c704bf4c",
  "./PolygonPipeline-b9585f01",
  "./RectangleGeometryLibrary-ac41ca49",
], function (
  Q,
  t,
  W,
  J,
  N,
  e,
  a,
  j,
  Z,
  r,
  n,
  K,
  i,
  $,
  o,
  s,
  tt,
  et,
  at,
  l,
  rt,
  S
) {
  "use strict";
  var nt = new J.Cartesian3(),
    it = new J.Cartesian3(),
    ot = new J.Cartesian3(),
    st = new J.Cartesian3(),
    p = new J.Rectangle(),
    I = new J.Cartesian2(),
    d = new N.BoundingSphere(),
    g = new N.BoundingSphere();
  function lt(t, e) {
    var a = new Z.Geometry({
      attributes: new r.GeometryAttributes(),
      primitiveType: Z.PrimitiveType.TRIANGLES,
    });
    return (
      (a.attributes.position = new Z.GeometryAttribute({
        componentDatatype: j.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: e.positions,
      })),
      t.normal &&
        (a.attributes.normal = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: e.normals,
        })),
      t.tangent &&
        (a.attributes.tangent = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: e.tangents,
        })),
      t.bitangent &&
        (a.attributes.bitangent = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: e.bitangents,
        })),
      a
    );
  }
  var ut = new J.Cartesian3(),
    ct = new J.Cartesian3();
  function mt(t, e) {
    var a = t._vertexFormat,
      r = t._ellipsoid,
      n = e.height,
      i = e.width,
      o = e.northCap,
      s = e.southCap,
      l = 0,
      u = n,
      c = n,
      t = 0;
    o && (--c, (t += l = 1)), s && (--u, --c, (t += 1)), (t += i * c);
    for (
      var m = a.position ? new Float64Array(3 * t) : void 0,
        p = a.st ? new Float32Array(2 * t) : void 0,
        d = 0,
        g = 0,
        y = nt,
        f = I,
        h = Number.MAX_VALUE,
        b = Number.MAX_VALUE,
        v = -Number.MAX_VALUE,
        _ = -Number.MAX_VALUE,
        A = l;
      A < u;
      ++A
    )
      for (var x = 0; x < i; ++x)
        S.RectangleGeometryLibrary.computePosition(e, r, a.st, A, x, y, f),
          (m[d++] = y.x),
          (m[d++] = y.y),
          (m[d++] = y.z),
          a.st &&
            ((p[g++] = f.x),
            (p[g++] = f.y),
            (h = Math.min(h, f.x)),
            (b = Math.min(b, f.y)),
            (v = Math.max(v, f.x)),
            (_ = Math.max(_, f.y)));
    if (
      (o &&
        (S.RectangleGeometryLibrary.computePosition(e, r, a.st, 0, 0, y, f),
        (m[d++] = y.x),
        (m[d++] = y.y),
        (m[d++] = y.z),
        a.st &&
          ((p[g++] = f.x),
          (p[g++] = f.y),
          (h = f.x),
          (b = f.y),
          (v = f.x),
          (_ = f.y))),
      s &&
        (S.RectangleGeometryLibrary.computePosition(e, r, a.st, n - 1, 0, y, f),
        (m[d++] = y.x),
        (m[d++] = y.y),
        (m[d] = y.z),
        a.st &&
          ((p[g++] = f.x),
          (p[g] = f.y),
          (h = Math.min(h, f.x)),
          (b = Math.min(b, f.y)),
          (v = Math.max(v, f.x)),
          (_ = Math.max(_, f.y)))),
      a.st && (h < 0 || b < 0 || 1 < v || 1 < _))
    )
      for (var w = 0; w < p.length; w += 2)
        (p[w] = (p[w] - h) / (v - h)), (p[w + 1] = (p[w + 1] - b) / (_ - b));
    (l = (function (t, e, a, r) {
      var n = t.length,
        i = e.normal ? new Float32Array(n) : void 0,
        o = e.tangent ? new Float32Array(n) : void 0,
        s = e.bitangent ? new Float32Array(n) : void 0,
        l = 0,
        u = st,
        c = ot,
        m = it;
      if (e.normal || e.tangent || e.bitangent)
        for (var p = 0; p < n; p += 3) {
          var d = J.Cartesian3.fromArray(t, p, nt),
            g = l + 1,
            y = l + 2,
            m = a.geodeticSurfaceNormal(d, m);
          (e.tangent || e.bitangent) &&
            (J.Cartesian3.cross(J.Cartesian3.UNIT_Z, m, c),
            N.Matrix3.multiplyByVector(r, c, c),
            J.Cartesian3.normalize(c, c),
            e.bitangent &&
              J.Cartesian3.normalize(J.Cartesian3.cross(m, c, u), u)),
            e.normal && ((i[l] = m.x), (i[g] = m.y), (i[y] = m.z)),
            e.tangent && ((o[l] = c.x), (o[g] = c.y), (o[y] = c.z)),
            e.bitangent && ((s[l] = u.x), (s[g] = u.y), (s[y] = u.z)),
            (l += 3);
        }
      return lt(e, { positions: t, normals: i, tangents: o, bitangents: s });
    })(m, a, r, e.tangentRotationMatrix)),
      (n = 6 * (i - 1) * (c - 1));
    o && (n += 3 * (i - 1)), s && (n += 3 * (i - 1));
    for (
      var C = $.IndexDatatype.createTypedArray(t, n), R = 0, E = 0, F = 0;
      F < c - 1;
      ++F
    ) {
      for (var G = 0; G < i - 1; ++G) {
        var P = R + i,
          V = P + 1,
          L = R + 1;
        (C[E++] = R),
          (C[E++] = P),
          (C[E++] = L),
          (C[E++] = L),
          (C[E++] = P),
          (C[E++] = V),
          ++R;
      }
      ++R;
    }
    if (o || s) {
      var D,
        M,
        T = t - 1,
        O = t - 1;
      if ((o && s && (T = t - 2), (R = 0), o))
        for (F = 0; F < i - 1; F++)
          (M = (D = R) + 1), (C[E++] = T), (C[E++] = D), (C[E++] = M), ++R;
      if (s)
        for (R = (c - 1) * i, F = 0; F < i - 1; F++)
          (M = (D = R) + 1), (C[E++] = D), (C[E++] = O), (C[E++] = M), ++R;
    }
    return (
      (l.indices = C),
      a.st &&
        (l.attributes.st = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.FLOAT,
          componentsPerAttribute: 2,
          values: p,
        })),
      l
    );
  }
  function pt(t, e, a, r, n) {
    return (
      (t[e++] = r[a]),
      (t[e++] = r[a + 1]),
      (t[e++] = r[a + 2]),
      (t[e++] = n[a]),
      (t[e++] = n[a + 1]),
      (t[e] = n[a + 2]),
      t
    );
  }
  function dt(t, e, a, r) {
    return (
      (t[e++] = r[a]),
      (t[e++] = r[a + 1]),
      (t[e++] = r[a]),
      (t[e] = r[a + 1]),
      t
    );
  }
  var gt = new et.VertexFormat();
  function y(t, e) {
    var a = t._shadowVolume,
      r = t._offsetAttribute,
      n = t._vertexFormat,
      i = t._extrudedHeight,
      o = t._surfaceHeight,
      s = t._ellipsoid,
      l = e.height,
      u = e.width;
    a &&
      (((b = et.VertexFormat.clone(n, gt)).normal = !0), (t._vertexFormat = b));
    var c = mt(t, e);
    a && (t._vertexFormat = n);
    var m = rt.PolygonPipeline.scaleToGeodeticHeight(
        c.attributes.position.values,
        o,
        s,
        !1
      ),
      p = 2 * (U = (m = new Float64Array(m)).length),
      d = new Float64Array(p);
    d.set(m);
    var g = rt.PolygonPipeline.scaleToGeodeticHeight(
      c.attributes.position.values,
      i,
      s
    );
    d.set(g, U), (c.attributes.position.values = d);
    var y,
      f,
      h,
      b = n.normal ? new Float32Array(p) : void 0,
      t = n.tangent ? new Float32Array(p) : void 0,
      o = n.bitangent ? new Float32Array(p) : void 0,
      i = n.st ? new Float32Array((p / 3) * 2) : void 0;
    if (n.normal) {
      for (f = c.attributes.normal.values, b.set(f), _ = 0; _ < U; _++)
        f[_] = -f[_];
      b.set(f, U), (c.attributes.normal.values = b);
    }
    if (a) {
      (f = c.attributes.normal.values),
        n.normal || (c.attributes.normal = void 0);
      for (var v = new Float32Array(p), _ = 0; _ < U; _++) f[_] = -f[_];
      v.set(f, U),
        (c.attributes.extrudeDirection = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: v,
        }));
    }
    d = Q.defined(r);
    if (
      (d &&
        ((b = (U / 3) * 2),
        (v = new Uint8Array(b)),
        (v =
          r === tt.GeometryOffsetAttribute.TOP
            ? tt.arrayFill(v, 1, 0, b / 2)
            : ((h = r === tt.GeometryOffsetAttribute.NONE ? 0 : 1),
              tt.arrayFill(v, h))),
        (c.attributes.applyOffset = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.UNSIGNED_BYTE,
          componentsPerAttribute: 1,
          values: v,
        }))),
      n.tangent)
    ) {
      var A = c.attributes.tangent.values;
      for (t.set(A), _ = 0; _ < U; _++) A[_] = -A[_];
      t.set(A, U), (c.attributes.tangent.values = t);
    }
    n.bitangent &&
      ((E = c.attributes.bitangent.values),
      o.set(E),
      o.set(E, U),
      (c.attributes.bitangent.values = o)),
      n.st &&
        ((y = c.attributes.st.values),
        i.set(y),
        i.set(y, (U / 3) * 2),
        (c.attributes.st.values = i));
    var x = c.indices,
      w = x.length,
      C = U / 3,
      R = $.IndexDatatype.createTypedArray(p / 3, 2 * w);
    for (R.set(x), _ = 0; _ < w; _ += 3)
      (R[_ + w] = x[_ + 2] + C),
        (R[_ + 1 + w] = x[_ + 1] + C),
        (R[_ + 2 + w] = x[_] + C);
    c.indices = R;
    var t = e.northCap,
      E = e.southCap,
      o = l,
      i = 2,
      p = 0,
      e = 4,
      l = 4;
    t && (--i, --o, (p += 1), (e -= 2), --l),
      E && (--i, --o, (p += 1), (e -= 2), --l);
    var l = 2 * ((p += i * u + 2 * o - e) + l),
      F = new Float64Array(3 * l),
      G = a ? new Float32Array(3 * l) : void 0,
      P = d ? new Uint8Array(l) : void 0,
      V = n.st ? new Float32Array(2 * l) : void 0,
      L = r === tt.GeometryOffsetAttribute.TOP;
    d &&
      !L &&
      ((h = r === tt.GeometryOffsetAttribute.ALL ? 1 : 0),
      (P = tt.arrayFill(P, h)));
    var D = 0,
      M = 0,
      T = 0,
      O = 0,
      N = u * o;
    for (_ = 0; _ < N; _ += u)
      (F = pt(F, D, (I = 3 * _), m, g)),
        (D += 6),
        n.st && ((V = dt(V, M, 2 * _, y)), (M += 4)),
        a &&
          ((T += 3), (G[T++] = f[I]), (G[T++] = f[I + 1]), (G[T++] = f[I + 2])),
        L && ((P[O++] = 1), (O += 1));
    if (E) {
      var S = t ? 1 + N : N,
        I = 3 * S;
      for (_ = 0; _ < 2; _++)
        (F = pt(F, D, I, m, g)),
          (D += 6),
          n.st && ((V = dt(V, M, 2 * S, y)), (M += 4)),
          a &&
            ((T += 3),
            (G[T++] = f[I]),
            (G[T++] = f[I + 1]),
            (G[T++] = f[I + 2])),
          L && ((P[O++] = 1), (O += 1));
    } else
      for (_ = N - u; _ < N; _++)
        (F = pt(F, D, (I = 3 * _), m, g)),
          (D += 6),
          n.st && ((V = dt(V, M, 2 * _, y)), (M += 4)),
          a &&
            ((T += 3),
            (G[T++] = f[I]),
            (G[T++] = f[I + 1]),
            (G[T++] = f[I + 2])),
          L && ((P[O++] = 1), (O += 1));
    for (_ = N - 1; 0 < _; _ -= u)
      (F = pt(F, D, (I = 3 * _), m, g)),
        (D += 6),
        n.st && ((V = dt(V, M, 2 * _, y)), (M += 4)),
        a &&
          ((T += 3), (G[T++] = f[I]), (G[T++] = f[I + 1]), (G[T++] = f[I + 2])),
        L && ((P[O++] = 1), (O += 1));
    if (t) {
      var k = N;
      for (I = 3 * k, _ = 0; _ < 2; _++)
        (F = pt(F, D, I, m, g)),
          (D += 6),
          n.st && ((V = dt(V, M, 2 * k, y)), (M += 4)),
          a &&
            ((T += 3),
            (G[T++] = f[I]),
            (G[T++] = f[I + 1]),
            (G[T++] = f[I + 2])),
          L && ((P[O++] = 1), (O += 1));
    } else
      for (_ = u - 1; 0 <= _; _--)
        (F = pt(F, D, (I = 3 * _), m, g)),
          (D += 6),
          n.st && ((V = dt(V, M, 2 * _, y)), (M += 4)),
          a &&
            ((T += 3),
            (G[T++] = f[I]),
            (G[T++] = f[I + 1]),
            (G[T++] = f[I + 2])),
          L && ((P[O++] = 1), (O += 1));
    s = (function (t, e, a) {
      var r = t.length,
        n = e.normal ? new Float32Array(r) : void 0,
        i = e.tangent ? new Float32Array(r) : void 0,
        o = e.bitangent ? new Float32Array(r) : void 0,
        s = 0,
        l = 0,
        u = 0,
        c = !0,
        m = st,
        p = ot,
        d = it;
      if (e.normal || e.tangent || e.bitangent)
        for (var g = 0; g < r; g += 6) {
          var y,
            f = J.Cartesian3.fromArray(t, g, nt),
            h = J.Cartesian3.fromArray(t, (g + 6) % r, ut);
          c &&
            ((y = J.Cartesian3.fromArray(t, (g + 3) % r, ct)),
            J.Cartesian3.subtract(h, f, h),
            J.Cartesian3.subtract(y, f, y),
            (d = J.Cartesian3.normalize(J.Cartesian3.cross(y, h, d), d)),
            (c = !1)),
            J.Cartesian3.equalsEpsilon(h, f, W.CesiumMath.EPSILON10) &&
              (c = !0),
            (e.tangent || e.bitangent) &&
              ((m = a.geodeticSurfaceNormal(f, m)),
              e.tangent &&
                (p = J.Cartesian3.normalize(J.Cartesian3.cross(m, d, p), p))),
            e.normal &&
              ((n[s++] = d.x),
              (n[s++] = d.y),
              (n[s++] = d.z),
              (n[s++] = d.x),
              (n[s++] = d.y),
              (n[s++] = d.z)),
            e.tangent &&
              ((i[l++] = p.x),
              (i[l++] = p.y),
              (i[l++] = p.z),
              (i[l++] = p.x),
              (i[l++] = p.y),
              (i[l++] = p.z)),
            e.bitangent &&
              ((o[u++] = m.x),
              (o[u++] = m.y),
              (o[u++] = m.z),
              (o[u++] = m.x),
              (o[u++] = m.y),
              (o[u++] = m.z));
        }
      return lt(e, { positions: t, normals: n, tangents: i, bitangents: o });
    })(F, n, s);
    n.st &&
      (s.attributes.st = new Z.GeometryAttribute({
        componentDatatype: j.ComponentDatatype.FLOAT,
        componentsPerAttribute: 2,
        values: V,
      })),
      a &&
        (s.attributes.extrudeDirection = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: G,
        })),
      d &&
        (s.attributes.applyOffset = new Z.GeometryAttribute({
          componentDatatype: j.ComponentDatatype.UNSIGNED_BYTE,
          componentsPerAttribute: 1,
          values: P,
        }));
    var H,
      z,
      B = $.IndexDatatype.createTypedArray(l, 6 * p),
      U = F.length / 3,
      Y = 0;
    for (_ = 0; _ < U - 1; _ += 2) {
      z = ((H = _) + 2) % U;
      var q = J.Cartesian3.fromArray(F, 3 * H, ut),
        X = J.Cartesian3.fromArray(F, 3 * z, ct);
      J.Cartesian3.equalsEpsilon(q, X, W.CesiumMath.EPSILON10) ||
        ((X = (2 + (q = (H + 1) % U)) % U),
        (B[Y++] = H),
        (B[Y++] = q),
        (B[Y++] = z),
        (B[Y++] = z),
        (B[Y++] = q),
        (B[Y++] = X));
    }
    return (
      (s.indices = B),
      (s = K.GeometryPipeline.combineInstances([
        new at.GeometryInstance({ geometry: c }),
        new at.GeometryInstance({ geometry: s }),
      ]))[0]
    );
  }
  var u = [
      new J.Cartesian3(),
      new J.Cartesian3(),
      new J.Cartesian3(),
      new J.Cartesian3(),
    ],
    f = new J.Cartographic(),
    h = new J.Cartographic();
  function c(t, e, a, r, n) {
    if (0 === a) return J.Rectangle.clone(t, n);
    var i = S.RectangleGeometryLibrary.computeOptions(t, e, a, 0, p, f),
      t = i.height,
      e = i.width,
      a = u;
    return (
      S.RectangleGeometryLibrary.computePosition(i, r, !1, 0, 0, a[0]),
      S.RectangleGeometryLibrary.computePosition(i, r, !1, 0, e - 1, a[1]),
      S.RectangleGeometryLibrary.computePosition(i, r, !1, t - 1, 0, a[2]),
      S.RectangleGeometryLibrary.computePosition(i, r, !1, t - 1, e - 1, a[3]),
      J.Rectangle.fromCartesianArray(a, r, n)
    );
  }
  function b(t) {
    var e = (t = Q.defaultValue(t, Q.defaultValue.EMPTY_OBJECT)).rectangle,
      a = Q.defaultValue(t.height, 0),
      r = Q.defaultValue(t.extrudedHeight, a);
    (this._rectangle = J.Rectangle.clone(e)),
      (this._granularity = Q.defaultValue(
        t.granularity,
        W.CesiumMath.RADIANS_PER_DEGREE
      )),
      (this._ellipsoid = J.Ellipsoid.clone(
        Q.defaultValue(t.ellipsoid, J.Ellipsoid.WGS84)
      )),
      (this._surfaceHeight = Math.max(a, r)),
      (this._rotation = Q.defaultValue(t.rotation, 0)),
      (this._stRotation = Q.defaultValue(t.stRotation, 0)),
      (this._vertexFormat = et.VertexFormat.clone(
        Q.defaultValue(t.vertexFormat, et.VertexFormat.DEFAULT)
      )),
      (this._extrudedHeight = Math.min(a, r)),
      (this._shadowVolume = Q.defaultValue(t.shadowVolume, !1)),
      (this._workerName = "createRectangleGeometry"),
      (this._offsetAttribute = t.offsetAttribute),
      (this._rotatedRectangle = void 0),
      (this._textureCoordinateRotationPoints = void 0);
  }
  (b.packedLength =
    J.Rectangle.packedLength +
    J.Ellipsoid.packedLength +
    et.VertexFormat.packedLength +
    7),
    (b.pack = function (t, e, a) {
      return (
        (a = Q.defaultValue(a, 0)),
        J.Rectangle.pack(t._rectangle, e, a),
        (a += J.Rectangle.packedLength),
        J.Ellipsoid.pack(t._ellipsoid, e, a),
        (a += J.Ellipsoid.packedLength),
        et.VertexFormat.pack(t._vertexFormat, e, a),
        (a += et.VertexFormat.packedLength),
        (e[a++] = t._granularity),
        (e[a++] = t._surfaceHeight),
        (e[a++] = t._rotation),
        (e[a++] = t._stRotation),
        (e[a++] = t._extrudedHeight),
        (e[a++] = t._shadowVolume ? 1 : 0),
        (e[a] = Q.defaultValue(t._offsetAttribute, -1)),
        e
      );
    });
  var v = new J.Rectangle(),
    _ = J.Ellipsoid.clone(J.Ellipsoid.UNIT_SPHERE),
    A = {
      rectangle: v,
      ellipsoid: _,
      vertexFormat: gt,
      granularity: void 0,
      height: void 0,
      rotation: void 0,
      stRotation: void 0,
      extrudedHeight: void 0,
      shadowVolume: void 0,
      offsetAttribute: void 0,
    };
  (b.unpack = function (t, e, a) {
    e = Q.defaultValue(e, 0);
    var r = J.Rectangle.unpack(t, e, v);
    e += J.Rectangle.packedLength;
    var n = J.Ellipsoid.unpack(t, e, _);
    e += J.Ellipsoid.packedLength;
    var i = et.VertexFormat.unpack(t, e, gt);
    e += et.VertexFormat.packedLength;
    var o = t[e++],
      s = t[e++],
      l = t[e++],
      u = t[e++],
      c = t[e++],
      m = 1 === t[e++],
      e = t[e];
    return Q.defined(a)
      ? ((a._rectangle = J.Rectangle.clone(r, a._rectangle)),
        (a._ellipsoid = J.Ellipsoid.clone(n, a._ellipsoid)),
        (a._vertexFormat = et.VertexFormat.clone(i, a._vertexFormat)),
        (a._granularity = o),
        (a._surfaceHeight = s),
        (a._rotation = l),
        (a._stRotation = u),
        (a._extrudedHeight = c),
        (a._shadowVolume = m),
        (a._offsetAttribute = -1 === e ? void 0 : e),
        a)
      : ((A.granularity = o),
        (A.height = s),
        (A.rotation = l),
        (A.stRotation = u),
        (A.extrudedHeight = c),
        (A.shadowVolume = m),
        (A.offsetAttribute = -1 === e ? void 0 : e),
        new b(A));
  }),
    (b.computeRectangle = function (t, e) {
      var a = (t = Q.defaultValue(t, Q.defaultValue.EMPTY_OBJECT)).rectangle,
        r = Q.defaultValue(t.granularity, W.CesiumMath.RADIANS_PER_DEGREE),
        n = Q.defaultValue(t.ellipsoid, J.Ellipsoid.WGS84);
      return c(a, r, Q.defaultValue(t.rotation, 0), n, e);
    });
  var x = new N.Matrix3(),
    w = new N.Quaternion(),
    C = new J.Cartographic();
  (b.createGeometry = function (t) {
    if (
      !W.CesiumMath.equalsEpsilon(
        t._rectangle.north,
        t._rectangle.south,
        W.CesiumMath.EPSILON10
      ) &&
      !W.CesiumMath.equalsEpsilon(
        t._rectangle.east,
        t._rectangle.west,
        W.CesiumMath.EPSILON10
      )
    ) {
      var e = t._rectangle,
        a = t._ellipsoid,
        r = t._rotation,
        n = t._stRotation,
        i = t._vertexFormat,
        o = S.RectangleGeometryLibrary.computeOptions(
          e,
          t._granularity,
          r,
          n,
          p,
          f,
          h
        ),
        s = x;
      0 !== n || 0 !== r
        ? ((c = J.Rectangle.center(e, C)),
          (m = a.geodeticSurfaceNormalCartographic(c, ut)),
          N.Quaternion.fromAxisAngle(m, -n, w),
          N.Matrix3.fromQuaternion(w, s))
        : N.Matrix3.clone(N.Matrix3.IDENTITY, s);
      var l,
        u,
        c = t._surfaceHeight,
        m = t._extrudedHeight,
        n = !W.CesiumMath.equalsEpsilon(c, m, 0, W.CesiumMath.EPSILON2);
      return (
        (o.lonScalar = 1 / t._rectangle.width),
        (o.latScalar = 1 / t._rectangle.height),
        (o.tangentRotationMatrix = s),
        (e = t._rectangle),
        (c = n
          ? ((u = y(t, o)),
            (n = N.BoundingSphere.fromRectangle3D(e, a, c, g)),
            (l = N.BoundingSphere.fromRectangle3D(e, a, m, d)),
            N.BoundingSphere.union(n, l))
          : (((u = mt(
              t,
              o
            )).attributes.position.values = rt.PolygonPipeline.scaleToGeodeticHeight(
              u.attributes.position.values,
              c,
              a,
              !1
            )),
            Q.defined(t._offsetAttribute) &&
              ((l = u.attributes.position.values.length),
              (o = new Uint8Array(l / 3)),
              (l =
                t._offsetAttribute === tt.GeometryOffsetAttribute.NONE ? 0 : 1),
              tt.arrayFill(o, l),
              (u.attributes.applyOffset = new Z.GeometryAttribute({
                componentDatatype: j.ComponentDatatype.UNSIGNED_BYTE,
                componentsPerAttribute: 1,
                values: o,
              }))),
            N.BoundingSphere.fromRectangle3D(e, a, c))),
        i.position || delete u.attributes.position,
        new Z.Geometry({
          attributes: u.attributes,
          indices: u.indices,
          primitiveType: u.primitiveType,
          boundingSphere: c,
          offsetAttribute: t._offsetAttribute,
        })
      );
    }
  }),
    (b.createShadowVolume = function (t, e, a) {
      var r = t._granularity,
        n = t._ellipsoid,
        e = e(r, n),
        a = a(r, n);
      return new b({
        rectangle: t._rectangle,
        rotation: t._rotation,
        ellipsoid: n,
        stRotation: t._stRotation,
        granularity: r,
        extrudedHeight: a,
        height: e,
        vertexFormat: et.VertexFormat.POSITION_ONLY,
        shadowVolume: !0,
      });
    });
  var m = new J.Rectangle(),
    R = [new J.Cartesian2(), new J.Cartesian2(), new J.Cartesian2()],
    E = new Z.Matrix2(),
    F = new J.Cartographic();
  return (
    Object.defineProperties(b.prototype, {
      rectangle: {
        get: function () {
          return (
            Q.defined(this._rotatedRectangle) ||
              (this._rotatedRectangle = c(
                this._rectangle,
                this._granularity,
                this._rotation,
                this._ellipsoid
              )),
            this._rotatedRectangle
          );
        },
      },
      textureCoordinateRotationPoints: {
        get: function () {
          return (
            Q.defined(this._textureCoordinateRotationPoints) ||
              (this._textureCoordinateRotationPoints = (function (t) {
                if (0 === t._stRotation) return [0, 0, 0, 1, 1, 0];
                var e = J.Rectangle.clone(t._rectangle, m),
                  a = t._granularity,
                  r = t._ellipsoid,
                  e = c(e, a, t._rotation - t._stRotation, r, m),
                  n = R;
                (n[0].x = e.west),
                  (n[0].y = e.south),
                  (n[1].x = e.west),
                  (n[1].y = e.north),
                  (n[2].x = e.east),
                  (n[2].y = e.south);
                for (
                  var i = t.rectangle,
                    o = Z.Matrix2.fromRotation(t._stRotation, E),
                    s = J.Rectangle.center(i, F),
                    l = 0;
                  l < 3;
                  ++l
                ) {
                  var u = n[l];
                  (u.x -= s.longitude),
                    (u.y -= s.latitude),
                    Z.Matrix2.multiplyByVector(o, u, u),
                    (u.x += s.longitude),
                    (u.y += s.latitude),
                    (u.x = (u.x - i.west) / i.width),
                    (u.y = (u.y - i.south) / i.height);
                }
                return (
                  (a = n[0]),
                  (r = n[1]),
                  (e = n[2]),
                  (t = new Array(6)),
                  J.Cartesian2.pack(a, t),
                  J.Cartesian2.pack(r, t, 2),
                  J.Cartesian2.pack(e, t, 4),
                  t
                );
              })(this)),
            this._textureCoordinateRotationPoints
          );
        },
      },
    }),
    function (t, e) {
      return (
        Q.defined(e) && (t = b.unpack(t, e)),
        (t._ellipsoid = J.Ellipsoid.clone(t._ellipsoid)),
        (t._rectangle = J.Rectangle.clone(t._rectangle)),
        b.createGeometry(t)
      );
    }
  );
});