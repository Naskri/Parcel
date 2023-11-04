import { useEffect, useState } from 'react'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvents } from 'react-leaflet'
import styled from './Map.module.css'
import { LeafletMouseEvent } from 'leaflet'
import { usePosition } from '../../hooks/usePosition'
import { CustomLink } from '../../features/UI/CustomLink/CustomLink'

export type GeoLocation = {
  latitude: number
  longitude: number
}

const RecenterAutomatically = ({ data }: { data: GeoLocation }) => {
  const { latitude, longitude } = data
  const map = useMap()
  useEffect(() => {
    map.setView([latitude, longitude])
  }, [latitude, longitude])
  return null
}

const LocationMarker = ({ data }: { data: GeoLocation }) => {
  const { latitude, longitude } = data

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const MapClickHandler = ({ onMapClick }: { onMapClick: (event: any) => void }) => {
  useMapEvents({
    click: (event) => {
      onMapClick(event)
    },
  })

  return null
}

export const Map = () => {
  const { position } = usePosition()

  const [userPosition, setUserPosition] = useState<GeoLocation>({
    latitude: 52.237049,
    longitude: 21.017532,
  })

  useEffect(() => {
    if (!position) return
    setUserPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }, [position])

  const handleMapClick = (e: LeafletMouseEvent) => {
    const { latlng } = e

    setUserPosition({
      latitude: latlng.lat,
      longitude: latlng.lng,
    })
  }

  return (
    <>
      <Navigation title="Mapa" />

      <div className={styled.map}>
        <MapContainer
          center={[userPosition.latitude, userPosition.longitude]}
          zoom={17}
          scrollWheelZoom={false}
          className={styled.map__container}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[userPosition.latitude, userPosition.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {userPosition && <RecenterAutomatically data={userPosition} />}
          {userPosition && <LocationMarker data={userPosition} />}
          <MapClickHandler onMapClick={handleMapClick} />
        </MapContainer>
        {userPosition && (
          <div className={styled.map__action}>
            <CustomLink
              path={`./../?lat=${userPosition.latitude}&log=${userPosition.longitude}`}
              modifier="primary"
            >
              Potwierdź dane
            </CustomLink>
          </div>
        )}
      </div>
    </>
  )
}
