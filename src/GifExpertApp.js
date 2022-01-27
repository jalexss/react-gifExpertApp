import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {GifGrid} from './components/GifGrid'
import AddCategory from './components/AddCategory'

export const GifExpertApp = props => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  //const handleAdd = (e) => {

    //setCategories( [...categories, 'HunterxHunter'] );
    //setCategories( cats => [ ...cats, 'HunterxHunter'])
    //}

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr />



      <ol>
        {
          categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }
              />
            )) 
        }
      </ol>

    </>
  )
}

GifExpertApp.propTypes = {

}

