const Loan = require("../models/loan");

// GET all available loans
exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find();
        res.status(200).json(loans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET details of a specific loan by ID
exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(loan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST create a new loan
exports.createLoan = async (req, res) => {
    // Add logic to check admin role before creating loan if required
    try {
        const loan = new Loan(req.body);
        const newLoan = await loan.save();
        res.status(201).json(newLoan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT update details of a loan
exports.updateLoan = async (req, res) => {
    // Add logic to check admin role before updating loan if required
    try {
        const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(loan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE a loan
exports.deleteLoan = async (req, res) => {
    // Add logic to check admin role before deleting loan if required
    try {
        const loan = await Loan.findByIdAndDelete(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json({ message: 'Loan deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
