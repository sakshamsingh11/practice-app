import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'src/components/Home'
import Sorting from 'src/components/Sorting'
import Trees from 'src/components/Trees'

const routes = [
  {
    path: '/',
    key: 'Home',
    component: Home
  },
  {
    path: '/sorting',
    key: 'Sorting',
    component: Sorting
  },
  {
    path: '/trees',
    key: 'Trees',
    component: Trees
  }
]

export const renderRoutes = () => {
  return routes ? (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          render={(props) =>
            <route.component route={route} />
          }
        />
      ))}
    </Switch>
  ) : null
}