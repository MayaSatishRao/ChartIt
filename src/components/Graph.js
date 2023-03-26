import { Bar , Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import './Graph.css'
  
const colors = ["#D291BC", "#B8DBD0", "#FFAF68", "#E8A68E","9BB8ED","A39FE1","B3D9B2"];


function createOptions(arr){
  let options = {
    maintainAspectRatio:true,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: arr[0][0],
        font:{
          size:30,
          family:"Lato"
        }
      },  
    },
    scales:{
      y: {
        title: {
          display: true,
          text: arr[0][2],
          font:{
            size:15
          }
        }
      },
      x: {
        title: {
          display: true,
          text: arr[0][1],
          font:{
            size:15
          }
        }
      }
    }
  };

  return options;
}
function createLabels(arr){
       if(arr!==undefined){
        let labels = [];
        for(let i=2;i<arr.length;i++)
              if(arr[i][0].length!==0)
            labels.push(arr[i][0]);
         return (labels); 
       }
       
}



function createDataSets(arr){
      
      let datasetsArray= [];
      for(let i=1;i<arr[1].length;i++){
            let dataArray = [];
            for(let j=2;j<arr.length;j++){
                if(arr[j][i]!==undefined)
                dataArray.push(arr[j][i]);
            }
            
            let datasetObj = {
                label: arr[1][i],
                data: dataArray,
                borderColor:"#000",
                borderWidth:"1.5",
                backgroundColor:colors[i],
                hoverBorderWidth:"2"
            }
            datasetsArray.push(datasetObj);
      }
      return datasetsArray;
}


const Graph = (props)=>{
 
       let actualData = {
        labels:createLabels(props.chartData),
        datasets: createDataSets(props.chartData),
        backgroundColor: colors[0]
       }
    
    if(props.type==="line"){
      return(
        <div className="graph-container">
          <Line className="graph" data={actualData} options={createOptions(props.chartData)} radius="50"/>
        </div>
      );
    }else{
      return(
        <div className="graph-container">
          <Bar className="graph" data={actualData} options={createOptions(props.chartData)} radius="50"/>
        </div>
      );
    }
     
    
    
}

export default Graph;
