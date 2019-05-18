import React from 'react'
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from 'baseui/header-navigation'
import { StyledLink as Link } from 'baseui/link'
import { Button } from 'baseui/button'

export default () => (
  <div>
    <NavigationItem align={ALIGN.center}>
      <h1>Flexbox</h1>
    </NavigationItem>
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            color: '#892C21',
            background: 'pink'
          },
          props: {
            'data-test-id': 'dnd-list-label'
          }
        }
      }}
    >
      <NavigationList align={ALIGN.left}>
        <NavigationItem>Uber</NavigationItem>
      </NavigationList>
      <NavigationList align={ALIGN.center} />
      <NavigationList align={ALIGN.right}>
        <NavigationItem>
          <Link href="#">Tab Link One</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="#">Tab Link Two</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="#">Tab Link Three</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList align={ALIGN.right}>
        <NavigationItem>
          <Button>Get started</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  </div>
)
