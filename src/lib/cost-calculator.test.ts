import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateDelayCost,
  calculateSearchCost,
} from "./cost-calculator.ts";

test("calcula o valor proporcional para 10 dias", () => {
  const result = calculateDelayCost(3000, 10);
  assert.ok(result);
  assert.equal(result.dailyCost, 100);
  assert.equal(result.rentCost, 1000);
  assert.equal(result.estimatedCost, 1000);
});

test("soma condomínio, IPTU e TLRS proporcionais", () => {
  const result = calculateDelayCost(2000, 10, 300, 1200, 180);
  assert.ok(result);
  assert.ok(result.condoCost > 99);
  assert.ok(result.iptuCost > 32);
  assert.ok(result.tlrsCost > 4);
  assert.ok(result.estimatedCost > result.rentCost);
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
  assert.equal(calculateDelayCost(2000, 2, -1), null);
});

test("calcula custo potencial da pesquisa sem filtro", () => {
  const result = calculateSearchCost(40, 20, 4, 50);
  assert.ok(result);
  assert.equal(result.laborCost, 800);
  assert.equal(result.transportCost, 200);
  assert.equal(result.estimatedCost, 1000);
});

test("rejeita pesquisa sem horas e sem visitas", () => {
  assert.equal(calculateSearchCost(40, 0, 0, 50), null);
  assert.equal(calculateSearchCost(-1, 10, 2, 50), null);
});
