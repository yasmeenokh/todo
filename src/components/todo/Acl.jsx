import React from 'react';
import { useContext } from 'react';
import { If } from 'react-if';
import { LoginContext } from '../../context/auth';


// const If = props => {
//   return props.condition ? props.children : null;
// };

// class Acl extends React.Component {
//   static contextType = LoginContext;
//   render() {
//     let okToRender = false;

//     try {
//       okToRender =
//         this.context.loggedIn &&
//         this.props.capability
//           ? this.context.user.capabilities.includes(this.props.capability)
//           : false;
//     } catch (e) {
//       console.warn('Not Authorized');
//     }
let okToRender= false
function Acl(props){
    const contextType = useContext(LoginContext);
    okToRender = 
    contextType.loggedIn &&
    props.capability
    ? contextType.user.capabilities.includes(props.capability)
    : false;
    // <Auth> <div /> </Auth>
    /// are you logged in?
    /// was there no capability specified?
    
    // <Auth capability="foo"> <div /> </Auth>
    /// are you logged in?
    /// Is there a capability that we care about?
    /// do you have it?
    
    return (
        <>
      <If condition={okToRender}>
        {props.children}
      </If>
      <If condition={props.capability === '' && !contextType.loggedIn}>
        {props.children}
      </If>
      </>
    );
  
}

export default Acl;