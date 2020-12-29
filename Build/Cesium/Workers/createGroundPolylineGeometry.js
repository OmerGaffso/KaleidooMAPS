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
  "./EncodedCartesian3-4df2eabb",
  "./IntersectionTests-8abf6dba",
  "./Plane-c8971487",
  "./WebMercatorProjection-df58d479",
  "./arrayRemoveDuplicates-ebc732b0",
  "./ArcType-dc1c5aee",
  "./EllipsoidRhumbLine-c704bf4c",
  "./EllipsoidGeodesic-30fae80b",
], function (B, e, be, Oe, Pe, a, t, ke, Ae, Le, j, r, n, G, V, Y, M) {
  "use strict";
  function i(e) {
    (e = B.defaultValue(e, B.defaultValue.EMPTY_OBJECT)),
      (this._ellipsoid = B.defaultValue(e.ellipsoid, Oe.Ellipsoid.WGS84)),
      (this._rectangle = B.defaultValue(e.rectangle, Oe.Rectangle.MAX_VALUE)),
      (this._projection = new Pe.GeographicProjection(this._ellipsoid)),
      (this._numberOfLevelZeroTilesX = B.defaultValue(
        e.numberOfLevelZeroTilesX,
        2
      )),
      (this._numberOfLevelZeroTilesY = B.defaultValue(
        e.numberOfLevelZeroTilesY,
        1
      ));
  }
  Object.defineProperties(i.prototype, {
    ellipsoid: {
      get: function () {
        return this._ellipsoid;
      },
    },
    rectangle: {
      get: function () {
        return this._rectangle;
      },
    },
    projection: {
      get: function () {
        return this._projection;
      },
    },
  }),
    (i.prototype.getNumberOfXTilesAtLevel = function (e) {
      return this._numberOfLevelZeroTilesX << e;
    }),
    (i.prototype.getNumberOfYTilesAtLevel = function (e) {
      return this._numberOfLevelZeroTilesY << e;
    }),
    (i.prototype.rectangleToNativeRectangle = function (e, a) {
      var t = be.CesiumMath.toDegrees(e.west),
        n = be.CesiumMath.toDegrees(e.south),
        i = be.CesiumMath.toDegrees(e.east),
        e = be.CesiumMath.toDegrees(e.north);
      return B.defined(a)
        ? ((a.west = t), (a.south = n), (a.east = i), (a.north = e), a)
        : new Oe.Rectangle(t, n, i, e);
    }),
    (i.prototype.tileXYToNativeRectangle = function (e, a, t, n) {
      n = this.tileXYToRectangle(e, a, t, n);
      return (
        (n.west = be.CesiumMath.toDegrees(n.west)),
        (n.south = be.CesiumMath.toDegrees(n.south)),
        (n.east = be.CesiumMath.toDegrees(n.east)),
        (n.north = be.CesiumMath.toDegrees(n.north)),
        n
      );
    }),
    (i.prototype.tileXYToRectangle = function (e, a, t, n) {
      var i = this._rectangle,
        r = this.getNumberOfXTilesAtLevel(t),
        s = this.getNumberOfYTilesAtLevel(t),
        t = i.width / r,
        r = e * t + i.west,
        e = (e + 1) * t + i.west,
        t = i.height / s,
        s = i.north - a * t,
        t = i.north - (a + 1) * t;
      return (
        B.defined(n) || (n = new Oe.Rectangle(r, t, e, s)),
        (n.west = r),
        (n.south = t),
        (n.east = e),
        (n.north = s),
        n
      );
    }),
    (i.prototype.positionToTileXY = function (e, a, t) {
      var n = this._rectangle;
      if (Oe.Rectangle.contains(n, e)) {
        var i = this.getNumberOfXTilesAtLevel(a),
          r = this.getNumberOfYTilesAtLevel(a),
          s = n.width / i,
          o = n.height / r,
          a = e.longitude;
        n.east < n.west && (a += be.CesiumMath.TWO_PI);
        s = ((a - n.west) / s) | 0;
        i <= s && (s = i - 1);
        o = ((n.north - e.latitude) / o) | 0;
        return (r <= o && (o = r - 1), B.defined(t))
          ? ((t.x = s), (t.y = o), t)
          : new Oe.Cartesian2(s, o);
      }
    });
  var s = new Oe.Cartesian3(),
    o = new Oe.Cartesian3(),
    l = new Oe.Cartographic(),
    u = new Oe.Cartesian3(),
    c = new Oe.Cartesian3(),
    C = new Pe.BoundingSphere(),
    p = new i(),
    d = [
      new Oe.Cartographic(),
      new Oe.Cartographic(),
      new Oe.Cartographic(),
      new Oe.Cartographic(),
    ],
    h = new Oe.Cartesian2(),
    Se = {};
  function g(e) {
    Oe.Cartographic.fromRadians(e.east, e.north, 0, d[0]),
      Oe.Cartographic.fromRadians(e.west, e.north, 0, d[1]),
      Oe.Cartographic.fromRadians(e.east, e.south, 0, d[2]),
      Oe.Cartographic.fromRadians(e.west, e.south, 0, d[3]);
    for (
      var a = 0, t = 0, n = 0, i = 0, r = Se._terrainHeightsMaxLevel, s = 0;
      s <= r;
      ++s
    ) {
      for (var o = !1, l = 0; l < 4; ++l) {
        var u = d[l];
        if ((p.positionToTileXY(u, s, h), 0 === l)) (n = h.x), (i = h.y);
        else if (n !== h.x || i !== h.y) {
          o = !0;
          break;
        }
      }
      if (o) break;
      (a = n), (t = i);
    }
    if (0 !== s) return { x: a, y: t, level: r < s ? r : s - 1 };
  }
  (Se.initialize = function () {
    var e = Se._initPromise;
    return B.defined(e)
      ? e
      : ((e = Pe.Resource.fetchJson(
          Pe.buildModuleUrl("Assets/approximateTerrainHeights.json")
        ).then(function (e) {
          Se._terrainHeights = e;
        })),
        (Se._initPromise = e));
  }),
    (Se.getMinimumMaximumHeights = function (e, a) {
      a = B.defaultValue(a, Oe.Ellipsoid.WGS84);
      var t = g(e),
        n = Se._defaultMinTerrainHeight,
        i = Se._defaultMaxTerrainHeight;
      return (
        B.defined(t) &&
          ((t = t.level + "-" + t.x + "-" + t.y),
          (t = Se._terrainHeights[t]),
          B.defined(t) && ((n = t[0]), (i = t[1])),
          a.cartographicToCartesian(Oe.Rectangle.northeast(e, l), s),
          a.cartographicToCartesian(Oe.Rectangle.southwest(e, l), o),
          Oe.Cartesian3.midpoint(o, s, u),
          (a = a.scaleToGeodeticSurface(u, c)),
          (n = B.defined(a)
            ? ((a = Oe.Cartesian3.distance(u, a)), Math.min(n, -a))
            : Se._defaultMinTerrainHeight)),
        {
          minimumTerrainHeight: (n = Math.max(Se._defaultMinTerrainHeight, n)),
          maximumTerrainHeight: i,
        }
      );
    }),
    (Se.getBoundingSphere = function (e, a) {
      a = B.defaultValue(a, Oe.Ellipsoid.WGS84);
      var t = g(e),
        n = Se._defaultMaxTerrainHeight;
      B.defined(t) &&
        ((i = t.level + "-" + t.x + "-" + t.y),
        (i = Se._terrainHeights[i]),
        B.defined(i) && (n = i[1]));
      var i = Pe.BoundingSphere.fromRectangle3D(e, a, 0);
      return (
        Pe.BoundingSphere.fromRectangle3D(e, a, n, C),
        Pe.BoundingSphere.union(i, C, i)
      );
    }),
    (Se._terrainHeightsMaxLevel = 6),
    (Se._defaultMaxTerrainHeight = 9e3),
    (Se._defaultMinTerrainHeight = -1e5),
    (Se._terrainHeights = void 0),
    (Se._initPromise = void 0),
    Object.defineProperties(Se, {
      initialized: {
        get: function () {
          return B.defined(Se._terrainHeights);
        },
      },
    });
  var F = [Pe.GeographicProjection, n.WebMercatorProjection],
    f = F.length,
    Ie = Math.cos(be.CesiumMath.toRadians(30)),
    m = Math.cos(be.CesiumMath.toRadians(150)),
    q = 0,
    X = 1e3;
  function w(e) {
    var a = (e = B.defaultValue(e, B.defaultValue.EMPTY_OBJECT)).positions;
    (this.width = B.defaultValue(e.width, 1)),
      (this._positions = a),
      (this.granularity = B.defaultValue(e.granularity, 9999)),
      (this.loop = B.defaultValue(e.loop, !1)),
      (this.arcType = B.defaultValue(e.arcType, V.ArcType.GEODESIC)),
      (this._ellipsoid = Oe.Ellipsoid.WGS84),
      (this._projectionIndex = 0),
      (this._workerName = "createGroundPolylineGeometry"),
      (this._scene3DOnly = !1);
  }
  Object.defineProperties(w.prototype, {
    packedLength: {
      get: function () {
        return (
          1 +
          3 * this._positions.length +
          1 +
          1 +
          1 +
          Oe.Ellipsoid.packedLength +
          1 +
          1
        );
      },
    },
  }),
    (w.setProjectionAndEllipsoid = function (e, a) {
      for (var t = 0, n = 0; n < f; n++)
        if (a instanceof F[n]) {
          t = n;
          break;
        }
      (e._projectionIndex = t), (e._ellipsoid = a.ellipsoid);
    });
  var y = new Oe.Cartesian3(),
    v = new Oe.Cartesian3(),
    T = new Oe.Cartesian3();
  function W(e, a, t, n, i) {
    var r = Z(n, e, 0, y),
      t = Z(n, e, t, v),
      a = Z(n, a, 0, T),
      t = xe(t, r, v),
      r = xe(a, r, T);
    return Oe.Cartesian3.cross(r, t, i), Oe.Cartesian3.normalize(i, i);
  }
  var E = new Oe.Cartographic(),
    _ = new Oe.Cartesian3(),
    b = new Oe.Cartesian3(),
    O = new Oe.Cartesian3();
  function U(e, a, t, n, i, r, s, o, l, u, c) {
    if (0 !== i) {
      var C;
      r === V.ArcType.GEODESIC
        ? (C = new M.EllipsoidGeodesic(e, a, s))
        : r === V.ArcType.RHUMB && (C = new Y.EllipsoidRhumbLine(e, a, s));
      r = C.surfaceDistance;
      if (!(r < i))
        for (
          var p = W(e, a, n, s, O),
            i = Math.ceil(r / i),
            d = r / i,
            h = d,
            g = i - 1,
            f = o.length,
            m = 0;
          m < g;
          m++
        ) {
          var w = C.interpolateUsingSurfaceDistance(h, E),
            y = Z(s, w, t, _),
            v = Z(s, w, n, b);
          Oe.Cartesian3.pack(p, o, f),
            Oe.Cartesian3.pack(y, l, f),
            Oe.Cartesian3.pack(v, u, f),
            c.push(w.latitude),
            c.push(w.longitude),
            (f += 3),
            (h += d);
        }
    }
  }
  var P = new Oe.Cartographic();
  function Z(e, a, t, n) {
    return (
      Oe.Cartographic.clone(a, P),
      (P.height = t),
      Oe.Cartographic.toCartesian(P, e, n)
    );
  }
  function xe(e, a, t) {
    return Oe.Cartesian3.subtract(e, a, t), Oe.Cartesian3.normalize(t, t), t;
  }
  function k(e, a, t, n) {
    return (
      (n = xe(e, a, n)),
      (n = Oe.Cartesian3.cross(n, t, n)),
      (n = Oe.Cartesian3.normalize(n, n)),
      (n = Oe.Cartesian3.cross(t, n, n))
    );
  }
  (w.pack = function (e, a, t) {
    var n = B.defaultValue(t, 0),
      i = e._positions,
      r = i.length;
    a[n++] = r;
    for (var s = 0; s < r; ++s) {
      var o = i[s];
      Oe.Cartesian3.pack(o, a, n), (n += 3);
    }
    return (
      (a[n++] = e.granularity),
      (a[n++] = e.loop ? 1 : 0),
      (a[n++] = e.arcType),
      Oe.Ellipsoid.pack(e._ellipsoid, a, n),
      (n += Oe.Ellipsoid.packedLength),
      (a[n++] = e._projectionIndex),
      (a[n++] = e._scene3DOnly ? 1 : 0),
      a
    );
  }),
    (w.unpack = function (e, a, t) {
      for (
        var n = B.defaultValue(a, 0), i = e[n++], r = new Array(i), s = 0;
        s < i;
        s++
      )
        (r[s] = Oe.Cartesian3.unpack(e, n)), (n += 3);
      var o = e[n++],
        l = 1 === e[n++],
        u = e[n++],
        c = Oe.Ellipsoid.unpack(e, n);
      n += Oe.Ellipsoid.packedLength;
      var C = e[n++],
        a = 1 === e[n++];
      return (
        B.defined(t) || (t = new w({ positions: r })),
        (t._positions = r),
        (t.granularity = o),
        (t.loop = l),
        (t.arcType = u),
        (t._ellipsoid = c),
        (t._projectionIndex = C),
        (t._scene3DOnly = a),
        t
      );
    });
  var A = new Oe.Cartesian3(),
    L = new Oe.Cartesian3(),
    S = new Oe.Cartesian3(),
    I = new Oe.Cartesian3();
  function J(e, a, t, n, i) {
    (t = xe(t, a, I)), (e = k(e, a, t, A)), (a = k(n, a, t, L));
    if (
      be.CesiumMath.equalsEpsilon(
        Oe.Cartesian3.dot(e, a),
        -1,
        be.CesiumMath.EPSILON5
      )
    )
      return (
        (i = Oe.Cartesian3.cross(t, e, i)), (i = Oe.Cartesian3.normalize(i, i))
      );
    (i = Oe.Cartesian3.add(a, e, i)), (i = Oe.Cartesian3.normalize(i, i));
    t = Oe.Cartesian3.cross(t, i, S);
    return Oe.Cartesian3.dot(a, t) < 0 && (i = Oe.Cartesian3.negate(i, i)), i;
  }
  var Q = r.Plane.fromPointNormal(Oe.Cartesian3.ZERO, Oe.Cartesian3.UNIT_Y),
    K = new Oe.Cartesian3(),
    $ = new Oe.Cartesian3(),
    ee = new Oe.Cartesian3(),
    ae = new Oe.Cartesian3(),
    te = new Oe.Cartesian3(),
    ne = new Oe.Cartesian3(),
    ie = new Oe.Cartographic(),
    re = new Oe.Cartographic(),
    se = new Oe.Cartographic();
  w.createGeometry = function (e) {
    var a,
      t,
      n,
      i,
      r,
      s = !e._scene3DOnly,
      o = e.loop,
      l = e._ellipsoid,
      u = e.granularity,
      c = e.arcType,
      C = new F[e._projectionIndex](l),
      p = q,
      d = X,
      h = e._positions,
      g = h.length;
    2 === g && (o = !1);
    for (
      var f,
        m,
        w,
        y = new Y.EllipsoidRhumbLine(void 0, void 0, l),
        v = [h[0]],
        M = 0;
      M < g - 1;
      M++
    )
      (t = h[M]),
        (n = h[M + 1]),
        (f = j.IntersectionTests.lineSegmentPlane(t, n, Q, ne)),
        !B.defined(f) ||
          Oe.Cartesian3.equalsEpsilon(f, t, be.CesiumMath.EPSILON7) ||
          Oe.Cartesian3.equalsEpsilon(f, n, be.CesiumMath.EPSILON7) ||
          (e.arcType === V.ArcType.GEODESIC
            ? v.push(Oe.Cartesian3.clone(f))
            : e.arcType === V.ArcType.RHUMB &&
              ((w = l.cartesianToCartographic(f, ie).longitude),
              (i = l.cartesianToCartographic(t, ie)),
              (r = l.cartesianToCartographic(n, re)),
              y.setEndPoints(i, r),
              (m = y.findIntersectionWithLongitude(w, se)),
              (f = l.cartographicToCartesian(m, ne)),
              !B.defined(f) ||
                Oe.Cartesian3.equalsEpsilon(f, t, be.CesiumMath.EPSILON7) ||
                Oe.Cartesian3.equalsEpsilon(f, n, be.CesiumMath.EPSILON7) ||
                v.push(Oe.Cartesian3.clone(f)))),
        v.push(n);
    o &&
      ((t = h[g - 1]),
      (n = h[0]),
      (f = j.IntersectionTests.lineSegmentPlane(t, n, Q, ne)),
      !B.defined(f) ||
        Oe.Cartesian3.equalsEpsilon(f, t, be.CesiumMath.EPSILON7) ||
        Oe.Cartesian3.equalsEpsilon(f, n, be.CesiumMath.EPSILON7) ||
        (e.arcType === V.ArcType.GEODESIC
          ? v.push(Oe.Cartesian3.clone(f))
          : e.arcType === V.ArcType.RHUMB &&
            ((w = l.cartesianToCartographic(f, ie).longitude),
            (i = l.cartesianToCartographic(t, ie)),
            (r = l.cartesianToCartographic(n, re)),
            y.setEndPoints(i, r),
            (m = y.findIntersectionWithLongitude(w, se)),
            (f = l.cartographicToCartesian(m, ne)),
            !B.defined(f) ||
              Oe.Cartesian3.equalsEpsilon(f, t, be.CesiumMath.EPSILON7) ||
              Oe.Cartesian3.equalsEpsilon(f, n, be.CesiumMath.EPSILON7) ||
              v.push(Oe.Cartesian3.clone(f)))));
    var T = v.length,
      E = new Array(T);
    for (M = 0; M < T; M++) {
      var _ = Oe.Cartographic.fromCartesian(v[M], l);
      (_.height = 0), (E[M] = _);
    }
    if (
      !(
        (T = (E = G.arrayRemoveDuplicates(E, Oe.Cartographic.equalsEpsilon))
          .length) < 2
      )
    ) {
      var b = [],
        O = [],
        P = [],
        k = [],
        A = K,
        L = $,
        S = ee,
        I = ae,
        x = te,
        N = E[0],
        R = E[1];
      for (
        A = Z(l, E[T - 1], p, A),
          I = Z(l, R, p, I),
          L = Z(l, N, p, L),
          S = Z(l, N, d, S),
          x = o ? J(A, L, S, I, x) : W(N, R, d, l, x),
          Oe.Cartesian3.pack(x, O, 0),
          Oe.Cartesian3.pack(L, P, 0),
          Oe.Cartesian3.pack(S, k, 0),
          b.push(N.latitude),
          b.push(N.longitude),
          U(N, R, p, d, u, c, l, O, P, k, b),
          M = 1;
        M < T - 1;
        ++M
      ) {
        (A = Oe.Cartesian3.clone(L, A)), (L = Oe.Cartesian3.clone(I, L));
        var D = E[M];
        Z(l, D, d, S),
          Z(l, E[M + 1], p, I),
          J(A, L, S, I, x),
          (a = O.length),
          Oe.Cartesian3.pack(x, O, a),
          Oe.Cartesian3.pack(L, P, a),
          Oe.Cartesian3.pack(S, k, a),
          b.push(D.latitude),
          b.push(D.longitude),
          U(E[M], E[M + 1], p, d, u, c, l, O, P, k, b);
      }
      var z = E[T - 1],
        H = E[T - 2],
        L = Z(l, z, p, L),
        S = Z(l, z, d, S);
      if (
        ((x = o
          ? ((R = E[0]), J((A = Z(l, H, p, A)), L, S, (I = Z(l, R, p, I)), x))
          : W(H, z, d, l, x)),
        (a = O.length),
        Oe.Cartesian3.pack(x, O, a),
        Oe.Cartesian3.pack(L, P, a),
        Oe.Cartesian3.pack(S, k, a),
        b.push(z.latitude),
        b.push(z.longitude),
        o)
      ) {
        for (
          U(z, N, p, d, u, c, l, O, P, k, b), a = O.length, M = 0;
          M < 3;
          ++M
        )
          (O[a + M] = O[M]), (P[a + M] = P[M]), (k[a + M] = k[M]);
        b.push(N.latitude), b.push(N.longitude);
      }
      return (function (e, a, t, n, i, r, s) {
        var o,
          l,
          u,
          c,
          C,
          p,
          d = a._ellipsoid,
          h = t.length / 3 - 1,
          g = 8 * h,
          f = 4 * g,
          m = 36 * h,
          w = new (65535 < g ? Uint32Array : Uint16Array)(m),
          y = new Float64Array(3 * g),
          v = new Float32Array(f),
          M = new Float32Array(f),
          T = new Float32Array(f),
          E = new Float32Array(f),
          _ = new Float32Array(f);
        s &&
          ((u = new Float32Array(f)),
          (c = new Float32Array(f)),
          (C = new Float32Array(f)),
          (p = new Float32Array(2 * g)));
        var b = r.length / 2,
          O = 0,
          P = He;
        P.height = 0;
        var k = Be;
        k.height = 0;
        var A = je,
          L = Ge;
        if (s)
          for (l = 0, o = 1; o < b; o++)
            (P.latitude = r[l]),
              (P.longitude = r[l + 1]),
              (k.latitude = r[l + 2]),
              (k.longitude = r[l + 3]),
              (A = a.project(P, A)),
              (L = a.project(k, L)),
              (O += Oe.Cartesian3.distance(A, L)),
              (l += 2);
        var S = n.length / 3;
        L = Oe.Cartesian3.unpack(n, 0, L);
        var I,
          x = 0;
        for (l = 3, o = 1; o < S; o++)
          (A = Oe.Cartesian3.clone(L, A)),
            (L = Oe.Cartesian3.unpack(n, l, L)),
            (x += Oe.Cartesian3.distance(A, L)),
            (l += 3);
        l = 3;
        var N = 0,
          R = 0,
          D = 0,
          z = 0,
          H = !1,
          B = Oe.Cartesian3.unpack(t, 0, Ye),
          j = Oe.Cartesian3.unpack(n, 0, Ge),
          G = Oe.Cartesian3.unpack(i, 0, qe);
        e &&
          ((_e = Oe.Cartesian3.unpack(t, t.length - 6, Ve)),
          Ne(G, _e, B, j) && (G = Oe.Cartesian3.negate(G, G)));
        var V,
          Y,
          F,
          q,
          X,
          W,
          U,
          Z = 0,
          J = 0,
          Q = 0;
        for (o = 0; o < h; o++) {
          var K = Oe.Cartesian3.clone(B, Ve),
            $ = Oe.Cartesian3.clone(j, je),
            ee = Oe.Cartesian3.clone(G, Fe);
          H && (ee = Oe.Cartesian3.negate(ee, ee)),
            (B = Oe.Cartesian3.unpack(t, l, Ye)),
            (j = Oe.Cartesian3.unpack(n, l, Ge)),
            (G = Oe.Cartesian3.unpack(i, l, qe)),
            (H = Ne(G, K, B, j)),
            (P.latitude = r[N]),
            (P.longitude = r[N + 1]),
            (k.latitude = r[N + 2]),
            (k.longitude = r[N + 3]),
            s &&
              ((Me = (function (e, a) {
                var t = Math.abs(e.longitude),
                  n = Math.abs(a.longitude);
                {
                  if (
                    be.CesiumMath.equalsEpsilon(
                      t,
                      be.CesiumMath.PI,
                      be.CesiumMath.EPSILON11
                    )
                  ) {
                    var i = be.CesiumMath.sign(a.longitude);
                    return (e.longitude = i * (t - be.CesiumMath.EPSILON11)), 1;
                  }
                  if (
                    be.CesiumMath.equalsEpsilon(
                      n,
                      be.CesiumMath.PI,
                      be.CesiumMath.EPSILON11
                    )
                  ) {
                    e = be.CesiumMath.sign(e.longitude);
                    return (a.longitude = e * (n - be.CesiumMath.EPSILON11)), 2;
                  }
                }
                return 0;
              })(P, k)),
              (V = a.project(P, Ke)),
              ((pe = xe((Y = a.project(k, $e)), V, ca)).y = Math.abs(pe.y)),
              (F = ea),
              (q = aa),
              0 === Me || Oe.Cartesian3.dot(pe, Oe.Cartesian3.UNIT_Y) > Ie
                ? ((F = Re(a, P, ee, V, ea)), (q = Re(a, k, G, Y, aa)))
                : 1 === Me
                ? ((q = Re(a, k, G, Y, aa)),
                  (F.x = 0),
                  (F.y = be.CesiumMath.sign(
                    P.longitude - Math.abs(k.longitude)
                  )),
                  (F.z = 0))
                : ((F = Re(a, P, ee, V, ea)),
                  (q.x = 0),
                  (q.y = be.CesiumMath.sign(P.longitude - k.longitude)),
                  (q.z = 0)));
          var ae = Oe.Cartesian3.distance($, j),
            te = Le.EncodedCartesian3.fromCartesian(K, la),
            ne = Oe.Cartesian3.subtract(B, K, ta),
            ie = Oe.Cartesian3.normalize(ne, ra),
            re = Oe.Cartesian3.subtract($, K, na);
          re = Oe.Cartesian3.normalize(re, re);
          var se = Oe.Cartesian3.cross(ie, re, ra);
          se = Oe.Cartesian3.normalize(se, se);
          var oe = Oe.Cartesian3.cross(re, ee, sa);
          oe = Oe.Cartesian3.normalize(oe, oe);
          var le = Oe.Cartesian3.subtract(j, B, ia);
          le = Oe.Cartesian3.normalize(le, le);
          var ue = Oe.Cartesian3.cross(G, le, oa);
          ue = Oe.Cartesian3.normalize(ue, ue);
          var ce = ae / x,
            Ce = Z / x,
            pe = 0,
            de = 0,
            he = 0;
          for (
            s &&
              ((pe = Oe.Cartesian3.distance(V, Y)),
              (X = Le.EncodedCartesian3.fromCartesian(V, ua)),
              (W = Oe.Cartesian3.subtract(Y, V, ca)),
              (Te = (U = Oe.Cartesian3.normalize(W, Ca)).x),
              (U.x = U.y),
              (U.y = -Te),
              (de = pe / O),
              (he = J / O)),
              I = 0;
            I < 8;
            I++
          ) {
            var ge = z + 4 * I,
              fe = R + 2 * I,
              me = ge + 3,
              we = I < 4 ? 1 : -1,
              ye = 2 === I || 3 === I || 6 === I || 7 === I ? 1 : -1;
            Oe.Cartesian3.pack(te.high, v, ge),
              (v[me] = ne.x),
              Oe.Cartesian3.pack(te.low, M, ge),
              (M[me] = ne.y),
              Oe.Cartesian3.pack(oe, T, ge),
              (T[me] = ne.z),
              Oe.Cartesian3.pack(ue, E, ge),
              (E[me] = ce * we),
              Oe.Cartesian3.pack(se, _, ge);
            var ve = Ce * ye;
            0 === ve && ye < 0 && (ve = 9),
              (_[me] = ve),
              s &&
                ((u[ge] = X.high.x),
                (u[ge + 1] = X.high.y),
                (u[ge + 2] = X.low.x),
                (u[ge + 3] = X.low.y),
                (C[ge] = -F.y),
                (C[ge + 1] = F.x),
                (C[ge + 2] = q.y),
                (C[ge + 3] = -q.x),
                (c[ge] = W.x),
                (c[ge + 1] = W.y),
                (c[ge + 2] = U.x),
                (c[ge + 3] = U.y),
                (p[fe] = de * we),
                0 === (ve = he * ye) && ye < 0 && (ve = 9),
                (p[fe + 1] = ve));
          }
          var Me = Je,
            ie = Qe,
            re = Ue,
            ee = Ze,
            le = Oe.Rectangle.fromCartographicArray(Xe, We),
            Te = Se.getMinimumMaximumHeights(le, d),
            le = Te.minimumTerrainHeight,
            Te = Te.maximumTerrainHeight;
          (Q += le),
            (Q += Te),
            De(K, $, le, Te, Me, re),
            De(B, j, le, Te, ie, ee);
          Te = Oe.Cartesian3.multiplyByScalar(se, be.CesiumMath.EPSILON5, pa);
          Oe.Cartesian3.add(Me, Te, Me),
            Oe.Cartesian3.add(ie, Te, ie),
            Oe.Cartesian3.add(re, Te, re),
            Oe.Cartesian3.add(ee, Te, ee),
            ze(Me, ie),
            ze(re, ee),
            Oe.Cartesian3.pack(Me, y, D),
            Oe.Cartesian3.pack(ie, y, D + 3),
            Oe.Cartesian3.pack(ee, y, D + 6),
            Oe.Cartesian3.pack(re, y, D + 9),
            (Te = Oe.Cartesian3.multiplyByScalar(
              se,
              -2 * be.CesiumMath.EPSILON5,
              pa
            )),
            Oe.Cartesian3.add(Me, Te, Me),
            Oe.Cartesian3.add(ie, Te, ie),
            Oe.Cartesian3.add(re, Te, re),
            Oe.Cartesian3.add(ee, Te, ee),
            ze(Me, ie),
            ze(re, ee),
            Oe.Cartesian3.pack(Me, y, D + 12),
            Oe.Cartesian3.pack(ie, y, D + 15),
            Oe.Cartesian3.pack(ee, y, D + 18),
            Oe.Cartesian3.pack(re, y, D + 21),
            (N += 2),
            (l += 3),
            (R += 16),
            (D += 24),
            (z += 32),
            (Z += ae),
            (J += pe);
        }
        var Ee = (l = 0);
        for (o = 0; o < h; o++) {
          for (I = 0; I < ga; I++) w[l + I] = ha[I] + Ee;
          (Ee += 8), (l += ga);
        }
        e = da;
        Pe.BoundingSphere.fromVertices(t, Oe.Cartesian3.ZERO, 3, e[0]),
          Pe.BoundingSphere.fromVertices(n, Oe.Cartesian3.ZERO, 3, e[1]);
        var _e = Pe.BoundingSphere.fromBoundingSpheres(e);
        _e.radius += Q / (2 * h);
        e = {
          position: new Ae.GeometryAttribute({
            componentDatatype: ke.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            normalize: !1,
            values: y,
          }),
          startHiAndForwardOffsetX: fa(v),
          startLoAndForwardOffsetY: fa(M),
          startNormalAndForwardOffsetZ: fa(T),
          endNormalAndTextureCoordinateNormalizationX: fa(E),
          rightNormalAndTextureCoordinateNormalizationY: fa(_),
        };
        s &&
          ((e.startHiLo2D = fa(u)),
          (e.offsetAndRight2D = fa(c)),
          (e.startEndNormals2D = fa(C)),
          (e.texcoordNormalization2D = new Ae.GeometryAttribute({
            componentDatatype: ke.ComponentDatatype.FLOAT,
            componentsPerAttribute: 2,
            normalize: !1,
            values: p,
          })));
        return new Ae.Geometry({
          attributes: e,
          indices: w,
          boundingSphere: _e,
        });
      })(o, C, P, k, O, b, s);
    }
  };
  var x = new Oe.Cartesian3(),
    N = new Pe.Matrix3(),
    R = new Pe.Quaternion();
  function Ne(e, a, t, n) {
    (a = xe(t, a, x)), (a = Oe.Cartesian3.dot(a, e));
    if (Ie < a || a < m) {
      (t = xe(n, t, I)),
        (a = a < m ? be.CesiumMath.PI_OVER_TWO : -be.CesiumMath.PI_OVER_TWO),
        (a = Pe.Quaternion.fromAxisAngle(t, a, R)),
        (a = Pe.Matrix3.fromQuaternion(a, N));
      return Pe.Matrix3.multiplyByVector(a, e, e), !0;
    }
    return !1;
  }
  var D = new Oe.Cartographic(),
    z = new Oe.Cartesian3(),
    H = new Oe.Cartesian3();
  function Re(e, a, t, n, i) {
    var r = Oe.Cartographic.toCartesian(a, e._ellipsoid, z),
      s = Oe.Cartesian3.add(r, t, H),
      o = !1,
      l = e._ellipsoid,
      u = l.cartesianToCartographic(s, D);
    Math.abs(a.longitude - u.longitude) > be.CesiumMath.PI_OVER_TWO &&
      ((o = !0),
      (s = Oe.Cartesian3.subtract(r, t, H)),
      (u = l.cartesianToCartographic(s, D))),
      (u.height = 0);
    u = e.project(u, i);
    return (
      ((i = Oe.Cartesian3.subtract(u, n, i)).z = 0),
      (i = Oe.Cartesian3.normalize(i, i)),
      o && Oe.Cartesian3.negate(i, i),
      i
    );
  }
  var oe = new Oe.Cartesian3(),
    le = new Oe.Cartesian3();
  function De(e, a, t, n, i, r) {
    var s = Oe.Cartesian3.subtract(a, e, oe);
    Oe.Cartesian3.normalize(s, s);
    (t -= q), (t = Oe.Cartesian3.multiplyByScalar(s, t, le));
    Oe.Cartesian3.add(e, t, i);
    (n -= X), (t = Oe.Cartesian3.multiplyByScalar(s, n, le));
    Oe.Cartesian3.add(a, t, r);
  }
  var ue = new Oe.Cartesian3();
  function ze(e, a) {
    var t = r.Plane.getPointDistance(Q, e),
      n = r.Plane.getPointDistance(Q, a),
      i = ue;
    be.CesiumMath.equalsEpsilon(t, 0, be.CesiumMath.EPSILON2)
      ? ((i = xe(a, e, i)),
        Oe.Cartesian3.multiplyByScalar(i, be.CesiumMath.EPSILON2, i),
        Oe.Cartesian3.add(e, i, e))
      : be.CesiumMath.equalsEpsilon(n, 0, be.CesiumMath.EPSILON2) &&
        ((i = xe(e, a, i)),
        Oe.Cartesian3.multiplyByScalar(i, be.CesiumMath.EPSILON2, i),
        Oe.Cartesian3.add(a, i, a));
  }
  var He = new Oe.Cartographic(),
    Be = new Oe.Cartographic(),
    je = new Oe.Cartesian3(),
    Ge = new Oe.Cartesian3(),
    Ve = new Oe.Cartesian3(),
    Ye = new Oe.Cartesian3(),
    Fe = new Oe.Cartesian3(),
    qe = new Oe.Cartesian3(),
    Xe = [He, Be],
    We = new Oe.Rectangle(),
    Ue = new Oe.Cartesian3(),
    Ze = new Oe.Cartesian3(),
    Je = new Oe.Cartesian3(),
    Qe = new Oe.Cartesian3(),
    Ke = new Oe.Cartesian3(),
    $e = new Oe.Cartesian3(),
    ea = new Oe.Cartesian3(),
    aa = new Oe.Cartesian3(),
    ta = new Oe.Cartesian3(),
    na = new Oe.Cartesian3(),
    ia = new Oe.Cartesian3(),
    ra = new Oe.Cartesian3(),
    sa = new Oe.Cartesian3(),
    oa = new Oe.Cartesian3(),
    la = new Le.EncodedCartesian3(),
    ua = new Le.EncodedCartesian3(),
    ca = new Oe.Cartesian3(),
    Ca = new Oe.Cartesian3(),
    pa = new Oe.Cartesian3(),
    da = [new Pe.BoundingSphere(), new Pe.BoundingSphere()],
    ha = [
      0,
      2,
      1,
      0,
      3,
      2,
      0,
      7,
      3,
      0,
      4,
      7,
      0,
      5,
      4,
      0,
      1,
      5,
      5,
      7,
      4,
      5,
      6,
      7,
      5,
      2,
      6,
      5,
      1,
      2,
      3,
      6,
      2,
      3,
      7,
      6,
    ],
    ga = ha.length;
  function fa(e) {
    return new Ae.GeometryAttribute({
      componentDatatype: ke.ComponentDatatype.FLOAT,
      componentsPerAttribute: 4,
      normalize: !1,
      values: e,
    });
  }
  return (
    (w._projectNormal = Re),
    function (e, a) {
      return Se.initialize().then(function () {
        return B.defined(a) && (e = w.unpack(e, a)), w.createGeometry(e);
      });
    }
  );
});