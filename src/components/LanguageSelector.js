import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

const LanguageSelector = () => {
	const renderData = (data) => {
		return (
			<div>
				Select a language:
				<i onClick={() => data.setLanguagae('english')} className="flag us" />
				<i onClick={() => data.setLanguagae('hindi')} className="flag in" />
			</div>
		)
	}

	return (
		<LanguageContext.Consumer>
			{(data) => renderData(data)}
		</LanguageContext.Consumer>
	)
}

export default LanguageSelector
