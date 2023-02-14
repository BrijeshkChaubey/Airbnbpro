import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, useWindowDimensions, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import places from '../../../assets/data/feed'
import PostCaroselitem from "../../components/PostCarouselItem";

const SearchResultsMaps = (props) => {
    const [selectedPlaceid, setSelectedPlaceid] = useState(null);


    const map = useRef()
    const width = useWindowDimensions().width;
    const flatlist = useRef()
    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceid(selectedPlace.id)
        }
    })
    useEffect(() => {
        if (!selectedPlaceid || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceid)
        flatlist.current.scrollToIndex({ index })
        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceid])

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
                style={{ width: '100%', height: '100%' }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}>
                {places.map(place => (
                    <CustomMarker
                        isSelected={place.id === selectedPlaceid}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        onPress={() => setSelectedPlaceid(place.id)}
                    />
                )
                )}

            </MapView>
            <View style={{ position: 'absolute', bottom: 40 }}>
                <FlatList
                    ref={flatlist}
                    data={places}
                    renderItem={({ item }) => <PostCaroselitem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}

                />
            </View>
        </View>
    );
}

export default SearchResultsMaps;
