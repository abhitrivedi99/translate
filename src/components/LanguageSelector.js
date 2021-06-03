import React from 'react'

const LanguageSelector = (props) => {
	return (
		<div>
			Select a language:
			<i onClick={() => props.setLanguage('english')} className="flag us" />
			<i onClick={() => props.setLanguage('hindi')} className="flag in" />
		</div>
	)
}

export default LanguageSelector
