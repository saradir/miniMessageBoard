const { body, validationResult, matchedData } = require("express-validator");

const authorLengthError = "must be between 1 and 10 characters.";
const textLengthError = "must include more than 1 character and no more than 300";

const validateMessage = [
    body("author").trim()
    .isLength({min: 1, max: 10}).withMessage(`Username ${authorLengthError}`),
    body("messageText").trim()
    .isLength({min: 1, max: 300}).withMessage(`Message ${textLengthError}`),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).render("form", {
             title: "New Message",
              errors: errors.array()
            });
        }

    req.validated = matchedData(req, { locations: ["body"] });

    next();
    }
];

module.exports = {
    validateMessage,
};

