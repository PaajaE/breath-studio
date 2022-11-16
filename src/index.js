let ctx;
const xc = 300;
const yc = 300;
let r = 50;
let dr = 0.3;
const pi = Math.PI;

const dim1q = 3 / Math.pow(3, 0.5);

const getX = (rad, dim) => {
  return xc + dim * Math.cos(rad);
};

const getY = (rad, dim) => {
  return yc + dim * Math.sin(rad);
};

const circleArray = [];

class Circle {
  constructor(fi, dimq, radius, angleStart, angleEnd, strokeStyle) {
    this.fi = fi;
    this.dimq = dimq;
    this.cx = fi !== null ? getX(fi, dimq * r) : xc;
    this.cy = fi !== null ? getY(fi, dimq * r) : yc;
    this.r = radius;
    this.angleStart = angleStart;
    this.angleEnd = angleEnd;
    this.strokeStyle = strokeStyle;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = 6;
    ctx.arc(this.cx, this.cy, this.r, this.angleStart, this.angleEnd);
    ctx.stroke();
  }

  update(r, updatePosition) {
    this.r = r;

    if (updatePosition) {
      this.cx = getX(this.fi, this.dimq * this.r);
      this.cy = getY(this.fi, this.dimq * this.r);
    }

    this.draw();
  }
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  if (r <= 20 || r >= 100) {
    dr = -dr;
  }

  r += dr;

  for (i = 0; i < circleArray.length; i++) {
    if (i === 0) {
      circleArray[i].update(r, false);
    } else {
      circleArray[i].update(r, true);
    }
  }
}

window.addEventListener("load", () => {
  ctx = document.getElementById("canvas").getContext("2d");

  //   ctx.beginPath();
  let strokeStyle = "rgb(0,220,200)";
  //   circleArray.push(new Circle(xc, yc, 2 * r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle(null, r, 0, pi * 2, strokeStyle));

  strokeStyle = "rgba(73,222,155,87)";
  circleArray.push(new Circle(0, 1, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 3) * 1, 1, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 3) * 2, 1, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 3) * 3, 1, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 3) * 4, 1, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 3) * 5, 1, r, 0, pi * 2, strokeStyle));

  strokeStyle = "rgba(67,177,230,90)";
  circleArray.push(new Circle((pi / 6) * 1, dim1q, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 6) * 3, dim1q, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 6) * 5, dim1q, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 6) * 7, dim1q, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 6) * 9, dim1q, r, 0, pi * 2, strokeStyle));
  circleArray.push(new Circle((pi / 6) * 11, dim1q, r, 0, pi * 2, strokeStyle));

  for (i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
  }

  animate();
});
