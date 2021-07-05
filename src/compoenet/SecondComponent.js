// import React, {useState} from 'react'
import { Form, Input, Select, DatePicker,Divider } from 'antd'
import Cities from './subcomponent/Cities'



function SecondComponent({onChange,fields}) {
    const { Option } = Select
    const { RangePicker }=DatePicker

    const onFinish = (values) => {
        console.log('Success:', values)
    }

    const onFinishedFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    const onGenderChange = (value) => {
        console.log(value)
    }

    const validateMessages = {
        required: '${label} is required',
        types: {
            email: '${label} is not a valid email',
            number: '${label} is not a valid number',
        },
        number: {
            range: '${label} must be between ${min} and ${max}'
        }


    }

    return (
        <Form 
        validateMessages={validateMessages}
            name="userForm"
            fields={fields}
            onFieldsChange={(_,allFields)=>{
                onChange(allFields)
            }}

            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 8
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishedFailed}

        >
            <Form.Item
            
            label="Matircs"
            // name={['user', 'matricName']}
            name='matricName'
            rules={[
                {
                    required: true,
                }
            ]}
            >
                <Input placeholder="Name of School"/>
            </Form.Item>

            <Form.Item
                label="Loaction"
                // name={['user', 'matricLocation']}
                name='matricLocation'
                style={{textAlign:'left'}}
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Cities onGenderChange={onGenderChange} />

            </Form.Item>
            <Form.Item
             style={{textAlign:'left'}}
             name="rangePickerMetrics" 
             label="Year">
                <RangePicker/>
            </Form.Item>
                <Divider/>
            
            <Form.Item
                label="Intermediate"
                // name={['user', 'intermediate']}
                name='intermediate'
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Loaction"
                // name={['user', 'intermediateLocation']}
                name='intermediateLocation'
                style={{textAlign:'left'}}
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Cities onGenderChange={onGenderChange} />

            </Form.Item>
            <Form.Item style={{textAlign:'left'}} name="rangePickerIntermediate" label="Year">
                <RangePicker/>
            </Form.Item>
                <Divider/>

            
                {/* diploma */}
            <Form.Item
                label="Diploma"
                // name={['user', 'diploma']}
                name='diploma'
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Loaction"
                // name={['user', 'diplomaLocation']}
                name='diplomaLocation'
                style={{textAlign:'left'}}
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Cities onGenderChange={onGenderChange} />

            </Form.Item>
            <Form.Item style={{textAlign:'left'}} name="rangePickerDiploma" label="Year">
                <RangePicker/>
            </Form.Item>
                <Divider/>


            {/* degree */}
            <Form.Item
                label="Degree"
                // name={['user', 'degree']}
                name='degree'
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Loaction"
                // name={['user', 'degreeLocation']}
                name='degreeLocation'
                style={{textAlign:'left'}}
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Cities onGenderChange={onGenderChange} />

            </Form.Item>
            <Form.Item  style={{textAlign:'left'}} name="rangePickerDegree" label="Year">
                <RangePicker/>
            </Form.Item>
                <Divider/>



            {/* phd */}
            <Form.Item
                label="PhD"
                // name={['user', 'phd']}
                name='phd'
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Loaction"
                // name={['user', 'phdLocation']}
                name='phdLocation'
                style={{textAlign:'left'}}
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Cities onGenderChange={onGenderChange} />

            </Form.Item>
            <Form.Item  style={{textAlign:'left'}} name="rangePickerphd" label="Year">
                <RangePicker/>
            </Form.Item>





        </Form>
    )
}
export default SecondComponent