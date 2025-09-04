const axios = require('axios');

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

/**
 * Get coordinates (latitude and longitude) for a given address using a proxied Google Maps Geocoding API.
 * @param {string} address - The address to geocode.
 * @returns {Promise<{lat: number, lng: number}>} - The coordinates object.
 */
async function getCoordinatesFromAddress(address) {
    if (!address) throw new Error('Address is required');
    if (!GOOGLE_MAPS_API_KEY) throw new Error('Google Maps API key is not set');

    const url = `https://maps.gomaps.pro/maps/api/geocode/json`;

    const response = await axios.get(url, {
        params: {
            address,
            key: GOOGLE_MAPS_API_KEY,
        },
    });

    const data = response.data;

    if (data.status !== 'OK' || !data.results.length) {
        throw new Error('Unable to geocode address');
    }

    const location = data.results[0].geometry.location;

    return {
        lat: location.lat,
        lng: location.lng,
    };
}

module.exports = {
    getCoordinatesFromAddress,
};
