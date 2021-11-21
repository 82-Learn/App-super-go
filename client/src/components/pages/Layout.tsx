import * as React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
class Layout extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
