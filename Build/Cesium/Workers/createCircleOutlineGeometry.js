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
], function (r, e, i, l, t, n, s, o, a, c, d, u, m, p) {
  "use strict";
  function y(e) {
    var i = (e = r.defaultValue(e, r.defaultValue.EMPTY_OBJECT)).radius,
      e = {
        center: e.center,
        semiMajorAxis: i,
        semiMinorAxis: i,
        ellipsoid: e.ellipsoid,
        height: e.height,
        extrudedHeight: e.extrudedHeight,
        granularity: e.granularity,
        numberOfVerticalLines: e.numberOfVerticalLines,
      };
    (this._ellipseGeometry = new p.EllipseOutlineGeometry(e)),
      (this._workerName = "createCircleOutlineGeometry");
  }
  (y.packedLength = p.EllipseOutlineGeometry.packedLength),
    (y.pack = function (e, i, t) {
      return p.EllipseOutlineGeometry.pack(e._ellipseGeometry, i, t);
    });
  var f = new p.EllipseOutlineGeometry({
      center: new l.Cartesian3(),
      semiMajorAxis: 1,
      semiMinorAxis: 1,
    }),
    G = {
      center: new l.Cartesian3(),
      radius: void 0,
      ellipsoid: l.Ellipsoid.clone(l.Ellipsoid.UNIT_SPHERE),
      height: void 0,
      extrudedHeight: void 0,
      granularity: void 0,
      numberOfVerticalLines: void 0,
      semiMajorAxis: void 0,
      semiMinorAxis: void 0,
    };
  return (
    (y.unpack = function (e, i, t) {
      i = p.EllipseOutlineGeometry.unpack(e, i, f);
      return (
        (G.center = l.Cartesian3.clone(i._center, G.center)),
        (G.ellipsoid = l.Ellipsoid.clone(i._ellipsoid, G.ellipsoid)),
        (G.height = i._height),
        (G.extrudedHeight = i._extrudedHeight),
        (G.granularity = i._granularity),
        (G.numberOfVerticalLines = i._numberOfVerticalLines),
        r.defined(t)
          ? ((G.semiMajorAxis = i._semiMajorAxis),
            (G.semiMinorAxis = i._semiMinorAxis),
            (t._ellipseGeometry = new p.EllipseOutlineGeometry(G)),
            t)
          : ((G.radius = i._semiMajorAxis), new y(G))
      );
    }),
    (y.createGeometry = function (e) {
      return p.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry);
    }),
    function (e, i) {
      return (
        r.defined(i) && (e = y.unpack(e, i)),
        (e._ellipseGeometry._center = l.Cartesian3.clone(
          e._ellipseGeometry._center
        )),
        (e._ellipseGeometry._ellipsoid = l.Ellipsoid.clone(
          e._ellipseGeometry._ellipsoid
        )),
        y.createGeometry(e)
      );
    }
  );
});
