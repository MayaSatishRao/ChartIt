

function readFiles(file, setdata){
     CSVToJSON(file,setdata);
}

function CSVToJSON(file,setdata){
    
     if(file==null)
     return {};
     else{
        const reader = new FileReader();
        let text = "";
        reader.onload = (e)=>{
            fileToString(e.target.result,setdata);
        }
        reader.readAsText(file);
        return text;
     }
}

function fileToString(str,setdata){
    const rows = str.split("\n");
    let ans=[];
    for(let i=0;i<rows.length;i++){
        const temp = [];
        const rowData = rows[i].split(",");
        for(let j=0;j<rowData.length;j++)
        temp.push(rowData[j]);
        ans.push(temp);
    }
    setdata(ans);
}

export default readFiles;
