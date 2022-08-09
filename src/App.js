import { useState} from 'react';
import Graph from './components/Graph';
import './App.css';
import FileUpload from "./components/FileUpload";
import image from "./images/dataset-image.png";
import exportAsImage from './components/DownloadImage';


const data = [["Graph-Title","X-axis label","Y-axis label"]
  ,['"Month"', ' "1958"', ' "1959"', ' "1960"']
, ['"JAN"', '  340', '  360', '  417']
,['"FEB"', '  318', '  342', '  391']
, ['"MAR"', '  362', '  406', '  419']
, ['"APR"', '  348', '  396', '  461']
, ['"MAY"', '  363', '  420', '  472']
, ['"JUN"', '  435', '  472', '  535']
, ['"JUL"', '  491', '  548', '  622']
, ['"AUG"', '  505', '  559', '  606']
, ['"SEP"', '  404', '  463', '  508']
, ['"OCT"', '  359', '  407', '  461']
, ['"NOV"', '  310', '  362', '  390']
, ['"DEC"', '  337', '  405', '  432']]

function App() {

  const [chartData, setChartData] = useState(data);
  const [type,setType] = useState("bar");

  return (
    <div className='header'>
    <h1>CHARTIT </h1>
    <p> Upload your csv file and get the chart!</p>
    <p className='instruction'>Please make sure that your csv file has the following format:</p>
    <div className="img-inst">
    <ol>
      <li>The first row contains the chart title, x-axis label and y-axis label respectively</li>
      <li>The first column contains the category labels of x-axis</li>
      <li>The next columns contain the data points for each dataset where the first row of each column contains the name of dataset</li>
    </ol>
    <img src={image}/>
    </div>
      <FileUpload changeState={setChartData} changeType={setType}/>
      <div id="graphImage">
      <Graph  chartData={chartData} type={type}/>
      </div>
      <button className="down-btn" onClick={()=>{
        const el = window.document.getElementById("graphImage");
        exportAsImage(el,"chart");
      }}>Download</button>
    </div>
  );
}

export default App;
