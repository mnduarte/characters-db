import React, { Fragment } from 'react'
import { MenuItem, Popper, Fade , Paper} from '@material-ui/core';
import { ButtonPerfil } from './styles';

export const MenuUser = ({fullname}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
            setAnchorEl(event.currentTarget);
            setOpen((prev) => placement !== newPlacement || !prev);
            setPlacement(newPlacement);
    };


    const handleLogout = () => {
        console.log('-----------')
      };

    return(
        <Fragment>
            <ButtonPerfil
                onClick={handleClick('bottom-start')}
            >
                {fullname}
            </ButtonPerfil>          
            
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem onClick={handleLogout}>Cerrar Session</MenuItem>
                    </Paper>
                </Fade>
                )}
            </Popper>
        </Fragment>
    )
}