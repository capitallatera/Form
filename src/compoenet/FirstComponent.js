import  { Form, Input, Select,InputNumber } from 'antd' 

function FirstComponent({onChange,fields,form}){
    const { Option }=Select
    
    const onFinish=(values)=>{
        console.log('Success:',values)
    }
    const onFinishedFailed=(errorInfo)=>{
        console.log('Failed:',errorInfo)
    }
    const onGenderChange=(value)=>{
        console.log(value)
    }

    const validateMessages={
        // eslint-disable-next-line
        required:'${label} is required',
        types:{
            // eslint-disable-next-line
            email:'${label} is not a valid email',
            // eslint-disable-next-line
            number:'${label} is not a valid number',
            // fName: '${label} is required'    
        },
        number:{
            // eslint-disable-next-line
            range:'${label} must be between ${min} and ${max}'
        }
    }

    return(
        <Form 
        name="userForm"
        remember="true"
        form={form}
        fields={fields}
        onFieldsChange={(_,allFields)=>{
            onChange(allFields)
        }}
        
        validateMessages={validateMessages}
        // eslint-disable-next-line
            labelCol={{
                span:8
            }}    
            wrapperCol={{
                span:8
            }}
            initialValues={{
                remember:true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishedFailed}
            
        >
            <Form.Item
                label="First Name"
                name='fName'
                rules={[
                    {
                        required:true,
                    }
                ]}
            >
                <Input/>
            </Form.Item>
            
            <Form.Item
                label="Middle Name"
                name='mName'
                rules={[
                    {
                        required:true,
                    }
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Last Name"
                name='lName'
                rules={[
                    {
                        required:true,
                    }
                ]}
            >
                <Input/>
            </Form.Item>
                {/* Gender */}
            <Form.Item
                label="Gender"
                name="gender"
                style={{textAlign:'left'}}
                rules={[
                    {
                        required:true,
                    }
                ]}
            >
                <Select
                    placeholder="Please select a option"
                    onChange={onGenderChange}
                    alllowClear
                >
                    <Option value="female">Female</Option>
                    <Option value="male">Male</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
                {/* age */}
            <Form.Item 
            name='age'
            label="Age"
            style={{textAlign:'left'}}
            rules={[
                {
                    type:'number',
                    min:0,
                    max:99,     
                }
            ]}

            >
                <InputNumber/>
            </Form.Item>

            {/* email */}
            <Form.Item 
            name='email'
            label="Email"
            rules={[
                {
                    type:'email',
                     
                }
            ]}

            >
                <Input/>
            </Form.Item>



            <Form.Item 
            name='password'
            label="Password"
            rules={[
                {
                     required:true
                }
            ]}

            >
                <Input.Password/>
            </Form.Item>

        </Form>
    )
}
export default FirstComponent