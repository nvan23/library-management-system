const ptBR = {
  common: {
    or: 'hoặc',
    cancel: 'Hủy bỏ',
    reset: 'Đặt lại',
    save: 'Lưu lại',
    search: 'Tìm kiếm',
    edit: 'Chỉnh sửa',
    remove: 'Xóa',
    new: 'Thêm',
    export: 'Xuất ra Excel',
    noDataToExport: 'Không có dữ liệu để xuất',
    import: 'Nhập',
    discard: 'Loại bỏ',
    yes: 'Đồng ý',
    no: 'Từ chối',
    pause: 'Tạm dừng',
    areYouSure: 'Bạn có chắc không?',
    view: 'Xem',
    destroy: 'Xóa',
    mustSelectARow: 'Chọn một hàng',
    confirm: 'Xác nhận',
  },

  app: {
    title: 'Thư viện',
  },

  entities: {
    loan: {
      name: 'loan',
      label: 'Mượn sách',
      menu: 'Mượn sách',
      exporterFileName: 'loan_export',
      list: {
        menu: 'Mượn sách',
        title: 'Mượn sách',
      },
      emailAll: {
        label: 'Gửi lời nhắc qua email',
        success: 'Email đã được gửi thành công',
      },
      create: {
        success: 'Mượn thành công',
      },
      update: {
        success: 'Cập nhật phiếu mượn thành công',
      },
      destroy: {
        success: 'Xóa phiếu mượn thành công',
      },
      destroyAll: {
        success: 'Xóa tất cả phiếu mượn thành công',
      },
      edit: {
        title: 'Chỉnh sửa phiếu mượn',
      },
      fields: {
        id: 'ID',
        book: 'Sách',
        member: 'Thành viên',
        issueDateRange: 'Ngày mượn',
        issueDate: 'Ngày mượn',
        dueDateRange: 'Hạn trả',
        dueDate: 'Hạn trả',
        returnDateRange: 'Ngày trả',
        returnDate: 'Ngày trả',
        status: 'Trạng thái',
        createdAt: 'Được tạo vào ngày',
        updatedAt: 'Được cập nhật vào ngày',
        createdAtRange: 'Phạm vi ngày tạo',
      },
      enumerators: {
        status: {
          inProgress: 'Đang mượn',
          overdue: 'Quá hạn',
          closed: 'Đã đóng',
        },
      },
      new: {
        title: 'Thêm phiếu mượn',
      },
      view: {
        title: 'Xem phiếu mượn',
      },
      importer: {
        title: 'Nhập phiếu mượn',
        fileName: 'loan_import_template',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng khoảng trắng.',
      },
      validation: {
        bookOutOfStock: 'Xin lỗi, cuốn sách này đã hết hàng.',
      },
    },

    book: {
      name: 'book',
      label: 'Sách',
      menu: 'Sách',
      exporterFileName: 'book_export',
      list: {
        menu: 'Sách',
        title: 'Sách',
      },
      create: {
        success: 'Thêm sách thành công',
      },
      update: {
        success: 'Cập nhật sách thành công',
      },
      destroy: {
        success: 'Xóa sách thành công',
      },
      destroyAll: {
        success: 'Xóa toàn bộ sách thành công',
      },
      edit: {
        title: 'Chỉnh sửa sách',
      },
      fields: {
        id: 'ID',
        isbn: 'ISBN',
        title: 'Tiêu đề',
        author: 'Tác giả',
        publishingCompany: 'Nhà phát hành',
        // loanPeriodInDays: 'Hạn mượn (ngày)',
        numberOfCopiesRange: 'Phạm vi số bản sao',
        numberOfCopies: 'Số bản sao',
        stockRange: 'Trong kho',
        stock: 'Trong kho',
        images: 'Ảnh bìa',
        status: 'Trạng thái',
        category: 'Thể loại',
        topic: 'Chủ đề',
        type: 'Loại tài liệu',
        location: 'Vị trí lưu trữ',
        createdAt: 'Ngày thêm',
        updatedAt: 'Được cập nhật vào ngày',
        categoryBook: 'Thể loại / Sách',
        categories: 'Thể loại',
        series: 'Thuộc bộ',
        topicBook: 'Chủ đề / Sách',
        typeBook: 'Loại tài liệu / Sách',
        locationBook: 'Vị trí lưu trữ / Sách',
        topics: 'Các chủ đề',
        types: 'Các loại tài liệu',
        locations: 'Vị trí lưu trữ',
        createdAtRange: 'Phạm vi ngày thêm',
      },
      enumerators: {
        status: {
          available: 'Có sẵn',
          unavailable: 'Không có sẵn',
        },
      },
      new: {
        title: 'Thêm sách',
      },
      view: {
        title: 'Xem sách',
      },
      importer: {
        title: 'Nhập sách',
        fileName: 'book_import_template',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng khoảng trắng.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Chỉnh sửa hồ sơ',
      success: 'Chỉnh sửa hồ sơ thành công',
    },
    createAnAccount: 'Tạo một tài khoản',
    rememberMe: 'Nhớ tôi',
    forgotPassword: 'Quên mật khẩu',
    signin: 'Đăng nhập',
    signup: 'Đăng ký',
    signout: 'Đăng xuất',
    alreadyHaveAnAccount:
      'Đã có tài khoản? Đăng nhập',
    signinWithAnotherAccount:
      'Đăng nhập bằng tài khoản khác',
    emailUnverified: {
      message: `Vui lòng xác nhận email của bạn tại <strong> {0} </ strong> để tiếp tục.`,
      submit: `Gửi lại xác minh email`,
    },
    emptyPermissions: {
      message: `Bạn chưa có quyền. Chờ quản trị viên cấp cho bạn đặc quyền.`,
    },
    passwordResetEmail: {
      message: 'Gửi email khôi phục mật khẩu',
      error: `Email không được công nhận`,
    },
    passwordReset: {
      message: 'Đặt lại mật khẩu',
    },
    emailAddressVerificationEmail: {
      error: `Email không được công nhận`,
    },
    verificationEmailSuccess: `Email xác minh được gửi thành công`,
    passwordResetEmailSuccess: `Email khôi phục mật khẩu đã được gửi thành công`,
    passwordResetSuccess: `Mật khẩu đã thay đổi thành công`,
    verifyEmail: {
      success: 'Email được xác minh thành công',
      message:
        'Chỉ chốc lát, email của bạn đang được xác minh ...',
    },
  },

  roles: {
    librarian: {
      label: 'Thủ thư',
      description: 'Toàn quyền truy cập vào tất cả các tài nguyên',
    },
    member: {
      label: 'Thành viên',
      description: 'Bị giới hạn một số chức năng',
    },
  },

  types: {
    book: {
      label: 'Sách',
      description: '',
    },
    newspaper: {
      label: 'Báo chí',
      description: '',
    },
    journal: {
      label: 'Tạp chí',
      description: '',
    },
    dissertation: {
      label: 'Luận án',
      description: '',
    },
  },


  categories: {
    computersAndTech: {
      label: 'Máy tính và công nghệ',
      description: '',
    },
    history: {
      label: 'Lịch sử',
      description: '',
    },
    entertainment: {
      label: 'Giải trí',
      description: '',
    },
    medical: {
      label: 'Y khoa',
      description: '',
    },
    socialSciences: {
      label: 'Khoa học Xã hội',
      description: '',
    },
    sports: {
      label: 'Thể thao',
      description: '',
    },
    travel: {
      label: 'Du lịch',
      description: '',
    },
    action: {
      label: 'Hành động',
      description: '',
    },
    adventure: {
      label: 'Phiêu lưu',
      description: 'Các cuộc phiêu lưu thú vị',
    },
    comic: {
      label: 'Hài hước',
      description: '',
    },
    crime: {
      label: 'Tội phạm',
      description: '',
    },
    drama: {
      label: 'Kịch',
      description: '',
    },
    fantasy: {
      label: 'Siêu nhiên',
      description: '',
    },
    horror: {
      label: 'Kinh dị',
      description: '',
    },
    shortStory: {
      label: 'Truyện ngắn',
      description: '',
    },
  },

  topics: {
    love: {
      label: 'Tình yêu',
      description: '',
    },
    death: {
      label: 'Cái chết',
      description: '',
    },
    godVsEvil: {
      label: 'Thần và Ác quỷ',
      description: '',
    },
    comingOfAge: {
      label: 'Sách người cao tuổi',
      description: '',
    },
    powerAndCorruption: {
      label: 'Quyền lực và tham nhũng',
      description: '',
    },
    survival: {
      label: 'Sự sống còn',
      description: '',
    },
    courageAndHeroism: {
      label: 'Can đảm và chủ nghĩa anh hùng',
      description: '',
    },
    prejudice: {
      label: 'Định kiến',
      description: '',
    },
    individualAndSociety: {
      label: 'Cá nhân và xã hội',
      description: '',
    },
    war: {
      label: 'Chiến tranh',
      description: '',
    },

  },

  locations: {
    tthl_floor_1_bookshelf_no_1: {
      label: 'TTHL CTU, Lầu 1, Kệ sách số 1',
      description: 
      'Trung tâm Học liệu Đại Học Cần Thơ Lầu 1, Kệ sách số 1',
    },
    tthl_floor_1_bookshelf_no_2: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 2',
      description: '',
    },
    tthl_floor_1_bookshelf_no_3: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 3',
      description: '',
    },
    tthl_floor_1_bookshelf_no_4: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 4',
      description: '',
    },
    tthl_floor_1_bookshelf_no_5: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 5',
      description: '',
    },
    tthl_floor_1_bookshelf_no_6: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 6',
      description: '',
    },
    tthl_floor_1_bookshelf_no_7: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 7',
      description: '',
    },
    tthl_floor_1_bookshelf_no_8: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 8',
      description: '',
    },
    tthl_floor_1_bookshelf_no_9: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 9',
      description: '',
    },
    tthl_floor_1_bookshelf_no_10: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 1, Kệ sách số 10',
      description: '',
    },
    tthl_floor_2_bookshelf_no_1: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 1',
      description: '',
    },
    tthl_floor_2_bookshelf_no_2: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 2',
      description: '',
    },
    tthl_floor_2_bookshelf_no_3: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 3',
      description: '',
    },
    tthl_floor_2_bookshelf_no_4: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 4',
      description: '',
    },
    tthl_floor_2_bookshelf_no_5: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 5',
      description: '',
    },
    tthl_floor_2_bookshelf_no_6: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 6',
      description: '',
    },
    tthl_floor_2_bookshelf_no_7: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 7',
      description: '',
    },
    tthl_floor_2_bookshelf_no_8: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 8',
      description: '',
    },
    tthl_floor_2_bookshelf_no_9: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 9',
      description: '',
    },
    tthl_floor_2_bookshelf_no_10: {
      label: 'Trung tâm Học liệu ĐHCT, lầu 2, Kệ sách số 10',
      description: '',
    },
  },

  iam: {
    title: 'Tài khoản người dùng',
    menu: 'Tài khoản người dùng',
    disable: 'Vô hiệu hóa',
    disabled: 'Đã vô hiệu hóa',
    enabled: 'Đã kích hoạt',
    enable: 'Kích hoạt',
    doEnableSuccess: 'Kích hoạt tài khoản thành công',
    doDisableSuccess: 'Vô hiệu hóa tài khoản thành công ',
    doDisableAllSuccess: 'Vô hiệu hóa tất cả tài khoản thành công',
    doEnableAllSuccess: 'Kích hoạt tất cả tài khoản thành công',
    doAddSuccess: 'Thêm tài khoản thành công',
    doUpdateSuccess: 'Cập nhật tài khoản thành công',
    viewBy: 'Xem bởi',
    users: {
      name: 'users',
      label: 'Tài khoản người dùng',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Quyền truy cập được xóa thành công',
    },
    roles: {
      label: 'Vai trò',
      doRemoveAllSelectedSuccess:
        'Quyền truy cập được xóa thành công',
    },
    edit: {
      title: 'Chỉnh sửa người dùng',
    },
    new: {
      title: 'Thêm tài khoản',
      emailsHint:
        'Tách nhiều địa chỉ email bằng ký tự dấu phẩy.',
    },
    view: {
      title: 'Xem tài khoản người dùng',
      activity: 'Các hoạt động',
    },
    importer: {
      title: 'Nhập tài khoản người dùng',
      fileName: 'users_import_template',
      hint:
        'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng dấu cách. Mối quan hệ phải là ID của các hồ sơ được tham chiếu cách nhau bởi khoảng trắng. Vai trò phải là ID của vai trò cách nhau bởi khoảng trắng.',
    },
    errors: {
      userAlreadyExists:
        'Tài khoản với địa chỉ email này đã tồn tại',
      userNotFound: 'Không tìm thấy người dùng',
      disablingHimself: `Bạn không thể tự vô hiệu hóa`,
      revokingOwnPermission: `Bạn không thể thu hồi quyền truy cập của thủ thư`,
    },
  },

  user: {
    fields: {
      id: 'ID',
      authenticationUid: 'Uid xác thực',
      avatars: 'Ảnh đại diện',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Họ và tên',
      firstName: 'Tên',
      lastName: 'Họ',
      status: 'Trạng thái',
      disabled: 'Đã vô hiệu hóa',
      phoneNumber: 'Số điên thoại',
      role: 'Vai trò',
      createdAt: 'Ngày thêm',
      updatedAt: 'Được cập nhật vào ngày',
      roleUser: 'Vai trò / Tài khoản',
      roles: 'Vai trò',
      createdAtRange: 'Phạm vi ngày thêm',
      password: 'Mật khẩu',
      rememberMe: 'Nhớ tôi',
    },
    enabled: 'Đã kích hoạt',
    disabled: 'Đã vô hiệu hóa',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} không có hiệu lực',
    },
  },

  auditLog: {
    menu: 'Nhật ký kiểm toán',
    title: 'Nhật ký kiểm toán',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Phân tách nhiều thực thể bằng ký tự dấu phẩy.',
    fields: {
      id: 'ID',
      timestampRange: 'Giai đoạn',
      entityName: 'Thực thể',
      entityNames: 'Các thực thể',
      entityId: 'ID thực thể',
      action: 'Thao tác',
      values: 'Giá trị',
      timestamp: 'Ngày',
      createdByEmail: 'Email tài khoản',
    },
  },
  settings: {
    title: 'Cài đặt',
    menu: 'Cài đặt',
    save: {
      success:
        'Cài đặt đã lưu thành công. Trang sẽ tải lại sau {0} giây để các thay đổi có hiệu lực.',
    },
    fields: {
      theme: 'Chủ đề',
      loanPeriodInDays: 'Thời gian cho mượn (tính bằng ngày)',
    },
    colors: {
      default: 'Mặc định',
      cyan: 'Cyan',
      'geek-blue': 'Xanh nước biển',
      gold: 'Màu vàng gold',
      lime: 'Màu vôi',
      magenta: 'Màu đỏ hồng',
      orange: 'Màu cam',
      'polar-green': 'Xanh đậm',
      purple: 'Màu tím',
      red: 'Màu đỏ',
      volcano: 'Màu dung nham',
      yellow: 'Màu vàng',
    },
  },
  home: {
    menu: 'Trang chủ',
  },
  errors: {
    backToHome: 'Trở về trang chủ',
    403: `Xin lỗi, bạn không có quyền truy cập vào trang này`,
    404: 'Xin lỗi, trang bạn truy cập không tồn tại',
    500: 'Xin lỗi, máy chủ đang báo lỗi',
    forbidden: {
      message: 'Trang cấm',
    },
    validation: {
      message: 'Xảy ra lỗi',
    },
    defaultErrorMessage: 'Ops, một lỗi xảy ra',
  },

  validation: {
    mixed: {
      default: '${path} không có hiệu lực',
      required: '${path} được yêu cầu',
      oneOf:
        '${path} phải là một trong các giá trị sau: ${values}',
      notOneOf:
        '${path} không được là một trong các giá trị sau: ${values}',
      notType: ({ path, type, }) => {
        return `${path} phải là một ${type}`;
      },
    },
    string: {
      length:
        '${path} phải chính xác ${length} ký tự',
      min: '${path} phải có ít nhất ${min} ký tự',
      max: '${path} phải có nhiều nhất ${max} ký tự',
      matches:
        '${path} phải phù hợp với những điều sau đây: "${regex}"',
      email: '${path} phải là một email hợp lệ',
      url: '${path} phải là một URL hợp lệ',
      trim: '${path} phải là một chuỗi đã được cắt hai khoảng trắng đầu',
      lowercase: '${path} phải là một chuỗi chữ thường',
      uppercase: '${path} phải là một chuỗi chữ hoa',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} phải lớn hơn hoặc bằng ${min}',
      max: '${path} phải nhỏ hơn hoặc bằng ${max}',
      lessThan: '${path} phải nhỏ hơn ${less}',
      moreThan: '${path} phải lớn hơn ${more}',
      notEqual: '${path} phải không bằng ${notEqual}',
      positive: '${path} phải là một số dương',
      negative: '${path} Phải là một số dương âm',
      integer: '${path} phải là số nguyên',
      invalid: '${path} phải là một số',
    },
    date: {
      min: '${path} phải muộn hơn ${min}',
      max: '${path} phải sớm hơn ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} không thể có các khóa không được chỉ định trong hình dạng đối tượng',
    },
    array: {
      min: '${path} phải có ít nhất ${min} lần',
      max:
        '${path} phải có ít hơn hoặc bằng ${max} lần',
    },
  },

  fileUploader: {
    upload: 'Tải lên',
    image: 'Bạn phải tải lên một hình ảnh',
    size: 'Tệp quá lớn. Kích thước tối đa được phép là {0}',
    formats: `Định dạng không hợp lệ. Phải là '{0}'.`,
  },
  importer: {
    line: 'Hàng',
    status: 'Trạng thái',
    pending: 'Đang chờ xử lý',
    imported: 'Đã được nhập',
    error: 'Lỗi',
    total: `{0} đã được nhập, {1} đang chờ xử lý và {2} với lỗi`,
    importedMessage: `Đang được xử lý {0} của {1}.`,
    noNavigateAwayMessage:
      'Không chuyển khỏi trang này hoặc quá trình nhập sẽ bị dừng.',
    completed: {
      success:
        'Nhập thành công. Tất cả các hàng đã được nhập thành công.',
      someErrors:
        'Quá trình xử lý hoàn tất, nhưng một số hàng không thể nhập được.',
      allErrors: 'Nhập thất bại. Không có hàng nào hợp lệ.',
    },
    form: {
      downloadTemplate: 'Tải mẫu',
      hint:
        'Nhấp hoặc kéo tệp vào khu vực này để tiếp tục',
    },
    list: {
      discardConfirm:
        'Bạn có chắc không? Dữ liệu không được nhập sẽ bị mất.',
    },
    errors: {
      invalidFileEmpty: 'Các tập tin trống',
      invalidFileExcel:
        'Chỉ cho phép các tệp excel (.xlsx)',
      invalidFileUpload:
        'Tập tin không hợp lệ. Hãy chắc chắn rằng bạn đang sử dụng phiên bản cuối cùng của mẫu.',
      importHashRequired: 'Nhập Hash là bắt buộc',
      importHashExistent: 'Dữ liệu đã được nhập',
    },
  },

  autocomplete: {
    loading: 'Đang tải...',
  },

  imagesViewer: {
    noImage: 'Không có hình ảnh',
  },
};

export default ptBR;
