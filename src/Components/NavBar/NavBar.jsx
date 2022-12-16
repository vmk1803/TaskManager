import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Navbar, NavbarBrand, NavbarText, NavItem } from "reactstrap"
import { setSignUpModal } from "../../Redux/actions/userAction";
import SignUpModal from "../common/SignUpModal";

const NavBar = () => {
    const dispatch = useDispatch();
    const userType = useSelector(state => state.userProfile?.userType)

    return <React.Fragment>
        <Navbar dark={true} fixed={"top"} color="dark">
            <NavbarBrand>TasK ManageR</NavbarBrand>
            <NavbarText>
                {userType === "AUTHENTICATED" ?
                    <Button color="primary">Account</Button> :
                    <React.Fragment>
                        <Button color="primary">Login</Button>
                        <Button color="primary" className="ms-2" onClick={() => dispatch(setSignUpModal(true))}>SignUp</Button>
                    </React.Fragment>}
            </NavbarText>
        </Navbar>

        {/* userModals */}
        <SignUpModal />
    </React.Fragment>
}

export default NavBar