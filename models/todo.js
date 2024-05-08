const { DataTypes } = require('sequelize');
const sequelize = require("./index");

const Todo = sequelize.define(
  'Todo',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false 
    }
  },
  {
   tableName: "Todolists",
//    timestamps: true,
//    createdAt: false,
//    updatedAt: true,
  },
);
// console.log(Todo === sequelize.models.Todo); 

module.exports  = Todo;