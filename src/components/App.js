import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from '../components/LanguageSelector'

const App = () => {
	const renderList = () => {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		)
	}
	return <div>{renderList()}</div>
}

export default App
