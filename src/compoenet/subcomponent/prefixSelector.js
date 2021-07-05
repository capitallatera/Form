import { Select,Form } from 'antd'

const prefixSelector=()=>{
    const { Option }= Select

    return(
        <Form.Item name="prefix" noStyle>
        <Select
        style={{
            width:70,
        }}
        >
         <Option value="91">+91</Option>
         <Option value="92">+92</Option>
         <Option value="93">+93</Option>
         <Option value="94">+94</Option>   

        </Select>
    </Form.Item>
    )
    
}

export default prefixSelector