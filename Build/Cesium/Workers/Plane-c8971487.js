define([
  "exports",
  "./when-54c2dc71",
  "./Check-6c0211bc",
  "./Math-fc8cecf5",
  "./Cartesian2-bddc1162",
  "./Transforms-d07bb42c",
], function (n, r, e, a, i, s) {
  "use strict";
  function c(n, e) {
    (this.normal = i.Cartesian3.clone(n)), (this.distance = e);
  }
  c.fromPointNormal = function (n, e, a) {
    n = -i.Cartesian3.dot(e, n);
    return r.defined(a)
      ? (i.Cartesian3.clone(e, a.normal), (a.distance = n), a)
      : new c(e, n);
  };
  var t = new i.Cartesian3();
  (c.fromCartesian4 = function (n, e) {
    var a = i.Cartesian3.fromCartesian4(n, t),
      n = n.w;
    return r.defined(e)
      ? (i.Cartesian3.clone(a, e.normal), (e.distance = n), e)
      : new c(a, n);
  }),
    (c.getPointDistance = function (n, e) {
      return i.Cartesian3.dot(n.normal, e) + n.distance;
    });
  var o = new i.Cartesian3();
  c.projectPointOntoPlane = function (n, e, a) {
    r.defined(a) || (a = new i.Cartesian3());
    var t = c.getPointDistance(n, e),
      t = i.Cartesian3.multiplyByScalar(n.normal, t, o);
    return i.Cartesian3.subtract(e, t, a);
  };
  var d = new s.Matrix4(),
    l = new s.Cartesian4(),
    C = new i.Cartesian3();
  (c.transform = function (n, e, a) {
    var t = n.normal,
      n = n.distance,
      e = s.Matrix4.inverseTranspose(e, d),
      n = s.Cartesian4.fromElements(t.x, t.y, t.z, n, l),
      n = s.Matrix4.multiplyByVector(e, n, n),
      e = i.Cartesian3.fromCartesian4(n, C);
    return (
      (n = s.Cartesian4.divideByScalar(n, i.Cartesian3.magnitude(e), n)),
      c.fromCartesian4(n, a)
    );
  }),
    (c.clone = function (n, e) {
      return r.defined(e)
        ? (i.Cartesian3.clone(n.normal, e.normal), (e.distance = n.distance), e)
        : new c(n.normal, n.distance);
    }),
    (c.equals = function (n, e) {
      return (
        n.distance === e.distance && i.Cartesian3.equals(n.normal, e.normal)
      );
    }),
    (c.ORIGIN_XY_PLANE = Object.freeze(new c(i.Cartesian3.UNIT_Z, 0))),
    (c.ORIGIN_YZ_PLANE = Object.freeze(new c(i.Cartesian3.UNIT_X, 0))),
    (c.ORIGIN_ZX_PLANE = Object.freeze(new c(i.Cartesian3.UNIT_Y, 0))),
    (n.Plane = c);
});