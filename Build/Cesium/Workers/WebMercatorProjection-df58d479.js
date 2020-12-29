define([
  "exports",
  "./when-54c2dc71",
  "./Check-6c0211bc",
  "./Math-fc8cecf5",
  "./Cartesian2-bddc1162",
], function (e, a, t, i, r) {
  "use strict";
  function n(e) {
    (this._ellipsoid = a.defaultValue(e, r.Ellipsoid.WGS84)),
      (this._semimajorAxis = this._ellipsoid.maximumRadius),
      (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
  }
  Object.defineProperties(n.prototype, {
    ellipsoid: {
      get: function () {
        return this._ellipsoid;
      },
    },
  }),
    (n.mercatorAngleToGeodeticLatitude = function (e) {
      return i.CesiumMath.PI_OVER_TWO - 2 * Math.atan(Math.exp(-e));
    }),
    (n.geodeticLatitudeToMercatorAngle = function (e) {
      n.MaximumLatitude < e
        ? (e = n.MaximumLatitude)
        : e < -n.MaximumLatitude && (e = -n.MaximumLatitude);
      e = Math.sin(e);
      return 0.5 * Math.log((1 + e) / (1 - e));
    }),
    (n.MaximumLatitude = n.mercatorAngleToGeodeticLatitude(Math.PI)),
    (n.prototype.project = function (e, t) {
      var i = this._semimajorAxis,
        o = e.longitude * i,
        i = n.geodeticLatitudeToMercatorAngle(e.latitude) * i,
        e = e.height;
      return a.defined(t)
        ? ((t.x = o), (t.y = i), (t.z = e), t)
        : new r.Cartesian3(o, i, e);
    }),
    (n.prototype.unproject = function (e, t) {
      var i = this._oneOverSemimajorAxis,
        o = e.x * i,
        i = n.mercatorAngleToGeodeticLatitude(e.y * i),
        e = e.z;
      return a.defined(t)
        ? ((t.longitude = o), (t.latitude = i), (t.height = e), t)
        : new r.Cartographic(o, i, e);
    }),
    (e.WebMercatorProjection = n);
});
