import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap";

const InputWithLabel = (props) => {
    const {
        label = "",
        placeholder = "",
        inputType = "",
        name = "",
        value = "",
        options = [],
        onChangeFun = () => { }
    } = props;

    const [isDropDownOpen, setDropDownOpen] = useState(false)

    return <FormGroup>
        <Label for={name}>{label}</Label>
        {inputType === "text" && <Input
            placeholder={placeholder}
            onChange={(e) => onChangeFun(e.target.value)}
            name={name}
        />}
        {inputType === 'dropdown' && <Dropdown className="w-100" isOpen={isDropDownOpen} toggle={() => setDropDownOpen(!isDropDownOpen)}>
            <DropdownToggle className="" caret={true}>{value}</DropdownToggle>
            <DropdownMenu dark={true} color="primary">
                {options.map(option => (option !== value) &&
                    <DropdownItem
                        color="primary"
                        className=""
                        onClick={() => onChangeFun(option)}>
                        {option}
                    </DropdownItem>)
                }
            </DropdownMenu>
        </Dropdown>}
    </FormGroup>
}
export default InputWithLabel