import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"
import { getUserProfileRequest, setLoginModal } from "../../Redux/actions/userAction";

const LoginModal = () => {
    const isLoginModalOpen = useSelector(state => state.userProfile.isLoginModalOpen);
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({});

    const handleOnChange = (inputEvent) => {
        setLoginDetails({
            ...loginDetails,
            [inputEvent.target.name]: inputEvent.target.value
        })
    }

    const handleFormSubmitFun = (event) => {
        event.preventDefault();
        dispatch(getUserProfileRequest({ loginDetails }, "LOGIN"));
        dispatch(setLoginModal(false))
    }

    return <div>
        <Modal isOpen={isLoginModalOpen}>
            <ModalHeader toggle={() => dispatch(setLoginModal(false))}>
                Login
            </ModalHeader>
            <ModalBody>
                <LoginForm handleOnChange={handleOnChange} formSubmit={handleFormSubmitFun} />
            </ModalBody>
        </Modal>
    </div>
}

const LoginForm = (props) => {
    const {
        handleOnChange = () => { },
        formSubmit = () => { }
    } = props;

    return <Form>
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
            <Input placeholder="Enter password" name="password" onChange={handleOnChange} />
        </FormGroup>
        <Button onClick={formSubmit}>Login</Button>
    </Form>
}

export default LoginModal