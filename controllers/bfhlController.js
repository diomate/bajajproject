// controllers/bfhlController.js
exports.postData = (req, res) => {
    const { data } = req.body;
    const user_id = "your_fullname_ddmmyyyy"; 
    const email = "your_college_email";
    const roll_number = "your_roll_number";

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ "is_success": false, "error": "Invalid Input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0].toUpperCase()] : [];

    res.status(200).json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highest_alphabet
    });
};

exports.getOperationCode = (req, res) => {
    res.status(200).json({ "operation_code": 1 });
};

