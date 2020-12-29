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
  "./EllipsoidOutlineGeometry-7ef60a22",
], function (r, e, t, n, i, c, f, o, a, d, u, b, s) {
  "use strict";
  return function (e, t) {
    return (
      r.defined(e.buffer) && (e = s.EllipsoidOutlineGeometry.unpack(e, t)),
      s.EllipsoidOutlineGeometry.createGeometry(e)
    );
  };
});
