// import './App.css';
import { Steps,Button, message } from 'antd'
import  React, { useState } from 'react'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

function StepsComponent() {

  const { Step }= Steps
  
  const [current,setCurrent]=useState(0)
  
  const next=()=>{
    setCurrent(current+1)
  }
  const prev=()=>{
    setCurrent(current-1)
  }
  // data
  const [fields,setFields]=useState([
    {
      name:['fname'],
      value:''
    },
    // shows undefined when keep it black
    {
      name:['mName'],
      value:''
    },
    {
      name:['lName'],
      value:''
    },
    {
      name:['gender'],
      value:''
    },
    {
      name:['age'],
      value:0
    },
    {
      name:['email'],
      value:''
    },
    {
      name:['password'],
      value:''
    },
// Education data
{
  name:['matricName'],
  value:''
},
{
  name:['matricLocation'],
  value:''
},
{
  name:['rangePickerMetrics'],
  value:''
},
{
  name:['intermediate'],
  value:'gender'
},
{
  name:['intermediateLocation'],
  value:''
},
{
  name:['rangePickerIntermediate'],
  value:''
},
{
  name:['diploma'],
  value:''
},
{
  name:['diplomaLocation'],
  value:''
},
{
  name:['rangePickerDiploma'],
  value:''
},
{
  name:['degree'],
  value:''
},
{
  name:['degreeLocation'],
  value:''
},
{
  name:['rangePickerDegree'],
  value:''
},
{
  name:['phd'],
  value:''
},
{
  name:['phdLocation'],
  value:''
},
{
  name:['rangePickerphd'],
  value:''
},
// Contact
{
  name:['phone'],
  value:''
},
{
  name:['address'],
  value:''
},
{
  name:['houseNo'],
  value:''
},
{
  name:['street'],
  value:''
},
{
  name:['city'],
  value:''
},
{
  name:['state'],
  value:''
},
  ])

// const [fields,setFields]=useState()
console.log("getting data ",window.localStorage.getItem('data'))

//displaying data in console
// eslint-disable-next-line
  {fields.map((output)=>{
    console.log(output.name+":"+output.value)
    
  })}
  window.localStorage.setItem("data", JSON.stringify(fields))

  const steps=[
    {
      title:'First',
      content:<FirstComponent fields={fields} onChange={(newFields)=>{
        setFields(newFields)
      }}/>,
    },
    {
      title:'Second',
      content:<SecondComponent fields={fields} onChange={(newFields)=>{
        setFields(newFields)
      }}/>,
    },
    {
      title:'Last',
      content:<ThirdComponent fields={fields} onChange={(newFields)=>{
        setFields(newFields)
      }}/>,
    },
  ]

  
  return (
    <div className="App">
      
      <Steps current={current}>
        {steps.map(item=>(
          <Step key={item.title} title={item.title}/>
        ))}
        
        </Steps>
        <div className="steps-content">{steps[current].content}</div> 
        
        {current<steps.length-1&&(
          <Button type="primary" onClick={()=>next()}>Next</Button>
        )}

        {current===steps.length-1 && (
          <Button type="primary" onClick={()=>message.success("Processing complete")}>Done</Button>
        )}

        {current>0 &&(
          <Button style={{margin:'0 8px'}} onClick={()=>prev()}>Previous</Button>
        )}
  


    </div>
  );
}

export default StepsComponent;
