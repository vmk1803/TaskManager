import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"
import { getUserProfileRequest, setSignUpModal } from "../../Redux/actions/userAction";

const SignUpModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.userProfile?.isSignUpModalOpen);
    const [signUpDetails, setSignUpDetails] = useState({});

    const handleSubmitFormData = (event) => {
        event.preventDefault();
        dispatch(getUserProfileRequest({ signUpDetails }, "SIGNUP"));
        dispatch(setSignUpModal(false))
    }

    const handleOnChange = (inputEvent) => {
        setSignUpDetails({
            ...signUpDetails,
            [inputEvent.target.name]: inputEvent.target.value
        })
    }

    return <div>
        <Modal isOpen={isModalOpen}>
            <ModalHeader toggle={() => dispatch(setSignUpModal(false))}>
                SignUp
            </ModalHeader>
            <ModalBody>
                <SignUpForm formSubmit={handleSubmitFormData} handleOnChange={handleOnChange} />
            </ModalBody>
        </Modal>
    </div>
}

const SignUpForm = (props) => {
    const {
        formSubmit = () => { },
        handleOnChange = () => { }
    } = props;
    return <Form>
        <FormGroup>
            <Label for="firstName">
                FirstName
            </Label>
            <Input placeholder="Enter FirstName" name="firstName" onChange={handleOnChange} />
        </FormGroup>
        <FormGroup>
            <Label for="lastName">
                LastName
            </Label>
            <Input placeholder="Enter LastName" name="lastName" onChange={handleOnChange} />
        </FormGroup>
        <FormGroup>
            <Label for="email">
                Email
            </Label>
            <Input placeholder="Enter Email" name="email" onChange={handleOnChange} />
        </FormGroup>
        <FormGroup>
            <Label for="password">
                Password
            </Label>
            <Input placeholder="Enter Password" name="password" onChange={handleOnChange} />
        </FormGroup>
        <Button color="primary" onClick={formSubmit}>Submit</Button>
    </Form>
}

export default SignUpModal