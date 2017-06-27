import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const {email, password} = this.props;

		this.props.loginUser({ email, password }); 
	} 

  render() {
    return (
      <Card>
        <CardSection>
						<Input
							label="Email"
							placeholder="email@mail.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email} 
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry 
							label="Passw"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>

					<Text style={styles.errorTextStyle}>
						{ this.props.error }
					</Text>

					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
							Login 
						</Button>
					</CardSection>
      </Card>
    )
  }
}

const styles= {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}; 

mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error
	};
};

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);

