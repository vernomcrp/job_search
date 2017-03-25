import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FavoriteButton, TagList, Title, SubText } from 'components';
import { Wrapper, DateTime } from './styles';

const propTypes = {
  id: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  favorited: PropTypes.bool,
  handleSwitchFavoriteStatus: PropTypes.func.isRequired
};

const JobItem = ({id, jobTitle, area, updatedAt, techs, index, favorited, submitting, handleSwitchFavoriteStatus}) =>{
  return (
    <Wrapper>
      <Link to={`/jobs/${id}`} >
        <Title>{jobTitle}</Title>
        <SubText>{area}</SubText>
      </Link>
      <TagList tags={techs} />
      {renderFavoriteButton(id, favorited, submitting, index, handleSwitchFavoriteStatus)}
      <DateTime>{updatedAt}</DateTime>
    </Wrapper>
  )
};

function renderFavoriteButton(id, favorited, submitting = false, index, fnc) {
  if (favorited === undefined) { return }
  return (
    <FavoriteButton
      jobId={id}
      favorited={favorited}
      submitting={submitting}
      index={index}
      handleSwitchFavoriteStatus={fnc}
    />
  );
}

JobItem.propTypes = propTypes;
export default JobItem;