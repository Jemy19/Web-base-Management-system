
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faSignOutAlt, faTimes, faInbox, faUser, faUserPlus,faUsers,faCalendar,faBullhorn, faEnvelope, faCreditCard,faListAlt,faPlusSquare,faHome } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../Routes";


const Newsidebar= () => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text text-black">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.Home.path}>
          <Image className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block `}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Home.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0 text-white">
              <NavItem as={Link} title="Harmony Hills" icon={faBuilding} link={Routes.Home.path}/>

              <NavItem as={Link} title="Home" icon={faHome} link={Routes.Home.path}/>
              <CollapsableNavItem eventKey="" title="Users"  icon={faUser}>
                    <NavItem  as={Link} title="User List"  link = {Routes.Users.path} icon={faUser} />
                    <NavItem  as={Link} title="Manage Users"  link={Routes.ManageUser.path}  icon={faUsers} />
                    <NavItem as={Link} title="Add Users" link={Routes.AddUser.path}  icon={faUserPlus} />
              </CollapsableNavItem>
              <NavItem as={Link} title="Transaction" icon={faBriefcase} link={Routes.Transaction.path}/>
              <CollapsableNavItem eventKey="" title="Payables" icon={faCreditCard}>
                    <NavItem  as={Link} title="Monthly Dues" icon={faListAlt} link={Routes.MonthlyDues.path} />
                    <NavItem  as={Link} title="Add Payables" icon={faPlusSquare} link={Routes.MonthlyDues.path} />
              </CollapsableNavItem>
              
              <NavItem as={Link} title="Invoice"  icon={faInbox} link={Routes.Invoice.path}/>
              <NavItem as={Link} title="Message"  icon={faEnvelope} link={Routes.Message.path}/>
              <NavItem as={Link} title="Events"  icon={faCalendar} link={Routes.Events.path}/>
              <NavItem as={Link} title="Announcement"  icon={faBullhorn} link={Routes.Announcement.path}/>
              <Dropdown.Divider className="my-3 border-indigo" />

             
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};

export default Newsidebar