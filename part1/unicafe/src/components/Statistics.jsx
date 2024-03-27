import StatisticLine from "./StatisticLine";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Statistics = ({good, neutral, bad}) => {
  
     const total = good+neutral+bad;
     const average = (good-bad)/total;
     const positive = (good/total )*100;


    return <>
       <h3> statistics</h3>
      <table>
        <tbody>
                <StatisticLine  text="good" value ={good}/>
                <StatisticLine  text="neutral" value ={neutral}/>
                <StatisticLine  text="bad" value ={bad}/>
                <StatisticLine  text="all" value ={total}/>
                <StatisticLine  text="average" value ={average}/>
                <StatisticLine  text="positive" value ={positive} symbol="%"/>
        </tbody>
      </table>
    </>
}

export default Statistics;