const ptBR = {
  app: {
    title: 'Thư viện',
  },

  entities: {
    loan: {
      validation: {
        closedLoansSelectedForEmail:
          'Vui lòng chỉ chọn các phiếu mượn chưa được đóng.',
        returnDateRequired:
          'Ngày trả là bắt buộc.',
        bookOutOfStock:
          'Xin lỗi, cuốn sách đã hết trong kho.',
      },
    },
    book: {
      validation: {
        bookOutOfStock:
          'Số bản sao ít hơn số bản sao hiện đang mượn.',
      },
    },
  },

  auth: {
    userDisabled: 'Tài khoản của bạn bị vô hiệu hóa',
    userNotFound: `Xin lỗi, chúng tôi không nhận ra thông tin đăng nhập của bạn`,
    wrongPassword: `Xin lỗi, chúng tôi không nhận ra mật khẩu đăng nhập của bạn`,
    weakPassword: 'Mật khẩu này quá yếu.',
    emailAlreadyInUse: 'Email này đã được sử dụng',
    invalidEmail: 'Vui lòng cung cấp một địa chỉ email hợp lệ.',
    passwordReset: {
      invalidToken:
        'Liên kết đặt lại mật khẩu không hợp lệ hoặc hết hạn',
      error: `Không tìm thấy email`,
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'Liên kết xác minh email không hợp lệ hoặc hết hạn',
      error: `Không tìm thấy email`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists: 'Tài khoản có email này đã tồn tại',
      userNotFound: 'Không tìm thấy người dùng',
      disablingHimself: `Bạn không thể tự vô hiệu hóa`,
      revokingOwnPermission: `Bạn không thể thu hồi sự cho phép của thủ thư`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'Tập tin trống',
      invalidFileExcel:
        'Chỉ cho phép các tệp Excel (.xlsx).',
      invalidFileUpload:
        'Tập tin không hợp lệ. Hãy chắc chắn rằng bạn đang sử dụng phiên bản mới nhất của mẫu.',
      importHashRequired: 'Nhập Hash là bắt buộc',
      importHashExistent: 'Dữ liệu đã được nhập',
    },
  },

  errors: {
    validation: {
      message: 'Xảy ra lỗi',
    },
  },

  emails: {
    loan: {
      inProgress: {
        subject: `Sách {0} sẽ được trả lại sau {1} ngày`,
        body: `
          <p>Xin chào {3},</p>
          <p>Đây chỉ là một lời nhắc rằng bạn nên trả lại sách {1} cho {0} trong vòng {2} ngày tiếp theo.</p>
          <p>Cảm ơn</p>
          <p>{0}</p>
        `,
      },
      overdue: {
        subject: `Ngày trả lại sách {0} đã quá hạn`,
        body: `
          <p>Xin chào {2},</p>
          <p>Vui lòng trả lại sách {1} cho {0} càng sớm càng tốt.</p>
          <p>Cảm ơn,</p>
          <p>{0}</p>
        `,
      },
    },
    invitation: {
      subject: `Bạn đã được mời đến {0}`,
      body: `
        <p>Xin chào</p>
        <p>Bạn đã được mời đến{0}.</p>
        <p>Nhấp vào liên kết này để đăng ký.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Cảm ơn,</p>
        <p>{0}</p>
      `,
    },
    emailAddressVerification: {
      subject: `Kiểm tra email cho tài khoản của bạn {0}`,
      body: `
        <p>Xin chào,</p>
        <p>Nhấp vào liên kết này để xác minh địa chỉ email của bạn.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>Nếu bạn không yêu cầu xác minh cho địa chỉ này, xin vui lòng bỏ qua email này.</p>
        <p>Cảm ơn,</p>
        <p>{1}</p>
      `,
    },
    passwordReset: {
      subject: `Đặt lại mật khẩu tài khoản {0}`,
      body: `
        <p>Xin chào,</p>
        <p>Nhấp vào liên kết này để đặt lại mật khẩu đăng nhập ứng dụng {0} với tài khoản của bạn {1}.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>
        <p>Cảm ơn,</p>
        <p>{0}</p>
      `,
    },
  },
};

module.exports = ptBR;
