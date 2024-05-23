import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { LeetcodeDataApi } from './Manager/LeetcodeDataApi';
import { Util } from './Manager/Util';

function App() {

  const [problemDate, setproblemDate] = React.useState('')
  const [problem, setProblem] = React.useState('');
  const [problemId, setProblemId] = React.useState('');
  // const [updateTime, setUpdateTime] = React.useState<Date|undefined>(undefined)

  useEffect(()=>{
    refreshData()
  },[]);

  const refreshData = async ()=>{
    const data = await LeetcodeDataApi.getProblem()
    setProblem(data.questionTitle)
    setProblemId(data.questionId)
    setproblemDate(data.date)
    // setUpdateTime(new Date())
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full flex justify-between items-center border-b border-black py-3 px-4">
        <div className="font-bold text-2xl">
          {problemId}: {problem}
        </div>
        <div className="text-right">
          <div className='text-xl'>{problemDate}</div>
          {/* <div>{updateTime ? Util.formatTime(updateTime) : ''}</div> */}
        </div>
      </div>
      
      <div className="flex flex-row mt-4 ">
        {/* 318 */}
        <div className="flex flex-col px-3">
          318
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-2">
            <Grid  />
            <Grid  />
            <Grid  />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid  />
            <Grid  />
            <Grid  />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid  />
            <Grid  />
            <Grid username='tina1619'  />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid  />
            <Grid username='jerry0424'  />
            <Grid username='shirley41825' />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Grid border={false} />
            <Grid  />
            <Grid  />
          </div>
        </div>

        {/* 317 */}
        <div className="flex flex-col px-3">
        317
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-2">
            <Grid border={false} />
            <Grid username='tina1619' />
            <Grid username='shirley41825' />
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
