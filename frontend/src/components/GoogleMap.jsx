import React from 'react';

const MapComponent = () => {
  const mapStyle = {
    position: 'relative',
    height: '400px',
    background: '#fff',
    overflow: 'hidden',
  };

  const iframeStyle = {
    position: 'relative',
    zIndex: '2',
    width: '100%',
    height: '100%',
  };

  return (
    <div className="mapouter" style={mapStyle}>
      <div className="gmap_canvas" style={{ height: '100%', width: '100%' }}>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=fast%20university%20lahore&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          style={iframeStyle}
          allowFullScreen
        ></iframe>
      </div>
      <style>
        {`
          .mapouter a {
            color: #fff !important;
            position: absolute !important;
            top: 0 !important;
            z-index: 0 !important;
          }
        `}
      </style>
      <a href="https://blooketjoin.org">blooketjoin</a>
    </div>
  );
};

export default MapComponent;
