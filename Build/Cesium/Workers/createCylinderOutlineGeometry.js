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
  "./GeometryOffsetAttribute-7350d9af",
  "./CylinderGeometryLibrary-b0214ab1",
], function (m, t, e, p, y, i, r, _, h, A, v, R, G) {
  "use strict";
  var O = new p.Cartesian2();
  function s(t) {
    var e = (t = m.defaultValue(t, m.defaultValue.EMPTY_OBJECT)).length,
      i = t.topRadius,
      r = t.bottomRadius,
      a = m.defaultValue(t.slices, 128),
      n = Math.max(m.defaultValue(t.numberOfVerticalLines, 16), 0);
    (this._length = e),
      (this._topRadius = i),
      (this._bottomRadius = r),
      (this._slices = a),
      (this._numberOfVerticalLines = n),
      (this._offsetAttribute = t.offsetAttribute),
      (this._workerName = "createCylinderOutlineGeometry");
  }
  (s.packedLength = 6),
    (s.pack = function (t, e, i) {
      return (
        (i = m.defaultValue(i, 0)),
        (e[i++] = t._length),
        (e[i++] = t._topRadius),
        (e[i++] = t._bottomRadius),
        (e[i++] = t._slices),
        (e[i++] = t._numberOfVerticalLines),
        (e[i] = m.defaultValue(t._offsetAttribute, -1)),
        e
      );
    });
  var f = {
    length: void 0,
    topRadius: void 0,
    bottomRadius: void 0,
    slices: void 0,
    numberOfVerticalLines: void 0,
    offsetAttribute: void 0,
  };
  return (
    (s.unpack = function (t, e, i) {
      e = m.defaultValue(e, 0);
      var r = t[e++],
        a = t[e++],
        n = t[e++],
        o = t[e++],
        u = t[e++],
        e = t[e];
      return m.defined(i)
        ? ((i._length = r),
          (i._topRadius = a),
          (i._bottomRadius = n),
          (i._slices = o),
          (i._numberOfVerticalLines = u),
          (i._offsetAttribute = -1 === e ? void 0 : e),
          i)
        : ((f.length = r),
          (f.topRadius = a),
          (f.bottomRadius = n),
          (f.slices = o),
          (f.numberOfVerticalLines = u),
          (f.offsetAttribute = -1 === e ? void 0 : e),
          new s(f));
    }),
    (s.createGeometry = function (t) {
      var e = t._length,
        i = t._topRadius,
        r = t._bottomRadius,
        a = t._slices,
        n = t._numberOfVerticalLines;
      if (!(e <= 0 || i < 0 || r < 0 || (0 === i && 0 === r))) {
        var o,
          u,
          s = 2 * a,
          f = G.CylinderGeometryLibrary.computePositions(e, i, r, a, !1),
          d = 2 * a;
        0 < n && ((o = Math.min(n, a)), (u = Math.round(a / o)), (d += o));
        for (
          var b = v.IndexDatatype.createTypedArray(s, 2 * d), c = 0, l = 0;
          l < a - 1;
          l++
        )
          (b[c++] = l),
            (b[c++] = l + 1),
            (b[c++] = l + a),
            (b[c++] = l + 1 + a);
        if (
          ((b[c++] = a - 1),
          (b[c++] = 0),
          (b[c++] = a + a - 1),
          (b[c++] = a),
          0 < n)
        )
          for (l = 0; l < a; l += u) (b[c++] = l), (b[c++] = l + a);
        n = new A.GeometryAttributes();
        (n.position = new h.GeometryAttribute({
          componentDatatype: _.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: f,
        })),
          (O.x = 0.5 * e),
          (O.y = Math.max(r, i));
        i = new y.BoundingSphere(p.Cartesian3.ZERO, p.Cartesian2.magnitude(O));
        return (
          m.defined(t._offsetAttribute) &&
            ((e = f.length),
            (f = new Uint8Array(e / 3)),
            (e = t._offsetAttribute === R.GeometryOffsetAttribute.NONE ? 0 : 1),
            R.arrayFill(f, e),
            (n.applyOffset = new h.GeometryAttribute({
              componentDatatype: _.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: f,
            }))),
          new h.Geometry({
            attributes: n,
            indices: b,
            primitiveType: h.PrimitiveType.LINES,
            boundingSphere: i,
            offsetAttribute: t._offsetAttribute,
          })
        );
      }
    }),
    function (t, e) {
      return m.defined(e) && (t = s.unpack(t, e)), s.createGeometry(t);
    }
  );
});