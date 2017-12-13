import React, { Component } from 'react';
import Maps from 'react-cartographer/lib/components/Map';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Maps
          provider="bing"
          providerKey="Amj7pSZWD5oZnNFwW-texm2udFXbwW--DheMlmgbdUUxgh0zJtLQ8X6iGfe4c0bS"
          mapId="bing_map"
          latitude={this.props.lat}
          longitude={this.props.long}
          zoom={17}
          height={270}
          width={270}
        />
      </div>
    );
  }
}
export default Map;

