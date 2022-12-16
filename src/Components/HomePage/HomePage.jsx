import { useState } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Table } from "reactstrap";
import DashBoard from "../DashBoard/DashBoard";
import "./HomePage.css";

const contents = [{
    tabName: "DASHBOARD"
}];

const HomePage = () => {
    const [currentTaskTab, setCurrentTaskTab] = useState("");

    return <div className="home-page-container">
        <div className="home-page-left-container w-50">
            <Offcanvas backdrop={false} zIndex={"0"} isOpen={true} className="w-25">
                <OffcanvasHeader className="mt-80-60" toggle={() => { }}>
                    Content
                </OffcanvasHeader>
                <OffcanvasBody>
                    {contents.map(contentObj =>
                        <Button
                            className="w-100"
                            onClick={() => setCurrentTaskTab(contentObj.tabName)}
                            outline={true} color="primary"
                            active={currentTaskTab === contentObj.tabName}
                            key={`${contentObj.tabName}`}>
                            {contentObj.tabName}
                        </Button>
                    )}
                </OffcanvasBody>
            </Offcanvas>
        </div>
        <div className="home-page-right-container w-75 mt-80-60">
            {currentTaskTab === "DASHBOARD" && <DashBoard />}
        </div>
    </div>
}

export default HomePage