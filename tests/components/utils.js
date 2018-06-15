const last = arr => arr[Math.max(0, arr.length - 1)]

export const lastCallArg = mockFn => last(mockFn.mock.calls)[0]
export const lastCallArgs = mockFn => last(mockFn.mock.calls)
