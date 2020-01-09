const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
    .values;
const BookCategoryRepository = require('../../database/repositories/bookCategoryRepository');

module.exports = async (req, res) => {
    try {
        new PermissionChecker(req).validateHas(
            permissions.iamRead,
        );

        const payload = await BookCategoryRepository.findAllWithBooks(
            req.query,
        );

        res.status(200).send(payload);
    } catch (error) {
        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send(error.message);
        }

        console.error(error);
        return res.status(500).send(error.message);
    }
};
