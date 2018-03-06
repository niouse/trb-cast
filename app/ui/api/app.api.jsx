
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function App_Api(_optional) {
    return (WrappedComponent) => {
        class $App_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
                //Send msg to re-compute styles on screen changes
				window.addEventListener("resize", ()=>{
					this.props.stylesOptionsNext('foo')
				})
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            render() {
                return <WrappedComponent
				{...this.props}
				/>
            }
        }
        $App_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $App_Api
    }
}
    