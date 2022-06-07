import {getFormattedValue} from '../utils'

test('formats the value correctly', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})
