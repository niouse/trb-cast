


import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Template from "./../template/trb-cast-home.template.jsx";
import defaultStyles from "./../styles/trb-cast-home.styles.default.js";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/

if (Meteor.isClient) {

    describe('@Template (trb-cast-home.template.jsx)', function() {

        before(function() {
            TrbCastHome = Template()()
            wrapper = mount(
                <MuiThemeProvider>
					  <TrbCastHome  
							styles={{title : {color : "testColor"}}}
							text = {{title : "test title"}}
						/>
			  </MuiThemeProvider>
            );
        });

        describe('Return expected DOM tree', function() {
            it('Class name of root div tag is "container"', function() {
                expect(wrapper.first().hasClass('container')).to.be.true;
            });
            it('Has a h1 tag', function() {
                expect(wrapper.find('h1')).to.have.length(1);
            });
        });

        describe("text and styles are set correctly", function() {

            it('DOM elements ids match with default styles keys', function() {
                for (let nodeName in defaultStyles) {
                    expect(wrapper.find('#trb-cast-home-' + nodeName).exists()).to.be.true;
                }
            });

            it('Styles provided via props.styles are correctly applied', function() {
                expect(wrapper.find('#trb-cast-home-title').props().style.color).to.equal("testColor");
            });
            it('Texts provided via props.text are correctly applied', function() {
                expect(wrapper.find('#trb-cast-home-title').get(0).innerHTML).to.equal("test title");
            });
        });

    });

}
    
    
    
    