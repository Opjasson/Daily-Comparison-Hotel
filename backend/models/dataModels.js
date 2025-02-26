import { Sequelize, UUID } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const data = db.define("data", {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    
});
