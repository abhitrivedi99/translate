import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const Button = () => {
	const renderSubmit = (value) => {
		return value === 'english' ? 'Submit' : 'Submeet'
	}

	const renderButton = (color) => {
		return (
			<button className={`ui ${color} button`}>
				<LanguageContext.Consumer>
					{(value) => renderSubmit(value)}
				</LanguageContext.Consumer>
			</button>
		)
	}

	return (
		<ColorContext.Consumer>
			{(color) => renderButton(color)}
		</ColorContext.Consumer>
	)
}

export default Button
