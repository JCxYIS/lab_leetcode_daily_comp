import React, { useEffect } from 'react';
import './App.css';
import { LeetcodeDataApi } from './Manager/LeetcodeDataApi';
import { Config } from './Config';

function App() {

  const [problemDate, setproblemDate] = React.useState('')
  const [problem, setProblem] = React.useState('');
  const [problemId, setProblemId] = React.useState('');
  const [problemDifficulty, setProblemDifficulty] = React.useState('')
  // const [updateTime, setUpdateTime] = React.useState<Date|undefined>(undefined)

  useEffect(() => {
    refreshData()
  }, []);

  const difficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'green'
        case 'Medium':
        return 'yellow'
      case 'Hard':
        return 'red'
      default:
        return 'gray'
    }
  }

  const refreshData = async () => {
    const data = await LeetcodeDataApi.getProblem()
    setProblem(data.questionTitle)
    setProblemId(data.questionFrontendId)
    setproblemDate(data.date)
    setProblemDifficulty(data.difficulty)
    // setUpdateTime(new Date())
  };

  return (
    <div className={`flex flex-col items-center h-screen bg-${difficultyColor(problemDifficulty)}-50 dark:bg-slate-100`}>
      
      {/* header */}
      <section className={`w-full flex justify-between items-center border-b border-black bg-${difficultyColor(problemDifficulty)}-100 py-2 px-4`}>
        <div className="font-bold text-5xl">
          {problemId}: {problem}
        </div>
        <div className="text-right">
          <div className='text-4xl'>{problemDate}</div>
          <div className='text-2xl'>{problemDifficulty}</div>
        </div>
      </section>


      {/* container */}
      <div className="flex flex-row  item-center mt-3">
        {/* 318 */}
        <section>
          <h3 className='text-3xl text-center font-semibold py-1'>~ 317 ~</h3>
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800">
            {Config.lab318.map((element, index) => <element.type key={index} index={index} {...element.props} />)}
          </div>
        </section>

        {/* bar at the middle */}
        <div className='mx-8'></div>

        {/* 317 */}
        <section>
          <h3 className='text-3xl text-center font-semibold py-1'>~ 318 ~</h3>
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800">
           {Config.lab317.map((element, index) => <element.type key={index} index={index+Config.lab317.length} {...element.props} />)}
          </div>
        </section>

        {/* bar at the middle */}
        <div className='mx-12'  style={{ width: '1.5px', background: '#44444488' }}></div>

        {/* 老大們 */}
        <section>
          <h3 className='text-3xl text-center font-semibold py-1'>老大們</h3>
          <div /*style={{ maxHeight: '80vh', overflow: 'scroll' }}*/>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1 bg-white dark:bg-gray-800">
              {Config.labExtra.map((element, index) => <element.type key={index} index={index+Config.lab317.length+Config.lab318.length} {...element.props} />)}
            </div>
          </div>
        </section>

        <div className='bg bg-red-50 bg-green-50 bg-yellow-50 bg-red-100 bg-yellow-100 bg-green-100'></div>

      </div>
    </div>
  );
}

export default App;
