import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
       
        <Categories></Categories>
        <ProductList></ProductList>

    </div>
  )
}
