// models/tool.js
const mongoose = require('mongoose');
const toolSchema = new mongoose.Schema({ //tyep เพื่อให้รู้ว่าจะนิดกันเป็นข้อมูล เช่น strins date number
    tool_name: { type: String, required: true },    // required: true means this field must be present
    category_type: { type: String, required: true },
    quantity: { type: Number, required: false },     // Renamed from 'Number' to 'quantity'
    issue_time: { type: Date, required: false },     // Changed from 'datetime' to 'Date'
    entry_time: { type: Date, required: false },
    phone_number: { type: String, required: false }, // Changed from 'Number' to 'String'
}, {
    timestamps: true,   // Automatically add createdAt and updatedAt timestamps
    versionKey: false   // Disable the __v version key
});


const tool = mongoose.model('tool', toolSchema);
module.exports = tool