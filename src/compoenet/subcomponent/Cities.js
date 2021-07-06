import { Select } from 'antd'

const Cities = ( {onGenderChange} ) => {
    const { Option } = Select

    // create city list

    return (
        <Select
        placeholder="City"
        onChange={onGenderChange}
        alllowClear
        >
            <Option value="Jalandar">Jalandar</Option>
            <Option value="Amritsar">Amritsar</Option>
            <Option value="Bathinda">Bathinda</Option>

        </Select>
    )
}

export default Cities