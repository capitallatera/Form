import { Select } from 'antd'

const States = ({onGenderChange}) => {
    const { Option } = Select
    
    // states list

    return (
    <Select
        placeholder="State"
        // onChange={onGenderChange}
        // alllowClear
    >
        <Option value="punjab">Punjab</Option>
        <Option value="Bangalore">Bangalore</Option>
        <Option value="pune">Pune</Option>
 
    </Select>
    )
}

export default States