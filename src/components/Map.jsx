import React, { useRef,
    useMemo,
    useCallback,
    useState
} from "react";
import { GoogleMap,
    DirectionsRenderer,
} from "@react-google-maps/api";
import Navbar from "./Navbar";

import Destination from "./Destination";

import Distance from "./Distance";
import Origin from "./Origin";
import { Button, ButtonGroup, CssBaseline, Grid } from "@mui/material";


const Map = () => {
    
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [directions, setDirections] = useState();


    const mapRef = useRef();
    const center = useMemo(() => ({ lat: 43.65, lng: -79.38 }), []);
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        zoomControl: true
    }),
    []
    );
    const onLoad = useCallback((map) => 
        (mapRef.current = map), []);


    const fetchDirections = (destination) => {
        if (!origin) return;
        // eslint-disable-next-line no-undef
        const service = new google.maps.DirectionsService();
        service.route(
            {
                origin: origin,
                destination: destination,
                // eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === "OK" && result) {
                    setDirections(result);
                }
            }
        )
    }
    

    return (
        <div>
            <CssBaseline />
            <Navbar/>
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                    <div className="">
                        <div className="address">
                            <p className="button">Home Address:</p>
                            <Origin
                                setOrigin={(position) => {
                                setOrigin(position);
                                mapRef.current?.panTo(position);
                            }}/>
                            
                            <p className="button">Work Address:</p>
                            <Destination
                                setDestination={(position) => {
                                setDestination(position);
                                mapRef.current?.panTo(position);
                            }}/>
                        </div>
                        <div className="button">
                            <ButtonGroup>
                                <Button type="submit" onClick={() => fetchDirections(destination)}>
                                    Calculate
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="button">
                            {directions && <Distance leg={directions.routes[0].legs[0]}/> }
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <GoogleMap
                            zoom={14}
                            center={center}
                            mapContainerClassName="map-container"
                            options={options}
                            onLoad={onLoad}
                            >
                                {directions && (
                                        <DirectionsRenderer directions={directions} options={{
                                            polylineOptions: {
                                                zIndex: 50,
                                                strokeColor: "#E86E4D",
                                                strokeWeight: 3,
                                            },
                                        }} />
                                    )}
                        </GoogleMap>
                </Grid>
            </Grid>
        </div>
    )
}

export default Map;