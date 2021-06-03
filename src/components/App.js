import React, { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from '../components/LanguageSelector'

const App = () => {
	const [language, setLanguage] = useState('english')

	console.log(language)
	const renderList = () => {
		return (
			<div className="ui container">
				<LanguageSelector setLanguage={setLanguage} />
				<ColorContext.Provider value="red">
					<LanguageContext.Provider value={language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		)
	}
	return <div>{renderList()}</div>
}

export default App
