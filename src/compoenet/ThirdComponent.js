import { Form, Input,Tooltip,Select } from 'antd'
// import prefixSelector from './subcomponent/prefixSelector'
// import Cities from './subcomponent/Cities'
// import State from './subcomponent/State'

function ThirdComponent({onChange,fields,form}) {

    const { Option } = Select
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
    };

    const onGenderChange = (value) => {
        console.log(value)
    }

    return (
        <Form
        name="userForm" 
        remember="true"
        form={form}
        fields={fields}
        onFieldsChange={(_,allFields)=>{
            onChange(allFields)
        }}


        {...formItemLayout}
        // initialValues={{
        //     prefix:'+91'
        // }}
        >
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter your phone number'
                    }

                ]}
            >
                <Input
                    addonBefore={'+91'}
                    style={{
                        width: '100%'
                    }}

                />
            </Form.Item>
            <Form.Item 
            style={{textAlign:'left'}}
            // name='address'
            label='Address'>
                <Input.Group compact>
                    <Tooltip title="H. No.">
                <Form.Item name='houseNo'>
                    
                    <Input style={{width:'70px'}} />
                    
                    </Form.Item>
                    </Tooltip>

                    <Form.Item name='street'>
                        <Input placeholder="Street" />
                    </Form.Item>

                    <Form.Item
                        // name={['address', 'province']}
                        name='city'
                        noStyle
                        rules={[{ required: true, message: 'Province is required' }]}
                    >
                        {/* city */}
                        {/* <Cities /> */}
                        <Select
                            placeholder="City"
                            onChange={onGenderChange}
                            alllowClear
                        >
                            <Option value="Jalandar">Jalandar</Option>
                            <Option value="Amritsar">Amritsar</Option>
                            <Option value="Bathinda">Bathinda</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item
                        // name={['address', 'province']}
                        name='state'
                        noStyle
                        rules={[{ required: true, message: 'Province is required' }]}
                    >
                        {/* state */}
                        {/* <State /> */}

                        <Select
                            placeholder="State"
                            onChange={onGenderChange}
                            alllowClear
                        >
                            <Option value="punjab">Punjab</Option>
                            <Option value="Bangalore">Bangalore</Option>
                            <Option value="pune">Pune</Option>

                        </Select>
                    </Form.Item>
                </Input.Group>
            </Form.Item>



        </Form>

    )
}
export default ThirdComponent