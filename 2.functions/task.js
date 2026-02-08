"use strict";

function getArrayParams(...arr) {
  if (!arr.length) {
    return { min: 0, max: 0, avg: 0 };
  }
  let min = arr[0],
    max = arr[0],
    sum = arr[0],
    avg;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.length ? arr.reduce((acc, num) => acc + num, 0) : 0;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElement = 0,
    sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      sumOddElement += arr[i];
    } else {
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElement = 0,
    countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return countEvenElement == 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (const arr of arrOfArr) {
    const result  = func(...arr);
    if (result > maxWorkerResult) maxWorkerResult = result;
  }
  return maxWorkerResult;
}
