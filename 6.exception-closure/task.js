function parseCount(x) {
  const parsed = Number.parseFloat(x);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(x) {
  try {
    return parseCount(x);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let p = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}
