const genererSprite = (side, hash, anaverse) => {
  let alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
  let b58dec = (str) =>
    [...str].reduce(
      (p, c) => (p * alphabet.length + alphabet.indexOf(c)) | 0,
      0
    );
  let fxhashTrunc = hash.slice(2);
  let regex = new RegExp(".{" + ((hash.length / 4) | 0) + "}", "g");
  let hashes = fxhashTrunc.match(regex).map((h) => b58dec(h));
  let sfc32 = (a, b, c, d) => {
    return () => {
      a |= 0;
      b |= 0;
      c |= 0;
      d |= 0;
      var t = (((a + b) | 0) + d) | 0;
      d = (d + 1) | 0;
      a = b ^ (b >>> 9);
      b = (c + (c << 3)) | 0;
      c = (c << 21) | (c >>> 11);
      c = (c + t) | 0;
      return (t >>> 0) / 4294967296;
    };
  };
  var fxrand = sfc32(...hashes);

  const canvas = document.createElement("canvas");
  canvas.width = side;
  canvas.height = side;
  const ctx = canvas.getContext("2d");

  const features = {};

  const r = fxrand;
  //simple cube

  const rint = (n) => Math.floor(r() * n);

  // ------ Your sprite art starts below this line ------
  ctx.globalCompositeOperation = "multiply";

  ctx.lineWidth = side * 0.04;
  ctx.strokeStyle = "red";
  ctx.strokeRect(side * 0.02, side * 0.02, side * 0.94, side * 0.94);
  ctx.strokeStyle = "cyan";
  ctx.strokeRect(side * 0.04, side * 0.04, side * 0.94, side * 0.94);

  function spriter() {
    const definition = 10 + rint(20);

    const subside = side / definition;
    const decay = 1 + rint(3);

    for (let y = 2; y < definition - 2; ++y) {
      for (let x = 0; x < definition / 2 - 1; ++x) {
        if (r() < 0.5 - (x * decay) / definition) {
          ctx.fillStyle = "red";
          ctx.fillRect(
            side / 2 - (x + 1) * subside - 1 - side * 0.01,
            y * subside - 1 - side * 0.01,
            subside + 2,
            subside + 2
          );
          ctx.fillRect(
            side / 2 + x * subside - 1 - side * 0.01,
            y * subside - 1 - side * 0.01,
            subside + 2,
            subside + 2
          );
          ctx.fillStyle = "cyan";
          ctx.fillRect(
            side / 2 - (x + 1) * subside - 1 + side * 0.01,
            y * subside - 1 + side * 0.01,
            subside + 2,
            subside + 2
          );
          ctx.fillRect(
            side / 2 + x * subside - 1 + side * 0.01,
            y * subside - 1 + side * 0.01,
            subside + 2,
            subside + 2
          );
        }
      }
    }
  }

  spriter();

  // ------ Your code stops above this line ------
  const sprite = ctx.getImageData(0, 0, side, side);

  return { sprite, side, features };
};

export { genererSprite };
