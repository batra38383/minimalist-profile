import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="user">About Me</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/library" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Picture Library</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/events" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/test" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Test Ground</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            22 ji Copyrights
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
