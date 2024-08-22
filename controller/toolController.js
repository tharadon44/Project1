const express = require("express")
const tool = require("../models/tool")
//GET
exports.gettool = async(req , res) =>{
    try{
        const tools = await tool.find();
        res.status(200).json(tools);
    }catch (error){
        res.status(500).json({message:error.message});
    }
};
exports.gettoolID = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await tool.findById(id);
        res.status(200).json(tool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.posttool = async (req, res) => {
    try {
        const {tool_name, category_type, quantity, issue_time, entry_time, phone_number } = req.body;
        const tool = new tool({ tool_name, category_type, quantity, issue_time, entry_time, phone_number  });
        const savedtool = await tool.save();
        res.status(201).json(savedtool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updatetool = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await tool.findById(id);
        if (!tool) return res.status(404).json({ message: 'tool not found' });
        const update = req.body;
        Object.assign(tool, update);
        const updatedtoolt = await tool.save();
        res.json(updatedtoolt);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.deletetool = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await tool.findById(id);
        if (!tool) return res.status(404).json({ message: 'tool not found' });
        await tool.findByIdAndDelete(id);
        res.json({ message: 'tool deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};