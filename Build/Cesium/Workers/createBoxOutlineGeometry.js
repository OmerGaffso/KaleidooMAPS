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
  "./GeometryOffsetAttribute-7350d9af",
], function (u, e, t, m, o, a, n, s, f, c, d) {
  "use strict";
  var p = new m.Cartesian3();
  function r(e) {
    var t = (e = u.defaultValue(e, u.defaultValue.EMPTY_OBJECT)).minimum,
      a = e.maximum;
    (this._min = m.Cartesian3.clone(t)),
      (this._max = m.Cartesian3.clone(a)),
      (this._offsetAttribute = e.offsetAttribute),
      (this._workerName = "createBoxOutlineGeometry");
  }
  (r.fromDimensions = function (e) {
    var t = (e = u.defaultValue(e, u.defaultValue.EMPTY_OBJECT)).dimensions,
      t = m.Cartesian3.multiplyByScalar(t, 0.5, new m.Cartesian3());
    return new r({
      minimum: m.Cartesian3.negate(t, new m.Cartesian3()),
      maximum: t,
      offsetAttribute: e.offsetAttribute,
    });
  }),
    (r.fromAxisAlignedBoundingBox = function (e) {
      return new r({ minimum: e.minimum, maximum: e.maximum });
    }),
    (r.packedLength = 2 * m.Cartesian3.packedLength + 1),
    (r.pack = function (e, t, a) {
      return (
        (a = u.defaultValue(a, 0)),
        m.Cartesian3.pack(e._min, t, a),
        m.Cartesian3.pack(e._max, t, a + m.Cartesian3.packedLength),
        (t[a + 2 * m.Cartesian3.packedLength] = u.defaultValue(
          e._offsetAttribute,
          -1
        )),
        t
      );
    });
  var y = new m.Cartesian3(),
    b = new m.Cartesian3(),
    C = { minimum: y, maximum: b, offsetAttribute: void 0 };
  return (
    (r.unpack = function (e, t, a) {
      t = u.defaultValue(t, 0);
      var n = m.Cartesian3.unpack(e, t, y),
        i = m.Cartesian3.unpack(e, t + m.Cartesian3.packedLength, b),
        t = e[t + 2 * m.Cartesian3.packedLength];
      return u.defined(a)
        ? ((a._min = m.Cartesian3.clone(n, a._min)),
          (a._max = m.Cartesian3.clone(i, a._max)),
          (a._offsetAttribute = -1 === t ? void 0 : t),
          a)
        : ((C.offsetAttribute = -1 === t ? void 0 : t), new r(C));
    }),
    (r.createGeometry = function (e) {
      var t = e._min,
        a = e._max;
      if (!m.Cartesian3.equals(t, a)) {
        var n = new c.GeometryAttributes(),
          i = new Uint16Array(24),
          r = new Float64Array(24);
        (r[0] = t.x),
          (r[1] = t.y),
          (r[2] = t.z),
          (r[3] = a.x),
          (r[4] = t.y),
          (r[5] = t.z),
          (r[6] = a.x),
          (r[7] = a.y),
          (r[8] = t.z),
          (r[9] = t.x),
          (r[10] = a.y),
          (r[11] = t.z),
          (r[12] = t.x),
          (r[13] = t.y),
          (r[14] = a.z),
          (r[15] = a.x),
          (r[16] = t.y),
          (r[17] = a.z),
          (r[18] = a.x),
          (r[19] = a.y),
          (r[20] = a.z),
          (r[21] = t.x),
          (r[22] = a.y),
          (r[23] = a.z),
          (n.position = new f.GeometryAttribute({
            componentDatatype: s.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            values: r,
          })),
          (i[0] = 4),
          (i[1] = 5),
          (i[2] = 5),
          (i[3] = 6),
          (i[4] = 6),
          (i[5] = 7),
          (i[6] = 7),
          (i[7] = 4),
          (i[8] = 0),
          (i[9] = 1),
          (i[10] = 1),
          (i[11] = 2),
          (i[12] = 2),
          (i[13] = 3),
          (i[14] = 3),
          (i[15] = 0),
          (i[16] = 0),
          (i[17] = 4),
          (i[18] = 1),
          (i[19] = 5),
          (i[20] = 2),
          (i[21] = 6),
          (i[22] = 3),
          (i[23] = 7);
        (a = m.Cartesian3.subtract(a, t, p)),
          (t = 0.5 * m.Cartesian3.magnitude(a));
        return (
          u.defined(e._offsetAttribute) &&
            ((a = r.length),
            (r = new Uint8Array(a / 3)),
            (a = e._offsetAttribute === d.GeometryOffsetAttribute.NONE ? 0 : 1),
            d.arrayFill(r, a),
            (n.applyOffset = new f.GeometryAttribute({
              componentDatatype: s.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: r,
            }))),
          new f.Geometry({
            attributes: n,
            indices: i,
            primitiveType: f.PrimitiveType.LINES,
            boundingSphere: new o.BoundingSphere(m.Cartesian3.ZERO, t),
            offsetAttribute: e._offsetAttribute,
          })
        );
      }
    }),
    function (e, t) {
      return u.defined(t) && (e = r.unpack(e, t)), r.createGeometry(e);
    }
  );
});
