const CaptainModel = require('../models/captain.model');

module.exports.createCaptain = async (getData) => {
    const { firstname, lastname, email, password, color, plate, capacity, vehicleType } = getData;

    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required.");
    }

    const captain = await CaptainModel.create({
        fullname: { firstname, lastname },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    return captain;
};
