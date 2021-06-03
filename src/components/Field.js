import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
	// const contextType = useContext(LanguageContext)
	// const text = contextType === 'english' ? 'Field' : 'Jagya'
	const renderSubmit = (value) => {
		return value === 'english' ? 'Field' : 'Khanu'
	}

	return (
		<div className="ui field">
			<label>
				<LanguageContext.Consumer>
					{(value) => renderSubmit(value)}
				</LanguageContext.Consumer>
			</label>
			<input />
		</div>
	)
}

export default Field
