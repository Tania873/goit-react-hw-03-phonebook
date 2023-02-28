import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  setId = () => {
    const addId = nanoid();
    this.setState({ id: addId });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleCange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          id={this.addId}
          value={this.state.name}
          onChange={this.handleCange}
          onBlur={this.setId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          value={this.state.number}
          onChange={this.handleCange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="000-00-00"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
