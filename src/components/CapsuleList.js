import React from 'react'
import PropTypes from 'prop-types'
import Capsule from './Capsule'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { StyleSheet } from 'react-native';

// get capsule image if exist
let getImage = capsule => {
    return ('images' in capsule && capsule.images.length > 0) ?
        <Avatar alt={capsule.images[0].filename} src={capsule.images[0].url}/> :
        <ImageIcon/>
}

// get capsule chapters if exist
let getChapters = capsule => {
    return ('chapters' in capsule) ?
        <List> {capsule.chapters.map(chapter => ( <>
            <ListItem key={chapter._id}>
                <ListItemText key={chapter._id.concat('_', 'text')}
                    primary={'mainTitle' in chapter && chapter.mainTitle} secondary={'name' in chapter && chapter.name} />
            </ListItem>
            <Divider variant="inset" component="li" /> </>
        ))} </List> :
        <ImageIcon/>
}

const CapsuleList = ({ capsules, onCapsuleClick, onCapsuleClose, style, toggleCapsule}) => (
    <> {toggleCapsule && <Dialog aria-labelledby="simple-dialog-title" onClose={() => onCapsuleClose()} open>
        <Toolbar>
            <DialogTitle id="customized-dialog-title" onClose={() => onCapsuleClose()}>
                {toggleCapsule.title}
            </DialogTitle>
            <IconButton edge="start" color="inherit" onClick={() => onCapsuleClose()} aria-label="close">
                <CloseIcon />
            </IconButton>
        </Toolbar>
        <DialogContent>
            {getChapters(toggleCapsule)}
        </DialogContent> </Dialog>}
        <List style={{cursor: 'pointer'}}>
            {capsules.map(capsule => (
                <> <Capsule id={capsule._id} title={capsule.title} summary={capsule.summary}
                    image={getImage(capsule)} onClick={() => onCapsuleClick(capsule._id)} />
                <Divider variant="inset" component="li" /> </> ))}
        </List></>
)

CapsuleList.propTypes = {
  onCapsuleClick: PropTypes.func.isRequired,
}

export default CapsuleList
