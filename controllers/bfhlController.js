exports.getOperationCode = (req, res) => {
    res.status(200).json({ "operation_code": 1 });
};

exports.processData = (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            "is_success": false,
            "message": "Invalid input format"
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 
        ? [alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }))[0]] 
        : [];

    res.json({
        "is_success": true,
        "user_id": "uditkuma09052004",
        "email": "udit@cgc.com",  
        "roll_number": "2121395",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highest_alphabet
    });
};
