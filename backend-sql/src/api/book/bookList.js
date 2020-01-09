const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const BookService = require('../../services/bookService');
const BookRepository = require('../../database/repositories/bookRepository');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.bookRead,
    );

    const payload = await new BookService(
      req,
    ).findAndCountAll(req.query);
    
    // const payload = await BookRepository.findAndCountAll(
    //   req.query,
    // );

    // const payload = await new BookService.(
    //   req.query,
    // ).findAndCountAll;

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
