// import './App.css';
import { Steps, Button, message,Form } from 'antd'
import React, { useState } from 'react'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

function StepsComponent() {

  const { Step } = Steps

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }
  // data

  const [fields, setFields] = useState([
    // shows undefined when keep it black
    {
      name: ['fname'],
      value: ''
    },
    {
      name: ['mName'],
      value: ''
    },
    {
      name: ['lName'],
      value: ''
    },
    {
      name: ['gender'],
      value: ''
    },
    {
      name: ['age'],
      value: 0
    },
    {
      name: ['email'],
      value: ''
    },
    {
      name: ['password'],
      value: ''
    },
    // Education data
    {
      name: ['matricName'],
      value: ''
    },
    {
      name: ['matricLocation'],
      value: ''
    },
    {
      name: ['rangePickerMetrics'],
      value: ''
    },
    {
      name: ['intermediate'],
      value: 'gender'
    },
    {
      name: ['intermediateLocation'],
      value: ''
    },
    {
      name: ['rangePickerIntermediate'],
      value: ''
    },
    {
      name: ['diploma'],
      value: ''
    },
    {
      name: ['diplomaLocation'],
      value: ''
    },
    {
      name: ['rangePickerDiploma'],
      value: ''
    },
    {
      name: ['degree'],
      value: ''
    },
    {
      name: ['degreeLocation'],
      value: ''
    },
    {
      name: ['rangePickerDegree'],
      value: ''
    },
    {
      name: ['phd'],
      value: ''
    },
    {
      name: ['phdLocation'],
      value: ''
    },
    {
      name: ['rangePickerphd'],
      value: ''
    },
    // Contact
    {
      name: ['phone'],
      value: ''
    },
    {
      name: ['address'],
      value: ''
    },
    {
      name: ['houseNo'],
      value: ''
    },
    {
      name: ['street'],
      value: ''
    },
    {
      name: ['city'],
      value: ''
    },
    {
      name: ['state'],
      value: ''
    },
  ])


  const [form]=Form.useForm()

  const steps = [
    {
      title: 'First',
      content: <FirstComponent fields={fields} form={form} onChange={(newFields) => {
        setFields(newFields)
      }} />,
    },
    {
      title: 'Second',
      content: <SecondComponent fields={fields} form={form} onChange={(newFields) => {
        setFields(newFields)
      }} />,
    },
    {
      title: 'Last',
      content: <ThirdComponent fields={fields} onChange={(newFields) => {
        setFields(newFields)
      }} />,
    },
  ]
// eslint-disable-next-line
  const [data, setData] = useState()
  const handleClick = () => {
    setData(fields.map((output) => {
      return output.value
    }))
   
    // console.log("Current",current)

    if (current===0){
      window.localStorage.setItem("general",JSON.stringify(fields.map((output) => {
        return output.value
      })))
    }
   
    if (current===1){
      window.localStorage.setItem("education",JSON.stringify(fields.map((output) => {
        return output.value
      })))
    }
    
    next()
  }

  const handleFinalClick = () => {
    setData(fields.map((output) => {
      return output.value
    }))

    window.localStorage.setItem("contacts",JSON.stringify(fields.map((output) => {
      return output.value
    })))

    message.success("Processing complete")

  }

  const handlePrev=()=>{

    
    
    if (current===2){
      console.log(window.localStorage.getItem("education"))
      form.setFieldsValue({
        
      })
    }
    if (current===1){
      console.log(window.localStorage.getItem("general"))
      form.setFieldsValue({
        // fName:"Just Checking"
      })
    }
    
    console.log("previous",current)

    prev()
  }

// firstArray
var firstArray=fields.map((output)=>{
  return `${output.name}`
})

// secondArray
var secondArray=fields.map((output)=>{
  return `${output.value}`
})
// eslint-disable-next-line
var arrayOfObject=firstArray.map((value,index)=>{
  return [value,secondArray[index]]
})

// console.log(arrayOfObject)

  return (
    <div className="App">

      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}

      </Steps>
      <div className="steps-content">{steps[current].content}</div>

      {current < steps.length - 1 && (
        <Button type="primary" onClick={() => handleClick()}>Next</Button>
      )}

      {current === steps.length - 1 && (
        <Button type="primary" onClick={() => handleFinalClick()}>Done</Button>
      )}

      {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => handlePrev()}>Previous</Button>
      )}

    </div>
  );
}

export default StepsComponent;
