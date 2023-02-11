import React, { useRef } from "react";

import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";


const Destination = ({setDestination}) => {

    const destinationRef = useRef();

    const {ready, value, setValue, suggestions: { status, data }, clearSuggestions, } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setDestination({ lat, lng });
    };

    return (
                <Combobox onSelect={handleSelect}>
                    <ComboboxInput 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className="combobox-input"
                        disabled= {!ready}
                        placeholder="Destination"
                        ref={destinationRef}
                        />
                    <ComboboxPopover>
                        <ComboboxList>
                            {status ==="OK" && data.map(({place_id, description}) => (
                                <ComboboxOption key={place_id} value={description} />
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>
    )
}



export default Destination;