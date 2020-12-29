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
  "./VertexFormat-7572c785",
  "./BoxGeometry-7dc94aad",
], function (r, e, t, c, o, n, a, f, d, b, m, i, u) {
  "use strict";
  return function (e, t) {
    return (
      r.defined(t) && (e = u.BoxGeometry.unpack(e, t)),
      u.BoxGeometry.createGeometry(e)
    );
  };
});