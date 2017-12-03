import React from 'react';
import Geocoder from 'react-native-geocoder';

export default class Local extends React.Component{
    constructor(){
        super();
        this.state = {
            userLat : null,
            userlng : null,
        };
    };

    _local () {
        this.setState({
            userLat : position.coords.latitude,
            userLng : position.coords.longitude,
        });
    }
}


