import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, NavbarText, NavItem } from "reactstrap"
import { getUserProfileSuccess, setLoginModal, setSignUpModal, setUserType } from "../../Redux/actions/userAction";
import LoginModal from "../common/LoginModal";
import SignUpModal from "../common/SignUpModal";
// import localStorage from "../../Api/localStorage";

const NavBar = () => {
    const dispatch = useDispatch();
    const userType = useSelector(state => state.userProfile?.userType)
    const [isAccountDropDownOpen, setAccountDropDown] = useState(false);

    const handleSignoutFun = () => {
        dispatch(setUserType(""));
        localStorage.clear();
        dispatch(getUserProfileSuccess({}));
    }

    return <React.Fragment>
        <Navbar dark={true} fixed={"top"} color="dark">
            <NavbarBrand>TasK ManageR</NavbarBrand>
            <NavbarText>
                {userType === "AUTHENTICATED" ?
                    <Dropdown color="primary" isOpen={isAccountDropDownOpen} toggle={() => setAccountDropDown(!isAccountDropDownOpen)}>
                        <DropdownToggle caret={true}>Account</DropdownToggle>
                        <DropdownMenu dark={true}>
                            <DropdownItem onClick={() => handleSignoutFun()}>
                                signout
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown> :
                    <React.Fragment>
                        <Button color="primary" onClick={() => dispatch(setLoginModal(true))}>Login</Button>
                        <Button color="primary" className="ms-2" onClick={() => dispatch(setSignUpModal(true))}>SignUp</Button>
                    </React.Fragment>}
            </NavbarText>
        </Navbar>

        {/* userModals */}
        <SignUpModal />
        <LoginModal />
    </React.Fragment>
}

export default NavBar