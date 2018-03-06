
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Navigation_Api(_optional) {
    return (WrappedComponent) => {
        class $Navigation_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
				if(this.props.goToPageObs){
					this.goToPageObsSub = this.props.goToPageObs.subscribe((page)=>{
						this.goToPage(page)
					})
				}
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            goToPage(page) {
                this.props.history.push(page);
            }
			
			logout(){
				this.props.logout(()=>{
					this.goToPage('/login')
				})
			}
			
			handleLanguageChange(value){
				this.setState({
					language : value
				})
				this.props.languageNext(value)
			}

            render() {
                return <WrappedComponent
				{...this.props}
				logout={()=>this.logout()}
				goToPage={(page)=>this.goToPage(page)}
				handleLanguageChange={(value)=>this.handleLanguageChange(value)}
				/>
            }
        }
        $Navigation_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Navigation_Api
    }
}
    