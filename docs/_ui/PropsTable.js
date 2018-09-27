import React from 'react'
import MDXComponents from './MDXComponents'

const Strong = props => <div style={{ fontWeight: 'bold' }} {...props} />

export const Props = ({ children }) => (
  <MDXComponents>
    {({ table: Table }) => (
      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    )}
  </MDXComponents>
)

export const Prop = ({
  name,
  type,
  default: _default,
  children,
  required = false,
}) => (
  <tr>
    <td>
      <Strong>
        {name}
        {required ? ' *' : ''}
      </Strong>
    </td>
    <td>{type}</td>
    <td>
      {typeof _default !== 'undefined' ? (
        <code>{JSON.stringify(_default)}</code>
      ) : (
        ''
      )}
    </td>
    <td>{children}</td>
  </tr>
)

export const ChildrenProps = ({ children }) => (
  <MDXComponents>
    {({ table: Table }) => (
      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    )}
  </MDXComponents>
)

export const ChildrenProp = ({ name, type, children }) => (
  <tr>
    <td>
      <Strong>{name}</Strong>
    </td>
    <td>{type}</td>
    <td>{children}</td>
  </tr>
)
