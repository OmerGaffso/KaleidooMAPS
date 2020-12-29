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
  "./arrayRemoveDuplicates-ebc732b0",
  "./BoundingRectangle-57c5d513",
  "./EllipsoidTangentPlane-0a0e472c",
  "./EllipsoidRhumbLine-c704bf4c",
  "./PolygonPipeline-b9585f01",
  "./PolylineVolumeGeometryLibrary-c4d4bf97",
  "./EllipsoidGeodesic-30fae80b",
  "./PolylinePipeline-fa11d71d",
], function (d, e, t, c, u, i, n, y, h, f, g, a, r, o, l, s, p, m, E, b, v) {
  "use strict";
  function P(e) {
    var i = (e = d.defaultValue(e, d.defaultValue.EMPTY_OBJECT))
        .polylinePositions,
      n = e.shapePositions;
    (this._positions = i),
      (this._shape = n),
      (this._ellipsoid = c.Ellipsoid.clone(
        d.defaultValue(e.ellipsoid, c.Ellipsoid.WGS84)
      )),
      (this._cornerType = d.defaultValue(e.cornerType, E.CornerType.ROUNDED)),
      (this._granularity = d.defaultValue(
        e.granularity,
        t.CesiumMath.RADIANS_PER_DEGREE
      )),
      (this._workerName = "createPolylineVolumeOutlineGeometry");
    i = 1 + i.length * c.Cartesian3.packedLength;
    (i += 1 + n.length * c.Cartesian2.packedLength),
      (this.packedLength = i + c.Ellipsoid.packedLength + 2);
  }
  P.pack = function (e, i, n) {
    var t;
    n = d.defaultValue(n, 0);
    var a = e._positions,
      r = a.length;
    for (i[n++] = r, t = 0; t < r; ++t, n += c.Cartesian3.packedLength)
      c.Cartesian3.pack(a[t], i, n);
    var o = e._shape,
      r = o.length;
    for (i[n++] = r, t = 0; t < r; ++t, n += c.Cartesian2.packedLength)
      c.Cartesian2.pack(o[t], i, n);
    return (
      c.Ellipsoid.pack(e._ellipsoid, i, n),
      (n += c.Ellipsoid.packedLength),
      (i[n++] = e._cornerType),
      (i[n] = e._granularity),
      i
    );
  };
  var _ = c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),
    k = {
      polylinePositions: void 0,
      shapePositions: void 0,
      ellipsoid: _,
      height: void 0,
      cornerType: void 0,
      granularity: void 0,
    };
  P.unpack = function (e, i, n) {
    i = d.defaultValue(i, 0);
    for (
      var t = e[i++], a = new Array(t), r = 0;
      r < t;
      ++r, i += c.Cartesian3.packedLength
    )
      a[r] = c.Cartesian3.unpack(e, i);
    t = e[i++];
    var o = new Array(t);
    for (r = 0; r < t; ++r, i += c.Cartesian2.packedLength)
      o[r] = c.Cartesian2.unpack(e, i);
    var l = c.Ellipsoid.unpack(e, i, _);
    i += c.Ellipsoid.packedLength;
    var s = e[i++],
      p = e[i];
    return d.defined(n)
      ? ((n._positions = a),
        (n._shape = o),
        (n._ellipsoid = c.Ellipsoid.clone(l, n._ellipsoid)),
        (n._cornerType = s),
        (n._granularity = p),
        n)
      : ((k.polylinePositions = a),
        (k.shapePositions = o),
        (k.cornerType = s),
        (k.granularity = p),
        new P(k));
  };
  var C = new l.BoundingRectangle();
  return (
    (P.createGeometry = function (e) {
      var i = e._positions,
        n = o.arrayRemoveDuplicates(i, c.Cartesian3.equalsEpsilon),
        t = e._shape,
        t = E.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(t);
      if (!(n.length < 2 || t.length < 3)) {
        m.PolygonPipeline.computeWindingOrder2D(t) ===
          m.WindingOrder.CLOCKWISE && t.reverse();
        i = l.BoundingRectangle.fromPoints(t, C);
        return (function (e, i) {
          var n = new f.GeometryAttributes();
          n.position = new h.GeometryAttribute({
            componentDatatype: y.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            values: e,
          });
          var t = i.length,
            i = n.position.values.length / 3,
            a = e.length / 3 / t,
            r = g.IndexDatatype.createTypedArray(i, 2 * t * (1 + a)),
            o = 0,
            l = 0,
            s = l * t;
          for (c = 0; c < t - 1; c++) (r[o++] = c + s), (r[o++] = c + s + 1);
          for (
            r[o++] = t - 1 + s, r[o++] = s, s = (l = a - 1) * t, c = 0;
            c < t - 1;
            c++
          )
            (r[o++] = c + s), (r[o++] = c + s + 1);
          for (r[o++] = t - 1 + s, r[o++] = s, l = 0; l < a - 1; l++)
            for (var p = t * l, d = p + t, c = 0; c < t; c++)
              (r[o++] = c + p), (r[o++] = c + d);
          return new h.Geometry({
            attributes: n,
            indices: g.IndexDatatype.createTypedArray(i, r),
            boundingSphere: u.BoundingSphere.fromVertices(e),
            primitiveType: h.PrimitiveType.LINES,
          });
        })(E.PolylineVolumeGeometryLibrary.computePositions(n, t, i, e, !1), t);
      }
    }),
    function (e, i) {
      return (
        d.defined(i) && (e = P.unpack(e, i)),
        (e._ellipsoid = c.Ellipsoid.clone(e._ellipsoid)),
        P.createGeometry(e)
      );
    }
  );
});
