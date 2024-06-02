import React, { useEffect } from 'react';
import './App.css';
import Grid from './Components/Grid';
import { LeetcodeDataApi } from './Manager/LeetcodeDataApi';

function App() {

  const [problemDate, setproblemDate] = React.useState('')
  const [problem, setProblem] = React.useState('');
  const [problemId, setProblemId] = React.useState('');
  const [problemDifficulty, setProblemDifficulty] = React.useState('')
  // const [updateTime, setUpdateTime] = React.useState<Date|undefined>(undefined)

  useEffect(()=>{
    refreshData()
  },[]);

  const refreshData = async ()=>{
    const data = await LeetcodeDataApi.getProblem()
    setProblem(data.questionTitle)
    setProblemId(data.questionFrontendId)
    setproblemDate(data.date)
    setProblemDifficulty(data.difficulty)
    // setUpdateTime(new Date())
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-slate-100">
      <div className="w-full flex justify-between items-center border-b border-black py-3 px-4">
        <div className="font-bold text-5xl">
          {problemId}: {problem}
        </div>
        <div className="text-right">
          <div className='text-4xl'>{problemDate}</div>
          <div className='text-2xl'>{problemDifficulty}</div>
        </div>
      </div>
      
      <div className="flex flex-row mt-4 ">
        {/* 318 */}
        <div className="flex flex-col px-5">
        <div className='text-center text-3xl font-bold pb-3'>318</div>
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-2">
            <Grid  />
            <Grid username='s72289814' />
            <Grid  />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid username='ching60627' />
            <Grid  />
            <Grid />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid username='ilan0u0' />
            <Grid username='jameslu216' />
            <Grid username='tina1619'  />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid username='hizashi1010111' />
            <Grid username='jerry0424'  />
            <Grid username='shirley41825' />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid border={false} />
            <Grid  />
            <Grid  />
          </div>
        </div>

        <div className='bg-slate-100' style={{width: '6px', background: '#88888888'}}></div>

        {/* 317 */}
        <div className="flex flex-col px-5">
          <div className='text-center text-3xl font-bold pb-3'>317</div>
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-2">
            <Grid border={false} />
            <Grid border={false} />
            <Grid />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid border={false} />
            <Grid username='shaker1009' />
            <Grid username='bananachen207' />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid username='jason27436' />
            <Grid username='jcyis' />
            <Grid username='renpasa' />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid  />
            <Grid  />
            <Grid  />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid  />
            <Grid username='angel890123' />
            <Grid />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
