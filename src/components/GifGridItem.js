import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ id, title, url }) => {
	return (
		<div className="card animate__animated animate__bounce">
			<img src={ url } alt={ title } />
		</div>
	)
}

GifGridItem.propTypes = {

}

