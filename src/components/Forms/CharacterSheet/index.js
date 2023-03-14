import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
const class_level = ''
function CharacterSheet() {
    return (
      <Form>
       {/* Character Name*/} 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Character Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      {/*Character Boilerplate questions*/}
      <InputGroup>
      <InputGroup.Text id='class&level'>Class&Level</InputGroup.Text>
      <Form.Control
        placeholder='Fighter 6'
        value={class_level}
        />
      </InputGroup>
        
        {/* Vertical Sidebar on left for stats*/ }
        {/*Strength, Dexteterity, Constitution, Intelligence, Wisdom, Charisma*/}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/*Single div 'Inspiration' */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/*Proficiency Bonus */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/*Saving Throws (radio w/ number input type with all stats listed on left) */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/* Skills (18), Also radio with number input*/}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/* Single line div passive wisdom type number*/}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/* Other proficiencies & languages type text*/}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text" label="Check me out" />
        </Form.Group>
        {/*New flexbox fields: Armour class, initiative, speed, current hit points, temp hit points, hit dice, death saves(Success/failure each 3 checkboxes) */}
        {/*New flexbox Name, atk bonus and damage/type in upperleft, attacks&spellcasting section bottom 2/3 */}
        {/*New flexbox Equipment 5 tabs (money number type CP,SP,EP,GP,PP) hero text area*/}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  export default CharacterSheet;