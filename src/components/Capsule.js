import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const Capsule = ({id, title, summary, image, onClick}) => (
    <ListItem key={id} onClick={onClick}>
        <ListItemAvatar key={id.concat('_', 'img')}>
            {image}
        </ListItemAvatar>
        <ListItemText key={id.concat('_', 'text')} primary={title} secondary={summary} />
    </ListItem>
)

Capsule.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Capsule
