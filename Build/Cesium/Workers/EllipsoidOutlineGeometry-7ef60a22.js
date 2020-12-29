define([
  "exports",
  "./when-54c2dc71",
  "./Check-6c0211bc",
  "./Math-fc8cecf5",
  "./Cartesian2-bddc1162",
  "./Transforms-d07bb42c",
  "./ComponentDatatype-6d99a1ee",
  "./GeometryAttribute-be1a3386",
  "./GeometryAttributes-4fcfcf40",
  "./IndexDatatype-53503fee",
  "./GeometryOffsetAttribute-7350d9af",
], function (i, D, t, I, T, z, L, R, N, B, S) {
  "use strict";
  var f = new T.Cartesian3(1, 1, 1),
    U = Math.cos,
    F = Math.sin;
  function l(i) {
    i = D.defaultValue(i, D.defaultValue.EMPTY_OBJECT);
    var t = D.defaultValue(i.radii, f),
      e = D.defaultValue(i.innerRadii, t),
      a = D.defaultValue(i.minimumClock, 0),
      n = D.defaultValue(i.maximumClock, I.CesiumMath.TWO_PI),
      r = D.defaultValue(i.minimumCone, 0),
      o = D.defaultValue(i.maximumCone, I.CesiumMath.PI),
      s = Math.round(D.defaultValue(i.stackPartitions, 10)),
      m = Math.round(D.defaultValue(i.slicePartitions, 8)),
      u = Math.round(D.defaultValue(i.subdivisions, 128));
    (this._radii = T.Cartesian3.clone(t)),
      (this._innerRadii = T.Cartesian3.clone(e)),
      (this._minimumClock = a),
      (this._maximumClock = n),
      (this._minimumCone = r),
      (this._maximumCone = o),
      (this._stackPartitions = s),
      (this._slicePartitions = m),
      (this._subdivisions = u),
      (this._offsetAttribute = i.offsetAttribute),
      (this._workerName = "createEllipsoidOutlineGeometry");
  }
  (l.packedLength = 2 * T.Cartesian3.packedLength + 8),
    (l.pack = function (i, t, e) {
      return (
        (e = D.defaultValue(e, 0)),
        T.Cartesian3.pack(i._radii, t, e),
        (e += T.Cartesian3.packedLength),
        T.Cartesian3.pack(i._innerRadii, t, e),
        (e += T.Cartesian3.packedLength),
        (t[e++] = i._minimumClock),
        (t[e++] = i._maximumClock),
        (t[e++] = i._minimumCone),
        (t[e++] = i._maximumCone),
        (t[e++] = i._stackPartitions),
        (t[e++] = i._slicePartitions),
        (t[e++] = i._subdivisions),
        (t[e] = D.defaultValue(i._offsetAttribute, -1)),
        t
      );
    });
  var c = new T.Cartesian3(),
    C = new T.Cartesian3(),
    _ = {
      radii: c,
      innerRadii: C,
      minimumClock: void 0,
      maximumClock: void 0,
      minimumCone: void 0,
      maximumCone: void 0,
      stackPartitions: void 0,
      slicePartitions: void 0,
      subdivisions: void 0,
      offsetAttribute: void 0,
    };
  (l.unpack = function (i, t, e) {
    t = D.defaultValue(t, 0);
    var a = T.Cartesian3.unpack(i, t, c);
    t += T.Cartesian3.packedLength;
    var n = T.Cartesian3.unpack(i, t, C);
    t += T.Cartesian3.packedLength;
    var r = i[t++],
      o = i[t++],
      s = i[t++],
      m = i[t++],
      u = i[t++],
      f = i[t++],
      d = i[t++],
      t = i[t];
    return D.defined(e)
      ? ((e._radii = T.Cartesian3.clone(a, e._radii)),
        (e._innerRadii = T.Cartesian3.clone(n, e._innerRadii)),
        (e._minimumClock = r),
        (e._maximumClock = o),
        (e._minimumCone = s),
        (e._maximumCone = m),
        (e._stackPartitions = u),
        (e._slicePartitions = f),
        (e._subdivisions = d),
        (e._offsetAttribute = -1 === t ? void 0 : t),
        e)
      : ((_.minimumClock = r),
        (_.maximumClock = o),
        (_.minimumCone = s),
        (_.maximumCone = m),
        (_.stackPartitions = u),
        (_.slicePartitions = f),
        (_.subdivisions = d),
        (_.offsetAttribute = -1 === t ? void 0 : t),
        new l(_));
  }),
    (l.createGeometry = function (i) {
      var t = i._radii;
      if (!(t.x <= 0 || t.y <= 0 || t.z <= 0)) {
        var e = i._innerRadii;
        if (!(e.x <= 0 || e.y <= 0 || e.z <= 0)) {
          var a = i._minimumClock,
            n = i._maximumClock,
            r = i._minimumCone,
            o = i._maximumCone,
            s = i._subdivisions,
            m = T.Ellipsoid.fromCartesian3(t),
            u = i._slicePartitions + 1,
            f = i._stackPartitions + 1;
          (u = Math.round((u * Math.abs(n - a)) / I.CesiumMath.TWO_PI)) < 2 &&
            (u = 2),
            (f = Math.round((f * Math.abs(o - r)) / I.CesiumMath.PI)) < 2 &&
              (f = 2);
          var d = 0,
            l = 1,
            c = e.x !== t.x || e.y !== t.y || e.z !== t.z,
            C = !1,
            _ = !1;
          c &&
            ((l = 2),
            0 < r && ((C = !0), (d += u)),
            o < Math.PI && ((_ = !0), (d += u)));
          for (
            var h,
              p,
              y = s * l * (f + u),
              v = new Float64Array(3 * y),
              d = 2 * (y + d - (u + f) * l),
              b = B.IndexDatatype.createTypedArray(y, d),
              k = 0,
              A = new Array(f),
              x = new Array(f),
              P = 0;
            P < f;
            P++
          )
            (p = r + (P * (o - r)) / (f - 1)), (A[P] = F(p)), (x[P] = U(p));
          var w = new Array(s),
            M = new Array(s);
          for (P = 0; P < s; P++)
            (h = a + (P * (n - a)) / (s - 1)), (w[P] = F(h)), (M[P] = U(h));
          for (P = 0; P < f; P++)
            for (g = 0; g < s; g++)
              (v[k++] = t.x * A[P] * M[g]),
                (v[k++] = t.y * A[P] * w[g]),
                (v[k++] = t.z * x[P]);
          if (c)
            for (P = 0; P < f; P++)
              for (g = 0; g < s; g++)
                (v[k++] = e.x * A[P] * M[g]),
                  (v[k++] = e.y * A[P] * w[g]),
                  (v[k++] = e.z * x[P]);
          for (A.length = s, x.length = s, P = 0; P < s; P++)
            (p = r + (P * (o - r)) / (s - 1)), (A[P] = F(p)), (x[P] = U(p));
          for (w.length = u, M.length = u, P = 0; P < u; P++)
            (h = a + (P * (n - a)) / (u - 1)), (w[P] = F(h)), (M[P] = U(h));
          for (P = 0; P < s; P++)
            for (g = 0; g < u; g++)
              (v[k++] = t.x * A[P] * M[g]),
                (v[k++] = t.y * A[P] * w[g]),
                (v[k++] = t.z * x[P]);
          if (c)
            for (P = 0; P < s; P++)
              for (g = 0; g < u; g++)
                (v[k++] = e.x * A[P] * M[g]),
                  (v[k++] = e.y * A[P] * w[g]),
                  (v[k++] = e.z * x[P]);
          for (P = k = 0; P < f * l; P++)
            for (var V = P * s, g = 0; g < s - 1; g++)
              (b[k++] = V + g), (b[k++] = V + g + 1);
          var G = f * s * l;
          for (P = 0; P < u; P++)
            for (g = 0; g < s - 1; g++)
              (b[k++] = G + P + g * u), (b[k++] = G + P + (g + 1) * u);
          if (c)
            for (G = f * s * l + u * s, P = 0; P < u; P++)
              for (g = 0; g < s - 1; g++)
                (b[k++] = G + P + g * u), (b[k++] = G + P + (g + 1) * u);
          if (c) {
            var E = f * s * l,
              O = E + s * u;
            if (C) for (P = 0; P < u; P++) (b[k++] = E + P), (b[k++] = O + P);
            if (_)
              for (E += s * u - u, O += s * u - u, P = 0; P < u; P++)
                (b[k++] = E + P), (b[k++] = O + P);
          }
          c = new N.GeometryAttributes({
            position: new R.GeometryAttribute({
              componentDatatype: L.ComponentDatatype.DOUBLE,
              componentsPerAttribute: 3,
              values: v,
            }),
          });
          return (
            D.defined(i._offsetAttribute) &&
              ((C = v.length),
              (_ = new Uint8Array(C / 3)),
              (C =
                i._offsetAttribute === S.GeometryOffsetAttribute.NONE ? 0 : 1),
              S.arrayFill(_, C),
              (c.applyOffset = new R.GeometryAttribute({
                componentDatatype: L.ComponentDatatype.UNSIGNED_BYTE,
                componentsPerAttribute: 1,
                values: _,
              }))),
            new R.Geometry({
              attributes: c,
              indices: b,
              primitiveType: R.PrimitiveType.LINES,
              boundingSphere: z.BoundingSphere.fromEllipsoid(m),
              offsetAttribute: i._offsetAttribute,
            })
          );
        }
      }
    }),
    (i.EllipsoidOutlineGeometry = l);
});
