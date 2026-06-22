import assert from "node:assert/strict";
import test from "node:test";
import { calculateDelayCost } from "./cost-calculator.ts";

test("calcula o valor proporcional para 10 dias", () => {
  const result = calculateDelayCost(3000, 10);
  assert.ok(result);
  assert.equal(result.dailyCost, 100);
  assert.equal(result.estimatedCost, 1000);
});

test("aceita aluguel decimal", () => {
  const result = calculateDelayCost(1999.9, 5);
  assert.ok(result);
  assert.equal(result.days, 5);
  assert.ok(result.estimatedCost > 333);
});

test("normaliza dias fracionados", () => {
  const result = calculateDelayCost(1500, 5.9);
  assert.equal(result?.days, 5);
});

test("rejeita valores vazios, negativos ou inválidos", () => {
  assert.equal(calculateDelayCost(0, 10), null);
  assert.equal(calculateDelayCost(2000, 0), null);
  assert.equal(calculateDelayCost(-1, 2), null);
  assert.equal(calculateDelayCost(Number.NaN, 2), null);
});
