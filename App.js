import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'
import store from './src/redux/store'

export default function App() {
	const [isReady, setIsReady] = useState(false)

	if (!isReady) {
		return (
			<AppLoading
				startAsync={bootstrap}
				onFinish={() => setIsReady(true)}
				onError={err => console.log(err)}
			/>
		)
	}

	return (
		<Provider store={store}>
			<AppNavigation />
		</Provider>
	)
}
