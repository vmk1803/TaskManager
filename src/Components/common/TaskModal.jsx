import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import InputWithLabel from "./InputWithLabel";

const TaskModal = (props) => {
    const {
        contentArr = [],
        modalHeading = "",
        closeModal = () => { }
    } = props;

    return <>
        <Modal isOpen={true} className="">
            <ModalHeader toggle={closeModal}>{modalHeading}</ModalHeader>
            <ModalBody>
                {contentArr.map((contentObj, index) => <React.Fragment key={`${contentObj.fieldName}_${index}`}>
                    {
                        contentObj.contentType === "inputBox" && <InputWithLabel
                            inputType={contentObj.inputType}
                            placeholder={contentObj.placeholder}
                            onChangeFun={(value) => contentObj.onChangeFun({ [contentObj.fieldName]: value })}
                            name={contentObj.fieldName}
                            label={contentObj.label}
                            key={`${contentObj.fieldName}_${index}`}
                            value={contentObj.value}
                            options={contentObj.options}
                        />
                    }
                    {
                        contentObj.contentType === "button" &&
                        <Button
                            color="primary"
                            onClick={() => contentObj.onClick()}
                            className="w-100">
                            {contentObj.label}
                        </Button>
                    }
                </React.Fragment>)}
            </ModalBody>
        </Modal>
    </>
}

export default TaskModal