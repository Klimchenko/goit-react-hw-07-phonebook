import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changesFilter } from '../../redux';
import { getFilter } from '../../redux';
import { Label, Input, Wrapper } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label>
        <Input
          type="text"
          value={value}
          placeholder="Find contacts by name"
          onChange={e => dispatch(changesFilter(e.currentTarget.value))}
        />
      </Label>
    </Wrapper>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
