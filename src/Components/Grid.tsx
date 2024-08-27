import React, { useEffect } from 'react'
import { LeetcodeDataApi } from '../Manager/LeetcodeDataApi'
import { Util } from '../Manager/Util'

export default function Grid({ index=0, username='', subname='' }) {
	const [avatarSrc, setAvatarSrc] = React.useState('/null.png')
	const [passTime, setPassTime] = React.useState<Date | undefined>()
	const [passLang, setPassLang] = React.useState('')

	const backgroundColor = username ? (passTime ? 'bg-green-200' : 'bg-red-200') : 'bg-gray-0'

	const fillValue = (value:string) => {
		if(value)
			return value
		else
			return "　"
	}

	useEffect(() => {
		if (!username) {
			return
		}

		const refreshData = async () => {			
			// wait index*100 ms
			await new Promise(r => setTimeout(r, index*100)) 

			// wait for qTitle
			while (!LeetcodeDataApi.qTitle) {
				await new Promise(resolve => setTimeout(resolve, 1000)) // wait for qTitle
			}

			// api call
			const response = await LeetcodeDataApi.getUserStatus(username)
			const solveData = response.submission?.find((s: { title: string }) => s.title === LeetcodeDataApi.qTitle)
			if (solveData) {
				setPassTime(new Date(parseInt(solveData.timestamp) * 1000))  // unix to datetime
				setPassLang(solveData.lang)
			}
		}
		const refreshProfile = async () => {
			// wait index*100 ms
			await new Promise(r => setTimeout(r, index*100)) 

			// api call
			const response = await LeetcodeDataApi.getUserProfile(username)
			setAvatarSrc(response.avatar)
		}

		refreshData()
		refreshProfile()
		const interval = setInterval(refreshData, 600 * 1000); // wait 600s
		return () => clearInterval(interval); // 清除 timer ，防止 memory leak
	}, [username])
	
	


	// return (
	// 	<div className={`w-60 h-40 flex flex-col border 
	// 					${borderColor} ${backgroundColor}`}
	// 		style={username === renUserName  ? { backgroundColor: `hsl(${renBGColorRed <= 100 ? renBGColorRed*3.6 : (200-renBGColorRed)*3.6} 70% 70%)`} : {opacity: 1} }>

	// 		{/* Bottom text */}
	// 		<div className="flex justify-between  px-2 pr-3 py-2">
	// 			<div className="text-l font-bold">{(username === "bananachen207") ? "Dog's Dog" : username }</div>
	// 			<div className="text-l text-right">{passLang}</div>
	// 		</div>
	// 		<div className='grow flex justify-center items-center text-center text-5xl pb-5'>
	// 			{passTime ? Util.formatTime(passTime) : ''}
	// 		</div>
	// 	</div>
	// )

	return (
		<figure className={`flex flex-col px-6 py-4 ${backgroundColor} border-b border-gray-300 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700`}>
			<figcaption className="flex items-center">
				<img className="rounded-full w-10 h-10" src={avatarSrc} alt="avatar" />
				<div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
					<div>{fillValue(username)}</div>
					<div className="text-sm text-gray-500 dark:text-gray-400 ">{fillValue(subname)}</div>
				</div>
			</figcaption>
			<blockquote className="text-center mx-auto mt-3 text-gray-500  dark:text-gray-400">
				<h3 className="text-gray-800 dark:text-white mb-2" style={{fontSize: '2.5rem', lineHeight: '2.1rem', fontWeight: 700 }}>
					{passTime ? Util.formatTime(passTime) : '　　　　'}
				</h3>
				<h1>{fillValue(passLang.toUpperCase())}</h1>
			</blockquote>
		</figure>
	)
}
