import React, { useEffect } from 'react'
import { LeetcodeDataApi } from '../Manager/LeetcodeDataApi'
import { Util } from '../Manager/Util'

export default function Grid({ border = true, username = '' }) {

	const [passTime, setPassTime] = React.useState<Date | undefined>()
	const [passLang, setPassLang] = React.useState('')

	const borderColor = border ? 'border-black' : ''
	const backgroundColor = border ? (username ? (passTime ? 'bg-green-300' : 'bg-red-300') : 'bg-gray-300') : ''



	useEffect(() => {
		const refreshData = async () => {
			if (!username) {
				return
			}

			// random wait 
			await new Promise(r => setTimeout(r, 3000 * Math.random())) // wait for qTitle

			// wait for qTitle
			while (!LeetcodeDataApi.qTitle) {
				await new Promise(resolve => setTimeout(resolve, 1000)) // wait for qTitle
			}

			// api call
			const response = await LeetcodeDataApi.getUserStatus(username)
			const solveData = response.submission.find((s: { title: string }) => s.title === LeetcodeDataApi.qTitle)
			if (solveData) {
				setPassTime(new Date(parseInt(solveData.timestamp) * 1000))  // unix to datetime
				setPassLang(solveData.lang)
			}
		}
		refreshData()
		const interval = setInterval(refreshData, (180 + 120*Math.random()) * 1000); // s
		return () => clearInterval(interval); // 清除 timer ，防止 memory leak
	}, [username])

	return (
		<div className={`w-60 h-40 flex flex-col border ${borderColor} ${backgroundColor}`}>
			{/* Bottom text */}
			<div className="flex justify-between  px-2 pr-3 py-2">
				<div className="text-l font-bold">{username}</div>
				<div className="text-l text-right">{passLang}</div>
			</div>
			<div className='grow flex justify-center items-center text-center text-5xl pb-5'>
				{passTime ? Util.formatTime(passTime) : ''}
			</div>
		</div>
	)
}
