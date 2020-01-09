const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
  },

  app: {
    title: 'Library',
  },

  entities: {
    loan: {
      name: 'loan',
      label: 'Loans',
      menu: 'Loans',
      exporterFileName: 'loan_export',
      list: {
        menu: 'Loans',
        title: 'Loans',
      },
      emailAll: {
        label: 'Send Reminder via Email',
        success: 'Email(s) sent successfully',
      },
      create: {
        success: 'Loan saved successfully',
      },
      update: {
        success: 'Loan saved successfully',
      },
      destroy: {
        success: 'Loan deleted successfully',
      },
      destroyAll: {
        success: 'Loan(s) deleted successfully',
      },
      edit: {
        title: 'Edit Loan',
      },
      fields: {
        id: 'Id',
        book: 'Book',
        member: 'Member',
        issueDateRange: 'Issue Date',
        issueDate: 'Issue Date',
        dueDateRange: 'Due Date',
        dueDate: 'Due Date',
        returnDateRange: 'Return Date',
        returnDate: 'Return Date',
        status: 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          inProgress: 'In Progress',
          overdue: 'Overdue',
          closed: 'Closed',
        },
      },
      new: {
        title: 'New Loan',
      },
      view: {
        title: 'View Loan',
      },
      importer: {
        title: 'Import Loans',
        fileName: 'loan_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
      validation: {
        bookOutOfStock: 'Sorry, this book is out of stock.',
      },
    },

    book: {
      name: 'book',
      label: 'Books',
      menu: 'Books',
      exporterFileName: 'book_export',
      list: {
        menu: 'Books',
        title: 'Books',
      },
      create: {
        success: 'Book saved successfully',
      },
      update: {
        success: 'Book saved successfully',
      },
      destroy: {
        success: 'Book deleted successfully',
      },
      destroyAll: {
        success: 'Book(s) deleted successfully',
      },
      edit: {
        title: 'Edit Book',
      },
      fields: {
        id: 'Id',
        isbn: 'ISBN',
        title: 'Title',
        author: 'Author',
        publishingCompany: 'Publishing',
        // loanPeriodInDays: 'Loan Period (In Days)',
        numberOfCopiesRange: 'Number Of Copies',
        numberOfCopies: 'Number Of Copies',
        stockRange: 'In Stock',
        stock: 'In Stock',
        images: 'Images',
        status: 'Status',
        category: 'Category',
        topic: 'Topic',
        type: 'Type',
        location: 'Location',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        categoryBook: 'Category/Book',
        categories: 'Categories',
        series: 'Series',
        topicBook: 'Topic/Book',
        typeBook: 'Type/Book',
        locationBook: 'Location/Book',
        topics: 'Topics',
        types: 'Types',
        locations: 'Locations',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          available: 'Available',
          unavailable: 'Unavailable',
        },
        // category: {
        //   computersAndTech: 'Computers And Technologies',
        //   history: 'History',
        //   entertainment: 'Entertainment',
        //   medical: 'Medical',
        //   socialSciences: 'Social Sciences',
        //   sports: 'Sports',
        //   travel: 'Travel',
        //   action: 'Action',
        //   adventure: 'Adventure',
        //   comic: 'Comic',
        //   crime: 'Crime',
        //   drama: 'Drama',
        //   fantasy: 'Fantasy',
        //   horror: 'Horror',
        //   shortStory: 'ShortStory',
        // },
      },
      new: {
        title: 'New Book',
      },
      view: {
        title: 'View Book',
      },
      importer: {
        title: 'Import Books',
        fileName: 'book_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    librarian: {
      label: 'Librarian',
      description: 'Full access to all resources',
    },
    member: {
      label: 'Member',
      description: 'Member access',
    },
  },

  types: {
    book: {
      label: 'Book',
      description: '',
    },
    newspaper: {
      label: 'Newspaper',
      description: '',
    },
    journal: {
      label: 'Journal',
      description: '',
    },
    dissertation: {
      label: 'Dissertation',
      description: '',
    },
  },


  categories: {
    computersAndTech: {
      label: 'Computers And Technologies',
      description: '',
    },
    history: {
      label: 'History',
      description: '',
    },
    entertainment: {
      label: 'Entertainment',
      description: '',
    },
    medical: {
      label: 'Medical',
      description: '',
    },
    socialSciences: {
      label: 'Social Sciences',
      description: '',
    },
    sports: {
      label: 'Sports',
      description: '',
    },
    travel: {
      label: 'Travel',
      description: '',
    },
    action: {
      label: 'Action',
      description: '',
    },
    adventure: {
      label: 'Adventure',
      description: 'Exciting Adventure',
    },
    comic: {
      label: 'Comic',
      description: '',
    },
    crime: {
      label: 'Crime',
      description: '',
    },
    drama: {
      label: 'Drama',
      description: '',
    },
    fantasy: {
      label: 'Fantasy',
      description: '',
    },
    horror: {
      label: 'Horror',
      description: '',
    },
    shortStory: {
      label: 'Short Story',
      description: '',
    },
  },

  topics: {
    love: {
      label: 'Love',
      description: '',
    },
    death: {
      label: 'Death',
      description: '',
    },
    godVsEvil: {
      label: 'God .Vs Evil',
      description: '',
    },
    comingOfAge: {
      label: 'Coming Of Age',
      description: '',
    },
    powerAndCorruption: {
      label: 'Power And Corruption',
      description: '',
    },
    survival: {
      label: 'Survival',
      description: '',
    },
    courageAndHeroism: {
      label: 'Courage And Heroism',
      description: '',
    },
    prejudice: {
      label: 'Prejudice',
      description: '',
    },
    individualAndSociety: {
      label: 'Individual And Society',
      description: '',
    },
    war: {
      label: 'War',
      description: '',
    },
    
  },

  locations: {
    tthl_floor_1_bookshelf_no_1: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 1',
      description: '',
    },
    tthl_floor_1_bookshelf_no_2: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 2',
      description: '',
    },
    tthl_floor_1_bookshelf_no_3: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 3',
      description: '',
    },
    tthl_floor_1_bookshelf_no_4: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 4',
      description: '',
    },
    tthl_floor_1_bookshelf_no_5: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 5',
      description: '',
    },
    tthl_floor_1_bookshelf_no_6: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 6',
      description: '',
    },
    tthl_floor_1_bookshelf_no_7: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 7',
      description: '',
    },
    tthl_floor_1_bookshelf_no_8: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 8',
      description: '',
    },
    tthl_floor_1_bookshelf_no_9: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 9',
      description: '',
    },
    tthl_floor_1_bookshelf_no_10: {
      label: 'CTU Learning Resource Center, 1st Floor, Bookshelf No. 10',
      description: '',
    },
    tthl_floor_2_bookshelf_no_1: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 1',
      description: '',
    },
    tthl_floor_2_bookshelf_no_2: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 2',
      description: '',
    },
    tthl_floor_2_bookshelf_no_3: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 3',
      description: '',
    },
    tthl_floor_2_bookshelf_no_4: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 4',
      description: '',
    },
    tthl_floor_2_bookshelf_no_5: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 5',
      description: '',
    },
    tthl_floor_2_bookshelf_no_6: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 6',
      description: '',
    },
    tthl_floor_2_bookshelf_no_7: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 7',
      description: '',
    },
    tthl_floor_2_bookshelf_no_8: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 8',
      description: '',
    },
    tthl_floor_2_bookshelf_no_9: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 9',
      description: '',
    },
    tthl_floor_2_bookshelf_no_10: {
      label: 'CTU Learning Resource Center, 2st Floor, Bookshelf No. 10',
      description: '',
    },
  },

  // items: {
  //   fields: {
  //     itemBook: 'Item Book',
  //   },
  // },

  iam: {
    title: 'Users',
    menu: 'Users',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own librarian permission`,
    },
  },

  user: {
    fields: {
      id: 'USER ID',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'EMAIL ADDRESS',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'FIRST NAME',
      lastName: 'LAST NAME',
      status: 'STATUS',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'CREATE AT',
      updatedAt: 'UPDATED AT',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      loanPeriodInDays: 'Loan Period (In Days)',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
