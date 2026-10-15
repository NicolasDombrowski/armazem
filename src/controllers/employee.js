import "server-only";
const Employee = require('../models/employee.js');

async function fetchAll(req, res) {
    try {
        const query = await Employee.findAll();
        res.json(query);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function fetch(req, res) {
    try {
        const query = await Employee.findByPk(req.params.id);
        res.json(query);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function insert(req, res) {
    try {
        const query = await Employee.create({
            name: req.body.name,
            id: req.body.id,
            phone: req.body.phone,
            mail: req.body.mail,
            department: req.body.department,
            access_profile: req.body.accessProfile
        });

        res.status(201).json(query);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function update(req, res) {
    try {
        const query = await Employee.findByPk(req.params.id);

        await query.update({
            name: req.body.name,
            id: req.body.id,
            phone: req.body.phone,
            mail: req.body.mail,
            department: req.body.department,
            access_profile: req.body.accessProfile
        });

        res.json(query);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function softDelete(req, res) {
    try {
        const query = await Employee.findByPk(req.params.id);

        await employee.update({
            active: false
        });

        res.json(query);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function drop(req, res) {
    try {
        const employee = await Employee.findByPk(req.params.id);

        await employee.destroy();

        res.json({
            message: "employee removed."
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    fetchAll,
    fetch,
    insert,
    update,
    softDelete
};