import { Header, Modal, Button } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class ModalCustom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      request: '',
      open: false
    }
  }

  onInput = (e) => {
    this.setState({ request: e.target.value });
  }

  onSubmit = (e) => {
    this.props.handleClick(this.state.request);
    this.setState({ request: '', open: false });
  }

  handleClick = () => {
    this.setState({open: true})
  }

  render() {
    const btn = <Button color='teal' content='Novo Pedido' icon='add' labelPosition='left' onClick={this.handleClick} />;
    return (
      <Modal trigger={btn} open={this.state.open}>
        <Modal.Header>Novo Pedido</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Insira o nome do pedido</Header>
            <div className="ui action input">
              <input type="text" placeholder="Pedido..." onChange={this.onInput} value={this.state.request} />
              <button className="ui button" onClick={this.onSubmit}>+</button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
