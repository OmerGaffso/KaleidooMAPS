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
  "./EllipseGeometryLibrary-55d6b793",
  "./EllipseOutlineGeometry-19397c29",
], function (r, e, t, n, i, c, o, l, a, s, d, f, b, u) {
  "use strict";
  return function (e, t) {
    return (
      r.defined(t) && (e = u.EllipseOutlineGeometry.unpack(e, t)),
      (e._center = n.Cartesian3.clone(e._center)),
      (e._ellipsoid = n.Ellipsoid.clone(e._ellipsoid)),
      u.EllipseOutlineGeometry.createGeometry(e)
    );
  };
});