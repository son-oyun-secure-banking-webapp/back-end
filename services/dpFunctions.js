exports.addLaplaceNoise = (value, sensitivity, epsilon) => {
  function getLaplaceNoise(scale) {
    const u = 0.5 - Math.random();
    return -scale * Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
  }

  const scale = sensitivity / epsilon;
  const noise = getLaplaceNoise(scale);
  return value + noise;
};

exports.addGeometricNoise = (value, sensitivity, epsilon) => {
  function getGeometricNoise(p) {
    const u = Math.random();
    return Math.floor(Math.log(u) / Math.log(1 - p));
  }

  const alpha = Math.exp(-epsilon / sensitivity);
  const p = 1 - alpha;
  const noise = getGeometricNoise(p);
  return Math.max(0, value + noise);
};
