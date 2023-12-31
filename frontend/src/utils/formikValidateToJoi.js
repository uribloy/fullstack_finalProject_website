import Joi from "joi";

function formikValidateToJoi(formikValidateSchema) {
    return function validate(values) {
        const schema = Joi.object(formikValidateSchema);
        const errors = {};
        const { error } = schema.validate(values, { abortEarly: false });
        if (!error) {
            return null;
        }
        for (const detail of error.details) {
            const errorKey = detail.path[0];
            errors[errorKey] = detail.message;
        }
        return errors;
    };
}

export default formikValidateToJoi;