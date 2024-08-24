module.exports = (sequelize, Datatype) => {
    const db = require('./index')
    const Student = db.student
    const University = db.university
    const DegreeLevel = db.degreelevel
    const Student_Degree = sequelize.define("student_degrees", {      
        id: {
            type: Datatype.INTEGER,
            autoIncrement: true,  
            primaryKey: true      
        },
        studentId: {
            type: Datatype.INTEGER,
            references: {
                model: Student, 
                key: 'id' 
            }
        },
        universityId: {
            type: Datatype.INTEGER,
            references: {
                model: University, 
                key: 'id' 
            }
        },
        degreeLevelId: {
            type: Datatype.INTEGER,
            references: {
                model: DegreeLevel, 
                key: 'id' 
            }
        }
    })
    return Student_Degree;
}   