import React, { useState } from 'react'

const Context = React.createContext('hindi')

export const LanguageStore = (props) => {
	const [language, setLanguagae] = useState('english')
	return (
		<div>
			<Context.Provider value={{ language, setLanguagae }}>
				{props.children}
			</Context.Provider>
		</div>
	)
}

export default Context
