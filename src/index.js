const xc = 300;
const yc = 300;
const r = 100;
const pi = Math.PI;
const startAngle = 0;

const d1 = (r * 3) / Math.pow(3, 0.5);

const getX = (rad, dim) => {
  return xc + dim * Math.cos(rad);
};

const getY = (rad, dim) => {
  return yc + dim * Math.sin(rad);
};

window.addEventListener("load", (event) => {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.strokeStyle = `rgb(0,220,200)`;
  ctx.beginPath();
  ctx.arc(xc, yc, r, 0, pi * 2);
  ctx.arc(xc, yc, r * 2, 0, pi * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = `rgb(220,220,0)`;
  ctx.arc(getX(0, r), getY(0, r), r, startAngle, pi * 2, false);
  ctx.arc(getX(pi / 3, r), getY(pi / 3, r), r, startAngle, pi * 2, false);
  ctx.arc(
    getX((pi / 3) * 2, r),
    getY((pi / 3) * 2, r),
    r,
    startAngle,
    pi * 2,
    false
  );
  ctx.arc(getX(pi, r), getY(pi, r), r, startAngle, pi * 2, false);
  ctx.arc(
    getX((pi / 3) * 4, r),
    getY((pi / 3) * 4, r),
    r,
    startAngle,
    pi * 2,
    false
  );
  ctx.arc(
    getX((pi / 3) * 5, r),
    getY((pi / 3) * 5, r),
    r,
    startAngle,
    pi * 2,
    false
  );

  console.log(d1);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = `rgb(220,0,220)`;

  ctx.arc(getX(pi / 6, d1), getY(pi / 6, d1), r, startAngle, pi * 2, false);
  ctx.arc(
    getX((pi / 6) * 3, d1),
    getY((pi / 6) * 3, d1),
    r,
    startAngle,
    pi * 2,
    false
  );
  ctx.arc(
    getX((pi / 6) * 5, d1),
    getY((pi / 6) * 5, d1),
    r,
    startAngle,
    pi * 2,
    false
  );
  ctx.arc(
    getX((pi / 6) * 7, d1),
    getY((pi / 6) * 7, d1),
    r,
    startAngle,
    pi * 2,
    false
  );
  ctx.arc(
    getX((pi / 6) * 9, d1),
    getY((pi / 6) * 9, d1),
    r,
    startAngle,
    pi * 2,
    false
  );
  ctx.arc(
    getX((pi / 6) * 11, d1),
    getY((pi / 6) * 11, d1),
    r,
    startAngle,
    pi * 2,
    false
  );

  ctx.stroke();

  //   for (let i = 0; i < 6; i++) {
  //     for (let j = 0; j < 6; j++) {
  //       ctx.strokeStyle = `rgb(
  //             0,
  //             ${Math.floor(255 - 42.5 * i)},
  //             ${Math.floor(255 - 42.5 * j)})`;
  //       ctx.beginPath();
  //       ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, pi * 2, true);
  //       ctx.stroke();
  //     }
  //   }
});
