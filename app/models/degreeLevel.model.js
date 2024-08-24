module.exports = (sequelize, Datatype) => {
    const DegreeLevel = sequelize.define("degreeLevel", {
        id: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Datatype.STRING,
            allowNull: false
        }
    })
    return DegreeLevel;
}   