/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        
          <div>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">ITEXPO FACTS</h2>
                <p className="lead">
                DIGITAL TRANSFORMATION HAPPENS HERE
                </p>  
              </Col>
            </Row>
            </div>


   
          <Row className="justify-content-center">
          <Col className="mt-5 mb-4 mt-lg-0" lg="6">
          <Card className="shadow">
              <CardBody>
                    <h4>Meet New Companies</h4>
                    <p className="description">
                     54% of attendees met with new companies. 
                     Companies that they were unaware of prior 
                     to ITEXPO that are now part of their vendor list.
                    </p>
              </CardBody>
            </Card>
          </Col>

          
          <Col className="mt-5 mt-lg-0" lg="6">
          <Card className="shadow">
              <CardBody>
                    <h4>Fuel Your Research</h4>
                    <p className="description">
                    63% of attendees said ITEXPO helped influence a future vendor or product selection
                    </p>
              </CardBody >
            </Card>
          </Col>





          <Col className="mt-5 mb-4 mt-lg-0" lg="6">
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                  <h4>Purchase New Products</h4>
                    <p className="description">
                    53% of attendees plan to purchase the products 
                    or services they saw on the ITEXPO exhibitor floor
                    within 6 months.                                  
                    </p>
                  
                  </TabPane>
                
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;


{/* Tabs with icons */}
            {/* <div>
              
            </div> */}
            {/* <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Messages
                  </NavLink>
                </NavItem>
              </Nav>
            </div> */}