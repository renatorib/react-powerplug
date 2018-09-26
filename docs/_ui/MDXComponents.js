import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'

const MDXComponents = withMDXComponents(({ children, components }) =>
  children(components)
)

export default MDXComponents
