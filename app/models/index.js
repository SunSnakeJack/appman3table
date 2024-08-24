const config = require('../config/db');

const Datatype = require('sequelize');
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.student = require("./student.model")(sequelize, Datatype)
db.university = require("./university.model")(sequelize, Datatype)
db.degreelevel = require("./degreeLevel.model")(sequelize, Datatype)
db.student_degree = require("./student-degree.model")(sequelize, Datatype)

//Many to Many 
db.student.belongsToMany(db.university, {
    through: "student_degrees"
})
db.university.belongsToMany(db.student, {
    through: "student_degrees"
})
db.university.belongsToMany(db.degreelevel, {
    through: "student_degrees"
})
db.degreelevel.belongsToMany(db.university, {
    through: "student_degrees"
})
db.student.belongsToMany(db.degreelevel, {
    through: "student_degrees"
})
db.degreelevel.belongsToMany(db.student, {
    through: "student_degrees"
})

module.exports = db


