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
  "./VertexFormat-7572c785",
], function (n, e, t, o, m, r, a, i, u, c, p) {
  "use strict";
  function y(e) {
    e = n.defaultValue(e, n.defaultValue.EMPTY_OBJECT);
    e = n.defaultValue(e.vertexFormat, p.VertexFormat.DEFAULT);
    (this._vertexFormat = e), (this._workerName = "createPlaneGeometry");
  }
  (y.packedLength = p.VertexFormat.packedLength),
    (y.pack = function (e, t, r) {
      return (
        (r = n.defaultValue(r, 0)),
        p.VertexFormat.pack(e._vertexFormat, t, r),
        t
      );
    });
  var s = new p.VertexFormat(),
    b = { vertexFormat: s };
  y.unpack = function (e, t, r) {
    t = n.defaultValue(t, 0);
    t = p.VertexFormat.unpack(e, t, s);
    return n.defined(r)
      ? ((r._vertexFormat = p.VertexFormat.clone(t, r._vertexFormat)), r)
      : new y(b);
  };
  var A = new o.Cartesian3(-0.5, -0.5, 0),
    l = new o.Cartesian3(0.5, 0.5, 0);
  return (
    (y.createGeometry = function (e) {
      var t,
        r,
        n = e._vertexFormat,
        a = new c.GeometryAttributes();
      return (
        n.position &&
          (((e = new Float64Array(12))[0] = A.x),
          (e[1] = A.y),
          (e[2] = 0),
          (e[3] = l.x),
          (e[4] = A.y),
          (e[5] = 0),
          (e[6] = l.x),
          (e[7] = l.y),
          (e[8] = 0),
          (e[9] = A.x),
          (e[10] = l.y),
          (e[11] = 0),
          (a.position = new u.GeometryAttribute({
            componentDatatype: i.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            values: e,
          })),
          n.normal &&
            (((e = new Float32Array(12))[0] = 0),
            (e[1] = 0),
            (e[2] = 1),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 1),
            (e[9] = 0),
            (e[10] = 0),
            (e[11] = 1),
            (a.normal = new u.GeometryAttribute({
              componentDatatype: i.ComponentDatatype.FLOAT,
              componentsPerAttribute: 3,
              values: e,
            }))),
          n.st &&
            (((t = new Float32Array(8))[0] = 0),
            (t[1] = 0),
            (t[2] = 1),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 1),
            (a.st = new u.GeometryAttribute({
              componentDatatype: i.ComponentDatatype.FLOAT,
              componentsPerAttribute: 2,
              values: t,
            }))),
          n.tangent &&
            (((t = new Float32Array(12))[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            (t[6] = 1),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 1),
            (t[10] = 0),
            (t[11] = 0),
            (a.tangent = new u.GeometryAttribute({
              componentDatatype: i.ComponentDatatype.FLOAT,
              componentsPerAttribute: 3,
              values: t,
            }))),
          n.bitangent &&
            (((r = new Float32Array(12))[0] = 0),
            (r[1] = 1),
            (r[2] = 0),
            (r[3] = 0),
            (r[4] = 1),
            (r[5] = 0),
            (r[6] = 0),
            (r[7] = 1),
            (r[8] = 0),
            (r[9] = 0),
            (r[10] = 1),
            (r[11] = 0),
            (a.bitangent = new u.GeometryAttribute({
              componentDatatype: i.ComponentDatatype.FLOAT,
              componentsPerAttribute: 3,
              values: r,
            }))),
          ((r = new Uint16Array(6))[0] = 0),
          (r[1] = 1),
          (r[2] = 2),
          (r[3] = 0),
          (r[4] = 2),
          (r[5] = 3)),
        new u.Geometry({
          attributes: a,
          indices: r,
          primitiveType: u.PrimitiveType.TRIANGLES,
          boundingSphere: new m.BoundingSphere(o.Cartesian3.ZERO, Math.sqrt(2)),
        })
      );
    }),
    function (e, t) {
      return n.defined(t) && (e = y.unpack(e, t)), y.createGeometry(e);
    }
  );
});
