import { composeEvents } from '../../src'

test('composeEvents should call all events', () => {
  const arr = []
  const composed = composeEvents(
    {
      onMouseEnter: () => arr.push(1),
    },
    {
      onMouseEnter: () => arr.push(2),
      onMouseLeave: () => arr.push(3),
    },
    {
      onMouseEnter: () => arr.push(4),
      onMouseLeave: () => arr.push(5),
    },
    {
      onMouseLeave: () => arr.push(6),
    }
  )

  composed.onMouseEnter()
  composed.onMouseLeave()

  expect(arr).toEqual([1, 2, 4, 3, 5, 6])
})
