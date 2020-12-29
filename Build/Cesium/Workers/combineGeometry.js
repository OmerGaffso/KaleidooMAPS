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
  "./PrimitivePipeline-1823f7f9",
  "./WebMercatorProjection-df58d479",
  "./createTaskProcessorWorker",
], function (e, t, i, r, n, c, o, a, s, b, m, f, d, P, p, u, y, C, l) {
  "use strict";
  return l(function (e, t) {
    return (
      (e = y.PrimitivePipeline.unpackCombineGeometryParameters(e)),
      (e = y.PrimitivePipeline.combineGeometry(e)),
      y.PrimitivePipeline.packCombineGeometryResults(e, t)
    );
  });
});
