
// eslint-disable-next-line no-unused-vars
const StatisticLine = ({text, value, symbol}) => {
  
    return <tr>
            <td>{text}</td>
            <td>{value}</td>
            {symbol&& <td>{ symbol}</td>}
          </tr>
}

export default StatisticLine;