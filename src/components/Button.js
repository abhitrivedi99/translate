import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const Button = () => {
	const renderSubmit = (language) => {
		console.log(language)
		return language === 'english' ? 'Submit' : 'Submeet'
	}

	const renderButton = (color) => {
		return (
			<button className={`ui ${color} button`}>
				<LanguageContext.Consumer>
					{({ language }) => renderSubmit(language)}
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
