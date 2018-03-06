
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const tilesData = [
  {
    img: 'public/images/produits/rabot.png',
    title: 'Rabot 3d',
    author: 'trb be',
  },
  {
    img: 'public/images/produits/racle.png',
    title: 'Racle 3D',
    author: 'trb be',
  },
  {
    img: 'public/images/produits/selas.png',
    title: 'Four selas 3d',
    author: 'trb be',
  },
  {
    img: 'public/images/produits/chenet.png',
    title: 'Chenet 3d',
    author: 'be',
  },
 
];

const TrbCastConsultGallery_Template = (props) => {
    const styles=props.styles
    return (
                <div style={styles.root}>
                    <GridList
                      cellHeight={180}
                      style={styles.gridList}
                    >
                      <Subheader>December</Subheader>
                      {tilesData.map((tile) => (
                        <GridTile
                          key={tile.img}
                          title={tile.title}
                          subtitle={<span>by <b>{tile.author}</b></span>}
                          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                          <img src={tile.img} />
                        </GridTile>
                      ))}
                    </GridList>
                  </div>
    );
}



TrbCastConsultGallery_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastConsultGallery_Template