/*
  ========== Utility Module ==========
  use this to write pure javascript utility functions.
 */
import { CURRENCY } from 'src/resources/constants'

export async function fakeLogin(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return { id, username: 'Fake Name', token: 'fake_token' }
}

/**
 * use this to format amount into correct currency
 * @param {string | number} num amount in string or number
 * @param {string} type either USD or KHR
 */
export function formatAmount(num, type = CURRENCY.USD) {
  return type === CURRENCY.KHR ? `${num} KHR` : `$${num}`
}
