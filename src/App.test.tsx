import { describe, expect, it } from 'vitest'
import { productsForTest } from './test-data'

describe('product data contract', () => {
  it('keeps names unique for stable product grid keys', () => {
    expect(new Set(productsForTest.map((product) => product.name)).size).toBe(productsForTest.length)
  })
})
