import React, {useContext} from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, IconButton} from '@material-ui/core/';
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import {StCard, StCardMedia, STCardContent, CardHeader, Name, Likes, Description} from './styles'
//import {Card, Img, CardContent, Text} from './styles'
import { useHover } from '../../hooks/useHover'

import { CharacterContext } from '../../context/CharacterContext';


export const CardCharacter = ({id, name, series, species, status, originPlanet, gender, image, likes, like}) => {
    const urlImg = require(`../../assets/images/character${image}`);
    const [hoverRef, isHovered] = useHover();
    const { onHandleFavorite } = useContext(CharacterContext);

    const handleFavorite = () => {
        onHandleFavorite(id, like)
    };

    /*return(
        <Card>
            <Img
                src={urlImg}
                alt={name}
            />
            <CardContent>
                <Text>
                    {name}
                </Text>
            </CardContent>
        </Card>
    )*/



    return (
        <StCard ref={hoverRef} hover={{isHovered}}>
            <CardActionArea>
                <StCardMedia
                    component="img"
                    alt={name}
                    image={urlImg}
                    title={name}
                    hover={{isHovered}}
                />
                <STCardContent hover={{isHovered}}>
                    <CardHeader>
                        <Name>
                            {name}
                        </Name>
                        <Likes>
                            {
                                like ? <Favorite 
                                    onClick={handleFavorite}
                                    color="secondary"
                                    />
                                :<FavoriteBorder
                                    onClick={handleFavorite}    
                                /> 
                            }
                            {likes}
                        </Likes>
                    </CardHeader>
                    <Description
                        hover={{isHovered}}
                    >
                        <Typography variant="body2" color="textSecondary" component="p">
                            Serie: {series} Especie:{species} Estado:{status} Planeta de Origen: {originPlanet}
                        </Typography>
                    </Description>
                </STCardContent>
            </CardActionArea>
        </StCard>
    )
}