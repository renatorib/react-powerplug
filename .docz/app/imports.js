export const imports = {
  'docs/components/Form.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-components-form" */ 'docs/components/Form.mdx'),
}
