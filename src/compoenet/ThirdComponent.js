import { Form, Input, Select,Tooltip } from 'antd'
import prefixSelector from './subcomponent/prefixSelector'
import Cities from './subcomponent/Cities'
import State from './subcomponent/State'




function ThirdComponent({onChange,fields}) {

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

    return (
        <Form
        name="userForm" 
        
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
            name='address'
            label='Address'>
                <Input.Group compact>

                <Form.Item name='houseNo'>
                    <Tooltip title="H. No.">
                    <Input style={{width:'70px'}} />
                    </Tooltip>
                    </Form.Item>

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
                        <Cities />
                    </Form.Item>

                    <Form.Item
                        // name={['address', 'province']}
                        name='state'
                        noStyle
                        rules={[{ required: true, message: 'Province is required' }]}
                    >
                        {/* state */}
                        <State />
                    </Form.Item>
                </Input.Group>
            </Form.Item>



        </Form>

    )
}
export default ThirdComponent