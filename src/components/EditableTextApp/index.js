import {Component} from 'react'

import {
  EditableInputBgContainer,
  EditableInputCart,
  CartHeading,
  TextInput,
  CustomButton,
  TextPara,
  TextContainer,
} from './styledComponents'

class EditableTextApp extends Component {
  state = {userInput: '', isClickedSave: false}

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({isClickedSave: !prevState.isClickedSave}))
  }

  renderInput = () => {
    const {userInput} = this.state
    return (
      <div>
        <TextInput type="text" onChange={this.getUserInput} value={userInput} />
        <CustomButton onClick={this.onClickSave}>Save</CustomButton>
      </div>
    )
  }

  renderText = () => {
    const {userInput} = this.state
    return (
      <TextContainer>
        <TextPara>{userInput}</TextPara>
        <CustomButton onClick={this.onClickSave}>Edit</CustomButton>
      </TextContainer>
    )
  }

  render() {
    const {isClickedSave} = this.state
    // console.log(isClickedSave)
    return (
      <EditableInputBgContainer>
        <EditableInputCart>
          <CartHeading>Editable Text Input</CartHeading>
          {isClickedSave ? this.renderText() : this.renderInput()}
        </EditableInputCart>
      </EditableInputBgContainer>
    )
  }
}

export default EditableTextApp
