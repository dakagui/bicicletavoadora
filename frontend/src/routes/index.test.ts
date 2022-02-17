import { beforeEach, test, expect, vi } from "vitest"
import { cleanup, render, screen } from '@testing-library/svelte'
import { writable } from "svelte/store";

import index from './index.svelte'

vi.mock('../stores/bicicletavoadora', () => {
  return {
    fetch: vi.fn(async ()=>{}),
    bicicletaVoadaraHello: writable("Hello World!")
  };
});
beforeEach(cleanup)

test("can render", () => {
  render(index)
})

test("can find the correct page title", async() => {
    const { container } = render(index)
    expect(await screen.findByText(/Hello World!/i)).toBeDefined()
})
