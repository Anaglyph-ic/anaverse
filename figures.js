const genererFigures = (fxhash) => {
  let alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
  let b58dec = (str) =>
    [...str].reduce(
      (p, c) => (p * alphabet.length + alphabet.indexOf(c)) | 0,
      0
    );
  let fxhashTrunc = fxhash.slice(2);
  let regex = new RegExp(".{" + ((fxhash.length / 4) | 0) + "}", "g");
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

  const figures = [];

  const u = 1;

  const random = fxrand;
  const randint = (s, e = 0) => {
    if (e === 0) {
      e = s;
      s = 0;
    }
    return Math.floor(s + random() * (e - s));
  };
  const randpos = (a) => {
    return a[Math.floor(random() * a.length)];
  };

  const hsl2rgb = (h, s, l) => {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) =>
      l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [f(0), f(8), f(4)];
  };

  ////////////////////////// features ////////////////////////////

  const struct = random() > 0.5 ? 1 : 2;
  const caveNy = struct === 2 ? 5 : random() > 0.9 ? 15 : 5;
  let cx = randint(360);
  let cy = 35;
  if (struct === 2 && random() > 0.5) cy = -15 - randint(45);
  let hue = randpos([0, 20, 40, 60, 80, 160, 180, 200, 240, 260, 280]);
  let rgb = hue === 0 ? [0.8, 0.8, 0.8] : hsl2rgb(hue, 0.5, 0.9);
  let rgba = hue === 0 ? [0.8, 0.8, 0.8] : hsl2rgb(hue, 0.15, 0.7);
  let lava = random() > 0.5 ? false : true;
  let rez = randpos([16, 32, 64, 128, 128, 128, 128]);
  let frag = random() > 0.9 ? true : false;

  //let rez = Math.floor(16+random()*112)

  const features = {
    rgb,
    rgba,
    cx,
    cy,
    caveNy,
    structure: struct === 1 ? "asteroid" : "meteroid",
    caves: caveNy === 15 ? "horizontal" : "normal",
    hue: hue,
    lava: lava,
    resolution: rez,
    scraps: frag,
  };
  //console.log(fxhash);
  //console.log(window.$fxhashFeatures);

  ////////////////////////// noise ////////////////////////////

  // Ref: http://webstaff.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
  const perm = new Uint32Array(512);
  const grad = new Int32Array([
    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0,
    -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
  ]);

  {
    const p = new Uint32Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const n = Math.floor((i + 1) * random());
      const q = p[i];
      p[i] = p[n];
      p[n] = q;
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  }

  const noise = (xin, yin, zin) => {
    const s = (xin + yin + zin) * 0.3333333,
      i = (xin + s) | 0,
      j = (yin + s) | 0,
      k = (zin + s) | 0,
      t = (i + j + k) * 0.1666666,
      X0 = i - t,
      Y0 = j - t,
      Z0 = k - t,
      x0 = xin - X0,
      y0 = yin - Y0,
      z0 = zin - Z0;

    let i1, j1, k1, i2, j2, k2;

    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      } else if (x0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      } else {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      }
    } else {
      if (y0 < z0) {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 0;
        j2 = 1;
        k2 = 1;
      } else if (x0 < z0) {
        i1 = 0;
        j1 = 1;
        k1 = 0;
        i2 = 0;
        j2 = 1;
        k2 = 1;
      } else {
        i1 = 0;
        j1 = 1;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      }
    }

    const x1 = x0 - i1 + 0.1666666,
      y1 = y0 - j1 + 0.1666666,
      z1 = z0 - k1 + 0.1666666,
      x2 = x0 - i2 + 0.3333333,
      y2 = y0 - j2 + 0.3333333,
      z2 = z0 - k2 + 0.3333333,
      x3 = x0 - 0.5,
      y3 = y0 - 0.5,
      z3 = z0 - 0.5,
      ii = i & 255,
      jj = j & 255,
      kk = k & 255,
      gi0 = 3 * (perm[ii + perm[jj + perm[kk]]] % 12),
      gi1 = 3 * (perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]] % 12),
      gi2 = 3 * (perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]] % 12),
      gi3 = 3 * (perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]] % 12);

    let t0, t1, t2, t3, n0, n1, n2, n3;
    t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) n0 = 0;
    else {
      t0 *= t0;
      n0 = t0 * t0 * (x0 * grad[gi0] + y0 * grad[gi0 + 1] + z0 * grad[gi0 + 2]);
    }
    t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) n1 = 0;
    else {
      t1 *= t1;
      n1 = t1 * t1 * (x1 * grad[gi1] + y1 * grad[gi1 + 1] + z1 * grad[gi1 + 2]);
    }
    t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) n2 = 0;
    else {
      t2 *= t2;
      n2 = t2 * t2 * (x2 * grad[gi2] + y2 * grad[gi2 + 1] + z2 * grad[gi2 + 2]);
    }
    t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) n3 = 0;
    else {
      t3 *= t3;
      n3 = t3 * t3 * (x3 * grad[gi3] + y3 * grad[gi3 + 1] + z3 * grad[gi3 + 2]);
    }
    return 20 * (n0 + n1 + n2 + n3) + 1;
  };

  //////

  const noises = (x, y, z) =>
    noise(x, y, z) +
    noise(x * 2, y * 2, z * 2) +
    +noise(x * 4, y * 4, z * 4) +
    +noise(x * 8, y * 8, z * 8) +
    +noise(x * 16, y * 16, z * 16);

  const createVolume = (size) => {
    const volume = new Uint8Array(size * size * size);
    let plateauFalloff, centerFalloff, density;
    for (let x = 1; x < size - 1; x++) {
      for (let y = 1; y < size - 1; y++) {
        for (let z = 1; z < size - 1; z++) {
          let xf = x / size;
          let yf = y / size;
          let zf = z / size;
          let caves = Math.pow(noise(xf * 5, yf * caveNy, zf * 5), 3);
          if (caves < 0.5) density = 0;
          else {
            if (struct === 1) {
              if (yf <= 0.8) plateauFalloff = 1;
              else if (0.8 < yf && yf < 0.9)
                plateauFalloff =
                  caveNy === 15 ? 1.5 - (yf - 0.8) * 15 : 1.0 - (yf - 0.8) * 10;
              else plateauFalloff = 0;
              centerFalloff =
                0.1 /
                (Math.pow((xf - 0.5) * 1.5, 2) +
                  Math.pow((yf - 1.0) * 0.8, 2) +
                  Math.pow((zf - 0.5) * 1.5, 2));
            } else {
              plateauFalloff = 0.8;
              centerFalloff =
                0.1 /
                (Math.pow((xf - 0.5) * 1.5, 2) +
                  Math.pow((yf - 0.5) * 1.5, 2) +
                  Math.pow((zf - 0.5) * 1.5, 2));
            }

            density =
              noises(xf, yf * 0.5, zf) *
              centerFalloff *
              plateauFalloff *
              Math.pow(noise((xf + 1) * 3, (yf + 1) * 3, (zf + 1) * 3), 2.5);
          }
          if (density > 2.5) {
            let c = 1;
            if (lava) {
              const xl = (2 * (x - size * 0.5)) / size;
              const yl = (2 * (y - size * 0.5)) / size;
              const zl = (2 * (z - size * 0.5)) / size;
              const d = Math.sqrt(xl * xl + yl * yl + zl * zl);
              const s = noise(xl * 5 + 4, yl * 5 + 4, zl * 5 + 4);
              if (s > 1.1 && d < 0.55) {
                pushBlock(x, y, z, true);
                c = 2;
              }
            }

            volume[x + y * size + z * size * size] = c;
            if (c === 1) {
              pushBlock(x, y, z);
            }
          }
          if (frag === true && random() > 0.99995) {
            pushBlock(x, y, z);
            volume[x + y * size + z * size * size] = 1;
          }
        }
      }
    }
    return volume;
  };

  const pushBlock = (x, y, z, full) =>
    figures.push({
      geometry: {
        type: "BoxGeometry", // Type of geometry
        args: [
          // Arguments relevant to the geometry (check THREE API)
          1 * u, // Cube width
          1 * u, // Cube height
          1 * u, // Cube depth
        ],
      },
      pos: {
        // Position
        x: x * u,
        y: y * u,
        z: z * u,
      },
      rot: {
        // Rotation
        x: 0,
        y: 0,
        z: 0,
      },
      lines: !full, // Display color segments (like wireframe, but faces not triangles)
      hatch: !full, // Fill with white texture
      full: full, // Fill with color texture (in the anaverse, red and cyan)
    });

  const volume = createVolume(rez);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // add a landing pad
      figures.push({
        geometry: {
          type: "BoxGeometry", // Type of geometry
          args: [
            // Arguments relevant to the geometry (check THREE API)
            1 * u, // Cube width
            1 * u, // Cube height
            1 * u, // Cube depth
          ],
        },
        pos: {
          // Position
          x: i * u,
          y: -1.5 * u,
          z: j * u,
        },
        rot: {
          // Rotation
          x: 0,
          y: 0,
          z: 0,
        },
        lines: true, // Display color segments (like wireframe, but faces not triangles)
        hatch: true, // Fill with white texture
        full: false, // Fill with color texture (in the anaverse, red and cyan)
      });
    }
  }

  console.log(features);
  console.log("lava is ", features.lava);

  return { figures, features, volume, noise };
};

export { genererFigures };
