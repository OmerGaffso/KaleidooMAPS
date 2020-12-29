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
  "./EllipseGeometryLibrary-55d6b793",
  "./GeometryInstance-161eaba2",
  "./EllipseGeometry-1afae560",
], function (r, e, t, n, a, c, i, o, s, d, b, f, l, m, p, y, u, G, C, E, A) {
  "use strict";
  return function (e, t) {
    return (
      r.defined(t) && (e = A.EllipseGeometry.unpack(e, t)),
      (e._center = n.Cartesian3.clone(e._center)),
      (e._ellipsoid = n.Ellipsoid.clone(e._ellipsoid)),
      A.EllipseGeometry.createGeometry(e)
    );
  };
});